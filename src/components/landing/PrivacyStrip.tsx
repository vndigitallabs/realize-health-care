import { Lock, Stethoscope, UserRoundCheck } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Lock,
    label: "Private Conversations",
    text: "Concerns are discussed in a private, confidential setting.",
  },
  {
    icon: Stethoscope,
    label: "Qualified Clinicians",
    text: "Assessment by psychiatric and psychological professionals.",
  },
  {
    icon: UserRoundCheck,
    label: "Respectful Environment",
    text: "Sensitive concerns are discussed with dignity and without judgement.",
  },
];

/** Compact 3-card trust strip for the homepage. */
export function PrivacyStrip() {
  return (
    <Section tone="mist" labelledBy="privacy-strip-heading">
      <SectionHeading id="privacy-strip-heading" eyebrow="Trust & Privacy" title="A Respectful Space to Talk" />
      <ul className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, label, text }, i) => (
          <Reveal
            as="li"
            key={label}
            delay={i * 90}
            className="premium-card premium-card-hover flex h-full gap-4 p-5 sm:p-6"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="font-sans text-[15px] font-semibold sm:text-base">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
