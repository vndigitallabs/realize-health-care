import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { track } from "@/lib/tracking";
import { BookButton, CallButton, WhatsAppButton } from "./actions";

const STORAGE_KEY = "rh_exit_intent_shown";

export function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shown = false;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) shown = true;
    } catch {
      /* ignore */
    }
    if (shown) return;

    const trigger = () => {
      if (shown) return;
      shown = true;
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
      track("exit_intent_shown", { location: "exit_intent" });
      cleanup();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    // Mobile / touch fallback: fast upward scroll near the top of the page.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (lastY - y > 90 && y < 400) trigger();
      lastY = y;
    };

    const timer = window.setTimeout(() => {
      document.addEventListener("mouseout", onMouseOut);
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 6000);

    function cleanup() {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    }

    return cleanup;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-heading"
      className="fixed inset-0 z-[70] grid place-items-center p-4"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
      />
      <div className="fade-up relative w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-primary/15 bg-card p-6 text-center shadow-card sm:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 grid size-10 place-items-center rounded-full text-muted-foreground hover:bg-secondary"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
          Before you go
        </p>
        <h2
          id="exit-intent-heading"
          className="mt-3 text-[1.5rem] leading-tight text-balance sm:text-2xl"
        >
          Talk to a Psychiatrist Before You Leave
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          A short, confidential conversation with our clinical team can help you understand the
          appropriate next step for you or a family member.
        </p>
        <div className="mt-6 grid gap-3">
          <BookButton location="exit_intent" className="w-full" />
          <div className="grid gap-3 sm:grid-cols-2">
            <CallButton location="exit_intent" className="w-full" />
            <WhatsAppButton location="exit_intent" className="w-full" />
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Your enquiry is private and handled by our care team.
        </p>
      </div>
    </div>
  );
}