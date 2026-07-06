import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/layout/Portfolio";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}
