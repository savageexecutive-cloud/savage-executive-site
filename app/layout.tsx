import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Savage Executive | Steve Smith — Fractional COO/CFO",
    template: "%s | Savage Executive",
  },
  description:
    "I help faith-driven CEOs and ministry leaders build organizations that thrive — financially sound, operationally excellent, and grounded in timeless wisdom.",
  metadataBase: new URL("https://savageexecutive.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Savage Executive",
    images: [
      {
        url: "/api/og?title=Savage%20Executive&subtitle=Lead%20with%20Clarity.%20Build%20with%20Strategy.%20Multiply%20What%20Matters.",
        width: 1200,
        height: 630,
        alt: "Savage Executive — Steve Smith, Fractional COO/CFO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@SavageExec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary text-white font-body">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Savage Executive",
            url: SITE.url,
            logo: `${SITE.url}/images/logo.png`,
            description: SITE.description,
            founder: {
              "@type": "Person",
              name: "Steve Smith",
              jobTitle: "Fractional COO/CFO",
              url: `${SITE.url}/about`,
            },
            sameAs: [
              "https://x.com/SavageExec",
              "https://www.linkedin.com/in/savageexecutive/",
            ],
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
