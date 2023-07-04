import React from "react";
import { Link } from "react-router-dom";

const IntroContact = () => {
  return (
    <div className="flex justify-center py-20 ">
      <div className="w-full max-w-screen-2xl flex flex-col justify-center items-center gap-10 md:gap-0 md:flex-row md:items-start">
        <div className="md:w-1/2 flex flex-col gap-3 items-center md:text-xl text-center">
          <div className="flex flex-col items-center pb-8 pt-6">
            <h2 className="text-center  text-3xl md:text-5xl md:tracking-wider font-playball font-bold">
              Heures d'Ouverture
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold">Du Mardi au Jeudi</h3>
              <p>De 14h à 21h</p>
            </div>
            <div>
              <h3 className="font-semibold">Le Vendredi et Samedi</h3>
              <p>De 14h à 22h</p>
            </div>
            <div>
              <h3 className="font-semibold">Le Dimanche</h3>
              <p>De 14h à 21h</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-2 items-center md:text-xl">
          <div className="flex flex-col items-center pb-8 pt-6">
            <h2 className="text-center  text-3xl md:text-5xl md:tracking-wider font-playball font-bold">
              Information
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>
          <div className=" flex flex-col items-center lg:flex-row gap-2">
            <p className="font-semibold">Adresse : </p>
            <p>Chaussée de Hannut 364, Bierset</p>
          </div>
          <div className=" flex flex-col items-center lg:flex-row gap-2">
            <p className="font-semibold">Email : </p>
            <p>contact@LCDHC.be</p>
          </div>
          <div className=" flex flex-col items-center lg:flex-row gap-2">
            <p className="font-semibold">Tel : </p>
            <p>04 250 21 13</p>
          </div>
          <Link
            to="/contact"
            className="link-page font-semibold text-center text-xl w-44 pt-6 pb-8 md:pb-0 "
          >
            Page de contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroContact;
