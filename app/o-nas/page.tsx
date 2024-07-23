import Image from "next/image";

const page = () => {
  return (
    <main>
      <Image
        width={1920}
        height={1080}
        alt=""
        src="/img/man.jpg"
        className="w-screen h-screen object-cover"
      />
    </main>
  );
};

export default page;
