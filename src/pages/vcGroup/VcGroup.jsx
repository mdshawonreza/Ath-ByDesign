// import React from 'react';
// import { motion } from 'framer-motion';
// import { TrendingUp, Users, Target, Briefcase, Heart, Sparkles, DollarSign } from 'lucide-react';

// const VCGroup = () => {
//   const features = [
//     {
//       icon: Users,
//       title: 'Athlete Investors',
//       description: 'College, pro, and retired athletes get opportunity to invest in start-ups.',
//       image: 'https://i.ibb.co.com/p608G2KT/Whats-App-Image-2025-11-14-at-03-21-07-815a2a56.jpg',
//       gradient: 'from-teal-400 to-cyan-500',
//     },
//     {
//       icon: Target,
//       title: 'BIPOC & Female Founders',
//       description: 'Focus on businesses founded by historically underrepresented groups.',
//       image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradient: 'from-cyan-400 to-blue-500',
//     },
//     {
//       icon: Briefcase,
//       title: 'Student Athlete Entrepreneur ',
//       description: 'Special focus on start-ups founded by student athletes entrepreneur.',
//       image: 'https://i.ibb.co.com/BKgWCLYx/Whats-App-Image-2025-11-14-at-04-13-50-ee217238.jpg',
//       gradient: 'from-blue-400 to-teal-500',
//     },
//     {
//       icon: Heart,
//       title: 'Dual Mission',
//       description: 'Investment income for athletes while supporting ignored groups achieve goals.',
//       image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradient: 'from-teal-500 to-green-400',
//     },
//   ];

//   const goals = [
//     'Provide source of investment income for athletes',
//     'Create business involvement opportunities',
//     'Support BIPOC & female founders',
//     'Empower student athlete entrepreneurs',
//     'Build long-term wealth for athlete investors',
//   ];

//   return (
//     <div className="bg-black text-gray-200">

//       {/* ===== Hero Section ===== */}
//       <section
//         className="relative h-[100vh] flex flex-col items-center justify-center text-center bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://i.ibb.co.com/d0514VFc/gary-shear-Kc-V1-YETn58-unsplash.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/75"></div>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 max-w-4xl px-6"
//         >
//           {/* <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
//             className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-8 mx-auto"
//           >
//             <TrendingUp className="h-5 w-5 text-orange-500" />
//             <span className="text-orange-500 font-medium">ABD Venture Group</span>
//           </motion.div> */}

//           <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
//             Athlete-Focused <br /> <span className="text-orange-500">Venture Capital</span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//             As an integral part of ABD’s athlete-focused mission, we form a venture capital fund 
//             where athletes (college, pro, or retired) can invest in small businesses, primarily 
//             founded by BIPOC, females, or student athletes. The goal is to provide investment income 
//             while helping historically ignored groups achieve entrepreneurial success.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-orange-500 to-red-500 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
//             >
//               Learn More
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="border-2 border-orange-500/50 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500/10 transition-all duration-300"
//             >
//               Partner With Us
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//       {/* ===== Features Section ===== */}
//       <section className="py-24 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
//               Our Focus Areas
//             </h2>
//             <p className="text-gray-400 text-lg max-w-3xl mx-auto">
//               Empowering athletes while supporting underrepresented entrepreneurs
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="relative rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
//               >
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full h-64 md:h-72 object-cover opacity-80 hover:opacity-100 transition duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
//                   <div className="text-center">
//                     <div
//                       className={`inline-flex items-center justify-center bg-gradient-to-r ${feature.gradient} p-3 rounded-full mb-4`}
//                     >
//                       <feature.icon className="h-8 w-8 text-black" />
//                     </div>
//                     <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
//                     <p className="text-gray-300">{feature.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== Goals Section with Parallax ===== */}
//       <section
//         className="py-24 bg-fixed bg-center bg-cover"
//         style={{
//           backgroundImage:
//             "url('https://i.ibb.co.com/rKjJgFXg/chuttersnap-u5-XMXzdc-Er-I-unsplash.jpg')",
//         }}
//       >
//         <div className="bg-black/70 py-24">
//           <div className="max-w-5xl mx-auto px-4 text-center text-gray-200">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold text-orange-500 mb-8"
//             >
//               End Goals
//             </motion.h2>
//             <p className="text-lg md:text-xl mb-12">
//               Our mission is to provide a source of investment income and business involvement 
//               for athletes while helping historically ignored groups achieve entrepreneurial success.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {goals.map((goal, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="flex items-center space-x-3 bg-black/30 rounded-xl p-4 backdrop-blur-sm"
//                 >
//                   <Sparkles className="h-5 w-5 text-orange-500" />
//                   <span className="text-gray-200">{goal}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

    

