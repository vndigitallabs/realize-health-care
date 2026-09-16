import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ExternalLink, Menu, MessageCircle, Phone, X } from "lucide-react";
import { images } from "@/config/images";
import { SafeImage } from "./SafeImage";
import { clinic, hasPhone, hasWhatsapp, telHref, whatsappHref } from "@/config/clinic";
import { track } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { BookButton, scrollToForm } from "./actions";

const navItems = [
  { label: "Doctors", to: "/doctors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const serviceGroups = [
  {
    title: "De-Addiction Services",
    description: "Confidential recovery for every dependency.",
    tone: "bg-primary",
    dot: "bg-primary/10 text-primary",
    services: [
      "Alcohol De-Addiction",
      "Drug De-Addiction",
      "Smoking Addiction",
      "Gambling Addiction",
      "Internet Addiction",
      "Gaming Addiction",
      "Pornography Addiction",
    ],
  },
  {
    title: "Mental Health Services",
    description: "Expert psychiatric and psychological care.",
    tone: "bg-accent",
    dot: "bg-accent/10 text-accent",
    services: [
      "Anxiety Disorders",
      "Depression",
      "Bipolar Disorder",
      "OCD",
      "PTSD",
      "Schizophrenia",
      "ADHD",
      "Autism",
      "Women's Mental Health",
    ],
  },
  {
    title: "Support and Recovery",
    description: "End-to-end healing that lasts.",
    tone: "bg-info",
    dot: "bg-info/10 text-info",
    services: [
      "Medical Detox",
      "Psychiatric Care",
      "Counselling and Therapy",
      "Family Counselling",
      "Yoga and Mind Healing",
      "Relapse Prevention",
      "Aftercare Program",
    ],
  },
] as const;

const MY_REALIZE_URL = "https://www.realizedeaddiction.com/";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wa = whatsappHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border/70 bg-background/80 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 md:h-20 lg:flex lg:gap-4">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 lg:mr-2">
          <SafeImage
            src={images.logo}
            alt="Realize Healthcare logo"
            width={72}
            height={72}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
            fallbackClassName="rounded-lg"
          />
          <span className="font-display text-[13px] leading-tight font-semibold tracking-tight whitespace-nowrap sm:text-[15px] lg:text-[17px]">
            REALIZE <span className="text-primary">HEALTHCARE</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setServicesOpen((value) => !value)}
              className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
              <ChevronDown
                className={cn("size-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            {servicesOpen ? (
              <div
                id="desktop-services-menu"
                className="absolute top-full left-1/2 z-60 w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2 pt-6"
              >
                <div className="grid grid-cols-3 gap-8 rounded-2xl border border-border bg-card p-7 shadow-card xl:gap-10 xl:p-8">
                  {serviceGroups.map((group) => (
                    <section key={group.title} aria-label={group.title}>
                      <div className="flex items-center gap-2.5">
                        <span className={cn("h-1.5 w-10 rounded-full", group.tone)} />
                        <h2 className="font-display text-[15px] font-semibold text-foreground uppercase">
                          {group.title}
                        </h2>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {group.description}
                      </p>
                      <ul className="mt-5 grid gap-1">
                        {group.services.map((service) => (
                          <li key={service}>
                            <Link
                              to="/services"
                              onClick={() => setServicesOpen(false)}
                              className="flex min-h-10 items-center gap-3 rounded-lg px-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                            >
                              <span className={cn("grid size-7 shrink-0 place-items-center rounded-full", group.dot)}>
                                <span className="size-1.5 rounded-full bg-current" />
                              </span>
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="relative whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-[width] after:duration-300 hover:text-primary hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={MY_REALIZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_click", { cta: "my_realize", location: "header" })}
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary hover:underline"
          >
            My Realize
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </nav>

        <div className="hidden items-center gap-2 lg:ml-4 lg:flex">
          {hasWhatsapp && wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "header" })}
              className="hidden min-h-10 items-center gap-1.5 rounded-full border border-primary/30 px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 xl:inline-flex"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          ) : null}
          <BookButton location="header" size="default" className="min-h-10 px-5" />
        </div>

        <div className="flex items-center justify-end gap-1 lg:hidden">
          {hasPhone ? (
            <a
              href={telHref}
              aria-label={`Call ${clinic.name}`}
              onClick={() => track("phone_click", { location: "header_mobile" })}
              className="grid size-11 place-items-center rounded-full text-primary hover:bg-secondary"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
          ) : (
            <button
              type="button"
              aria-label="Request a consultation"
              onClick={() => {
                track("phone_click", { location: "header_mobile" });
                scrollToForm();
              }}
              className="grid size-11 place-items-center rounded-full text-primary hover:bg-secondary"
            >
              <Phone className="size-5" aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full hover:bg-secondary"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background/95 px-4 pt-3 pb-6 backdrop-blur-xl sm:px-6 lg:hidden"
        >
          <ul className="grid gap-1">
            <li>
              <details className="group">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between rounded-xl px-3 text-base font-medium hover:bg-secondary">
                  Services
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="mt-2 grid gap-5 border-l border-border pl-3">
                  {serviceGroups.map((group) => (
                    <section key={group.title} aria-label={group.title}>
                      <div className="flex items-center gap-2">
                        <span className={cn("h-1 w-7 rounded-full", group.tone)} />
                        <h2 className="text-xs font-semibold text-foreground uppercase">{group.title}</h2>
                      </div>
                      <ul className="mt-2 grid gap-0.5">
                        {group.services.map((service) => (
                          <li key={service}>
                            <Link
                              to="/services"
                              onClick={() => setOpen(false)}
                              className="flex min-h-10 items-center rounded-lg px-3 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
                            >
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </details>
            </li>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium hover:bg-secondary"
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
                onClick={() => {
                  track("cta_click", { cta: "my_realize", location: "mobile_menu" });
                  setOpen(false);
                }}
                className="flex min-h-12 items-center gap-1.5 rounded-xl px-3 text-base font-semibold text-primary hover:bg-secondary"
              >
                My Realize
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <BookButton location="mobile_menu" className="mt-4 w-full" />
        </nav>
      ) : null}
    </header>
  );
}
