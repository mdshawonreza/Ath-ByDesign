// import React from 'react';
// import { motion } from 'framer-motion';
// import { Smartphone, Activity } from 'lucide-react';
// import img1 from '../../assets/WhatsApp Image 2025-11-18 at 8.10.07 PM.jpeg';
// import img2 from '../../assets/Gemini_Generated_Image_ntkhxxntkhxxntkh.png';
// import video1 from '../../assets/bd-tech.mp4';
// import { useRef, useEffect } from "react";
// const AiTech = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const allowSound = () => {
//       if (videoRef.current) {
//         videoRef.current.muted = true;   // unmute video
//         videoRef.current.volume = 1.0;
//       }
//       // Remove listeners after sound is allowed
//       window.removeEventListener("click", allowSound);
//       window.removeEventListener("scroll", allowSound);
//     };

//     // Browser requires any interaction
//     window.addEventListener("click", allowSound);
//     window.addEventListener("scroll", allowSound);
//   }, []);
//   const sections = [
//     {
//       title: 'ABD Training App',
//       icon: Smartphone,
//       content: [
//         'Our AI-AR Training App in development will be the most advanced athlete training app on the market.',
//         'With rigorous and continual advancements, our App assures the user they are utilizing the latest technology available.',
//         'Major attributes include:',
//         '• AI-Driven Workout & Recovery Plans',
//         '• Augmented Reality (AR) Movement Demos',
//         '• Performance Analytics Dashboards',
//         '• Athlete & Trainer Matchmaking',
//         '• NIL Monetization Tools (e.g., fan challenges, promo code tracking)',
//         '• Social Feed & Training Community',
//         '• Live streaming of training sessions by select pro athletes',
//       ],
//     },
//     {
//       title: 'ABD Motion Capture System',
//       icon: Activity,
//       content: [
//         'The 3D motion capture market is experiencing very strong growth in both sports (42%) and healthcare (38%) applications.',
//         'We are planning to complement our athlete Training App with a state-of-the-art branded ABD precise 3-D motion capture system.',
//         'Major customer segments include:',
//         '• AI-Driven Workout & Recovery Plans',
//         '• Sports teams/academies: Performance analysis and injury prevention',
//         '• Healthcare facilities: Rehabilitation and movement therapy',
//         '• Educational institutions: Research and training programs',
//         '• Senior living facilities: Fall prevention and mobility assessment',
//         '• Entertainment/gaming: Content creation and animation',
//       ],
//     },
//   ];

//   return (
//     <div className=" text-gray-200">
//       {/* Hero Section */}
//       <section
//         className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600')",
//         }}
//       >
//         <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-md" />
//         <div className="relative z-10 max-w-4xl px-6">
//           {/* <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4"
//           >
//             ABD AI/AR Training Tech
//           </motion.h1> */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
//           >
//             <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               ABD AI/AR
//             </span>{" "}
//             <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
//               Tech
//             </span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
//           >
//             Revolutionizing athlete training with AI-driven workouts, AR movement demos, and advanced motion capture systems for real-time performance analysis.
//           </motion.p>
//         </div>
//       </section>

//       {/* Full-width Sections */}




//       <div className="bg-black py-16">
//         <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//           {/* <motion.div
//             className="flex flex-col items-center text-center"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
           
//             <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
//               ABD  App
//             </h2>

//             <img
//               src={img1}
//               alt="ABD Training App"
//               className="w-full max-w-md rounded-lg shadow-lg mb-6"
//             />

          
//             <p className="text-base md:text-lg text-gray-300  max-w-3xl">
//               Our AI-AR App in development will be the most advanced athlete training app on the market.
//             </p>
//             <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl">
//               With rigorous and continual advancements, our App assures the user they are utilizing the latest technology available.
//             </p>
//             <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl">
//               Major attributes include:
//             </p>

          
//             <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-3xl text-left">
//               <li>AI-Driven Workout & Recovery Plans</li>
//               <li>Augmented Reality (AR) Movement Demos</li>
//               <li>Performance Analytics Dashboards</li>
//               <li>Athlete & Trainer Matchmaking</li>
//               <li>NIL Monetization Tools (e.g., fan challenges, promo code tracking)</li>
//               <li>Social Feed & Training Community</li>
//               <li>Live streaming of training sessions by select pro athletes</li>
//             </ul>
//           </motion.div> */}
//           <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//             <motion.div
//               className="flex flex-col md:flex-row items-center gap-12"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//             >


