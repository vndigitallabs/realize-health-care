import { BookButton, TalkToSpecialistButton, WhatsAppButton } from "./actions";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-primary/15 bg-primary/5 p-8 text-center md:p-14">
        <h2 id="final-cta-heading" className="text-3xl text-balance md:text-4xl">
          The First Step Can Be a Conversation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          If you are looking for professional mental-health support for yourself or someone close to
          you, speak with Realize Healthcare to understand the appropriate next step.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <BookButton location="final_cta" />
          <TalkToSpecialistButton location="final_cta" />
          <WhatsAppButton location="final_cta" />
        </div>
      </div>
    </section>
  );
}