declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackContactFormSubmission() {
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
    window.fbq?.("track", "Lead");
  } catch {
    // Analytics must never interrupt the form submission flow.
  }
}
