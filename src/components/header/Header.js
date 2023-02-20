import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="h-24 w-full px-6 flex flex-row-reverse md:flex-row items-center justify-between shadow-zinc-200 shadow-sm fixed bg-white z-50">
      <Link to="/">
        <img src="./images/logo-01.svg" alt="logo" className="w-20" />
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
