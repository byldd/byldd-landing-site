import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./brand/marks";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>;
}

/**
 * Section label. Deliberately NOT the tiny uppercase micro-kicker (that reads as
 * a template tell) — a larger, sentence-case, medium-weight overline instead.
 */
export function Eyebrow({
  children,
  tone = "purple",
  className = "",
}: {
  children: ReactNode;
  tone?: "purple" | "muted" | "light";
  className?: string;
}) {
  const color =
    tone === "light"
      ? "text-brand-purple-light"
      : tone === "muted"
        ? "text-brand-ink/55"
        : "text-brand-violet";
  return (
    <span className={`text-base font-semibold tracking-tight ${color} ${className}`}>
      {children}
    </span>
  );
}

type PillProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outlineLight";
  className?: string;
};

/** Pill CTA with the brand's up-right arrow — "Let's Byldd ↗". */
export function Pill({ href, children, variant = "solid", className = "" }: PillProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2";
  const variants = {
    solid:
      "bg-brand-purple text-white shadow-[0_10px_30px_-8px_rgba(131,77,251,0.6)] hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-10px_rgba(131,77,251,0.75)]",
    outline:
      "border border-brand-ink/20 text-brand-ink hover:border-brand-purple hover:text-brand-violet",
    outlineLight:
      "border border-white/25 text-white hover:border-brand-purple-light hover:text-brand-purple-light",
  } as const;
  const isAnchor = /^(#|https?:|mailto:|tel:)/.test(href);
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  return isAnchor ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Section header block: eyebrow + display heading + optional lead paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const titleColor = tone === "light" ? "text-white" : "text-brand-ink";
  const leadColor = tone === "light" ? "text-white/70" : "text-brand-ink/65";
  return (
    <div
      className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : ""} ${className}`}
    >
      <Eyebrow tone={tone === "light" ? "light" : "purple"}>{eyebrow}</Eyebrow>
      <h2 className={`display text-pretty text-[2.5rem] leading-[1.02] sm:text-5xl lg:text-[3.75rem] ${titleColor}`}>
        {title}
      </h2>
      {lead && (
        <p className={`max-w-2xl text-lg leading-relaxed ${leadColor} ${align === "center" ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
