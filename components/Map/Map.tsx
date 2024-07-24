import React from "react";
import { FaClock, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Map = () => {
  return (
    <section className="max-w-6xl w-full mx-auto my-24 flex flex-col md:flex-row gap-12 h-fit">
      <div className="flex flex-col gap-12 p-4 w-[30rem]">
        <h2 className="text-2xl font-semibold">Informacje kontaktowe</h2>
        <div className="flex gap-4">
          <div className="size-20 grid place-items-center text-5xl text-white bg-primary">
            <FaLocationDot />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Nasz adres</p>
            <p className="text-neutral-500">Warszawa, Mazowieckie</p>
            <p className="text-neutral-500">ul. Kościuszki 25 20-123</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="size-20 grid place-items-center text-4xl text-white bg-neutral-900">
            <FaPhone />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Telefon / Email</p>
            <p className="text-neutral-500">Telefon: +48 637 123 532</p>
            <p className="text-neutral-500">Email: kontakt@industrius.pl</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="size-20 grid place-items-center text-5xl text-white bg-neutral-600">
            <FaClock />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-lg">Godziny pracy</p>
            <p className="text-neutral-500">Pn - Pt: 7:00 - 17:00</p>
            <p className="text-neutral-500 flex items-center gap-2">
              Weekend: <span className="text-primary">Zamknięte</span>
            </p>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81701.58551379357!2d18.92558171532391!3d50.21395861675834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2336a1ccd1%3A0xb9af2a350559fabb!2sKatowice!5e0!3m2!1spl!2spl!4v1721845265767!5m2!1spl!2spl"
        loading="lazy"
        className="w-full"
      ></iframe>
    </section>
  );
};

export default Map;
