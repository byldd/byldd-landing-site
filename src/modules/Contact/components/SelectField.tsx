"use client";

import { ChevronDown } from "lucide-react";
import { useController, type Control } from "react-hook-form";

import type { ContactFormValues } from "@/schemas/contact-form-schema";

type SelectFieldProps = {
  className: string;
  control: Control<ContactFormValues>;
  id: string;
  label: string;
  name: "invoiceVolume" | "erp";
  options: readonly string[];
};

export function SelectField({
  className,
  control,
  id,
  label,
  name,
  options,
}: SelectFieldProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const errorId = `${id}-error`;

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-ink/70">{label}</span>
      <span className="relative block">
        <select
          {...field}
          value={field.value ?? ""}
          id={id}
          className={`${className} appearance-none pr-12 ${
            field.value ? "text-brand-ink" : "text-brand-ink/45"
          }`}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        >
          <option value="" disabled hidden>
            Select one
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-brand-ink/55"
        />
      </span>
      {error && (
        <span id={errorId} className="text-sm text-red-500">
          {error.message}
        </span>
      )}
    </label>
  );
}
