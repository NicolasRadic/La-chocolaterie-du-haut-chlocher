import React from "react";

const AboutHistory = () => {
  return (
    <div className="pt-24 lg:tracking-wider flex  justify-center">
      <div className="max-w-screen-2xl">
        <div className=" lg:pt-20">
          <div className="flex flex-col-reverse justify-center lg:flex-row lg:items-end">
            <div className="lg:w-1/2">
              <img
                src="./images/vincent-vertical.png"
                alt="vicent"
                className="w-full h-ful pt-10 lg:pt-0 px-4 lg:pl-40 lg:max-h-[750px] object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:pr-20 lg:pl-10 flex flex-col gap-8 ">
              <div className="flex flex-col items-center pb-8 pt-10 lg:pt-0">
                <h2 className="text-center text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
                  {" "}
                  L'histoire
                </h2>
                <img src="deco-title.png" alt="" className="pt-4" />
              </div>
              <div className="px-8  lg:pl-10 lg:pr-2 flex flex-col gap-4 lg:text-lg">
                <p>Bonjour à vous, amateurs de chocolat,</p>
                <p>
                  Je m’appelle Vincent Vanstraelen et voici mon parcours en
                  quelques lignes.
                </p>
                <p>
                  A 18 ans, passionné de chocolat, c’est tout naturellement que
                  je me suis tourné vers une formation en alternance de
                  Confiseur-Chocolatier. C’est à la Chocolaterie du Haut
                  Clocher, durant ma période de stage, que j’ai appris les
                  rudiments du métier.
                </p>

                <p>
                  Désireux d’étendre mes connaissances dans le domaine des
                  douceurs sucrées, j’ai enchainé avec des formations en
                  Boulangerie-Pâtisserie et en Glacerie.
                </p>
                <p>
                  Afin d’acquérir plus d’expérience , j’ai suivi deux stages en
                  France : l’un chez Thierry Bamas, Meilleur Ouvrier de France
                  pâtissier et l’autre, à la Maison de l’Excellence Savencia
                  sous la supervision de Nicolas Boussin, Meilleur Ouvrier de
                  France pâtissier et de son équipe de Chefs pâtissiers.
                </p>
                <p>
                  Parallèlement, je me suis exercé à la confection de glaces
                  gourmandes et parfumées chez Avalanche de Saveurs, à Crisnée.
                </p>

                <p>
                  A l’issue de ces formations, j’ai été engagé comme ouvrier à
                  la Chocolaterie du Haut Clocher.
                </p>
                <p>
                  Et, cerise sur le gâteau, j’ai repris les rênes de
                  l’entreprise en février 2023, secondé par mon assistant de
                  production Xavier.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 lg:pt-40 flex flex-col justify-center lg:flex-row lg:items-end">
          <div className="lg:w-1/2 lg:pl-20 lg:pr-10 flex flex-col gap-8 ">
            <div className="flex flex-col items-center pb-8 pt-10 lg:pt-0">
              <h2 className="text-center  text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold ">
                {" "}
                La Chocolaterie
              </h2>
              <img src="deco-title.png" alt="" className="pt-4" />
            </div>
            <div className="px-8  lg:px-10  flex flex-col gap-4 lg:text-lg">
              <p>
                La Chocolaterie du Haut Clocher, fondée par Rita Cosi, a ouvert
                ses portes en 2011 dans le village de Voroux-Goreux en province
                de Liège.
              </p>
              <p>
                En 2016, afin de mieux servir ses clients, l’entreprise a doublé
                sa superficie en s’installant, non loin de là, à Bierset.
              </p>
              <p>
                Début 2023, la chocolaterie est reprise par Vincent Vanstraelen,
                responsable de l'atelier depuis 2020. Celui-ci va pouvoir
                exprimer pleinement sa vision de la chocolaterie mais également
                lancer la fabrication de glaces artisanales dès l'été 2023.
              </p>
              <p>
                En poussant les portes, vous serez accueillis par un grand
                comptoir présentant un assortiment varié mais vous pourrez aussi
                profiter d’une vue imprenable sur nos ateliers de fabrication,
                en pleine production car ...chez nous, il n’y pas de secret ou
                presque!
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
            <div className="px-8 pb-6 lg:px-10  flex flex-col gap-4 lg:text-lg">
              <p>Du beau et du bon !</p>
              <p>
                Notre ligne de conduite est une fabrication 100 % artisanale.
                Nous avons d’ailleurs obtenu le label "Artisanat Certifié"
                délivré par l'État Belge.
              </p>
              <p>
                Nous sélectionnons méticuleusement chaque matière première pour
                la transformer en délicieux produits chocolatés tels que
                pralines, ‘mélocake’, barres gourmandes, pâtes à tartiner et
                même une liqueur au chocolat. Comment ne pas trouver votre
                bonheur et satisfaire vos papilles !
              </p>
              <p>
                Fidèles à nos classiques, nous fabriquons également des pralines
                éphémères aux saveurs insolites et imaginons des créations
                thématiques pour la Saint-Valentin, la Saint-Nicolas et Pâques.
              </p>
              <p>
                Notre boutique en ligne présente un large aperçu de notre gamme.
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
