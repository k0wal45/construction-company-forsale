"use client";

import { Fragment, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const form: any = useRef();

  const onMutate = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (e.target.validate.checked) {
      console.log("validate");
      toast.error(
        "Cos poszło nie tak, Skontaktuj się mailowo: lunarisweb.pl@gmail.com",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    if (!e.target.accpet.checked) {
      toast.error(
        "Pamiętaj aby wyrazić zgodę na przetwarzanie danych na dole formularza",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    // Wyrażenia regularne do walidacji
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{9,15}$/;

    // Sprawdzanie pola "name"
    if (name.trim() === "") {
      toast.error("Nieprawidłowo wpisane imię", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "email"
    if (email.trim() === "") {
      toast.error("Nieprawidłowy adres e-mail", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Nieprawidłowy adres e-mail", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "phone"
    if (phone.trim() === "") {
      toast.error("Nieprawidłowy numer telefonu", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else if (!phoneRegex.test(phone)) {
      toast.error("Nieprawidłowy numer telefonu", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Sprawdzanie pola "message"
    if (message.trim() === "") {
      toast.error(
        "Cos poszło nie tak, Skontaktuj się mailowo: lunarisweb.pl@gmail.com",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    toast.success("Sukces", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <Fragment>
      <form
        className="w-full flex flex-col gap-4 flex-1 h-full bg-white rounded-r-[5rem] p-8"
        onSubmit={handleSubmit}
        ref={form}
      >
        <p className="subtitle">Napisz do nas</p>
        <h3 className="text-4xl font-semibold max-w-2xl">
          Skontaktuj się z nami przez formularz!
        </h3>
        <div className="flex gap-2 w-full">
          <input
            placeholder="Imię i Nazwisko"
            type="text"
            name="name"
            id="name"
            onChange={onMutate}
            value={name}
            className="w-full bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1"
            required
          />

          <input
            placeholder="Numer Telefonu"
            type="number"
            name="phone"
            id="phone"
            onChange={onMutate}
            value={phone}
            className="w-full bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1"
            required
          />
        </div>

        <input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          onChange={onMutate}
          value={email}
          className="w-full bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1"
          required
        />

        <textarea
          placeholder="Wiadomość"
          name="message"
          id="message"
          onChange={onMutate}
          value={message}
          className="w-full h-48 bg-white p-4 border-2 border-base rounded-md focus:bg-white autofill:bg-white outlne-white ring-white flex-1 min-h-48"
          required
        />

        <div className="flex gap-2 items-start w-full">
          <input
            type="checkbox"
            name="accpet"
            id="accpet"
            className="block"
            required
          />
          <label htmlFor="accept" className="text-xs text-neutral-700 w-full">
            Akceptując, wyrażasz zgodę na przetwarzanie Twoich danych osobowych
            przez właściciela strony oraz na otrzymywanie ofert i informacji
            handlowych na podany adres e-mail lub numer telefonu.
          </label>
        </div>

        <button
          type="submit"
          className="flex w-fit px-8 items-center gap-4 p-4 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20"
        >
          {" "}
          Prześlij
          <div className="absolute w-full h-1/2 top-0 left-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
          <div className="absolute w-full h-1/2 bottom-0 right-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
          <div className="absolute inset-0 bg-primary z-[-2]" />
        </button>

        <input
          type="checkbox"
          name="validate"
          id="validate"
          className="scale-0 w-0 h-0"
        />

        <ToastContainer />
      </form>
    </Fragment>
  );
};

export default Form;
