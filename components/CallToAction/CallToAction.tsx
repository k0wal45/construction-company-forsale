import Image from "next/image";
import React from "react";
import BtnLink from "../Reusable/BtnLink";
import classes from "../background.module.css";
const CallToAction = () => {
  return (
    <section className="w-full flex items-start relative">
      <Image
        width={800}
        height={800}
        alt=""
        src="/img/plans.jpg"
        className="object-cover brightness-75 absolute top-0 right-0 h-full w-1/2 z-[-2]"
      />
      <div
        className={`${classes.bgV} w-full md:w-2/3 flex items-center justify-center pt-4 relative`}
        style={{
          clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          width={300}
          height={400}
          alt=""
          src="/img/man.png"
          className="h-[30rem] object-contain hidden md:block"
        />
        <div className="max-w-2xl flex flex-col items-start justify-center gap-8 py-24 px-8">
          <p className="subtitle">Skontaktuj się z nami</p>
          <h5 className="text-5xl font-semibold text-white">
            Zadzwoń po darmową konsultację!
          </h5>
          <BtnLink href="/kontakt">Skontaktuj się teraz</BtnLink>
        </div>
      </div>
      <div
        className="bg-primary/90 w-full md:w-3/4 h-full absolute top-0 left-0 z-[-1]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
        }}
      />
    </section>
  );
};

export default CallToAction;
