"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AppearFromLeft = ({ children }: any) => {
  const ref: any = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.45, ease: "easeInOut", delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AppearFromLeft;
