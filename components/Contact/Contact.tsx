import React from "react";
import Form from "./Form";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="w-full max-w-7xl grid grid-cols-1 place-items-center lg:grid-cols-2 mx-auto my-24 p-4">
      <Form />
      <Image
        width={900}
        height={900}
        alt=""
        src="/img/blocks.jpg"
        className="w-full object-cover aspect-square lg:scale-[1.15] z-[-1] rounded-[3rem] lg:-translate-x-6"
      />
    </section>
  );
};

export default Contact;
