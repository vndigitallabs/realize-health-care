/**
 * Centralized image paths.
 *
 * All files below live in /public/images and are served from the site root,
 * so these paths work identically in dev, preview and production.
 * To replace an image, drop a file with the same name (same lowercase
 * spelling) into /public/images and nothing else needs to change.
 */
export const images = {
  logo: "/images/realize_logo.png",
  hero: "/images/hero-consultation.jpg",
  familySupport: "/images/family-support.jpg",
  doctors: {
    mahendra: "/images/doctors/mahendra.jpg",
    sharanya: "/images/doctors/sharanya.jpg",
    rishi: "/images/doctors/rishi.jpg",
    kalyan: "/images/doctors/kalyan.jpg",
    pravalika: "/images/doctors/pravalika.jpg",
    ravali: "/images/doctors/ravali.jpg",
    chandana: "/images/doctors/chandana.jpg",
    indra: "/images/doctors/indra.jpg",
  },
} as const;
