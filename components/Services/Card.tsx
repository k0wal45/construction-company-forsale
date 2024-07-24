import React from "react";
import Agree from "../svg/icon/Agree";
import { TransitionLink } from "@/utils/TransitionLink";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  icon: any;
}

const Card = ({
  content,
  index,
  width,
  margin,
}: {
  content: Props;
  index: number;
  width: number;
  margin: number;
}) => {
  return (
    <div
      className="relative overflow-hidden flex flex-col justify-between gap-4 p-12 bg-white shadow-sm text-start shrink-0 cursor-pointer transition-all hover:scale-[1.015] hover:shadow-xl group"
      style={{ width: width + "px", marginRight: margin + "px" }}
    >
      <div className="flex justify-between items-center py-4 border-b-2 border-neutral-300">
        {content.icon}
        <p className="text-neutral-400 font-bold text-xl group-hover:text-white  transition-all duration-700">
          {"0" + index}
        </p>
      </div>
      <h4 className="text-2xl group-hover:text-neutral-100  transition-all duration-700">
        {content.title}
      </h4>
      <p className="text-neutral-600  group-hover:text-neutral-300 transition-all duration-700">
        {content.description}
      </p>
      <TransitionLink
        href="/co-robimy"
        className="flex items-center pb-1 border-b-[1px] border-neutral-600 text-neutral-600 w-fit gap-2 font-semibold hover:scale-110 active:scale-95  origin-top-left group-hover:text-neutral-300 group-hover:border-neutral-300  transition-all duration-700"
      >
        Czytaj więcej <FaArrowRight />
      </TransitionLink>
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-100%] group-hover:translate-x-[0%] transition-all duration-700 z-[-1]" />
    </div>
  );
};

export default Card;
