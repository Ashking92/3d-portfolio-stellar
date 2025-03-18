
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TimeDisplay from "@/components/TimeDisplay";

const Index = () => {
  return (
    <div className="bg-portfolio-navy min-h-screen">
      <Navigation />
      <TimeDisplay />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
