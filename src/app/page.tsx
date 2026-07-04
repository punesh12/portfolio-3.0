import dynamic from "next/dynamic";

import { Hero } from "@/components/sections/hero";

const ImpactDelivered = dynamic(() =>
  import("@/components/sections/impact-delivered").then(
    (module) => module.ImpactDelivered,
  ),
);

const About = dynamic(() =>
  import("@/components/sections/about").then((module) => module.About),
);

const Experience = dynamic(() =>
  import("@/components/sections/experience").then((module) => module.Experience),
);

const Work = dynamic(() =>
  import("@/components/sections/work").then((module) => module.Work),
);

const Expertise = dynamic(() =>
  import("@/components/sections/expertise").then((module) => module.Expertise),
);

const Contact = dynamic(() =>
  import("@/components/sections/contact").then((module) => module.Contact),
);

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
