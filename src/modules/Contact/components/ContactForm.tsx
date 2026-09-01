"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/brand/marks";

const budgets = [
  "$10k – $30k",
  "$30k – $50k",
  "$50k – $75k",
  "$75k – $100k",
  "$100k – $150k",
  "$150k+",
];

const field =
  "w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-brand-ink outline-none transition-colors placeholder:text-brand-ink/40 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20";

export function ContactForm({ email }: { email: string }) {
  const [budget, setBudget] = useState(budgets[0]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const from = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`New project enquiry — ${name || "Byldd"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${from}\nBudget: ${budget}\n\n${message}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-brand-ink/70">Name</span>
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-brand-ink/70">Email</span>
          <input name="email" type="email" required className={field} placeholder="you@company.com" />
        </label>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-brand-ink/70">Budget</span>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              type="button"
              key={b}
              onClick={() => setBudget(b)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                budget === b
                  ? "border-brand-purple bg-brand-purple text-white"
                  : "border-brand-ink/15 text-brand-ink/70 hover:border-brand-purple/40"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-brand-ink/70">What are you building?</span>
        <textarea name="message" rows={4} required className={field} placeholder="A sentence or two about your idea…" />
      </label>

      <button
        type="submit"
        className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-purple px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(131,77,251,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-10px_rgba(131,77,251,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
      >
        Send Enquiry
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
