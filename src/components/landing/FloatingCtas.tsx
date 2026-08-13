import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { clinic, hasPhone, hasWhatsapp, telHref, whatsappHref } from "@/config/clinic";
import { track } from "@/lib/tracking";
import { scrollToForm } from "./actions";

export function WhatsAppFab() {
  const href = whatsappHref();
  return (
    <a
      href={href ?? "#contact"}
      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => {
        track("whatsapp_click", { location: "floating_button" });
        if (!href) scrollToForm();
      }}
      aria-label={
        hasWhatsapp
          ? "Chat with Realize Healthcare on WhatsApp"
          : "Request a consultation from Realize Healthcare"
      }
      className="fixed right-4 bottom-24 z-40 grid size-14 place-items-center rounded-full bg-[oklch(0.62_0.15_150)] text-white shadow-card transition-transform hover:scale-105 md:bottom-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}

export function MobileCtaBar() {
  const wa = whatsappHref();
  const cell =
    "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-semibold";
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur md:hidden"
    >
      <a
        href={hasPhone ? telHref : "#contact"}
        onClick={() => {
          track("phone_click", { location: "mobile_bar" });
          if (!hasPhone) scrollToForm();
        }}
        className={`${cell} text-primary`}
        aria-label={`Call ${clinic.name}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Call
      </a>
      <a
        href={wa ?? "#contact"}
        {...(wa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={() => {
          track("whatsapp_click", { location: "mobile_bar" });
          if (!wa) scrollToForm();
        }}
        className={`${cell} border-x border-border text-primary`}
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </a>
      <button
        type="button"
        onClick={() => {
          track("cta_click", { cta: "book_consultation", location: "mobile_bar" });
          track("appointment_request", { location: "mobile_bar" });
          scrollToForm();
        }}
        className={`${cell} bg-primary text-primary-foreground`}
      >
        <CalendarCheck className="size-5" aria-hidden="true" />
        Book
      </button>
    </nav>
  );
}
