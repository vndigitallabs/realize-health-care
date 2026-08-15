import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { LegalBody } from "@/components/landing/LegalBody";
import { clinic } from "@/config/clinic";

const title = "Terms of Use | Realize Healthcare";
const description =
  "Terms of use for the Realize Healthcare website, including medical disclaimer and appointment request conditions.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        lead="Please read these terms before using this website or submitting a consultation request."
      />
      <LegalBody>
        <h2>Medical disclaimer</h2>
        <p>
          The information on this website is provided for general awareness only and is not a
          substitute for professional medical advice, diagnosis or treatment. Any diagnosis or
          treatment plan is determined only after a clinical consultation. In an emergency, contact
          your nearest hospital immediately.
        </p>
        <h2>Appointment requests</h2>
        <p>
          Submitting a request through this website does not confirm an appointment. Our team will
          contact you to arrange a suitable time based on clinician availability.
        </p>
        <h2>No guaranteed outcomes</h2>
        <p>
          Treatment responses differ between individuals. Nothing on this website should be read as a
          promise of a specific clinical outcome.
        </p>
        <h2>Content and intellectual property</h2>
        <p>
          Text, images and branding on this website belong to {clinic.legalName} and may not be
          reproduced without permission.
        </p>
        <h2>External links</h2>
        <p>
          This website links to other websites within the Realize group and to third-party services
          such as Google Maps and WhatsApp. We are not responsible for the content or policies of
          external websites.
        </p>
        <h2>Changes</h2>
        <p>These terms may be updated from time to time. The current version applies to your use of the site.</p>
      </LegalBody>
    </PageLayout>
  );
}
