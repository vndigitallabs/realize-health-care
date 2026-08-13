import { Clock, Globe, MapPin, Phone } from "lucide-react";
import {
  clinic,
  formattedAddress,
  hasAddress,
  hasMaps,
  hasPhone,
  mapQuery,
  telHref,
} from "@/config/clinic";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { BookButton } from "./actions";

export function Location() {
  return (
    <Section tone="muted" labelledBy="location-heading">
      <SectionHeading
        id="location-heading"
        eyebrow="Location"
        title="Realize Healthcare — Hyderabad"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="surface-card p-6 md:p-8">
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="mt-1 text-muted-foreground">
                  {hasAddress
                    ? formattedAddress
                    : "Clinic administrator: add the verified clinic address in the clinic settings."}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold">Phone</p>
                {hasPhone ? (
                  <a
                    href={telHref}
                    onClick={() => track("phone_click", { location: "location_section" })}
                    className="mt-1 inline-block text-primary hover:underline"
                  >
                    {clinic.phoneDisplay || clinic.phone}
                  </a>
                ) : (
                  <p className="mt-1 text-muted-foreground">
                    Clinic administrator: add the verified phone number in the clinic settings.
                  </p>
                )}
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold">Consultation hours</p>
                <p className="mt-1 text-muted-foreground">{clinic.hours}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold">Website</p>
                <a
                  href={clinic.website}
                  className="mt-1 inline-block text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  www.realizehealthcare.in
                </a>
              </div>
            </li>
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BookButton location="location_section" />
            {hasMaps ? (
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("map_click", { location: "location_section" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-input bg-background px-7 text-[15px] font-semibold hover:bg-accent"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            ) : null}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {hasMaps && hasAddress ? (
            <iframe
              title="Realize Healthcare location on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-80 w-full border-0"
            />
          ) : (
            <div className="grid h-full min-h-80 place-items-center p-6 text-center text-sm text-muted-foreground">
              The map will appear here once the verified clinic address and Google Maps link are
              added.
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}