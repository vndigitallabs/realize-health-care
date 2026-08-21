import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { images } from "@/config/images";
import { SafeImage } from "./SafeImage";
import { BookButton, CallButton, WhatsAppButton } from "./actions";

const trustPoints = [
  { icon: Stethoscope, label: "Qualified Clinical Team" },
  { icon: ShieldCheck, label: "Confidential Consultation" },
  { icon: HeartHandshake, label: "Personalised Care" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-canvas relative overflow-hidden px-4 pt-10 pb-10 sm:px-6 md:pt-16 md:pb-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl md:size-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full bg-brand-sun/10 blur-3xl md:size-96"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="fade-up">
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase backdrop-blur-sm sm:text-[11px]">
            Psychiatry • Psychology • Mental Health Care
          </p>
          <h1 className="mt-5 text-[2rem] leading-[1.08] text-balance sm:text-[2.75rem] lg:text-[3.4rem]">
            Psychiatry &amp; Mental Health Care in <span className="text-primary">Hyderabad</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Professional assessment and personalised care from a qualified multidisciplinary team.
            Speak with our clinicians to understand the right next step for you or your family.
          </p>
          <div className="mt-7 grid gap-3 sm:auto-cols-max sm:grid-flow-col">
            <BookButton location="hero" className="w-full sm:w-auto" />
            <WhatsAppButton location="hero" label="WhatsApp Now" className="w-full sm:w-auto" />
            <CallButton location="hero" className="w-full sm:w-auto" />
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex min-w-0 items-center gap-2 text-[13px] font-medium sm:text-sm">
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="fade-up relative"
          style={{ "--fade-delay": "120ms" } as React.CSSProperties}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/12 via-transparent to-brand-sun/12 blur-xl"
          />
          <SafeImage
            src={images.hero}
            alt="A psychiatrist in conversation with a patient during a private consultation at a Hyderabad clinic"
            width={1280}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="hero-float relative aspect-4/3 w-full rounded-[1.75rem] border border-border/70 object-cover shadow-card sm:rounded-[2rem]"
          />
          <div className="glass-card absolute -bottom-5 left-4 hidden max-w-[15rem] p-4 sm:block">
            <p className="font-sans text-sm font-semibold">Consultation first</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Talk to the team before any treatment decision is made.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
