import { TransitionLink } from "@/utils/TransitionLink";
import React from "react";

const BtnLink = ({ href, children }: { href: string; children: any }) => {
  return (
    <TransitionLink
      href={href}
      className="flex items-center gap-4 p-4 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20"
    >
      {children}
      <div className="absolute w-full h-1/2 top-0 left-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
      <div className="absolute w-full h-1/2 bottom-0 right-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
      <div className="absolute inset-0 bg-primary z-[-2]" />
    </TransitionLink>
  );
};

export default BtnLink;