//               {/* Text on right side */}
//               <div className="w-full md:w-1/2 text-left md:text-left">
//                 {/* Title removed as per instruction */}
//                 {/* <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">ABD App</h2> */}

//                 {/* Description */}
//                 <p className="text-base md:text-lg text-gray-300 mb-4">
//                   Our AI-AR App in development will be the most advanced athlete training app on the market.
//                 </p>
//                 <p className="text-base md:text-lg text-gray-300 mb-4">
//                   With rigorous and continual advancements, our App assures the user they are utilizing the latest technology available.
//                 </p>
//                 <p className="text-base md:text-lg text-gray-300 mb-4">
//                   Major attributes include:
//                 </p>

//                 {/* Bullet Points */}
//                 <ul className="list-disc list-inside space-y-2 text-gray-300">
//                   <li>AI-Driven Workout & Recovery Plans</li>
//                   <li>Augmented Reality (AR) Movement Demos</li>
//                   <li>Performance Analytics Dashboards</li>
//                   <li>Athlete & Trainer Matchmaking</li>
//                   <li>NIL Monetization Tools (e.g., fan challenges, promo code tracking)</li>
//                   <li>Social Feed & Training Community</li>
//                   <li>Live streaming of training sessions by select pro athletes</li>
//                 </ul>
//               </div>
//               {/* Image on left side */}
//               <img
//                 src={img1} // নতুন ছবি path
//                 alt="ABD Training App"
//                 className="w-full md:w-1/2 rounded-lg shadow-lg"
//               />
//             </motion.div>
//           </div>

//         </div>
//       </div>

//       <div id='motionCapture' className=' bg-black/40'>
//         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
//           <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
//             {/* Right Image */}
//             <motion.div
//               className="overflow-hidden rounded shadow-lg"

//             >
//               <img
//                 className="object-cover w-full h-56 sm:h-96"
//                 src={img2}
//                 alt="ABD Motion Capture System"
//               />
//             </motion.div>
//             {/* Left Text Content */}
//             <motion.div
//               className="flex flex-col justify-center items-center"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="max-w-xl mb-6">
//                 <motion.h2
//                   className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none "
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   ABD Motion Capture System
//                 </motion.h2>
//                 <motion.p
//                   className="text-base md:text-lg mb-4"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1, duration: 0.6 }}
//                 >
//                   The 3D motion capture market is experiencing very strong growth in both sports (42%) and healthcare (38%) applications.
//                 </motion.p>
//                 <motion.p
//                   className="text-base md:text-lg mb-4"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                 >
//                   We are planning to complement our athlete Training App with a state-of-the-art branded ABD precise 3-D motion capture system.
//                 </motion.p>
//                 <motion.p
//                   className="text-base md:text-lg mb-4"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3, duration: 0.6 }}
//                 >
//                   Major customer segments include:
//                 </motion.p>

//                 <motion.ul
//                   className="list-disc list-inside space-y-2"
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{ once: true }}
//                   variants={{
//                     hidden: {},
//                     show: { transition: { staggerChildren: 0.1 } },
//                   }}
//                 >
//                   {[
//                     'AI-Driven Workout & Recovery Plans',
//                     'Sports teams/academies: Performance analysis and injury prevention',
//                     'Healthcare facilities: Rehabilitation and movement therapy',
//                     'Educational institutions: Research and training programs',
//                     'Senior living facilities: Fall prevention and mobility assessment',
//                     'Entertainment/gaming: Content creation and animation',
//                   ].map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className=""
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {item}
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               </div>
//             </motion.div>


//           </div>
//         </div>
//       </div>



//       {/* Video Section */}
//       <section className="pb-24 bg-black/90 backdrop-blur-md pt-10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-8"
//           >
//             Behind the Tech
//           </motion.h2> */}

//           <div className="w-full">
//             {/* NAME ABOVE VIDEO */}
//             <h2 className=" bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold mb-4 text-center">
//               Jalyn Armour-Davis
//             </h2>

