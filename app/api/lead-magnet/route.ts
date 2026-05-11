import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // TODO: Wire up Resend for email delivery
    // For now, log the lead and return the download URL
    console.log(`[Lead Magnet] New signup: ${name} <${email}>`);

    // When Resend is configured, this will:
    // 1. Send the PDF via email using Resend
    // 2. Add the subscriber to "The Briefing" audience
    // For now, return success with the direct download link

    return NextResponse.json({
      success: true,
      downloadUrl: "/the-savage-advantage-playbook.pdf",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
