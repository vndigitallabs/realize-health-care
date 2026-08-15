import type { ReactNode } from "react";

/** Readable prose wrapper for the privacy and terms pages. */
export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto w-full max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted-foreground [&_h2]:font-sans [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}
