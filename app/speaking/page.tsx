import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
      <section className="pt-32 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="slide-left">
              <div>
                <span className="gold-line mb-6" />
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
            </Reveal>

            <Reveal delay={200}>
              <div className="relative aspect-[4/5] max-w-md rounded-sm overflow-hidden ml-auto shadow-2xl shadow-black/50">
                <Image
                  src="/images/steve-headshot.jpeg"
                  alt="Steve Smith speaking"
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

      {/* Topics */}
      <section className="py-28 bg-surface relative texture-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <span className="gold-line gold-line-center mb-6" />
              <h2 className="text-4xl md:text-5xl font-display text-white">
                Signature Topics
              </h2>
              <p className="mt-4 text-white/60">
                Three lanes. One theme: helping leaders build things that last.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {SPEAKING_TOPICS.map((topic, i) => (
              <Reveal key={topic.number} delay={i * 150}>
                <div className="bg-surface-light border border-border rounded-sm p-8 card-hover h-full">
                  <span className="text-3xl font-display text-gold/20">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Venues + Differentiators */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Venues */}
            <Reveal animation="slide-left">
              <div>
                <span className="gold-line mb-6" />
                <h2 className="text-3xl font-display text-white mb-4">
                  Ideal Settings
                </h2>
                <p className="text-white/60 mb-8">
                  I speak to leaders who don&apos;t need hype, but wisdom they
                  can apply immediately.
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
            </Reveal>

            {/* Differentiators */}
            <Reveal delay={200}>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,162,39,0.04),transparent_70%)]" />
        <Reveal>
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="gold-line gold-line-center mb-8" />
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
        </Reveal>
      </section>
    </>
  );
}
