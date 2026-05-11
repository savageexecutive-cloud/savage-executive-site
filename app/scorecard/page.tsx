import type { Metadata } from "next";
import { ScorecardAssessment } from "./ScorecardAssessment";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Savage Advantage Scorecard",
  description:
    "Rate yourself across the 5 disciplines that separate leaders who sustain from leaders who burn out. Free 2-minute self-assessment.",
  openGraph: {
    title: "The Savage Advantage Scorecard",
    description:
      "Rate yourself across the 5 disciplines that separate leaders who sustain from leaders who burn out.",
    images: [
      {
        url: "/api/og?title=The%20Savage%20Advantage%20Scorecard&subtitle=Rate%20yourself%20across%20the%205%20disciplines%20that%20separate%20leaders%20who%20sustain%20from%20leaders%20who%20burn%20out.&type=scorecard",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ScorecardPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Quiz",
          name: "The Savage Advantage Scorecard",
          description:
            "A self-assessment across 5 leadership disciplines: Clarity, Stewardship, Margin, Wisdom, and Multiplication.",
          provider: {
            "@type": "Organization",
            name: "Savage Executive",
            url: "https://savageexecutive.com",
          },
        }}
      />
      <ScorecardAssessment />
    </>
  );
}
