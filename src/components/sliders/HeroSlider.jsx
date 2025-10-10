import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import { displayMoney } from "../../helpers/utils";
import productsData from "../../data/productsData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HeroSlider = () => {
  const heroProducts = productsData.filter((item) => item.tag === "hero-product");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black overflow-hidden"
    >
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        loop={true}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {heroProducts.map((item, i) => {
          const { id, title, tagline, heroImage, finalPrice, originalPrice, path } = item;
          const newPrice = displayMoney(finalPrice);
          const oldPrice = displayMoney(originalPrice);

          // Background large faint text
          const bgTexts = ["Over Ear", "In Ear", "Over Ear"];
          const bgText = bgTexts[i] || "Headphones";

          return (
            <SwiperSlide key={id}>
              <div className="relative grid md:grid-cols-2 gap-10 items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20">
                {/* Faint large text background */}
                <span className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold text-gray-300 dark:text-gray-600 opacity-10 select-none pointer-events-none">
                  {bgText}
                </span>

                {/* Text section */}
                <div className="relative text-center md:text-left space-y-5 z-10">
                  <h3 className="text-base md:text-lg font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-widest">
                    {title}
                  </h3>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                    {tagline}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-teal-600 dark:text-orange-500">
                    {newPrice}{" "}
                    <small className="text-gray-400 dark:text-gray-500 text-base ml-1">
                      <del>{oldPrice}</del>
                    </small>
                  </h2>
                  <Link
                    to={`${path}${id}`}
                    className="inline-block mt-4 bg-teal-500 dark:bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-600 dark:hover:bg-orange-600 transition duration-300"
                  >
                    Shop Now
                  </Link>
                </div>

                {/* Image section */}
                <figure className="relative flex justify-center z-10">
                  <img
                    src={heroImage}
                    alt="product-img"
                    className="w-[80%] sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[60%] object-contain drop-shadow-xl"
                  />
                </figure>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
