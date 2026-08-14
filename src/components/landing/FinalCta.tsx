import { Reveal } from "./Reveal";
import { BookButton, CallButton, WhatsAppButton } from "./actions";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent)]"
      />
      <Reveal className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-primary/15 bg-card/80 p-7 text-center shadow-card backdrop-blur-sm sm:rounded-3xl md:p-14">
        <h2
          id="final-cta-heading"
          className="text-[1.8rem] leading-tight text-balance sm:text-3xl md:text-4xl"
        >
          The First Step Can Be a Conversation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
          If you are looking for professional mental-health support for yourself or someone close to
          you, speak with Realize Healthcare to understand the appropriate next step.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <BookButton location="final_cta" className="w-full" />
          <CallButton location="final_cta" label="Call Now" className="w-full" />
          <WhatsAppButton location="final_cta" className="w-full" />
        </div>
      </Reveal>
    </section>
  );
}
