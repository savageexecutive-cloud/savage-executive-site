import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "CEO of Your Cashflow",
  description:
    "A financial leadership system for churches and leaders to create margin and momentum — transforming how your congregation approaches money.",
};

const modules = [
  "Understanding Your Financial Landscape",
  "Building a Stewardship Culture",
  "Cash Flow Mastery for Churches",
  "Reserve Building Strategy",
  "Budget as a Leadership Tool",
  "Communicating Finances to Your Congregation",
  "Long-Term Financial Planning",
  "Sustainability and Generational Impact",
];

export default function CeoCashflowPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
            For Churches &amp; Ministries
          </p>
          <h1 className="text-5xl md:text-6xl font-display text-white leading-tight">
            CEO of Your Cashflow
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            A financial leadership system for churches and leaders to create
            margin and momentum&mdash;transforming how your congregation
            approaches money.
          </p>
          <div className="mt-4">
            <p className="text-4xl font-display text-gold">$697</p>
            <p className="text-sm text-white/40">per year &middot; per church</p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl font-display text-white mb-6">
                8 Video-Driven Modules
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Built for church leadership teams to work through together.
                Practical frameworks you can implement immediately&mdash;not
                theory that collects dust.
              </p>

              <div className="space-y-4">
                {modules.map((module, i) => (
                  <div
                    key={module}
                    className="flex items-center gap-4 bg-surface-light border border-border rounded-sm p-4"
                  >
                    <span className="text-sm font-display text-gold w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/80">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-display text-white mb-6">
                Built for Church Teams
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Church cohort format",
                    desc: "Designed for your entire leadership team to go through together — pastors, elders, finance committees, and staff.",
                  },
                  {
                    title: "Financial leadership framework",
                    desc: "Move from financial survival mode to strategic financial leadership. Know your numbers, lead with confidence.",
                  },
                  {
                    title: "Biblical stewardship principles",
                    desc: "Grounded in Scripture. Every module connects financial strategy to the biblical mandate of faithful stewardship.",
                  },
                  {
                    title: "Practical implementation",
                    desc: "Each module includes worksheets, discussion guides, and action steps your team can implement immediately.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-white flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-gold shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-white/60 pl-8">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display text-white mb-4">
            Join the Waitlist
          </h2>
          <p className="text-white/60 mb-10">
            CEO of Your Cashflow is launching soon. Join the waitlist to get
            early access and founding member pricing.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
