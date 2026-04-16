import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy Resend client — avoids build-time failures when env vars are missing
let _resend: Resend | null = null;
function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

/**
 * POST /api/newsletter/subscribe
 * Body: { email: string }
 *
 * Adds an email to the Kaleidos Resend audience.
 */
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!AUDIENCE_ID) {
      console.error("RESEND_AUDIENCE_ID is not set");
      return NextResponse.json(
        { error: "Newsletter service is not configured" },
        { status: 503 }
      );
    }

    const resend = getResend();

    const { data, error } = await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
    });

    if (error) {
      console.error("Resend subscribe error:", error);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: "Inscricao realizada com sucesso!",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to subscribe";
    const status = message.includes("RESEND_API_KEY") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
