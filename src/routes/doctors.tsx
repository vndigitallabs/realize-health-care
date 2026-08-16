import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Doctors } from "@/components/landing/Doctors";
import { FinalCta } from "@/components/landing/FinalCta";

const title = "Our Psychiatrists & Clinical Team in Hyderabad | Realize Healthcare";
const description =
  "Meet the Realize Healthcare clinical team in Hyderabad — consultant psychiatrists, clinical psychologist and medical professionals, with qualifications and areas of expertise.";

export const Route = createFileRoute("/doctors")({
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
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Doctors"
        title="Meet Our Clinical Team"
        lead="Psychiatric, psychological and medical professionals working together on individual care plans."
      />
      <Doctors showHeading={false} />
      <FinalCta />
    </PageLayout>
  );
}
