



import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';






import Image1 from "../../../src/assets/WhatsApp Image 2025-11-23 at 11.35.07 AM.jpeg";
import Image2 from "../../../src/assets/WhatsApp Image 2025-11-01 at 05.05.24_f50d4615.jpg";
import Image3 from "../../../src/assets/WhatsApp Image 2025-11-10 at 21.45.55_e7c46f66.jpg";
import Image4 from "../../../src/assets/WhatsApp Image 2025-11-13 at 22.09.17_b362cb11.jpg";
import Image5 from "../../../src/assets/football-american-football-runner-player-159515.webp";
import Image6 from "../../assets/WhatsApp Image 2025-11-13 at 22.42.31_9b0a70d2.jpg";
import Image7 from "../../../src/assets/WhatsApp Image 2025-11-13 at 22.45.30_5848c03d.jpg";
import Image8 from "../../assets/912.png";
// import Image9 from "../../assets/pexels-runffwpu-1555354.jpg";
import Image9 from "../../assets/WhatsApp Image 2025-11-13 at 22.53.34_23e118af.jpg";
import bolt from "../../assets/usain-bolt.webp";
import AboutSection from './AboutSection';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollHorizontalComponentsAbout = () => {
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
    <div id="aboutUs" className="overflow-hidden bg-black ">



      <div ref={containerRef} className="h-screen w-screen relative bg-black">
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
          className="absolute top-0  w-[180vh] left-0 md:w-screen min-h-screen flex items-center justify-center p-8 bg-cover bg-center"
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
              <p className="text-white font-bold tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-2">
                About
              </p>
              <h1 className="text-white font-semibold tracking-wider mt-4 flex flex-row items-center justify-center gap-4 text-center">
                <span className="text-4xl sm:text-6xl md:text-7xl ">
                  {/* AthleteX Journey */}
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent "> Athlete </span>By Design
                </span>
                {/* <span className="block w-[200px] md:w-[500px] h-[2px] bg-gray-300 -mr-64"></span> */}
              </h1>
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
          <div className="absolute top-28 left-14 md:left-4 text-2xl md:text-3xl font-semibold drop-shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            AC Green <br />  Bryant Burton <br />  Jermaine O'Neal
          </div>

        </motion.div>

        { /* Section 4 -  */}
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


              <div className="grid grid-cols-3 lg:grid-cols-3 justify-between items-center">


                <div className='flex flex-col h-full '>
                  <div className='h-1/2'>

                  </div>
                  <div className='border-t-2 border-white h-1/2 p-6'>

                    <div className=" mb-4 ">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent -mr-2 ">Athlete By Design</h2>
                      {/* <p className="text-gray-300 max-w-md">
                        AthleteX Studio began with a simple goal — to empower athletes with the tools,
                        branding, and technology they need to rise above the competition.
                      </p> */}
                      <p >
                        <span className="font-semibold text-orange-600 "></span>  (“ABD”) is a dynamic, minority-owned sports enterprise that brings together every part of the modern athletic experience.
                      </p>
                    </div>

                  </div>
                </div>


                <div className="bg-black rounded-lg overflow-hidden shadow-lg">

                  <div className="relative ">
                    <img
                      src={Image4}
                      alt="Bike-A-Thon"
                      className="w-full  object-cover"
                    />
                    <div className="absolute top-16 right-6 text-2xl md:text-4xl font-bold drop-shadow-lg bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      Cole Ropiky

                      <br />
                    </div>

                    {/* <p>Here need a Image</p> */}
                  </div>


                </div>

                <div className='flex flex-col h-full'>
                  <div className='h-1/2'></div>
                  <div className="p-6 border-t-2 border-white h-1/2">

                    {/* <p className="text-gray-400 text-sm mb-1">2019</p> */}
                    {/* <h3 className="text-2xl font-semibold mb-2">The First Step</h3> */}
                    <p className="text-gray-300 leading-relaxed">
                      Athlete By Design is located in Los Angeles, CA and is led by a seasoned team of entrepreneurs, athletes, and creatives with deep ties to the sports, apparel,
                      media, and tech industries.
                    </p>
                  </div>

                </div>


              </div>

            </div>
          </section>
        </motion.div>

        {/* Section 5 - Contact */}
        <motion.div
          ref={addToRefs}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="absolute top-0 left-0  h-screen flex  justify-between bg-black -ml-1 -mr-2"
        >
          <div className="flex  gap-16  ">

            {/* <div className="flex justify-start">
              <div className='flex-1 mt-28 md:mt-0'>
                <img
                  src={Image4}
                  alt="Here need a Image"
                  className=" shadow-lg w-[500px] md:w-[500px]"
                />
                
              </div>

            </div> */}


            <div className="flex justify-start items-end">
              <div className='flex flex-1 mb-28 md:mb-0'>
                <img
                  src={Image5}
                  alt="Left Image"
                  className=" shadow-lg"
                />
              </div>

            </div>

          </div>

        </motion.div>

        { /* Section 6 -  */}
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
                      {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Innovating Athlete Performance</h2> */}
                      <p className="text-gray-300 max-w-md">
                        We specialize in NIL monetization, sports media, and live events, while also advancing athlete performance through cutting-edge tools like our AI
                        powered training app and motion capture systems.
                      </p>
                    </div>

                  </div>
                </div>





              </div>

            </div>
          </section>
        </motion.div>
        {/* Section 7 */}
        <motion.div
          ref={addToRefs}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="absolute top-0 left-0   md:w-[400px]  h-screen flex items-center justify-between bg-black"
        >
          <div className=" flex justify-center items-center w-full">

            <img
              src={Image6}
              alt="Left Image"
              className=" shadow-lg w-[400px]"
            />
            <div className="absolute md:top-14 top-36 md:right-1 right-4 text-xl md:text-xl font-bold drop-shadow-lg bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Nick Firmino

              <br />
            </div>


          </div>

        </motion.div>


        { /* Section 8 -  */}
        <motion.div
          ref={addToRefs}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="absolute top-0 left-0 w-[130%] md:w-[50%] min-h-screen flex items-center bg-black "
        >
          <section className=" text-white py-16 w-full">
            <div className=" ">




              <div className="grid grid-cols-1  items-center bg">


                <div className='flex flex-col h-full '>
                  <div className='h-1/2'>

                  </div>
                  <div className='border-t-2 border-white h-1/2 p-6'>

                    <div className=" mb-4 w-full md:w-[580px]">
                      {/* <p className="text-gray-400 text-sm mb-1">2021</p> */}
                      {/* <h3 className="text-2xl font-semibold mb-2">Global Partnerships</h3> */}
                      <p className="text-gray-300 leading-relaxed">
                        Our brand extends into athletic apparel and functional nutrition products, creating  a complete ecosystem that supports athletes on and off the field.
                      </p>
                    </div>

                  </div>
                </div>





              </div>

            </div>
          </section>
        </motion.div>

        {/* Section 9 */}
        <motion.div
          ref={addToRefs}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="absolute top-0 left-0   h-screen flex  justify-between bg-black"
        >
          <div className="flex  item-center relative ">

            <img
              src={Image7}
              alt="Left Image"
              className=" shadow-lg"
            />
            {/* <p>Need a Image</p> */}
            {/* <div className='absolute w-72 md:w-[465px] bottom-0 -right-14 md:-right-52 hidden md:flex'>
              <img
                src={Image8}
                alt="Left Image"
                className=" shadow-lg"
              />

            </div> */}
            <div className="absolute top-10 left-6 text-2xl md:text-2xl font-semibold drop-shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Austin Ramsey <br />
              Rahsul Faison
            </div>



          </div>

        </motion.div>




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


              <div className="">


                <div className='flex flex-col h-full '>
                  <div className='h-1/2'>

                  </div>
                  <div className='border-t-2 border-white h-1/2 p-6'>

                    <div className=" mb-4 ">
                      {/* <h2 className="text-3xl md:text-4xl font-bold mb-4"> Athlete By Design </h2> */}
                      <p className="text-gray-300 max-w-md">
                        We empower athletes at every stage of their journey while
                        building long-term enterprise value across multiple growth markets.
                      </p>
                    </div>

                  </div>
                </div>





                


              </div>

            </div>
          </section>
        </motion.div>


        {/* Section 13 */}
        <motion.div
          ref={addToRefs}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="absolute top-0 left-0 w-[100vh]  md:w-[50%]  h-screen flex items-center justify-between bg-black"
        >
          <div className=" flex items-center w-full">

            <img
              src={Image3}
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
                      {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">We continue to push the limits </h2> */}
                      <p className="text-gray-300 max-w-md">
                        Athletes don't become Elite Athletes without training
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
          className="absolute top-0 left-0 w-[170vh] md:w-screen min-h-screen flex items-center justify-center p-8 bg-cover bg-center bg-black"
          style={{ backgroundImage: `url(${Image9})` }}
        >
          {/* Top Left Corner Text */}
          <div className="absolute top-48 left-32  text-2xl md:text-4xl font-semibold drop-shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            India Green  <br />   Michelle Freeman
          </div>
        </motion.div>




      </div>
    </div>
  );
};

export default ScrollHorizontalComponentsAbout;

