import React from "react";
import Form from "./Form";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto my-24 overflow-hidden">
      <Form />
      <Image
        width={700}
        height={700}
        alt=""
        src="/img/man.jpg"
        className="size-full object-cover scale-[1.3] z-[-1]"
      />
    </section>
  );
};

export default Contact;
