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
            {[0, 1].map((row) => (
              <div key={row} className="flex gap-3 pr-3">
                {items.map((t, i) => (
                  <span key={`${row}-${i}`} className="marquee-chip">
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
