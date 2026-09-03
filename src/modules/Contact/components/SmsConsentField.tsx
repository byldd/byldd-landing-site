"use client";

import { useController, type Control } from "react-hook-form";

import type { ContactFormValues } from "@/schemas/contact-form-schema";

const consentText =
  "I agree to receive text messages from Byldd about my inquiry, including replies, scheduling, and appointment reminders. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help";

export function SmsConsentField({
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
  } = useController({ name: "smsConsent", control, defaultValue: false });

  return (
    <fieldset>
      <legend className="sr-only">SMS consent</legend>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-brand-ink/70">
        <input
          ref={setInputRef}
          type="checkbox"
          name={name}
          checked={value === true}
          onBlur={onBlur}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-1 size-4 shrink-0 cursor-pointer accent-brand-purple"
        />
        <span>{consentText}</span>
      </label>
    </fieldset>
  );
}
