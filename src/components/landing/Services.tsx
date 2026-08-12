import { ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { BookButton, scrollToForm } from "./actions";

export function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="Services"
        title="Mental Health Services"
        lead="Explore professional mental-health and psychiatric support based on individual clinical needs."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service.title} className="surface-card flex flex-col p-6 transition-shadow hover:shadow-card">
            <h3 className="font-sans text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <button
              type="button"
              onClick={() => {
                track("cta_click", { cta: service.cta, service: service.title });
                scrollToForm();
              }}
              className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-primary hover:underline"
            >
              {service.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-12 overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-card">
        <div className="grid gap-6 p-7 md:grid-cols-[1.4fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Featured Service
            </p>
            <h3 className="mt-3 font-display text-2xl md:text-3xl">Psychiatric Consultation</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A consultation provides an opportunity to discuss concerns, understand possible
              causes, receive professional assessment and determine an appropriate care plan.
            </p>
          </div>
          <BookButton location="featured_service" label="Book a Psychiatric Consultation" />
        </div>
      </div>
    </Section>
  );
}