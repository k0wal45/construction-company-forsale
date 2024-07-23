import { TransitionLink } from "@/utils/TransitionLink";
import React from "react";

const BtnLink = ({ href, children }: { href: string; children: any }) => {
  return (
    <TransitionLink
      href={href}
      className="bg-primary flex items-center gap-4  p-4 font-semibold text-xl text-white hover:scale-110 duration-300 transition-transform active:scale-90"
    >
      {children}
    </TransitionLink>
  );
};

export default BtnLink;
