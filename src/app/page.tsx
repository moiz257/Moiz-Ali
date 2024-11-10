
import About from "@/components/about";
import Cards from "@/components/card";
import WhatIDoSection from "@/components/do";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TextSlider from "@/components/slider";
import Work from "@/components/work";


export default function Home() {
  return (
    <main>
      <Navbar name={"MOIZ ALI"} size="text-[24vw]"/>
      <Hero/>
      <Cards/>
      <About/>
      <WhatIDoSection/>
      <TextSlider/>
      <Work/>
    </main>
  );
}
