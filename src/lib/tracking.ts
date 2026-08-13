/**
 * Lightweight analytics/conversion event layer.
 * Pushes to window.dataLayer (GTM) and gtag when present; safe no-op otherwise.
 * Google Ads conversion actions should be configured in GTM/Ads against these
 * event names — only `generate_lead` and `appointment_booked` are intended as
 * primary conversions.
 */

export type TrackEvent =
  | "generate_lead"
  | "phone_click"
  | "whatsapp_click"
  | "appointment_request"
  | "appointment_booked"
  | "map_click"
  | "cta_click"
  | "form_start"
  | "faq_open"
  | "doctor_profile_view"
  | "exit_intent_shown";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, ...params };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
  window.gtag?.("event", event, params);
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

const STORAGE_KEY = "rh_attribution";

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
};

/** Capture campaign params once per session; never rendered to the user. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const stored: Attribution = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
    const next: Attribution = { ...stored };
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) next[key] = value;
    }
    next.landing_page ??= window.location.pathname;
    if (!next.referrer && document.referrer) next.referrer = document.referrer;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable — attribution is best-effort */
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}