//             <motion.div
//               className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl 
//                border border-orange-500/30 hover:scale-105 transition-transform duration-500"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <video
//                 ref={videoRef}
//                 className="w-full h-full object-cover rounded-3xl"
//                 src={video1}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//               ></video>
//             </motion.div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default AiTech;
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Activity } from "lucide-react";
import img1 from "../../assets/WhatsApp Image 2025-11-18 at 8.10.07 PM.jpeg";
import img2 from "../../assets/Gemini_Generated_Image_ntkhxxntkhxxntkh.png";
import video1 from "../../assets/bd-tech.mp4";

const AiTech = () => {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null); // observe visibility of the video area
  const [isVisible, setIsVisible] = useState(false);
  const [soundAllowed, setSoundAllowed] = useState(false);

  // 1) One-time global user gesture → unlock audio (no button shown)
  useEffect(() => {
    if (soundAllowed) return;

    const unlock = () => {
      setSoundAllowed(true);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchend", unlock);
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("scroll", unlock);
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("touchend", unlock, { once: true });
    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("scroll", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchend", unlock);
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("scroll", unlock);
    };
  }, [soundAllowed]);

  // 2) Observe visibility of the video container
  useEffect(() => {
    const target = videoSectionRef.current;
    if (!target) return;

    const io = new IntersectionObserver(
      (entries) => setIsVisible(Boolean(entries[0]?.isIntersecting)),
      { threshold: 0.5 }
    );
    io.observe(target);
    return () => io.unobserve(target);
  }, []);

  // 3) Control play/pause + mute/unmute based on visibility + permission
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const playSafely = () => {
      if (!soundAllowed) el.muted = true; // required for autoplay
      el.play().catch(() => {});
    };

    if (document.hidden) {
      el.pause();
      return;
    }

    if (isVisible) {
      playSafely();
      if (soundAllowed) {
        el.muted = false; // sound ON only after user gesture
        el.volume = 1;
      }
    } else {
      el.muted = true;
      el.pause();
    }
  }, [isVisible, soundAllowed]);

  // 4) Pause when tab is hidden; resume when visible & section is visible
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onVis = () => {
      if (document.hidden) el.pause();
      else if (isVisible) el.play().catch(() => {});
    };

    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [isVisible]);

  const sections = [
    {
      title: 'ABD Training App',
      icon: Smartphone,
      content: [
        'Our AI-AR Training App in development will be the most advanced athlete training app on the market.',
        'With rigorous and continual advancements, our App assures the user they are utilizing the latest technology available.',
        'Major attributes include:',
        '• AI-Driven Workout & Recovery Plans',
        '• Augmented Reality (AR) Movement Demos',
        '• Performance Analytics Dashboards',
        '• Athlete & Trainer Matchmaking',
        '• NIL Monetization Tools (e.g., fan challenges, promo code tracking)',
        '• Social Feed & Training Community',
        '• Live streaming of training sessions by select pro athletes',
      ],
    },
    {
      title: 'ABD Motion Capture System',
      icon: Activity,
      content: [
        'The 3D motion capture market is experiencing very strong growth in both sports (42%) and healthcare (38%) applications.',
        'We are planning to complement our athlete Training App with a state-of-the-art branded ABD precise 3-D motion capture system.',
        'Major customer segments include:',
        '• AI-Driven Workout & Recovery Plans',
        '• Sports teams/academies: Performance analysis and injury prevention',
        '• Healthcare facilities: Rehabilitation and movement therapy',
        '• Educational institutions: Research and training programs',
        '• Senior living facilities: Fall prevention and mobility assessment',
        '• Entertainment/gaming: Content creation and animation',
      ],
    },
  ];

  return (
    <div className="text-gray-200">
       <section
        className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-md" />
        <div className="relative z-10 max-w-4xl px-6">
          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4"
          >
            ABD AI/AR Training Tech
          </motion.h1> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ABD AI/AR
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Tech
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Revolutionizing athlete training with AI-driven workouts, AR movement demos, and advanced motion capture systems for real-time performance analysis.
          </motion.p>
        </div>
      </section>

      {/* Full-width Sections */}




      <div className="bg-black py-16">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          {/* <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
           
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
              ABD  App
            </h2>

            <img
              src={img1}
              alt="ABD Training App"
              className="w-full max-w-md rounded-lg shadow-lg mb-6"
            />

          
            <p className="text-base md:text-lg text-gray-300  max-w-3xl">
              Our AI-AR App in development will be the most advanced athlete training app on the market.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl">
              With rigorous and continual advancements, our App assures the user they are utilizing the latest technology available.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl">
              Major attributes include:
            </p>

          
            <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-3xl text-left">
              <li>AI-Driven Workout & Recovery Plans</li>
              <li>Augmented Reality (AR) Movement Demos</li>
              <li>Performance Analytics Dashboards</li>
              <li>Athlete & Trainer Matchmaking</li>
              <li>NIL Monetization Tools (e.g., fan challenges, promo code tracking)</li>
              <li>Social Feed & Training Community</li>
              <li>Live streaming of training sessions by select pro athletes</li>
            </ul>
          </motion.div> */}
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >


              {/* Text on right side */}
              <div className="w-full md:w-1/2 text-left md:text-left">
                {/* Title removed as per instruction */}
                {/* <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">ABD App</h2> */}

                {/* Description */}
                <p className="text-base md:text-lg text-gray-300 mb-4">
                  Our AI-AR App in development will be the most advanced athlete training app on the market.
                </p>
                <p className="text-base md:text-lg text-gray-300 mb-4">
                  With rigorous and continual advancements, our App assures the user they are utilizing the latest technology available.
                </p>
                <p className="text-base md:text-lg text-gray-300 mb-4">
                  Major attributes include:
                </p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>AI-Driven Workout & Recovery Plans</li>
                  <li>Augmented Reality (AR) Movement Demos</li>
                  <li>Performance Analytics Dashboards</li>
                  <li>Athlete & Trainer Matchmaking</li>
                  <li>NIL Monetization Tools (e.g., fan challenges, promo code tracking)</li>
                  <li>Social Feed & Training Community</li>
                  <li>Live streaming of training sessions by select pro athletes</li>
                </ul>
              </div>
              {/* Image on left side */}
              <img
                src={img1} // নতুন ছবি path
                alt="ABD Training App"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <div id='motionCapture' className=' bg-black/40'>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            {/* Right Image */}
            <motion.div
              className="overflow-hidden rounded shadow-lg"

            >
              <img
                className="object-cover w-full h-56 sm:h-96"
                src={img2}
                alt="ABD Motion Capture System"
              />
            </motion.div>
            {/* Left Text Content */}
            <motion.div
              className="flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-xl mb-6">
                <motion.h2
                  className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  ABD Motion Capture System
                </motion.h2>
                <motion.p
                  className="text-base md:text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  The 3D motion capture market is experiencing very strong growth in both sports (42%) and healthcare (38%) applications.
                </motion.p>
                <motion.p
                  className="text-base md:text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  We are planning to complement our athlete Training App with a state-of-the-art branded ABD precise 3-D motion capture system.
                </motion.p>
                <motion.p
                  className="text-base md:text-lg mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Major customer segments include:
                </motion.p>

                <motion.ul
                  className="list-disc list-inside space-y-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {[
                    'AI-Driven Workout & Recovery Plans',
                    'Sports teams/academies: Performance analysis and injury prevention',
                    'Healthcare facilities: Rehabilitation and movement therapy',
                    'Educational institutions: Research and training programs',
                    'Senior living facilities: Fall prevention and mobility assessment',
                    'Entertainment/gaming: Content creation and animation',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className=""
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>


          </div>
        </div>
      </div>


      {/* Video Section — with visibility + auto-sound logic */}
      <section className="pb-24 bg-black/90 backdrop-blur-md pt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold mb-4 text-center">
            Jalyn Armour-Davis
          </h2>

          <motion.div
            ref={videoSectionRef}
            className="relative w-full h-[900px]  overflow-hidden shadow-2xl border border-orange-500/30 hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover "
              src={video1}
              autoPlay
              loop
              muted         /* starts muted for autoplay */
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              controlsList="nodownload noremoteplayback"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AiTech;
