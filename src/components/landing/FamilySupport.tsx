import { Section, SectionHeading } from "./Section";
import { TalkToSpecialistButton, WhatsAppButton } from "./actions";

const prompts = [
  "I'm not sure if professional help is needed.",
  "I want to understand what a consultation involves.",
  "I want guidance on how to support my family member.",
];

export function FamilySupport() {
  return (
    <Section labelledBy="family-heading">
      <SectionHeading
        id="family-heading"
        eyebrow="For Families"
        title="Looking for Support for a Family Member?"
        lead="Sometimes a family member notices changes before the person experiencing them seeks help. If you are unsure what to do, you can speak with our team about the appropriate next step."
      />
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {prompts.map((prompt) => (
          <li key={prompt} className="surface-card p-6 text-base leading-relaxed">
            <span aria-hidden="true" className="font-display text-2xl text-primary/40">
              &ldquo;
            </span>
            <p className="mt-1">{prompt}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <TalkToSpecialistButton location="family_section" variant="default" />
        <WhatsAppButton location="family_section" label="WhatsApp Our Team" />
      </div>
    </Section>
  );
}