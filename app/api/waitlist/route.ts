import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, churchName } = await request.json();

    if (!email || !churchName) {
      return NextResponse.json(
        { error: "Email and church name are required" },
        { status: 400 }
      );
    }

    // TODO: Connect to email service (ConvertKit, Mailchimp, etc.)
    // For now, log to server console
    console.log("New waitlist signup:", { email, churchName, date: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
