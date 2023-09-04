import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import IceText from "../components/ice/IceText";

const Ice = () => {
  return (
    <>
      <Header />
      <div
        className="flex justify-center
      py-24"
      >
        <div className="flex flex-col w-full lg:flex-row items-center lg:items-start lg:justify-center max-w-screen-2xl ">
          <IceText />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ice;
