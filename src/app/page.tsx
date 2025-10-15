import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";



export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <div className="flex flex-row w-full justify-center space-x-20 mb-10">
        <Experience />
        <Work />
      </div>
    </div>
  );
}
