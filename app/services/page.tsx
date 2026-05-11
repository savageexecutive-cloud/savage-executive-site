import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services — Executive Partnership",
  description:
    "Fractional COO/CFO partnership for faith-driven CEOs and ministry leaders. Financial clarity, operational excellence, and strategic guidance.",
};

const iconMap: Record<string, React.ReactNode> = {
  chart: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  cog: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  people: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
    </svg>
  ),
  handshake: (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 013.15 0v3.15M10.05 4.575v3.15M3.75 7.725h16.5M3.75 7.725a1.575 1.575 0 00-1.575 1.575v8.1a1.575 1.575 0 001.575 1.575h16.5a1.575 1.575 0 001.575-1.575v-8.1a1.575 1.575 0 00-1.575-1.575M3.75 7.725V4.575m16.5 3.15V4.575m-16.5 0h16.5" />
    </svg>
  ),
};

const process = [
  {
    step: "01",
    title: "Clarity Call",
    description:
      "A focused conversation about where you are, where you want to go, and what’s in the way. No pitch. Just clarity.",
  },
  {
    step: "02",
    title: "Discovery & Assessment",
    description:
      "I review your financials, operations, and team structure to identify the highest-leverage opportunities.",
  },
  {
    step: "03",
    title: "Custom Partnership Plan",
    description:
      "Based on what I find, I build a partnership plan tailored to your organization’s specific needs and goals.",
  },
  {
    step: "04",
    title: "Ongoing Partnership",
    description:
      "We lock in a rhythm — regular reviews, strategic guidance, and real accountability. Month after month, building momentum.",
  },
];

const whoItsFor = [
  {
    title: "Business CEOs",
    description:
      "Running $2M–50M companies who need a strategic financial and operational partner — not another consultant.",
  },
  {
    title: "Senior Pastors & Ministry Leaders",
    description:
      "Leading growing churches or ministries where the operational complexity has outpaced the infrastructure.",
  },
  {
    title: "Executive Pastors & COOs",
    description:
      "Running the engine behind the vision and needing a peer-level advisor who’s been in the seat.",
  },
  {
    title: "Nonprofit Executive Directors",
    description:
      "Building organizations that create lasting impact while maintaining financial health and operational excellence.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="slide-left">
              <div>
                <span className="gold-line mb-6" />
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
                  Fractional COO/CFO
                </p>
                <h1 className="text-5xl md:text-6xl font-display text-white leading-tight">
                  Executive{" "}
                  <span className="text-gradient-gold italic">Partnership</span>
                </h1>
                <p className="mt-6 text-lg text-white/70 leading-relaxed">
                  Not a consultant who analyzes and disappears. A partner who
                  stays in your corner month after month &mdash; bringing the
                  financial clarity, operational systems, and strategic thinking
                  that help your organization thrive.
                </p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Whether you lead a business, church, or nonprofit, the
                  partnership is built around what your organization actually
                  needs. Every engagement is custom.
                </p>
                <div className="mt-8">
                  <Button href={SITE.calendlyUrl} external>
                    Book a Clarity Call
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative aspect-[4/5] max-w-md rounded-sm overflow-hidden shadow-2xl shadow-black/50 mx-auto">
                <Image
                  src="/images/steve-headshot.jpeg"
                  alt="Steve Smith — Fractional COO/CFO"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 right-0 w-16 h-16">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-gold/60 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-gold/60 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-28 bg-surface relative texture-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="The areas where I create the most leverage for leaders.">
              What I Bring to the Table
            </SectionHeading>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <Reveal key={area.title} delay={i * 100}>
                <div className="bg-surface-light border border-border rounded-sm p-8 card-hover h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold/20">
                      {iconMap[area.icon]}
                    </div>
                    <div>
                      <h3 className="text-xl font-display text-white mb-3">
                        {area.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="This partnership is designed for leaders carrying real weight.">
              Who This Is For
            </SectionHeading>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {whoItsFor.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex gap-4 items-start group">
                  <span className="text-gold text-lg mt-0.5 shrink-0">&rarr;</span>
                  <div>
                    <h3 className="text-xl font-display text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-surface relative texture-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="From first conversation to ongoing partnership.">
              How We Start
            </SectionHeading>
          </Reveal>

          <div className="mt-16 space-y-12">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 150}>
                <div className="flex gap-6 group">
                  <span className="text-5xl font-display text-gold/20 shrink-0 w-20 transition-colors group-hover:text-gold/40">
                    {step.step}
                  </span>
                  <div className="border-l border-border pl-6">
                    <h3 className="text-xl font-display text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,162,39,0.04),transparent_70%)]" />
        <Reveal>
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <QuoteBlock quote="I build the financial foundation that lets leaders say yes to the right things." />
            <p className="mt-8 text-white/60 leading-relaxed max-w-xl mx-auto">
              Every engagement starts with a conversation. No pitch. No
              pressure. Just clarity about where you are and where you could be.
            </p>
            <div className="mt-10">
              <Button href={SITE.calendlyUrl} external>
                Book a Clarity Call
              </Button>
            </div>
            <p className="mt-4 text-white/40 text-sm">
              For leaders ready to move from pressure to precision.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
