import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StatBar } from "@/components/ui/StatBar";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE, SERVICES } from "@/lib/constants";

export default function Home() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary/80 to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
            Steve Smith &middot; Fractional COO/CFO
          </p>
          <h1 className="max-w-3xl">
            <span className="block text-5xl md:text-7xl font-display text-white leading-tight">
              Lead with Clarity.
            </span>
            <span className="block text-5xl md:text-7xl font-display text-white leading-tight">
              Build with Strategy.
            </span>
            <span className="block text-5xl md:text-7xl font-display italic text-gold leading-tight">
              Multiply What Matters.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
            I help faith-driven CEOs and ministry leaders build organizations
            that thrive&mdash;financially sound, operationally excellent, and
            grounded in timeless wisdom.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={SITE.calendlyUrl} external>
              Book a Clarity Call
            </Button>
            <Button href="#services" variant="text">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                <span className="text-gold italic">11 years ago,</span> I
                walked into a financial crisis.
              </h2>

              <div className="mt-8 space-y-5 text-white/70 leading-relaxed border-l-2 border-gold/30 pl-6">
                <p>
                  $40,000 in the bank. $46,000 mortgage due. Six weeks from
                  bankruptcy.
                </p>
                <p>
                  I told them they couldn&apos;t afford to hire me. They said
                  they couldn&apos;t afford not to.
                </p>
                <p>
                  Within 12 months: $1 million in reserves. Today: millions in
                  real estate, millions in reserves, and 11 consecutive years
                  operating under budget.
                </p>
              </div>

              <p className="mt-8 text-white font-semibold text-lg">
                That&apos;s what I do&mdash;turn financial chaos into clarity.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden">
                <Image
                  src="/images/steve-headshot.jpeg"
                  alt="Steve Smith — Fractional COO/CFO"
                  fill
                  className="object-cover"
                />
              </div>
              <QuoteBlock quote="I turn financial pressure into margin, momentum, and clear decisions." />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Two paths for leaders who are building something that matters.">
            How We Work Together
          </SectionHeading>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <ServiceCard {...SERVICES.executivePartnership} />
            <ServiceCard {...SERVICES.ceoCashflow} />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Specialized engagements for select opportunities.">
            Additional Ways to Work Together
          </SectionHeading>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Ministry Consulting */}
            <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-white">
                    Ministry Consulting
                  </h3>
                  <p className="mt-2 text-white/60 leading-relaxed">
                    Strategic guidance for churches and nonprofits navigating
                    growth, financial health, or operational complexity. Select
                    engagements only.
                  </p>
                </div>
              </div>
              <Button href="/ministry" variant="text" className="mt-4">
                Inquire
              </Button>
            </div>

            {/* Speaking */}
            <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-white">
                    Speaking &amp; Keynotes
                  </h3>
                  <p className="mt-2 text-white/60 leading-relaxed">
                    Leadership, stewardship, and clarity for leaders who carry
                    real weight. Staff retreats, conferences, and executive
                    gatherings.
                  </p>
                </div>
              </div>
              <Button href="/speaking" variant="text" className="mt-4">
                Book Steve
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatBar />

      {/* Final CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white">
            Ready to Get Clarity?
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Whether you&apos;re running a business or leading a ministry, the
            first step is the same: a conversation about where you are and where
            you want to go.
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
      </section>
    </>
  );
}
