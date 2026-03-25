import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/feedback — receive a session review submission.
 *
 * Storage strategy (in priority order):
 * 1. Google Sheets via Apps Script webhook (set GOOGLE_APPS_SCRIPT_URL env var)
 * 2. Fallback: log to stdout (visible in Vercel logs) — always happens
 *
 * To set up Google Sheets:
 * 1. Create a Google Sheet with headers matching the payload keys
 * 2. Go to Extensions > Apps Script
 * 3. Paste this script:
 *
 *    function doPost(e) {
 *      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *      var data = JSON.parse(e.postData.contents);
 *      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
 *      var row = headers.map(function(h) { return data[h] || ""; });
 *      sheet.appendRow(row);
 *      return ContentService.createTextOutput(JSON.stringify({ result: "ok" }))
 *        .setMimeType(ContentService.MimeType.JSON);
 *    }
 *
 * 4. Deploy as web app (execute as you, access: anyone)
 * 5. Copy the URL and set it as GOOGLE_APPS_SCRIPT_URL in your env vars
 */
export async function POST(request: NextRequest) {
  // Verify auth cookie
  const authCookie = request.cookies.get("fb_auth");
  if (authCookie?.value !== "1") {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Basic validation
  if (!payload["Trainer ID"] || !payload["User ID"] || !payload["Date"]) {
    return NextResponse.json(
      { error: "Missing required fields (Trainer ID, User ID, Date)" },
      { status: 400 }
    );
  }

  // Always log (visible in Vercel function logs / terminal)
  console.log("[feedback]", JSON.stringify(payload));

  // Try Google Sheets webhook
  const sheetsUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
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
