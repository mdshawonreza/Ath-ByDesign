import React from "react";
import { motion } from "framer-motion";
import { Droplet, Zap, Trophy, Shield, Award, Leaf } from "lucide-react";

const Nutrition = () => {
  const products = [
    {
      icon: Droplet,
      title: "Hydration Drinks",
      description:
        "Functional sports hydration powered by electrolytes and natural adaptogens.",
      status: "Available",
      gradient: "from-orange-500 to-yellow-400",
      image:
        "https://images.pexels.com/photos/3763874/pexels-photo-3763874.jpeg?w=800",
    },
    {
      icon: Zap,
      title: "Energy Bars",
      description:
        "Clean-label energy bars for sustained endurance and fast recovery.",
      status: "In Production",
      gradient: "from-orange-400 to-pink-500",
      image:
        "https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?w=800",
    },
    {
      icon: Trophy,
      title: "Performance Snacks",
      description:
        "Portable, balanced, and nutrition-packed snacks made for athletes on the move.",
      status: "Coming Soon",
      gradient: "from-yellow-400 to-orange-500",
      image:
        "https://images.pexels.com/photos/3822368/pexels-photo-3822368.jpeg?w=800",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Clean Label",
      description: "No artificial preservatives or colors — only pure performance.",
    },
    {
      icon: Award,
      title: "Certified Quality",
      description:
        "White-labeled for instant market readiness and brand alignment.",
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Formulated using premium, sustainable, natural sources.",
    },
    {
      icon: Zap,
      title: "Performance Driven",
      description: "Crafted to fuel training, competition, and recovery.",
    },
  ];

  return (
    <div className="bg-black text-gray-200">

      {/* ===== HERO SECTION WITH PARALLAX ===== */}
      <section
        className="relative min-h-[100vh] flex flex-col justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Droplet className="h-5 w-5 text-orange-500" />
            <span className="text-orange-400 font-medium">
              Performance Nutrition
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ABD
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Fuel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl"
          >
            Nutrition designed for athletes — powered by science, driven by
            passion, and crafted for real-world performance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed"
          >
            ABD Fuel delivers clean, effective, and reliable sports nutrition.
            From hydration drinks to energy bars, we engineer every product to
            boost recovery, stamina, and focus — ensuring athletes stay at their
            best, wherever they compete.
          </motion.p>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Product{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Lineup
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Performance-focused nutrition tailored to modern athletic demands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`bg-gradient-to-r ${product.gradient} p-3 rounded-xl`}
                    >
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.status === "Available"
                          ? "bg-green-400/20 text-green-400"
                          : product.status === "In Production"
                          ? "bg-yellow-400/20 text-yellow-400"
                          : "bg-blue-400/20 text-blue-400"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                ABD Fuel
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every formula engineered for elite performance and clean energy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-xl w-fit mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
