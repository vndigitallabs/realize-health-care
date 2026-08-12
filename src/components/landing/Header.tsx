import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/realize_logo.png.asset.json";
import { clinic, hasPhone, telHref } from "@/config/clinic";
import { track } from "@/lib/tracking";
import { BookButton, CallButton, scrollToForm } from "./actions";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Why Realize", href: "#why-realize" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6 md:h-20">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img
            src={logo.url}
            alt="Realize Healthcare logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="truncate font-display text-base leading-tight font-semibold tracking-tight sm:text-lg">
            REALIZE <span className="text-primary">HEALTHCARE</span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:ml-4 lg:flex">
          <CallButton location="header" size="default" className="min-h-10 px-5" />
          <BookButton location="header" size="default" className="min-h-10 px-5" />
        </div>

        <div className="ml-auto flex items-center gap-1 lg:hidden">
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
          className="border-t border-border bg-background px-4 pt-2 pb-5 lg:hidden"
        >
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <BookButton location="mobile_menu" className="mt-3 w-full" />
        </nav>
      ) : null}
    </header>
  );
}