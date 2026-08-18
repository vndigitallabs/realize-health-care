import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/leads";
import { track } from "@/lib/tracking";
import { CallButton, WhatsAppButton } from "./actions";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[+0-9\s-]+$/, "Please enter a valid phone number"),
  seekingFor: z.string().min(1, "Please choose an option"),
  supportType: z.string().min(1, "Please choose an option"),
  contactMethod: z.enum(["Phone", "WhatsApp"]),
  message: z.string().trim().max(500, "Please keep this under 500 characters").optional(),
});

const seekingOptions = [
  "Myself",
  "Family member",
  "Spouse/partner",
  "Parent",
  "Child/adolescent",
  "Other",
];

const supportOptions = [
  "Psychiatric consultation",
  "Mental-health consultation",
  "Counselling",
  "Family counselling",
  "Women's mental health",
  "Child/adolescent mental health",
  "Not sure",
];

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const selectClass =
  "mt-1.5 h-12 w-full rounded-lg border border-input bg-background px-3 text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none";

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState("");
  const started = useRef(false);
  const submissionInFlight = useRef(false);

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", { form: "consultation_request" });
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInFlight.current || submitting || done) return;
    setFormError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    submissionInFlight.current = true;
    setSubmitting(true);
    try {
      await submitLead(parsed.data);
      track("generate_lead", { form: "consultation_request" });
      track("appointment_booked", { form: "consultation_request" });
      form.reset();
      setDone(true);
    } catch (error) {
      console.error("Consultation form submission error:", error);
      setFormError("We couldn't send your request. Please try calling or messaging us instead.");
    } finally {
      submissionInFlight.current = false;
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div role="status" className="surface-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl">Thank You — Your Request Has Been Received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Our team has received your request. You can also contact Realize Healthcare directly if
          you would like to speak with the team.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton location="form_success" label="Call Realize Healthcare" variant="default" />
          <WhatsAppButton location="form_success" />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onFocus={onStart} noValidate className="surface-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="lead-name">
            Name <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="lead-name"
            name="name"
            required
            autoComplete="name"
            maxLength={80}
            className="mt-1.5 h-12"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name ? (
            <p id="err-name" className="mt-1.5 text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="lead-phone">
            Phone Number <span aria-hidden="true">*</span>
          </Label>
          <Input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            maxLength={20}
            className="mt-1.5 h-12"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "err-phone" : undefined}
          />
          {errors.phone ? (
            <p id="err-phone" className="mt-1.5 text-sm text-destructive">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="lead-seeking">Who are you seeking support for?</Label>
          <select id="lead-seeking" name="seekingFor" defaultValue="Myself" className={selectClass}>
            {seekingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="lead-support">What type of support are you looking for?</Label>
          <select
            id="lead-support"
            name="supportType"
            defaultValue="Psychiatric consultation"
            className={selectClass}
          >
            {supportOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium">Preferred contact method</legend>
          <div className="mt-2 flex gap-3">
            {(["Phone", "WhatsApp"] as const).map((option, index) => (
              <label
                key={option}
                className="inline-flex min-h-12 flex-1 cursor-pointer items-center gap-2 rounded-lg border border-input px-4 text-sm has-checked:border-primary has-checked:bg-primary/5"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={option}
                  defaultChecked={index === 0}
                  className="size-4 accent-[var(--primary)]"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <Label htmlFor="lead-message">Message (optional)</Label>
          <Textarea
            id="lead-message"
            name="message"
            rows={3}
            maxLength={500}
            className="mt-1.5"
            placeholder="Anything you'd like our team to know before they call you back."
          />
        </div>
      </div>

      {formError ? (
        <p role="alert" className="mt-5 text-sm text-destructive">
          {formError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="mt-6 min-h-12 w-full rounded-full text-[15px] font-semibold"
      >
        {submitting ? "Sending…" : "Request a Consultation"}
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Please avoid sharing highly sensitive medical information in this initial enquiry form. See
        our{" "}
        <a href="#privacy" className="text-primary underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
