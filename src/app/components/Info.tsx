import { FC } from "react";
import { Icon } from "@iconify/react";
import z from "zod";

interface InfoProps {
  info: {
    title: string;
    description: string;
    icon: string;
    number?: number;
  }[];
}

export const InfoPropsSchema = z.object({
  info: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      number: z.number().optional(),
    })
  ),
});

export type AboutMeInfoType = z.infer<typeof InfoPropsSchema>;

const Info: FC<AboutMeInfoType> = ({ info }) => {
  return (
    <div className="flex flex-col w-full">
      {info.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-row grow text-1.5xl items-center space-x-2 m-5"
          >
            <Icon icon={item.icon} className="text-blue-500 w-9 h-6" />
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-1xl">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Info;
