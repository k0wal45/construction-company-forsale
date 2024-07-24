"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { TransitionLink } from "@/utils/TransitionLink";
import {
  FaArrowLeft,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import "./hamburger.css";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const hamburger = useRef<HTMLInputElement>(null);

  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleLinkClick = () => {
    setVisible(false);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0  w-full px-4 z-4 flex justify-between items-center lg:px-20 z-[80] bg-orange-50"
    >
      <TransitionLink
        href="/"
        className="flex justify-center items-center p-4 gap-2 z-50"
      >
        <Image
          src="/img/logo.png"
          alt="Logo firmy remontowej"
          width={100}
          height={100}
        />
        <h2
          className={`whitespace-nowrap text-2xl md:text-6xl font-bold mt-[5px] transition-color duration-150 `}
        >
          Industrius
        </h2>
      </TransitionLink>

      <label className="flex lg:hidden z-50">
        <input
          ref={hamburger}
          type="checkbox"
          id="check"
          onClick={(e: any) => {
            e.target.checked ? setVisible(true) : setVisible(false);
          }}
          className="hidden"
        />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul
        onClick={handleLinkClick}
        className={`fixed top-24 right-0 w-screen bg-white transition-all duration-600 origin-top ease-in-out flex flex-col items-end gap-4 p-4 text-xl
        ${visible ? "scale-y-1" : "scale-y-0"}
      `}
      >
        <li className="flex items-center gap-2 border-b-2 w-full justify-end pb-2">
          <TransitionLink href="/">Strona główna</TransitionLink>
          <FaArrowLeft className="text-primary" />
        </li>
        <li className="flex items-center gap-2 border-b-2 w-full justify-end pb-2">
          <TransitionLink href="/o-nas">O nas</TransitionLink>
          <FaArrowLeft className="text-primary" />
        </li>
        <li className="flex items-center gap-2 border-b-2 w-full justify-end pb-2">
          <TransitionLink href="/co-robimy">Co robimy</TransitionLink>
          <FaArrowLeft className="text-primary" />
        </li>
        <li className="flex items-center gap-2 border-b-2 w-full justify-end pb-2">
          <TransitionLink href="/kontakt">Kontakt</TransitionLink>
          <FaArrowLeft className="text-primary" />
        </li>
        <li>
          <ul className="flex text-3xl gap-4 items-end justify-center">
            <li>
              <a href="/" className="hover:text-primary">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="lg:flex hidden gap-8 justify-center text-xl font-semibold">
        <li className="hover:scale-110 duration-300 transition-transform active:scale-90">
          <TransitionLink href="/">Strona Główna</TransitionLink>
        </li>
        <li className="hover:scale-110 duration-300 transition-transform active:scale-90">
          <TransitionLink href="/o-nas">O Nas</TransitionLink>
        </li>
        <li className="hover:scale-110 duration-300 transition-transform active:scale-90">
          <TransitionLink href="/co-robimy">Co Robimy</TransitionLink>
        </li>
        <li className="hover:scale-110 duration-300 transition-transform active:scale-90">
          <TransitionLink href="/kontakt">Kontakt</TransitionLink>
        </li>
      </ul>

      <a
        href="tel:+48123456789"
        className="bg-primary xl:flex items-center gap-4 hidden p-4 font-semibold text-xl text-white hover:scale-110 duration-300 transition-transform active:scale-90"
      >
        +48 123 456 789
        <FaPhone />
      </a>
    </motion.nav>
  );
};

export default Navbar;
