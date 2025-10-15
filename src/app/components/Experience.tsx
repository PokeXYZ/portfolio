import ExperienceObj from "./ExperienceObj";

const ExperienceData = [
  {
    icon: "material-icon-theme:html",
    title: "HTML5",
  },
  {
    icon: "material-icon-theme:css",
    title: "CSS3",
  },
  {
    icon: "material-icon-theme:typescript",
    title: "Typescript",
  },
  {
    icon: "material-icon-theme:react-ts",
    title: "React",
  },
];

export const Experience = () => {
  return (
    <div className="flex flex-col w-1/2">
      <h1 className="text-2xl font-bold mb-2">Experience</h1>
      <div>
        <ExperienceObj experience={ExperienceData} />
      </div>
    </div>
  );
};
