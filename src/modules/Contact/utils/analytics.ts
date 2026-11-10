declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

// eventId must match the event_id the CRM sends to the Conversions API for
// the same lead, so Meta deduplicates the browser and server Lead events.
export function trackContactFormSubmission(eventId: string) {
  try {
    window.gtag?.("event", "click", {
      event_category: "Home page Send",
      event_label: "Send",
    });

    window.gtag?.("event", "generate_lead", {
      event_label: "Home Page send",
      event_category: "engagement",
    });
  } catch {
    // Analytics must never interrupt the form submission flow.
  }

  try {
    window.fbq?.("track", "Lead", {}, { eventID: eventId });
  } catch {
    // Analytics must never interrupt the form submission flow.
  }
}
