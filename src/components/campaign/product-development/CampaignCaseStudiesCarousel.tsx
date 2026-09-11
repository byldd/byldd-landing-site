"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

import type { CampaignCaseStudy } from "@/components/campaign/product-development/types";

export function CampaignCaseStudiesCarousel({
  studies,
  ariaLabel,
}: {
  studies: readonly CampaignCaseStudy[];
  ariaLabel: string;   
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = studies.length - 1;

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? lastIndex : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === lastIndex ? 0 : current + 1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="mt-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-4"
    >
      <div className="overflow-hidden rounded-[2rem]">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {studies.map((study, index) => (
            <article
              key={study.title}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${studies.length}`}
              aria-hidden={index !== activeIndex}
              className="grid w-full shrink-0 overflow-hidden rounded-[2rem] border border-brand-ink/[0.08] bg-brand-mist shadow-soft md:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="relative min-h-64 overflow-hidden bg-brand-lavender md:min-h-[30rem]">
                <Image
                  src={study.image}
                  alt={`${study.title} product`}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  // className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-violet">
                  {study.result}
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
                  {study.title}
                </h3>
                <p className="mt-5 text-sm leading-8 text-brand-ink/60 md:text-sm">
                  {study.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2" aria-label="Choose a case study slide">
          {studies.map((study, index) => (
            <button
              key={study.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${study.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-9 bg-brand-purple"
                  : "w-2.5 bg-brand-ink/20 hover:bg-brand-ink/40"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous case study"
            className="grid size-12 place-items-center rounded-full border border-brand-ink/15 text-brand-ink transition hover:border-brand-purple hover:bg-brand-purple hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next case study"
            className="grid size-12 place-items-center rounded-full bg-brand-purple text-white transition hover:bg-brand-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {studies[activeIndex]?.title}, slide {activeIndex + 1} of {studies.length}
      </p>
    </div>
  );
}
