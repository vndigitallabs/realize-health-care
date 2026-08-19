/**
 * Server-only fallback for the Google Apps Script Web App endpoint.
 *
 * The preferred source is the GOOGLE_SHEETS_WEBHOOK_URL environment variable.
 * Some production runtimes (e.g. the Vercel deployment behind the custom
 * domain) do not have that variable injected, which made lead submission fail
 * there while working in preview. This constant lives in a `.server.ts` module
 * so it is stripped from every client bundle by import protection.
 */
export const FALLBACK_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxPrBo1u43UVNMmVzFBHoWlLF09jfKf0izIXfQ_eLIvaZmyX6YewP63zKSuliMPPERy4g/exec";
