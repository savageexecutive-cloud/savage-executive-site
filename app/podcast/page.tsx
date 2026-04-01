import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "The Savage Executive Podcast",
  description:
    "Leadership and money mastery for faith-driven CEOs and ministry leaders. Hosted by Steve Smith.",
};

const platforms = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SavageExecutive",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/savage-executive-podcast/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c4.988 0 8.94 3.858 9.131 8.612l.007.313c0 2.36-.782 4.462-2.076 6.157l-.106.134-.073.09-.059.075c-.09.108-.236.108-.326 0l-.06-.075-.072-.09a10.25 10.25 0 01-1.329-2.365l-.054-.145a.397.397 0 01.217-.472l.058-.023a5.97 5.97 0 001.833-1.333l.128-.145c.875-1.04 1.39-2.378 1.39-3.808 0-3.343-2.774-6.046-6.16-5.997-3.31.048-5.997 2.796-5.997 6.138 0 1.382.487 2.68 1.318 3.704l.128.145a5.99 5.99 0 001.833 1.333l.058.023a.397.397 0 01.217.472l-.054.145a10.23 10.23 0 01-1.329 2.365l-.06.075-.072.09c-.09.108-.236.108-.326 0l-.06-.075-.072-.09-.106-.134c-1.294-1.695-2.076-3.797-2.076-6.157l.007-.313c.19-4.754 4.143-8.612 9.131-8.612z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/savageexecutive",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
];

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Leadership and money mastery for faith-driven CEOs and ministry leaders.">
            The Savage Executive Podcast
          </SectionHeading>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Video */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-white mb-4">
                Latest Video Episode
              </h3>
              <div className="aspect-video bg-surface-light rounded-sm overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed?listType=user_uploads&list=SavageExecutive"
                  title="Latest Savage Executive Podcast Episode"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Listen On */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">
                Listen On
              </h3>
              <div className="space-y-4">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-surface-light border border-border rounded-sm p-4 hover:border-gold/50 transition-colors"
                  >
                    <span className="text-gold">{platform.icon}</span>
                    <span className="text-white">{platform.name}</span>
                    <span className="text-white/30 ml-auto">&rarr;</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 bg-surface-light border border-border rounded-sm p-6">
                <h4 className="text-sm tracking-wider uppercase text-gold mb-3">
                  About the Show
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Weekly conversations about leadership, stewardship, and
                  building organizations that last. Real frameworks from a
                  practitioner who runs a 160-person operation daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
