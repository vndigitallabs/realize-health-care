import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(8)
    .max(20)
    .regex(/^[+0-9\s-]+$/),
  seekingFor: z.string().trim().max(80),
  supportType: z.string().trim().max(80),
  contactMethod: z.string().trim().max(20),
  message: z.string().trim().max(500).optional().default(""),
  utm_source: z.string().trim().max(200).optional().default(""),
  utm_medium: z.string().trim().max(200).optional().default(""),
  utm_campaign: z.string().trim().max(200).optional().default(""),
  utm_term: z.string().trim().max(200).optional().default(""),
  utm_content: z.string().trim().max(200).optional().default(""),
  gclid: z.string().trim().max(200).optional().default(""),
  landing_page: z.string().trim().max(300).optional().default(""),
  referrer: z.string().trim().max(300).optional().default(""),
});

/**
 * Sends a validated consultation request to the Google Apps Script Web App
 * that appends a row to the clinic's Google Sheet. The endpoint URL lives in
 * the server-only GOOGLE_SHEETS_WEBHOOK_URL secret — never in client code.
 */
export const submitLeadToSheet = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const endpoint = process.env["GOOGLE_SHEETS_WEBHOOK_URL"];
    if (!endpoint) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
      throw new Error("Lead destination is not configured");
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      seekingFor: data.seekingFor,
      supportType: data.supportType,
      contactMethod: data.contactMethod,
      message: data.message,
      utm_source: data.utm_source,
      utm_medium: data.utm_medium,
      utm_campaign: data.utm_campaign,
      utm_term: data.utm_term,
      utm_content: data.utm_content,
      gclid: data.gclid,
      landing_page: data.landing_page,
      referrer: data.referrer,
      source: "google-ads-landing",
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await response.text();
    if (!response.ok) {
      console.error(`Google Sheets webhook failed [${response.status}]: ${text}`);
      throw new Error(`Lead submission failed [${response.status}]`);
    }

    return { ok: true };
  });