// Generated from the reviewed page drafts (2026-10-10). Edit this file directly from now on.
import type { Module, ModuleGroup } from "./types";

/** Module groups, in display order. */
export const moduleGroups: ModuleGroup[] = [
  {
    "id": "FND",
    "name": "Foundation",
    "description": "Included in every product we build."
  },
  {
    "id": "ARC",
    "name": "Platform & architecture",
    "description": "How the product is packaged, deployed and connected."
  },
  {
    "id": "PAY",
    "name": "Payments & billing",
    "description": "Taking, holding, splitting and returning money."
  },
  {
    "id": "MKT",
    "name": "Marketplace & transactions",
    "description": "Two- and three-sided platforms, listings and bookings."
  },
  {
    "id": "CX",
    "name": "Sales, marketing & customer",
    "description": "Finding, converting, supporting and keeping customers."
  },
  {
    "id": "OPS",
    "name": "Operations & back office",
    "description": "Orders, stock, field work, documents and approvals."
  },
  {
    "id": "HR",
    "name": "HR & people",
    "description": "Hiring, employee records, pay and performance."
  },
  {
    "id": "FIN",
    "name": "Fintech",
    "description": "Identity, bank connections, lending, investing and budgeting."
  },
  {
    "id": "HLT",
    "name": "Healthcare",
    "description": "Clinical records, care delivery and health data compliance."
  },
  {
    "id": "EDU",
    "name": "Education",
    "description": "Courses, assessment and student records."
  },
  {
    "id": "AI",
    "name": "AI & automation",
    "description": "Models, agents and pipelines that do the work."
  },
  {
    "id": "SEC",
    "name": "Security & compliance",
    "description": "Controls that enterprise and regulated buyers ask for."
  }
];

/**
 * Byldd's pre-built module library. IDs are internal (used by pages to reference
 * modules) and are never shown on the site.
 */
