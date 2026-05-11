export type Discipline =
  | "Clarity"
  | "Stewardship"
  | "Margin"
  | "Wisdom"
  | "Multiplication";

export type ScorecardQuestion = {
  id: number;
  discipline: Discipline;
  question: string;
};

export const SCORECARD_QUESTIONS: ScorecardQuestion[] = [
  // ── Clarity (3 questions) ──
  {
    id: 1,
    discipline: "Clarity",
    question:
      "I can articulate my organization's top 3 priorities — and my team could name the same ones.",
  },
  {
    id: 2,
    discipline: "Clarity",
    question:
      "I make decisions quickly because I know what matters most right now.",
  },
  {
    id: 3,
    discipline: "Clarity",
    question:
      "My calendar reflects my highest priorities, not just what feels urgent.",
  },

  // ── Stewardship (3 questions) ──
  {
    id: 4,
    discipline: "Stewardship",
    question:
      "I know exactly where my organization stands financially — cash, margins, and runway — without needing to ask someone.",
  },
  {
    id: 5,
    discipline: "Stewardship",
    question:
      "We have meaningful financial reserves that give us freedom to say yes to the right opportunities.",
  },
  {
    id: 6,
    discipline: "Stewardship",
    question:
      "I view our resources (money, people, time) as something entrusted to me, not owned by me.",
  },

  // ── Margin (3 questions) ──
  {
    id: 7,
    discipline: "Margin",
    question:
      "I have enough white space in my week to think strategically — not just react.",
  },
  {
    id: 8,
    discipline: "Margin",
    question:
      "My organization could handle an unexpected crisis without everything falling apart.",
  },
  {
    id: 9,
    discipline: "Margin",
    question:
      "I regularly protect time for rest, relationships, and personal renewal.",
  },

  // ── Wisdom (3 questions) ──
  {
    id: 10,
    discipline: "Wisdom",
    question:
      "I seek counsel from people who will tell me the truth, not just what I want to hear.",
  },
  {
    id: 11,
    discipline: "Wisdom",
    question:
      "When facing major decisions, I slow down rather than rush to a conclusion.",
  },
  {
    id: 12,
    discipline: "Wisdom",
    question:
      "I regularly invest in my own growth — reading, learning, and reflecting.",
  },

  // ── Multiplication (3 questions) ──
  {
    id: 13,
    discipline: "Multiplication",
    question:
      "I'm actively developing leaders who could run things without me.",
  },
  {
    id: 14,
    discipline: "Multiplication",
    question:
      "I delegate authority — not just tasks — so my team can own outcomes.",
  },
  {
    id: 15,
    discipline: "Multiplication",
    question:
      "I'm building something that will outlast my direct involvement.",
  },
];

export const DISCIPLINES: Discipline[] = [
  "Clarity",
  "Stewardship",
  "Margin",
  "Wisdom",
  "Multiplication",
];

export const DISCIPLINE_DESCRIPTIONS: Record<Discipline, string> = {
  Clarity:
    "The ability to see what matters most and align your organization around it.",
  Stewardship:
    "Managing resources — financial, human, and temporal — as something entrusted, not owned.",
  Margin:
    "Building the capacity to think, breathe, and respond rather than just react.",
  Wisdom:
    "Making decisions rooted in timeless principles, not just current pressures.",
  Multiplication:
    "Developing people and systems that multiply impact beyond your personal bandwidth.",
};

export const DISCIPLINE_COLORS: Record<Discipline, string> = {
  Clarity: "#3b82f6",
  Stewardship: "#10b981",
  Margin: "#f59e0b",
  Wisdom: "#8b5cf6",
  Multiplication: "#f43f5e",
};

export type ScorecardResult = {
  discipline: Discipline;
  score: number; // average 1-5
  maxScore: 5;
  description: string;
};

export function calculateResults(
  answers: Record<number, number>
): ScorecardResult[] {
  return DISCIPLINES.map((discipline) => {
    const questions = SCORECARD_QUESTIONS.filter(
      (q) => q.discipline === discipline
    );
    const total = questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    const avg = questions.length > 0 ? total / questions.length : 0;

    return {
      discipline,
      score: Math.round(avg * 10) / 10,
      maxScore: 5,
      description: DISCIPLINE_DESCRIPTIONS[discipline],
    };
  });
}

export function getOverallScore(answers: Record<number, number>): number {
  const values = Object.values(answers);
  if (values.length === 0) return 0;
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return Math.round(avg * 10) / 10;
}

export function getScoreLabel(score: number): string {
  if (score >= 4.5) return "Savage Advantage";
  if (score >= 3.5) return "Strong Foundation";
  if (score >= 2.5) return "Room to Grow";
  if (score >= 1.5) return "Critical Gaps";
  return "Starting Point";
}

export function getScoreInsight(score: number): string {
  if (score >= 4.5)
    return "You're operating at an exceptional level. The key now is sustainability and multiplication — ensuring these disciplines compound over time.";
  if (score >= 3.5)
    return "You've built a strong foundation. The gap between good and great often comes down to 1-2 disciplines that need focused attention.";
  if (score >= 2.5)
    return "You have real potential, but key disciplines need strengthening. The good news: intentional focus on your weakest areas can produce rapid improvement.";
  if (score >= 1.5)
    return "Several areas need immediate attention. Start with the discipline that scored lowest — building one habit at a time creates momentum.";
  return "Every great leader started somewhere. The fact that you're assessing yourself honestly is the first step toward transformation.";
}
