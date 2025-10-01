import { title } from "process";
import { Icon } from "@iconify/react";
import aboutImage from "../../assets/bear.png";
import Image from "next/image";
import Info from "./Info";

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
    <div className="flex w-4/5 flex-col m-10 bg-black rounded-2xl">
      <h1 className="text-2xl font-bold text-white m-2 pl-10">About Me</h1>
      <div className="flex flex-row">
        <div className="w-2/5 justify-around flex m-10">
          <Image
            src={aboutImage}
            alt="an image of me"
            width={250}
            height={250}
            className="rounded-full"
            
          />
        </div>
        <Info info={aboutMe} />
      </div>
    </div>
  );
};

export default About;

