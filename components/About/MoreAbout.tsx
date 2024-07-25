import Image from "next/image";
import React from "react";
import AppearFromLeft from "../Animation/ApppearFromLeft";
import BtnLink from "../Reusable/BtnLink";
import { FiArrowUpRight } from "react-icons/fi";
import Signature from "../svg/Signature";

const MoreAbout = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-center p-4 max-w-6xl mx-auto my-24">
      <Image
        width={800}
        height={800}
        alt=""
        src="/img/view.jpg"
        className=" aspect-square w-full lg:w-[35rem] flex-1"
      />
      <div className="flex flex-col gap-4 flex-1">
        <p className="subtitle">O Naszej firmie</p>
        <h1 className="text-6xl font-semibold">
          Zawsze myślimy o twoich marzeniach
        </h1>
        <p className="text-lg text-neutral-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          repellat, possimus commodi non dolorum esse veritatis nam cumque
          laboriosam doloremque.
        </p>
        <p className="text-lg text-neutral-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          repellat, possimus commodi non dolorum esse veritatis nam cumque
          laboriosam doloremque.
        </p>
        <p className="text-lg text-neutral-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          repellat, possimus commodi non dolorum esse veritatis nam cumque
          laboriosam doloremque.
        </p>
        <AppearFromLeft>
          <div className="flex flex-col md:flex-row gap-4  items-start md:items-center justify-between mt-6">
            <Signature />
            <div className="border-l-2 border-neutral-300 flex flex-col pl-4">
              <p className="text-xl font-semibold">Benjamin Nowak</p>
              <p className="text-primary">Właściciel</p>
            </div>
          </div>
        </AppearFromLeft>
      </div>
    </section>
  );
};

export default MoreAbout;
