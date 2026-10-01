import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { ResumeSection } from "@/components/sections/resume";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ResumeSection />
      <Expertise />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}