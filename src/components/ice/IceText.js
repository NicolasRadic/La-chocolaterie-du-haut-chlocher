import React from "react";

const IceText = () => {
  return (
    <div className="flex flex-col p-4 lg:w-1/2 justify-center items-center">
      <div className="flex flex-col gap-6 px-8 py-4 lg:px-10 lg:text-lg">
        <div className="text-center pb-8 text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
          <h2>Nos Glaces</h2>
        </div>
        <p>Vous aimez nos chocolats ? Vous succomberez à nos glaces !</p>
        <div>
          <p>
            Découvrez nos nouvelles glaces artisanales, produites entièrement
            dans notre atelier.
          </p>
          <p>
            Des ingrédients méticuleusement sélectionnés; noisettes du Piémont,
            citrons de Syracuse.
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
      </div>
    </div>
  );
};

export default IceText;
