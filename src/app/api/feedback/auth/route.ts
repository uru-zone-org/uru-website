import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "fb_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** Map passwords to roles/redirect targets */
const PASSWORD_MAP: Record<string, string> = {
  [process.env.FEEDBACK_PASSWORD || "uru-beta-2026"]: "scoreboard",
  [process.env.FEEDBACK_PASSWORD_TRAINER || "uru-beta-trainer"]: "trainer",
  [process.env.FEEDBACK_PASSWORD_USER || "uru-beta-user"]: "user",
};

function getRoleForPassword(password: string): string | null {
  return PASSWORD_MAP[password] ?? null;
}

const VALID_ROLES = ["scoreboard", "trainer", "user"];

/** GET — check if the user has a valid auth cookie */
export async function GET(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE_NAME);

  if (cookie?.value && VALID_ROLES.includes(cookie.value)) {
    return NextResponse.json({ ok: true, role: cookie.value });
  }

  // Clear stale/invalid cookies (e.g. old "1" value)
  const response = NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  if (cookie?.value) {
    response.cookies.delete(COOKIE_NAME);
  }
  return response;
}

/** POST — verify password and set auth cookie with role */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    const role = getRoleForPassword(password || "");
    if (!role) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true, role });

    response.cookies.set(COOKIE_NAME, role, {
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
