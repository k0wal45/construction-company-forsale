"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:flex-row bg-primary p-8 text-white gap-16 mx-auto lg:-translate-y-[4rem] px-4 py-24 w-full max-w-7xl">
      <Stat
        num={2}
        decimals={1}
        suffix="k"
        subheading="Ukończonych projektów"
      />
      <div className="h-[1px] w-24 bg-indigo-200 lg:h-12 lg:w-[1px]" />
      <Stat
        num={1.5}
        decimals={1}
        suffix="k+"
        subheading="Zadowolonych klientów"
      />
      <div className="h-[1px] w-24 bg-indigo-200 lg:h-12 lg:w-[1px]" />
      <Stat num={76} suffix="+" subheading="Ekspertów w zespole" />
      <div className="h-[1px] w-24 bg-indigo-200 lg:h-12 lg:w-[1px]" />
      <Stat num={85} suffix="+" subheading="Wygranych Nagród" />
    </section>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center lg:items-start py-8 sm:py-0">
      <p className="mb-2 flex items-center gap-4 text-6xl font-semibold sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-52 text-neutral-100 text-center lg:text-start">
        {subheading}
      </p>
    </div>
  );
};
