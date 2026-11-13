import { ContactForm } from "@/modules/Contact/components/ContactForm";
import { formContent } from "@/modules/VibecodedAppLaunch/content";

export function LaunchForm({ idPrefix }: { idPrefix: string }) {
  return (
    <div className="rounded-[2rem] bg-white p-5 text-brand-ink shadow-[0_28px_90px_-30px_rgba(13,13,13,0.5)] md:p-8">
      <h2 className="text-2xl font-bold tracking-tight">{formContent.heading}</h2>
      <p className="mb-6 mt-2 text-sm leading-6 text-brand-ink/60">
        {formContent.description}
      </p>
      <ContactForm
        idPrefix={idPrefix}
        variant="vibeCodedLaunch"
        submitLabel={formContent.submitLabel}
        className="gap-3 [&_button[type=submit]]:w-full [&_button[type=submit]]:justify-center [&_button[type=submit]]:rounded-xl"
      />
      <p className="mt-3 text-center text-xs text-brand-ink/55">
        {formContent.finePrint}
      </p>
    </div>
  );
}
