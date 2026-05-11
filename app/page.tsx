import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StatBar } from "@/components/ui/StatBar";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { getAllPosts } from "@/lib/blog";
import { SITE, SERVICE_AREAS } from "@/lib/constants";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 pt-32">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary/70 to-primary" />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.4)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6 animate-fade-up">
            Steve Smith &middot; Fractional COO/CFO
          </p>
          <h1 className="max-w-3xl">
            <span className="block text-5xl md:text-7xl font-display text-white leading-tight animate-fade-up delay-100">
              Lead with Clarity.
            </span>
            <span className="block text-5xl md:text-7xl font-display text-white leading-tight animate-fade-up delay-200">
              Build with Strategy.
            </span>
            <span className="block text-5xl md:text-7xl font-display italic text-gradient-gold leading-tight animate-fade-up delay-300">
              Multiply What Matters.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed animate-fade-up delay-400">
            I help faith-driven CEOs and ministry leaders build organizations
            that thrive&mdash;financially sound, operationally excellent, and
            grounded in timeless wisdom.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up delay-500">
            <Button href={SITE.calendlyUrl} external>
              Book a Clarity Call
            </Button>
            <Button href="/services" variant="text">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-600">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-28 bg-surface relative texture-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="slide-left">
              <div>
                <span className="gold-line mb-8" />
                <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                  <span className="text-gradient-gold italic">11 years ago,</span>{" "}
                  I took on a turnaround.
                </h2>

                <div className="mt-8 space-y-5 text-white/70 leading-relaxed border-l-2 border-gold/30 pl-6">
                  <p>
                    An organization with big vision but no financial
                    margin. The kind of challenge most people walk away from.
                  </p>
                  <p>
                    Within 12 months, I built $1 million in reserves. Today:
                    millions in real estate, millions in reserves, and 11
                    consecutive years operating under budget.
                  </p>
                  <p>
                    Same organization. Completely different trajectory.
                  </p>
                </div>

                <p className="mt-8 text-white font-semibold text-lg">
                  That&apos;s what I do&mdash;turn financial pressure into
                  clarity, margin, and momentum.
                </p>
              </div>
            </Reveal>

            <Reveal animation="fade-up" delay={200}>
              <div className="flex flex-col items-center gap-8">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden shadow-2xl shadow-black/50">
                  <Image
                    src="/images/steve-headshot.jpeg"
                    alt="Steve Smith — Fractional COO/CFO"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gold corner accent */}
                  <div className="absolute top-0 left-0 w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold/60 to-transparent" />
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-gold/60 to-transparent" />
                  </div>
                </div>
                <QuoteBlock quote="I build the financial foundation that lets leaders say yes to the right things." />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How I Work With Leaders */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="Fractional COO/CFO partnership for leaders building something that matters.">
              How I Work With Leaders
            </SectionHeading>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.slice(0, 6).map((area, i) => (
              <Reveal key={area.title} delay={i * 80}>
                <div className="bg-surface-light border border-border rounded-sm p-8 card-hover h-full group">
                  <h3 className="text-lg font-display text-white mb-3 group-hover:text-gold transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <p className="text-white/60 mb-6">
                Whether you lead a business, church, or nonprofit&mdash;every
                engagement is custom, built around what your organization
                actually needs.
              </p>
              <Button href="/services" variant="outline">
                Learn More About the Partnership
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <Reveal>
        <StatBar />
      </Reveal>

      {/* Lead Magnet */}
      <section className="py-28 bg-surface relative texture-overlay">
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <span className="gold-line gold-line-center mb-8" />
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">
              Free Resource
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-white">
              The Savage Advantage Playbook
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              Five disciplines that separate leaders who sustain from leaders who
              burn out. Clarity. Stewardship. Margin. Wisdom. Multiplication.
            </p>
            <div className="mt-8">
              <LeadMagnetForm variant="hero" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recent from The Briefing */}
      {recentPosts.length > 0 && (
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <SectionHeading subtitle="Leadership, stewardship, and strategy for leaders who carry real weight.">
                From The Briefing
              </SectionHeading>
            </Reveal>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {recentPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-surface-light border border-border rounded-sm overflow-hidden card-hover h-full"
                  >
                    <div className="p-8">
                      <span className="text-xs tracking-[0.15em] uppercase text-gold border border-gold/30 rounded-full px-3 py-1">
                        {post.category}
                      </span>
                      <h3 className="mt-4 text-xl font-display text-white group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-white/50 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-gold text-sm">
                        <span>Read More</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-12 text-center">
                <Button href="/blog" variant="text">
                  View All Posts
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-28 bg-surface relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,162,39,0.04),transparent_70%)]" />

        <Reveal>
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="gold-line gold-line-center mb-8" />
            <h2 className="text-4xl md:text-5xl font-display text-white">
              Ready to Get Clarity?
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Whether you&apos;re running a business or leading a ministry, the
              first step is the same: a conversation about where you are and
              where you want to go.
            </p>
            <div className="mt-10">
              <Button href={SITE.calendlyUrl} external>
                Book a Clarity Call
              </Button>
            </div>
            <p className="mt-6 italic text-white/40 font-display text-lg">
              For leaders ready to move from pressure to precision.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
