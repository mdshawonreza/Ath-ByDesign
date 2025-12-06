


import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';



import Image1 from "../../../src/assets/Gemini_Generated_Image_92w0b92w0b92w0b9.png";
import Image2 from "../../../src/assets/WhatsApp Image 2025-11-01 at 05.06.01_012baf27.jpg";
import Image3 from "../../../src/assets/WhatsApp Image 2025-11-01 at 05.22.37_c519c70e.jpg";
import Image4 from "../../../src/assets/pexels-zakaria-2827400.jpg";
import Image5 from "../../../src/assets/football-american-football-runner-player-159515.webp";
import Image6 from "../../assets/Black and Yellow Modern Gym Instagram Post.jpg";
import Image7 from "../../assets/alonso-reyes-0HlI76m4jxU-unsplash.jpg";
import Image8 from "../../assets/pexels-victorfreitas-841130.jpg";
import Image9 from "../../assets/Green Modern Workout Quotes Instagram Post.jpg";
import Image10 from "../../assets/Gemini_Generated_Image_w7zm8lw7zm8lw7zm.png";

import video1 from "../../assets/WhatsApp Video 2025-11-10 at 01.20.20_ed78cdf5.mp4";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const ScrollHorizontalComponentsNILAgency = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% স্ক্রিনে দেখালে ট্রিগার হবে
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();   // স্ক্রিনে হলে ভিডিও চালাবে
        videoRef.current.muted = false; // সাউন্ড চালু হবে
      } else {
        videoRef.current.pause();  // স্ক্রিনে না থাকলে ভিডিও পজ হবে
        videoRef.current.muted = true;
      }
    }
  }, [isInView]);
  // const tiles = [
  //   { bg: "bg-white", img: logo1 },
  //   { bg: "bg-green-800", img: logo2 },
  //   { bg: "bg-gray-800", img: logo3 },
  //   { bg: "bg-black", img: logo4 },
  //   { bg: "bg-blue-600", img: logo5 },
  // ];
  const containerRef = useRef(null);
  const componentsRef = useRef([]);
  const [progress, setProgress] = useState(0);

  const addToRefs = (el) => {
    if (el && !componentsRef.current.includes(el)) {
      componentsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current || componentsRef.current.length === 0) return;

    const container = containerRef.current;
    const components = componentsRef.current;

    // Calculate each section's width
    const sectionWidths = components.map(sec => sec.offsetWidth);
    const totalWidth = sectionWidths.reduce((a, b) => a + b, 0) - container.offsetWidth;

    // Set initial x positions
    let accumulated = 0;
    gsap.set(components, {
      x: (i) => {
        const pos = accumulated;
        accumulated += sectionWidths[i];
        return pos;
      },
    });

    // Horizontal scroll animation
    const animation = gsap.to(components, {
      x: (i) => `-=${totalWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.3,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const CTAButton = ({ children, className }) => (
    <button
      className={`px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );

  return (

    <div>
      <div className="overflow-hidden bg-black">


        <div ref={containerRef} className="h-screen w-screen relative">
          <div className="absolute top-10 left-0 w-full h-1 z-[100] flex justify-center ">

            <div className="absolute top-0 left-0 w-full h-1 z-[100] flex justify-center">

              <div className="h-1 bg-gray-700 w-11/12 lg:w-[700px]">
                <div
                  className="h-1.5 -mt-[1px] bg-gray-400 rounded-full"
                  style={{ width: `${progress * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          {/* Section 1 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            ref={addToRefs}
            className="absolute top-0  w-[130vh] left-0 md:w-screen min-h-screen flex items-center justify-center p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <div></div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            ref={addToRefs}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            className="absolute top-0 left-0 w-[80vh] md:w-[150vh] min-h-screen flex items-center justify-center bg-[#181818]"
          >
            <section className="w-full h-screen flex items-center justify-center bg-black">
              <div className="px-4">
                {/* <p className="text-white font-bold uppercase tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  need a title

                </p> */}
                <div className="text-white font-semibold tracking-wider mt-4 flex flex-row items-center justify-center gap-4 ">
                  <div className='fllex flex-col '>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl ">
                      WORK IT!

                    </h1>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl py-6 ">
                      HONE IT!



                    </h1>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl ">
                      BRAND IT!

                    </h1>
                  </div>
                  <span className="block w-[200px] md:w-[500px] h-[2px] bg-gray-300 -mr-64"></span>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            ref={addToRefs}
            className="relative h-full w-[120vh] md:w-[70%] flex flex-col lg:flex-row items-center justify-between bg-cover bg-center"
            style={{ backgroundImage: `url(${Image2})` }}
          >
            <div className="absolute top-28 left-16 text-2xl md:text-4xl font-bold drop-shadow-lg bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Karece Hoyt
              <br />  Jordan Deck
            </div>
          </motion.div>
          
          
          <motion.div
            ref={addToRefs}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            className="absolute top-0 left-0 w-[100%] md:w-[30%] min-h-screen flex items-center bg-black md:bg-black/90 md:backdrop-blur-sm "
          >
            <section className=" text-white py-16 w-full">
              <div className=" ">




                <div className="grid grid-cols-1  items-center bg">


                  <div className='flex flex-col h-full '>
                    <div className='h-1/2'>

                    </div>
                    <div className='border-t-2 border-white h-1/2 p-6'>

                      <div className=" mb-4 ">
                        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                        <p className="text-gray-300 max-w-md">
                          The change the world began as he established The LeBron James Family Foundation.
                        </p> */}
                        <p className="text-gray-300 ">
                          Premium Brand Positioning
                        </p>
                      </div>

                    </div>
                  </div>





                </div>

              </div>
            </section>
          </motion.div>
          <motion.div
            ref={addToRefs}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="absolute top-0 left-0 w-[100vh] bg-black  md:w-[50%]  h-screen flex items-center justify-between "
          >

            <div className=" flex items-center w-full">

              <img
                src={Image3}
                alt="Left Image"
                className=" shadow-lg"
              />




            </div>

          </motion.div>



         


         


          {/* Section 9 */}
          {/* <motion.div
            ref={addToRefs}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="absolute top-0 left-0 w-[130vh] md:w-[65%]  h-screen flex  justify-between bg-black"
          >
            <div className="flex relative ">

              <img
                src={Image8}
                alt="Left Image"
                className=" shadow-lg"
              />
             



            </div>

          </motion.div> */}
           <motion.div
                    ref={addToRefs}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                    className="absolute top-0  left-0   min-h-screen flex items-center justify-center bg-black"
                  >
                    <section className="bg-black text-white  w-[130vh] md:w-full">
                      <div className="md:max-w-7xl  mx-auto ">
          
          
                        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between items-center">
          
          
                          <div className='flex flex-col h-full '>
                            <div className='h-2/5 mt-[37px] md:-mt-[8.5px]'>
          
                            </div>
                            <div className='border-t-2 border-white h-1/2 p-6'>
          
                              <div className=" mb-4 ">
                                {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2> */}
                                <p className="text-gray-300 max-w-md">
                                 High Value Endorsements
                                </p>
                              </div>
          
                            </div>
                          </div>
          
                          <motion.div
                            className="relative w-full flex items-start justify-center bg-black"
                          >
                            <video
                              ref={videoRef} // <-- সরাসরি video element
                              src={video1}
                              className="w-full h-full object-cover"
                              loop
                              playsInline
                            />
                          </motion.div>
          
          
          
          
                          <div className='md:flex flex-col h-full hidden '>
                            <div className='h-2/5  md:-mt-[8.5px]'></div>
                            <div className="p-6 border-t-2 border-white h-1/2">
          
                              {/* <p className="text-gray-400 text-sm mb-1">2008</p>
                              <h3 className="text-2xl font-semibold mb-2">Bike-A-Thon</h3>
                              <p className="text-gray-300 leading-relaxed">
                                LeBron hosts his first annual Bike-a-thon, a family-friendly event bringing
                                the city and its youth together for a day of fun.
                              </p> */}
                            </div>
          
                          </div>
          
          
                        </div>
          
                      </div>
                    </section>
                  </motion.div>


          {/*  */}




          <motion.div
            ref={addToRefs}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="absolute top-0 left-0  bg-black    h-screen flex items-center justify-between "
          >

            <div className='flex flex-col h-full w-[80vh]'>
              <div className='h-1/2'></div>
              <div className="p-6 border-t-2 border-white h-1/2">

                {/* <p className="text-gray-400 text-sm mb-1">2008</p>
                      <h3 className="text-2xl font-semibold mb-2">Bike-A-Thon</h3>
                      <p className="text-gray-300 leading-relaxed">
                        LeBron hosts his first annual Bike-a-thon, a family-friendly event bringing
                        the city and its youth together for a day of fun.
                      </p> */}
                <p className="text-gray-300 max-w-md">
                  Media & Merchandising Deals
                </p>
              </div>

            </div>

          </motion.div>



          {/* Section 13 */}
          <motion.div
            ref={addToRefs}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="absolute top-0 left-0 w-[100vh] bg-black  md:w-[50%]  h-screen flex items-center justify-between "
          >

            <div className=" flex items-center w-full">

              <img
                src={Image9}
                alt="Left Image"
                className=" shadow-lg"
              />




            </div>

          </motion.div>





          <motion.div
            ref={addToRefs}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            className="absolute top-0 left-0 w-[130%] md:w-[50%] min-h-screen flex items-center bg-black md:bg-black/90 md:backdrop-blur-sm "
          >
            <section className=" text-white py-16 w-full">
              <div className=" ">




                <div className="grid grid-cols-1  items-center bg">


                  <div className='flex flex-col h-full '>
                    <div className='h-1/2'>

                    </div>
                    <div className='border-t-2 border-white h-1/2 p-6'>

                      <div className=" mb-4 ">
                        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                        <p className="text-gray-300 max-w-md">
                          The change the world began as he established The LeBron James Family Foundation.
                        </p> */}
                        <p className="text-gray-300 ">
                          Legal, Financial & Personal Guidance
                        </p>
                      </div>

                    </div>
                  </div>





                </div>

              </div>
            </section>
          </motion.div>

          { /* Section 15 -  */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            ref={addToRefs}
            className="absolute top-0 left-0 w-[130vh] md:w-screen min-h-screen flex items-center justify-center p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${Image10})` }}
          >
          </motion.div>



        </div>
      </div>

    </div>

  );
};

export default ScrollHorizontalComponentsNILAgency;
