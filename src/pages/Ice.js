import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import IceTaste from "../components/ice/IceTaste";
import IceText from "../components/ice/IceText";

const Ice = () => {
  return (
    <>
      <Header />
      <div
        className="flex justify-center
      py-24"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center max-w-screen-2xl ">
          <IceText />
          <IceTaste />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ice;
