import { z } from "zod";

export const leadSchema = z.object({
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