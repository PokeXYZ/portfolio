import { FC } from "react";
import { Icon } from "@iconify/react";
import z from "zod";

export const WorkPropSchema = z.object({
  work: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
    })
  ),
});


export type WorkObjType = z.infer<typeof WorkPropSchema>;

const WorkObj: FC<WorkObjType> = ({ work }) => {
  return (
    <div className="flex flex-col">
      {work.map((item) => (
        <div key={item.title} className="flex flex-row">
          <Icon icon={item.icon} className="text-2xl" />
          <div className="ml-2">
            <h2 className="text-xl font-bold">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkObj;
