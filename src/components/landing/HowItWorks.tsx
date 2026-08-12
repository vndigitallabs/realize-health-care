import { steps } from "@/data/content";
import { Section, SectionHeading } from "./Section";
import { BookButton } from "./actions";

export function HowItWorks() {
  return (
    <Section tone="muted" labelledBy="how-heading">
      <SectionHeading
        id="how-heading"
        eyebrow="How It Works"
        title="What Happens During Your First Consultation?"
      />
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.number} className="surface-card p-6">
            <span className="font-display text-3xl text-primary/40">{step.number}</span>
            <h3 className="mt-3 font-sans text-base font-semibold">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex justify-center">
        <BookButton location="how_it_works" label="Book Your Consultation" />
      </div>
    </Section>
  );
}