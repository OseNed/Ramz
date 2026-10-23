import { z } from "zod";

export const requestAccessSchema = z.object({
  email: z.string().trim().min(1, "Enter your work email.").email("Enter a valid email address."),
  company: z.string().trim().min(1, "Enter your company name.").max(200),
  message: z.string().trim().max(2000).optional().default(""),
  // Honeypot: real visitors never fill this hidden field in. Accepted as any
  // string so a filled-in value doesn't surface a validation error to bots —
  // the route handler checks it and drops the submission silently.
  website: z.string().optional().default(""),
  // Set client-side on mount; rejects submissions sent faster than a human can fill the form.
  renderedAt: z.coerce.number().optional(),
});

export type RequestAccessInput = z.infer<typeof requestAccessSchema>;
