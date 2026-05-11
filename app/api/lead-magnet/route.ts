import { NextRequest, NextResponse } from "next/server";

// Kit form ID — form subscribe endpoint works on the free plan
const KIT_FORM_ID = 9430425;

// Tag IDs in Kit (Savage Executive account)
const TAG_IDS: Record<string, number> = {
  scorecard: 19502803,
  "blog-slide-up": 19502804,
  "playbook-homepage": 19502805,
  "playbook-blog-cta": 19502806,
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, source, score } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const kitApiKey = process.env.KIT_API_KEY;

    if (!kitApiKey) {
      console.error("[Kit] KIT_API_KEY not configured");
      return NextResponse.json({
        success: true,
        downloadUrl: "/the-savage-advantage-playbook.pdf",
      });
    }

    // Determine which tag to apply based on source
    const tagId = TAG_IDS[source] || TAG_IDS["playbook-homepage"];

    // Subscribe via Kit form endpoint (free plan compatible)
    const kitRes = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: kitApiKey,
          email,
          first_name: name,
          tags: [tagId],
          ...(score !== undefined && {
            fields: {
              scorecard_score: String(score),
            },
          }),
        }),
      }
    );

    if (!kitRes.ok) {
      const err = await kitRes.text();
      console.error(`[Kit API] Form subscribe failed (${kitRes.status}):`, err);
    } else {
      console.log(
        `[Kit] Subscribed ${email} via form ${KIT_FORM_ID} with tag "${source}" (${tagId})`
      );
    }

    return NextResponse.json({
      success: true,
      downloadUrl: "/the-savage-advantage-playbook.pdf",
    });
  } catch (error) {
    console.error("[Lead Magnet] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
