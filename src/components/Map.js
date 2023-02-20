import React from "react";

const Map = () => {
  return (
    <div className="pt-8 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10118.724413051765!2d5.4506997!3d50.6516134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1dfe6d47ef74fddf!2sLa%20Chocolaterie%20du%20Haut%20Clocher!5e0!3m2!1sfr!2sbe!4v1676913823608!5m2!1sfr!2sbe"
        className="border-none w-full h-72"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map chocolaterie du Haut-Clocher"
      ></iframe>
    </div>
  );
};

export default Map;
