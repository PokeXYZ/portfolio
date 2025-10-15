import z from "zod";

const SkillItemSchema = z.object({
  title: z.string(),
  icon: z.string(),
});

export type SkillItemType = z.infer<typeof SkillItemSchema>;
