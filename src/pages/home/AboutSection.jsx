import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const cards = [
    {
      title: "AI Training",
      text: "Next-gen athletic development",
      color: "text-cyan-500",
      img: "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg",
    },
    {
      title: "Nutrition",
      text: "Performance-driven supplements",
      color: "text-green-500",
      img: "https://images.pexels.com/photos/6455925/pexels-photo-6455925.jpeg",
    },
    {
      title: "Media",
      text: "Storytelling & content creation",
      color: "text-orange-500",
      img: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg",
    },
    {
      title: "Apparel",
      text: "Performance & lifestyle gear",
      color: "text-purple-500",
      img: "https://images.pexels.com/photos/6550840/pexels-photo-6550840.jpeg",
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Redefining</span>
              <br />
              <span className="text-gray-900">Athletic Excellence</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Athlete By Design Inc. is a minority-owned sports enterprise uniquely positioned
              at the intersection of NIL monetization, sports media, sporting events, athletic
              training and development tech tools, athletic apparel, and functional nutrition products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-700">Athletes Managed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">$50M+</div>
                <div className="text-gray-700">NIL Value Created</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {cards.slice(0, 2).map((card, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect rounded-lg p-6 hover-lift bg-white shadow-lg"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded mb-4"
                      loading="eager"
                      decoding="sync"
                    />
                    <h3 className={`font-bold ${card.color} mb-2`}>{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4 mt-8">
                {cards.slice(2, 4).map((card, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect rounded-lg p-6 hover-lift bg-white shadow-lg "
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded mb-4"
                      loading="eager"
                      decoding="sync"
                    />
                    <h3 className={`font-bold ${card.color} mb-2`}>{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
