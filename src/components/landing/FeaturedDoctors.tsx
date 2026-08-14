import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { doctors } from "@/data/doctors";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { SafeImage } from "./SafeImage";

/** Homepage doctor preview — full profiles live on /doctors. */
export function FeaturedDoctors() {
  return (
    <Section id="doctors" labelledBy="doctors-heading">
      <SectionHeading
        id="doctors-heading"
        eyebrow="Clinical Team"
        title="Led by Qualified Psychiatric Specialists"
        lead="Psychiatric, psychological and medical professionals working together on individual care plans."
      />
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
        {doctors.slice(0, 4).map((doctor, i) => (
          <Reveal
            as="li"
            key={doctor.slug}
            delay={(i % 4) * 80}
            className="premium-card premium-card-hover group flex h-full flex-col overflow-hidden"
          >
            <SafeImage
              src={doctor.photo}
              alt={`${doctor.name}, ${doctor.role}`}
              loading="lazy"
              decoding="async"
              width={640}
              height={800}
              className="aspect-4/5 w-full bg-secondary object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="font-sans text-[15px] leading-snug font-semibold text-balance sm:text-[17px]">
                {doctor.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-[13px] font-medium text-primary sm:text-sm">
                {doctor.role}
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground sm:text-sm">
                {doctor.qualification}
              </p>
              <Link
                to="/doctors"
                hash={doctor.slug}
                onClick={() => track("doctor_profile_view", { doctor: doctor.slug })}
                className="mt-4 inline-flex min-h-10 items-center gap-1.5 self-start text-sm font-semibold text-primary"
              >
                View Profile
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-8 flex justify-center sm:mt-10">
        <Link
          to="/doctors"
          onClick={() => track("cta_click", { cta: "meet_clinical_team", location: "home_doctors" })}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/30 bg-card px-7 text-[15px] font-semibold text-primary shadow-soft transition-colors hover:bg-primary/5"
        >
          Meet Our Clinical Team
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
