import React from "react";
import AboutHistory from "../components/about/AboutHistory";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
// import TitlePage from "../components/TitlePage";

const About = () => {
  return (
    <div>
      <Header />
      {/* <TitlePage title={"Qui sommes nous ?"} /> */}
      <AboutHistory />
      <Footer />
    </div>
  );
};

export default About;
