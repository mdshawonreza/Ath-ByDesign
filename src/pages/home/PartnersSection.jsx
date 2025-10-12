import React from "react";
import Image1 from "../../assets/pexels-pixabay-290416.jpg";
import Image2 from "../../assets/pexels-willpicturethis-1954524.jpg";


const PartnersSection = () => {
  return (
    <div >
      <section className="bg-black relative h-[110vh]">
        <div className="py-4 px-2 sm:py-4 lg:px-6 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">

            {/* Left Big Image */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-full flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden  flex-grow h-full"
              >
                {/* Background Image */}
                <img
                  src={Image1}
                  alt="Athlete Training"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Cinematic Black Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/95 transition-all duration-700"></div>

                {/* Glass Effect Text Box */}
                <div
                  className="absolute bottom-28 left-1/2 -translate-x-1/2 text-center"
                >
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg ">
                    Lorem, ipsum dolor.

                  </h3>
                  <p className="text-orange-500 text-sm md:text-base mt-1 italic ">
                    Strength. Passion. Legacy.
                  </p>
                </div>
              </a>
            </div>


            {/* Right Side Grid */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 flex flex-col gap-4 h-full">
              <div className="grid grid-cols-1 gap-4 flex-grow h-1/2">
                {/* Top  Image */}

                <div className="relative flex flex-col overflow-hidden  flex-1 w-full h-full ">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://www.youtube.com/embed/b5HtjqVjTqo?autoplay=1&mute=1&loop=1&controls=0&playlist=b5HtjqVjTqo&playsinline=1"
                    title="LeBron Video"
                    allow="autoplay; fullscreen"
                  ></iframe>
                </div>
              </div>



              {/* Bottom Two Small Images */}
              <div className="grid grid-cols-1 gap-4 flex-grow h-1/2">


                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden  h-full"
                >
                  <img
                    src={Image2}
                    alt="Vodka"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  {/* <h3 className="z-10 text-2xl md:text-3xl font-medium text-white absolute top-0 left-0 p-4">
              Vodka
            </h3> */}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default PartnersSection;
