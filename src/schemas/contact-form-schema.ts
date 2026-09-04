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

  phone: z
    .string()
    .min(1, "Please enter your phone number"),

  budget: z
    .string()
    .min(1, "Please select your budget"),

  message: z
    .string()
    .trim()
    .min(1, "Please tell us what you're building")
    .max(1700, "Message cannot exceed 1700 characters"),

  smsConsent: z.boolean().optional(),
});

export const contactSubmissionSchema = contactFormSchema
  .omit({ smsConsent: true })
  .extend({
    ip: z.string(),
    agent: z.string(),
    isChecked: z.boolean(),
    pageUrl: z.string().url(),
    utm: z.string(),
    recaptchaToken: z.string().min(1),
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;
