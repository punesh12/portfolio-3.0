import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { ImpactDelivered } from "@/components/sections/impact-delivered";
import { Work } from "@/components/sections/work";

const HomePage = () => (
  <>
    <Hero />
    <ImpactDelivered />
    <About />
    <Experience />
    <Work />
    <Expertise />
    <Contact />
  </>
);

export default HomePage;
