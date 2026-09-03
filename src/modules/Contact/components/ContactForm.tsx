"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowUpRight } from "@/components/brand/marks";
import { BudgetField } from "@/modules/Contact/components/BudgetField";
import { PhoneInput } from "@/modules/Contact/components/PhoneInput";
import { SmsConsentField } from "@/modules/Contact/components/SmsConsentField";
import { TextareaField } from "@/modules/Contact/components/TextareaField";
import { TextInputField } from "@/modules/Contact/components/TextInputField";
import {
  openCalendly,
  preloadCalendly,
} from "@/modules/Contact/utils/calendly";
import {
  formatLeadQueryParams,
  getIpAddress,
  getLeadQueryParams,
  persistLeadQueryParams,
} from "@/modules/Contact/utils/lead-attribution";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/schemas/contact-form-schema";

const field =
  "w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-brand-ink outline-none transition-colors placeholder:text-brand-ink/40 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20";
const formEndpoint = "/api/contact";

type ContactFormProps = {
  className?: string;
  idPrefix?: string;
  submitLabel?: string;
};

export function ContactForm({
  className = "",
  idPrefix = "contact",
  submitLabel = "Book a Strategy Session",
}: ContactFormProps = {}) {
  const [phoneInputKey, setPhoneInputKey] = useState(0);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
      smsConsent: false,
    },
  });

  useEffect(() => {
    persistLeadQueryParams();
    void preloadCalendly().catch(() => undefined);
  }, []);

  const handlePhoneChange = useCallback(
    (phone: string) => {
      setValue("phone", phone, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [setValue],
  );

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const ip = await getIpAddress();
      const params = getLeadQueryParams();
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          ip,
          agent: window.navigator.userAgent,
          email: values.email,
          phone: values.phone,
          budget: values.budget,
          message: values.message,
          isChecked: values.smsConsent === true,
          pageUrl: window.location.href,
          utm: formatLeadQueryParams(params),
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok || result?.error) {
        throw new Error(
          result?.error || "We couldn't submit your enquiry. Please try again.",
        );
      }

      await openCalendly(values.name, values.email);
      reset();
      setPhoneInputKey((key) => key + 1);
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't submit your enquiry. Please try again.",
      });
    }
  };

  return (
    <form
      className={`flex flex-col gap-4 ${className}`}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <TextInputField
          id={`${idPrefix}-name`}
          label="Name"
          registration={register("name")}
          className={field}
          error={errors.name?.message}
          placeholder="Your full name"
          autoComplete="name"
        />
        <TextInputField
          id={`${idPrefix}-email`}
          label="Email"
          registration={register("email")}
          className={field}
          error={errors.email?.message}
          type="email"
          placeholder="Your email ID"
          autoComplete="email"
        />
      </div>

      <PhoneInput
        key={phoneInputKey}
        id={`${idPrefix}-phone`}
        className={field}
        error={errors.phone?.message}
        onChange={handlePhoneChange}
      />

      <BudgetField control={control} idPrefix={idPrefix} />

      <TextareaField
        id={`${idPrefix}-message`}
        label="What are you building?"
        registration={register("message")}
        className={field}
        error={errors.message?.message}
        placeholder="Tell us about your product..."
        hint="(NDA Covered)"
      />

      <SmsConsentField control={control} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-purple px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(131,77,251,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-10px_rgba(131,77,251,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : submitLabel}

        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      <p className="m-0 text-center text-xs text-brand-ink/60">
        <Link href="/privacy" className="text-brand-purple hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-brand-purple hover:underline">
          Terms of Service
        </Link>
      </p>

      {errors.root && (
        <p
          role="alert"
          aria-live="polite"
          className="m-0 text-center text-sm text-red-500"
        >
          {errors.root.message}
        </p>
      )}
    </form>
  );
}
