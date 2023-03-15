import React from "react";

const B2BContent = () => {
  return (
    <div className="pt-24">
      <div className="pt-10 md:pt-20">
        <div className="flex flex-col items-center pb-8 pt-10 lg:pt-0">
          <h2 className="text-center  text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
            {" "}
            B2B
          </h2>
          <img src="deco-title.png" alt="" className="pt-4" />
        </div>
        <div>
          <p>
            Nous nous faisons un plaisir de vous accompagner dans vos cadeaux
            d'entreprise ! Le maitre mot : la personnalisation ! Vous avez
            toujours rêvé d'imprimer votre logo sur une praline ? Nous pouvons
            le faire ! Nous sommes spécialisés dans la personnalisation de
            chocolat, même pour des petites quantités, sous divers formats :
            pralines fourrées, carte de visites, ... Suivant votre demande, nous
            pouvons également personnaliser une étiquette, une boîte,... Il y en
            a pour tout les budgets
          </p>
          <div>
            <ul>
              <li>
                Rendez vos évènements inoubliables en offrant du chocolat
                artisanal et de qualité à vos invités !
              </li>
              <li>
                Offrez un cadeau gourmand et à l'image de votre entreprise pour
                remercier vos collaborateurs, vos employés ou vos clients.
              </li>
              <li>
                Mariage, baptème, anniversaire, festival, salon, toutes les
                occasions sont bonnes !
              </li>
            </ul>
          </div>
          <p>
            Contactez nous pour découvrir nos idées de cadeaux et laissez-vous
            guider par nos chocolatiers pour tous vos évènements !
          </p>
        </div>
      </div>
    </div>
  );
};

export default B2BContent;
