import Image from "next/image";
import AppearFromLeft from "../Animation/ApppearFromLeft";

const AboutImage = () => {
  return (
    <AppearFromLeft>
      <div className="relative w-fit">
        <Image
          width={600}
          height={600}
          alt=""
          src="/img/man.jpg"
          className="lg:size-[30rem] object-cover"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
          }}
        />

        <div
          className="bg-white absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 pb-4 pr-4"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 90%, 0% 100%)" }}
        >
          <Image
            width={700}
            height={600}
            alt=""
            src="/img/view.jpg"
            className="size-[10rem] lg:size-[20rem] object-cover "
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 90%, 0% 100%)" }}
          />
        </div>
        <div className="size-40 bg-white rounded-full absolute bottom-0 right-0 p-4 animate-scale">
          <div className=" bg-white rounded-full size-full p-4 border-[2px] border-primary flex flex-col text-center items-center justify-center">
            <p className="text-5xl font-bold text-primary">25</p>
            <p className="text-xl text-neutral-500 leading-4 font-semibold ">
              lat w branży
            </p>
          </div>
        </div>
      </div>
    </AppearFromLeft>
  );
};

export default AboutImage;
