import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/feedback — receive a trainer or user session submission.
 *
 * The client sends directly to Google Sheets via the Apps Script URL.
 * This API route serves as a server-side backup and logging endpoint.
 * Falls back to the new scoring system Apps Script URL if no env var is set.
 */

const DEFAULT_GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbznM9fTzwGMaF4kmDeAhfzq8A0puhkk756ZQKNVIJ2LqXVd4wodIKEWz9tHSHesJqGHAA/exec";
export async function POST(request: NextRequest) {
  // Verify auth cookie
  const authCookie = request.cookies.get("fb_auth");
  const validRoles = ["scoreboard", "trainer", "user", "1"];
  if (!authCookie?.value || !validRoles.includes(authCookie.value)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Basic validation — supports both old format and new scoring system format
  const hasOldFormat = payload["Trainer ID"] && payload["User ID"] && payload["Date"];
  const hasNewFormat = payload.trainer_id && payload.user_id && payload.date;
  if (!hasOldFormat && !hasNewFormat) {
    return NextResponse.json(
      { error: "Missing required fields (trainer_id, user_id, date)" },
      { status: 400 }
    );
  }

  // Always log (visible in Vercel function logs / terminal)
  console.log("[feedback]", JSON.stringify(payload));

  // Forward to Google Sheets (new scoring system sheet)
  const sheetsUrl = process.env.GOOGLE_APPS_SCRIPT_URL || DEFAULT_GOOGLE_SCRIPT_URL;
  if (sheetsUrl) {
    try {
      // Google Apps Script processes data on the initial POST then returns a 302.
      // Use redirect: "manual" — a 302 means the data was accepted.
      const sheetsRes = await fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "manual",
      });

      if (sheetsRes.status === 302 || sheetsRes.status === 200) {
        console.log("[feedback] Google Sheets: OK");
      } else {
        console.error("[feedback] Google Sheets error:", sheetsRes.status);
      }
    } catch (err) {
      console.error("[feedback] Google Sheets fetch error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
