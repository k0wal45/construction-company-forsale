import Swiper from "./Swiper";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 w-full bg-orange-50 py-16 p-4 overflow-hidden">
      <p className="subtitle">Nasze usługi</p>
      <h3 className="text-6xl font-semibold max-w-2xl">
        Jakie usługi świadczymy?
      </h3>
      <Swiper />
    </section>
  );
};

export default Services;
