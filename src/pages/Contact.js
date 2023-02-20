import React from "react";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Map from "../components/Map";
import TitlePage from "../components/TitlePage";

const Contact = () => {
  return (
    <div>
      <Header />
      <TitlePage title={"Contactez nous"} />
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
        <ContactForm />
        <ContactDetails />
      </div>
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
