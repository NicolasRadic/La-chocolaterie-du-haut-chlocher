import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import InProgress from "../components/InProgress";
// import TitlePage from "../components/TitlePage";

const B2B = () => {
  return (
    <div>
      <Header />
      {/* <TitlePage title={"B2B"} /> */}
      <div className="pt-24">
        B2B Nous nous faisons un plaisir de vous accompagner dans vos cadeaux
        d'entreprise ! Le maitre mot : la personnalisation ! Vous avez toujours
        rêvé d'imprimer votre logo sur une praline ? Nous pouvons le faire !
        Nous sommes spécialisés dans la personnalisation de chocolat, même pour
        des petites quantités, sous divers formats : pralines fourrées, carte de
        visites, ... Suivant votre demande, nous pouvons également personnaliser
        une étiquette, une boîte,... Il y en a pour tout les budgets - Rendez
        vos évènements inoubliables en offrant du chocolat artisanal et de
        qualité à vos invités ! - Offrez un cadeau gourmand et à l'image de
        votre entreprise pour remercier vos collaborateurs, vos employés ou vos
        clients. - Mariage, baptème, anniversaire, festival, salon, toutes les
        occasions sont bonnes ! Contactez nous pour découvrir nos idées de
        cadeaux et laissez-vous guider par nos chocolatiers pour tous vos
        évènements !
      </div>
      <InProgress />
      <Footer />
    </div>
  );
};

export default B2B;
