import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg.asset.json";
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
    <section id="top" className="hero-canvas px-4 pt-10 pb-14 sm:px-6 md:pt-16 md:pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-xs">
            Psychiatry • Psychology • Mental Health Care
          </p>
          <h1 className="mt-4 text-[2.15rem] leading-[1.1] text-balance sm:text-5xl lg:text-[3.4rem]">
            Psychiatry &amp; Mental Health Care in <span className="text-primary">Hyderabad</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Professional assessment and personalised mental-health care from a multidisciplinary
            clinical team. Speak with Realize Healthcare to understand the appropriate next step for
            you or your family.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <BookButton location="hero" />
            <TalkToSpecialistButton location="hero" />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Professional care • Respectful support • Individualised treatment planning
          </p>
        </div>

        <div className="relative">
          <img
            src={heroImage.url}
            alt="A psychiatrist in conversation with a patient during a private consultation at a Hyderabad clinic"
            width={1280}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="aspect-4/3 w-full rounded-3xl border border-border object-cover shadow-card"
          />
        </div>
      </div>

      <ul className="mx-auto mt-10 grid w-full max-w-6xl gap-4 sm:grid-cols-3 md:mt-14">
        {trustCards.map(({ icon: Icon, title, description }) => (
          <li key={title} className="surface-card p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-sans text-base font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}