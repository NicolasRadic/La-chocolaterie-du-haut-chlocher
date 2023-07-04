import React from "react";

const IceTaste = () => {
  return (
    <div className="flex flex-col p-4 justify-center items-center lg:w-1/2 ">
      <div className=" py-4 text-center text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
        <h2>Voici nos saveurs du jour :</h2>
      </div>

      <img
        src="./images/ice/gouts_ardoise.png"
        alt="goûts glaces"
        className="max-h-screen"
      />
    </div>
  );
};

export default IceTaste;
