import About from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <section className="h-300"></section>
    </>
  );
}