// // import React, { useEffect, useState } from 'react';
// // import Navbar from '../../shared/Navbar';
// // import banner from "../../assets/Gemini_Generated_Image_rm9wj5rm9wj5rm9w.png";
// // import { motion } from "framer-motion";
// // const Banner = () => {
// //     const [showNavbar, setShowNavbar] = useState(true);
// //     const [lastScrollY, setLastScrollY] = useState(0);

// //     // Handle scroll
// //     const handleScroll = () => {
// //         if (window.scrollY > lastScrollY) {
// //             // scrolling down
// //             setShowNavbar(false);
// //         } else {
// //             // scrolling up
// //             setShowNavbar(true);
// //         }
// //         setLastScrollY(window.scrollY);
// //     };

// //     useEffect(() => {
// //         window.addEventListener("scroll", handleScroll);
// //         return () => window.removeEventListener("scroll", handleScroll);
// //     }, [lastScrollY]);



// //     const sentence = {
// //         hidden: { opacity: 1 },
// //         visible: {
// //             opacity: 1,
// //             transition: {
// //                 delay: 0.2,
// //                 staggerChildren: 0.05,
// //             },
// //         },
// //     };

// //     const letter = {
// //         hidden: { opacity: 0, y: 30 },
// //         visible: { opacity: 1, y: 0 },
// //     };

// //     return (
// //         <div>
// //             <div>

// //                 <div className="relative h-screen bg-gray-900">
// //                     {/* Background Image with Parallax Effect */}
// //                     <div
// //                         className="absolute inset-0 bg-fixed bg-center bg-cover"
// //                         style={{ backgroundImage: `url(${banner})` }}
// //                     >
// //                         <div className="absolute inset-0 bg-gray-900 bg-opacity-0"></div>
// //                     </div>


// //                     {/* Navbar with scroll show/hide */}
// //                     <div
// //                         className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"
// //                             }`}
// //                     >
// //                         <Navbar />
// //                     </div>


// //                     {/* Centered Text */}
// //                     {/* <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
// //                         <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide drop-shadow-md animate-fade-in-up">
// //                             Welcome to Athlete <br />By Design
// //                         </h1>
// //                     </div> */}

// //                     <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center space-y-4 font-serif">
// //                         {/* Line 1 */}
// //                         <motion.h1
// //                             className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide drop-shadow-md flex flex-wrap justify-center"
// //                             variants={sentence}
// //                             initial="hidden"
// //                             animate="visible"
// //                         >
// //                             {"Welcome to Athlete".split("").map((char, index) => (
// //                                 <motion.span key={index} variants={letter}>
// //                                     {char === " " ? "\u00A0" : char}
// //                                 </motion.span>
// //                             ))}
// //                         </motion.h1>

// //                         {/* Line 2 */}
// //                         <motion.h1
// //                             className="text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide drop-shadow-md flex flex-wrap justify-center"
// //                             variants={sentence}
// //                             initial="hidden"
// //                             animate="visible"
// //                         >
// //                             {"By Design".split("").map((char, index) => (
// //                                 <motion.span key={index} variants={letter}>
// //                                     {char === " " ? "\u00A0" : char}
// //                                 </motion.span>
// //                             ))}
// //                         </motion.h1>
// //                     </div>

// //                 </div>


// //             </div>

// //         </div>
// //     );
// // };

// // export default Banner;

// import React, { useEffect, useState } from 'react';
// import Navbar from '../../shared/Navbar';
// import banner from "../../assets/banner.jpeg";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from 'lucide-react';
// import ParallaxZoomVideo from './ParallaxZoomVideo';

// const Banner = () => {
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Handle scroll for navbar show/hide
//   const handleScroll = () => {
//     if (window.scrollY > lastScrollY) {
//       setShowNavbar(false); // scroll down → hide
//     } else {
//       setShowNavbar(true);  // scroll up → show
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Text animation variants
//   const sentence = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delay: 0.2,
//         staggerChildren: 0.03, // faster stagger
//       },
//     },
//   };

//   const letter = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };
//   const CTAButton = ({ children, className }) => (
//     <button
//       className={`px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition ${className}`}
//     >
//       {children}
//     </button>
//   );

//   return (
//     <div>
//     <div className="relative w-full h-screen bg-gray-900">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-top md:bg-top sm:bg-center bg-fixed  "
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
//       </div>






//     </div>
//     <div>
//       <ParallaxZoomVideo></ParallaxZoomVideo>
//     </div>
//     </div>
//   );
// };

// export default Banner;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import banner from "../../assets/WhatsApp Image 2025-10-18 at 1.55.04 AM.jpeg";
import mainVideo from "../../assets/WhatsApp Video 2025-10-18 at 2.25.20 AM.mp4"
gsap.registerPlugin(ScrollTrigger);

const BannerWithParallaxVideo = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  // GSAP Scroll animation for video zoom
  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    gsap.fromTo(video, { scale: 0.6, y: 100, width: '60vw', height: '40vh' }, { scale: 1.2, y: 0, width: '100vw', height: '100vh', ease: 'power2.out', scrollTrigger: { trigger: container, start: 'top bottom', end: 'bottom top', scrub: true, }, });
  }, []);

  const handleVideoClick = () => {
    const iframe = videoRef.current;
    if (!iframe) return;
    iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    if (iframe.src.includes('controls=0')) iframe.src = iframe.src.replace('controls=0', 'controls=1');
  };

  return (
    <div className="relative w-full bg-black">
      {/* Banner Image */}
      <div className="relative z-10 w-full h-[120vh]  sm:h-[120vh]">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Parallax Video */}
      {/* <div
        ref={videoContainerRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <iframe
          ref={videoRef}
          onClick={handleVideoClick}
          className="
      fixed 
      top-0 left-1/2 transform -translate-x-1/2 
      sm:top-1/2 sm:-translate-y-1/2
      object-cover 
      w-[90vw] h-[30vh] 
      sm:w-[80vw] sm:h-[40vh] 
      md:w-[70vw] md:h-[50vh]
      z-0 cursor-pointer rounded-xl shadow-2xl 
    "
          src='https://www.youtube.com/embed/b5HtjqVjTqo?autoplay=1&mute=1&controls=0&loop=1&playlist=b5HtjqVjTqo&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1'
          // src={mainVideo}
          title="Sport Promo Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div> */}
        <div
        ref={videoContainerRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <video
          ref={videoRef}
          src={mainVideo}
          autoPlay
          muted
          loop
          playsInline
          className="
            fixed 
            top-0 left-1/2 transform -translate-x-1/2 
            sm:top-1/2 sm:-translate-y-1/2
            object-cover 
            w-[90vw] h-[30vh] 
            sm:w-[80vw] sm:h-[40vh] 
            md:w-[70vw] md:h-[50vh]
            z-0 cursor-pointer rounded-xl shadow-2xl 
          "
        />
      </div>

      <div className="relative flex z-10 w-full h-[120vh]  ">

      </div>
    </div>
  );
};

export default BannerWithParallaxVideo;

