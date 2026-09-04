const STORED_QUERY_PARAMS_KEY = "queryParams";

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
