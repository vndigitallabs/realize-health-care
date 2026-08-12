import { MapPin } from "lucide-react";
import { clinic, hasMaps } from "@/config/clinic";
import { facilityPhotos, facilitySlots } from "@/data/content";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";

export function Facility() {
  return (
    <Section labelledBy="facility-heading">
      <SectionHeading
        id="facility-heading"
        eyebrow="Our Clinic"
        title="A Professional Healthcare Environment"
        lead="Consultation rooms and clinical spaces designed for private, unhurried conversations."
      />

      {facilityPhotos.length > 0 ? (
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilityPhotos.map((photo) => (
            <li key={photo.src} className="overflow-hidden rounded-2xl border border-border">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 w-full object-cover"
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilitySlots.map((slot) => (
            <li
              key={slot}
              className="grid aspect-4/3 place-items-center rounded-2xl border border-dashed border-border bg-secondary/50 p-4 text-center"
            >
              <span className="text-sm text-muted-foreground">
                <strong className="block font-semibold text-foreground">{slot}</strong>
                Clinic administrator: add a genuine Realize Healthcare photograph here.
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="font-display text-xl">Visit Realize Healthcare in Hyderabad</p>
        {hasMaps ? (
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("map_click", { location: "facility" })}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Get Directions
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">
            Clinic administrator: add the verified Google Maps link in the clinic settings to enable
            directions.
          </p>
        )}
      </div>
    </Section>
  );
}