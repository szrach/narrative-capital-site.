"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    if (payload.website) return; // honeypot

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
    } catch {
      setStatus({ state: "error", msg: "Something went wrong. Try again." });
    }
  }

  return (
    <main>
      {/* Top intro with subtle vignette */}
      <section className="relative bg-white">
        <div className="pointer-events-none absolute left-1/2 top-[-60px] h-[360px] w-[360px] -translate-x-1/2 rounded-full gold-vignette opacity-70" />
        <div className="container relative z-10 py-12 md:py-16">
          <h1 className="h2">Contact</h1>
          <p className="mt-2 text-[#4B5563] max-w-2xl">
            Founders: shortest path is the{" "}
            <Link href="/pitch" className="underline">Pitch</Link> form.
            For general inquiries, use this form or email{" "}
            <a href="mailto:contact@narrative.capital" className="underline">
              contact@narrative.capital
            </a>.
          </p>
        </div>
      </section>

      {/* Content two-column */}
      <section className="bg-[#F8F9FB]">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_minmax(280px,360px)]">
            {/* Form card */}
            <div className="card-neo p-6 md:p-8 bg-white">
              <form onSubmit={onSubmit} className="space-y-5">
                {/* honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>

                <Field label="Company / Project" name="company" />
                <Field label="Subject" name="subject" />

                <FieldTextarea label="Message" name="message" rows={6} required />

                <div className="pt-1 flex items-center gap-3">
                  <button disabled={status.state === "loading"} className="btn btn-gold">
                    {status.state === "loading" ? "Sending…" : "Send"}
                  </button>
                  {status.msg && (
                    <span
                      className={`text-sm ${
                        status.state === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {status.msg}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#9CA3AF] pt-2">
                  For information purposes only. Nothing here is an offer to sell securities or investment advice.
                </p>
              </form>
            </div>

            {/* Aside / other ways */}
            <aside className="space-y-6">
              <div className="card-neo p-6 bg-white">
                <h3 className="text-[18px] font-semibold text-[#0B1220]">Other ways to reach us</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-sm">
                    contact@narrative.capital
                  </span>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-sm hover:bg-black/[0.03]"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-sm hover:bg-black/[0.03]"
                  >
                    LinkedIn
                  </a>
                </div>
                <p className="mt-4 text-sm text-[#6B7280]">
                  We typically reply within 24–48h on weekdays.
                </p>
              </div>

              <div className="card-neo p-6 bg-white">
                <h3 className="text-[18px] font-semibold text-[#0B1220]">Pitch us instead?</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  If you’re raising or want operator feedback, the Pitch form routes fastest to the team.
                </p>
                <div className="mt-4">
                  <Link href="/pitch" className="btn btn-ghost">Go to Pitch</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- tiny field components for consistency ---------- */
function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="block text-sm text-[#6B7280] mb-1">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2.5 text-[15px]
                   focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
      />
    </label>
  );
}

function FieldTextarea({ label, name, rows = 6, required = false }) {
  return (
    <label className="block">
      <span className="block text-sm text-[#6B7280] mb-1">{label}</span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2.5 text-[15px]
                   focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
      />
    </label>
  );
}
