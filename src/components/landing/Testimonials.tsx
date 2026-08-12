import { reviewsUrl, testimonials } from "@/data/content";
import { Section, SectionHeading } from "./Section";

export function Testimonials() {
  return (
    <Section tone="muted" labelledBy="reviews-heading">
      <SectionHeading
        id="reviews-heading"
        eyebrow="Verified patient / family feedback"
        title="Patient & Family Experiences"
        lead="Only feedback the clinic has permission to publish is shown here."
      />

      {testimonials.length > 0 ? (
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.quote} className="surface-card p-6">
              <blockquote className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {item.attribution}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-border bg-card p-6 text-center text-sm text-muted-foreground">
          Verified patient and family feedback will be published here once the clinic has consent to
          share it. Clinic administrator: add approved reviews in the content settings.
        </p>
      )}

      {reviewsUrl ? (
        <div className="mt-8 flex justify-center">
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 rounded-full border border-primary/30 px-7 text-[15px] leading-[3rem] font-semibold text-primary hover:bg-primary/5"
          >
            Read More Reviews
          </a>
        </div>
      ) : null}
    </Section>
  );
}