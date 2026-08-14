import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

/** Compact page header used by the dedicated inner pages. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="hero-canvas relative overflow-hidden px-4 pt-10 pb-10 sm:px-6 md:pt-14 md:pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm">
          <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-primary">{eyebrow}</span>
        </nav>
        <h1 className="fade-up mt-4 max-w-3xl text-[2rem] leading-[1.1] text-balance sm:text-[2.5rem] lg:text-[3rem]">
          {title}
        </h1>
        {lead ? (
          <p
            className="fade-up mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg"
            style={{ "--fade-delay": "90ms" } as React.CSSProperties}
          >
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
