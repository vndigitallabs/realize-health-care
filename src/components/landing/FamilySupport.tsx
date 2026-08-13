import { Section } from "./Section";
import { Reveal } from "./Reveal";
import familyImage from "@/assets/family-support.jpg";
import { TalkToSpecialistButton, WhatsAppButton } from "./actions";

const prompts = [
  "I'm not sure if professional help is needed.",
  "I want to understand what a consultation involves.",
  "I want guidance on how to support my family member.",
];

export function FamilySupport() {
  return (
    <Section tone="teal" labelledBy="family-heading">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <Reveal className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/12 via-transparent to-brand-sun/12 blur-xl"
          />
          <img
            src={familyImage}
            alt="A family member sitting with a relative while speaking to a clinician during a consultation"
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
            className="relative aspect-4/3 w-full rounded-[1.75rem] border border-border/70 object-cover shadow-card sm:rounded-[2rem]"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-xs">
              For Families
            </p>
            <h2
              id="family-heading"
              className="mt-3 text-[1.7rem] leading-tight text-balance sm:text-3xl md:text-4xl"
            >
              Looking for Support for a Family Member?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Sometimes a family member notices changes before the person experiencing them seeks
              help. If you are unsure what to do, you can speak with our team about the appropriate
              next step.
            </p>
          </Reveal>

          <ul className="mt-7 grid gap-3">
            {prompts.map((prompt, i) => (
              <Reveal
                as="li"
                key={prompt}
                delay={i * 80}
                className="glass-card flex gap-3 p-4 text-[15px] leading-relaxed sm:p-5"
              >
                <span aria-hidden="true" className="font-display text-2xl text-primary/40">
                  &ldquo;
                </span>
                <p className="min-w-0">{prompt}</p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <TalkToSpecialistButton
              location="family_section"
              variant="default"
              className="w-full sm:w-auto"
            />
            <WhatsAppButton
              location="family_section"
              label="WhatsApp Our Team"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
