import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <main className="mt-16">
      <Services />
      <Contact />
      <Team />
      <Testimonials />
    </main>
  );
};

export default page;
