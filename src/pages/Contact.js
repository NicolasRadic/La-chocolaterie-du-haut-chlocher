import React, { useEffect } from "react";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Map from "../components/Map";
import TitlePage from "../components/TitlePage";

const Contact = () => {
  useEffect(() => {
    document.title = "La Chocolaterie du Haut Clocher | Contact";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <TitlePage title={"Contactez nous"} />
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center max-w-screen-2xl ">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
