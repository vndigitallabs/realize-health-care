import { getAttribution } from "./tracking";

export type LeadPayload = {
  name: string;
  phone: string;
  seekingFor: string;
  supportType: string;
  contactMethod: string;
  message?: string;
};

/**
 * Frontend integration layer for CRM / n8n / Google Sheets / webhook / WhatsApp
 * automation. Point VITE_LEAD_WEBHOOK_URL at a server endpoint or automation
 * webhook. No API keys belong in frontend code — the receiving endpoint owns
 * authentication. Falls back to a safe mock when nothing is configured.
 */
const endpoint = import.meta.env["VITE_LEAD_WEBHOOK_URL"] as string | undefined;

export async function submitLead(lead: LeadPayload): Promise<{ ok: boolean }> {
  const body = {
    ...lead,
    source: "google-ads-landing",
    submittedAt: new Date().toISOString(),
    attribution: getAttribution(),
  };

  if (!endpoint) {
    // Safe mock submission until a backend is connected.
    if (import.meta.env.DEV) console.info("[lead:mock]", body);
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Lead submission failed");
  return { ok: true };
}