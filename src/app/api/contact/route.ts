import {
  sendToMakeAutomation,
  sendToSlack,
} from "@/modules/Contact/utils/automations";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { addRegionToSubmission } from "@/modules/Contact/utils/region";
import { contactSubmissionSchema } from "@/schemas/contact-form-schema";

export async function POST(request: Request) {
  try {
    const payload = contactSubmissionSchema.safeParse(await request.json());

    if (!payload.success) {
      return Response.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const { recaptchaToken } = payload.data;
    if (!recaptchaToken) {
      return Response.json({ error: "reCAPTCHA token missing." }, { status: 400 });
    }

    const recaptchaVerified = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaVerified) {
      return Response.json(
        { error: "reCAPTCHA verification failed." },
        { status: 400 },
      );
    }

    await addRegionToSubmission(payload.data, request);
    payload.data.lastSubmissionDate = new Date().toISOString().slice(0, 10);

    await Promise.all([
      sendToSlack(payload.data),
      sendToMakeAutomation(payload.data),
    ]);

    return Response.json({ status: "success" });
  } catch(err) {
    console.log(err,"IM THE ONE");
    return Response.json(
      { error: "We couldn't submit your enquiry. Please try again." },
      { status: 502 },
    );
  }
}
