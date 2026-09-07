import { sendToMakeAutomation } from "@/modules/Contact/utils/automations";
import { contactSubmissionSchema } from "@/schemas/contact-form-schema";

export async function POST(request: Request) {
  try {
    const payload = contactSubmissionSchema.safeParse(await request.json());

    if (!payload.success) {
      return Response.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const formEndpoint = process.env.FORM_ENDPOINT_URL;
    if (!formEndpoint) {
      throw new Error("Missing FORM_ENDPOINT_URL");
    }

    const [response] = await Promise.all([
      fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload.data, utmData: undefined }),
        cache: "no-store",
      }),
      sendToMakeAutomation(payload.data),
    ]);
    const body = await response.text();

    return new Response(body || null, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("content-type") || "application/json",
      },
    });
  } catch {
    return Response.json(
      { error: "We couldn't submit your enquiry. Please try again." },
      { status: 502 },
    );
  }
}
