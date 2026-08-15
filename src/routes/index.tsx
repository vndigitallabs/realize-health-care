import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageLayout } from "@/components/landing/PageLayout";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { ServicesPreview } from "@/components/landing/ServicesPreview";
import { WhyRealize } from "@/components/landing/WhyRealize";
import { FeaturedDoctors } from "@/components/landing/FeaturedDoctors";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FamilySupport } from "@/components/landing/FamilySupport";
import { PrivacyStrip } from "@/components/landing/PrivacyStrip";
import { FinalCta } from "@/components/landing/FinalCta";
import { ExitIntent } from "@/components/landing/ExitIntent";
import { clinic, formattedAddress, hasAddress, hasPhone } from "@/config/clinic";
import { services } from "@/data/content";
import { captureAttribution } from "@/lib/tracking";

const title = "Psychiatrist & Mental Health Care in Hyderabad | Realize Healthcare";
const description =
  "Professional psychiatric and mental-health care in Hyderabad. Speak with the Realize Healthcare clinical team and request a consultation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "psychiatrist Hyderabad, mental health clinic Hyderabad" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: clinic.name,
          url: clinic.website,
          medicalSpecialty: "Psychiatric",
          areaServed: "Hyderabad, Telangana, India",
          ...(hasPhone ? { telephone: clinic.phone } : {}),
          address: {
            "@type": "PostalAddress",
            ...(hasAddress ? { streetAddress: formattedAddress } : {}),
            addressLocality: clinic.address.city,
            addressRegion: clinic.address.state,
            addressCountry: clinic.address.country,
          },
          availableService: services.map((service) => ({
            "@type": "MedicalTherapy",
            name: service.title,
            description: service.description,
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <PageLayout>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <WhyRealize limit={4} showCta />
      <FeaturedDoctors />
      <HowItWorks compact />
      <FamilySupport />
      <PrivacyStrip />
      <FinalCta />
      <ExitIntent />
    </PageLayout>
  );
}
