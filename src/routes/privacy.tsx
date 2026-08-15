import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { LegalBody } from "@/components/landing/LegalBody";
import { clinic, formattedAddress, hasAddress, hasPhone } from "@/config/clinic";

const title = "Privacy Policy | Realize Healthcare";
const description =
  "How Realize Healthcare collects, uses and protects the information you share when you request a consultation or contact the clinic.";

export const Route = createFileRoute("/privacy")({
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
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        lead="Your privacy matters. This page explains what information we collect through this website and how it is used."
      />
      <LegalBody>
        <h2>Information we collect</h2>
        <p>
          When you submit a consultation request we collect the details you provide in the form —
          typically your name, phone number and a short description of your concern. We also record
          basic technical information such as the page you arrived from, so we can understand how
          people find the clinic.
        </p>
        <h2>How the information is used</h2>
        <p>
          Your details are used only to contact you about your enquiry and to arrange a consultation.
          Clinical information discussed during a consultation is handled as part of your medical
          record and is not published or shared for marketing.
        </p>
        <h2>Sharing</h2>
        <p>
          We do not sell your information. Details are shared only with the Realize Healthcare
          clinical and administrative team, or where disclosure is required by law.
        </p>
        <h2>Cookies and measurement</h2>
        <p>
          This website may use cookies and measurement tools to understand traffic sources and
          improve the site. You can block cookies in your browser settings.
        </p>
        <h2>Your choices</h2>
        <p>
          You can ask us to update or delete the contact details you submitted through this website
          at any time by calling or messaging the clinic.
        </p>
        <h2>Contact</h2>
        <p>
          {clinic.legalName}
          {hasAddress ? `, ${formattedAddress}` : ""}
          {hasPhone ? `. Phone: ${clinic.phoneDisplay}` : ""}
        </p>
      </LegalBody>
    </PageLayout>
  );
}
