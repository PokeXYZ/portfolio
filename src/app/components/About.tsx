import { title } from "process";
import { Icon } from "@iconify/react";
import aboutImage from "../../assets/bear.png";
import Image from "next/image";

const aboutMe = [
  {
    title: "About",
    description: "Frontend Developer",
    icon: "gis:arrow-o",
  },
  {
    title: "Backend Developer",
    description:
      "I am a Backend developer with 2 years of experience in building applications using Node.js, Express, and other backend technologies.",
    icon: "mdi:database-outline",
  },
  {
    title: "Fullstack Developer",
    description:
      "I am a Fullstack developer with 2 years of experience in building applications using React, Node.js, and other technologies.",
    icon: "solar:server-path-bold-duotone",
  },
];

export const About = () => {
  return (
    <div className="flex w-4/5 flex-col m-10 p-5 bg-black rounded-2xl">
      <h1 className="text-2xl font-bold text-white m-5">About Me</h1>
      <div className="flex flex-row items-center">
        <div className="grow flex-row w-1/4">
          <Image
            src={aboutImage}
            alt="an image of me"
            width={250}
            height={250}
            className="rounded-full m-5"
          />
        </div>
        <div className="grow flex-row w-1/2">
          {aboutMe.map((item) => (
            <div
              key={item.title}
              className="flex text-1xl items-center space-x-2 m-5"
            >
              <Icon icon={item.icon} className="text-amber-500 w-9 h-7" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-1xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
