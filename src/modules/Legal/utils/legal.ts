import type { LegalSection } from "@/modules/Legal/types/legal-section";

export const LAST_UPDATED = "July 2026";

type LegalDoc = { title: string; intro: string; sections: LegalSection[] };

export const terms: LegalDoc = {
  title: "Terms of Service",
  intro: "The terms that govern your use of the Byldd website and our engagements.",
  sections: [
    {
      heading: "1. Agreement",
      body: [
        "By accessing byldd.com or engaging Byldd for services, you agree to these terms. If you're entering into them on behalf of a company, you confirm you have authority to do so.",
      ],
    },
    {
      heading: "2. Services",
      body: [
        "Byldd provides product strategy, design, and software development services. The specific scope, deliverables, timeline, and fees for any engagement are set out in a separate statement of work agreed between us.",
      ],
    },
    {
      heading: "3. Intellectual property",
      body: [
        "Unless agreed otherwise in writing, ownership of the deliverables we build for you transfers to you on full payment. Byldd retains rights to its pre-existing tools, know-how, and general methodologies.",
      ],
    },
    {
      heading: "4. Confidentiality",
      body: [
        "Each party will keep the other's non-public information confidential and use it only to perform the engagement.",
      ],
    },
    {
      heading: "5. Liability",
      body: [
        "The website is provided 'as is'. To the extent permitted by law, Byldd is not liable for indirect or consequential loss arising from use of this site. Liability under any engagement is governed by its statement of work.",
      ],
    },
    {
      heading: "6. Contact",
      body: ["Questions about these terms? Email contactus@byldd.com."],
    },
  ],
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  intro: "How Byldd collects, uses, and protects the information you share with us.",
  sections: [
    {
      heading: "1. What we collect",
      body: [
        "We collect information you provide directly — such as your name, email, and project details when you contact us — and basic, aggregated analytics about how the site is used.",
      ],
    },
    {
      heading: "2. How we use it",
      body: [
        "We use your information to respond to enquiries, deliver our services, and improve the site. We do not sell your personal information.",
      ],
    },
    {
      heading: "3. Sharing",
      body: [
        "We share information only with service providers who help us operate (for example, email or analytics tools), and where required by law.",
      ],
    },
    {
      heading: "4. Your rights",
      body: [
        "You can request access to, correction of, or deletion of your personal information at any time by emailing contactus@byldd.com.",
      ],
    },
    {
      heading: "5. Retention & security",
      body: [
        "We keep personal information only as long as needed for the purposes above and take reasonable measures to protect it.",
      ],
    },
  ],
};

export const cookies: LegalDoc = {
  title: "Cookie Policy",
  intro: "How and why byldd.com uses cookies.",
  sections: [
    {
      heading: "1. What cookies are",
      body: [
        "Cookies are small text files stored on your device that help websites work and understand how they're used.",
      ],
    },
    {
      heading: "2. How we use them",
      body: [
        "We use essential cookies to run the site and, where enabled, privacy-respecting analytics cookies to understand aggregate usage so we can improve the experience.",
      ],
    },
    {
      heading: "3. Managing cookies",
      body: [
        "You can control or delete cookies through your browser settings. Disabling some cookies may affect how parts of the site function.",
      ],
    },
    {
      heading: "4. Contact",
      body: ["Questions about cookies? Email contactus@byldd.com."],
    },
  ],
};
