import React from "react";

const IceText = () => {
  return (
    <div className="flex flex-col pt-10 lg:pt-20 w-full  justify-center items-center">
      <div className="flex flex-col w-full gap-6 px-8  lg:px-10 lg:text-lg">
        <div className="flex flex-col items-center pb-8">
          <h2 className="text-center text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
            Nos Glaces
          </h2>
          <img src="deco-title.png" alt="" className="pt-4" />
        </div>
        <p>Vous aimez nos chocolats ? Vous succomberez à nos glaces !</p>
        <div>
          <p>
            Découvrez nos nouvelles glaces artisanales, produites entièrement
            dans notre atelier.
          </p>
          <p>
            Des ingrédients méticuleusement sélectionnés; noisettes du Piémont,
            cityorn de syracus, clémentine de Corse, vanille de Madagascar, ...
          </p>
          <p>
            Très prochainement, retrouvez également nos bûches de Noël glacées.
            Toutes les informations très bientôt sur notre page Facebook !
          </p>
        </div>
        <p>
          Disponible à la vente à emporter dans notre magasin et en&#160;
          <a
            href="https://lachocolaterieduhautclocher.myshopify.com/collections/glaces"
            target="_blank"
            rel="noreferrer"
            className="link-page font-semibold text-center text-xl w-44 pt-6 pb-8 md:pb-0"
          >
            demi-litres.
          </a>
        </p>
        <div className="pt-10 flex flex-col w-full justify-between  sm:flex-row">
          <img
            src="./images/ice/gateau_glace-1.jpg"
            alt="chocolat équipe auto pneu"
            className="px-8  sm:px-0 sm:w-1/4 object-cover "
          />
          <img
            src="./images/ice/gateau_glace-2.jpg"
            alt="chocolat évènnement"
            className="px-8 sm:px-0 sm:w-1/4 object-cover"
          />
          <img
            src="./images/ice/glace.jpg"
            alt="chocolat de multiple entreprises"
            className="px-8  sm:px-0 sm:w-1/4 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default IceText;
