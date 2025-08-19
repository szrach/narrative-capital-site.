import Link from "next/link";
import Image from "next/image";

function Card({ title, body, delay=0 }) {
  return (
    <div className={`card p-6 reveal ${delay===1?'reveal-delay-1':delay===2?'reveal-delay-2':delay===3?'reveal-delay-3':''}`}>
      <h3 className="text-lg font-semibold text-[#0B1220]">{title}</h3>
      <p className="mt-2">{body}</p>
    </div>
  );
}

export default function HomePage(){
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-white">
        {/* subtle gold vignette on the right */}
        <div className="pointer-events-none absolute top-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full gold-vignette -z-10" />
        <div className="container py-18 md:py-24">
          <div className="max-w-3xl reveal">
            {/* keep logo small but crisp */}
            <Image src="/logo-white.png" alt="Narrative Capital" width={56} height={56} className="mb-6" priority />
            <h1 className="h1">We back builders with capital and go‑to‑market clarity.</h1>
            <p className="lead mt-6">
              Founder‑focused micro VC run by builders and operators. We help teams prepare for growth,
              partnerships, and market entry — without the noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 reveal reveal-delay-1">
              <Link href="/pitch" className="btn-gold">Pitch Us</Link>
              <Link href="/portfolio" className="btn-ghost">See Portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="bg-[#F8F9FB]">
        <div className="container py-16 md:py-20">
          <h2 className="h2 reveal">How we help</h2>
          <p className="mt-2 reveal reveal-delay-1">Practical support that moves the needle — no promises, no fluff.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card
              title="Exchange readiness"
              body="Structure, compliance, and launch planning so you’re taken seriously when the timing is right."
            />
            <Card
              title="Community & distribution"
              body="Get seen by the right people early — builders, communities, and partners."
              delay={1}
            />
            <Card
              title="Partnerships"
              body="Introductions across ecosystems, infrastructure, and networks that matter."
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <h2 className="h2 reveal">Our process</h2>
          <p className="mt-2 reveal reveal-delay-1">Fast, straightforward, respectful of your time.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <Card title="1. Pitch" body="Send your deck and what you need in the next 60 days." />
            <Card title="2. Triage" body="We reply quickly and set a working session if there’s a fit." delay={1} />
            <Card title="3. Decision" body="Fast yes/no with clear terms. No endless loops." delay={2} />
            <Card title="4. Launch plan" body="Distribution, partner targets, and readiness tasks." delay={3} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F9FB]">
        <div className="container py-20 text-center">
          <h3 className="text-3xl font-semibold text-[#0B1220] reveal">Founder?</h3>
          <p className="mt-2 reveal reveal-delay-1">We actually reply.</p>
          <div className="mt-6 reveal reveal-delay-2">
            <Link href="/pitch" className="btn-gold">Pitch Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
