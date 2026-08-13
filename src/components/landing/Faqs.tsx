import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import { track } from "@/lib/tracking";
import { Section, SectionHeading } from "./Section";

export function Faqs() {
  return (
    <Section id="faqs" labelledBy="faqs-heading">
      <SectionHeading id="faqs-heading" eyebrow="FAQs" title="Questions People Often Ask" />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion
          type="single"
          collapsible
          onValueChange={(value) => value && track("faq_open", { question: value })}
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="py-5 text-left text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
