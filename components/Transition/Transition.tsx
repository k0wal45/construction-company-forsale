"use client";
import { motion } from "framer-motion";

const variants = {
  initial: {
    scaleY: 0,
    transformOrigin: "top",
  },
  animate: {
    scaleY: 1,
    transformOrigin: "bottom",
  },
};
const Transition = ({ open }: { open: boolean }) => {
  return (
    <motion.div
      initial="initial"
      animate={open ? "animate" : "initial"}
      variants={variants}
      transition={{ duration: 0.3, delay: 0.05, ease: "easeInOut" }}
      className={
        "fixed top-0 left-0 w-full h-full z-[100] grid place-items-center bg-white "
      }
    ></motion.div>
  );
};

export default Transition;
