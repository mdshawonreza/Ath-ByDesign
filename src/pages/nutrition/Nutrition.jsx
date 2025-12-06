import React from "react";
import { motion } from "framer-motion";
import imgBar from "../../assets/Untitled design.jpg"; // Replace with your actual bar image path
import imgDrink from "../../assets/Untitled design (1).jpg"; // Replace with your actual drink image path

const Nutrition = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <section
        className="relative h-[90vh] flex items-center justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/HDc4rtG4/leonardo-iribe-c-Lrut-VJKBk8-unsplash.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                    className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-8 mx-auto"
                  >
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span className="text-orange-500 font-medium">Intro to Combine Events</span>
                  </motion.div> */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {/* Intro to */}
              </span>{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Nutrition
              </span>
            </motion.h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              
            Our Nutrition ensures that each athlete receives a personalized nutrition plan designed for
            peak performance and recovery. We partner with certified nutritionists to build customized diets
            that maximize energy, endurance, and overall health.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ===================== HERO SECTION ===================== */}
      {/* <section className="py-16 lg:py-28 px-6 sm:px-10 md:px-16">

        <section className="py-16 lg:py-28 px-6 sm:px-10 md:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
          </motion.p>
        </section>


      </section> */}

      {/* ===================== BAR SECTION ===================== */}
      <section className="py-20 lg:py-28 bg-zinc-950 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bar Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={imgBar}
              alt="Nutrition Bar"
              className="rounded-2xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Bar Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-400">
              Energy Bars
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Our Energy Bars are crafted with clean, natural ingredients for
              long-lasting stamina. Each bar delivers the perfect balance of
              carbs, protein, and healthy fats — ideal for athletes who need
              steady energy throughout training and competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================== DRINK + BAR COMBO SECTION ===================== */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 md:px-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Drink Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">
              Hydration Drinks
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Stay refreshed and energized with our electrolyte-infused
              hydration drinks. Designed to replace vital minerals and prevent
              dehydration, they help athletes maintain focus and endurance
              during intense workouts or matches.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed ">
              Combined with our nutrient-rich energy bars, these drinks provide
              the ultimate performance combo — powering athletes through every
              challenge.
            </p>
          </motion.div>

          {/* Drink + Bar Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex flex-col gap-6"
          >
            <img
              src={imgDrink}
              alt="Hydration Drink"
              className="rounded-2xl shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            {/* <img
              src={imgBar}
              alt="Energy Bar Combo"
              className="rounded-2xl shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            /> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
