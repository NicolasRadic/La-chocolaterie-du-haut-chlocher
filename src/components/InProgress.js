import React from "react";
import { Link } from "react-router-dom";

const InProgress = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <h2 className="text-2xl font-bold">En construction</h2>
      <Link
        to="/"
        className="link-page font-semibold text-center text-xl w-44 pt-6 pb-8 md:pb-0 "
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default InProgress;
