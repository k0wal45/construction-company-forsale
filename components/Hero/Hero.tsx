import { TransitionLink } from "@/utils/TransitionLink";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <header className="min-h-screen flex w-full items-center justify-center">
      <Image
        width={1920}
        height={1080}
        alt=""
        src="/img/worker.jpg"
        className="w-screen h-screen object-cover brightness-75"
      />
      {/* triangle */}
      <div
        className="absolute top-0 left-0 h-screen w-full max-w-7xl bg-orange-600/80 z-10"
        style={{ clipPath: "polygon(85% 0, 20% 65%, 100% 96%)" }}
      ></div>
      {/* triangle */}
      <div
        className="absolute top-0 left-0 h-screen w-full bg-neutral-900/80"
        style={{ clipPath: "polygon(0 33%, 0 100%, 100% 100%)" }}
      ></div>
      <div
        className="absolute top-0 left-0 h-screen w-full max-w-6xl bg-slate-100 z-40 flex flex-col items-center justify-center pl-6 pr-16 pt-24"
        style={{
          clipPath: "polygon(100% 0, 80% 100%, 0% 100%, 0 20%, 50% 0)",
        }}
      >
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="subtitle">Twoje marzenia, nasza rzeczywistość</p>
          <h1 className="text-5xl lg:text-7xl font-bold max-w-2xl">
            Profesjonalna Budowa od Podstaw
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Nasza firma specjalizuje się w kompleksowej realizacji projektów
            budowlanych. Od planowania po finalizację, zapewniamy najwyższą
            jakość usług i pełne zadowolenie klientów.
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-start">
            <TransitionLink
              href="/o-nas"
              className="bg-primary flex items-center gap-4  p-4 font-semibold text-xl text-white hover:scale-110 duration-300 transition-transform active:scale-90"
            >
              Dowiedz się więcej <FiArrowUpRight />
            </TransitionLink>
            <TransitionLink
              href="/co-robimy"
              className=" flex items-center gap-4  p-4 font-semibold text-xl text-black border-2 border-black hover:scale-110 duration-300 transition-transform active:scale-90"
            >
              Sprawdź co robimy <FiArrowUpRight />
            </TransitionLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
