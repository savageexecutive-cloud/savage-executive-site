import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { Reveal } from "@/components/ui/Reveal";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { ShareButtons } from "@/components/ShareButtons";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { PlaybookSlideUp } from "@/components/PlaybookSlideUp";
import { SITE } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = `/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.excerpt || "")}&type=blog`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Steve Smith"],
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: "Steve Smith",
            url: `${SITE.url}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: "Savage Executive",
            url: SITE.url,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE.url}/blog/${slug}`,
          },
          image: `${SITE.url}/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.excerpt || "")}&type=blog`,
        }}
      />
      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-gold transition-colors mb-8"
            >
              <span>&larr;</span>
              <span>Back to The Briefing</span>
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-gold border border-gold/30 rounded-full px-3 py-1">
                {post.category}
              </span>
              <span className="text-xs text-white/30">{post.readTime}</span>
              <span className="text-xs text-white/30">&middot;</span>
              <time className="text-xs text-white/30">{formattedDate}</time>
            </div>

            <h1 className="text-4xl md:text-5xl font-display text-white leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-4 text-lg text-white/60 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-display text-sm">SS</span>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Steve Smith</p>
                  <p className="text-xs text-white/40">
                    Fractional COO/CFO &middot; Host, The Savage Executive Podcast
                  </p>
                </div>
              </div>
              <ShareButtons slug={slug} title={post.title} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>
        </div>
      </article>

      {/* Share + CTA */}
      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Bottom share bar */}
          <Reveal>
            <div className="flex items-center justify-between py-8 border-t border-border/50 mb-12">
              <p className="text-sm text-white/40 italic font-display">
                Found this useful? Share it with a leader who needs it.
              </p>
              <ShareButtons slug={slug} title={post.title} />
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-surface-light border border-border rounded-sm p-8 md:p-10">
              <div className="text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3 font-medium">
                  Go Deeper
                </p>
                <h2 className="text-2xl font-display text-white">
                  Get The Savage Advantage Playbook
                </h2>
                <p className="mt-3 text-white/60 text-sm max-w-lg mx-auto leading-relaxed">
                  Five disciplines that separate leaders who sustain from leaders
                  who burn out. Free download.
                </p>
                <div className="mt-6">
                  <LeadMagnetForm variant="hero" source="playbook-blog-cta" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 text-center">
              <Button href="/blog" variant="text">
                &larr; Back to all posts
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <PlaybookSlideUp />
    </>
  );
}
