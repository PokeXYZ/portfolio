import z from "zod";

const AboutSectionSchema = z.object({
  title: z.string(),
  icon: z.string(),
  description: z.string(),
});

export type AboutSectionType = z.infer<typeof AboutSectionSchema>;
