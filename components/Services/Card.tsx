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
      className="relative flex flex-col justify-between gap-4 p-12 bg-white shadow-sm text-start shrink-0 cursor-pointer transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{ width: width + "px", marginRight: margin + "px" }}
    >
      <div className="flex justify-between items-center py-4 border-b-2 border-neutral-300">
        {content.icon}
        <p className="text-neutral-400 font-bold text-xl">{"0" + index}</p>
      </div>
      <h4 className="text-2xl">{content.title}</h4>
      <p className="text-neutral-600">{content.description}</p>
      <TransitionLink
        href="/co-robimy"
        className="flex items-center pb-1 border-b-[1px] border-neutral-600 text-neutral-600 w-fit gap-2 font-semibold hover:scale-110 active:scale-95 transition-transform duration-200 origin-top-left"
      >
        Czytaj więcej <FaArrowRight />
      </TransitionLink>
    </div>
  );
};

export default Card;
