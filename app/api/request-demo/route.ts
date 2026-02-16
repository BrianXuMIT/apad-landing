import { NextResponse } from "next/server";

type DemoRequestPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
};

function normalizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: DemoRequestPayload;

  try {
    payload = (await request.json()) as DemoRequestPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = normalizeText(payload.name);
  const email = normalizeText(payload.email);
  const phone = normalizeText(payload.phone);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { message: "Please provide name, email, and phone number." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "Email service is not configured. Add RESEND_API_KEY." },
      { status: 500 }
    );
  }

  const recipient =
    process.env.REQUEST_DEMO_RECIPIENT_EMAIL?.trim() || "cto@apadcode.com";
  const fromEmail =
    process.env.REQUEST_DEMO_FROM_EMAIL?.trim() ||
    "APADCode Demo <onboarding@resend.dev>";

  const subject = `New demo request from ${name}`;
  const text = [
    "A new Request Demo form was submitted.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipient],
      subject,
      text,
      reply_to: email,
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = (await resendResponse.text()).slice(0, 500);
    return NextResponse.json(
      {
        message:
          "Unable to send request right now. Please try again in a moment.",
        details: errorBody,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Request sent successfully." });
}
