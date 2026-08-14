import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { images } from "@/config/images";
import { BookButton, TalkToSpecialistButton } from "./actions";

const trustCards = [
  {
    icon: Stethoscope,
    title: "Qualified Clinical Team",
    description: "Professional psychiatric and mental-health care.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Care",
    description: "Treatment planning based on individual assessment.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Consultation",
    description: "A respectful environment for discussing sensitive concerns.",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero-canvas relative overflow-hidden px-4 pt-10 pb-14 sm:px-6 md:pt-16 md:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl md:size-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full bg-brand-sun/10 blur-3xl md:size-96"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="fade-up">
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase backdrop-blur-sm sm:text-[11px]">
            Psychiatry • Psychology • Mental Health Care
          </p>
          <h1 className="mt-5 text-[2rem] leading-[1.08] text-balance sm:text-[2.75rem] lg:text-[3.4rem]">
            Psychiatry &amp; Mental Health Care in <span className="text-primary">Hyderabad</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Professional assessment and personalised mental-health care from a multidisciplinary
            clinical team. Speak with Realize Healthcare to understand the appropriate next step for
            you or your family.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BookButton location="hero" className="w-full sm:w-auto" />
            <TalkToSpecialistButton location="hero" className="w-full sm:w-auto" />
          </div>
          <p className="mt-5 text-[13px] text-muted-foreground sm:text-sm">
            Professional care • Respectful support • Individualised treatment planning
          </p>
        </div>

        <div
          className="fade-up relative"
          style={{ "--fade-delay": "120ms" } as React.CSSProperties}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/12 via-transparent to-brand-sun/12 blur-xl"
          />
          <img
            src={images.hero}
            alt="A psychiatrist in conversation with a patient during a private consultation at a Hyderabad clinic"
            width={1280}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-4/3 w-full rounded-[1.75rem] border border-border/70 object-cover shadow-card sm:rounded-[2rem]"
          />
          <div className="glass-card absolute -bottom-5 left-4 hidden max-w-[15rem] p-4 sm:block">
            <p className="font-sans text-sm font-semibold">Consultation first</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Talk to the team before any treatment decision is made.
            </p>
          </div>
        </div>
      </div>

      <ul className="relative mx-auto mt-12 grid w-full max-w-6xl gap-4 sm:grid-cols-3 md:mt-16">
        {trustCards.map(({ icon: Icon, title, description }, i) => (
          <li
            key={title}
            className="glass-card fade-up p-5"
            style={{ "--fade-delay": `${240 + i * 90}ms` } as React.CSSProperties}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-sans text-[15px] font-semibold sm:text-base">{title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
