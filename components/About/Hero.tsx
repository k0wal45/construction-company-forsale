import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-72 grid place-items-center relative">
      <h1 className="text-6xl text-white max-w-6xl w-full font-semibold">
        O Nas
      </h1>
      <Image
        width={1920}
        height={1080}
        alt=""
        src="/img/site.jpg"
        className="w-screen h-full object-cover absolute top-0 left-0 z-[-1] brightness-75"
      />
    </section>
  );
};

export default Hero;
