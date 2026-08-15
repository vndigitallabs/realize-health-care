import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export type SectionTone = "default" | "muted" | "mist" | "teal" | "lavender" | "sun";

const toneClass: Record<SectionTone, string> = {
  default: "bg-background",
  muted: "tone-teal",
  mist: "tone-mist",
  teal: "tone-teal",
  lavender: "tone-lavender",
  sun: "tone-sun",
};

export function Section({
  id,
  className,
  children,
  tone = "default",
  labelledBy,
  curved = true,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: SectionTone;
  labelledBy?: string;
  /** Soft rounded boundary — the subtle "exit" transition between blocks. */
  curved?: boolean;
}) {
  const tinted = tone !== "default";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative scroll-mt-24 overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:py-24",
        toneClass[tone],
        tinted && curved && "section-curve-top section-curve-bottom",
        className,
      )}
    >
      {tinted ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(60%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_7%,transparent),transparent)]"
        />
      ) : null}
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="mt-3 text-[1.7rem] leading-tight text-balance sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
          {lead}
        </p>
      ) : null}
      {align === "center" ? (
        <span
          aria-hidden="true"
          className="mx-auto mt-6 block h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
      ) : null}
    </Reveal>
  );
}
