"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// three.js is only fetched when this actually mounts.
const HeroCanvas = dynamic(() => import("./hero-canvas").then((m) => m.HeroCanvas), {
  ssr: false,
});

/**
 * Mounts the WebGL hero only where it earns its cost: desktop-width,
 * fine-pointer, motion-tolerant browsers. Phones/tablets never download
 * three.js — they get the section's dark field + scrims, which the muted
 * shader closely resembles.
 */
export function HeroCanvasGate({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const ok =
      window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(ok);
  }, []);

  if (!enabled) return null;
  return <HeroCanvas className={className} />;
}
