import Link from "next/link";

const footerLinks = [
  { label: "Executive Partnership", href: "/executive-partnership" },
  { label: "CEO of Your Cashflow", href: "/ceo-cashflow" },
  { label: "Ministry Consulting", href: "/ministry" },
  { label: "Speaking", href: "/speaking" },
  { label: "Podcast", href: "/podcast" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="text-lg tracking-[0.15em] font-semibold text-white uppercase font-display">
              SAVAGE
            </span>
            <span className="text-lg italic text-gold font-display">
              Executive
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-border/30">
          <p className="text-sm text-white/40 text-center">
            &copy; {new Date().getFullYear()} Savage Executive. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
