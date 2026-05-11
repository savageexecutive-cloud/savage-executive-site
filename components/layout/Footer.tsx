import Link from "next/link";
import { SITE } from "@/lib/constants";

const serviceLinks = [
  { label: "Executive Partnership", href: "/services" },
  { label: "Speaking & Keynotes", href: "/speaking" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Podcast", href: "/podcast" },
  { label: "About Steve", href: "/about" },
  { label: "The Savage Advantage Playbook", href: "/the-savage-advantage-playbook.pdf", external: true },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SavageExecutive/podcasts",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/savageexecutive",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="text-lg tracking-[0.15em] font-semibold text-white uppercase font-display">
                SAVAGE
              </span>
              <span className="text-lg italic text-gold font-display">
                Executive
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Clarity. Strategy. Wisdom.
              <br />
              For leaders building things that matter.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/30 hover:text-gold transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-5 font-medium">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-5 font-medium">
              Resources
            </h4>
            <nav className="flex flex-col gap-3">
              {resourceLinks.map((link) =>
                "external" in link && link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-5 font-medium">
              Get Started
            </h4>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              The first step is a conversation about where you are and where you
              want to go.
            </p>
            <a
              href={SITE.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              Book a Clarity Call
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Savage Executive. All rights
            reserved.
          </p>
          <p className="text-xs text-white/20">
            Steve Smith &middot; Fractional COO/CFO
          </p>
        </div>
      </div>
    </footer>
  );
}
