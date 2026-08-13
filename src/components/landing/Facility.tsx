import { useEffect, useState } from "react";
import { ImageIcon, MapPin, X } from "lucide-react";
import logo from "@/assets/realize_logo.png.asset.json";
import { clinic, hasMaps } from "@/config/clinic";
import { facilityPhotos, facilitySlots } from "@/data/content";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Facility() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const photo = active !== null ? facilityPhotos[active] : undefined;

  return (
    <Section tone="mist" labelledBy="facility-heading">
      <SectionHeading
        id="facility-heading"
        eyebrow="Our Clinic"
        title="A Professional Healthcare Environment"
        lead="Consultation rooms and clinical spaces designed for private, unhurried conversations."
      />

      {facilityPhotos.length > 0 ? (
        <ul className="mt-10 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:mt-12 sm:auto-rows-[12rem] sm:grid-cols-3 sm:gap-4">
          {facilityPhotos.map((item, i) => (
            <Reveal
              as="li"
              key={item.src}
              delay={(i % 3) * 80}
              className={i % 5 === 0 ? "col-span-2 row-span-2 sm:col-span-1" : ""}
            >
              <button
                type="button"
                onClick={() => {
                  setActive(i);
                  track("cta_click", { cta: "gallery_open", image: item.label });
                }}
                className="group block size-full overflow-hidden rounded-2xl border border-border/70 shadow-soft"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="sr-only">Open larger image: {item.label}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      ) : (
        <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {facilitySlots.map((slot, i) => (
            <Reveal
              as="li"
              key={slot}
              delay={(i % 3) * 70}
              className="relative grid aspect-4/3 place-items-center overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-secondary/70 to-card p-4 text-center"
            >
              <img
                src={logo.url}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="pointer-events-none absolute inset-0 m-auto w-24 opacity-[0.07]"
              />
              <span className="relative text-sm text-muted-foreground">
                <ImageIcon className="mx-auto mb-2 size-5 text-primary/60" aria-hidden="true" />
                <strong className="block font-sans font-semibold text-foreground">{slot}</strong>
                Genuine Realize Healthcare photograph to be added.
              </span>
            </Reveal>
          ))}
        </ul>
      )}

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="font-display text-lg sm:text-xl">Visit Realize Healthcare in Hyderabad</p>
        {hasMaps ? (
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("map_click", { location: "facility" })}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
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

      {photo ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photo.label}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-70 grid place-items-center bg-foreground/80 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-background/90 text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <img
            src={photo.src}
            alt={photo.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85dvh] w-auto max-w-full rounded-2xl object-contain shadow-card"
          />
        </div>
      ) : null}
    </Section>
  );
}
