import { sendToCalendlyAutomation } from "@/modules/Contact/utils/automations";
import { addRegionToSubmission } from "@/modules/Contact/utils/region";
import { calendlyBookingSubmissionSchema } from "@/schemas/contact-form-schema";

export async function POST(request: Request) {
  try {
    const payload = calendlyBookingSubmissionSchema.safeParse(
      await request.json(),
    );

    if (!payload.success) {
      return Response.json({ error: "Invalid Calendly booking." }, { status: 400 });
    }

    await addRegionToSubmission(payload.data, request);
    payload.data.lastSubmissionDate = new Date().toISOString().slice(0, 10);
    await sendToCalendlyAutomation(payload.data);
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "We couldn't process the Calendly booking." },
      { status: 502 },
    );
  }
}
