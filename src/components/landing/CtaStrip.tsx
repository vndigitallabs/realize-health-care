import { BookButton, CallButton, WhatsAppButton } from "./actions";

export function CtaStrip() {
  return (
    <section aria-labelledby="cta-strip-heading" className="px-4 pb-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-primary/15 bg-primary/5 p-6 md:p-9">
        <div className="grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
          <div>
            <h2 id="cta-strip-heading" className="text-2xl md:text-3xl">
              Not Sure Where to Start?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              If you or a family member is experiencing emotional, behavioural or mental-health
              concerns, a professional consultation can help clarify the next step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <BookButton location="cta_strip" />
            <CallButton location="cta_strip" />
            <WhatsAppButton location="cta_strip" />
          </div>
        </div>
      </div>
    </section>
  );
}