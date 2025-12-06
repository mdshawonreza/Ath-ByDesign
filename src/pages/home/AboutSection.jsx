import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {

  // parent animation variant for stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // sequential animation delay
      },
    },
  };

  // child animation variant
  const item = {
    hidden: { opacity: 0, y: 50 }, // bottom-to-top
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section  className="py-10 md:py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-center">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl"
          >
            <motion.h2
              variants={item}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white tracking-tight">The ABD Vision</span>
            </motion.h2>

            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-5">
              <motion.p variants={item}>
                <span className="font-semibold text-orange-600">Athlete By Design Inc. (“ABD”)</span> is a dynamic,
                minority-owned sports enterprise that brings together every part of the modern athletic experience.
                We specialize in NIL monetization, sports media, and live events, while also advancing athlete performance
                through cutting-edge tools like our AI-powered training app and motion capture systems.
              </motion.p>

              <motion.p variants={item}>
                Our brand extends into athletic apparel and functional nutrition products, creating a complete ecosystem
                that supports athletes on and off the field.
              </motion.p>

              <motion.p variants={item}>
                ABD is headquartered in Los Angeles, FL and is led by a seasoned team of entrepreneurs, athletes, and creatives
                with deep ties to the sports, apparel, media, and tech industries.
              </motion.p>

              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
