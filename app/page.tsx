import About from "@/components/About/About";
import CallToAction from "@/components/CallToAction/CallToAction";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import { Stats } from "@/components/Stats/Stats";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CallToAction />
      <Stats />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}
