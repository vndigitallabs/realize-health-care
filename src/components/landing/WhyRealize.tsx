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
import { BookButton } from "./actions";

const icons = [ClipboardList, UserRoundCheck, Users, HeartHandshake, Repeat, ShieldCheck];

/** `limit` keeps the homepage compact; the full set is shown on /about. */
export function WhyRealize({ limit, showCta = false }: { limit?: number; showCta?: boolean }) {
  const items = typeof limit === "number" ? pillars.slice(0, limit) : pillars;
  return (
    <Section id="why-realize" tone="sun" labelledBy="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow="Why Realize Healthcare"
        title="Care That Starts With Listening"
        lead="Every care plan begins with a professional assessment, so treatment is matched to the individual rather than a generic pathway."
      />
      <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {items.map((pillar, i) => {
          const Icon = icons[i] ?? ShieldCheck;
          return (
            <Reveal
              as="li"
              key={pillar.title}
              delay={(i % 4) * 80}
              className="premium-card premium-card-hover group flex h-full flex-col p-5 sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="mt-4 min-w-0">
                <h3 className="font-sans text-[15px] font-semibold sm:text-base">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
      {showCta ? (
        <Reveal className="mt-8 flex justify-center sm:mt-10">
          <BookButton location="why_realize" className="w-full sm:w-auto" />
        </Reveal>
      ) : null}
    </Section>
  );
}
