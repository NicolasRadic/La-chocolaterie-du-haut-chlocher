import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const changeMenuState = () => setMenuState(!menuState);
  const closeMenu = () => setMenuState(false);

  useEffect(() => {
    function handleWindowResize() {
      window.innerWidth > 768 && closeMenu();
    }
    window.addEventListener("resize", handleWindowResize);
  });

  const LinksActive =
    "absolute z-50 flex flex-col items-center gap-8 md:hidden right-0 w-full top-24 py-8 bg-stone-50 shadow";
  const LinksInactive = "hidden md:flex md:items-center md:gap-8";

  return (
    <div className="navbar">
      <nav>
        <div className="md:hidden" onClick={changeMenuState}>
          {menuState ? (
            <XMarkIcon className="w-12" />
          ) : (
            <Bars3Icon className="w-12" />
          )}
        </div>
        <ul className={menuState ? LinksActive : LinksInactive}>
          <li className=" text-center uppercase">
            <NavLink
              to="/"
              className={(nav) =>
                nav.isActive ? " text-[rgb(191,112,37)] p-1" : "p-1"
              }
            >
              accueil
            </NavLink>
          </li>
          <li className=" text-center uppercase">
            <NavLink
              to="/about"
              className={(nav) =>
                nav.isActive ? "text-[rgb(191,112,37)] p-1" : "p-1"
              }
            >
              A PROPOS
            </NavLink>
          </li>
          <li className=" text-center uppercase">
            <NavLink
              to="/b2b"
              className={(nav) =>
                nav.isActive ? "text-[rgb(191,112,37)] p-1" : "p-1"
              }
            >
              Cadeaux d'affaires
            </NavLink>
          </li>
          <li className=" text-center uppercase">
            <NavLink
              to="/galery"
              className={(nav) =>
                nav.isActive ? "text-[rgb(191,112,37)] p-1" : "p-1"
              }
            >
              GALERIE
            </NavLink>
          </li>
          <li className=" text-center uppercase">
            <NavLink
              to="/contact"
              className={(nav) =>
                nav.isActive ? "text-[rgb(191,112,37)] p-1" : "p-1"
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <a
              href="https://lachocolaterieduhautclocher.myshopify.com/"
              target="_blank"
              rel="noreferrer"
              className="py-4 px-6 text-center uppercase bg-[rgb(197,157,95)] text-white"
            >
              {" "}
              Boutique
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
