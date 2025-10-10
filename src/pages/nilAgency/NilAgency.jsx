import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Shield, Award, DollarSign, Globe } from 'lucide-react';

const NilAgency = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Brand Maximization',
      description: 'Strategic brand building through high-impact national and international deals'
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Comprehensive legal support ensuring full NIL compliance and protection'
    },
    {
      icon: Award,
      title: 'Elite Network',
      description: 'Exclusive access to Power 5 conferences and high-profile athletic talent'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International partnership opportunities and cross-border brand collaborations'
    }
  ];

  const stats = [
    { number: '$25M+', label: 'NIL Deals Negotiated' },
    { number: '150+', label: 'Elite Athletes' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Brand Partners' }
  ];

  return (
    // <div className="">
    //   {/* Hero Section */}
    //   <section className="py-24 md:pt-36 bg-gradient-to-br from-black via-gray-900 to-black">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <motion.div
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         className="text-center"
    //       >
    //         <motion.div
    //           initial={{ scale: 0 }}
    //           animate={{ scale: 1 }}
    //           transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    //           className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-8"
    //         >
    //           <Users className="h-5 w-5 text-blue-400" />
    //           <span className="text-blue-400 font-medium">Premier NIL Agency</span>
    //         </motion.div>

    //         <h1 className="text-5xl md:text-7xl font-bold mb-6">
    //           <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
    //             ABD Sports
    //           </span>
    //           <br />
    //           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    //             Management
    //           </span>
    //         </h1>

    //         <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
    //           The premier NIL agency for elite high school and collegiate athletes, 
    //           maximizing brand value through transformative partnerships.
    //         </p>

    //         <motion.button
    //           whileHover={{ scale: 1.05, y: -2 }}
    //           whileTap={{ scale: 0.95 }}
    //           className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-400/25 transition-all duration-300"
    //         >
    //           Start Your NIL Journey
    //         </motion.button>
    //       </motion.div>
    //     </div>
    //   </section>

    //   {/* Stats Section */}
    //   <section className="py-16 bg-gray-900">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //         {stats.map((stat, index) => (
    //           <motion.div
    //             key={index}
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             transition={{ delay: index * 0.1, duration: 0.6 }}
    //             viewport={{ once: true }}
    //             className="text-center"
    //           >
    //             <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
    //               {stat.number}
    //             </div>
    //             <p className="text-gray-400 font-medium">
    //               {stat.label}
    //             </p>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Services Section */}
    //   <section className="py-24 bg-black">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //         className="text-center mb-16"
    //       >
    //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
    //           Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
    //         </h2>
    //         <p className="text-xl text-gray-400 max-w-3xl mx-auto">
    //           Comprehensive NIL management solutions designed for the modern athlete
    //         </p>
    //       </motion.div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //         {services.map((service, index) => (
    //           <motion.div
    //             key={index}
    //             initial={{ opacity: 0, y: 30 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             transition={{ delay: index * 0.1, duration: 0.6 }}
    //             viewport={{ once: true }}
    //             whileHover={{ y: -10, scale: 1.02 }}
    //             className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
    //           >
    //             <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-xl w-fit mb-6">
    //               <service.icon className="h-8 w-8 text-white" />
    //             </div>
                
    //             <h3 className="text-2xl font-semibold text-white mb-4">
    //               {service.title}
    //             </h3>
                
    //             <p className="text-gray-400 leading-relaxed">
    //               {service.description}
    //             </p>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA Section */}
    //   <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: true }}
    //       >
    //         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
    //           Ready to Maximize Your NIL Potential?
    //         </h2>
    //         <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
    //           Join the elite athletes who trust ABD Sports Management with their brand and career development.
    //         </p>
    //         <motion.button
    //           whileHover={{ scale: 1.05, y: -2 }}
    //           whileTap={{ scale: 0.95 }}
    //           className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
    //         >
    //           Contact Our Team
    //         </motion.button>
    //       </motion.div>
    //     </div>
    //   </section>
    // </div>
    <div className='min-h-screen flex justify-center items-center'>NilAgency</div>
  );
};

export default NilAgency;