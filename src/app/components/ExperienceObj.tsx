import { FC } from "react";
import { Icon } from "@iconify/react";
import z from "zod";

export const ExperiencePropSchema = z.object({
  experience: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
    })
  ),
});

export type ExperienceObjType = z.infer<typeof ExperiencePropSchema>;

const ExperienceObj: FC<ExperienceObjType> = ({ experience }) => {
  return (
    <div className="flex flex-row w-1/2">
      {experience.map((item) => (
        <div key={item.title} className="flex flex-row">
          <div className="ml-2 flex-col mr-[5] bg-opacity-50  rounded-full">
            <Icon icon={item.icon} className="text-6xl" />
            <h2 className="text-xl font-bold">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceObj;
