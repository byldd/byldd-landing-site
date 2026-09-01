"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import { useReducedMotionSafe } from "./primitives";

/** Routes in-page anchor clicks through Lenis for smooth, eased jumps. */
function AnchorScroll() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -88 });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotionSafe();
  if (reduce) return <>{children}</>;
  return (
    <ReactLenis root options={{ duration: 0.95, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.6 }}>
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
