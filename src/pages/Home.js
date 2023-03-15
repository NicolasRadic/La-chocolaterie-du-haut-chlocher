import React, { useEffect } from "react";
import Boutique from "../components/Boutique";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import IntroAbout from "../components/IntroAbout";
import IntroContact from "../components/IntroContact";
import Welcome from "../components/Welcome";

const Home = () => {
  useEffect(() => {
    document.title = "La Chocolaterie du Haut Clocher | Accueil";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Welcome />
      <IntroAbout />
      <Boutique />
      <IntroContact />
      <Footer />
    </>
  );
};

export default Home;
