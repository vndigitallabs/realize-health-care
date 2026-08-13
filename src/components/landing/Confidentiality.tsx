import { CalendarCheck, Lock, Stethoscope, UserRoundCheck } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Lock,
    label: "Private conversations",
    text: "Concerns are discussed in a private setting.",
  },
  {
    icon: Stethoscope,
    label: "Qualified clinicians",
    text: "Assessment by psychiatric and psychological professionals.",
  },
  {
    icon: CalendarCheck,
    label: "Consultation first",
    text: "You can talk to the team before committing to any treatment.",
  },
  {
    icon: UserRoundCheck,
    label: "Respectful environment",
    text: "Sensitive concerns are discussed with dignity and without judgement.",
  },
];

export function Confidentiality() {
  return (
    <Section tone="mist" labelledBy="respect-heading">
      <SectionHeading
        id="respect-heading"
        eyebrow="Trust"
        title="A Respectful Space to Talk"
        lead="Mental-health concerns can be deeply personal. Our goal is to provide a professional and respectful environment where individuals and families can discuss their concerns and understand their care options."
      />
      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, text }, i) => (
          <Reveal
            as="li"
            key={label}
            delay={(i % 4) * 90}
            className="premium-card premium-card-hover flex h-full flex-col p-5 sm:p-6"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-sans text-[15px] font-semibold sm:text-base">{label}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
