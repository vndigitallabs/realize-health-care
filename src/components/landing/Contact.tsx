import { LeadForm } from "./LeadForm";
import { CallButton, WhatsAppButton } from "./actions";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-center text-base font-medium text-foreground lg:text-left">
            Prefer to speak to someone straight away?
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <CallButton location="contact_section" />
            <WhatsAppButton location="contact_section" label="WhatsApp Confidentially" />
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
