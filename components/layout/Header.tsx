"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/90 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5 group">
          <span className="text-xl tracking-[0.15em] font-semibold text-white uppercase font-display">
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
              className="text-sm tracking-wider uppercase text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 text-sm tracking-wider uppercase border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-primary-dark border-t border-border/50">
          <div className="px-6 py-4 space-y-4">
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
      )}
    </header>
  );
}
