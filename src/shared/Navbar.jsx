
// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { Facebook, Twitter, Instagram } from "lucide-react";
// import navLogo from '../../src/assets/AthleteByDesign-White_230x.avif'
// import { motion, AnimatePresence } from 'framer-motion';
// import { NavLink } from 'react-router-dom';
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const menuContainer = {
//         hidden: {},
//         show: {
//             transition: {
//                 staggerChildren: 0.1, // delay between each child
//                 delayChildren: 0.2,
//             },
//         },
//     };

//     const menuItem = {
//         hidden: { opacity: 0, y: 20 },
//         show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
//     };
//     const menuItems = [
//         { label: "NIL Agency", href: "#nilAgency" },
//         { label: "Nutrition", href: "/nutrition" },
//         { label: "Combine Events", href: "/combine-events" },
//         { label: "Media", href: "/media" },
//         { label: "AI Tech", href: "/ai-tech" },
//         { label: "Venture Capital Group", href: "/vc-group" },
//         { label: "Apparel", href: "/apparel" },
//     ];
//     if (location.pathname !== "/") {
//         menuItems.unshift({ label: "Home", href: "/" });
//     }

//     return (

//         <div className="bg-black z-20 fixed bg-opacity-70 w-full">
//             <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//                 <div className="relative  grid items-center grid-cols-2 lg:grid-cols-3">
//                     <div className=" ">
//                         <button
//                             aria-label="Open Menu"
//                             title="Open Menu"
//                             class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
//                             onClick={() => setIsMenuOpen(true)}
//                         >
//                             <svg className="w-6 md:w-8 text-white hover:text-[#fbaf3f]" viewBox="0 0 24 24">
//                                 <path
//                                     fill="currentColor"
//                                     d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                                 />
//                                 <path
//                                     fill="currentColor"
//                                     d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                                 />
//                                 <path
//                                     fill="currentColor"
//                                     d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                                 />
//                             </svg>
//                         </button>
//                         <AnimatePresence>
//                             {isMenuOpen && (
//                                 <motion.div
//                                     key="overlay-menu"
//                                     initial={{ opacity: 0, y: -40, scale: 0.95 }}
//                                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                                     exit={{ opacity: 0, y: -40, scale: 0.95 }}
//                                     transition={{ duration: 0.4, ease: 'easeInOut' }}
//                                     className="absolute top-0 left-0 w-full z-50"
//                                 >
//                                     <div className="p-5 bg-black bg-opacity-85 backdrop-blur-md rounded shadow-sm min-h-screen min-w-screen border border-gray-700">
//                                         {/* Close Button */}
//                                         <div className="flex items-center justify-start mb-6">
//                                             <button
//                                                 aria-label="Close Menu"
//                                                 title="Close Menu"
//                                                 className="p-2 transition duration-300 rounded-full hover:bg-gray-800 focus:outline-none focus:shadow-outline"
//                                                 onClick={() => setIsMenuOpen(false)}
//                                             >
//                                                 <svg
//                                                     className="w-6 h-6 text-white hover:text-[#fbaf3f] transition-all duration-200"
//                                                     viewBox="0 0 24 24"
//                                                 >
//                                                     <path
//                                                         fill="currentColor"
//                                                         d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3 6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </div>

//                                         {/* Navigation with animated items */}
//                                         <motion.ul
//                                             className="space-y-4 text-center"
//                                             variants={menuContainer}
//                                             initial="hidden"
//                                             animate="show"
//                                         >
//                                             <motion.li variants={menuItem} className="nav-logo flex justify-center -mt-2 mb-8">
//                                                 <a href="/">
//                                                     <img
//                                                         src={navLogo}
//                                                         alt="Logo"
//                                                         className="w-24 md:w-28 lg:w-32"
//                                                     />
//                                                 </a>
//                                             </motion.li>
//                                             {menuItems.map(({ label, href }, index) => (
//                                                 <motion.li key={index} variants={menuItem}>
//                                                     {href.startsWith("#") ? (
//                                                         // For section scroll (same page)
//                                                         <a
//                                                             href={href}
//                                                             className="inline-flex items-center justify-center h-7 px-6 tracking-wide md:text-2xl font-medium transition duration-200 rounded shadow-md text-white hover:text-[#fbaf3f]"
//                                                             onClick={() => setIsMenuOpen(false)}
//                                                         >
//                                                             {label}
//                                                         </a>
//                                                     ) : (
//                                                         // For routes (using react-router-dom)
//                                                         <NavLink
//                                                             to={href}
//                                                             className={({ isActive }) =>
//                                                                 `inline-flex items-center justify-center h-7 px-6 tracking-wide md:text-2xl font-medium transition duration-200 rounded shadow-md 
//           ${isActive ? "text-[#fbaf3f]" : "text-white hover:text-[#fbaf3f]"}`
//                                                             }
//                                                             onClick={() => setIsMenuOpen(false)}
//                                                         >
//                                                             {label}
//                                                         </NavLink>
//                                                     )}
//                                                 </motion.li>
//                                             ))}
//                                             < motion.li
//                                                 variants={menuItem}
//                                                 className="flex justify-center space-x-8 pt-8 text-white"
//                                             >
//                                                 <a
//                                                     href="https://www.facebook.com"
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="hover:text-[#fbaf3f] transition-colors duration-300"
//                                                 >
//                                                     <Facebook size={28} /> {/* size adjust as needed */}
//                                                 </a>
//                                                 <a
//                                                     href="https://twitter.com"
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="hover:text-[#fbaf3f] transition-colors duration-300"
//                                                 >
//                                                     <Twitter size={28} />
//                                                 </a>
//                                                 <a
//                                                     href="https://www.instagram.com"
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="hover:text-[#fbaf3f] transition-colors duration-300"
//                                                 >
//                                                     <Instagram size={28} />
//                                                 </a>
//                                             </motion.li>
//                                         </motion.ul>
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                     <a
//                         href="/"
//                         aria-label="Company"
//                         title="Company"
//                         className="inline-flex items-center lg:mx-auto"
//                     >
//                         <div className='flex -ml-10 md:-ml-11 lg:ml-0 justify-center items-center w-20 md:w-24 lg:w-24'>
//                             <img src={navLogo} alt="" />
//                         </div>

//                     </a>



//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, X } from "lucide-react";
import navLogo from '../../src/assets/AthleteByDesign-White_230x.avif';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const menuItems = [
        { label: "NIL Agency", href: "#nilAgency" },
        { label: "About Us", href: "#aboutUs" },
        { label: "Nutrition", href: "/nutrition" },
        { label: "Youth Sports", href: "#youthSports" },
        { label: "Combine Events", href: "/combine-events" },
        { label: "Media", href: "/media" },
        { label: "AI Tech", href: "/ai-tech" },
        { label: "Venture Capital Group", href: "/vc-group" },
        { label: "Apparel", href: "/apparel" },
    ];

    if (location.pathname !== "/") {
        menuItems.unshift({ label: "Home", href: "/" });
    }

    // Function to handle scroll to section
   const handleSectionScroll = (href) => {
    setIsMenuOpen(false);

    if (href.startsWith("#")) {
        if (location.pathname !== "/") {
            // Navigate to home first
            navigate("/", { state: { scrollTo: href } });
        } else {
            // Already on home, scroll immediately
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    } else {
        navigate(href);
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
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="absolute top-0 left-0 w-full z-50"
                                >
                                    <div className="px-5 bg-black bg-opacity-85 backdrop-blur-md rounded shadow-sm min-h-screen min-w-screen border border-gray-700">
                                        {/* Close Button */}
                                        <div className="flex items-center justify-start mb-6">
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 transition duration-300 rounded-full hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <X className="w-6 h-6 text-white hover:text-[#fbaf3f]" />
                                            </button>
                                        </div>

                                        {/* Navigation */}
                                        <motion.ul
                                            className="space-y-4 text-center"
                                            variants={menuContainer}
                                            initial="hidden"
                                            animate="show"
                                        >
                                            <motion.li variants={menuItem} className="nav-logo flex justify-center -mt-2 mb-8">
                                                <a href="/">
                                                    <img src={navLogo} alt="Logo" className="w-24 md:w-28 lg:w-32" />
                                                </a>
                                            </motion.li>

                                            {menuItems.map(({ label, href }, index) => (
                                                <motion.li key={index} variants={menuItem}>
                                                    <button
                                                        onClick={() => handleSectionScroll(href)}
                                                        className="inline-flex items-center justify-center h-[26px] px-6 tracking-wide md:text-2xl font-medium transition duration-200 rounded shadow-md text-white hover:text-[#fbaf3f]"
                                                    >
                                                        {label}
                                                    </button>
                                                </motion.li>
                                            ))}

                                            {/* Social Icons */}
                                            <motion.li
                                                variants={menuItem}
                                                className="flex justify-center space-x-8 pt-6 text-white"
                                            >
                                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fbaf3f] transition-colors duration-300">
                                                    <Facebook size={28} />
                                                </a>
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fbaf3f] transition-colors duration-300">
                                                    <Twitter size={28} />
                                                </a>
                                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fbaf3f] transition-colors duration-300">
                                                    <Instagram size={28} />
                                                </a>
                                            </motion.li>
                                        </motion.ul>
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
