"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useController, type Control } from "react-hook-form";

import type { ContactFormValues } from "@/schemas/contact-form-schema";

export type BudgetOption = {
  label: string;
  value: string;
};

const defaultBudgets: readonly BudgetOption[] = [
  {
    label: "Ready to invest in that range",
    value: "Ready to invest in that range",
  },
  {
    label: "I’d need a smaller first phase to start",
    value: "I’d need a smaller first phase to start",
  },
  {
    label: "That’s more than I can invest right now",
    value: "That’s more than I can invest right now",
  },
];

type BudgetFieldProps = {
  control: Control<ContactFormValues>;
  idPrefix?: string;
  options?: readonly BudgetOption[];
  question?: string;
};

export function BudgetField({
  control,
  idPrefix = "contact",
  options = defaultBudgets,
  question = "Most products we build land between $15k and $40k. Where does that put you?",
}: BudgetFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    field: budgetField,
    fieldState: { error },
  } = useController({ name: "budget", control });
  const errorId = `${idPrefix}-budget-error`;
  const optionsId = `${idPrefix}-budget-options`;
  const selectedLabel = options.find(
    (option) => option.value === budgetField.value,
  )?.label;

  return (
    <fieldset
      className="flex min-w-0 flex-col gap-1.5"
      aria-invalid={Boolean(error)}
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="mb-1.5 text-sm font-medium text-brand-ink/70">
        {question}
      </legend>

      <div
        className="relative min-w-0 w-full"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={optionsId}
          aria-label={question}
          aria-describedby={error ? errorId : undefined}
          className={`flex min-h-12 w-full items-center justify-between gap-4 rounded-xl border border-brand-ink/15 bg-white py-3 pr-4 pl-4 text-left text-base leading-snug outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 ${
            selectedLabel ? "text-brand-ink" : "text-brand-ink/40"
          }`}
        >
          <span className="min-w-0 flex-1">
            {selectedLabel ?? "Select the option"}
          </span>
          <ChevronDown
            className={`mr-1 size-4 shrink-0 text-brand-ink/45 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div
            id={optionsId}
            role="listbox"
            aria-label={question}
            className="absolute top-full right-0 left-0 z-50 mt-2 max-h-60 w-full overflow-y-auto overscroll-contain rounded-xl border border-brand-ink/15 bg-white p-1.5 shadow-lg"
          >
            {options.map((budget) => {
              const isSelected = budgetField.value === budget.value;

              return (
                <button
                  key={budget.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    budgetField.onChange(budget.value);
                    setIsOpen(false);
                  }}
                  className={`min-h-11 w-full rounded-lg px-3 py-2.5 text-left text-sm leading-snug transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple/20 ${
                    isSelected
                      ? "bg-brand-purple/10 text-brand-purple"
                      : "text-brand-ink hover:bg-brand-purple/5"
                  }`}
                >
                  {budget.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {error && (
        <span id={errorId} className="text-sm text-red-500">
          {error.message}
        </span>
      )}
    </fieldset>
  );
}
