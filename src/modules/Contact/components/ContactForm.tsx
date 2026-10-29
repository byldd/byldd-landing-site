"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Iso2 } from "intl-tel-input";

import { ArrowUpRight } from "@/components/brand/marks";
import { useCaptcha } from "@/hooks/use-captcha";
import {
  BudgetField,
  type BudgetOption,
} from "@/modules/Contact/components/BudgetField";
import { NdaField } from "@/modules/Contact/components/NdaField";
import { PhoneInput } from "@/modules/Contact/components/PhoneInput";
import { SelectField } from "@/modules/Contact/components/SelectField";
import { SmsConsentField } from "@/modules/Contact/components/SmsConsentField";
import { TextareaField } from "@/modules/Contact/components/TextareaField";
import { TextInputField } from "@/modules/Contact/components/TextInputField";
import { TimeConsumingTaskField } from "@/modules/Contact/components/TimeConsumingTaskField";
import { CountryCode } from "@/modules/Contact/enums/country-code";
import { trackContactFormSubmission } from "@/modules/Contact/utils/analytics";
import {
  isCalendlyScheduledEvent,
  openCalendly,
  preloadCalendly,
} from "@/modules/Contact/utils/calendly";
import {
  formatLeadQueryParams,
  getLeadQueryParams,
  getLeadUtmData,
  persistLeadQueryParams,
} from "@/modules/Contact/utils/lead-attribution";
import { getIpAddress } from "@/modules/Contact/utils/region";
import {
  aiAuditContactFormSchema,
  apAuditContactFormSchema,
  contactFormSchema,
  type ContactFormValues,
  type ContactSubmission,
} from "@/schemas/contact-form-schema";

const field =
  "w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-brand-ink outline-none transition-colors placeholder:text-brand-ink/40 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20";
const formEndpoint = "/api/contact";
const calendlyBookingEndpoint = "/api/contact/calendly";
const defaultBudgetQuestion =
  "Most products we build land between $15k and $40k. Where does that put you?";
const apAuditBudgetQuestion =
  "Most AP builds land between $5k and $10k. Where does that put you?";
const invoiceVolumes = [
  "Under 200",
  "200–500",
  "500–1,500",
  "1,500–5,000",
  "5,000+",
];
const erps = [
  "QuickBooks Online",
  "Xero",
  "NetSuite",
  "Sage Intacct",
  "Business Central",
  "Other or several",
];
const defaultCalendarUrl = process.env.NEXT_PUBLIC_GHL_CALENDLY_URL;
const regionalCalendarUrl = process.env.NEXT_PUBLIC_GHL_UAE_SAUDI_CALENDAR_URL;
const middleEastRegions = new Set(["United Arab Emirates", "Saudi Arabia"]);
const regionalCountryCodes = new Set<Iso2>([
  CountryCode.UnitedArabEmirates,
  CountryCode.SaudiArabia,
]);
const budgetQuestionByCountry: Partial<Record<Iso2, string>> = {
  [CountryCode.UnitedArabEmirates]:
    "Most products we build land between AED 50k and AED 100k. Where does that put you?",
  [CountryCode.SaudiArabia]:
    "Most products we build land between SAR 50k and SAR 100k. Where does that put you?",
};

type ContactFormProps = {
  budgetOptions?: readonly BudgetOption[];
  className?: string;
  defaultCountry?: Iso2;
  idPrefix?: string;
  submitLabel?: string;
  variant?: "default" | "aiAudit" | "apAudit";
};

