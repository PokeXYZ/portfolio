import { title } from "process";
import { Icon } from "@iconify/react";
import aboutImage from "../../assets/bear.png";
import Image from "next/image";
import Info from "./Info";
import { AboutService } from "../../../backend/AboutService";


export const About = () => {
  const data = AboutService.getAboutInfo();
  return (
    <div className="flex w-4/5 flex-col m-10 bg-black rounded-md">
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
          <Info info={data} />
      </div>
    </div>
  );
};

export default About;

