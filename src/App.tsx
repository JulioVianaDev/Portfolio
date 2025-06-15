import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Awards from "@/components/awards";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "./components/header";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        {/* <Projects /> */}
        <Awards />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
