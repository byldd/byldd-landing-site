"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "../brand/icons";
import { serviceMenu } from "@/utils/services";

/**
 * Services mega-menu — reproduces the current byldd.com sub-menu (categories on
 * the left, that category's sub-services on the right). Opens on hover and on
 * keyboard focus; the trigger itself
 * still navigates to /services.
 */
export function ServicesMenu({ dark, focusRing }: { dark: boolean; focusRing: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  // Small grace period so diagonal mouse travel into the panel doesn't close it.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onFocusOut = () => {
      if (!wrapRef.current?.contains(document.activeElement)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocusOut);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocusOut);
    };
  }, [open]);

  const current = serviceMenu[active];

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/services"
        aria-expanded={open}
        aria-controls={panelId}
        onFocus={() => setOpen(true)}
        className={`-my-2 flex items-center gap-1.5 rounded-md py-2 text-sm font-medium transition-colors ${
          dark ? "text-brand-ink/70 hover:text-brand-ink" : "text-white/80 hover:text-white"
        } ${focusRing}`}
      >
        What We Build
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Link>

      {/* Centred on the VIEWPORT, not on the trigger — the trigger sits left of
          centre, so a trigger-anchored panel this wide clipped off-screen.
          It stays a DOM descendant, so hovering it still counts as hovering
          the wrapper and the menu doesn't close. */}
      <div
        id={panelId}
        className={`fixed left-1/2 top-[3.9rem] z-50 w-[min(58rem,92vw)] -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[15rem_1fr] overflow-hidden rounded-card border border-brand-ink/10 bg-white shadow-soft">
          {/* Categories */}
          <div className="flex flex-col gap-0.5 border-r border-brand-ink/8 bg-brand-mist/60 p-3">
            {serviceMenu.map((m, i) => (
              <Link
                key={m.category}
                href={m.landing ? `/services/${m.landing.slug}` : "/services"}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${
                  i === active
                    ? "bg-white text-brand-ink shadow-sm"
                    : "text-brand-ink/65 hover:text-brand-ink"
                }`}
              >
                {m.landing && (
                  <Icon
                    name={m.landing.icon}
                    className={`h-4 w-4 shrink-0 ${i === active ? "text-brand-purple" : "text-brand-ink/35"}`}
                  />
                )}
                {m.category}
              </Link>
            ))}
          </div>

          {/* Sub-services for the active category */}
          <div className="p-5">
            {current?.landing && (
              <Link
                href={`/services/${current.landing.slug}`}
                onClick={() => setOpen(false)}
                className="group block rounded-lg p-3 transition-colors hover:bg-brand-mist/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                <span className="block text-sm font-semibold text-brand-ink group-hover:text-brand-violet">
                  {current.landing.title} overview
                </span>
                <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-brand-ink/55">
                  {current.landing.tagline}
                </span>
              </Link>
            )}

            {current && current.children.length > 0 ? (
              <div className="mt-1 grid grid-cols-2 gap-0.5">
                {current.children.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-brand-ink/70 transition-colors hover:bg-brand-mist/70 hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile accordion version for the header sheet. */
export function ServicesAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [openCat, setOpenCat] = useState<string | null>(null);

  return (
    <div className="border-b border-brand-ink/10 py-3">
      <span className="display block py-2 text-4xl text-brand-ink">What We Build</span>
      <div className="mt-1 flex flex-col">
        {serviceMenu.map((m) => {
          const isOpen = openCat === m.category;
          const hasChildren = m.children.length > 0;
          return (
            <div key={m.category} className="border-t border-brand-ink/8">
              <div className="flex items-center justify-between gap-3">
                <Link
                  href={m.landing ? `/services/${m.landing.slug}` : "/services"}
                  onClick={onNavigate}
                  className="flex flex-1 items-center gap-2.5 py-3 text-base font-medium text-brand-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  {m.landing && <Icon name={m.landing.icon} className="h-4 w-4 shrink-0 text-brand-purple" />}
                  {m.category}
                </Link>
                {hasChildren && (
                  <button
                    type="button"
                    onClick={() => setOpenCat(isOpen ? null : m.category)}
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Hide" : "Show"} ${m.category} services`}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brand-ink/15 text-brand-ink/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                )}
              </div>
              {hasChildren && isOpen && (
                <div className="flex flex-col pb-2 pl-7">
                  {m.children.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={onNavigate}
                      className="py-2 text-sm text-brand-ink/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
