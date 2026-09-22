"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useId, useState } from "react";
import type { Iso2 } from "intl-tel-input";
import { ArrowUpRight } from "@/components/brand/marks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/modules/Contact/components/ContactForm";

type DialogWithFormProps = {
  children?: ReactNode;
  defaultCountry?: Iso2;
  idPrefix?: string;
  onOpen?: () => void;
  triggerClassName?: string;
  triggerVariant?: "solid" | "outline" | "outlineLight";
};

export function DialogWithForm({
  children = "Get Started",
  defaultCountry,
  idPrefix,
  onOpen,
  triggerClassName = "",
  triggerVariant = "solid",
}: DialogWithFormProps = {}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const generatedId = useId().replaceAll(":", "");
  const formIdPrefix = idPrefix ?? `contact-modal-${generatedId}`;
  const formDefaultCountry =
    defaultCountry ??
    (pathname === "/campaign/uae_product-development-for-founders"
      ? "ae"
      : "us");
  const triggerVariants = {
    solid:
      "bg-brand-purple text-white shadow-[0_10px_30px_-8px_rgba(131,77,251,0.6)] hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-10px_rgba(131,77,251,0.75)]",
    outline:
      "border border-brand-ink/20 text-brand-ink hover:border-brand-purple hover:text-brand-violet",
    outlineLight:
      "border border-white/25 text-white hover:border-brand-purple-light hover:text-brand-purple-light",
  } as const;

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) onOpen?.();
      }}
    >
      <DialogTrigger
        className={`group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 ${triggerVariants[triggerVariant]} ${triggerClassName}`}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </DialogTrigger>

      <DialogContent
        data-lenis-prevent
        overlayClassName="z-[100] bg-brand-night/45"
        className="z-[101] max-h-[calc(100dvh-2rem)] max-w-2xl touch-pan-y overflow-y-auto overscroll-contain rounded-card bg-[#FBFBFB] p-6 text-brand-ink sm:max-w-2xl md:p-8"
      >
        <DialogHeader className="pr-10">
          <DialogTitle className="display text-3xl md:text-4xl">
            Let&apos;s build your product
          </DialogTitle>
          <DialogDescription className="text-brand-ink/60">
            Tell us about your idea and we&apos;ll help you plan the next step.
          </DialogDescription>
        </DialogHeader>

        <ContactForm
          idPrefix={formIdPrefix}
          defaultCountry={formDefaultCountry}
        />
      </DialogContent>
    </Dialog>
  );
}
