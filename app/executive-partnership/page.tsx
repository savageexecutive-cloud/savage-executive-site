import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Executive Partnership",
  description:
    "Fractional COO/CFO services for faith-driven CEOs running $10-50M businesses. Monthly financial reviews, operational guidance, and strategic partnership.",
};

const tiers = [
  {
    name: "Essentials",
    price: "$2,497",
    description: "For leaders who need financial clarity and a strategic sounding board.",
    features: [
      "Monthly financial health review",
      "P&L and cash flow analysis",
      "Quarterly strategic planning session",
      "Email and Voxer access",
    ],
  },
  {
    name: "Growth",
    price: "$4,997",
    description: "For CEOs scaling operations and building systems that last.",
    features: [
      "Everything in Essentials",
      "Bi-weekly strategy calls",
      "Operational systems audit",
      "Hiring and team structure guidance",
      "Board/stakeholder preparation",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "$9,997",
    description: "Full fractional COO/CFO partnership for complex, multi-entity leaders.",
    features: [
      "Everything in Growth",
      "Weekly partnership calls",
      "On-site visits (quarterly)",
      "Direct team access and training",
      "Real estate and acquisition guidance",
      "Crisis management support",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Clarity Call",
    description:
      "A focused conversation about where you are, where you want to go, and what's in the way.",
  },
  {
    step: "02",
    title: "Discovery & Assessment",
    description:
      "I review your financials, operations, and team structure to identify the highest-leverage opportunities.",
  },
  {
    step: "03",
    title: "Partnership Begins",
    description:
      "We lock in a rhythm — regular reviews, strategic guidance, and real accountability. Month after month.",
  },
];

export default function ExecutivePartnershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
            For Business Leaders
          </p>
          <h1 className="text-5xl md:text-6xl font-display text-white leading-tight">
            Executive Partnership
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Fractional COO/CFO services for faith-driven CEOs running $10-50M
            businesses who need strategic financial and operational guidance.
          </p>
          <div className="mt-10">
            <Button href={SITE.calendlyUrl} external>
              Book a Clarity Call
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-display text-white text-center mb-4">
            What This Looks Like
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Not a consultant who analyzes and disappears. A partner who stays in
            your corner and helps you build.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-sm p-8 flex flex-col ${
                  tier.featured
                    ? "bg-gold/5 border-2 border-gold"
                    : "bg-surface-light border border-border"
                }`}
              >
                <h3 className="text-2xl font-display text-white">
                  {tier.name}
                </h3>
                <p className="text-4xl font-display text-gold mt-2">
                  {tier.price}
                  <span className="text-sm text-white/40 font-body">
                    /month
                  </span>
                </p>
                <p className="mt-3 text-sm text-white/50">{tier.description}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white/70 text-sm">
                      <svg
                        className="w-4 h-4 text-gold mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-white/30 mb-3">
                    Founding member rates
                  </p>
                  <Button
                    href={SITE.calendlyUrl}
                    external
                    variant={tier.featured ? "primary" : "outline"}
                    className="w-full"
                  >
                    Book a Clarity Call
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-display text-white text-center mb-16">
            How We Start
          </h2>

          <div className="space-y-12">
            {process.map((step) => (
              <div key={step.step} className="flex gap-6">
                <span className="text-4xl font-display text-gold/30 shrink-0 w-16">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl font-display text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <QuoteBlock quote="I turn financial pressure into margin, momentum, and clear decisions." />
          <div className="mt-12">
            <Button href={SITE.calendlyUrl} external>
              Book a Clarity Call
            </Button>
          </div>
          <p className="mt-4 text-white/40 text-sm">
            No pitch. No pressure. Just clarity.
          </p>
        </div>
      </section>
    </>
  );
}
