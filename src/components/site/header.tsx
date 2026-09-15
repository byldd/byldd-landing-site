"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "../brand/logo";
import { Container } from "../ui";
import { Magnetic } from "../motion/magnetic";
import { ServicesMenu, ServicesAccordion } from "./services-menu";
import { DialogWithForm } from "@/components/modal/modal";
import { nav } from "@/utils/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) sheetRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const f = sheetRef.current?.querySelectorAll<HTMLElement>("a, button");
        if (!f || f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile sheet (and release the body scroll-lock) if the viewport
  // grows past the lg breakpoint while it's open.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Over the dark WebGL hero (top), use light chrome; on light sections, dark.
  const dark = scrolled || open;
  const ring = dark
    ? "focus-visible:ring-offset-brand-mist"
    : "focus-visible:ring-offset-brand-night";
  const focusRing = `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 ${ring}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-50 transition-all duration-300 ${
          open
            ? "border-b border-brand-ink/5 bg-brand-mist"
            : scrolled
              ? "border-b border-brand-ink/5 bg-brand-mist/80 backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <Container className="flex h-18 items-center justify-between py-3.5">
          <Magnetic>
            <Link href="/" className={`flex items-center rounded-lg ${focusRing}`} aria-label="Byldd home">
              <Logo className="text-[26px]" tone={dark ? "dark" : "light"} />
            </Link>
          </Magnetic>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) =>
              item.href === "/services" ? (
                <ServicesMenu key={item.href} dark={dark} focusRing={focusRing} />
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={`-my-2 rounded-md py-2 text-sm font-medium transition-colors ${
                    dark ? "text-brand-ink/70 hover:text-brand-ink" : "text-white/80 hover:text-white"
                  } ${focusRing}`}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <DialogWithForm idPrefix="header-contact-desktop" />
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              dark ? "border-brand-ink/15" : "border-white/25"
            } ${focusRing}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <X className="h-5 w-5 text-brand-ink" aria-hidden />
            ) : (
              <Menu className={`h-5 w-5 ${dark ? "text-brand-ink" : "text-white"}`} aria-hidden />
            )}
          </button>
        </Container>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        data-lenis-prevent
        className={`fixed inset-0 z-40 touch-pan-y overflow-y-auto overscroll-contain bg-brand-mist transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex min-h-full flex-col gap-2 pb-12 pt-24">
          {nav.map((item) =>
            item.href === "/services" ? (
              <ServicesAccordion key={item.href} onNavigate={() => setOpen(false)} />
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display rounded-lg border-b border-brand-ink/10 py-5 text-4xl text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-mist"
              >
                {item.label}
              </a>
            ),
          )}
          <div className="mt-8">
            <DialogWithForm
              idPrefix="header-contact-mobile"
              onOpen={() => setOpen(false)}
              triggerClassName="w-full text-base"
            />
          </div>
        </Container>
      </div>

    </header>
  );
}
