import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import AboutPage from "./components/homepage/about";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <AboutPage />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
};