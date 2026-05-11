import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/constants";

/**
 * POST /api/newsletter-broadcast
 *
 * Creates a Kit broadcast for the most recent blog post.
 * Protected by CRON_SECRET to prevent unauthorized access.
 *
 * Query params:
 *   ?draft=true  — create as draft instead of scheduling to send
 *
 * Called weekly by a Claude scheduled task.
 */
export async function POST(req: NextRequest) {
  try {
    // Verify authorization
    const authHeader = req.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const kitApiSecret = process.env.KIT_API_SECRET;
    if (!kitApiSecret) {
      return NextResponse.json(
        { error: "KIT_API_SECRET not configured" },
        { status: 500 }
      );
    }

    // Get the most recent blog post
    const posts = getAllPosts();
    if (posts.length === 0) {
      return NextResponse.json({ error: "No blog posts found" }, { status: 404 });
    }

    const latest = posts[0];
    const postDate = new Date(latest.date);
    const now = new Date();
    const daysSincePublished = Math.floor(
      (now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Only create broadcast for posts published within the last 8 days
    if (daysSincePublished > 8) {
      return NextResponse.json({
        skipped: true,
        reason: `Latest post "${latest.title}" is ${daysSincePublished} days old — no new content this week.`,
      });
    }

    // Check if a broadcast already exists for this post
    const existingRes = await fetch(
      `https://api.convertkit.com/v3/broadcasts?api_secret=${kitApiSecret}`
    );
    if (existingRes.ok) {
      const { broadcasts } = await existingRes.json();
      const alreadySent = broadcasts.some(
        (b: { subject: string }) =>
          b.subject === latest.title ||
          b.subject === `${latest.title} — The Briefing`
      );
      if (alreadySent) {
        return NextResponse.json({
          skipped: true,
          reason: `Broadcast for "${latest.title}" already exists.`,
        });
      }
    }

    const postUrl = `${SITE.url}/blog/${latest.slug}`;
    const isDraft = req.nextUrl.searchParams.get("draft") === "true";

    // Build the email content
    const subject = latest.title;
    const previewText = latest.excerpt.slice(0, 140);

    const content = `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 580px; margin: 0 auto; color: #1a1a1a; line-height: 1.7;">
  <p style="font-size: 15px; color: #666; margin-bottom: 24px;">
    This week on <strong>The Briefing</strong> —
  </p>

  <h1 style="font-size: 26px; font-weight: bold; color: #111; margin-bottom: 12px; line-height: 1.3;">
    ${latest.title}
  </h1>

  <p style="font-size: 14px; color: #888; margin-bottom: 20px;">
    ${latest.readTime} &nbsp;·&nbsp; ${latest.category}
  </p>

  <p style="font-size: 16px; color: #333; margin-bottom: 28px;">
    ${latest.excerpt}
  </p>

  <a href="${postUrl}" style="display: inline-block; background-color: #C8A55C; color: #111; text-decoration: none; padding: 14px 32px; font-size: 14px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">
    Read the Full Article →
  </a>

  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 36px 0;" />

  <p style="font-size: 13px; color: #999; line-height: 1.6;">
    You're receiving The Briefing because you subscribed at
    <a href="${SITE.url}" style="color: #C8A55C;">savageexecutive.com</a>.
    Weekly insights for leaders who build to last.
  </p>
</div>`.trim();

    // Schedule to send 2 minutes from now, or leave as draft
    const sendAt = isDraft
      ? undefined
      : new Date(now.getTime() + 2 * 60 * 1000).toISOString();

    const broadcastPayload: Record<string, unknown> = {
      api_secret: kitApiSecret,
      subject,
      content,
      description: `The Briefing — ${latest.title}`,
      public: true,
    };

    if (sendAt) {
      broadcastPayload.send_at = sendAt;
    }

    const kitRes = await fetch("https://api.convertkit.com/v3/broadcasts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(broadcastPayload),
    });

    if (!kitRes.ok) {
      const err = await kitRes.text();
      console.error(`[Newsletter] Kit broadcast create failed (${kitRes.status}):`, err);
      return NextResponse.json(
        { error: "Failed to create broadcast", details: err },
        { status: 502 }
      );
    }

    const { broadcast } = await kitRes.json();

    console.log(
      `[Newsletter] Broadcast created: "${subject}" (ID: ${broadcast.id}, send_at: ${broadcast.send_at || "draft"})`
    );

    return NextResponse.json({
      success: true,
      broadcast: {
        id: broadcast.id,
        subject: broadcast.subject,
        send_at: broadcast.send_at,
        mode: isDraft ? "draft" : "scheduled",
      },
      post: {
        title: latest.title,
        slug: latest.slug,
        url: postUrl,
      },
    });
  } catch (error) {
    console.error("[Newsletter] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
