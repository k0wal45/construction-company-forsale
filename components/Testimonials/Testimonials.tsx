import React from "react";
import Swiper from "./Swiper";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 w-full py-16 p-4 overflow-hidden bg-slate-100">
      <p className="subtitle">Opinie klientów</p>
      <h6 className="text-6xl font-semibold max-w-2xl">
        Co mówią o nas nasi klienci?
      </h6>
      <Swiper />
    </section>
  );
};

export default Testimonials;
