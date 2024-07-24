"use client";
import { useState } from "react";
import useMeasure from "react-use-measure";

import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialItem from "./TestimonialItem";

interface Review {
  img: string;
  review: string;
  rating: number;
  name: string;
}

let CARD_WIDTH = 615;
const MARGIN = 25;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Swiper = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 2 : width > BREAKPOINTS.sm ? 1 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (reviews.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden w-screen">
      <div className="flex items-center justify-center gap-4 lg:hidden">
        <button
          className="grid place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A] "
          onClick={shiftLeft}
        >
          <FaArrowLeft />
        </button>
        <button
          className="grid  place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A]"
          onClick={shiftRight}
        >
          <FaArrowRight />
        </button>
      </div>
      <button
        className="lg:grid place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A] hidden"
        onClick={shiftLeft}
      >
        <FaArrowLeft />
      </button>
      <div className=" w-full max-w-7xl overflow-hidden p-4">
        <motion.div
          animate={{
            x: offset,
          }}
          transition={{
            ease: "easeInOut",
          }}
          className="flex "
          ref={ref}
        >
          {reviews.map((content: Review, index: number) => (
            <TestimonialItem
              content={content}
              key={index}
              width={CARD_WIDTH}
              margin={MARGIN}
            />
          ))}
        </motion.div>
      </div>
      <button
        className="lg:grid hidden place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A]"
        onClick={shiftRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Swiper;

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Świetna firma budowlana, prace wykonane na czas i zgodnie z oczekiwaniami. Od samego początku współpracy czułem się pewnie, ponieważ zespół był bardzo profesjonalny. Polecam każdemu, kto szuka rzetelnych specjalistów.",
    rating: 5,
    name: "Jan Kowalski",
  },
  {
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Bardzo dobra jakość usług, jednak mogłoby być taniej. Mimo to jestem zadowolona z efektów. Wszystko zostało wykonane zgodnie z planem, a materiały użyte do budowy były najwyższej jakości.",
    rating: 4,
    name: "Andrzej Nowak",
  },
  {
    img: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Profesjonalna obsługa, ale projekt nie został ukończony w terminie. Mimo pewnych opóźnień, firma dołożyła wszelkich starań, aby naprawić sytuację i finalnie jestem zadowolony z efektów.",
    rating: 3,
    name: "Piotr Wiśniewski",
  },
  {
    img: "https://images.unsplash.com/photo-1676484639103-4afa24e93c06?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Jestem zadowolony z wykonanej pracy, polecam tę firmę każdemu. Ekipa budowlana była bardzo uprzejma i kompetentna, a cały proces przebiegał sprawnie i bez większych problemów.",
    rating: 5,
    name: "Marek Wójcik",
  },
  {
    img: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Usługa wykonana zgodnie z oczekiwaniami, ale komunikacja mogłaby być lepsza. W pewnych momentach brakowało mi informacji o postępach prac, ale końcowy efekt był bardzo dobry.",
    rating: 4,
    name: "Patryk Kowalczyk",
  },
];