//     </div>
//   );
// };

// export default VCGroup;
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Briefcase, Heart, Sparkles } from 'lucide-react';

const VCGroup = () => {
  return (
    <div className="bg-black text-gray-200">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[100vh] flex flex-col items-center justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/d0514VFc/gary-shear-Kc-V1-YETn58-unsplash.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Athlete-Focused <br /> <span className="text-orange-500">Venture Capital</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            As an integral part of ABD’s athlete-focused mission, we form a venture capital fund 
            where athletes (college, pro, or retired) can invest in small businesses, primarily 
            founded by BIPOC, females, or student athletes. The goal is to provide investment income 
            while helping historically ignored groups achieve entrepreneurial success.
          </p>

          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              Learn More
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-500/50 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              Partner With Us
            </motion.button>
          </div> */}
        </motion.div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              Our Focus Areas
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Empowering athletes while supporting underrepresented entrepreneurs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1: Athlete Investors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co.com/p608G2KT/Whats-App-Image-2025-11-14-at-03-21-07-815a2a56.jpg"
                alt="Athlete Investors"
                className="w-full h-64 md:h-72 object-cover opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <div className="text-center">
                  {/* <div className={`inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-500 p-3 rounded-full mb-4`}>
                    <Users className="h-8 w-8 text-black" />
                  </div> */}
                  <h3 className="text-2xl font-semibold text-white mb-2">Athlete Investors</h3>
                  <p className="text-gray-300">College, pro, and retired athletes get opportunity to invest in start-ups.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: BIPOC & Female Founders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="BIPOC & Female Founders"
                className="w-full h-64 md:h-72 object-cover opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <div className="text-center">
                  {/* <div className={`inline-flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-full mb-4`}>
                    <Target className="h-8 w-8 text-black" />
                  </div> */}
                  <h3 className="text-2xl font-semibold text-white mb-2">BIPOC & Female Founders</h3>
                  <p className="text-gray-300">Focus on businesses founded by historically underrepresented groups.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Student Athlete Entrepreneur */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co.com/BKgWCLYx/Whats-App-Image-2025-11-14-at-04-13-50-ee217238.jpg"
                alt="Student Athlete Entrepreneur"
                className="w-full h-64 md:h-72 object-cover opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <div className="text-center">
                  {/* <div className={`inline-flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-500 p-3 rounded-full mb-4`}>
                    <Briefcase className="h-8 w-8 text-black" />
                  </div> */}
                  <h3 className="text-2xl font-semibold text-white mb-2">Student Athlete Entrepreneur</h3>
                  <p className="text-gray-300">Special focus on start-ups founded by student athletes entrepreneur.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Dual Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <img
                src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dual Mission"
                className="w-full h-64 md:h-72 object-cover opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <div className="text-center mb-4 md:mt-[40px]">
                  {/* <div className={`inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-green-400 p-3 rounded-full mb-4 md:mt-[26px]`}>
                    <Heart className="h-8 w-8 text-black" />
                  </div> */}
                  <h3 className="text-2xl font-semibold text-white  mb-2">Dual Mission</h3>
                  <p className="text-gray-300">Investment income for athletes while supporting ignored groups achieve goals.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Goals Section with Parallax ===== */}
      <section
        className="py-24 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/rKjJgFXg/chuttersnap-u5-XMXzdc-Er-I-unsplash.jpg')",
        }}
      >
        <div className="bg-black/70 py-24">
          <div className="max-w-5xl mx-auto px-4 text-center text-gray-200">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-orange-500 mb-8"
            >
              End Goals
            </motion.h2>
            <p className="text-lg md:text-xl mb-12">
              Our mission is to provide a source of investment income and business involvement 
              for athletes while helping historically ignored groups achieve entrepreneurial success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Goal 1 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-black/30 rounded-xl p-4 backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-gray-200">Provide source of investment income for athletes</span>
              </motion.div>

              {/* Goal 2 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-black/30 rounded-xl p-4 backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-gray-200">Create business involvement opportunities</span>
              </motion.div>

              {/* Goal 3 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-black/30 rounded-xl p-4 backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-gray-200">Support BIPOC & female founders</span>
              </motion.div>

              {/* Goal 4 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-black/30 rounded-xl p-4 backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-gray-200">Empower student athlete entrepreneurs</span>
              </motion.div>

              {/* Goal 5 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-black/30 rounded-xl p-4 backdrop-blur-sm"
              >
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-gray-200">Build long-term wealth for athlete investors</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VCGroup;
