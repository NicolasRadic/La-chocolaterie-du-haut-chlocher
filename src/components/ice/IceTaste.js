import React from "react";

const IceTaste = () => {
  return (
    <div className="flex  flex-col p-2 lg:pt-20 justify-start items-center  lg:w-1/2  lg:h-full ">
      <div className=" py-10 lg:py-4 text-center text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
        <h2>Voici nos saveurs du jour :</h2>
      </div>

      <img
        src="./images/ice/gouts_ardoise.png"
        alt="goûts glaces"
        className="h-5/6"
      />
    </div>
  );
};

export default IceTaste;
