import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { CtaStrip } from "@/components/landing/CtaStrip";
import { Services } from "@/components/landing/Services";
import { WhyRealize } from "@/components/landing/WhyRealize";
import { Doctors } from "@/components/landing/Doctors";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FamilySupport } from "@/components/landing/FamilySupport";
import { Confidentiality } from "@/components/landing/Confidentiality";
import { Facility } from "@/components/landing/Facility";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faqs } from "@/components/landing/Faqs";
import { Contact } from "@/components/landing/Contact";
import { Location } from "@/components/landing/Location";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { MobileCtaBar, WhatsAppFab } from "@/components/landing/FloatingCtas";
import { ExitIntent } from "@/components/landing/ExitIntent";
import { clinic, formattedAddress, hasAddress, hasPhone } from "@/config/clinic";
import { faqs, services } from "@/data/content";
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
          "@graph": [
            {
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
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: clinic.website,
                },
              ],
            },
          ],
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
    <div className="min-h-screen bg-background">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <CtaStrip />
        <Services />
        <WhyRealize />
        <Doctors />
        <HowItWorks />
        <FamilySupport />
        <Confidentiality />
        <Facility />
        <Testimonials />
        <Faqs />
        <Contact />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileCtaBar />
      <ExitIntent />
    </div>
  );
}
