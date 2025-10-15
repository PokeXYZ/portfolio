import z from "zod";

const ExperienceSectionSchema = z.object({
  title: z.string(),
  icon: z.string(),
  duration: z.string(),
  description: z.string(),
});

export type ExperienceSectionType = z.infer<typeof ExperienceSectionSchema>;
