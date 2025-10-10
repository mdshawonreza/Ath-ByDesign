import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Target, Zap, Award } from 'lucide-react';

const CombineEvents = () => {
  const combines = [
    {
      icon: Trophy,
      title: 'Football Combine',
      description:
        'Push your limits on the gridiron with our Football Combine, where elite drills meet pro-level testing. We measure 40-yard dash speed, shuttle agility, vertical leap and position-specific skills so coaches and scouts see exactly where you shine. Our expert trainers lead small-group sessions to fine-tune footwork, tackling form, route running and hand-eye coordination. Walk away with a personalized performance report and video highlights that put your best plays in the spotlight.',
      gradient: 'from-teal-400 to-cyan-500',
      image: 'https://images.pexels.com/photos/3991870/pexels-photo-3991870.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Target,
      title: 'Basketball Combine',
      description:
        'Step onto the court and showcase the athleticism every coach covets. Our Basketball Combine features timed sprints, lane agility, standing and max vertical leaps, plus spot-up shooting, on-the-move shooting and defensive footwork drills. Certified evaluators track your accuracy, reaction time and court vision in real time. Every participant leaves with a skill-development plan and a custom highlight reel designed to catch recruiters’ eyes.',
      gradient: 'from-cyan-400 to-blue-500',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Zap,
      title: 'Baseball Combine',
      description:
        'Take your swing and glove work to the next level. In our Baseball Combine, you’ll face pitching velocity tests, exit velocity measurements, arm-strength radar and infield/outfield fielding drills. Hit off live pitching to record launch angle and bat speed, then sharpen your diving catches and footwork. You’ll receive an in-depth scouting report—complete with metrics and video clips—to share directly with college and pro scouts.',
      gradient: 'from-blue-400 to-teal-500',
      image: 'https://images.pexels.com/photos/1634034/pexels-photo-1634034.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Award,
      title: 'Soccer Combine',
      description:
        'Own the pitch with precision and power. Our Soccer Combine evaluates sprint speed, endurance (Yo-Yo test), agility courses and technical challenges like dribbling through cones and shooting accuracy under pressure. Position-specific sessions hone first touch, crossing, defending and goalkeeping reflexes. You’ll depart with a comprehensive performance profile and highlight montage that showcases your skills to top program.',
      gradient: 'from-teal-500 to-green-400',
      image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const benefits = [
    'Measure yourself against standout athletes',
    'Catch the eye of college & professional scouts',
    'Connect with top recruiters',
    'Compete & train with elite peers',
    'Sharpen sport-specific skills',
    'Professional video analysis & highlights',
  ];

  return (
    <div className="bg-black text-gray-200">

      {/* Hero Section with Parallax */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3822676/pexels-photo-3822676.jpeg?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-8 mx-auto"
            >
              <Calendar className="h-5 w-5 text-orange-500" />
              <span className="text-orange-500 font-medium">Intro to Combine Events</span>
            </motion.div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you’re striving to measure yourself against other standout athletes or
              looking to catch the eye of college and professional scouts, our Combines provide
              the perfect arena to showcase your talent, sharpen sport-specific skills, and
              connect with top recruiters—all while competing and training alongside peers who
              push you to new heights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Combines Cards */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              Sport-Specific Combines
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional evaluation and elite training for every major sport
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {combines.map((combine, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden"
              >
                <img
                  src={combine.image}
                  alt={combine.title}
                  className="w-full h-48 object-cover rounded-2xl mb-4 opacity-80 hover:opacity-100 transition duration-300"
                />
                <div
                  className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${combine.gradient}`}
                >
                  <combine.icon className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 mt-2">{combine.title}</h3>
                <p className="text-gray-300 mb-4">{combine.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section with Parallax Background */}
      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Every ABD Combine is designed to provide comprehensive athletic evaluation with world-class resources and expert guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video + Gallery Section */}
      <section className="relative py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-orange-500 mb-6"
          >
            Behind the Scenes
          </motion.h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Experience the intensity, training, and elite performance of our athletes in action.
          </p>

          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-orange-500/40">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Behind the Scenes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-semibold">
                Elite Training in Action
              </span>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-10 mb-12 text-center text-orange-500"
          >
            Combine Highlights
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1552109/pexels-photo-1552109.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1142969/pexels-photo-1142969.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1142961/pexels-photo-1142961.jpeg?auto=compress&cs=tinysrgb&w=800'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt={`Highlight ${i + 1}`}
                  className="w-full h-48 md:h-56 object-cover transform hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <span className="text-orange-500 font-bold text-lg">Action Shot</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CombineEvents;
