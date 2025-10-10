import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Tv, Play } from 'lucide-react';

const Media = () => {
  const mediaServices = [
    {
      icon: Tv,
      title: 'NEX GEN - NIL Docuseries',
      description: 'Our flagship docuseries showcasing transformational athlete journeys',
      status: 'In Production',
      gradient: 'from-orange-500 to-yellow-400'
    },
    {
      icon: Camera,
      title: 'Brand Content Creation',
      description: 'Professional video and photo content for athlete brand building',
      status: 'Available',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      icon: Film,
      title: 'Documentary Production',
      description: 'Full-scale documentary projects highlighting athletic excellence',
      status: 'Coming Soon',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Play,
      title: 'Live Event Coverage',
      description: 'Professional streaming and coverage of athletic events',
      status: 'Available',
      gradient: 'from-orange-500 to-yellow-400'
    }
  ];

  const portfolio = [
    {
      title: 'College Basketball Rising Stars',
      type: 'Documentary Short',
      views: '2.5M',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?w=800'
    },
    {
      title: 'NIL Success Stories',
      type: 'Docuseries Episode',
      views: '1.8M',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=800'
    },
    {
      title: 'Training Day Chronicles',
      type: 'Behind the Scenes',
      views: '3.2M',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800'
    }
  ];

  const achievements = [
    { number: '50M+', label: 'Total Views' },
    { number: '25+', label: 'Original Productions' },
    { number: '500+', label: 'Athletes Featured' },
    { number: '15+', label: 'Awards Won' }
  ];

  return (
    <div className="bg-black text-gray-200">

      {/* ===== HERO SECTION WITH PARALLAX ===== */}
      <section
        className="relative min-h-[100vh] flex flex-col justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=1600')"
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Camera className="h-5 w-5 text-orange-500" />
            <span className="text-orange-400 font-medium">Sports Media Production</span>
          </motion.div>

          {/* Main Heading */}
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
              Media
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl"
          >
            Storytelling that redefines how athletes are seen, supported, and celebrated.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed"
          >
            ABD Media is the storytelling and cultural strategy arm of <span className="text-orange-400 font-semibold">Athlete By Design —</span> a
            branded content engine that shapes how the next generation of athletes is seen,
            supported, and celebrated. <br /><br />
            Our flagship docuseries, <span className="text-orange-400 font-semibold">NEX GEN – NIL</span>, is already in motion, with a powerful sizzle
            reel completed and identifying prospective streaming platforms. This is more than
            episodic content — it’s a vehicle to spotlight transformational journeys, elevate
            underrepresented voices, and build brand affinity across every vertical we operate —
            from NIL to nutrition.
          </motion.p>
        </div>
      </section>


      {/* ===== SERVICES SECTION WITH PARALLAX ===== */}
      {/* Services Section */}
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
              Our <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive media production solutions for the modern sports industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${service.status === 'In Production'
                        ? 'bg-yellow-400/20 text-yellow-400'
                        : service.status === 'Available'
                          ? 'bg-green-400/20 text-green-400'
                          : 'bg-blue-400/20 text-blue-400'
                      }`}
                  >
                    {service.status}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== PORTFOLIO SECTION WITH PARALLAX ===== */}
      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?w=1600')"
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
              Featured <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Content</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing the stories that matter in modern athletics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-orange-400 text-sm font-medium">{item.type}</span>
                    <h3 className="text-xl font-semibold text-white mb-2 mt-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.views} views</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Media;
