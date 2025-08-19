// app/page.js
import Link from "next/link";
import Image from "next/image";

function Card({ title, body }) {
  return (
    <div className="p-6 rounded-2xl bg-[#111114] border border-zinc-800 shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{body}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft gold glow */}
        <div
          className="pointer-events-none absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full"
          style={{
            background: "linear-gradient(135deg,#D4AF37,#F0C04C)",
            filter: "blur(90px)",
            opacity: 0.12,
          }}
        />
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col items-start gap-7 max-w-3xl">
            <Image
              src="/logo-black.png"           // your dark-theme logo
              alt="Narrative Capital"
              width={72}
              height={72}
              priority
            />
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              We back builders with capital and go‑to‑market clarity.
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              Founder‑focused micro VC run by builders and operators. We help
              teams prepare for growth, partnerships, and market entry — without
              the noise.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/pitch"
                className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-semibold hover:opacity-90"
              >
                Pitch Us
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-xl border border-zinc-700 text-white hover:bg-white/10"
              >
                See Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="max-w-5xl mx-auto px-4 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How we help</h2>
        <p className="mt-2 text-white/70">
          Practical support that moves the needle — no promises, no fluff.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card
            title="Exchange readiness"
            body="Structure, compliance, and launch planning so you’re taken seriously when the timing is right."
          />
          <Card
            title="Community & distribution"
            body="Get seen by the right people early — builders, communities, and partners."
          />
          <Card
            title="Partnerships"
            body="Introductions across ecosystems, infrastructure, and networks that matter."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-5xl mx-auto px-4 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Our process</h2>
        <p className="mt-2 text-white/70">Fast, straightforward, respectful of your time.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <Card title="1. Pitch" body="Send your deck and what you need in the next 60 days." />
          <Card title="2. Triage" body="We reply quickly and set a working session if there’s a fit." />
          <Card title="3. Decision" body="Fast yes/no with clear terms. No endless loops." />
          <Card title="4. Launch plan" body="Distribution, partner targets, and readiness tasks." />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111114]">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h3 className="text-3xl font-semibold">Founder?</h3>
          <p className="mt-2 text-white/70">We actually reply.</p>
          <Link
            href="/pitch"
            className="inline-block mt-6 px-8 py-4 rounded-xl bg-[#D4AF37] text-black font-semibold hover:opacity-90"
          >
            Pitch Us
          </Link>
        </div>
      </section>
    </main>
  );
}
