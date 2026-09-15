"use client";

import { ChevronDown } from "lucide-react";
import { useController, type Control } from "react-hook-form";

import type { ContactFormValues } from "@/schemas/contact-form-schema";

const timeConsumingTasks = [
  "Answering customer questions & inbox",
  "Quoting, estimates & proposals",
  "Scheduling & dispatch",
  "Invoices, receipts & bookkeeping",
  "Lead follow-up & no-shows",
  "Reporting & data entry",
  "Something else",
];

type TimeConsumingTaskFieldProps = {
  className: string;
  control: Control<ContactFormValues>;
  id: string;
};

export function TimeConsumingTaskField({
  className,
  control,
  id,
}: TimeConsumingTaskFieldProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name: "timeConsumingTask", control });
  const errorId = `${id}-error`;

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-ink/70">
        What eats the most time today?
      </span>
      <span className="relative block">
        <select
          {...field}
          id={id}
          className={`${className} appearance-none pr-12 ${
            field.value ? "text-brand-ink" : "text-brand-ink/45"
          }`}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        >
          <option value="" disabled hidden>
            What eats the most time today?
          </option>
          {timeConsumingTasks.map((task) => (
            <option key={task} value={task}>
              {task}
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
