import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE, SPEAKING_TOPICS, VENUE_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Speaking & Keynotes",
  description:
    "Leadership, stewardship, and clarity for leaders who carry real weight. Staff retreats, conferences, and executive gatherings.",
};

const differentiators = [
  {
    title: "Real systems, not motivational fluff",
    description:
      "Every talk is built around frameworks leaders can implement immediately. The energy fades. The systems stay.",
  },
  {
    title: "From experience, not theory",
    description:
      "Everything I teach, I do daily running a 160-person, multi-entity organization.",
  },
  {
    title: "Biblical wisdom, naturally integrated",
    description:
      "Not preachy. Not forced. Just ancient wisdom applied to modern leadership challenges.",
  },
  {
    title: "Customized, not canned",
    description:
      "I tailor content to your audience, your challenges, your context.",
  },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
                Speaking &amp; Keynotes
              </p>
              <h1 className="text-5xl md:text-6xl font-display text-white leading-tight">
                For Leaders Who Carry Real Weight
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                I speak to leaders who are building under pressure and want
                clarity that lasts. Not motivation&mdash;transformation.
              </p>
              <div className="mt-8">
                <Button href={SITE.calendlyUrl} external>
                  Book Steve
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] max-w-md rounded-sm overflow-hidden ml-auto">
              <Image
                src="/images/steve-headshot.jpeg"
                alt="Steve Smith speaking on stage"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display text-white text-center">
            Signature Topics
          </h2>
          <p className="mt-4 text-center text-white/60">
            Three lanes. One theme: helping leaders build things that last.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {SPEAKING_TOPICS.map((topic) => (
              <div
                key={topic.number}
                className="bg-surface-light border border-border rounded-sm p-8"
              >
                <span className="text-3xl font-display text-white/20">
                  {topic.number}
                </span>
                <h3 className="text-2xl font-display text-white mt-4 mb-3">
                  {topic.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {topic.description}
                </p>
                <ul className="space-y-3">
                  {topic.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-white/50 text-sm"
                    >
                      <span className="text-gold mt-0.5 shrink-0">
                        &rarr;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Venues + Differentiators */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Venues */}
            <div>
              <h2 className="text-3xl font-display text-white mb-4">
                Ideal Settings
              </h2>
              <p className="text-white/60 mb-8">
                I speak to leaders who don&apos;t need hype, but wisdom they can
                apply immediately.
              </p>
              <div className="space-y-6">
                {VENUE_TYPES.map((venue) => (
                  <div
                    key={venue.title}
                    className="border-b border-border pb-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {venue.title}
                    </h3>
                    <p className="mt-1 text-white/50 text-sm">
                      {venue.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiators */}
            <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10 h-fit">
              <h2 className="text-3xl font-display text-white mb-8">
                What Sets My Talks Apart
              </h2>
              <div className="space-y-8">
                {differentiators.map((d) => (
                  <div key={d.title}>
                    <h3 className="text-lg font-semibold text-gold">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-white/60">{d.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white">
            Bring Clarity to Your Next Event
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Let&apos;s talk about your audience, your goals, and how I can
            deliver a session that changes how your leaders think and operate.
          </p>
          <div className="mt-10">
            <Button href={SITE.calendlyUrl} external>
              Book Steve
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
