import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Activity } from 'lucide-react';

const AiTech = () => {
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
    <div className="bg-black text-gray-200">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-md" />
        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4"
          >
            ABD AI/AR Training Tech
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
      <section className="py-24 bg-zinc-900/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="space-y-6 p-10 backdrop-blur-md bg-black/40 border border-orange-500/20 rounded-3xl shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <section.icon className="h-8 w-8 text-orange-400 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3 text-gray-200">
                {section.content.map((line, i) => (
                  <motion.p
                    key={i}
                    className="leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              {/* Floating Neon Icon */}
              <motion.div
                className="absolute -top-10 -right-10 opacity-20"
                animate={{ y: [0, 15, 0], rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                <section.icon className="h-12 w-12 text-orange-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-black/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-8"
          >
            Behind the Tech
          </motion.h2>

          <motion.div
            className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-orange-500/30 hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="ABD AI Tech Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-semibold">
                Elite Training in Action
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AiTech;
