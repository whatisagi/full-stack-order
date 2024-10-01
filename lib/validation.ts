import { z } from "zod";

export const dateQuerySchema = z.object({
  date: z
    .string()
    .min(1, "Date is a required query parameter")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"),
});
