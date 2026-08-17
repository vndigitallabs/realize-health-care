import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "./leads.schema";

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

    // Apps Script reads e.parameter, so send form-urlencoded (no JSON, no preflight).
    const params = new URLSearchParams({
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      seekingSupportFor: data.seekingFor,
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
    });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const status = response.status;
      const text = await response.text().catch(() => "");

      if (response.ok) return { ok: true, status };

      console.error(`Google Sheets webhook failed [${status}]: ${text.slice(0, 500)}`);
      return { ok: false, status, error: text.slice(0, 500) };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`Google Sheets webhook request failed [network]: ${message}`);
      return { ok: false, status: 0, error: message };
    }
  });