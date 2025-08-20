"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";   // <-- added useEffect

export default function Header(){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);  // <-- track scroll state

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Nav = ({className=""}) => (
    <nav className={`flex items-center gap-6 ${className}`}>
      <Link href="/portfolio" className="text-sm text-[#0B1220]/70 hover:text-[#0B1220]">Portfolio</Link>
      <Link href="/about" className="text-sm text-[#0B1220]/70 hover:text-[#0B1220]">About</Link>
      <Link href="/contact" className="text-sm text-[#0B1220]/70 hover:text-[#0B1220]">Contact</Link>
      <Link href="/pitch" className="btn-gold text-sm">Pitch</Link>
    </nav>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_6px_20px_rgba(0,0,0,.06)]" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* use the WHITE-background logo on a white header */}
          <Image src="/logo-white.png" alt="Narrative Capital" width={40} height={40} priority />
          <span className="font-semibold text-[#0B1220]">Narrative Capital</span>
        </Link>

        <div className="hidden md:block"><Nav/></div>

        <button
          className="md:hidden text-[#0B1220]/80"
          aria-label="Toggle menu"
          onClick={()=>setOpen(v=>!v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white">
          <div className="container py-4">
            <Nav className="flex-col items-start gap-4"/>
          </div>
        </div>
      )}
    </header>
  );
}
