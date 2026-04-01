import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, organization, message } = await request.json();

    if (!name || !email || !organization || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // TODO: Send email notification (SendGrid, Resend, etc.)
    // For now, log to server console
    console.log("New contact inquiry:", {
      name,
      email,
      organization,
      message,
      date: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
