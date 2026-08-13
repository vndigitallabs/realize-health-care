import { useState } from "react";
import { ChevronDown, Clock, Languages, MessageCircle } from "lucide-react";
import { doctors } from "@/data/doctors";
import { hasWhatsapp, whatsappHref } from "@/config/clinic";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { scrollToForm } from "./actions";

export function Doctors() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (slug: string) => {
    const next = !expanded[slug];
    setExpanded((prev) => ({ ...prev, [slug]: next }));
    if (next) {
      track("doctor_card_expand", { doctor: slug });
    }
  };

  return (
    <Section id="doctors" labelledBy="doctors-heading">
      <SectionHeading
        id="doctors-heading"
        eyebrow="Clinical Team"
        title="Meet Our Clinical Team"
        lead="Psychiatric, psychological and medical professionals working together on individual care plans."
      />
      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor, i) => {
          const isOpen = expanded[doctor.slug] ?? false;
          const wa = whatsappHref(
            `Hello Realize Healthcare, I would like to request a consultation with ${doctor.name}.`,
          );
          return (
            <Reveal
              as="li"
              key={doctor.slug}
              delay={(i % 4) * 80}
              className="premium-card premium-card-hover group flex h-full flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.photo}
                  alt={`${doctor.name}, ${doctor.role}`}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={800}
                  className="aspect-4/5 w-full bg-secondary object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/90 to-transparent"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-sans text-[17px] leading-snug font-semibold">{doctor.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{doctor.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{doctor.qualification}</p>

                <button
                  type="button"
                  onClick={() => toggle(doctor.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`doctor-details-${doctor.slug}`}
                  className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {isOpen ? "See less" : "See more"}
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`doctor-details-${doctor.slug}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
                    <h4 className="mt-5 text-[11px] font-semibold tracking-[0.14em] uppercase">
                      Areas of Expertise
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {doctor.expertise.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <dl className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                      <div className="flex min-w-0 gap-2">
                        <dt className="sr-only">Languages</dt>
                        <Languages className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <dd className="min-w-0">{doctor.languages}</dd>
                      </div>
                      <div className="flex min-w-0 gap-2">
                        <dt className="sr-only">Consultation</dt>
                        <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <dd className="min-w-0">{doctor.consultation}</dd>
                      </div>
                    </dl>
                    <div className="mt-5 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          track("doctor_profile_view", { doctor: doctor.slug });
                          track("appointment_request", {
                            location: "doctor_card",
                            doctor: doctor.slug,
                          });
                          scrollToForm();
                        }}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Request a Consultation
                      </button>
                      {hasWhatsapp && wa ? (
                        <a
                          href={wa}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            track("whatsapp_click", { location: "doctor_card", doctor: doctor.slug })
                          }
                          className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-full border border-primary/30 px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                        >
                          <MessageCircle className="size-4" aria-hidden="true" />
                          WhatsApp
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
