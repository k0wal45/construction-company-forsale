import Hero from "@/components/About/Hero";
import MoreAbout from "@/components/About/MoreAbout";
import CallToAction from "@/components/CallToAction/CallToAction";
import Services from "@/components/Services/Services";
import { Stats } from "@/components/Stats/Stats";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";

const page = () => {
  return (
    <main className="my-16">
      <Hero />
      <MoreAbout />
      <Testimonials />
      <Team />
      <CallToAction />
      <Stats />
      <Services />
    </main>
  );
};

export default page;
