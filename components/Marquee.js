"use client";
const items = [
  "DeFi", "Infra", "AI x Crypto", "Wallet UX", "Security", "Data", "Zero‑Knowledge",
  "Interoperability", "Perps", "CEX/DEX Bridges", "Real‑World Assets"
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.concat(items).map((t, i) => (
          <span key={i} className="marquee-chip">{t}</span>
        ))}
      </div>
    </div>
  );
}
