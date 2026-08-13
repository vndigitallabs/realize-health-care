import { Reveal } from "./Reveal";
import { BookButton, CallButton, WhatsAppButton } from "./actions";

export function CtaStrip() {
  return (
    <section aria-labelledby="cta-strip-heading" className="px-4 pb-6 sm:px-6 md:pb-10">
      <Reveal className="mx-auto w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-primary/15 bg-gradient-to-br from-primary/8 via-card to-brand-sun/8 p-6 shadow-soft sm:rounded-3xl md:p-9">
        <div className="grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
          <div>
            <h2
              id="cta-strip-heading"
              className="text-[1.6rem] text-balance sm:text-2xl md:text-3xl"
            >
              Not Sure Where to Start?
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              If you or a family member is experiencing emotional, behavioural or mental-health
              concerns, a professional consultation can help clarify the next step.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 md:w-[19rem] md:grid-cols-1 lg:w-auto lg:grid-cols-3">
            <BookButton location="cta_strip" className="w-full" />
            <CallButton location="cta_strip" className="w-full" />
            <WhatsAppButton location="cta_strip" className="w-full" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
