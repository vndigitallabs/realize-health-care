import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  tone = "default",
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: "default" | "muted";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24 px-4 py-16 sm:px-6 md:py-24",
        tone === "muted" && "bg-secondary/40",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
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
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="mt-3 text-3xl text-balance md:text-4xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-base text-muted-foreground md:text-lg">{lead}</p> : null}
    </div>
  );
}