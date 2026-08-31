"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useReducedMotionSafe } from "./primitives";

/**
 * Top scroll-progress bar — a single hairline that fills left→right as the page
 * scrolls. Present on every viewport.
 */
export function ScrollThread() {
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30, mass: 0.4 });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-purple to-brand-purple-light"
      style={{ scaleX: progress }}
    />
  );
}
