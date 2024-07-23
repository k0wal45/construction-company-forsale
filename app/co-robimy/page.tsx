import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="bg-gray-100">
      <Image
        width={1920}
        height={1080}
        alt=""
        src="/img/site.jpg"
        className="w-screen h-screen object-cover"
      />
    </main>
  );
};

export default page;
