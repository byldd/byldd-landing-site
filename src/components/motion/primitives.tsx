"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * prefers-reduced-motion, evaluated only AFTER mount. During SSR and the first
 * client paint this returns false so both render the identical (animated) tree —
 * avoiding a hydration mismatch — then collapses to the reduced (plain) tree on
 * the next tick for users who ask for less motion.
 */
export function useReducedMotionSafe() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? !!reduce : false;
}

/**
 * True only on fine-pointer (mouse/trackpad) devices, evaluated after mount so
 * SSR/first paint match. Used to skip pointer-only affordances on touch.
 */
export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);
  return fine;
}

/** Fade + rise as the element scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotionSafe();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Container whose <StaggerItem> children reveal in sequence. */
export function Stagger({
  children,
  className,
  amount = 0.2,
  role,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  role?: string;
}) {
  const reduce = useReducedMotionSafe();
  if (reduce)
    return (
      <div className={className} role={role}>
        {children}
      </div>
    );
  return (
    <motion.div
      role={role}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  role,
}: {
  children: ReactNode;
  className?: string;
  role?: string;
}) {
  const reduce = useReducedMotionSafe();
  if (reduce)
    return (
      <div className={className} role={role}>
        {children}
      </div>
    );
  return (
    <motion.div data-reveal role={role} className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/** Vertical parallax drift tied to the element's own scroll progress. */
export function Parallax({
  children,
  className,
  distance = 70,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
