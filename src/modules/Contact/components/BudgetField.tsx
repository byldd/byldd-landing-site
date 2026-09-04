"use client";

import { useController, type Control } from "react-hook-form";

import type { ContactFormValues } from "@/schemas/contact-form-schema";

const budgets = [
  { label: "$10k – $30k", value: "10000-30000$" },
  { label: "$30k – $50k", value: "30000-50000$" },
  { label: "$50k – $75k", value: "50000-75000$" },
  { label: "$75k – $100k", value: "75000-100000$" },
  { label: "$100k – $150k", value: "100000-150000$" },
  { label: "$150k+", value: "150000-200000$" },
];

export function BudgetField({ control }: { control: Control<ContactFormValues> }) {
  const {
    field: budgetField,
    fieldState: { error },
  } = useController({ name: "budget", control });

  return (
    <fieldset
      className="flex flex-col gap-1.5"
      aria-invalid={Boolean(error)}
      aria-describedby={error ? "contact-budget-error" : undefined}
    >
      <legend className="mb-1.5 text-sm font-medium text-brand-ink/70">
        Budget
      </legend>

      <div className="flex flex-wrap gap-2">
        {budgets.map((budget) => {
          const isSelected = budgetField.value === budget.value;

          return (
            <button
              key={budget.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => budgetField.onChange(budget.value)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                isSelected
                  ? "border-brand-purple bg-brand-purple text-white"
                  : "border-brand-ink/15 text-brand-ink/70 hover:border-brand-purple/40"
              }`}
            >
              {budget.label}
            </button>
          );
        })}
      </div>

      {error && (
        <span id="contact-budget-error" className="text-sm text-red-500">
          {error.message}
        </span>
      )}
    </fieldset>
  );
}
