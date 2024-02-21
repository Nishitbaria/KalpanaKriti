import * as z from "zod";

export const conversionFormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});
