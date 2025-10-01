import { FC } from "react";
import { Icon } from "@iconify/react";

interface InfoProps {
  info: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const Info: FC<InfoProps> = ({ info }) => {
  return (
    <div className="flex flex-col w-full">
      {info.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-row grow text-1.5xl items-center space-x-2 m-5"
          >
            <Icon icon={item.icon} className="text-amber-500 w-9 h-6" />
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
