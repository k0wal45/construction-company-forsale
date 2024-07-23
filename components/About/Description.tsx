import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import BtnLink from "../Reusable/BtnLink";
import { FiArrowUpRight } from "react-icons/fi";
import Signature from "../svg/Signature";
import AppearFromLeft from "../Animation/ApppearFromLeft";

const Description = () => {
  return (
    <div className="flex flex-col justify-center max-w-xl gap-4">
      <AppearFromLeft>
        <p className="subtitle">o naszej firmie</p>
      </AppearFromLeft>
      <AppearFromLeft>
        <h2 className="text-6xl font-semibold">Myślimy o twoich marzeniach</h2>
      </AppearFromLeft>
      <AppearFromLeft>
        <p className="text-lg text-neutral-600">
          Wiele nowoczesnych firm budowlanych koncentruje się na zrównoważonych
          praktykach budowlanych, wykorzystując ekologiczne materiały,
          energooszczędne systemy i proekologiczne projekty, aby zmniejszyć
          wpływ swoich inwestycji na środowisko.
        </p>
      </AppearFromLeft>
      {/* list */}
      <AppearFromLeft>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-8 font-semibold">
          {/* item */}
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-primary text-4xl" />
            <p className="text-xl text-neutral-600">Dostępni 24/7</p>
          </div>
          {/* item */}
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-primary text-4xl" />
            <p className="text-xl text-neutral-600">
              Wykfalifikowani pracownicy
            </p>
          </div>
          {/* item */}
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-primary text-4xl" />
            <p className="text-xl text-neutral-600">Nowoczesne technologie</p>
          </div>
          {/* item */}
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-primary text-4xl" />
            <p className="text-xl text-neutral-600">25 lat doświadczenia</p>
          </div>
        </div>
      </AppearFromLeft>
      {/* bottom */}
      <AppearFromLeft>
        <div className="flex flex-col md:flex-row gap-4  items-start md:items-center justify-between mt-6">
          <BtnLink href="/o-nas">
            Więcej o nas <FiArrowUpRight />
          </BtnLink>
          <Signature />
          <div className="border-l-2 border-neutral-300 flex flex-col pl-4">
            <p className="text-xl font-semibold">Benjamin Nowak</p>
            <p className="text-primary">Właściciel</p>
          </div>
        </div>
      </AppearFromLeft>
    </div>
  );
};

export default Description;
