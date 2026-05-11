import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Steve Smith",
  description:
    "Fractional COO/CFO helping faith-driven leaders build organizations that last — with financial clarity, operational excellence, and wisdom that actually works.",
};

const credentials = [
  {
    title: "Current Role",
    items: [
      "COO/Executive Pastor, Rosedale Ministries",
      "160 full and part-time employees",
      "250+ weekly volunteers",
      "Multiple P&Ls across education, camps, ministry",
      "Maryland's largest private Christian school",
      "Commercial real estate portfolio",
    ],
  },
  {
    title: "Sales Background",
    items: [
      "15 years in professional sales",
      "Revenue generation and pipeline management",
      "Client relationship building",
      "Quota achievement and business development",
      "Understanding both sides: revenue AND operations",
    ],
  },
  {
    title: "Financial Track Record",
    items: [
      "Built $1M+ in reserves within 12 months",
      "11 consecutive years under budget",
      "Multi-million dollar reserve building",
      "$15M+ in real estate acquisitions",
    ],
  },
  {
    title: "Content & Teaching",
    items: [
      "Host, The Savage Executive Podcast",
      "Author, Stories That Shape Business",
      "Speaker on leadership, finance, and stewardship",
      "Deep study of Proverbs and Ecclesiastes applied to business",
    ],
  },
];

const differentiators = [
  {
    title: "Practitioner, not theorist",
    description:
      "I run a 160-person organization. I face the same pressures you do.",
  },
  {
    title: "Partner, not consultant",
    description:
      "I don't analyze and leave. I stay in your corner month after month.",
  },
  {
    title: "Clarity over complexity",
    description: "The goal is simplicity on the other side of complexity.",
  },
  {
    title: "Biblical wisdom, naturally applied",
    description: "Not preachy. Not forced. Just ancient wisdom that works.",
  },
];

const proverbs = [
  {
    reference: "Proverbs 27:23",
    text: "Know well the condition of your flocks, and give attention to your herds.",
  },
  {
    reference: "Proverbs 21:5",
    text: "The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.",
  },
  {
    reference: "Proverbs 11:14",
    text: "Where there is no guidance, a people falls, but in an abundance of counselors there is safety.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="slide-left">
              <div className="relative aspect-[4/5] max-w-md rounded-sm overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/steve-headshot.jpeg"
                  alt="Steve Smith"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold/60 to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-gold/60 to-transparent" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <span className="gold-line mb-6" />
                <h1 className="text-5xl md:text-6xl font-display text-white">
                  Steve Smith
                </h1>
                <p className="mt-3 text-gold italic font-display text-xl">
                  COO, Rosedale Ministries &middot; Fractional COO/CFO &middot;
                  Host, The Savage Executive Podcast
                </p>
                <p className="mt-6 text-lg text-white/70 leading-relaxed">
                  I help faith-driven leaders build organizations that
                  last&mdash;with financial clarity, operational excellence, and
                  wisdom that actually works.
                </p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  For over 26 years, I&apos;ve been in the trenches of business
                  and ministry leadership. Fifteen years in sales taught me how
                  to generate revenue. Eleven years running multi-entity
                  operations taught me how to manage complexity. And leading a
                  financial turnaround taught me what&apos;s possible when you
                  combine discipline with wisdom.
                </p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Today I run a 160-person organization with multiple P&amp;Ls,
                  commercial real estate operations, and Maryland&apos;s largest
                  private Christian school. I also serve a select group of CEOs
                  as their fractional COO/CFO&mdash;bringing the same clarity
                  and systems that transformed my organization to theirs.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Turnaround Story */}
      <section className="py-28 bg-surface relative texture-overlay">
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="gold-line gold-line-center mb-6" />
              <h2 className="text-4xl md:text-5xl font-display">
                The <span className="text-gradient-gold italic">Turnaround</span>{" "}
                Story
              </h2>
              <p className="mt-4 text-white/60">
                The defining moment that shaped everything I do today.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 space-y-12">
            {[
              {
                label: "The Challenge",
                text: "Eleven years ago, I stepped into an organization with enormous potential but no financial margin. Big vision, real impact\u2014but the financial foundation wasn\u2019t built to sustain it.",
              },
              {
                label: "The Transformation",
                text: "Within twelve months, we built $1 million in reserves. Not through gimmicks or shortcuts\u2014through financial discipline, operational clarity, and applying timeless wisdom to modern challenges.",
              },
              {
                label: "The Result",
                text: "That was eleven years ago. Today: millions in reserves, millions in real estate acquired, and eleven consecutive years operating under budget. Same organization. Completely different financial trajectory.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 150}>
                <div>
                  <h3 className="text-2xl font-display text-gradient-gold italic">
                    {item.label}
                  </h3>
                  <p className="mt-4 text-white/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats inline */}
          <Reveal delay={100}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "$1M+", label: "RESERVES IN YEAR ONE" },
                { value: "11", label: "YEARS UNDER BUDGET" },
                { value: "$15M+", label: "REAL ESTATE ACQUIRED" },
                { value: "160+", label: "EMPLOYEES LED" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-surface-light border border-border rounded-sm py-6 px-4 card-hover"
                >
                  <p className="text-2xl font-display text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-white/40 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-12">
              <h3 className="text-2xl font-display text-gradient-gold italic">
                The Lesson
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                That experience taught me something I&apos;ve carried into every
                engagement since: financial clarity isn&apos;t just about
                numbers. It&apos;s about creating the margin that lets you say
                yes to the right things&mdash;and building organizations that
                don&apos;t just sustain, but compound for decades.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Now I help other leaders do the same.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credential Cards */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((cred, i) => (
              <Reveal key={cred.title} delay={i * 100}>
                <div className="bg-surface-light border border-border rounded-sm p-8 card-hover h-full">
                  <h3 className="text-2xl font-display text-white mb-6">
                    {cred.title}
                  </h3>
                  <ul className="space-y-3">
                    {cred.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/60"
                      >
                        <span className="text-gold mt-1 shrink-0">&rarr;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators + Proverbs */}
      <section className="py-28 bg-surface relative texture-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Differentiators */}
            <Reveal animation="slide-left">
              <div>
                <span className="gold-line mb-6" />
                <h2 className="text-3xl font-display text-white mb-8">
                  Why Leaders Choose Me
                </h2>
                <div className="space-y-8">
                  {differentiators.map((d) => (
                    <div key={d.title} className="border-b border-border pb-6">
                      <h3 className="text-lg font-semibold text-white">
                        {d.title}
                      </h3>
                      <p className="mt-2 text-white/60">{d.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Proverbs */}
            <Reveal delay={200}>
              <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10 h-fit">
                <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-8 font-medium">
                  Wisdom That Guides
                </h3>
                <div className="space-y-8">
                  {proverbs.map((p) => (
                    <QuoteBlock
                      key={p.reference}
                      quote={p.text}
                      citation={p.reference}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,162,39,0.04),transparent_70%)]" />
        <Reveal>
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="gold-line gold-line-center mb-8" />
            <h2 className="text-4xl md:text-5xl font-display text-white">
              Ready to Get Clarity?
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              The first step is always the same&mdash;a conversation.
            </p>
            <div className="mt-10">
              <Button href={SITE.calendlyUrl} external>
                Book a Clarity Call
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
