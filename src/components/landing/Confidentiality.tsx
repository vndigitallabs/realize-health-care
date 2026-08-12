import { CalendarCheck, Lock, Stethoscope } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const items = [
  { icon: Lock, label: "Private conversations", text: "Concerns are discussed in a private setting." },
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
];

export function Confidentiality() {
  return (
    <Section tone="muted" labelledBy="respect-heading">
      <SectionHeading
        id="respect-heading"
        eyebrow="Trust"
        title="A Respectful Space to Talk"
        lead="Mental-health concerns can be deeply personal. Our goal is to provide a professional and respectful environment where individuals and families can discuss their concerns and understand their care options."
      />
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, label, text }) => (
          <li key={label} className="surface-card flex items-start gap-4 p-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="font-sans text-base font-semibold">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}