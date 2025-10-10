import React from 'react';
import navLogo from '../../src/assets/AthleteByDesign-White_230x.avif'

export const Footer = () => {
  return (
    <div class="relative  bg-black">
      <span className="absolute top-[30%] left-1/2 -translate-x-1/2 text-[4rem] md:text-[5rem] lg:text-[5rem] font-extrabold text-gray-300 dark:text-gray-400 opacity-10 select-none pointer-events-none  text-center w-full">
        Athlete  By Design
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
                25108 Marguerite Pkwy,<br />
                Mission Viejo, CA 92692


              </p>
              <p class="mt-4 text-sm text-gray-300">

              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            {/* Column 1: Company */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Company</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/nil-agency" className="text-gray-300 hover:text-orange-500">NIL Agency</a></li>
                <li><a href="/venture-capital-group" className="text-gray-300 hover:text-orange-500">Venture Capital Group</a></li>
              </ul>
            </div>

            {/* Column 2: Products / Services */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Services</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/nutrition" className="text-gray-300 hover:text-orange-500">Nutrition</a></li>
                <li><a href="/youth-sports" className="text-gray-300 hover:text-orange-500">Youth Sports</a></li>
                <li><a href="/apparel" className="text-gray-300 hover:text-orange-500">Apparel</a></li>
              </ul>
            </div>

            {/* Column 3: Events / Media */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Media & Events</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/combine-events" className="text-gray-300 hover:text-orange-500">Combine Events</a></li>
                <li><a href="/media" className="text-gray-300 hover:text-orange-500">Media</a></li>
              </ul>
            </div>

            {/* Column 4: Technology */}
            <div>
              <p className="font-semibold tracking-wide text-orange-500">Technology</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/ai-tech" className="text-gray-300 hover:text-orange-500">AI Tech</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div class="flex flex-col justify-center pt-5 pb-10 border-t border-gray-700 sm:flex-row ">
          <p class="text-sm text-gray-400">© Copyright 2020 Lorem Inc. All rights reserved.</p>

        </div>
      </div>

    </div>

  );
};

export default Footer;