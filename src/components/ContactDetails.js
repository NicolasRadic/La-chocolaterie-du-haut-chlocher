import React from "react";

const ContactDetails = () => {
  return (
    <div className="lg:w-1/2 ">
      <div className="w-full flex flex-col justify-center items-center gap-10 py-20">
        <div className="lg:w-1/2 flex flex-col gap-2 items-center lg:text-xl">
          <div className="flex flex-col items-center pb-8 pt-6">
            <h2 className="text-center  text-2xl lg:text-4xl lg:tracking-wider font-playball font-bold">
              Information
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>
          <div className=" flex flex-col items-center lg:flex-row lg:items-start gap-2">
            <p className=" whitespace-nowrap font-semibold">Adresse :</p>
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
        </div>
        <div className="lg:w-1/2 flex flex-col gap-3 items-center lg:text-xl text-center">
          <div className="flex flex-col items-center pb-8 pt-6">
            <h2 className="text-center  text-2xl lg:text-4xl lg:tracking-wider font-playball font-bold">
              Heures d'Ouverture
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>
          <div>
            <h3 className="font-semibold">Du Mercredi au Samedi</h3>
            <p>De 10 à 18h</p>
            <p className="italic text-base text-zinc-600 pt-6">
              *Ces horaires peuvent varier en fonction des fêtes, visitez notre
              page facebook pour en savoir plus...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
