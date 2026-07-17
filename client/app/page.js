import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import AboutPage from "./components/homepage/about";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
// import ChatPage from "./components/Chatbot";
import Achievements from "./components/homepage/achievements";
import ProfileSummary from "./components/homepage/profile-summary";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <AboutPage />
      <ProfileSummary />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <ContactSection />
      {/* <ChatPage /> */}
    </div>
  )
};
