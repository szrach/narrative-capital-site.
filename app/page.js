import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";

function Card({ title, body, delay=0 }) {
  return (
    <Reveal delay={delay}>
      <div className="card-neo p-6">
        <h3 className="text-lg font-semibold text-[#0B1220]">{title}</h3>
        <p className="mt-2 text-[15px] text-[#4B5563]">{body}</p>
      </div>
    </Reveal>
  );
}

export default function HomePage(){
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-white">
        <div className="pointer-events-none absolute top-[-140px] right-[-140px] h-[520px] w-[520px] rounded-full gold-vignette -z-10" />
        <div className="container py-14 md:py-20">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              {/* Left: text */}
              <div className="max-w-3xl">
                <div className="mb-6">
                  <Image src="/logo-white.png" alt="Narrative Capital" width={56} height={56} priority />
                </div>
                <h1 className="h1">We back builders with capital and go‑to‑market clarity.</h1>
                <p className="lead mt-6">
                  Founder‑focused micro VC run by builders and operators. We help teams prepare for growth,
                  partnerships, and market entry — without the noise.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/pitch" className="btn btn-gold">Pitch Us</Link>
                  <Link href="/portfolio" className="btn btn-ghost">See Portfolio</Link>
                </div>
              </div>

              {/* Right: abstract card */}
              <div className="w-full md:max-w-sm md:translate-y-2">
                <div className="card-neo p-5">
                  <div className="text-sm text-[#6B7280]">Current focus</div>
                  <ul className="mt-3 space-y-2 text-[#0B1220]">
                    <li>• AI x Crypto data products</li>
                    <li>• Wallet UX and onboarding</li>
                    <li>• Perps & liquidity infra</li>
                    <li>• Compliance‑aware token design</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-white">
        <Marquee />
      </section>

      {/* HOW WE HELP */}
      <section className="bg-[#F8F9FB]">
        <div className="container py-16 md:py-20">
          <Reveal><h2 className="h2">How we help</h2></Reveal>
          <Reveal delay={80}><p className="mt-2">Practical support that moves the needle — no promises, no fluff.</p></Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card
              title="Exchange readiness"
              body="Structure, compliance, and launch planning so you’re taken seriously when the timing is right."
            />
            <Card
              title="Community & distribution"
              body="Get seen by the right people early — builders, communities, and partners."
              delay={90}
            />
            <Card
              title="Partnerships"
              body="Introductions across ecosystems, infrastructure, and networks that matter."
              delay={180}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <Reveal><h2 className="h2">Our process</h2></Reveal>
          <Reveal delay={80}><p className="mt-2">Fast, straightforward, respectful of your time.</p></Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <Card title="1. Pitch" body="Send your deck and what you need in the next 60 days." />
            <Card title="2. Triage" body="We reply quickly and set a working session if there’s a fit." delay={90} />
            <Card title="3. Decision" body="Fast yes/no with clear terms. No endless loops." delay={180} />
            <Card title="4. Launch plan" body="Distribution, partner targets, and readiness tasks." delay={270} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F9FB]">
        <div className="container py-20 text-center">
          <Reveal><h3 className="text-3xl font-semibold text-[#0B1220]">Founder?</h3></Reveal>
          <Reveal delay={80}><p className="mt-2">We actually reply.</p></Reveal>
          <Reveal delay={160}><div className="mt-6"><Link href="/pitch" className="btn btn-gold">Pitch Us</Link></div></Reveal>
        </div>
      </section>
    </main>
  );
}
