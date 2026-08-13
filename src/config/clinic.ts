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

  /** Verified clinic phone number (E.164). */
  phone: "+919553366366",
  phoneDisplay: "+91 95533 66366",
  /** Verified WhatsApp number (digits only, with country code). */
  whatsapp: "919553366366",

  /** Verified clinic address. */
  address: {
    line1: "Plot No. 1, South East Part, 2nd Floor, Surya Towers",
    line2: "Koheda Road, Beside Rice Mill",
    locality: "Pedda Amberpet",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "501505",
    country: "IN",
  },

  /** Directions link built from the verified address. */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Realize Healthcare, Plot No. 1, Surya Towers, Koheda Road, Pedda Amberpet, Hyderabad 501505",
    ),

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