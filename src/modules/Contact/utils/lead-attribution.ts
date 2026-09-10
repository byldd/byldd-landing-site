const STORED_QUERY_PARAMS_KEY = "queryParams";

export type LeadUtmData = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmAdset: string;
  utmAd: string;
  utmId: string;
  utmTerm: string;
  utmBusinessCategory: string;
};

export function persistLeadQueryParams() {
  const search = window.location.search;

  if (/utm_|fbclid=|gclid=/i.test(search)) {
    window.localStorage.setItem(STORED_QUERY_PARAMS_KEY, search);
  }
}

export function getLeadQueryParams() {
  const search =
    window.location.search ||
    window.localStorage.getItem(STORED_QUERY_PARAMS_KEY) ||
    "";

  return new URLSearchParams(search);
}

export function formatLeadQueryParams(params: URLSearchParams) {
  return Array.from(params.entries())
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `${key} = ${value}`)
    .join("\n");
}

export function getLeadUtmData(params: URLSearchParams): LeadUtmData {
  const readParam = (...names: string[]) => {
    for (const name of names) {
      const value = params.get(name)?.trim();
      if (value) return value;
    }

    return "Not provided";
  };

  return {
    utmSource: readParam("utm_source", "utmSource"),
    utmMedium: readParam("utm_medium", "utmMedium"),
    utmCampaign: readParam("utm_campaign", "utmCampaign"),
    utmContent: readParam("utm_content", "utmContent"),
    utmAdset: readParam("utm_adset", "utmAdset"),
    utmAd: readParam("utm_ad", "utmAd"),
    utmId: readParam("utm_id", "utmId"),
    utmTerm: readParam("utm_term", "utmTerm"),
    utmBusinessCategory: readParam(
      "utm_business_category",
      "utmBusinessCategory",
    ),
  };
}

export async function getIpAddress() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) return "";

    const data = (await response.json()) as { ip?: string };
    return data.ip ?? "";
  } catch {
    return "";
  }
}
