const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_STYLES = "https://assets.calendly.com/assets/external/widget.css";

type CalendlyApi = {
  initPopupWidget: (options: { url: string }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

let calendlyPromise: Promise<CalendlyApi> | undefined;

export function preloadCalendly() {
  if (window.Calendly) return Promise.resolve(window.Calendly);
  if (calendlyPromise) return calendlyPromise;

  calendlyPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${CALENDLY_STYLES}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_STYLES;
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );
    const script = existingScript ?? document.createElement("script");

    const handleLoad = () => {
      if (window.Calendly) resolve(window.Calendly);
      else reject(new Error("Calendly did not initialize"));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Calendly failed to load")),
      { once: true },
    );

    if (!existingScript) {
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  });

  return calendlyPromise;
}

export async function openCalendly(name: string, email: string) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!calendlyUrl) {
    throw new Error("Missing NEXT_PUBLIC_CALENDLY_URL");
  }

  const url = new URL(calendlyUrl);
  url.searchParams.set("name", name);
  url.searchParams.set("email", email);

  try {
    const calendly = await preloadCalendly();
    calendly.initPopupWidget({ url: url.toString() });
  } catch {
    window.location.assign(url.toString());
  }
}
