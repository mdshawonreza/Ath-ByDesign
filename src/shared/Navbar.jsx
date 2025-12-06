import React, { useState } from 'react';
import { Facebook, Instagram, X } from "lucide-react";
import navLogo from '../../src/assets/AthleteByDesign-White_230x.avif';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaTiktok, FaYoutube } from 'react-icons/fa';
import brandlogo1 from '../../src/assets/Screenshot 2025-11-21 202056.png';
import brandlogo2 from '../../src/assets/Screenshot 2025-11-21 202119.png';
import brandlogo3 from '../../src/assets/Screenshot 2025-11-21 202133.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ...animations stay the same
   const menuContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const menuItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  // Remove "Contact Us" from this list
  const menuItems = [
    { label: "About Us", href: "#aboutUs" },
    { label: "NIL Agency", href: "/nil-Agency" },
    { label: "Nutrition", href: "/nutrition" },
    { label: "Youth Sports", href: "/youth-Sports" },
    { label: "Combine Events", href: "/combine-events" },
    { label: "Media", href: "/media" },
    { label: "AI Tech", href: "/ai-tech" },
    { label: "Venture Capital Group", href: "/vc-group" },
    // { label: "Apparel", href: "/apparel" },
    // { label: "Apparel", href: "https://athletebydesign.myshopify.com/" },
  ];

  if (location.pathname !== "/") {
    menuItems.unshift({ label: "Home", href: "/" });
  }

  const handleSectionScroll = (href) => {
    setIsMenuOpen(false);

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
    <div className="bg-black z-20 fixed bg-opacity-70 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
          <div>
            {/* Hamburger Menu Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-6 md:w-8 text-white hover:text-[#fbaf3f]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
              </svg>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  key="overlay-menu"
                  initial={{ opacity: 0, y: -40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed inset-0 z-50"
                >
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 text-white hover:text-orange-400 transition pointer-events-auto z-[999]"
                  >
                    <X size={34} />
                  </button>

                  <div className="h-[100vh] w-full bg-black/85 backdrop-blur-md border border-gray-700 grid grid-rows-[auto_1fr_auto]">

                    {/* TOP LOGO */}
                    <div className="md:pt-5 flex justify-center pt-10">
                      <img src={navLogo} alt="Logo" className="w-20 md:w-24" />
                    </div>

                    {/* CENTERED MENU */}
                    <div className="flex flex-col justify-center items-center overflow-hidden">
                      <motion.ul
                        className="max-h-[65vh] overflow-hidden flex flex-col items-center justify-center space-y-3 md:space-y-1 my-2"
                        variants={menuContainer}
                        initial="hidden"
                        animate="show"
                      >
                        {menuItems.map((item, index) => (
                          <motion.li key={index} variants={menuItem}>
                            <button
                              onClick={() => handleSectionScroll(item.href)}
                              className="text-white text-lg leading-tight hover:text-orange-400 transition text-center"
                            >
                              {item.label}
                            </button>
                          </motion.li>
                        ))}

                        {/* Apparel */}
                        <motion.li variants={menuItem}>
                          <a
                            href="https://athletebydesign.myshopify.com/"
                            target="_blank"
                            className="text-white text-lg leading-tight hover:text-orange-400 text-center"
                            rel="noreferrer"
                          >
                            Apparel
                          </a>
                        </motion.li>

                        {/* Contact Us — ALWAYS LAST */}
                        <motion.li variants={menuItem}>
                          <button
                            onClick={() => handleSectionScroll("contactUs")}
                            className="text-white text-lg leading-tight hover:text-orange-400 transition text-center"
                          >
                            Contact Us
                          </button>
                        </motion.li>
                      </motion.ul>
                    </div>

                    {/* BOTTOM SOCIAL + BRAND LOGOS */}
                    <div className="pb-28 md:pb-6  flex flex-col items-center gap-4 ">
                      <div className="flex gap-6 text-white">
                        <a href="https://www.facebook.com/share/17QrkgMKpq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><Facebook size={26} /></a>
                        <a href="https://www.tiktok.com/@athletebydesign_?_t=ZT-90xkiLJsRrL&_r=1" target="_blank" rel="noopener noreferrer"  className="hover:text-orange-400"><FaTiktok size={26} /></a>
                        <a href="https://www.instagram.com/athletebydesign_?igsh=MWMwcndwbmZoY2hocw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400"><Instagram size={26} /></a>
                        <a  href="https://youtube.com/@athletebydesign?si=9iPDppGGZlnTtHXX" target="_blank" rel="noopener noreferrer"  className="hover:text-orange-400"><FaYoutube size={26} /></a>
                      </div>

                      <div className="flex gap-6 flex-wrap justify-center">
                        <img src={brandlogo1} className="w-28 md:w-44 object-contain" />
                        <img src={brandlogo2} className="w-28 md:w-52 object-contain" />
                        <img src={brandlogo3} className="w-24 md:w-32 object-contain" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Logo in center */}
          <a href="/" aria-label="Company" title="Company" className="inline-flex items-center lg:mx-auto">
            <div className='flex -ml-10 md:-ml-11 lg:ml-0 justify-center items-center w-20 md:w-24 lg:w-24'>
              <img src={navLogo} alt="Logo" />
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
