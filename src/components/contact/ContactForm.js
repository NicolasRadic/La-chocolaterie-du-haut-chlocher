import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [sendState, setSendState] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstName = (e) => {
    const getFirstName = e.target.value;
    setFirstName(getFirstName);
  };
  const handleLastName = (e) => {
    const getLastName = e.target.value;
    setLastName(getLastName);
  };
  const handleEmail = (e) => {
    const getEmail = e.target.value;
    setEmail(getEmail);
  };
  const handleMessage = (e) => {
    const getMessage = e.target.value;
    setMessage(getMessage);
  };

  // Submit Button

  const SubmitButton = () => {
    if (firstName && lastName && email && message) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  useEffect(() => {
    SubmitButton();
  });

  // sending hendler

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hoid4gt",
        "template_p6up4iq",
        form.current,
        "L_kllu1YPEtLwzA3m"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSendState(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:w-1/2 py-20">
      <div className="flex flex-col items-center pb-8 pt-6">
        <h2 className="text-center  text-2xl lg:text-4xl lg:tracking-wider font-playball font-bold">
          Formulaire de contact
        </h2>
        <img src="deco-title.png" alt="" className="pt-4" />
      </div>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-4 "
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Prénom*
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  value={firstName}
                  onChange={(e) => handleFirstName(e)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nom de famille*
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  value={lastName}
                  onChange={(e) => handleLastName(e)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Entreprise
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email*
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  value={email}
                  onChange={(e) => handleEmail(e)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message*
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  "
                  value={message}
                  onChange={(e) => handleMessage(e)}
                />
              </div>
            </div>
            <div className="mt-10 sm:col-span-2">
              {formComplete ? (
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[rgb(197,157,95)] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[rgb(198,139,49)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(197,157,95)]"
                >
                  Envoyer
                </button>
              ) : (
                <button
                  type="submit"
                  className="block w-full rounded-md bg-zinc-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(197,157,95)]"
                  disabled
                >
                  Envoyer
                </button>
              )}
            </div>
          </div>
        </form>
        {sendState ? (
          <div>
            {" "}
            <p className=" text-center italic text-base text-zinc-600 pt-8">
              Le message a bien été envoyé
            </p>
          </div>
        ) : (
          <div>
            {" "}
            <p className=" text-center italic text-base text-zinc-600 pt-8 px-2">
              Afin d'envoyer le message tous les champs dotés d'une * doivent
              être remplis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
