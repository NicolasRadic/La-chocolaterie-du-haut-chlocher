import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

const Galery = () => {
  const galeryImg = [4, 2, 3, 1, 7, 6, 5];

  return (
    <div>
      <Header />
      <div className="flex justify-center py-24">
        <div className="pt-20 max-w-screen-2xl">
          <div className="flex flex-col items-center pb-8">
            <h2 className="text-center text-3xl lg:text-5xl lg:tracking-wider font-playball font-bold">
              Galerie
            </h2>
            <img src="deco-title.png" alt="" className="pt-4" />
          </div>

          <div className="flex justify-center py-8">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fchocolaterieduhautclocher%2Fvideos%2F218140277718578%2F&show_text=false&width=560&t=0"
              width="560"
              height="314"
              style={{ border: "none", overflow: "hidden" }}
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="video_VV"
              className="w-80 h-48 md:w-[560px] md:h-[315px]"
            ></iframe>
          </div>

          <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
            {galeryImg.map((img) => (
              <img
                src={"./images/galery/galery-" + img + ".jpg"}
                alt="galerie"
                key={img}
                className="object-contain w-72 md:w-1/4  xl:w-96 xl:h-96 flex"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Galery;
