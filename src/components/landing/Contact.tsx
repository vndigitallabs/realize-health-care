import { LeadForm } from "./LeadForm";
import { CallButton, WhatsAppButton } from "./actions";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Contact</p>
          <h2 className="mt-3 text-3xl text-balance md:text-4xl">Request a Consultation</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Share a few details and our team will get in touch to arrange a suitable time. If you
            prefer to speak to someone straight away, call or message us.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallButton location="contact_section" />
            <WhatsAppButton location="contact_section" label="WhatsApp Confidentially" />
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
