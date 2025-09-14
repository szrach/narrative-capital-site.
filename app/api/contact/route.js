// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name = "", email = "", company = "", subject = "", message = "" } = body || {};

    // Basic validation
    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // If RESEND_API_KEY is provided, send an email
    const RESEND = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO || "contact@narrative.capital";
    const FROM = process.env.CONTACT_FROM || "Narrative <no-reply@narrative.capital>";

    if (RESEND) {
      const html = `
        <div style="font-family:Inter,system-ui,sans-serif">
          <h3>New contact message</h3>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Company:</b> ${escapeHtml(company)}</p>
          <p><b>Subject:</b> ${escapeHtml(subject)}</p>
          <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `;

      // call Resend HTTP API directly (no dependency needed)
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [TO],
          subject: subject || "New contact message",
          html,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Resend error:", text);
        // still return ok so the UI isn’t blocked
      }
    } else {
      console.log("CONTACT (dev mode):", { name, email, company, subject, message });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// Small HTML escaper
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
