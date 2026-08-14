import { ArrowRight, Baby, Brain, CloudRain, Flower2, HeartPulse, Repeat2, Users, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/content";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

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

/** Homepage services overview — titles only, details live on /services. */
export function ServicesPreview() {
  return (
    <Section id="services" tone="mist" labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="Services"
        title="Mental Health Services in Hyderabad"
        lead="Professional psychiatric and psychological support, planned around individual clinical needs."
      />
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {services.slice(0, 8).map((service, i) => {
          const Icon = icons[service.title] ?? Brain;
          return (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 4) * 70}
              className="premium-card premium-card-hover group flex h-full items-center gap-3 p-4 sm:flex-col sm:items-start sm:p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="min-w-0 font-sans text-[15px] leading-snug font-semibold text-balance sm:mt-2 sm:text-base">
                {service.title}
              </h3>
            </Reveal>
          );
        })}
      </ul>
      <Reveal className="mt-8 flex justify-center sm:mt-10">
        <Link
          to="/services"
          onClick={() => track("cta_click", { cta: "view_all_services", location: "home_services" })}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/30 bg-card px-7 text-[15px] font-semibold text-primary shadow-soft transition-colors hover:bg-primary/5"
        >
          View All Services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
