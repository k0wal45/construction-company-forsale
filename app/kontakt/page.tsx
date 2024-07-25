import Contact from "@/components/Contact/Contact";
import Map from "@/components/Map/Map";
import Services from "@/components/Services/Services";
import Team from "@/components/Team/Team";

import React from "react";

const page = () => {
  return (
    <main className="lg:mt-36 overflow-x-hidden">
      <Contact />
      <Map />
      <Services />
      <Team />
    </main>
  );
};

export default page;
