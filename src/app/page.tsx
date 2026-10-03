
import About from "@/components/about";
import WhatIDoSection from "@/components/do";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ExperienceSection from "@/components/experience";
import Work from "@/components/work";
import HowWeWork from "@/components/howWeWork";
import AIWorkflow from "@/components/aiWorkflow";
import ScrollStory from "@/components/scrollStory";


export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden min-w-0">
      <Navbar
        name={"MOIZ ALI"}
        size="text-[18vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]"
      />
      <Hero />
      <ScrollStory />
      <About />
      <ExperienceSection />
      <WhatIDoSection />
      <AIWorkflow />
      <HowWeWork />
      <Work />
    </main>
  );
}
