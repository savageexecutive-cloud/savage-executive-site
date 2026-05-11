"use client";

import { useState, useEffect } from "react";

const DISMISSED_KEY = "savage_playbook_dismissed";

export function PlaybookSlideUp() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // start hidden
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem(DISMISSED_KEY)) return;
    setDismissed(false);

    function onScroll() {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      if (scrollPercent > 0.55) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleDismiss() {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: "blog-slide-up" }),
      });
    } catch {
      // still show success — don't block the user
    }

    setStatus("success");
    setTimeout(() => {
      handleDismiss();
    }, 3000);
  }

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Subtle top shadow to separate from content */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="bg-surface-light/95 backdrop-blur-md border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-5">
          {status === "success" ? (
            <div className="text-center py-1">
              <p className="text-gold font-display text-lg">
                Check your inbox — the Playbook is on its way.
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Copy */}
              <div className="flex-1 min-w-0">
                <p className="text-white font-display text-base sm:text-lg leading-snug">
                  Get The Savage Advantage Playbook
                </p>
                <p className="text-white/40 text-xs mt-0.5 hidden sm:block">
                  Five disciplines for leaders who sustain. Free PDF.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                  className="w-24 sm:w-28 px-3 py-2.5 bg-primary border border-border rounded-sm text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="flex-1 sm:w-44 px-3 py-2.5 bg-primary border border-border rounded-sm text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-5 py-2.5 bg-gold hover:bg-gold-dark text-primary text-sm font-semibold rounded-sm transition-colors whitespace-nowrap disabled:opacity-50"
                >
                  {status === "loading" ? "..." : "Send"}
                </button>
              </form>

              {/* Dismiss */}
              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                className="absolute top-3 right-4 sm:relative sm:top-auto sm:right-auto text-white/20 hover:text-white/50 transition-colors p-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
