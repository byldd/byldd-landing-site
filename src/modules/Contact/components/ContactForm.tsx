"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Iso2 } from "intl-tel-input";

import { ArrowUpRight } from "@/components/brand/marks";
import { useCaptcha } from "@/hooks/use-captcha";
import { BudgetField } from "@/modules/Contact/components/BudgetField";
import { PhoneInput } from "@/modules/Contact/components/PhoneInput";
import { SmsConsentField } from "@/modules/Contact/components/SmsConsentField";
import { TextareaField } from "@/modules/Contact/components/TextareaField";
import { TextInputField } from "@/modules/Contact/components/TextInputField";
import { TimeConsumingTaskField } from "@/modules/Contact/components/TimeConsumingTaskField";
import { trackContactFormSubmission } from "@/modules/Contact/utils/analytics";
import {
  isCalendlyScheduledEvent,
  openCalendly,
  preloadCalendly,
} from "@/modules/Contact/utils/calendly";
import {
  formatLeadQueryParams,
  getIpAddress,
  getLeadQueryParams,
  getLeadUtmData,
  persistLeadQueryParams,
} from "@/modules/Contact/utils/lead-attribution";
import {
  aiAuditContactFormSchema,
  contactFormSchema,
  type ContactFormValues,
  type ContactSubmission,
} from "@/schemas/contact-form-schema";

const field =
  "w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-brand-ink outline-none transition-colors placeholder:text-brand-ink/40 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20";
const formEndpoint = "/api/contact";
const calendlyBookingEndpoint = "/api/contact/calendly";

type ContactFormProps = {
  className?: string;
  defaultCountry?: Iso2;
  idPrefix?: string;
  submitLabel?: string;
  variant?: "default" | "aiAudit";
};

export function ContactForm({
  className = "",
  defaultCountry = "us",
  idPrefix = "contact",
  submitLabel = "Book a Strategy Session",
  variant = "default",
}: ContactFormProps = {}) {
  const isAiAudit = variant === "aiAudit";
  const [phoneInputKey, setPhoneInputKey] = useState(0);
  const [pendingCalendlySubmission, setPendingCalendlySubmission] =
    useState<ContactSubmission | null>(null);
  const { getCaptchaToken } = useCaptcha();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(
      isAiAudit ? aiAuditContactFormSchema : contactFormSchema,
    ),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      budget: "",
      timeConsumingTask: "",
      message: isAiAudit ? "AI opportunity audit request" : "",
      smsConsent: false,
    },
  });

  useEffect(() => {
    persistLeadQueryParams();
    void preloadCalendly().catch(() => undefined);
  }, []);

  useEffect(() => {
    const handleCalendlyMessage = (event: MessageEvent) => {
      if (!isCalendlyScheduledEvent(event)) return;

      const submission = pendingCalendlySubmission;
      if (!submission) return;

      setPendingCalendlySubmission(null);
      void (async () => {
        try {
          const response = await fetch(calendlyBookingEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...submission,
              calendlyEventUri: event.data.payload?.event?.uri,
              calendlyInviteeUri: event.data.payload?.invitee?.uri,
            }),
            keepalive: true,
          });

          if (!response.ok) {
            throw new Error("Calendly automation failed");
          }
        } catch {
          setError("root", {
            type: "server",
            message:
              "Your meeting was booked, but we couldn't save all of its details.",
          });
        }
      })();
    };

    window.addEventListener("message", handleCalendlyMessage);
    return () => window.removeEventListener("message", handleCalendlyMessage);
  }, [pendingCalendlySubmission, setError]);

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
      const [recaptchaToken, ip] = await Promise.all([
        getCaptchaToken("submit"),
        getIpAddress(),
      ]);
      const params = getLeadQueryParams();
      const submission: ContactSubmission = {
        name: values.name,
        businessName: isAiAudit ? values.businessName : undefined,
        ip,
        agent: window.navigator.userAgent,
        email: values.email,
        phone: values.phone,
        budget: values.budget,
        timeConsumingTask: isAiAudit ? values.timeConsumingTask : undefined,
        message:
          isAiAudit && values.timeConsumingTask
            ? `AI opportunity audit: ${values.timeConsumingTask}`
            : values.message,
        isChecked: values.smsConsent === true,
        pageUrl: window.location.href,
        utm: formatLeadQueryParams(params),
        utmData: getLeadUtmData(params),
        recaptchaToken,
      };
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok || result?.error) {
        throw new Error(
          result?.error || "We couldn't submit your enquiry. Please try again.",
        );
      }

      trackContactFormSubmission();
      setPendingCalendlySubmission(submission);
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
        {isAiAudit && (
          <TextInputField
            id={`${idPrefix}-business-name`}
            label="Business name"
            registration={register("businessName")}
            className={field}
            error={errors.businessName?.message}
            placeholder="Business name"
            autoComplete="organization"
            required
          />
        )}
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
        {isAiAudit && (
          <PhoneInput
            key={phoneInputKey}
            id={`${idPrefix}-phone`}
            className={field}
            defaultCountry={defaultCountry}
            error={errors.phone?.message}
            onChange={handlePhoneChange}
          />
        )}
      </div>

      {!isAiAudit && (
        <PhoneInput
          key={phoneInputKey}
          id={`${idPrefix}-phone`}
          className={field}
          defaultCountry={defaultCountry}
          error={errors.phone?.message}
          onChange={handlePhoneChange}
        />
      )}

      {isAiAudit && (
        <TimeConsumingTaskField
          id={`${idPrefix}-time-consuming-task`}
          className={field}
          control={control}
        />
      )}

      <BudgetField control={control} idPrefix={idPrefix} />

      {!isAiAudit && (
        <TextareaField
          id={`${idPrefix}-message`}
          label="What are you building?"
          registration={register("message")}
          className={field}
          error={errors.message?.message}
          placeholder="Tell us about your product..."
          hint="(NDA Covered)"
        />
      )}

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
