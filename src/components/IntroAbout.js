import React from "react";
import { Link } from "react-router-dom";

const IntroAbout = () => {
  return (
    <div className="flex justify-center intro-about">
      <div className="flex flex-col lg:flex-row  py-20 md:px-8 max-w-screen-2xl">
        <div className="p-4 flex flex-col gap-6 lg:w-1/2">
          <div className="flex flex-col items-center pb-8 pt-6">
            <h2 className="text-center  text-3xl md:text-5xl md:tracking-wider font-playball font-bold">
              Vincent Vanstraelen
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>
          <div className="flex flex-col gap-4 px-4 md:text-xl">
            <p>
              Depuis petit, Vincent est passionné par le chocolat. C’est tout
              naturellement qu’il s’est dirigé vers la chocolaterie, tout en se
              formant auprès de meilleurs ouvriers de France et chez des
              artisans de la région.
            </p>
            <p>
              Après 4 ans et demi dans l’atelier de La Chocolaterie du Haut
              Clocher, il saisit l’opportunité de reprendre le commerce en
              janvier 2023. Ne tardez plus, venez vite découvrir son univers...
            </p>
            <Link
              to="/about"
              className="link-page font-semibold text-xl w-44 pt-10 pb-8 md:pb-0"
            >
              Découvrez en plus
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="./images/vincent-1.png"
            alt="comptoir"
            className="p-4 object-cover  w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
