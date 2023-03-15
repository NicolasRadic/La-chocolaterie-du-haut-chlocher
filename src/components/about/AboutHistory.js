import React from "react";

const AboutHistory = () => {
  return (
    <div className="pt-24 lg:tracking-wider flex  justify-center">
      <div className="max-w-screen-2xl">
        <div className=" lg:pt-20">
          <div className="flex flex-col-reverse justify-center lg:flex-row lg:items-end">
            <div className="lg:w-1/2">
              <img
                src="./images/vincent-1.png"
                alt="vicent"
                className="w-full h-ful pt-10 lg:pt-0 px-4 lg:pl-40"
              />
            </div>
            <div className="lg:w-1/2 lg:pr-20 lg:pl-10 flex flex-col gap-8 ">
              <div className="flex flex-col items-center pb-8 pt-10 lg:pt-0">
                <h2 className="text-center  text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
                  {" "}
                  L'histoire
                </h2>
                <img src="deco-title.png" alt="" className="pt-4" />
              </div>
              <div className="px-8  lg:px-10  flex flex-col gap-4 xl:text-xl">
                <p> Bonjour, moi c'est Vincent ! </p>
                <p>Je vais vous expliquer mon parcours...</p>
                <p>
                  A mes 18 ans, je me suis formé au métier de chocolatier, en
                  alternance à la Chocolaterie du Haut Clocher. Cela ne me
                  suffisait pas, j'ai donc enchainé avec des formations en
                  boulangerie-patisserie et en glacerie. Toujours pour apprendre
                  plus, je suis parti me former à l'étranger chez Thierry Bamas,
                  meilleur ouvrier de france patissier et chez Elle&Vire à La
                  Maison de l'Excellence Savencia sous la supervision du MOF
                  monsieur Nicolas Boussin et de leurs supers chefs. Entre temps
                  j'ai également eu l'occasion de parfaire mes connaissances
                  glacées chez Avalanche de Saveurs et chez le boulanger du
                  coin. De retour à la chocolaterie, j'y exprime mon
                  savoir-faire depuis 2018 accompagné de Xavier qui m'aide à
                  l'atelier.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 lg:pt-40 flex flex-col justify-center lg:flex-row lg:items-end">
          <div className="lg:w-1/2 lg:pl-20 lg:pr-10 flex flex-col gap-8 ">
            <div className="flex flex-col items-center pb-8 pt-10 lg:pt-0">
              <h2 className="text-center  text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
                {" "}
                La Chocolaterie
              </h2>
              <img src="deco-title.png" alt="" className="pt-4" />
            </div>
            <div className="px-8  lg:px-10  flex flex-col gap-4 xl:text-xl">
              <p>
                La Chocolaterie du Haut Clocher a ouvert ses portes pour la
                première fois en 2011 dans le village de Voroux-Goreux
                (Fexhe-le-Haut-Clocher) créée par Rita Cosi. Afin de mieux vous
                servir, nous avons déménagé en 2016 dans nos actuels locaux à
                seulement 1,5km de là, à Bierset.
              </p>
              <p>
                Début 2023, la chocolaterie est reprise par Vincent, l'ouvrier
                de Rita. Déjà responsable de l'atelier, il va pouvoir exprimer
                pleinement sa vision de la chocolaterie avec également le
                lancement de la fabrications de glace artisanales dès l'été
                2023. Venez pousser la porte du magasin et vous aurez l'occasion
                d'avoir une vue sur l'atelier, en pleine production !
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="./images/comptoir-1.jpg"
              alt="vicent"
              className="w-full h-full pt-12 lg:pt-0 px-4 lg:pr-40"
            />
          </div>
        </div>
        <div className="pt-20 pb-10 lg:pb-20 lg:pt-40 flex flex-col justify-center  lg:items-center">
          <div className="max-w-5xl">
            <div className="flex flex-col items-center pb-8 pt-10 lg:pt-0">
              <h2 className="text-center  text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
                {" "}
                Les produits
              </h2>
              <img src="deco-title.png" alt="" className="pt-4" />
            </div>
            <div className="px-8 pb-6 lg:px-10  flex flex-col gap-4 xl:text-xl">
              <p>
                Du beau et du bon ! Notre artisanat est important, c'est
                pourquoi nous avons reçu le label "Artisanat Certifié" delivré
                par l'État Belge. Nous selectionnons méticuleusement chaque
                matière première pour les transformer en délicieuts produits
                chocolatés : pralines, mélocake, élixir chocolat, tablettes,
                barres gourmandes, .. vous trouverez forcément votre bonheur !
                Ne tardez plus, aller sur notre boutique en ligne pour en avoir
                déjà un large aperçu.
              </p>
              <p>
                Pour toujours vous surprendre, notre gamme de pralines est
                changeante, chaque saison à son lot de nouveautés.
              </p>
            </div>
          </div>
          <div className="hidden  pt-8 md:flex flex-col gap-4 lg:gap-8">
            <img
              src="./images/products/product-full-1.png"
              alt="première liste de produit"
            />
            <img
              src="./images/products/product-full-2.png"
              alt="première liste de produit"
            />
          </div>
          <div className="md:hidden py-4 px-8 flex flex-col gap-4 lg:gap-8">
            <img
              src="./images/products/product-1-1.png"
              alt="chocolat classic"
            />
            <img src="./images/products/product-1-2.png" alt="dessert" />
            <img
              src="./images/products/product-1-3.png"
              alt="pâtes à tartiner"
            />
            <img src="./images/products/product-1-4.png" alt="truffes" />
            <img src="./images/products/product-2-1.png" alt="chocolat noit" />
            <img
              src="./images/products/product-2-2.png"
              alt="chocolat noir deuxième partie"
            />
            <img
              src="./images/products/product-2-3.png"
              alt="chocolat au lait"
            />
            <img src="./images/products/product-2-4.png" alt="chocolat blanc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
