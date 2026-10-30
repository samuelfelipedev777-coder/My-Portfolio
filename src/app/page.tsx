import About from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import ScrollExperience from "@/components/sections/ScrollExperience";
import TheProcess from "@/components/sections/TheProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ScrollExperience frameCount={86} />
      <TheProcess />
    </>
  );
}