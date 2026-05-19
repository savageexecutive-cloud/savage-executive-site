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
 * Optional JSON body (all fields optional):
 *   opening        — Personal 1-2 sentence intro from Steve
 *   oneThing       — Quick actionable insight or practice for the week
 *   resourceTitle  — Curated resource name (book, article, tool)
 *   resourceUrl    — URL for the curated resource
 *   resourceNote   — One-line description of why it's worth their time
 *   replyCta       — Closing question to drive reader replies
 *
 * Called weekly by a Claude scheduled task.
 */

interface BriefingBody {
  opening?: string;
  oneThing?: string;
  resourceTitle?: string;
  resourceUrl?: string;
  resourceNote?: string;
  replyCta?: string;
}

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

    // Parse optional body fields for newsletter sections
    let body: BriefingBody = {};
    try {
      const raw = await req.text();
      if (raw.trim()) {
        body = JSON.parse(raw);
      }
    } catch {
      // Body is optional — ignore parse errors
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
    const subject = `${latest.title} — The Briefing`;

    // Truncate excerpt to ~2 sentences for the highlight
    const highlight = latest.excerpt.length > 200
      ? latest.excerpt.slice(0, latest.excerpt.indexOf(".", 120) + 1) || latest.excerpt.slice(0, 200) + "..."
      : latest.excerpt;

    // Newsletter section content (body fields or defaults)
    const opening = body.opening
      || `This week I've been thinking about what separates leaders who sustain from those who just survive. Here's what came to mind.`;

    const oneThing = body.oneThing || "";

    const replyCta = body.replyCta
      || "What's the one thing you're wrestling with as a leader this week? Hit reply — I read every one.";

    // Optional sections — env vars or body fields
    const offerHtml = process.env.BRIEFING_OFFER_HTML || "";
    const resourceTitle = body.resourceTitle || process.env.BRIEFING_RESOURCE_TITLE || "";
    const resourceUrl = body.resourceUrl || process.env.BRIEFING_RESOURCE_URL || "";
    const resourceNote = body.resourceNote || process.env.BRIEFING_RESOURCE_NOTE || "";

    const content = `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 580px; margin: 0 auto; color: #1a1a1a; line-height: 1.7;">

  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
    <tr>
      <td>
        <span style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #C8A55C; font-weight: 600;">The Briefing</span>
        <span style="font-size: 11px; color: #bbb;">&nbsp;&nbsp;|&nbsp;&nbsp;Savage Executive</span>
      </td>
    </tr>
  </table>

  <!-- Personal Opening -->
  <p style="font-size: 16px; color: #333; margin-bottom: 28px;">
    ${opening}
  </p>

  <!-- One Thing This Week -->
  ${oneThing ? `
  <div style="margin-bottom: 32px; padding: 20px 24px; background-color: #faf8f4; border-left: 3px solid #C8A55C;">
    <p style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #C8A55C; font-weight: 600; margin: 0 0 8px 0;">One Thing This Week</p>
    <p style="font-size: 15px; color: #333; margin: 0; font-style: italic;">
      ${oneThing}
    </p>
  </div>
  ` : ""}

  <!-- Featured Article -->
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 8px;">
    <tr>
      <td>
        <span style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #C8A55C; font-weight: 600;">This Week on the Blog</span>
      </td>
    </tr>
  </table>

  <h2 style="font-size: 24px; font-weight: bold; color: #111; margin-bottom: 8px; line-height: 1.3;">
    ${latest.title}
  </h2>

  <p style="font-size: 13px; color: #999; margin-bottom: 12px;">
    ${latest.readTime} &nbsp;&middot;&nbsp; ${latest.category}
  </p>

  <p style="font-size: 15px; color: #333; margin-bottom: 20px;">
    ${highlight}
  </p>

  <a href="${postUrl}" style="display: inline-block; background-color: #C8A55C; color: #111; text-decoration: none; padding: 14px 32px; font-size: 14px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">
    Read the Full Article &rarr;
  </a>

  ${offerHtml ? `
  <div style="margin-top: 36px; padding: 24px; border: 1px solid #e5e5e5; border-left: 3px solid #C8A55C;">
    ${offerHtml}
  </div>
  ` : ""}

  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 36px 0;" />

  <!-- Worth Your Time (curated resource) -->
  ${resourceTitle && resourceUrl ? `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
    <tr>
      <td style="padding-bottom: 8px;">
        <span style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #C8A55C; font-weight: 600;">Worth Your Time</span>
      </td>
    </tr>
    <tr>
      <td>
        <a href="${resourceUrl}" style="font-size: 16px; color: #111; font-weight: 600; text-decoration: none;">
          ${resourceTitle} &rarr;
        </a>
        ${resourceNote ? `<p style="font-size: 14px; color: #666; margin: 4px 0 0 0;">${resourceNote}</p>` : ""}
      </td>
    </tr>
  </table>

  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 0 0 36px 0;" />
  ` : ""}

  <!-- From the Podcast -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding-bottom: 8px;">
        <span style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #C8A55C; font-weight: 600;">From the Podcast</span>
      </td>
    </tr>
    <tr>
      <td style="padding-bottom: 16px;">
        <p style="font-size: 15px; color: #333; margin: 0 0 4px 0; font-weight: 600;">
          The Savage Executive Podcast
        </p>
        <p style="font-size: 13px; color: #888; margin: 0;">
          Leadership and money mastery for faith-driven CEOs and ministry leaders.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://podcasts.apple.com/us/podcast/savage-executive-podcast/id1811171361" style="font-size: 13px; color: #C8A55C; text-decoration: none; margin-right: 16px;">Apple Podcasts</a>
        <a href="https://open.spotify.com/show/2t9V7W1MohExbvUB0KhTzp" style="font-size: 13px; color: #C8A55C; text-decoration: none; margin-right: 16px;">Spotify</a>
        <a href="https://www.youtube.com/@SavageExecutive/podcasts" style="font-size: 13px; color: #C8A55C; text-decoration: none;">YouTube</a>
      </td>
    </tr>
  </table>

  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 36px 0;" />

  <!-- Reply CTA -->
  <p style="font-size: 15px; color: #333; margin-bottom: 8px; font-weight: 600;">
    Before you go —
  </p>
  <p style="font-size: 15px; color: #555; margin-bottom: 28px;">
    ${replyCta}
  </p>

  <!-- Footer -->
  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 0 0 24px 0;" />
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
