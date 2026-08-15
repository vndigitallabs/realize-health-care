import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Contact } from "@/components/landing/Contact";
import { Location } from "@/components/landing/Location";
import { Faqs } from "@/components/landing/Faqs";
import { clinic } from "@/config/clinic";
import { faqs } from "@/data/content";

const title = "Contact Realize Healthcare | Book a Psychiatry Consultation in Hyderabad";
const description =
  "Call, WhatsApp or request a consultation with Realize Healthcare in Hyderabad. Clinic address, directions, opening hours and frequently asked questions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${clinic.website}contact`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Book a Consultation"
        lead="Share a few details and our team will get in touch to arrange a suitable time, or reach us directly by phone or WhatsApp."
      />
      <Contact />
      <Location />
      <Faqs />
    </PageLayout>
  );
}
