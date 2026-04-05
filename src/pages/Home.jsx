import Hero from "../components/Hero";
import Projects from "../components/Projects";
import VideoBanner from "../components/VideoBanner";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  
  return (
    <>
      <Hero />
      <Projects />
      <VideoBanner />
      <About />
      <Services />
      <Footer />
    </>
  );
}