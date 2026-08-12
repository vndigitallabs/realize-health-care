import {
  ClipboardList,
  HeartHandshake,
  Repeat,
  ShieldCheck,
  Users,
  UserRoundCheck,
} from "lucide-react";
import { pillars } from "@/data/content";
import { Section, SectionHeading } from "./Section";

const icons = [ClipboardList, UserRoundCheck, Users, HeartHandshake, Repeat, ShieldCheck];

export function WhyRealize() {
  return (
    <Section id="why-realize" tone="muted" labelledBy="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow="Why Realize Healthcare"
        title="Care That Starts With Listening"
        lead="Mental-health care is personal. Realize Healthcare focuses on understanding the individual, assessing their needs and developing an appropriate treatment approach."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = icons[i] ?? ShieldCheck;
          return (
            <li key={pillar.title} className="surface-card p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-sans text-base font-semibold">{pillar.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}