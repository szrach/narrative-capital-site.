"use client";

export default function Marquee() {
  const items = [
    "Interoperability",
    "Perps",
    "CEX/DEX Bridges",
    "Real‑World Assets",
    "DeFi",
    "Infra",
    "AI x Crypto",
    "Wallet UX",
    "Security",
    "Data",
    "Zero‑Knowledge",
  ];

  return (
    <div className="marquee-wrap">
      <div className="container">
        <div className="marquee-clip relative">
          <div className="marquee-track">
            {/* duplicate once to create a seamless loop */}
            {[...items, ...items].map((t, i) => (
              <span key={i} className="marquee-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
