import { steps } from "@/data/content";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { BookButton } from "./actions";

export function HowItWorks({ compact = false }: { compact?: boolean } = {}) {
  return (
    <Section tone="sun" labelledBy="how-heading">
      <SectionHeading
        id="how-heading"
        eyebrow="How It Works"
        title="How It Works"
      />

      <div className="relative mt-10 sm:mt-14">
        <span
          aria-hidden="true"
          className="absolute top-[2.35rem] right-8 left-8 hidden h-px bg-gradient-to-r from-primary/10 via-primary/35 to-primary/10 lg:block"
        />
        <ol className="relative grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 100}
              className="premium-card premium-card-hover flex h-full flex-col p-5 sm:p-6"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 font-display text-lg font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 font-sans text-[15px] font-semibold sm:text-base">
                {step.title}
              </h3>
              {compact ? null : (
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="mt-10 flex justify-center">
        <BookButton
          location="how_it_works"
          label="Book Your Consultation"
          channel="whatsapp"
          whatsappMessage="Hello Realize Healthcare, I would like to book a consultation."
          className="w-full sm:w-auto"
        />
      </div>
    </Section>
  );
}
