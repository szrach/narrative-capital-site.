"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // simple honeypot
    if (payload.website) return;

    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ state: "success", msg: "Thanks — we’ll get back to you." });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ state: "error", msg: "Something went wrong. Try again." });
    }
  }

  return (
    <main>
      <section className="bg-white">
        <div className="container py-12 md:py-16">
          <h1 className="h2">Contact</h1>
          <p className="mt-2 text-[#4B5563]">
            Founders: shortest path is the <Link href="/pitch" className="underline">Pitch</Link> form.  
            For general inquiries, use this form or email{" "}
            <a href="mailto:contact@narrative.capital" className="underline">contact@narrative.capital</a>.
          </p>

          <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
            {/* honeypot */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#6B7280] mb-1">Your name</label>
                <input name="name" required className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40" />
              </div>
              <div>
                <label className="block text-sm text-[#6B7280] mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#6B7280] mb-1">Company / Project</label>
              <input name="company" className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40" />
            </div>

            <div>
              <label className="block text-sm text-[#6B7280] mb-1">Subject</label>
              <input name="subject" className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40" />
            </div>

            <div>
              <label className="block text-sm text-[#6B7280] mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40" />
            </div>

            <div className="pt-2">
              <button disabled={status.state === "loading"} className="btn btn-gold">
                {status.state === "loading" ? "Sending…" : "Send"}
              </button>
              {status.msg && (
                <span className={`ml-3 text-sm ${status.state === "success" ? "text-green-600" : "text-red-600"}`}>
                  {status.msg}
                </span>
              )}
            </div>
          </form>

          <p className="mt-8 text-xs text-[#9CA3AF]">
            For information purposes only. Nothing here is an offer to sell securities or investment advice.
          </p>
        </div>
      </section>
    </main>
  );
}
