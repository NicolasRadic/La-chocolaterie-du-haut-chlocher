import React from "react";

const Boutique = () => {
  return (
    <div className="flex justify-center pb-20 shadow shadow-slate-200 ">
      <div className="w-full max-w-screen-2xl">
        <h2 className="text-center pb-8 pt-6 text-3xl md:text-5xl md:tracking-wider font-playball font-bold">
          Boutique
        </h2>
        <div className="text-center flex flex-col justify-center items-center">
          <p className="md:text-xl ">
            Découvrez notre gamme de produits sur notre boutique en ligne !{" "}
            <br />
            Commandez vos chocolats préférés et venez les retirer en magasin à
            votre convenance.
          </p>
          <a
            href="https://lachocolaterieduhautclocher.myshopify.com/"
            target="_blank"
            rel="noreferrer"
            className="link-page font-semibold text-3xl w-80 pt-10 pb-8 md:pb-0"
          >
            Rendez vous sur notre boutique en ligne
          </a>
        </div>
      </div>
    </div>
  );
};

export default Boutique;
