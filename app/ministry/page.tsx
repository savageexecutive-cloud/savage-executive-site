import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Ministry Consulting",
  description:
    "Strategic guidance for churches and nonprofits navigating growth, financial health, or operational complexity.",
};

export default function MinistryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
            Select Engagements
          </p>
          <h1 className="text-5xl md:text-6xl font-display text-white leading-tight">
            Ministry Consulting
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Strategic guidance for churches and nonprofits navigating growth,
            financial health, or operational complexity.
          </p>
        </div>
      </section>

      {/* What I Help With */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Turnaround",
                description:
                  "For ministries in financial distress or needing to rebuild their financial foundation from the ground up.",
              },
              {
                title: "Operational Systems",
                description:
                  "Building the infrastructure — processes, roles, reporting — that lets your ministry scale without chaos.",
              },
              {
                title: "Strategic Planning",
                description:
                  "Aligning vision, resources, and execution into a plan your team can actually follow.",
              },
              {
                title: "Staff & Team Structure",
                description:
                  "Right people, right seats. Building teams that multiply your capacity instead of draining it.",
              },
              {
                title: "Capital Projects & Real Estate",
                description:
                  "Navigating building campaigns, property acquisitions, and major capital decisions wisely.",
              },
              {
                title: "Board & Governance",
                description:
                  "Helping boards shift from reactive oversight to strategic partnership with leadership.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-light border border-border rounded-sm p-8"
              >
                <h3 className="text-xl font-display text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-display text-white text-center mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-center text-white/60 mb-10">
            Ministry consulting engagements are limited and by inquiry only.
            Tell me about your organization and what you&apos;re facing.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
