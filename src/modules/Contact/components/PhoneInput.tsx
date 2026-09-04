"use client";

import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/styles";

type PhoneInputProps = {
  className: string;
  error?: string;
  id?: string;
  onChange: (phone: string) => void;
};

export function PhoneInput({
  className,
  error,
  id = "contact-phone",
  onChange,
}: PhoneInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const phone = intlTelInput(input, {
      separateDialCode: true,
      initialCountry: "us",
      countryOrder: ["in", "us", "au"],
      loadUtils: () => import("intl-tel-input/utils"),
    });
    const events = new AbortController();

    const enableCountryListScroll = () => {
      const countryButton = input
        .closest(".iti")
        ?.querySelector<HTMLButtonElement>(".iti__selected-country");
      const selectorId = countryButton?.getAttribute("aria-controls");

      if (selectorId) {
        document.getElementById(selectorId)?.setAttribute("data-lenis-prevent", "");
      }
    };

    const syncPhone = () => onChange(phone.getNumber());

    input.addEventListener("input", syncPhone, { signal: events.signal });
    input.addEventListener("countrychange", syncPhone, { signal: events.signal });
    input.addEventListener("open:countryselector", enableCountryListScroll, {
      signal: events.signal,
    });

    return () => {
      events.abort();
      phone.destroy();
    };
  }, [onChange]);

  return (
    <label className="flex w-full flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-ink/70">Phone</span>
      <input
        ref={inputRef}
        id={id}
        type="tel"
        className={`${className} !pl-[100px]`}
        placeholder="Phone number"
        autoComplete="tel"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="text-sm text-red-500">
          {error}
        </span>
      )}
    </label>
  );
}
