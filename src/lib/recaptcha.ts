import "server-only";

const MIN_SCORE = 0.5;

export async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY");
  }

  const params = new URLSearchParams({ secret, response: token });

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
    cache: "no-store",
  });

  const result = (await response.json()) as { success: boolean; score?: number };

  return result.success && (result.score ?? 0) >= MIN_SCORE;
}
