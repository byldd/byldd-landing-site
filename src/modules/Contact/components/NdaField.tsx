"use client";

import { useController, type Control } from "react-hook-form";

import type { ContactFormValues } from "@/schemas/contact-form-schema";

export function NdaField({
  control,
}: {
  control: Control<ContactFormValues>;
}) {
  const {
    field: {
      ref: setInputRef,
      name,
      value,
      onBlur,
      onChange,
    },
  } = useController({ name: "needsNda", control, defaultValue: false });

  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-brand-ink/70">
      <input
        ref={setInputRef}
        type="checkbox"
        name={name}
        checked={value === true}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 shrink-0 cursor-pointer accent-brand-purple"
      />
      <span>I need an NDA</span>
    </label>
  );
}
