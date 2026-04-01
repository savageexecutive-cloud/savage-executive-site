"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-gold/10 border border-gold/30 rounded-sm p-8 text-center">
        <p className="text-gold font-display text-2xl">Message sent.</p>
        <p className="mt-2 text-white/60">
          I&apos;ll review your inquiry and get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 bg-surface-light border border-border rounded-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={formData.name}
        onChange={(e) => updateField("name", e.target.value)}
        placeholder="Your Name"
        required
        className={inputClasses}
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
        placeholder="Email Address"
        required
        className={inputClasses}
      />
      <input
        type="text"
        value={formData.organization}
        onChange={(e) => updateField("organization", e.target.value)}
        placeholder="Church or Organization Name"
        required
        className={inputClasses}
      />
      <textarea
        value={formData.message}
        onChange={(e) => updateField("message", e.target.value)}
        placeholder="Tell me about your organization and what you're facing..."
        required
        rows={5}
        className={inputClasses}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-3.5 bg-gold text-primary-dark text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
