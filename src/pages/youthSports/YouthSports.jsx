import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Shield, Award, DollarSign, Globe,Droplet  } from 'lucide-react';
import ScrollHorizontalComponentsYouthSports from './ScrollHorizontalComponentsYouthSports';
import heroImage from '../../assets/Gemini_Generated_Image_byzui2byzui2byzu.png';

const YouthSports = () => {
 

  

  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex flex-col justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Droplet className="h-5 w-5 text-orange-500" />
            <span className="text-orange-400 font-medium">
              Start Your Sports Journey
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ABD Youth
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
               Sports
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl"
          >
            • A 501(c)(3) non-profit established to provide athletic and personal development for young, underserved athletes.
          </motion.p>
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  <a
    href="https://www.paypal.com/donate?hosted_button_id=XH5ZE3WUAMDRL"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block  px-6
      md:px-8 py-2 md:py-3 
      rounded-full 
      font-semibold 
      text-slate-700 
      bg-gradient-to-r from-orange-500 to-yellow-400 
      shadow-lg 
      transition duration-300 
      hover:scale-105 
      hover:shadow-orange-500/40
      text-xl
      md:text-2xl
    "
  >
    DONATE
  </a>
</motion.div>


          
          
        </div>
      </section>
     
      <ScrollHorizontalComponentsYouthSports></ScrollHorizontalComponentsYouthSports>

    

      

    </div>
    
  );
};

export default YouthSports;