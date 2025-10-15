import WorkObj from "./WorkObj";  

const WorkData = [
  {
    title: "HTML5",
    icon: "mdi:language-html5",
  },
  {
    title: "CSS3",
    icon: "mdi:language-css3",
  },
  {
    title: "JavaScript",        
    icon: "mdi:language-javascript",
  },
  {
    title: "TypeScript",
    icon: "mdi:language-typescript",
  },
];

export const Work = () => {
  return (
    <div>
      <h1 className="text-2xl">Work</h1>
      <div className="flex flex-row">
        <div className="w-2/5 justify-around flex m-10">
          <WorkObj work={WorkData} />
        </div>
      </div>
    </div>
  );
}
