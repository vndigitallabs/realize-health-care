import { MapPin, ShieldCheck, Stethoscope, UserRoundCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Stethoscope, label: "Qualified Clinicians" },
  { icon: ShieldCheck, label: "Confidential Consultations" },
  { icon: UserRoundCheck, label: "Personalised Care" },
  { icon: MapPin, label: "Hyderabad" },
];

/** Compact reassurance strip immediately below the hero. */
export function TrustStrip() {
  return (
    <section aria-label="Why patients choose Realize Healthcare" className="px-4 sm:px-6">
      <Reveal className="mx-auto w-full max-w-6xl rounded-2xl border border-primary/15 bg-card/80 px-4 py-4 shadow-soft backdrop-blur-sm sm:rounded-3xl sm:px-6">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex min-w-0 items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 text-[13px] leading-snug font-semibold sm:text-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
