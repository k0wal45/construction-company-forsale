import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="bg-neutral-400">
      <Image
        width={1920}
        height={1080}
        alt=""
        src="/img/view.jpg"
        className="w-screen h-screen object-cover"
      />
    </main>
  );
};

export default page;
