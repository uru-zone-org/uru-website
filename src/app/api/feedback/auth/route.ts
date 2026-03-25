import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "fb_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getPassword(): string {
  return process.env.FEEDBACK_PASSWORD || "uru-beta-2026";
}

/** GET — check if the user has a valid auth cookie */
export async function GET(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_NAME);

  if (cookie?.value === "1") {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
}

/** POST — verify password and set auth cookie */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password || password !== getPassword()) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });

    response.cookies.set(COOKIE_NAME, "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
