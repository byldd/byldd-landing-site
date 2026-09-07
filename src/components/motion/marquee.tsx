"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useEffect, useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { useReducedMotionSafe } from "./primitives";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Infinite marquee whose speed + skew react to scroll velocity. Two copies of
 * the content loop seamlessly. Reduced-motion renders a single static row.
 *
 * With `interactive`, the row can also be dragged with a cursor/finger or
 * nudged with a trackpad's horizontal scroll. Manual input feeds the same
 * `baseX` the auto-scroll drives, so the loop stays seamless and the animation
 * simply resumes where the user let go.
 */
export function Marquee({
  children,
  baseVelocity = 2,
  className,
  pauseOnHover = false,
  interactive = false,
}: {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
  /** Hold the row still while the pointer is over it, so cards stay clickable. */
  pauseOnHover?: boolean;
  /** Allow drag / horizontal-wheel control of the row. */
  interactive?: boolean;
}) {
  const reduce = useReducedMotionSafe();
  const pausedRef = useRef(false);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skew = useTransform(smoothVelocity, [-1000, 0, 1000], [-4, 0, 4], { clamp: true });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);

  // drag state
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartBase = useRef(0);
  const dragMoved = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (visibleRef.current = e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /** px of pointer travel -> percent of the (two-copy) track. */
  const pxToPercent = (px: number) => {
    const w = trackRef.current?.scrollWidth ?? 0;
    return w ? (px / w) * 100 : 0;
  };

  // Horizontal wheel / trackpad swipe. Non-passive so we can keep the page still
  // while the row is being nudged sideways.
  useEffect(() => {
    if (!interactive) return;
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!dx) return;
      e.preventDefault();
      baseX.set(baseX.get() - pxToPercent(dx));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [interactive, baseX]);

  useAnimationFrame((_, delta) => {
    if (!visibleRef.current || document.hidden || pausedRef.current || dragging.current) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  if (reduce) {
    // No animation, but still let people scroll the row natively. Scrollbar
    // chrome is hidden (no-scrollbar) — a bare overflow-x:auto otherwise shows
    // the OS scrollbar track sitting under the cards.
    return (
      <div className={`no-scrollbar flex overflow-x-auto ${className ?? ""}`}>
        <div className="flex shrink-0">{children}</div>
      </div>
    );
  }

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    if (e.pointerType === "mouse" && e.button !== 0) return; // left-button drags only

    // Pointer capture on a clickable child can retarget pointerup/click to this
    // container in desktop browsers. Keep native mouse clicks on cards intact;
    // desktop dragging still works from the gaps, while touch dragging remains
    // available across the full track.
    if (
      e.pointerType === "mouse" &&
      (e.target as Element).closest("button, a, input, select, textarea")
    ) {
      return;
    }

    dragging.current = true;
    dragMoved.current = false;
    dragStartX.current = e.clientX;
    dragStartBase.current = baseX.get();
    (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 4) dragMoved.current = true;
    baseX.set(dragStartBase.current + pxToPercent(dx));
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
  };

  // A drag shouldn't also fire the card's click.
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragMoved.current) {
      e.preventDefault();
      e.stopPropagation();
      dragMoved.current = false;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`flex overflow-hidden ${interactive ? "cursor-grab active:cursor-grabbing" : ""} ${className ?? ""}`}
      style={{ skewX: skew, touchAction: interactive ? "pan-y" : undefined }}
      onMouseEnter={pauseOnHover ? () => (pausedRef.current = true) : undefined}
      onMouseLeave={pauseOnHover ? () => (pausedRef.current = false) : undefined}
      onPointerDown={interactive ? onPointerDown : undefined}
      onPointerMove={interactive ? onPointerMove : undefined}
      onPointerUp={interactive ? endDrag : undefined}
      onPointerCancel={interactive ? endDrag : undefined}
      onClickCapture={interactive ? onClickCapture : undefined}
    >
      <motion.div ref={trackRef} className="flex shrink-0 flex-nowrap" style={{ x }}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
