import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic, hasPhone, hasWhatsapp, telHref, whatsappHref } from "@/config/clinic";
import { track } from "@/lib/tracking";
import { cn } from "@/lib/utils";

/**
 * Sends the visitor to the consultation form. On pages that render the form
 * inline it scrolls; elsewhere (e.g. the homepage) it opens the contact page.
 */
export function scrollToForm() {
  const target = document.getElementById("contact");
  if (!target) {
    window.location.assign("/contact#contact");
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("lead-name")?.focus({ preventScroll: true });
}

type Common = { className?: string; label?: string; location: string };

export function BookButton({
  className,
  label = "Book a Consultation",
  location,
  size = "lg",
  variant = "default",
  channel = "form",
  whatsappMessage = clinic.whatsappPrefill,
}: Common & {
  size?: "default" | "lg" | "sm";
  variant?: "default" | "outline" | "secondary";
  channel?: "form" | "whatsapp";
  whatsappMessage?: string;
}) {
  const href = channel === "whatsapp" ? whatsappHref(whatsappMessage) : undefined;
  const isLink = Boolean(href);
  const onClick = () => {
    track("cta_click", { cta: "book_consultation", location });
    if (channel === "whatsapp") {
      track("whatsapp_click", { location });
      if (!href) scrollToForm();
    } else {
      track("appointment_request", { location });
      scrollToForm();
    }
  };

  return (
    <Button
      asChild={isLink}
      size={size}
      variant={variant}
      className={cn("min-h-12 rounded-full px-7 text-[15px] font-semibold", className)}
      {...(isLink ? {} : { onClick })}
    >
      {isLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          <MessageCircle aria-hidden="true" />
          {label}
        </a>
      ) : (
        <span className="inline-flex items-center gap-2">
          <CalendarCheck aria-hidden="true" />
          {label}
        </span>
      )}
    </Button>
  );
}

export function CallButton({
  className,
  label = "Call Now",
  location,
  size = "lg",
  variant = "outline",
}: Common & { size?: "default" | "lg" | "sm"; variant?: "default" | "outline" | "secondary" }) {
  const onClick = () => {
    track("phone_click", { location });
    if (!hasPhone) scrollToForm();
  };
  return (
    <Button
      asChild={hasPhone}
      size={size}
      variant={variant}
      className={cn("min-h-12 rounded-full px-7 text-[15px] font-semibold", className)}
      {...(hasPhone ? {} : { onClick })}
    >
      {hasPhone ? (
        <a href={telHref} onClick={onClick}>
          <Phone aria-hidden="true" />
          {label}
          {clinic.phoneDisplay ? <span className="sr-only"> {clinic.phoneDisplay}</span> : null}
        </a>
      ) : (
        <span className="inline-flex items-center gap-2">
          <Phone aria-hidden="true" />
          {label}
        </span>
      )}
    </Button>
  );
}

export function WhatsAppButton({
  className,
  label = "WhatsApp",
  location,
  size = "lg",
  variant = "secondary",
}: Common & { size?: "default" | "lg" | "sm"; variant?: "default" | "outline" | "secondary" }) {
  const href = whatsappHref();
  const onClick = () => {
    track("whatsapp_click", { location });
    if (!href) scrollToForm();
  };
  return (
    <Button
      asChild={Boolean(href)}
      size={size}
      variant={variant}
      className={cn("min-h-12 rounded-full px-7 text-[15px] font-semibold", className)}
      {...(href ? {} : { onClick })}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          <MessageCircle aria-hidden="true" />
          {label}
        </a>
      ) : (
        <span className="inline-flex items-center gap-2">
          <MessageCircle aria-hidden="true" />
          {label}
        </span>
      )}
    </Button>
  );
}

export function TalkToSpecialistButton({
  className,
  location,
  variant = "outline",
}: {
  className?: string;
  location: string;
  variant?: "default" | "outline" | "secondary";
}) {
  return (
    <Button
      size="lg"
      variant={variant}
      className={cn("min-h-12 rounded-full px-7 text-[15px] font-semibold", className)}
      onClick={() => {
        track("cta_click", { cta: "talk_to_specialist", location });
        scrollToForm();
      }}
    >
      Talk to a Specialist
    </Button>
  );
}
