import React from "react";

const TitlePage = ({ title }) => {
  return (
    <div className="pt-24">
      <div className="w-full h-32 flex justify-center items-center ">
        <div className="h-32 w-full absolute z-10  bg-black opacity-40"></div>
        <img
          src="./images/fond-title-contact.jpg"
          alt="fond title"
          className="w-full h-[305px] absolute left-0 -top-20 object-cover"
        />
        <h2 className="text-3xl md:text-5xl font-playball font-bold z-20 text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TitlePage;
