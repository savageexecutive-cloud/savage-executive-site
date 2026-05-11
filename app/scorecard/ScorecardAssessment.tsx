"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  SCORECARD_QUESTIONS,
  DISCIPLINES,
  DISCIPLINE_COLORS,
  calculateResults,
  getOverallScore,
  getScoreLabel,
  getScoreInsight,
} from "@/lib/scorecard";
import type { Discipline } from "@/lib/scorecard";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const SCALE_LABELS = [
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Usually" },
  { value: 5, label: "Always" },
];

type Phase = "intro" | "questions" | "capture" | "results";

export function ScorecardAssessment() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentDiscipline, setCurrentDiscipline] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const currentQuestions = useMemo(
    () =>
      SCORECARD_QUESTIONS.filter(
        (q) => q.discipline === DISCIPLINES[currentDiscipline]
      ),
    [currentDiscipline]
  );

  const allCurrentAnswered = currentQuestions.every((q) => answers[q.id]);
  const totalAnswered = Object.keys(answers).length;
  const progress = (totalAnswered / SCORECARD_QUESTIONS.length) * 100;

  const results = useMemo(() => calculateResults(answers), [answers]);
  const overallScore = useMemo(() => getOverallScore(answers), [answers]);

  function handleAnswer(questionId: number, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (currentDiscipline < DISCIPLINES.length - 1) {
      setCurrentDiscipline((d) => d + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setPhase("capture");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    if (currentDiscipline > 0) {
      setCurrentDiscipline((d) => d - 1);
    }
  }

  async function handleSubmitEmail(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source: "scorecard",
          score: overallScore,
          results: results.map((r) => ({
            discipline: r.discipline,
            score: r.score,
          })),
        }),
      });
    } catch {
      // Continue to results even if API call fails
    }

    setSubmitting(false);
    setPhase("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // No skip — email is required to see results

  // ── Intro ──
  if (phase === "intro") {
    return (
      <section className="pt-32 pb-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h1 className="text-4xl md:text-5xl font-display text-white">
            The Savage Advantage{" "}
            <span className="text-gradient-gold italic">Scorecard</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Rate yourself across the 5 disciplines that separate leaders who
            sustain from leaders who burn out.
          </p>

          <div className="mt-10 grid grid-cols-5 gap-3">
            {DISCIPLINES.map((d) => (
              <div
                key={d}
                className="text-center bg-surface-light border border-border rounded-sm py-4 px-2"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: DISCIPLINE_COLORS[d] }}
                />
                <p className="text-xs text-white/60 font-medium">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <button
              onClick={() => setPhase("questions")}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary font-semibold px-8 py-3 rounded-sm transition-all btn-glow"
            >
              Start Assessment
              <span>&rarr;</span>
            </button>
            <p className="text-sm text-white/30">
              15 questions &middot; Takes about 2 minutes
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ── Questions ──
  if (phase === "questions") {
    const discipline = DISCIPLINES[currentDiscipline];
    const color = DISCIPLINE_COLORS[discipline];

    return (
      <section className="pt-32 pb-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Progress bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs tracking-[0.15em] uppercase text-white/30">
                {currentDiscipline + 1} of {DISCIPLINES.length}
              </span>
              <span className="text-xs text-white/30">
                {totalAnswered}/{SCORECARD_QUESTIONS.length} answered
              </span>
            </div>
            <div className="h-1 bg-surface-light rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor: color,
                }}
              />
            </div>

            {/* Discipline tabs */}
            <div className="flex gap-2 mt-4">
              {DISCIPLINES.map((d, i) => {
                const dQuestions = SCORECARD_QUESTIONS.filter(
                  (q) => q.discipline === d
                );
                const dAnswered = dQuestions.filter(
                  (q) => answers[q.id]
                ).length;
                const complete = dAnswered === dQuestions.length;

                return (
                  <button
                    key={d}
                    onClick={() => setCurrentDiscipline(i)}
                    className={`flex-1 py-2 text-xs font-medium rounded-sm border transition-all ${
                      i === currentDiscipline
                        ? "border-gold/50 text-white bg-surface-light"
                        : complete
                          ? "border-border text-white/50 bg-surface-light/50"
                          : "border-border text-white/30 hover:text-white/50"
                    }`}
                  >
                    {d}
                    {complete && (
                      <span className="ml-1 text-gold">&check;</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Discipline header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <h2 className="text-3xl font-display text-white">{discipline}</h2>
            </div>
            <p className="text-white/50 text-sm">
              Rate how well each statement describes you right now.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-10">
            {currentQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-surface-light border border-border rounded-sm p-6 md:p-8"
              >
                <p className="text-white/80 leading-relaxed mb-6">
                  <span className="text-gold font-display mr-2">
                    {idx + 1}.
                  </span>
                  {q.question}
                </p>

                <div className="flex gap-2">
                  {SCALE_LABELS.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => handleAnswer(q.id, s.value)}
                      className={`flex-1 py-3 px-2 rounded-sm border text-center transition-all ${
                        answers[q.id] === s.value
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-border text-white/40 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      <span className="block text-lg font-display">
                        {s.value}
                      </span>
                      <span className="block text-[10px] tracking-wider uppercase mt-1">
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentDiscipline === 0}
              className={`text-sm font-medium ${
                currentDiscipline === 0
                  ? "text-white/20 cursor-not-allowed"
                  : "text-white/50 hover:text-white transition-colors"
              }`}
            >
              &larr; Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!allCurrentAnswered}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-sm font-semibold transition-all ${
                allCurrentAnswered
                  ? "bg-gold hover:bg-gold-dark text-primary btn-glow"
                  : "bg-surface-light text-white/30 cursor-not-allowed border border-border"
              }`}
            >
              {currentDiscipline === DISCIPLINES.length - 1
                ? "See My Results"
                : "Next Discipline"}
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── Email Capture ──
  if (phase === "capture") {
    return (
      <section className="pt-32 pb-28">
        <div className="max-w-lg mx-auto px-6 lg:px-8 text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-display text-white">
            Your Results Are Ready
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Enter your email to get your personalized scorecard results — plus
            The Savage Advantage Playbook with strategies to strengthen each
            discipline.
          </p>

          <form onSubmit={handleSubmitEmail} className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface-light border border-border rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-surface-light border border-border rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={submitting || !email}
              className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold py-3 rounded-sm transition-all btn-glow disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Get My Results + The Playbook"}
            </button>
          </form>

          <p className="mt-6 text-xs text-white/20">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    );
  }

  // ── Results ──
  const scoreLabel = getScoreLabel(overallScore);
  const scoreInsight = getScoreInsight(overallScore);
  const maxBarWidth = 100;

  return (
    <section className="pt-32 pb-28">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Overall Score */}
        <div className="text-center mb-16">
          <span className="gold-line gold-line-center mb-6" />
          <h1 className="text-4xl md:text-5xl font-display text-white">
            Your Savage Advantage{" "}
            <span className="text-gradient-gold italic">Score</span>
          </h1>

          <div className="mt-10 inline-flex flex-col items-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Ring */}
              <svg
                className="absolute inset-0"
                viewBox="0 0 144 144"
                fill="none"
              >
                <circle
                  cx="72"
                  cy="72"
                  r="66"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                />
                <circle
                  cx="72"
                  cy="72"
                  r="66"
                  stroke="#c9a227"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${(overallScore / 5) * 415} 415`}
                  transform="rotate(-90 72 72)"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="text-center">
                <span className="text-4xl font-display text-white">
                  {overallScore}
                </span>
                <span className="text-lg text-white/40 font-display">/5</span>
              </div>
            </div>
            <p className="mt-4 text-gold font-display text-xl italic">
              {scoreLabel}
            </p>
          </div>

          <p className="mt-6 text-white/60 leading-relaxed max-w-lg mx-auto">
            {scoreInsight}
          </p>
        </div>

        {/* Discipline Breakdown */}
        <div className="space-y-6 mb-16">
          <h2 className="text-2xl font-display text-white text-center mb-8">
            Your Five Disciplines
          </h2>

          {results.map((r) => (
            <div
              key={r.discipline}
              className="bg-surface-light border border-border rounded-sm p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: DISCIPLINE_COLORS[r.discipline],
                    }}
                  />
                  <h3 className="text-lg font-display text-white">
                    {r.discipline}
                  </h3>
                </div>
                <span className="text-gold font-display text-lg">
                  {r.score}/5
                </span>
              </div>

              {/* Bar */}
              <div className="h-2 bg-primary rounded-full overflow-hidden mb-3">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${(r.score / 5) * maxBarWidth}%`,
                    backgroundColor: DISCIPLINE_COLORS[r.discipline],
                  }}
                />
              </div>

              <p className="text-sm text-white/50">{r.description}</p>
            </div>
          ))}
        </div>

        {/* CTA cards */}
        <div className="space-y-6">
          <div className="bg-surface-light border border-border rounded-sm p-8 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3 font-medium">
              Go Deeper
            </p>
            <h3 className="text-2xl font-display text-white">
              Get The Savage Advantage Playbook
            </h3>
            <p className="mt-3 text-white/60 text-sm max-w-md mx-auto leading-relaxed">
              Strategies to strengthen each of the 5 disciplines. Free download.
            </p>
            <div className="mt-6">
              <Button
                href="/the-savage-advantage-playbook.pdf"
                external
                variant="primary"
              >
                Download the Playbook
              </Button>
            </div>
          </div>

          <div className="bg-surface-light border border-gold/20 rounded-sm p-8 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3 font-medium">
              Want Personalized Help?
            </p>
            <h3 className="text-2xl font-display text-white">
              Book a Clarity Call
            </h3>
            <p className="mt-3 text-white/60 text-sm max-w-md mx-auto leading-relaxed">
              Let&apos;s talk about where you are, where you want to be, and how
              to close the gap.
            </p>
            <div className="mt-6">
              <Button href={SITE.calendlyUrl} external variant="primary">
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Share results */}
          <div className="text-center pt-4">
            <p className="text-sm text-white/40 mb-3">
              Share your results and challenge another leader:
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={`https://x.com/intent/tweet?url=${encodeURIComponent(`${SITE.url}/scorecard`)}&text=${encodeURIComponent(`I just scored ${overallScore}/5 on The Savage Advantage Scorecard. How do you stack up? — @SavageExec`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE.url}/scorecard`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/blog"
              className="text-sm text-white/40 hover:text-gold transition-colors"
            >
              &larr; Read The Briefing for more leadership insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
