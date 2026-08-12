import { doctors } from "@/data/doctors";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { scrollToForm } from "./actions";

export function Doctors() {
  return (
    <Section id="doctors" labelledBy="doctors-heading">
      <SectionHeading
        id="doctors-heading"
        eyebrow="Clinical Team"
        title="Meet Our Clinical Team"
        lead="Psychiatric, psychological and medical professionals working together on individual care plans."
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <li key={doctor.slug} className="surface-card flex flex-col overflow-hidden">
            <img
              src={doctor.photo}
              alt={`${doctor.name}, ${doctor.role}`}
              loading="lazy"
              decoding="async"
              width={640}
              height={640}
              className="aspect-4/5 w-full bg-secondary object-cover object-top"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-sans text-lg font-semibold">{doctor.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{doctor.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{doctor.qualification}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
              <h4 className="mt-5 text-xs font-semibold tracking-[0.14em] uppercase">
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
              <dl className="mt-5 space-y-1 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Languages:</dt>
                  <dd>{doctor.languages}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Consultation:</dt>
                  <dd>{doctor.consultation}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => {
                  track("doctor_profile_view", { doctor: doctor.slug });
                  track("appointment_request", { location: "doctor_card", doctor: doctor.slug });
                  scrollToForm();
                }}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-primary/30 px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Request a Consultation
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}