"use client";

import { useEffect, useState } from "react";

export function StickyAuditBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEnd = document.getElementById("ai-hero-end");
    if (!heroEnd) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    observer.observe(heroEnd);

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-purple/25 bg-brand-night/95 px-5 py-3 text-brand-mist shadow-2xl backdrop-blur transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <p className="hidden font-semibold sm:block">Free 30-min AI audit. A real plan, no cost, no pressure.</p>
        <a href="#ai-audit-form" className="ml-auto rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-violet">
          Get my AI plan
        </a>
      </div>
    </aside>
  );
}
