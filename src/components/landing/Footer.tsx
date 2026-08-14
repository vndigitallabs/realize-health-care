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

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Services", href: "#services" },
      { label: "Doctors", href: "#doctors" },
      { label: "FAQs", href: "#faqs" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Realize Group",
    links: [{ label: "My Realize", href: "https://www.realizedeaddiction.com/", external: true }],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
];

export function Footer() {
  const wa = whatsappHref();
  return (
    <footer className="border-t border-border bg-secondary/40 px-4 pt-14 pb-28 sm:px-6 md:pb-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
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
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Psychiatry, psychology and mental-health care in Hyderabad, Telangana.
          </p>
          <address className="mt-4 space-y-1 text-sm text-muted-foreground not-italic">
            <p>{hasAddress ? formattedAddress : "Address: to be confirmed by the clinic."}</p>
            {hasPhone ? (
              <p>
                <a href={telHref} className="text-primary hover:underline">
                  {clinic.phoneDisplay || clinic.phone}
                </a>
              </p>
            ) : null}
            {hasWhatsapp && wa ? (
              <p>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  WhatsApp
                </a>
              </p>
            ) : null}
            {hasMaps ? (
              <p>
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Maps
                </a>
              </p>
            ) : null}
          </address>
        </div>

        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="font-sans text-sm font-semibold tracking-wide uppercase">
              {column.heading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-border pt-6">
        <p className="text-xs leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">Medical disclaimer:</strong> The
          information on this page is for general awareness only and is not a substitute for
          professional medical advice, diagnosis or treatment. Any diagnosis or treatment plan is
          determined only after a clinical consultation. In an emergency, contact your nearest
          hospital immediately.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {clinic.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
