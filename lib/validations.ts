import * as z from "zod";

export const conversionFormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});
export const codeFormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});

export const imageFormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Image Prompt is required",
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const musicSchema = z.object({
  prompt: z.string().min(1, {
    message: "Music prompt is required",
  }),
});
export const videoSchema = z.object({
  prompt: z.string().min(1, {
    message: "Video prompt is required",
  }),
});

export const amountOptions = [
  {
    value: "1",
    lable: "1 Photo",
  },
  {
    value: "2",
    lable: "2 Photo",
  },
  {
    value: "3",
    lable: "3 Photo",
  },
  {
    value: "4",
    lable: "4 Photo",
  },
  {
    value: "5",
    lable: "5 Photo",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    lable: "256x256",
  },
  {
    value: "512x512",
    lable: "512x512",
  },
  {
    value: "1024x1024",
    lable: "1024x1024",
  },
];
