import React from "react";
import B2BContent from "../components/B2B/B2BContent";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import InProgress from "../components/InProgress";
// import TitlePage from "../components/TitlePage";

const B2B = () => {
  return (
    <div>
      <Header />
      {/* <TitlePage title={"B2B"} /> */}
      <B2BContent />
      <InProgress />
      <Footer />
    </div>
  );
};

export default B2B;
