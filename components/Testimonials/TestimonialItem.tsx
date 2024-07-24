import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
interface Review {
  img: string;
  review: string;
  rating: number;
  name: string;
}
const TestimonialItem = ({
  content,
  width,
  margin,
}: {
  content: Review;
  width: number;
  margin: number;
}) => {
  const rating = [];

  for (let i = 1; i <= content.rating; i++) {
    rating.push(<MdOutlineStar key={i} />);
  }

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center max-w-[320px] md:max-w-full items-start gap-4 p-12 bg-white shadow-md text-start shrink-0 cursor-pointer transition-all hover:scale-[1.015] hover:shadow-xl group"
      style={{ width: width + "px", marginRight: margin + "px" }}
    >
      <Image
        width={150}
        height={150}
        alt="This person does not exist"
        src={content.img}
        className="size-24 object-cover"
      />
      <p className=" text-neutral-500">{content.review}</p>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
        <p className="text-2xl">{content.name}</p>
        <div className="flex text-xl text-yellow-400">{rating}</div>
      </div>
      <p className="absolute top-6 right-6 text-neutral-100 text-[10rem] z-10 rotate-12 group-hover:text-neutral-200 transition-colors duration-300">
        <FaQuoteRight />
      </p>
    </div>
  );
};

export default TestimonialItem;
