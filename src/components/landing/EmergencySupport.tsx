import { AlertTriangle, Phone } from "lucide-react";
import { clinic, hasPhone, telHref } from "@/config/clinic";
import { track } from "@/lib/tracking";
import { Button } from "@/components/ui/button";

export function EmergencySupport() {
  const onClick = () => {
    track("phone_click", { location: "emergency_banner" });
    track("cta_click", { cta: "emergency_call", location: "emergency_banner" });
  };

  return (
    <section className="relative px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-red-700 px-6 py-6 text-white shadow-2xl shadow-red-900/20 sm:px-8 sm:py-7 md:px-10 md:py-8">
          {/* Soft background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-white/5 blur-2xl"
          />

          <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-start gap-4 text-center md:text-left">
              <div className="hidden shrink-0 rounded-2xl bg-white/15 p-3 backdrop-blur-sm sm:block">
                <AlertTriangle className="size-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Need Immediate Mental Health Support?
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  If you or a loved one is experiencing emotional distress or suicidal thoughts, please contact us immediately. We&apos;re here 24×7.
                </p>
              </div>
            </div>

            {hasPhone ? (
              <Button
                asChild
                size="lg"
                className="min-h-12 shrink-0 rounded-full bg-white px-7 text-[15px] font-semibold text-red-600 shadow-lg hover:bg-white/90 hover:text-red-700"
              >
                <a href={telHref} onClick={onClick}>
                  <Phone aria-hidden="true" className="size-5" />
                  Call Now
                  <span className="sr-only"> {clinic.phoneDisplay}</span>
                </a>
              </Button>
            ) : (
              <Button
                size="lg"
                className="min-h-12 shrink-0 rounded-full bg-white px-7 text-[15px] font-semibold text-red-600 shadow-lg hover:bg-white/90 hover:text-red-700"
                onClick={onClick}
              >
                <Phone aria-hidden="true" className="size-5" />
                Call Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
