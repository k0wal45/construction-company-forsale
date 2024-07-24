import { TransitionLink } from "@/utils/TransitionLink";
import classes from "../background.module.css";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const BeforeFooter = () => {
  return (
    <section className={classes.bgDotsDark + " py-12 w-full"}>
      <div className="flex flex-wrap justify-center max-w-7xl w-full mx-auto text-white gap-12">
        {/* col */}
        <div className="flex flex-col gap-4 items-start pr-8 w-72">
          <TransitionLink
            href="/"
            className="flex justify-center items-center gap-2 z-50"
          >
            <Image
              src="/img/logo.png"
              alt="Logo firmy remontowej"
              width={100}
              height={100}
            />
          </TransitionLink>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            possimus, id deserunt repudiandae animi quis odit natus officiis ea
            eum corrupti qui modi ipsam, itaque, beatae magni. Corrupti, quia
            ut.
          </p>
          <div className="flex gap-2 items-center justify-center pt-4 text-neutral-800">
            <a
              href="/"
              className="p-2 text-2xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="p-2 text-2xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="p-2 text-2xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaXTwitter />
            </a>
            <a
              href="/"
              className="p-2 text-2xl bg-neutral-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* col 2 */}
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Nawigacja</p>
          <div className="w-24 h-[2px] bg-primary mb-2 my-[-5px]"></div>
          <TransitionLink
            href="/"
            className="text-lg text-neutral-400 flex items-center gap-2"
          >
            Strona główna
            <GoArrowRight />
          </TransitionLink>
          <TransitionLink
            href="/o-nas"
            className="text-lg text-neutral-400 flex items-center gap-2"
          >
            O Nas
            <GoArrowRight />
          </TransitionLink>
          <TransitionLink
            href="/co-robimy"
            className="text-lg text-neutral-400 flex items-center gap-2"
          >
            Co robimy
            <GoArrowRight />
          </TransitionLink>
          <TransitionLink
            href="/kontakt"
            className="text-lg text-neutral-400 flex items-center gap-2"
          >
            Kontakt
            <GoArrowRight />
          </TransitionLink>
        </div>
        {/* col 3 */}
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Kontakt</p>
          <div className="w-24 h-[2px] bg-primary mb-2 my-[-5px]"></div>
          {/* item 1 */}
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Adres</p>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary text-white">
                <FaLocationDot />
              </div>
              <p className="text-neutral-400"> Warszawa, ul. Kościuszki 25</p>
            </div>
          </div>
          {/* item 2 */}
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Numer Telefonu</p>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary text-white">
                <FaPhone />
              </div>
              <p className="text-neutral-400">+48 637 123 532</p>
            </div>
          </div>
          {/* item 3 */}
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Email</p>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary text-white">
                <FaEnvelope />
              </div>
              <p className="text-neutral-400">kontakt@industrius.pl</p>
            </div>
          </div>
        </div>
        {/* col 4 */}
        <div className="flex flex-col gap-4 w-72">
          <p className="text-2xl font-semibold">Newsletter</p>
          <div className="w-24 h-[2px] bg-primary mb-2 my-[-5px]"></div>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          </p>
          <form action="" className="flex flex-col gap-2 mt-4 w-full">
            <input
              type="email"
              name="email"
              id="email"
              className="text-gray-200 bg-gray-700 p-8 py-4"
              placeholder="Email"
            />
            <button
              type="submit"
              className="flex w-full px-8 items-center justify-center gap-4 p-4 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20"
            >
              {" "}
              Prześlij
              <div className="absolute w-full h-1/2 top-0 left-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
              <div className="absolute w-full h-1/2 bottom-0 right-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
              <div className="absolute inset-0 bg-primary z-[-2]" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BeforeFooter;
