"use client";

import { useState } from "react";

type Variant = "inline" | "hero";

export function LeadMagnetForm({ variant = "inline" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`text-center ${variant === "hero" ? "py-4" : "py-6"}`}
      >
        <p className="text-gold font-display text-2xl">Check your inbox.</p>
        <p className="mt-2 text-white/60 text-sm">
          The Savage Advantage Playbook is on its way.
        </p>
      </div>
    );
  }

  const inputBase =
    "px-4 py-3 bg-surface-light border border-border rounded-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm";

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
            required
            className={`${inputBase} flex-1`}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className={`${inputBase} flex-1`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-3 w-full px-8 py-3.5 bg-gold text-primary-dark text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors disabled:opacity-50 btn-glow"
        >
          {status === "loading"
            ? "Sending..."
            : "Get the Free Playbook"}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-xs text-center mt-2">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="mt-3 text-xs text-white/30 text-center">
          Plus weekly insights from The Briefing. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
          required
          className={`${inputBase} flex-1`}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className={`${inputBase} flex-1`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 bg-gold text-primary-dark text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors disabled:opacity-50 btn-glow"
      >
        {status === "loading" ? "Sending..." : "Get the Free Playbook"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs text-center mt-2">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="mt-2 text-xs text-white/30 text-center">
        Plus weekly insights from The Briefing. Unsubscribe anytime.
      </p>
    </form>
  );
}
