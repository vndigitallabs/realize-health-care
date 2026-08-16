import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FinalCta } from "@/components/landing/FinalCta";

const title = "Mental Health Services in Hyderabad | Realize Healthcare";
const description =
  "Psychiatric consultation, depression and anxiety care, bipolar and OCD care, family counselling, women's mental health and child psychiatry in Hyderabad.";

export const Route = createFileRoute("/services")({
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
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Services"
        title="Mental Health Services in Hyderabad"
        lead="Professional psychiatric and psychological care planned around each individual's clinical needs."
      />
      <Services showHeading={false} />
      <HowItWorks />
      <FinalCta />
    </PageLayout>
  );
}
