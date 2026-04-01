"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [churchName, setChurchName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, churchName }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setEmail("");
      setChurchName("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-gold/10 border border-gold/30 rounded-sm p-8 text-center">
        <p className="text-gold font-display text-2xl">You&apos;re on the list.</p>
        <p className="mt-2 text-white/60">
          We&apos;ll reach out when CEO of Your Cashflow is ready to launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={churchName}
          onChange={(e) => setChurchName(e.target.value)}
          placeholder="Church or Organization Name"
          required
          className="w-full px-4 py-3 bg-surface-light border border-border rounded-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 bg-surface-light border border-border rounded-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-3.5 bg-gold text-primary-dark text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join the Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
