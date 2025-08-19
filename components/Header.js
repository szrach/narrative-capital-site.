"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const Nav = ({ className = "" }) => (
    <nav className={`flex items-center gap-6 ${className}`}>
      <Link href="/portfolio" className="text-sm text-heading/70 hover:text-heading">Portfolio</Link>
      <Link href="/about" className="text-sm text-heading/70 hover:text-heading">About</Link>
      <Link href="/contact" className="text-sm text-heading/70 hover:text-heading">Contact</Link>
      <Link href="/pitch" className="btn btn-gold text-sm">Pitch</Link>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* on white background, use your white-background logo */}
          <Image src="/logo-white.png" alt="Narrative Capital" width={36} height={36} priority />
          <span className="font-semibold text-heading">Narrative Capital</span>
        </Link>

        {/* desktop */}
        <div className="hidden md:block">
          <Nav />
        </div>

        {/* mobile */}
        <button
          className="md:hidden text-heading/80"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4">
            <Nav className="flex-col items-start gap-4" />
          </div>
        </div>
      )}
    </header>
  );
}
