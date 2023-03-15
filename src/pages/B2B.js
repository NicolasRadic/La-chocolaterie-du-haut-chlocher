import React, { useEffect } from "react";
import B2BContent from "../components/B2B/B2BContent";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

const B2B = () => {
  useEffect(() => {
    document.title = "La Chocolaterie du Haut Clocher | B2B";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <B2BContent />
      <Footer />
    </div>
  );
};

export default B2B;
