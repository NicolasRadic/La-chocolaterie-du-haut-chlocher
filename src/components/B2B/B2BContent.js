import React from "react";

const B2BContent = () => {
  return (
    <div className="py-24 flex justify-center">
      <div className=" md:pt-20 max-w-screen-2xl">
        <div className="flex flex-col items-center pb-8 pt-10 lg:pt-0">
          <h2 className="text-center  text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
            {" "}
            Cadeaux personnalisés
          </h2>
          <img src="deco-title.png" alt="" className="pt-4" />
        </div>
        <div className="px-8 pb-6 lg:px-10  flex flex-col gap-4 lg:text-lg">
          <div>
            <ul className="list-disc pl-8 space-y-1 > * + *">
              <li>
                Rendez vos évènements inoubliables, mariage, baptême,
                anniversaire, en offrant du chocolat artisanal et de qualité à
                vos invités !
              </li>
              <li>
                Offrez un cadeau gourmand, à l'image de votre entreprise, pour
                remercier vos collaborateurs ou vos clients.
              </li>
            </ul>
          </div>
          <p>
            Vous avez toujours rêvé d'imprimer votre logo, une date souvenir, un
            message sur une praline ? Nous pouvons le faire !
          </p>
          <p>
            Nous sommes spécialisés dans la personnalisation de chocolat, quel
            que soit la quantité et le format : pralines fourrées, cartes de
            visite chocolatées, ... mais nous gérons également l’impression
            d’étiquettes ou contenants.
          </p>

          <p>
            Notre créativité est sans limite quand il s’agit de vous aider à
            offrir un cadeau original et personnalisé !Notre créativité est sans
            limite quand il s’agit de vous aider à offrir un cadeau original et
            personnalisé !
          </p>
        </div>
        <div className="pt-10 flex flex-col gap-4 lg:flex-row">
          <img
            src="./images/b2b/b2b-1.jpg"
            alt="chocolat équipe auto pneu"
            className="px-8 h-60 lg:px-0 lg:w-1/4 object-cover"
          />
          <img
            src="./images/b2b/b2b-2.jpg"
            alt="chocolat évènnement"
            className="px-8 h-60 lg:px-0 lg:w-1/4 object-cover"
          />
          <img
            src="./images/b2b/b2b-3.jpg"
            alt="chocolat de multiple entreprises"
            className="px-8 h-60 lg:px-0 lg:w-1/4 object-cover"
          />
          <img
            src="./images/b2b/b2b-4.jpg"
            alt="chocolat Upguest"
            className="px-8 h-60 lg:px-0 lg:w-1/4 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default B2BContent;
