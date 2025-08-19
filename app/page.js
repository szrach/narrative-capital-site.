import Link from "next/link";

function Card({ title, body }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-heading">{title}</h3>
      <p className="mt-2">{body}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* subtle gold vignette */}
          <div className="absolute top-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full"
               style={{ background: "radial-gradient(closest-side, #F2D98A 0%, rgba(212,175,55,0.12) 35%, transparent 65%)" }} />
        </div>

        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="h1">
              We back builders with capital and go‑to‑market clarity.
            </h1>
            <p className="lead mt-6">
              A founder‑focused micro VC run by builders and operators. We help teams prepare for growth,
              partnerships, and market entry — without the noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pitch" className="btn-gold">Pitch Us</Link>
              <Link href="/portfolio" className="btn-ghost">See Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / HOW WE HELP */}
      <section className="bg-surface">
        <div className="container py-16 md:py-20">
          <h2 className="h2">How we help</h2>
          <p className="mt-2">
            Practical support that moves the needle — no promises, no fluff.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
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
        </div>
      </section>

      {/* THESIS */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <h2 className="h2">Thesis</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2 text-body">
            <li className="card p-5">We find momentum before the market admits it.</li>
            <li className="card p-5">Operator‑led capital: clear GTM, not just checks.</li>
            <li className="card p-5">Distribution first: audiences, partners, and communities.</li>
            <li className="card p-5">Compliance‑aware design: exchange‑ready when timing is right.</li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface">
        <div className="container py-16 md:py-20">
          <h2 className="h2">Our process</h2>
          <p className="mt-2">Fast, straightforward, respectful of your time.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <Card title="1. Pitch" body="Send your deck and what you need in the next 60 days." />
            <Card title="2. Triage" body="We reply quickly and set a working session if there’s a fit." />
            <Card title="3. Decision" body="Fast yes/no with clear terms. No endless loops." />
            <Card title="4. Launch plan" body="Distribution, partner targets, and readiness tasks." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container py-20 text-center">
          <h3 className="text-3xl font-semibold text-heading">Founder?</h3>
          <p className="mt-2">We actually reply.</p>
          <div className="mt-6">
            <Link href="/pitch" className="btn-gold">Pitch Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
