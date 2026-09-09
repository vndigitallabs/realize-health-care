import { useEffect, useRef, useState } from "react";
import { Gift, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { images } from "@/config/images";
import { track } from "@/lib/tracking";
import { SafeImage } from "./SafeImage";
import { CallButton, ClaimFreeButton, WhatsAppButton } from "./actions";

const trustPoints = [
  { icon: Stethoscope, label: "Qualified Clinical Team" },
  { icon: ShieldCheck, label: "Confidential Consultation" },
  { icon: HeartHandshake, label: "Personalised Care" },
];

export function Hero() {
  const offerRef = useRef<HTMLDivElement>(null);
  const [offerViewed, setOfferViewed] = useState(false);

  useEffect(() => {
    const el = offerRef.current;
    if (!el || offerViewed) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          track("free_consultation_offer_view", { location: "hero_offer_card" });
          setOfferViewed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [offerViewed]);

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
          <div
            ref={offerRef}
            className="offer-box offer-pulse mt-6 w-full p-5 sm:max-w-md sm:p-6"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-primary uppercase">
              <Gift className="size-3.5" aria-hidden="true" />
              SPECIAL OFFER
            </span>
            <p className="mt-3 text-[15px] font-semibold leading-snug text-foreground sm:text-base">
              FIRST PSYCHIATRIC CONSULTATION
            </p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              FREE
            </p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Worth ₹1,000
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              Take the first step towards professional mental-health care.
            </p>
            <ClaimFreeButton
              location="hero_offer_card"
              label="Book Free Consultation"
              className="mt-5 w-full transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            />
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