export function ContactForm({
  budgetOptions,
  className = "",
  defaultCountry = CountryCode.UnitedStates,
  idPrefix = "contact",
  submitLabel = "Book a Strategy Session",
  variant = "default",
}: ContactFormProps = {}) {
  const isAiAudit = variant === "aiAudit";
  const isApAudit = variant === "apAudit";
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
      isApAudit
        ? apAuditContactFormSchema
        : isAiAudit
          ? aiAuditContactFormSchema
          : contactFormSchema,
    ),
    defaultValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      phone: "",
      budget: "",
      timeConsumingTask: "",
      invoiceVolume: "",
      erp: "",
      message: isApAudit
        ? "AP automation audit request"
        : isAiAudit
          ? "AI opportunity audit request"
          : "",
      needsNda: false,
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
        firstName: values.firstName,
        lastName: values.lastName,
        businessName:
          isAiAudit || isApAudit ? values.businessName : undefined,
        ip,
        agent: window.navigator.userAgent,
        email: values.email,
        phone: values.phone,
        budget: values.budget,
        timeConsumingTask: isAiAudit ? values.timeConsumingTask : undefined,
        invoiceVolume: isApAudit ? values.invoiceVolume : undefined,
        erp: isApAudit ? values.erp : undefined,
        message: isApAudit
          ? `AP automation audit: ${values.invoiceVolume} invoices/month on ${values.erp}`
          : isAiAudit && values.timeConsumingTask
            ? `AI opportunity audit: ${values.timeConsumingTask}`
            : values.message,
        needsNda: values.needsNda === true,
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
        region?: string;
      } | null;

      if (!response.ok || result?.error) {
        throw new Error(
          result?.error || "We couldn't submit your enquiry. Please try again.",
        );
      }

      trackContactFormSubmission();
      setPendingCalendlySubmission(submission);
      const useRegionalCalendar =
        regionalCountryCodes.has(defaultCountry) ||
        (result?.region ? middleEastRegions.has(result.region) : false);

      await openCalendly(
        values.firstName,
        values.lastName,
        values.email,
        values.phone,
        useRegionalCalendar ? regionalCalendarUrl : defaultCalendarUrl,
      );
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
          id={`${idPrefix}-first-name`}
          label="First name"
          registration={register("firstName")}
          className={field}
          error={errors.firstName?.message}
          placeholder="Your first name"
          autoComplete="given-name"
        />
        <TextInputField
          id={`${idPrefix}-last-name`}
          label="Last name"
          registration={register("lastName")}
          className={field}
          error={errors.lastName?.message}
          placeholder="Your last name"
          autoComplete="family-name"
        />
      </div>

      {(isAiAudit || isApAudit) && (
        <TextInputField
          id={`${idPrefix}-business-name`}
          label={isApAudit ? "Company" : "Business name"}
          registration={register("businessName")}
          className={field}
          error={errors.businessName?.message}
          placeholder={isApAudit ? "Company name" : "Business name"}
          autoComplete="organization"
          required
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <TextInputField
          id={`${idPrefix}-email`}
          label={isApAudit ? "Work email" : "Email"}
          registration={register("email")}
          className={field}
          error={errors.email?.message}
          type="email"
          placeholder="Your email ID"
          autoComplete="email"
        />
        <PhoneInput
          key={phoneInputKey}
          id={`${idPrefix}-phone`}
          className={field}
          defaultCountry={defaultCountry}
          error={errors.phone?.message}
          onChange={handlePhoneChange}
        />
      </div>

      {isAiAudit && (
        <TimeConsumingTaskField
          id={`${idPrefix}-time-consuming-task`}
          className={field}
          control={control}
        />
      )}

      {isApAudit && (
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            id={`${idPrefix}-invoice-volume`}
            label="Invoices per month"
            name="invoiceVolume"
            options={invoiceVolumes}
            className={field}
            control={control}
          />
          <SelectField
            id={`${idPrefix}-erp`}
            label="Accounting system / ERP"
            name="erp"
            options={erps}
            className={field}
            control={control}
          />
        </div>
      )}

      <BudgetField
        control={control}
        idPrefix={idPrefix}
        options={budgetOptions}
        question={
          isApAudit
            ? apAuditBudgetQuestion
            : (budgetQuestionByCountry[defaultCountry] ?? defaultBudgetQuestion)
        }
      />

      {!isAiAudit && !isApAudit && (
        <TextareaField
          id={`${idPrefix}-message`}
          label="What are you building?"
          registration={register("message")}
          className={field}
          error={errors.message?.message}
          placeholder="Tell us about your product..."
        />
      )}

      <NdaField control={control} />

      <SmsConsentField control={control} short={isApAudit} />

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
