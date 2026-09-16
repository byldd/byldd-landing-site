import "server-only";

import type {
  CalendlyBookingSubmission,
  ContactSubmission,
} from "@/schemas/contact-form-schema";

type Automation = "make" | "calendly" | "slack";

const environmentKeys: Record<Automation, string> = {
  make: "MAKE_AUTOMATION_URL",
  calendly: "CALENDLY_AUTOMATION_URL",
  slack: "SLACK_WEBHOOK_URL",
};

function getAutomationUrl(automation: Automation) {
  const environmentKey = environmentKeys[automation];
  const url = process.env[environmentKey];

  if (!url) {
    throw new Error(`Missing ${environmentKey}`);
  }

  return url;
}

function createAutomationPayload(payload: ContactSubmission) {
  return {
    name: payload.name,
    businessName: payload.businessName,
    ip: payload.ip,
    agent: payload.agent,
    email: payload.email,
    phone: payload.phone,
    budget: payload.budget,
    timeConsumingTask: payload.timeConsumingTask,
    message: payload.message,
    isChecked: payload.isChecked,
    pageUrl: payload.pageUrl,
    ...payload.utmData,
  };
}

async function sendToAutomation(
  automation: Automation,
  payload: Record<string, unknown>,
) {
  const response = await fetch(getAutomationUrl(automation), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `${automation} automation returned HTTP ${response.status}`,
    );
  }

  return response.text();
}

export function sendToMakeAutomation(payload: ContactSubmission) {
  return sendToAutomation("make", createAutomationPayload(payload));
}

function createSlackMessage(payload: ContactSubmission) {
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Message: ${payload.message}`,
    `Business Name: ${payload.businessName ?? ""}`,
    `Budget: ${payload.budget}`,
    `Time Consuming Task: ${payload.timeConsumingTask ?? ""}`,
    `Accepted Terms: ${payload.isChecked}`,
    `Page URL: ${payload.pageUrl}`,
    `IP Address: ${payload.ip}`,
    `Agent: ${payload.agent}`,
    `UTM: ${payload.utm}`,
  ];

  return lines.join("\n");
}

export function sendToSlack(payload: ContactSubmission) {
  return sendToAutomation("slack", { text: createSlackMessage(payload) });
}

export function sendToCalendlyAutomation(
  payload: CalendlyBookingSubmission,
) {
  return sendToAutomation("calendly", {
    ...createAutomationPayload(payload),
    calendlyEventUri: payload.calendlyEventUri,
    calendlyInviteeUri: payload.calendlyInviteeUri,
  });
}
