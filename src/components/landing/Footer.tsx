import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { images } from "@/config/images";
import { SafeImage } from "./SafeImage";
import {
  clinic,
  formattedAddress,
  hasAddress,
  hasMaps,
  hasPhone,
  hasWhatsapp,
  telHref,
  whatsappHref,
} from "@/config/clinic";
import { track } from "@/lib/tracking";

const pages = [
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
] as const;

const MY_REALIZE_URL = "https://www.realizedeaddiction.com/";

export function Footer() {
  const wa = whatsappHref();
  return (
    <footer className="border-t border-border bg-secondary/40 px-4 pt-12 pb-28 sm:px-6 md:pb-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <SafeImage
              src={images.logo}
              alt="Realize Healthcare logo"
              width={40}
              height={40}
              loading="lazy"
              className="h-9 w-9 object-contain"
              fallbackClassName="rounded-lg"
            />
            <span className="font-display text-lg font-semibold">
              REALIZE <span className="text-primary">HEALTHCARE</span>
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Psychiatry, psychology and mental-health care in Hyderabad, Telangana.
          </p>
          <address className="mt-3 space-y-1 text-sm text-muted-foreground not-italic">
            {hasAddress ? <p>{formattedAddress}</p> : null}
            <p className="flex flex-wrap gap-x-3">
              {hasPhone ? (
                <a href={telHref} className="text-primary hover:underline">
                  {clinic.phoneDisplay || clinic.phone}
                </a>
              ) : null}
              {hasWhatsapp && wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { location: "footer" })}
                  className="text-primary hover:underline"
                >
                  WhatsApp
                </a>
              ) : null}
              {hasMaps ? (
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("map_click", { location: "footer" })}
                  className="text-primary hover:underline"
                >
                  Google Maps
                </a>
              ) : null}
            </p>
          </address>
        </div>

        <nav aria-label="Pages">
          <h2 className="font-sans text-sm font-semibold tracking-wide uppercase">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {pages.map((page) => (
              <li key={page.to}>
                <Link
                  to={page.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal and group">
          <h2 className="font-sans text-sm font-semibold tracking-wide uppercase">More</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {legal.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={MY_REALIZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("cta_click", { cta: "my_realize", location: "footer" })}
                className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
              >
                My Realize
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-border pt-5">
        <p className="text-xs leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">Medical disclaimer:</strong> This page is
          for general awareness only and is not a substitute for professional medical advice,
          diagnosis or treatment. In an emergency, contact your nearest hospital immediately.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {clinic.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
