import Link from "next/link";

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
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col items-start justify-center max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-gold">We back builders.</h1>
        <p className="mt-6 text-xl text-white/80">
          Founder-focused micro VC led by builders and operators. 
          We help teams prepare for growth, partnerships, and market entry — without the noise.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/pitch"
            className="px-6 py-3 rounded-xl bg-gold text-black font-semibold hover:opacity-90"
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
      </section>

      {/* How we help */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">How we help</h2>
        <p className="mt-2 text-white/70">
          Practical support that moves the needle — without promises or fluff.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card
            title="Exchange readiness"
            body="Structure, compliance, and launch planning so you’re taken seriously when the time is right."
          />
          <Card
            title="Community & distribution"
            body="Get seen by the right people early — from builders to communities and partners."
          />
          <Card
            title="Partnerships"
            body="Introductions across ecosystems, infrastructure, and networks that matter."
          />
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold">Our process</h2>
        <p className="mt-2 text-white/70">
          Fast, straightforward, respectful of your time.
        </p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <Card title="1. Pitch" body="Send your deck and what you need in the next 60 days." />
          <Card title="2. Triage" body="We respond quickly and set a working session if there’s a fit." />
          <Card title="3. Decision" body="Fast yes/no with clear terms. No endless loops." />
          <Card title="4. Launch plan" body="We outline distribution, partner targets, and readiness tasks." />
        </div>
      </section>

      {/* Call to action */}
      <section className="text-center px-4 py-20 bg-[#111114]">
        <h2 className="text-3xl font-semibold">Founder?</h2>
        <p className="mt-2 text-white/70">We actually reply.</p>
        <div className="mt-6">
          <Link
            href="/pitch"
            className="px-8 py-4 rounded-xl bg-gold text-black font-semibold hover:opacity-90"
          >
            Pitch Us
          </Link>
        </div>
      </section>
    </main>
  );
}
