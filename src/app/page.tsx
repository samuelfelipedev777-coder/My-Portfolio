import About from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import ScrollExperience from "@/components/sections/ScrollExperience";
import { videos } from "@/config/videos";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ScrollExperience frameCount={86} />
    </>
  );
}