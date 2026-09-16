import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters"),

  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email address"),

  businessName: z
    .string()
    .trim()
    .max(120, "Business name cannot exceed 120 characters")
    .optional(),

  phone: z
    .string()
    .min(1, "Please enter your phone number"),

  phoneValid: z.boolean().refine((isValid) => isValid, {
    message: "Please enter a valid phone number",
  }),

  budget: z
    .string()
    .min(1, "Please select your budget"),

  timeConsumingTask: z
    .string()
    .trim()
    .max(160, "Please choose a shorter answer")
    .optional(),

  message: z
    .string()
    .trim()
    .min(1, "Please tell us what you're building")
    .max(1700, "Message cannot exceed 1700 characters"),

  smsConsent: z.boolean().optional(),
});

export const aiAuditContactFormSchema = contactFormSchema.superRefine(
  (values, context) => {
    if (!values.businessName) {
      context.addIssue({
        code: "custom",
        path: ["businessName"],
        message: "Please enter your business name",
      });
    }

    if (!values.timeConsumingTask) {
      context.addIssue({
        code: "custom",
        path: ["timeConsumingTask"],
        message: "Please select what takes the most time",
      });
    }
  },
);

export const contactSubmissionSchema = contactFormSchema
  .omit({ smsConsent: true, phoneValid: true })
  .extend({
    ip: z.string(),
    agent: z.string(),
    isChecked: z.boolean(),
    pageUrl: z.string().url(),
    utm: z.string(),
    utmData: z.object({
      utmSource: z.string().min(1),
      utmMedium: z.string().min(1),
      utmCampaign: z.string().min(1),
      utmContent: z.string().min(1),
      utmAdset: z.string().min(1),
      utmAd: z.string().min(1),
      utmId: z.string().min(1),
      utmTerm: z.string().min(1),
      utmBusinessCategory: z.string().min(1),
    }),
    recaptchaToken: z.string().min(1).optional(),
  });

export const calendlyBookingSubmissionSchema = contactSubmissionSchema.extend({
  calendlyEventUri: z.string().url().optional(),
  calendlyInviteeUri: z.string().url().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type CalendlyBookingSubmission = z.infer<
  typeof calendlyBookingSubmissionSchema
>;
