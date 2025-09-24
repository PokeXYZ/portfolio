import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Experience } from "./components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
