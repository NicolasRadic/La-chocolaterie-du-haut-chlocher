import React from "react";

const AboutHistory = () => {
  return (
    <div className="pt-20 md:tracking-wider">
      <div className="pt-20">
        <div className="flex flex-col-reverse justify-center md:flex-row md:items-end">
          <div className="md:w-1/2">
            <img
              src="./images/vincent-1.png"
              alt="vicent"
              className="w-full h-ful pt-10 md:pt-0 px-4 md:pl-40"
            />
          </div>
          <div className="md:w-1/2 md:pr-20 md:pl-10 flex flex-col gap-8 ">
            <div className="flex flex-col items-center pb-8 pt-10 md:pt-0">
              <h2 className="text-center  text-3xl md:text-5xl md:tracking-wider font-playball font-bold">
                {" "}
                L'histoire
              </h2>
              <img src="deco-title.png" alt="" className="pt-4" />
            </div>
            <div className="px-8 pb-6 md:px-10  flex flex-col gap-4 md:text-xl">
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
                glacées chez Avalanche de Saveurs et chez le boulanger du coin.
                De retour à la chocolaterie, j'y exprime mon savoir-faire depuis
                2018 accompagné de Xavier qui m'aide à l'atelier.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 md:pt-40 flex flex-col justify-center md:flex-row md:items-end">
        <div className="md:w-1/2 md:pl-20 md:pr-10 flex flex-col gap-8 ">
          <div className="flex flex-col items-center pb-8 pt-10 md:pt-0">
            <h2 className="text-center  text-3xl md:text-5xl md:tracking-wider font-playball font-bold">
              {" "}
              La Chocolaterie
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>
          <div className="px-8 pb-6 md:px-10  flex flex-col gap-4 md:text-xl">
            <p>
              La Chocolaterie du Haut Clocher a ouvert ses portes pour la
              première fois en 2011 dans le village de Voroux-Goreux
              (Fexhe-le-Haut-Clocher) créée par Rita Cosi. Afin de mieux vous
              servir, nous avons déménagé en 2016 dans nos actuels locaux à
              seulement 1,5km de là, à Bierset.
            </p>
            <p>
              Début 2023, la chocolaterie est reprise par Vincent, l'ouvrier de
              Rita. Déjà responsable de l'atelier, il va pouvoir exprimer
              pleinement sa vision de la chocolaterie avec également le
              lancement de la fabrications de glace artisanales dès l'été 2023.
              Venez pousser la porte du magasin et vous aurez l'occasion d'avoir
              une vue sur l'atelier, en pleine production !
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="./images/comptoir-1.jpg"
            alt="vicent"
            className="w-full h-full pt-12 md:pt-0 px-4 md:pr-40"
          />
        </div>
      </div>
      <div className="pt-20  md:pt-40 flex flex-col justify-center md:flex-row md:justify-center">
        <div className="max-w-5xl">
          <div className="flex flex-col items-center pb-8 pt-10 md:pt-0">
            <h2 className="text-center  text-3xl md:text-5xl md:tracking-wider font-playball font-bold">
              {" "}
              Les produits
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>
          <div className="md:text-xl">
            <p>
              Du beau et du bon ! Notre artisanat est important, c'est pourquoi
              nous avons reçu le label "Artisanat Certifié" delivré par l'État
              Belge. Nous selectionnons méticuleusement chaque matière première
              pour les transformer en délicieuts produits chocolatés : pralines,
              mélocake, élixir chocolat, tablettes, barres gourmandes, .. vous
              trouverez forcément votre bonheur ! Ne tardez plus, aller sur
              notre boutique en ligne pour en avoir déjà un large aperçu.
            </p>
            <p>
              Pour toujours vous surprendre, notre gamme de pralines est
              changeante, chaque saison à son lot de nouveautés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
