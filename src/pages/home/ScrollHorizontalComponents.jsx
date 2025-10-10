



import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import img1 from "../../assets/alonso-reyes-0HlI76m4jxU-unsplash.jpg";
import img2 from "../../assets/1234.png";
import img3 from "../../assets/912.png";
import mainAthleteImage from "../../assets/Gemini_Generated_Image_4r8a9s4r8a9s4r8a.png";
import overlayImage from "../../assets/licensed-image.jfif";
import nikeLogo from "../../assets/download.png";
import adidasLogo from "../../assets/images (1).png";
import playercvr1 from "../../assets/football-american-football-runner-player-159515.webp";
import stadiumImage from "../../assets/start-muscle-runner-stadium-wallpaper-preview.jpg";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollHorizontalComponents = () => {
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
          style={{ backgroundImage: `url(${stadiumImage})` }}
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
              <p className="text-white font-bold uppercase tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                The
              </p>
              <h1 className="text-white font-semibold tracking-wider mt-4 flex flex-row items-center justify-center gap-4 text-center">
                <span className="text-4xl sm:text-6xl md:text-7xl ">
                  PHILANTHROPIST
                </span>
                <span className="block w-[200px] md:w-[500px] h-[2px] bg-gray-300 -mr-64"></span>
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
          style={{ backgroundImage: `url(${mainAthleteImage})` }}
        >

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
          <section className="bg-black text-white py-16 w-[130vh] md:w-full">
            <div className="md:max-w-7xl  mx-auto ">


              <div className="grid grid-cols-3 lg:grid-cols-3 justify-between items-center">


                <div className='flex flex-col h-full '>
                  <div className='h-1/2'>

                  </div>
                  <div className='border-t-2 border-white h-1/2 p-6'>

                    <div className=" mb-4 ">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                      <p className="text-gray-300 max-w-md">
                        The change the world began as he established The LeBron James Family Foundation.
                      </p>
                    </div>

                  </div>
                </div>


                <div className="bg-black rounded-lg overflow-hidden shadow-lg">

                  <div className="relative ">
                    <img
                      src={stadiumImage}
                      alt="Bike-A-Thon"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>


                </div>

                <div className='flex flex-col h-full'>
                  <div className='h-1/2'></div>
                  <div className="p-6 border-t-2 border-white h-1/2">

                    <p className="text-gray-400 text-sm mb-1">2008</p>
                    <h3 className="text-2xl font-semibold mb-2">Bike-A-Thon</h3>
                    <p className="text-gray-300 leading-relaxed">
                      LeBron hosts his first annual Bike-a-thon, a family-friendly event bringing
                      the city and its youth together for a day of fun.
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
          className="absolute top-0 left-0 w-[130%] md:w-[45%] h-screen flex  justify-between bg-black -ml-1 -mr-2"
        >
          <div className="flex  gap-16  ">

            <div className="flex justify-start">
              <div className='flex-1 mt-28 md:mt-0'>
                <img
                  src={playercvr1}
                  alt="Left Image"
                  className=" shadow-lg"
                />
              </div>

            </div>


            <div className="flex justify-start items-end">
              <div className='flex flex-1 mb-28 md:mb-0'>
                <img
                  src={playercvr1}
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
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                      <p className="text-gray-300 max-w-md">
                        The change the world began as he established The LeBron James Family Foundation.
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
          className="absolute top-0 left-0 w-[100vh]  md:w-[50%]  h-screen flex items-center justify-between "
        >
          <div className=" flex items-center w-full">

            <img
              src={mainAthleteImage}
              alt="Left Image"
              className=" shadow-lg"
            />




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

                    <div className=" mb-4 ">
                      <p className="text-gray-400 text-sm mb-1">2008</p>
                      <h3 className="text-2xl font-semibold mb-2">Bike-A-Thon</h3>
                      <p className="text-gray-300 leading-relaxed">
                        LeBron hosts his first annual Bike-a-thon, a family-friendly event bringing
                        the city and its youth together for a day of fun.
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
          className="absolute top-0 left-0 w-[130vh] md:w-[51%]  h-screen flex  justify-between bg-black"
        >
          <div className="flex relative ">

            <img
              src={img1}
              alt="Left Image"
              className=" shadow-lg"
            />
            <div className='absolute w-72 bottom-0 -right-14'>
              <img
                src={mainAthleteImage}
                alt="Left Image"
                className=" shadow-lg"
              />

            </div>



          </div>

        </motion.div>

        { /* Section 10 -  */}
        {/* <motion.div
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

                    <div className=" mb-4 ">
                      <p className="text-gray-400 text-sm mb-1">2008</p>
                      <h3 className="text-2xl font-semibold mb-2">Bike-A-Thon</h3>
                      <p className="text-gray-300 leading-relaxed">
                        LeBron hosts his first annual Bike-a-thon, a family-friendly event bringing
                        the city and its youth together for a day of fun.
                      </p>
                    </div>

                  </div>
                </div>





              </div>

            </div>
          </section>
        </motion.div> */}

        {/* Section 11 - Contact */}
        {/* <motion.div
                ref={addToRefs}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
                className="absolute top-0 left-0 w-[130%] md:w-[45%]  h-screen flex  justify-between bg-black"
              >
                <div className="flex gap-16 ">
      
                 
                  <div className="flex w-1/2 flex-col gap-8 justify-start">
                    <div className='flex-1'>
                      <img
                        src={playercvr1}
                        alt="Left Image"
                        className=" shadow-lg"
                      />
                    </div>
                    <div className='flex-1 pl-8 -mr-8'>
                      <img
                        src={mainAthleteImage}
                        alt="Left Image"
                        className=" shadow-lg"
                      />
                    </div>
      
                  </div>
      
                 
                  <div className="flex w-1/2 flex-col gap-8 justify-start items-end ">
                    <div className='flex flex-1  -ml-8 justify-start'>
                      <img
                        src={mainAthleteImage}
                        alt="Left Image"
                        className=" shadow-lg"
                      />
                    </div>
                    <div className='flex flex-1 -mr-8 '>
                      <img
                        src={playercvr1}
                        alt="Left Image"
                        className=" shadow-lg"
                      />
                    </div>
                    
                  </div>
      
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
          <section className="bg-black text-white py-16 w-[130vh] md:w-full">
            <div className="md:max-w-7xl  mx-auto ">


              <div className="grid grid-cols-3 lg:grid-cols-3 justify-between items-center">


                <div className='flex flex-col h-full '>
                  <div className='h-1/2'>

                  </div>
                  <div className='border-t-2 border-white h-1/2 p-6'>

                    <div className=" mb-4 ">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                      <p className="text-gray-300 max-w-md">
                        The change the world began as he established The LeBron James Family Foundation.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="relative flex flex-col overflow-hidden rounded-lg flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px]">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://www.youtube.com/embed/b5HtjqVjTqo?autoplay=1&mute=1&loop=1&controls=0&playlist=b5HtjqVjTqo&playsinline=1"
                    title="LeBron Video"
                    allow="autoplay; fullscreen"
                  ></iframe>
                </div>




                <div className='flex flex-col h-full'>
                  <div className='h-1/2'></div>
                  <div className="p-6 border-t-2 border-white h-1/2">

                    <p className="text-gray-400 text-sm mb-1">2008</p>
                    <h3 className="text-2xl font-semibold mb-2">Bike-A-Thon</h3>
                    <p className="text-gray-300 leading-relaxed">
                      LeBron hosts his first annual Bike-a-thon, a family-friendly event bringing
                      the city and its youth together for a day of fun.
                    </p>
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
          className="absolute top-0 left-0 w-[100vh]  md:w-[50%]  h-screen flex items-center justify-between "
        >
          <div className=" flex items-center w-full">

            <img
              src={mainAthleteImage}
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
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">From Akron</h2>
                      <p className="text-gray-300 max-w-md">
                        The change the world began as he established The LeBron James Family Foundation.
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
          style={{ backgroundImage: `url(${mainAthleteImage})` }}
        >
        </motion.div>



      </div>
    </div>
  );
};

export default ScrollHorizontalComponents;

