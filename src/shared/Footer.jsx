import React from 'react';
import navLogo from '../../src/assets/AthleteByDesign-White_230x.avif'
import logo2 from '../../src/assets/AthleteByDesign-White_230x.avif'
import { useNavigate, useLocation } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSectionScroll = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href } });
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div class="relative  bg-black">
      {/* <span className="absolute top-[30%] left-1/2 -translate-x-1/2 text-[4rem] md:text-[5rem] lg:text-[5rem] font-extrabold text-gray-300 dark:text-gray-400 opacity-10 select-none pointer-events-none  text-center w-full">
        Athlete  By Design
      </span> */}
      <span className="absolute top-[35%] md:top-[8%] left-1/2 -translate-x-1/2 text-center w-full pointer-events-none select-none opacity-10">
        <img
          src={logo2}
          alt="Athlete By Design"
          className="mx-auto w-[200px] md:w-[250px] lg:w-[300px] object-contain"
        />
      </span>
      <svg class="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-black" preserveAspectRatio="none" viewBox="0 0 1440 54">
        <path fill="currentColor" d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"></path>
      </svg>
      <div class="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div class="md:max-w-md lg:col-span-2">
            <a href="/" class="inline-flex items-center">
              <div className='flex justify-center items-center w-20 md:w-24 lg:w-24'>
                <img src={navLogo} alt="" />
              </div>
            </a>
            <div class="mt-4 lg:max-w-sm">
              <p class="text-sm text-gray-300">
                Athlete By Design
                <br />
               Los Angeles,CA 90069


              </p>
              <p class="mt-4 text-sm text-gray-300">

              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-5">
            {/* Company */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Company</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => handleSectionScroll("#aboutUs")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionScroll("#contact")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Services</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => handleSectionScroll("/combine-events")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    Combine Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionScroll("/nil-agency")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    NIL Agency
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionScroll("/youth-sports")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    Youth Sports
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionScroll("/venture-capital-group")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    Venture Group
                  </button>
                </li>
              </ul>
            </div>

            {/* Media */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Media</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => handleSectionScroll("/")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    NEX GEN – NIL
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionScroll("/media")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    Sports Content
                  </button>
                </li>
                
              </ul>
            </div>

            {/* Technology */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Products</p>
              <ul className="mt-2 space-y-2">
                
                <li>
                  <button
                    onClick={() => handleSectionScroll("/apparel")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    Apparel
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionScroll("/nutrition")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                    Nutrition
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-orange-500">AI/AR Tech</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => handleSectionScroll("/ai-tech")}
                    className="text-gray-300 hover:text-orange-500"
                  >
                   ABD Training App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionScroll("/ai-tech")}
                    className="text-gray-300 hover:text-orange-500 md:-ml-8"
                  >
                  Motion Capture System
                  </button>
                </li>
                
              </ul>
            </div>
</div>
          </div>
          <div class="flex flex-col justify-center pt-5 pb-10 border-t border-gray-700 sm:flex-row ">
            <p class="text-sm text-gray-300">© Copyright 2025 AthleteByDesign. All rights reserved.</p>

          </div>
        </div>

      </div>

      );
};

      export default Footer;