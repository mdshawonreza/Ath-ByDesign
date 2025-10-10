import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineItems = [
  {
    year: "2024",
    title: "Foundation & Vision",
    description:
      "Athlete By Design Inc. established as a minority-owned sports enterprise with a comprehensive vision for athletic excellence.",
    image: "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg",
    side: "left",
  },
  {
    year: "2024",
    title: "NIL Revolution",
    description:
      "Launched ABD Sports Management as a boutique NIL agency, immediately positioning as premier agency for elite athletes.",
    image: "https://images.pexels.com/photos/262506/pexels-photo-262506.jpeg",
    side: "right",
  },
  {
    year: "2025",
    title: "Tech Innovation",
    description:
      "Deployed AI/AR-based training app and 3D motion capture system, revolutionizing athletic development and analysis.",
    image: "https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg",
    side: "left",
  },
  {
    year: "2025",
    title: "Media Launch",
    description:
      "ABD Media's flagship docuseries NEX GEN – NIL premieres, spotlighting transformational athlete journeys.",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg",
    side: "right",
  },
  {
    year: "2026",
    title: "Market Expansion",
    description:
      "ABD Fuel and ABD Sportswear achieve national distribution, establishing strong consumer brand presence.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    side: "left",
  },
  {
    year: "2027",
    title: "Venture Capital",
    description:
      "Launch ABD Venture Group, providing athletes investment opportunities in startups and small businesses.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    side: "right",
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-20 relative overflow-hidden bg-black">
      {/* subtle center fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black  to-black"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our Journey</span>
          </h2>
          <p className="text-xl text-teal-400 max-w-3xl mx-auto">
            Building the future of athletic excellence, one milestone at a time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-green-400 to-orange-400 hidden lg:block"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col lg:flex-row items-center mb-16 ${
                item.side === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`w-full lg:w-5/12 ${item.side === "left" ? "lg:pr-8 text-right" : "lg:pl-8 text-left"} px-2`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="glass-effect bg-teal-400/20 border border-teal-400/60 rounded-xl p-6 hover-lift "
                >
                  <div className="mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className={`text-2xl font-bold text-teal-400 mb-2 ${item.side === "left" ? "text-right" : "text-left"}`}>
                    {item.year}
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-3 ${item.side === "left" ? "text-right" : "text-left"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${item.side === "left" ? "text-right" : "text-left"}`}>
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Empty space */}
              <div className="w-full lg:w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Foundation Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center glass-effect rounded-2xl p-8 glass-effect bg-teal-400/20 border border-teal-400/60"
        >
          <h3 className="text-3xl font-bold text-teal-400 mb-4">Youth Sports Foundation</h3>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A 501(c)(3) non-profit established to provide athletic and personal development
            for young, underserved athletes. Earnings from our for-profit operations support
            this vital mission.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
