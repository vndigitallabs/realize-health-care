/**
 * SINGLE SOURCE OF TRUTH for all clinic-specific data.
 * Update these values only with information verified by Realize Healthcare.
 * Never invent a phone number, address or credential here.
 */

export const clinic = {
  name: "Realize Healthcare",
  legalName: "Realize Healthcare",
  tagline: "Psychiatry & Mental Health Care in Hyderabad",
  website: "https://www.realizehealthcare.in/",

  /** TODO (clinic admin): add the verified phone number in E.164 form, e.g. "+919000000000". */
  phone: "",
  /** Human-readable version shown in the UI. Leave empty if `phone` is empty. */
  phoneDisplay: "",
  /** TODO (clinic admin): add the verified WhatsApp number in E.164 digits, e.g. "919000000000". */
  whatsapp: "",

  /** TODO (clinic admin): add the verified clinic address. */
  address: {
    line1: "",
    line2: "",
    locality: "",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "",
    country: "IN",
  },

  /** TODO (clinic admin): paste the Google Maps place / directions link. */
  mapsUrl: "",

  hours: "Mon – Sat: 10:00 AM – 7:00 PM",

  whatsappPrefill:
    "Hello Realize Healthcare, I would like to know more about booking a mental-health consultation.",
} as const;

export const hasPhone = clinic.phone.length > 0;
export const hasWhatsapp = clinic.whatsapp.length > 0;
export const hasAddress = clinic.address.line1.length > 0;
export const hasMaps = clinic.mapsUrl.length > 0;

export const telHref = hasPhone ? `tel:${clinic.phone}` : undefined;

export const whatsappHref = (message: string = clinic.whatsappPrefill) =>
  hasWhatsapp
    ? `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`
    : undefined;

export const formattedAddress = [
  clinic.address.line1,
  clinic.address.line2,
  clinic.address.locality,
  `${clinic.address.city}, ${clinic.address.state} ${clinic.address.postalCode}`.trim(),
]
  .filter(Boolean)
  .join(", ");