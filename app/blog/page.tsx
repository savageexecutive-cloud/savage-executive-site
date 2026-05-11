import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Blog — The Briefing",
  description:
    "Leadership, stewardship, and strategy for faith-driven CEOs and ministry leaders. By Steve Smith.",
};

const categoryColors: Record<string, string> = {
  Clarity: "text-blue-400 border-blue-400/30",
  Stewardship: "text-emerald-400 border-emerald-400/30",
  Margin: "text-amber-400 border-amber-400/30",
  Wisdom: "text-purple-400 border-purple-400/30",
  Multiplication: "text-rose-400 border-rose-400/30",
  Leadership: "text-gold border-gold/30",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <SectionHeading subtitle="Leadership, stewardship, and strategy for leaders who carry real weight.">
              The Briefing
            </SectionHeading>
          </Reveal>
        </div>
      </section>

      {/* Lead Magnet Banner */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3 font-medium">
                Free Resource
              </p>
              <h2 className="text-2xl md:text-3xl font-display text-white">
                The Savage Advantage Playbook
              </h2>
              <p className="mt-3 text-white/60 text-sm max-w-lg mx-auto leading-relaxed">
                Five disciplines that separate leaders who sustain from leaders
                who burn out. A practical framework you can start using today.
              </p>
              <div className="mt-6">
                <LeadMagnetForm variant="hero" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <Reveal>
              <div className="text-center py-20">
                <p className="text-white/40 text-lg">
                  Posts are coming soon. Subscribe above to get notified.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-surface-light border border-border rounded-sm overflow-hidden card-hover h-full"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs tracking-[0.15em] uppercase border rounded-full px-3 py-1 ${
                            categoryColors[post.category] ||
                            "text-gold border-gold/30"
                          }`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-white/30">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-display text-white mb-3 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
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
          )}
        </div>
      </section>
    </>
  );
}