export const modules: Module[] = [
  {
    "id": "FND-01",
    "group": "FND",
    "name": "Authentication & sign-in",
    "description": "Email, social and passwordless login, MFA, password reset, session management."
  },
  {
    "id": "FND-02",
    "group": "FND",
    "name": "Roles & permissions",
    "description": "Role-based access control down to individual records and fields."
  },
  {
    "id": "FND-03",
    "group": "FND",
    "name": "Accounts, teams & profiles",
    "description": "User profiles, organisations, team invites and seat management."
  },
  {
    "id": "FND-04",
    "group": "FND",
    "name": "Admin panel",
    "description": "Back office for staff to manage users, content, orders and settings."
  },
  {
    "id": "FND-05",
    "group": "FND",
    "name": "Notifications",
    "description": "Email, SMS, push and in-app messages with per-user preferences."
  },
  {
    "id": "FND-06",
    "group": "FND",
    "name": "Audit log",
    "description": "A tamper-evident record of who did what, and when, on every record."
  },
  {
    "id": "FND-07",
    "group": "FND",
    "name": "File uploads & media",
    "description": "Secure storage, image resizing, previews and virus scanning."
  },
  {
    "id": "FND-08",
    "group": "FND",
    "name": "Search & filters",
    "description": "Full-text and faceted search across the product's data."
  },
  {
    "id": "FND-09",
    "group": "FND",
    "name": "Analytics dashboards",
    "description": "KPI dashboards with charts, date ranges and drill-down."
  },
  {
    "id": "FND-10",
    "group": "FND",
    "name": "Settings & localisation",
    "description": "Feature flags, branding, languages, currencies and time zones."
  },
  {
    "id": "ARC-01",
    "group": "ARC",
    "name": "Multi-tenancy",
    "description": "One platform serving many customer accounts, each with fully isolated data."
  },
  {
    "id": "ARC-03",
    "group": "ARC",
    "name": "Public API & webhooks",
    "description": "Documented REST/GraphQL API, API keys, rate limits and outbound webhooks."
  },
  {
    "id": "ARC-04",
    "group": "ARC",
    "name": "Usage metering",
    "description": "Counts API calls, seats or actions for limits, billing and reporting."
  },
  {
    "id": "ARC-05",
    "group": "ARC",
    "name": "Embeddable widget SDK",
    "description": "Drop a piece of the product into any other website with one snippet."
  },
  {
    "id": "ARC-06",
    "group": "ARC",
    "name": "Plugin & extension framework",
    "description": "Chrome extensions and apps for Shopify, Slack, HubSpot and similar platforms."
  },
  {
    "id": "ARC-07",
    "group": "ARC",
    "name": "Integrations hub",
    "description": "Pre-built connectors: Google, Microsoft 365, Slack, Salesforce, HubSpot, QuickBooks, Xero."
  },
  {
    "id": "ARC-08",
    "group": "ARC",
    "name": "Data import, export & sync",
    "description": "CSV/Excel import, scheduled syncs and overnight jobs that tolerate partial failure."
  },
  {
    "id": "ARC-09",
    "group": "ARC",
    "name": "Offline-first mobile sync",
    "description": "Work without signal; data queues on the device and syncs on reconnect."
  },
  {
    "id": "ARC-10",
    "group": "ARC",
    "name": "White-labelling",
    "description": "Custom domains, logos and themes per customer account."
  },
  {
    "id": "PAY-01",
    "group": "PAY",
    "name": "Subscriptions & plans",
    "description": "Tiers, trials, upgrades, downgrades and proration."
  },
  {
    "id": "PAY-02",
    "group": "PAY",
    "name": "Checkout & one-time payments",
    "description": "Cards, wallets and local payment methods with saved cards."
  },
  {
    "id": "PAY-03",
    "group": "PAY",
    "name": "Split payments & payouts",
    "description": "Seller onboarding, commission (take rate) and scheduled payouts."
  },
  {
    "id": "PAY-04",
    "group": "PAY",
    "name": "Escrow & held funds",
    "description": "Hold payment until work is done; release or freeze on dispute."
  },
  {
    "id": "PAY-05",
    "group": "PAY",
    "name": "Invoicing & receipts",
    "description": "Branded invoices, tax handling, credit notes and statements."
  },
  {
    "id": "PAY-06",
    "group": "PAY",
    "name": "Wallet & ledger",
    "description": "Double-entry balances, top-ups, transfers and full transaction history."
  },
  {
    "id": "PAY-07",
    "group": "PAY",
    "name": "Refunds, disputes & chargebacks",
    "description": "Full and partial refunds, dispute workflows and evidence submission."
  },
  {
    "id": "PAY-08",
    "group": "PAY",
    "name": "Usage-based & per-seat billing",
    "description": "Bill on metered usage or active seats, alongside flat plans."
  },
  {
    "id": "PAY-09",
    "group": "PAY",
    "name": "Coupons & promotions",
    "description": "Discount codes, credits, free periods and promotional pricing."
  },
  {
    "id": "MKT-01",
    "group": "MKT",
    "name": "Listings & catalogue",
    "description": "Create, categorise, moderate and feature listings or services."
  },
  {
    "id": "MKT-02",
    "group": "MKT",
    "name": "Provider onboarding & verification",
    "description": "Applications, ID checks and a credential review queue with full history."
  },
  {
    "id": "MKT-03",
    "group": "MKT",
    "name": "Matching engine",
    "description": "Matches supply to demand on location, skills, availability and price."
  },
  {
    "id": "MKT-04",
    "group": "MKT",
    "name": "Booking & availability",
    "description": "Time slots, multi-calendar sync, recurring bookings and clash detection."
  },
  {
    "id": "MKT-05",
    "group": "MKT",
    "name": "Reviews & ratings",
    "description": "Two-sided reviews, rating aggregation and moderation."
  },
  {
    "id": "MKT-06",
    "group": "MKT",
    "name": "In-app messaging",
    "description": "One-to-one and group chat with attachments and moderation."
  },
  {
    "id": "MKT-07",
    "group": "MKT",
    "name": "Maps, geolocation & live tracking",
    "description": "Address search, radius search and real-time location on a map."
  },
  {
    "id": "MKT-08",
    "group": "MKT",
    "name": "Dispatch & job assignment",
    "description": "Auto-assigns the best available provider, with accept, decline and reassign."
  },
  {
    "id": "MKT-09",
    "group": "MKT",
    "name": "Trust & safety",
    "description": "Reporting, blocking, fraud flags and content moderation queues."
  },
  {
    "id": "MKT-10",
    "group": "MKT",
    "name": "Multi-vendor storefronts",
    "description": "Each seller runs their own shop: products, stock, orders and payouts."
  },
  {
    "id": "MKT-12",
    "group": "MKT",
    "name": "Lead capture & routing",
    "description": "Enquiry forms, lead scoring and pay-per-lead distribution to businesses."
  },
  {
    "id": "MKT-14",
    "group": "MKT",
    "name": "Directory & profiles",
    "description": "Searchable public profiles and listing pages built for SEO."
  },
  {
    "id": "CX-01",
    "group": "CX",
    "name": "CRM pipeline",
    "description": "Contacts, companies, deals and custom pipeline stages."
  },
  {
    "id": "CX-02",
    "group": "CX",
    "name": "Quotes & proposals (CPQ)",
    "description": "Pricing rules, frozen revisions, internal review and branded PDF quotes."
  },
  {
    "id": "CX-03",
    "group": "CX",
    "name": "Marketing automation",
    "description": "Segments, email/SMS campaigns and behaviour-triggered journeys."
  },
  {
    "id": "CX-05",
    "group": "CX",
    "name": "Helpdesk & ticketing",
    "description": "Support queues, SLAs, canned replies and customer-facing ticket history."
  },
  {
    "id": "CX-06",
    "group": "CX",
    "name": "Live chat",
    "description": "Website and in-app chat staffed by people, with bot hand-off."
  },
  {
    "id": "CX-07",
    "group": "CX",
    "name": "Loyalty & rewards",
    "description": "Points, tiers, perks and redemption."
  },
  {
    "id": "CX-08",
    "group": "CX",
    "name": "Referral & affiliate tracking",
    "description": "Referral links, attribution and automatic payouts."
  },
  {
    "id": "CX-09",
    "group": "CX",
    "name": "Community & forums",
    "description": "Posts, threads, groups, events and member moderation."
  },
  {
    "id": "CX-10",
    "group": "CX",
    "name": "Calling & call tracking",
    "description": "In-app calling, tracked numbers, recording and call logs."
  },
  {
    "id": "CX-11",
    "group": "CX",
    "name": "CMS & content publishing",
    "description": "Editable pages and blog with SEO fields, drafts and scheduling."
  },
  {
    "id": "CX-12",
    "group": "CX",
    "name": "Digital asset library",
    "description": "A searchable library of images, video and brand files with permissions."
  },
  {
    "id": "CX-13",
    "group": "CX",
    "name": "Funnel & journey analytics",
    "description": "Visual drop-off funnels filtered live by device, location and source."
  },
  {
    "id": "CX-14",
    "group": "CX",
    "name": "Video calls & live sessions",
    "description": "Browser-based video rooms, screen share and recording."
  },
  {
    "id": "OPS-01",
    "group": "OPS",
    "name": "Orders & fulfilment",
    "description": "Order capture, status tracking, partial shipments and returns."
  },
  {
    "id": "OPS-02",
    "group": "OPS",
    "name": "Inventory & stock",
    "description": "Stock levels across locations, reorder points and adjustments."
  },
  {
    "id": "OPS-04",
    "group": "OPS",
    "name": "Routing & shipment tracking",
    "description": "Route planning, carrier integration and delivery tracking."
  },
  {
    "id": "OPS-05",
    "group": "OPS",
    "name": "Work orders & field jobs",
    "description": "Job sheets, checklists, photo and signature proof of work."
  },
  {
    "id": "OPS-06",
    "group": "OPS",
    "name": "Asset & maintenance scheduling",
    "description": "Equipment register, preventive maintenance and service history."
  },
  {
    "id": "OPS-07",
    "group": "OPS",
    "name": "Scheduling & rostering",
    "description": "Shift patterns, auto-generated rosters and open-shift claiming."
  },
  {
    "id": "OPS-08",
    "group": "OPS",
    "name": "Time tracking & timesheets",
    "description": "Clock-in/out, timesheets and approval."
  },
  {
    "id": "OPS-09",
    "group": "OPS",
    "name": "Projects & tasks",
    "description": "Boards, owners, due dates, dependencies and progress."
  },
  {
    "id": "OPS-10",
    "group": "OPS",
    "name": "Approval workflow engine",
    "description": "Configurable multi-step approvals with rules and escalations."
  },
  {
    "id": "OPS-11",
    "group": "OPS",
    "name": "Document management",
    "description": "Folders, versions, permissions and full-text document search."
  },
  {
    "id": "OPS-12",
    "group": "OPS",
    "name": "E-signature & contracts",
    "description": "Templates, signing flows and contract lifecycle tracking."
  },
  {
    "id": "OPS-13",
    "group": "OPS",
    "name": "Procurement & vendors",
    "description": "Purchase requests, purchase orders and a vendor portal."
  },
  {
    "id": "OPS-15",
    "group": "OPS",
    "name": "Fleet & vehicle telematics",
    "description": "Vehicle GPS, driver logs, fuel and utilisation."
  },
  {
    "id": "OPS-16",
    "group": "OPS",
    "name": "Finance & general ledger",
    "description": "Chart of accounts, journals, payables, receivables and period close."
  },
  {
    "id": "OPS-18",
    "group": "OPS",
    "name": "Branded PDF reports",
    "description": "Print-quality, paginated, branded documents generated from data."
  },
  {
    "id": "HR-01",
    "group": "HR",
    "name": "Employee records",
    "description": "Central employee profiles, documents and org chart."
  },
  {
    "id": "HR-02",
    "group": "HR",
    "name": "Applicant pipeline",
    "description": "Job requisitions and candidates moved through hiring stages."
  },
  {
    "id": "HR-03",
    "group": "HR",
    "name": "Resume parsing",
    "description": "Reads PDF and Word resumes into structured candidate records."
  },
  {
    "id": "HR-04",
    "group": "HR",
    "name": "Interview scheduling",
    "description": "Finds overlaps across interviewers' calendars and books slots."
  },
  {
    "id": "HR-05",
    "group": "HR",
    "name": "Payroll calculation",
    "description": "Gross-to-net pay, deductions, payslips and payroll exports."
  },
  {
    "id": "HR-06",
    "group": "HR",
    "name": "Leave & attendance",
    "description": "Leave requests, balances, holidays and attendance records."
  },
  {
    "id": "HR-07",
    "group": "HR",
    "name": "Performance & goals",
    "description": "Review cycles, goals, 360 feedback and one-to-ones."
  },
  {
    "id": "HR-08",
    "group": "HR",
    "name": "Onboarding & offboarding",
    "description": "Checklists, document collection and equipment tracking."
  },
  {
    "id": "HR-09",
    "group": "HR",
    "name": "Careers page & job posting",
    "description": "Branded careers site and multi-board job distribution."
  },
  {
    "id": "FIN-01",
    "group": "FIN",
    "name": "KYC & AML screening",
    "description": "Identity verification, document checks and sanctions screening."
  },
  {
    "id": "FIN-02",
    "group": "FIN",
    "name": "Bank account linking",
    "description": "Open-banking connections, balance checks and transaction import."
  },
  {
    "id": "FIN-04",
    "group": "FIN",
    "name": "Loan origination & servicing",
    "description": "Applications, offers, repayment schedules and collections."
  },
  {
    "id": "FIN-06",
    "group": "FIN",
    "name": "Portfolio, trading & market data",
    "description": "Holdings, orders, live prices and performance."
  },
  {
    "id": "FIN-07",
    "group": "FIN",
    "name": "Budgeting & spend insights",
    "description": "Automatic categorisation, budgets and spending trends."
  },
  {
    "id": "FIN-08",
    "group": "FIN",
    "name": "Crowdfunding campaigns",
    "description": "Campaign pages, pledges, funding goals and backer updates."
  },
  {
    "id": "HLT-01",
    "group": "HLT",
    "name": "HIPAA-ready data layer",
    "description": "Encryption, access logging and BAA-ready hosting for health data."
  },
  {
    "id": "HLT-02",
    "group": "HLT",
    "name": "Patient records (EHR)",
    "description": "History, diagnoses, medications, allergies and clinical notes."
  },
  {
    "id": "HLT-03",
    "group": "HLT",
    "name": "Telehealth visits",
    "description": "Virtual waiting room, video consults and visit notes."
  },
  {
    "id": "HLT-04",
    "group": "HLT",
    "name": "Clinical scheduling & intake",
    "description": "Appointment booking, digital intake forms and consent capture."
  },
  {
    "id": "HLT-05",
    "group": "HLT",
    "name": "E-prescribing & medications",
    "description": "Prescriptions, refills and medication lists."
  },
  {
    "id": "HLT-06",
    "group": "HLT",
    "name": "Device & wearable data",
    "description": "Ingests vitals from connected devices and flags out-of-range readings."
  },
  {
    "id": "HLT-09",
    "group": "HLT",
    "name": "HL7 / FHIR interoperability",
    "description": "Standards-based data exchange with EHRs and health networks."
  },
  {
    "id": "HLT-10",
    "group": "HLT",
    "name": "Care plans & engagement",
    "description": "Care plans, symptom and habit tracking, reminders."
  },
  {
    "id": "EDU-01",
    "group": "EDU",
    "name": "Courses & lessons",
    "description": "Course builder with video, documents, modules and progress tracking."
  },
  {
    "id": "EDU-02",
    "group": "EDU",
    "name": "Assessments & grading",
    "description": "Quizzes, assignments, rubrics and automatic grading."
  },
  {
    "id": "EDU-03",
    "group": "EDU",
    "name": "Exam proctoring",
    "description": "Identity checks and supervised online exams."
  },
  {
    "id": "EDU-04",
    "group": "EDU",
    "name": "Cohorts & live classes",
    "description": "Scheduled group sessions, cohorts and attendance."
  },
  {
    "id": "EDU-05",
    "group": "EDU",
    "name": "Certificates & completion",
    "description": "Completion rules and verifiable certificates."
  },
  {
    "id": "EDU-06",
    "group": "EDU",
    "name": "Student records (SIS)",
    "description": "Enrolment, grades, attendance and transcripts."
  },
  {
    "id": "AI-01",
    "group": "AI",
    "name": "LLM gateway & cost controls",
    "description": "Model routing, caching and spend caps so AI cost tracks value."
  },
  {
    "id": "AI-02",
    "group": "AI",
    "name": "Knowledge base (RAG)",
    "description": "Grounded answers from your own documents, isolated per customer."
  },
  {
    "id": "AI-03",
    "group": "AI",
    "name": "Conversational chatbot",
    "description": "Website and in-app assistant with hand-off to a human."
  },
  {
    "id": "AI-04",
    "group": "AI",
    "name": "Tool-using agents",
    "description": "Agents that act inside your systems, with validation and an audit trail."
  },
  {
    "id": "AI-05",
    "group": "AI",
    "name": "Voice agent",
    "description": "AI that places and answers phone calls, transcribes and scores them."
  },
  {
    "id": "AI-06",
    "group": "AI",
    "name": "Recommendation engine",
    "description": "Suggests items, content or matches from behaviour."
  },
  {
    "id": "AI-07",
    "group": "AI",
    "name": "Document extraction (IDP)",
    "description": "Reads PDFs, scans and photos into structured data."
  },
  {
    "id": "AI-08",
    "group": "AI",
    "name": "Transcription & meeting notes",
    "description": "Records calls and meetings and produces notes and action items."
  },
  {
    "id": "AI-09",
    "group": "AI",
    "name": "Predictive scoring",
    "description": "Lead, churn, risk and fraud scores that update without swinging on noise."
  },
  {
    "id": "AI-10",
    "group": "AI",
    "name": "In-app copilot",
    "description": "An assistant panel that knows the user's context and current screen."
  },
  {
    "id": "AI-11",
    "group": "AI",
    "name": "Semantic search",
    "description": "Natural-language search that infers filters and explains its matches."
  },
  {
    "id": "AI-12",
    "group": "AI",
    "name": "Content generation pipeline",
    "description": "Scheduled generation of written and visual content with checks."
  },
  {
    "id": "AI-13",
    "group": "AI",
    "name": "Multi-agent orchestration",
    "description": "Intent routing that dispatches work to specialist agents."
  },
  {
    "id": "AI-14",
    "group": "AI",
    "name": "Human-in-the-loop review",
    "description": "People approve or correct AI output, and corrections improve it."
  },
  {
    "id": "SEC-01",
    "group": "SEC",
    "name": "Privacy & consent (GDPR)",
    "description": "Consent capture, data export and deletion requests."
  },
  {
    "id": "SEC-02",
    "group": "SEC",
    "name": "SOC 2-ready controls",
    "description": "Encryption at rest and in transit, backups, access reviews and monitoring."
  },
  {
    "id": "SEC-03",
    "group": "SEC",
    "name": "Enterprise SSO & SCIM",
    "description": "SAML/OIDC single sign-on and automatic user provisioning."
  }
];

/** Included in every product; shown as a compact strip on every page. */
export const foundationModuleIds: string[] = [
  "FND-01",
  "FND-02",
  "FND-03",
  "FND-04",
  "FND-05",
  "FND-06",
  "FND-07",
  "FND-08",
  "FND-09",
  "FND-10"
];
