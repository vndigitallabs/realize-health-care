import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Menu, MessageCircle, Phone, X } from "lucide-react";
import { images } from "@/config/images";
import { SafeImage } from "./SafeImage";
import { clinic, hasPhone, hasWhatsapp, telHref, whatsappHref } from "@/config/clinic";
import { track } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { BookButton, scrollToForm } from "./actions";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const MY_REALIZE_URL = "https://www.realizedeaddiction.com/";

export function Header() {
  const [open, setOpen] = useState(false);
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
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14"
            fallbackClassName="rounded-lg"
          />
          <span className="font-display text-[13px] leading-tight font-semibold tracking-tight whitespace-nowrap sm:text-[15px] lg:text-[17px]">
            REALIZE <span className="text-primary">HEALTHCARE</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7">
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
