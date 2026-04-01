import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StatBar } from "@/components/ui/StatBar";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Steve Smith",
  description:
    "Fractional COO/CFO helping faith-driven leaders build organizations that last — with financial clarity, operational excellence, and wisdom that actually works.",
};

const credentials = [
  {
    icon: "building",
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
    icon: "chart",
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
    icon: "dollar",
    title: "Financial Track Record",
    items: [
      "Turnaround from $40K to $1M in 12 months",
      "11 consecutive years under budget",
      "Multi-million dollar reserve building",
      "$15M+ in real estate acquisitions",
    ],
  },
  {
    icon: "pen",
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
    description:
      "The goal is simplicity on the other side of complexity.",
  },
  {
    title: "Biblical wisdom, naturally applied",
    description:
      "Not preachy. Not forced. Just ancient wisdom that works.",
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
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] max-w-md rounded-sm overflow-hidden">
              <Image
                src="/images/steve-headshot.jpeg"
                alt="Steve Smith"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
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
                and ministry leadership. Fifteen years in sales taught me how to
                generate revenue. Eleven years running multi-entity operations
                taught me how to manage complexity. And a near-bankruptcy
                turnaround taught me what&apos;s possible when you combine
                discipline with wisdom.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Today I run a 160-person organization with multiple P&amp;Ls,
                commercial real estate operations, and Maryland&apos;s largest
                private Christian school. I also serve a select group of CEOs as
                their fractional COO/CFO&mdash;bringing the same clarity and
                systems that transformed my organization to theirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround Story */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display text-center">
            The <span className="text-gold italic">Turnaround</span> Story
          </h2>
          <p className="mt-4 text-center text-white/60">
            The defining moment that shaped everything I do today.
          </p>

          <div className="mt-16 space-y-12">
            <div>
              <h3 className="text-2xl font-display text-gold italic">
                The Crisis
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Eleven years ago, I walked into an organization six weeks from
                bankruptcy. $40,000 in the bank. $46,000 mortgage due. No
                reserves. No margin. No plan.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display text-gold italic">
                The Transformation
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Within six months, we had $500,000 in reserves. Within twelve
                months, $1 million. Not through gimmicks or shortcuts&mdash;through
                financial discipline, operational clarity, and applying timeless
                wisdom to modern challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display text-gold italic">
                The Result
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                That was eleven years ago. Today: millions in reserves, millions
                in real estate acquired, and eleven consecutive years operating
                under budget. Every single year.
              </p>
            </div>
          </div>

          {/* Stats inline */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "$40K→$1M", label: "IN 12 MONTHS" },
              { value: "11", label: "YEARS UNDER BUDGET" },
              { value: "$15M+", label: "REAL ESTATE ACQUIRED" },
              { value: "160+", label: "EMPLOYEES LED" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-surface-light border border-border rounded-sm py-6 px-4"
              >
                <p className="text-2xl font-display text-gold">{stat.value}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-white/40 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-display text-gold italic">
              The Lesson
            </h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              That experience taught me something I&apos;ve carried into every
              engagement since: financial clarity isn&apos;t just about numbers.
              It&apos;s about creating the margin and momentum that lets you say
              yes to the right things. It&apos;s about building organizations
              that don&apos;t just survive&mdash;they thrive for decades.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Now I help other leaders do the same.
            </p>
          </div>
        </div>
      </section>

      {/* Credential Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((cred) => (
              <div
                key={cred.title}
                className="bg-surface-light border border-border rounded-sm p-8"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators + Proverbs */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Differentiators */}
            <div>
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

            {/* Proverbs */}
            <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10 h-fit">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
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
      </section>
    </>
  );
}
