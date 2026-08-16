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
      <div className="relative mx-auto w-full max-w-6xl text-center">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-1 text-sm"
        >
          <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-primary">{eyebrow}</span>
        </nav>
        <h1 className="fade-up mx-auto mt-4 max-w-4xl text-[2.35rem] leading-[1.1] text-balance sm:text-[3rem] lg:text-[3.6rem]">
          {title}
        </h1>
        {lead ? (
          <p
            className="fade-up mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
            style={{ "--fade-delay": "90ms" } as React.CSSProperties}
          >
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
