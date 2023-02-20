import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

const Welcome = () => {
  return (
    <div className="h-screen top-24 ">
      <div className="h-screen w-full absolute z-10  bg-black opacity-60"></div>
      <img
        src="./images/facade1.jpg"
        alt="acceuil"
        className="object-cover w-full h-full"
      />
      <div className="h-screen w-full absolute z-20 top-24 text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl md:tracking-wider font-semiboldn text-center md:w-[40rem] font-gv">
          Bienvenue à La Chocolaterie du Haut Clocher
        </h1>
        <div className="pt-6 flex justify-center items-center gap-4">
          <img src="./images/bef-af.png" alt="encadre avant" />
          <h2>VINCENT VANSTRAELEN</h2>
          <img src="./images/bef-af.png" alt="encadre après" />
        </div>

        <ChevronDoubleDownIcon className="w-8 pt-12" />
      </div>
    </div>
  );
};

export default Welcome;
