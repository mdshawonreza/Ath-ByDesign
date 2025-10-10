import React from "react";
import logo1 from "../../assets/WEB_LJ_KD_SPHE_V1-removebg-preview.png";
import logo2 from "../../assets/WEB_LJ_KD_SPHE_V1-removebg-preview.png";
import logo3 from "../../assets/WEB_LJ_KD_SPHE_V1-removebg-preview.png";
import logo4 from "../../assets/WEB_LJ_KD_SPHE_V1-removebg-preview.png";
import logo5 from "../../assets/WEB_LJ_KD_SPHE_V1-removebg-preview.png";
const NILAgencyTiles = () => {
  const tiles = [
    { bg: "bg-white", img: logo1 },
    { bg: "bg-green-800", img: logo2 },
    { bg: "bg-gray-800", img: logo3 },
    { bg: "bg-black", img: logo4 },
    { bg: "bg-blue-600", img: logo5 },
  ];

  return (
    <section id="nilAgency" className="bg-black relative">
      <h1 className="text-white text-3xl  md:text-4xl font-semibold text-center py-10">Nil Agency</h1>
      <div className="w-full h-full flex flex-col  md:flex-row  overflow-hidden ">

        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`flex-1 relative flex items-center justify-center
             md:h-[450px] ${tile.bg} 
          transition-all duration-500 ease-in-out py-24 md:py-0`}
          >
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-500"></div>

            {/* Image/logo */}
            <img
              src={tile.img}
              alt={`tile-${index}`}
              className="relative max-w-[60%] max-h-[60%] object-contain transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>

  );
};

export default NILAgencyTiles;
