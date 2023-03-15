import React, { useEffect } from "react";
import AboutHistory from "../components/about/AboutHistory";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

const About = () => {
  useEffect(() => {
    document.title = "La Chocolaterie du Haut Clocher | A Propos";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <AboutHistory />
      <Footer />
    </div>
  );
};

export default About;
