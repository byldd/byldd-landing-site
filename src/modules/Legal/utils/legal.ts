import type { LegalSection } from "@/modules/Legal/types/legal-section";

export const LAST_UPDATED = "July 2026";

type LegalDoc = { title: string; intro: string; sections: LegalSection[] };


export const terms: LegalDoc = {
  title: "Terms of Service",
  intro: "The terms that govern your use of the Byldd website and our engagements.",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      body: [
        "By using our website or engaging with Byldd’s services, you agree to these Terms of Service.",
      ],
    },
    {
      heading: "2. Services Overview",
      body: [
        "Byldd provides software design, development, and product consulting services for startups and enterprises. Specific terms for each engagement are outlined in client agreements.",
      ],
    },
    {
      heading: "3. Intellectual property",
      body: [
        "All content, design assets, and materials on this site are the property of Byldd unless otherwise noted. You may not copy, reproduce, or redistribute without written consent.",
      ],
    },
    {
      heading: "4. User Responsibilities",
      body: [
        "You agree not to misuse our site or services, engage in illegal activity, or attempt to disrupt systems or access data you’re not authorized to.",
      ],
    },
    {
      heading: "5. Liability Disclaimer",
      body: [
        "While we strive for accuracy and uptime, Byldd is not liable for any indirect, incidental, or consequential damages resulting from website use or service reliance.",
      ],
    },
    {
      heading: "6. Termination",
      body: ["We reserve the right to suspend or terminate access to the website or services for violations of these terms.",],
    },
    {
      heading: "7. Governing Law",
      body: ["These terms are governed by the laws of Hong Kong (or your company’s legal jurisdiction).",],
    },
     {
      heading: "BYLDD SMS Terms & Conditions By opting in to receive SMS messages from BYLDD, you agree to the following:",
      body: [""],
    },
     {
      heading: "1. Program Description",
      body: ["You will receive text messages related to your inquiry, such as responses from our team, appointment scheduling, and reminders."],
    },
     {
      heading: "2. Age Requirement",
      body: ["By accessing or using our services and agreeing to receive mobile messages, you represent and warrant that you are at least 18 years of age. Our services are not intended for use by anyone under the age of 18."],
    },
     {
      heading: "3. Privacy",
      body: ["Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy at Privacy Policy to understand our practices regarding your personal data."],
    },
    {
      heading: "4. Opt-Out",
      body: ["You can cancel the SMS service at any time. Just text 'STOP' to the shortcode or number we message you from. After you send the SMS message 'STOP' to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us."],
    },
    {
      heading: "5. Help",
      body: ["If you are experiencing issues with the messaging program you can reply with the keyword 'HELP' for more assistance."],
    },
    {
      heading: "6. Message Frequency",
      body: ["Message frequency varies."],
    },
    {
      heading: "7. Pricing",
      body: ["Message and data rates may apply."],
    },
    {
      heading: "8. Carrier Liability",
      body: ["Carriers are not liable for delayed or undelivered messages."],
    },
  ],
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  intro: "At Byldd, your privacy isn’t just a formality — it’s part of how we build trust. This Privacy Policy explains what information we collect, how we use it, and how we keep it secure when you visit our website or work with us.",
  sections: [
    {
      heading: "1. Information We Collect",
      body: [
        {
  heading: "Personal data",
  text: "Name, email address, phone number, and company information submitted through forms or inquiries.",
},
{
  heading: "Usage data",
  text: "Browser type, IP address, device information, and interactions on our website.",
},
{
  heading: "Cookies",
  text: "Used to analyse traffic, personalise experiences, and improve site functionality.",
},
{
  heading: "Your Rights and Data Deletion",
  text: "You have the right to request access to the personal data we hold about you, or to request that we delete your data entirely. To exercise these rights or to withdraw your consent for SMS messaging, please email us at contactus@byldd.com or reply STOP to any text message you receive from us.",
},
      ],
    },
    {
      heading: "2. How We Use Your Information",
      body: [
        "To respond to inquiries and provide requested services.",
        "To improve our website and offerings.",
        " To send updates or newsletters (only if you opt in)",
        " To ensure compliance with applicable laws",

      ],
    },
    {
      heading: "3. SMS/Text Messaging",
      body: [
        { heading:"SMS/Text Messaging",
          text: "By checking the SMS consent box on our website forms, you agree to receive text messages from Byldd related to your inquiry, including responses to your questions, appointment scheduling, and reminders. Consent is not a condition of purchase or of working with us. Message frequency varies. Message and data rates may apply. Reply STOP at any time to opt out. Reply HELP for assistance, or contact us at contactus@byldd.com. We do not share, sell, or rent mobile phone numbers or SMS opt-in data to third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. Limited sharing with vendors who deliver our messages occurs only as necessary to send messages to you.",
        }
      ],
    },
    {
      heading: "4. Data Security",
      body: [
        "We use SSL encryption, secure servers, and limited data access to protect your personal information. Your data is not sold or rented to third parties.",
      ],
    },
    {
      heading: "5. Cookies",
      body: [
        "We use cookies to enhance user experience, monitor analytics, and remember your preferences. You can modify or disable cookies in your browser settings.",
      ],
    },
  ],
};

export const cookies: LegalDoc = {
  title: "Cookie Policy",
  intro: "How and why byldd.com uses cookies.",
  sections: [
    {
      heading: "What Are Cookies?",
      body: [
        "Cookies are small files placed on your device to store information. We use them to enhance performance, improve navigation, and tailor your experience.",
      ],
    },
    {
      heading: "Types of Cookies We Use",
      body: [ "",],
    },
    {
      heading: "1. Essential Cookies",
      body: [
        "Required for core site functionality",
      ],
    },
    {
      heading: "2. Analytics Cookies",
      body: ["Measure performance and visitor behavior"],
    },
      {
      heading: "3.  Preference Cookies",
      body: ["Store language and display settings"],
    },
      {
      heading: "4.  Marketing Cookies",
      body: ["(Used only if you opt in) Personalize ads and content"],
    },
      {
      heading: "Managing Cookies",
      body: ["You can accept, reject, or manage cookie preferences directly through our banner or browser settings."],
    },
  ],
};
