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
import { Reveal } from "./Reveal";

const icons = [ClipboardList, UserRoundCheck, Users, HeartHandshake, Repeat, ShieldCheck];

export function WhyRealize() {
  return (
    <Section id="why-realize" tone="teal" labelledBy="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow="Why Realize Healthcare"
        title="Care That Starts With Listening"
        lead="Mental-health care is personal. Realize Healthcare focuses on understanding the individual, assessing their needs and developing an appropriate treatment approach."
      />
      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = icons[i] ?? ShieldCheck;
          return (
            <Reveal
              as="li"
              key={pillar.title}
              delay={(i % 3) * 90}
              className="premium-card premium-card-hover group flex h-full gap-4 p-5 sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-sans text-[15px] font-semibold sm:text-base">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
