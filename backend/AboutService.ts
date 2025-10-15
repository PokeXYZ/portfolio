import { AboutSectionType } from "../types/About";

interface IAboutService {
  getAboutInfo: () => AboutSectionType[];
}

export const AboutService: IAboutService = {
  getAboutInfo: () => {
    return [
      {
        title: "Who am I?",
        icon: "tabler:user-question",
        description:
          "I am a 21 year old student and software developer, based in Trondheim, Norway..",
      },
      {
        title: "Education",
        icon: "tabler:school",
        description:
          "I am currently pursuing a Bachelor's degree in Computer Science (Informatikk) at NTNU, as well as having completed an IT-relevant high school education.",
      },
      {
        title: "Skills",
        icon: "tabler:timeline",
        description:
          "I have experience with almost all aspects of both frontend and backend development.  ",
      },
    ];
  },
};
