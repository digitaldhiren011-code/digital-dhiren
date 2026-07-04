import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  service: z.string().min(2, "Please select a service."),
  preferredDate: z.string().optional(),
  message: z.string().min(10, "Tell us a little about your project."),
  source: z.string().optional()
});

export type InquiryInput = z.infer<typeof inquirySchema>;
