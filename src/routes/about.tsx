import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { WhyRealize } from "@/components/landing/WhyRealize";
import { Confidentiality } from "@/components/landing/Confidentiality";
import { Facility } from "@/components/landing/Facility";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCta } from "@/components/landing/FinalCta";

const title = "About Realize Healthcare | Psychiatry Clinic in Hyderabad";
const description =
  "How Realize Healthcare approaches mental-health care in Hyderabad: clinical assessment, personalised treatment, multidisciplinary support and a respectful environment.";

export const Route = createFileRoute("/about")({
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
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="About Realize Healthcare"
        lead="A multidisciplinary team providing psychiatric and psychological care in Hyderabad, Telangana."
      />
      <WhyRealize />
      <Confidentiality />
      <Facility />
      <Testimonials />
      <FinalCta />
    </PageLayout>
  );
}
