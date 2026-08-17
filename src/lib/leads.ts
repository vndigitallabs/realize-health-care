import { getAttribution } from "./tracking";
import { submitLeadToSheet } from "./leads.functions";

export type LeadPayload = {
  name: string;
  phone: string;
  seekingFor: string;
  supportType: string;
  contactMethod: string;
  message?: string | undefined;
};

/**
 * Sends the lead to the server function that forwards it to the clinic's
 * Google Sheet (Apps Script Web App). The webhook URL is a server-only
 * secret — no credentials or endpoints are exposed in frontend code.
 */
export async function submitLead(lead: LeadPayload): Promise<{ ok: boolean }> {
  const attribution = getAttribution();
  const result = await submitLeadToSheet({
    data: {
      ...lead,
      message: lead.message ?? "",
      utm_source: attribution.utm_source ?? "",
      utm_medium: attribution.utm_medium ?? "",
      utm_campaign: attribution.utm_campaign ?? "",
      utm_term: attribution.utm_term ?? "",
      utm_content: attribution.utm_content ?? "",
      gclid: attribution.gclid ?? "",
      landing_page: attribution.landing_page ?? "",
      referrer: attribution.referrer ?? "",
    },
  });
  if (!result.ok) {
    console.error("Lead submission failed", result);
    throw new Error(`Lead submission failed [${result.status ?? "unknown"}]`);
  }
  return result;
}
