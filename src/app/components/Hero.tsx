"use client";
import Image from "next/image";
import HeroImage from "../../assets/unknown-min.png";
import Button from "./Button";

export const Hero = () => {
  const handleContactClick = () => {
    alert("You clicked the contact me button!");
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="grow space-y-2">
        <p className="text-4xl font-bold bg-gradient-to-r from-white to-slate-700 bg-clip-text text-transparent">
          Hi, I'm John Doe
        </p>
        <p className="text-1xl">I'm a fullstack developer</p>
        <Button onClick={handleContactClick}>Contact Me</Button>
      </div>
      <div className="grow">
        <Image
          src={HeroImage}
          alt="an image of me"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
