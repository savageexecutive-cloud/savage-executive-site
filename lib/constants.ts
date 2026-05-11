export const SITE = {
  name: "Savage Executive",
  tagline: "Lead with Clarity. Build with Strategy. Multiply What Matters.",
  description:
    "I help faith-driven CEOs and ministry leaders build organizations that thrive — financially sound, operationally excellent, and grounded in timeless wisdom.",
  url: "https://savageexecutive.com",
  calendlyUrl: "https://calendly.com/savageexecutive/clarity-call",
  ga4Id: "G-JRQNY4BFV0",
} as const;

export const NAV_LINKS = [
  { label: "Story", href: "/#story" },
  { label: "Services", href: "/services" },
  { label: "Scorecard", href: "/scorecard" },
  { label: "Podcast", href: "/podcast" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const STATS = [
  { value: "160+", label: "employees", sublabel: "CURRENTLY LEADING" },
  { value: "Multi-Entity", label: "operations", sublabel: "P&L OVERSIGHT" },
  { value: "$15M+", label: "in real estate", sublabel: "ACQUIRED & MANAGED" },
  { value: "11 Years", label: "consecutive", sublabel: "UNDER BUDGET" },
] as const;

export const SERVICE_AREAS = [
  {
    title: "Financial Clarity & Strategy",
    description:
      "Monthly financial health reviews, P&L analysis, cash flow management, and building the reserves that fund vision — not just operations.",
    icon: "chart",
  },
  {
    title: "Operational Excellence",
    description:
      "Systems, processes, and team structures that scale. Building infrastructure your organization can grow on for decades.",
    icon: "cog",
  },
  {
    title: "Strategic Planning & Execution",
    description:
      "Aligning vision, resources, and execution into a plan your team can actually follow — with accountability built in.",
    icon: "target",
  },
  {
    title: "Team & Organizational Design",
    description:
      "Right people, right seats. Building teams that multiply your capacity instead of draining it.",
    icon: "people",
  },
  {
    title: "Capital Projects & Real Estate",
    description:
      "Navigating property acquisitions, building campaigns, and major capital decisions with wisdom and financial discipline.",
    icon: "building",
  },
  {
    title: "Board & Stakeholder Strategy",
    description:
      "Helping boards shift from reactive oversight to strategic partnership. Preparing leaders for high-stakes conversations.",
    icon: "handshake",
  },
] as const;

export const SPEAKING_TOPICS = [
  {
    number: "01",
    title: "Leadership Clarity & Organizational Health",
    description:
      "How to lead with clarity when everything feels urgent. Building organizations that don't depend entirely on you.",
    points: [
      "Identify what's actually urgent vs. what feels urgent",
      "Build systems that scale without burning out",
      "Create organizational clarity that frees your team",
    ],
  },
  {
    number: "02",
    title: "Financial Stewardship & Margin for Mission",
    description:
      "How to manage finances as a steward, not an owner. Creating financial margin so you can say yes to the right things.",
    points: [
      "Shift from financial survival to financial strategy",
      "Build reserves that fund vision, not just operations",
      "Make decisions from abundance, not scarcity",
    ],
  },
  {
    number: "03",
    title: "Vision-Driven Leadership & Sustainable Impact",
    description:
      "How to cast vision that moves people, then build the operational foundation to sustain it for decades.",
    points: [
      "Articulate vision people want to follow",
      "Build infrastructure that outlasts your energy",
      "Lead for the long game, not just this quarter",
    ],
  },
] as const;

export const VENUE_TYPES = [
  {
    title: "Staff Retreats",
    description: "For leadership teams needing alignment and fresh perspective",
  },
  {
    title: "Leadership Conferences",
    description: "For audiences of leaders who want practical wisdom, not theory",
  },
  {
    title: "Executive Pastor Gatherings",
    description:
      "For ministry operators who run the engine behind the vision",
  },
  {
    title: "Donor & Board Environments",
    description:
      "For key stakeholders who need to understand stewardship at scale",
  },
] as const;
