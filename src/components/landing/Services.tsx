import {
  ArrowRight,
  Baby,
  Brain,
  CloudRain,
  Flower2,
  HeartPulse,
  Repeat2,
  Users,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/content";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { BookButton, scrollToForm } from "./actions";

const icons: Record<string, LucideIcon> = {
  "Psychiatric Consultation": Brain,
  "Depression Care": CloudRain,
  "Anxiety Care": Wind,
  "Bipolar Disorder Care": Repeat2,
  "OCD Care": HeartPulse,
  "Family Counselling": Users,
  "Women's Mental Health": Flower2,
  "Child & Adolescent Psychiatry": Baby,
};

export function Services({ showHeading = true }: { showHeading?: boolean } = {}) {
  return (
    <Section id="services" tone="mist" labelledBy="services-heading">
      {showHeading ? (
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Mental Health Services"
          lead="Explore professional mental-health and psychiatric support based on individual clinical needs."
        />
      ) : null}

      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 [&:not(:first-child)]:mt-10 sm:[&:not(:first-child)]:mt-12">
        {services.map((service, i) => {
          const Icon = icons[service.title] ?? Brain;
          return (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 4) * 80}
              className="premium-card premium-card-hover group flex h-full flex-col p-5 sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-sans text-[17px] font-semibold text-balance">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  track("cta_click", { cta: service.cta, service: service.title });
                  scrollToForm();
                }}
                className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-primary"
              >
                {service.cta}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-primary/20 bg-card shadow-card sm:mt-12 sm:rounded-3xl">
        <div className="grid gap-6 p-6 sm:p-7 md:grid-cols-[1.4fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              Featured Service
            </p>
            <h3 className="mt-3 font-display text-xl sm:text-2xl md:text-3xl">
              Psychiatric Consultation
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A consultation provides an opportunity to discuss concerns, understand possible
              causes, receive professional assessment and determine an appropriate care plan.
            </p>
          </div>
          <BookButton
            location="featured_service"
            label="Book a Psychiatric Consultation"
            className="w-full md:w-auto"
          />
        </div>
      </Reveal>
    </Section>
  );
}
