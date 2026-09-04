import { contactSubmissionSchema } from "@/schemas/contact-form-schema";

const formEndpoint = "https://form.byldd.com/data";

export async function POST(request: Request) {
  try {
    const payload = contactSubmissionSchema.safeParse(await request.json());

    if (!payload.success) {
      return Response.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload.data),
      cache: "no-store",
    });
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
