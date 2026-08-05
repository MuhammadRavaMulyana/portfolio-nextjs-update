import Particles from "@/components/Particles";
import Spotlight from "@/components/Spotlight";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <Particles />
      <Spotlight />
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
