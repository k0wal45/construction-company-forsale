"use client";
import { useState } from "react";
import useMeasure from "react-use-measure";
import Card from "./Card";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Agree from "../svg/icon/Agree";
import Barrow from "../svg/icon/Barrow";
import Circular from "../svg/icon/Circular";
import Spatula from "../svg/icon/Spatula";
import Roller from "../svg/icon/Roller";

interface Props {
  title: string;
  description: string;
  icon: any;
}

const CARD_WIDTH = 400;
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
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (services.length - CARD_BUFFER);

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
          {services.map((content: Props, index: number) => (
            <Card
              content={content}
              index={index + 1}
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

const services = [
  {
    icon: <Agree fillcolor="#F68A0A" />,
    title: "Budowa Domów Jednorodzinnych",
    description:
      "Kompleksowa realizacja budowy domów jednorodzinnych od fundamentów aż po wykończenie wnętrz, z uwzględnieniem indywidualnych potrzeb i preferencji klientów.",
  },
  {
    icon: <Barrow fillcolor="#F68A0A" />,
    title: "Budowa Obiektów Komercyjnych",
    description:
      "Profesjonalne usługi w zakresie budowy obiektów komercyjnych, takich jak biurowce, centra handlowe, hotele i magazyny, z zastosowaniem najnowszych technologii i materiałów.",
  },
  {
    icon: <Circular fillcolor="#F68A0A" />,
    title: "Remonty i Modernizacje",
    description:
      "Przeprowadzanie remontów i modernizacji istniejących budynków, mające na celu poprawę funkcjonalności, estetyki oraz efektywności energetycznej.",
  },
  {
    icon: <Roller fillcolor="#F68A0A" />,
    title: "Budownictwo Zrównoważone",
    description:
      "Realizacja projektów z wykorzystaniem ekologicznych materiałów, energooszczędnych systemów i proekologicznych rozwiązań, w celu minimalizacji wpływu na środowisko.",
  },
  {
    icon: <Spatula fillcolor="#F68A0A" />,
    title: "Zarządzanie Projektami Budowlanymi",
    description:
      "Kompleksowe zarządzanie projektami budowlanymi, obejmujące planowanie, nadzór oraz koordynację wszystkich etapów realizacji inwestycji, aby zapewnić terminowe i zgodne z budżetem ukończenie prac.",
  },
];
