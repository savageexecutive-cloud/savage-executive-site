"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-lg border-b border-border/50 shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5 group">
          <span className="text-xl tracking-[0.15em] font-semibold text-white uppercase font-display transition-colors group-hover:text-gold-light">
            SAVAGE
          </span>
          <span className="text-xl italic text-gold font-display">
            Executive
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm tracking-wider uppercase text-white/70 hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 text-sm tracking-wider uppercase border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 hover:shadow-[0_4px_20px_rgba(201,162,39,0.2)]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 relative z-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[8.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-200 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[8.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary-dark/98 backdrop-blur-lg border-t border-border/50 px-6 py-6 space-y-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm tracking-wider uppercase text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-block px-6 py-2.5 text-sm tracking-wider uppercase border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
