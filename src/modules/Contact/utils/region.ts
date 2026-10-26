import type { ContactSubmission } from "@/schemas/contact-form-schema";

const COUNTRY_LOOKUP_URL = "https://api.country.is";
const UNKNOWN_REGION = "Unknown";

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

function getIpVersion(ip: string) {
  if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
    const octets = ip.split(".").map(Number);
    return octets.every((octet) => octet >= 0 && octet <= 255) ? 4 : 0;
  }

  return ip.includes(":") && /^[0-9a-f:]+$/i.test(ip) ? 6 : 0;
}

function normalizeIp(value: string | null | undefined) {
  if (!value) return "";

  const candidate =
    value.split(",", 1)[0]?.trim().replace(/^"|"$/g, "") ?? "";
  const withoutIpv4Port = candidate.replace(
    /^(\d{1,3}(?:\.\d{1,3}){3}):\d+$/,
    "$1",
  );
  const withoutIpv6Brackets = withoutIpv4Port.replace(
    /^\[([^\]]+)](?::\d+)?$/,
    "$1",
  );
  const normalized = withoutIpv6Brackets.replace(/^::ffff:/i, "");

  return getIpVersion(normalized) ? normalized : "";
}

function isPublicIp(ip: string) {
  const version = getIpVersion(ip);
  if (version === 4) {
    const [first, second] = ip.split(".").map(Number);

    return !(
      first === 0 ||
      first === 10 ||
      first === 127 ||
      (first === 100 && second >= 64 && second <= 127) ||
      (first === 169 && second === 254) ||
      (first === 172 && second >= 16 && second <= 31) ||
      (first === 192 && second === 168) ||
      (first === 198 && (second === 18 || second === 19)) ||
      first >= 224
    );
  }

  if (version === 6) {
    const normalized = ip.toLowerCase();
    return !(
      normalized === "::" ||
      normalized === "::1" ||
      normalized.startsWith("fc") ||
      normalized.startsWith("fd") ||
      /^fe[89ab]/.test(normalized)
    );
  }

  return false;
}

function getClientIp(request: Request, submittedIp: string) {
  const headerIps = [
    request.headers.get("cf-connecting-ip"),
    request.headers.get("x-vercel-forwarded-for"),
    request.headers.get("x-real-ip"),
    request.headers.get("x-forwarded-for"),
  ].map(normalizeIp);
  const publicHeaderIp = headerIps.find(isPublicIp);
  const normalizedSubmittedIp = normalizeIp(submittedIp);

  if (publicHeaderIp) return publicHeaderIp;
  if (isPublicIp(normalizedSubmittedIp)) return normalizedSubmittedIp;

  return normalizedSubmittedIp || headerIps.find(Boolean) || "";
}

function getCountryName(countryCode: string | null | undefined) {
  const normalizedCode = countryCode?.trim().toUpperCase();
  if (!normalizedCode || !/^[A-Z]{2}$/.test(normalizedCode)) {
    return null;
  }

  try {
    return (
      new Intl.DisplayNames(["en"], { type: "region" }).of(normalizedCode) ??
      null
    );
  } catch {
    return null;
  }
}

async function getRegionFromIp(ip: string) {
  if (!ip) return null;

  try {
    const response = await fetch(
      `${COUNTRY_LOOKUP_URL}/${encodeURIComponent(ip)}`,
      {
        cache: "no-store",
        signal: AbortSignal.timeout(3_000),
      },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as { country?: string };
    return getCountryName(data.country);
  } catch {
    return null;
  }
}

export async function addRegionToSubmission<T extends ContactSubmission>(
  submission: T,
  request: Request,
): Promise<void> {
  const ip = getClientIp(request, submission.ip);
  const countryHeader =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry");
  const region =
    (await getRegionFromIp(ip)) ??
    getCountryName(countryHeader) ??
    UNKNOWN_REGION;

  submission.ip = ip || submission.ip;
  submission.region = region;
}
