import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/70 bg-black/70 backdrop-blur">
      <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-black.png"   // ✅ dark theme logo
            alt="Narrative Capital"
            width={36}
            height={36}
            priority
          />
          <span className="font-semibold tracking-wide">Narrative Capital</span>
        </Link>

        {/* Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/pitch" className="hover:text-white">Pitch</Link>
        </nav>
      </div>
    </header>
  );
}
