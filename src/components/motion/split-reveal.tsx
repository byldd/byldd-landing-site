"use client";

import { motion, type Variants } from "motion/react";
import { Fragment, type ElementType } from "react";
import { useReducedMotionSafe } from "./primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const word: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.75, ease: EASE } },
};

/**
 * Masked, word-by-word reveal — each word wipes up out of an overflow-hidden
 * clip on scroll-in. `gradientFrom` applies the brand gradient to words from
 * that index onward. Reduced-motion renders the plain text.
 */
export function MaskText({
  text,
  className,
  as: Tag = "div",
  delay = 0,
  gradientFrom,
  amount = 0.6,
  suffix,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  gradientFrom?: number;
  amount?: number;
  /** rendered after the last word (e.g. the deck's arrow pill) */
  suffix?: React.ReactNode;
}) {
  const reduce = useReducedMotionSafe();
  const words = text.split(" ");

  if (reduce) {
    return (
      <Tag className={className}>
        {gradientFrom === undefined ? (
          text
        ) : (
          <>
            {words.slice(0, gradientFrom).join(" ")}{" "}
            <span className="text-gradient">{words.slice(gradientFrom).join(" ")}</span>
          </>
        )}
        {suffix && <> {suffix}</>}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        transition={{ delayChildren: delay }}
      >
        {words.map((w, i) => {
          const grad = gradientFrom !== undefined && i >= gradientFrom;
          return (
            <Fragment key={`${w}-${i}`}>
              <span
                className="inline-block overflow-hidden align-bottom"
                style={{ paddingBottom: "0.14em", marginBottom: "-0.14em" }}
              >
                <motion.span data-reveal className={`inline-block ${grad ? "text-gradient" : ""}`} variants={word}>
                  {w}
                </motion.span>
              </span>
              {i < words.length - 1 ? " " : ""}
            </Fragment>
          );
        })}
        {suffix && (
          <>
            {" "}
            <span
              className="inline-block overflow-hidden align-bottom"
              style={{ paddingBottom: "0.14em", marginBottom: "-0.14em" }}
            >
              <motion.span data-reveal className="inline-block" variants={word}>
                {suffix}
              </motion.span>
            </span>
          </>
        )}
      </motion.span>
    </Tag>
  );
}
