import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgb(197,157,95)] text-white">
      <div className="py-10 flex flex-col items-center md:flex-row justify-center gap-8">
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/chocolaterieduhautclocher"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./logo/facebook.svg"
              alt="facebook"
              className="text-white w-6"
            />
          </a>
          <a
            href="https://www.instagram.com/lachocolaterieduhautclocher/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./logo/instagram.svg"
              alt="instagram"
              className="text-white w-6"
            />
          </a>
          <a
            href="https://www.tiktok.com/@vincent.chocolatier"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./logo/tiktok.svg"
              alt="tiktok"
              className="text-white w-6"
            />
          </a>
        </div>
        <div className="hidden md:block">|</div>
        <p>Chaussée de Hannut 364, Bierset</p>
        <p>contact@LCDHC.be</p>
        <p>04 250 21 13</p>
      </div>
    </div>
  );
};

export default Footer;
