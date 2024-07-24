import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Member {
  img: string;
  name: string;
  role: string;
  socials: any;
}
const TeamCard = ({ content }: { content: Member }) => {
  return (
    <div className="flex flex-col w-72 items-center pb-8 bg-white gap-2 shadow-md hover:scale-[1.015] hover:shadow-lg duration-300 transition-all">
      <Image
        width={400}
        height={400}
        alt={content.name}
        src={content.img}
        className="w-full aspect-[7/6] object-cover"
      />
      <p className="px-6 text-xl font-semibold mt-4">{content.name}</p>
      <p className="px-6 text-base text-primary font-semibold">
        {content.role}
      </p>
      <div className="flex gap-2 items-center justify-center pt-4">
        <a
          href={content.socials[0]}
          className="p-2 text-xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href={content.socials[0]}
          className="p-2 text-xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href={content.socials[0]}
          className="p-2 text-xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FaXTwitter />
        </a>
        <a
          href={content.socials[0]}
          className="p-2 text-xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
