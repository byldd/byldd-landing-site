// Testimonials with `placeholder: true` render a visible "Placeholder" tag. Replace
// them with real client quotes, then drop the flag, before this page launches.

export const problems = [
  {
    title: "Invoices arrive everywhere",
    description:
      "Email, vendor portals, scanned paper, PDFs with forty line items. Someone keys every one into the ERP by hand, and the backlog lands on your close.",
  },
  {
    title: "Approvals die in someone's inbox",
    description:
      "A $40k invoice waits on a VP who's travelling. You find out when the vendor calls about the late fee.",
  },
  {
    title: "Software that bills you for growing",
    description:
      "Per-invoice and per-user pricing means your AP cost rises every time the business does well. And your workflow still has to bend to theirs.",
  },
] as const;

export const modules = [
  {
    title: "Invoice capture",
    description:
      "Reads invoices from your AP inbox, uploads and vendor portals. Header and line items are extracted, checked and pushed to your ERP as draft bills.",
  },
  {
    title: "PO and receipt matching",
    description:
      "2-way and 3-way matching against purchase orders and goods receipts, using your tolerance rules. Only the exceptions reach a person.",
  },
  {
    title: "GL coding",
    description:
      "Suggests the GL account, class, department and project from vendor history and line descriptions. Gets better every time your team corrects it.",
  },
  {
    title: "Approval routing",
    description:
      "Your approval matrix, exactly as it is: by amount, entity, department, project or vendor. Approve from Slack, Teams or email, with reminders and delegation when someone's out.",
  },
  {
    title: "Duplicate and fraud checks",
    description:
      "Catches duplicate invoices, changed bank details, unusual amounts and first-time vendors before anything is queued for payment.",
  },
  {
    title: "Vendor onboarding",
    description:
      "Collects W-9s, bank details and insurance certificates through a secure form, verifies them and creates the vendor record. Your 1099 data is ready all year.",
  },
  {
    title: "Payment run prep",
    description:
      "Builds the payment batch by due date, discount window and cash position. Your controller reviews it and releases it in your bank or ERP.",
  },
  {
    title: "Vendor inquiry inbox",
    description:
      "Answers “where's my payment?” emails with the real status from your ERP, so your AP clerk stops working as a help desk.",
  },
  {
    title: "AP aging and cash reports",
    description:
      "Live aging, upcoming cash out, DPO and early-pay discounts captured, on a dashboard or in your inbox every Monday.",
  },
] as const;

export const processSteps = [
  {
    day: "Day 1",
    title: "Map your AP",
    description:
      "A 30-minute call. We walk your flow from invoice received to invoice paid, find where the hours go and price the fix.",
  },
  {
    day: "Day 2",
    title: "Fixed plan and price",
    description:
      "Scope, ERP integration, approval matrix and one number. You sign off before we build anything.",
  },
  {
    day: "Day 3–9",
    title: "Build on your real invoices",
    description:
      "We connect to your ERP sandbox, run last month's invoices through it and tune extraction and coding until your team trusts the output.",
  },
  {
    day: "Day 10",
    title: "Go live and hand over",
    description:
      "Accounts in your name, your AP team trained, documentation your auditors can read, and a monthly check-in.",
  },
] as const;

export const comparison = {
  software: [
    "Monthly subscription plus per-invoice or per-user fees that grow with you",
    "Your process bends to fit their workflow",
    "Approval rules limited to what their settings page allows",
    "Your invoice and vendor data lives on their platform",
    "Sync breaks on custom fields, multiple entities or an unusual chart of accounts",
  ],
  byldd: [
    "One fixed fee, $5k–$10k. No subscription, ever",
    "Built around how your team already works",
    "Any approval logic you can describe, we can build",
    "Runs in your cloud account, under your control",
    "Built for your ERP setup, custom fields and multi-entity included",
  ],
} as const;

export const testimonials = [
  {
    stat: "Four days off the close",
    quote:
      "We were keying 1,200 invoices a month into NetSuite by hand. Byldd built capture and three-way matching around how our warehouses receive goods, and our two AP clerks now spend their day on exceptions instead of data entry. Our close went from nine days to five.",
    role: "Controller, multi-location distributor",
    placeholder: true,
  },
  {
    stat: "No late fees since launch",
    quote:
      "Approvals used to sit in a VP's inbox for a week. Now they approve from Slack in one tap and nothing waits more than 48 hours. We haven't paid a late fee since we went live.",
    role: "CFO, regional construction firm",
    placeholder: true,
  },
  {
    stat: "Less than one year of the software quote",
    quote:
      "We were quoted five figures a year for AP software that couldn't handle our three entities. Byldd built exactly what we needed for less than one year of that subscription, and we own it.",
    role: "VP Finance, PE-backed services company",
    placeholder: true,
  },
] as const;

export const auditOutcomes = [
  "Work out what each invoice costs you today and where the hours go",
  "Show which steps are worth automating and which should stay manual",
  "Give you a fixed price and timeline on the call",
  "Flag risks in your ERP setup and vendor data before you spend anything",
] as const;

export const faqs = [
  {
    question: "What does it cost, and what do we pay after launch?",
    answer:
      "Most builds are $5k–$10k, fixed and agreed before we start. After launch there's no license or subscription to Byldd. You pay your cloud hosting and AI processing directly to those providers, and we estimate that monthly cost for your invoice volume on the audit call. An optional support plan is available.",
  },
  {
    question: "Will it work with our ERP?",
    answer:
      "We build for QuickBooks Online, Xero, NetSuite, Sage Intacct and Business Central, and anything else with an API. Custom fields, subsidiaries and multiple entities are part of the build, not an upsell.",
  },
  {
    question: "Does it pay our vendors?",
    answer:
      "No. It prepares the payment batch and your team reviews and releases it in your bank or ERP. Payment authority never leaves your team.",
  },
  {
    question: "How accurate is the invoice extraction?",
    answer:
      "Every invoice gets a confidence score. Anything below your threshold goes to a person instead of straight into the ERP. During the build we tune it on your real invoices, so it's tested against your vendors before go-live.",
  },
  {
    question: "What about controls and audits?",
    answer:
      "Every action is logged: who approved, when, and what changed. Segregation of duties is built into the approval rules, and the full trail exports for your auditors.",
  },
  {
    question: "Is our financial data safe?",
    answer:
      "It runs in your cloud account, not ours. Bank details are encrypted, access is limited to the people you choose, and we work to SOC2 and GDPR-aligned practices. NDA on request.",
  },
  {
    question: "What happens when our process changes or something breaks?",
    answer:
      "You own the code, so changes are quick, whether we make them or your own developer does. Every client gets a monthly check-in, and support plans are available.",
  },
  {
    question: "Can we start with one piece?",
    answer:
      "Yes. Many teams start with invoice capture and approvals, then add matching and payment prep once those are running.",
  },
] as const;
