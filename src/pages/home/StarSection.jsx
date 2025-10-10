"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, BarChart, Cpu } from "lucide-react";

const features = [
  {
    title: "AI-Powered Training",
    description: "Personalized workout recommendations using AI analytics.",
    icon: <Cpu size={32} className="text-white" />,
    color: "bg-gradient-to-tr from-purple-600 to-pink-500",
  },
  {
    title: "Performance Tracking",
    description: "Real-time stats and progress monitoring with insights.",
    icon: <BarChart size={32} className="text-white" />,
    color: "bg-gradient-to-tr from-cyan-500 to-blue-500",
  },
  {
    title: "Health Monitoring",
    description: "Track heart rate, calories, and more with precision.",
    icon: <Activity size={32} className="text-white" />,
    color: "bg-gradient-to-tr from-green-500 to-emerald-400",
  },
];

export default function FancyFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 md:-mb-16 relative overflow-hidden">
      {/* 🔥 Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text drop-shadow-lg">
              Training App Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary technology meets athletic excellence
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                rotateY: 6,
                boxShadow: "0px 0px 50px rgba(255,255,255,0.25)",
              }}
              className="rounded-2xl p-8 text-center bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 hover:border-purple-400/60 transition-all duration-300 "
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-6 rounded-full shadow-lg ${feature.color} mb-6`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-teal-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-28 relative rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/80 p-12 shadow-2xl overflow-hidden"
        >
          {/* Floating Glow */}
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-500/20 blur-3xl animate-bounce-slow"></div>
          <div className="absolute bottom-0 -right-20 w-[350px] h-[350px] bg-indigo-500/20 blur-3xl animate-pulse"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">3D Motion Capture</span>
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                State-of-the-art branded ABD precise 3D motion capture system.
                The 3D motion capture market is projected to reach{" "}
                <span className="text-teal-400 font-bold">$484 million</span> by
                2029 with a{" "}
                <span className="text-teal-400 font-bold">15% CAGR</span>.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-900/70 border border-gray-700/40 rounded-xl hover:scale-105 transition">
                  <div className="text-3xl font-extrabold text-teal-400 mb-2">
                    15%
                  </div>
                  <div className="text-gray-400 text-sm">Market CAGR</div>
                </div>
                <div className="text-center p-6 bg-gray-900/70 border border-gray-700/40 rounded-xl hover:scale-105 transition">
                  <div className="text-3xl font-extrabold text-teal-400 mb-2">
                    $484M
                  </div>
                  <div className="text-gray-400 text-sm">
                    Market Size by 2029
                  </div>
                </div>
              </div>
            </div>

            {/* Image with Floating Animation */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1 }}
                src="https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg"
                alt="Motion Capture Technology"
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute -inset-3 rounded-3xl border border-purple-500/40 animate-pulse blur-md"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
