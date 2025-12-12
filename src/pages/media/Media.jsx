// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Camera, Film, Tv, Play, Pause } from 'lucide-react';
// import video1 from '../../assets/whatsapp-video.mp4';

// const Media = () => {
//   const [isPlaying, setIsPlaying] = useState(true);
// const videoRef = useRef(null);

// const togglePlayback = (e) => {
//   e.stopPropagation();
//   const vid = videoRef.current;
//   if (!vid) return;
//   if (vid.paused) {
//     vid.play();
//     setIsPlaying(true);
//   } else {
//     vid.pause();
//     setIsPlaying(false);
//   }
// };

//   const portfolio = [
//     {
//       title: 'Basketball Rising Stars',
//       type: 'Documentary Short',
//       views: '2.5M',
//       image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?w=800'
//     },
//     {
//       title: 'NIL Success Stories',
//       type: 'Docuseries Episode',
//       views: '1.8M',
//       image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=800'
//     },
//     {
//       title: 'Training Day Chronicles',
//       type: 'Behind the Scenes',
//       views: '3.2M',
//       image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800'
//     }
//   ];

//   const achievements = [
//     { number: '50M+', label: 'Total Views' },
//     { number: '25+', label: 'Original Productions' },
//     { number: '500+', label: 'Athletes Featured' },
//     { number: '15+', label: 'Awards Won' }
//   ];

//   return (
//     <div className="bg-black text-gray-200">

//       {/* ===== HERO SECTION WITH PARALLAX ===== */}
//       <section
//         className="relative min-h-[100vh] flex flex-col justify-center text-center bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=1600')"
//         }}
//       >
//         {/* Overlay for dark effect */}
//         <div className="absolute inset-0 bg-black/70"></div>

//         <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
//           {/* Small Badge */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-6"
//           >
//             <Camera className="h-5 w-5 text-orange-500" />
//             <span className="text-orange-400 font-medium">Sports Media Production</span>
//           </motion.div> */}

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
//           >
//             <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               ABD
//             </span>{" "}
//             <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
//               Media
//             </span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl"
//           >
//             Storytelling that redefines how athletes are seen, supported, and celebrated.
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed"
//           >
//             ABD Media is the storytelling and cultural strategy arm of <span className="text-orange-400 font-semibold">Athlete By Design </span>— a
//             branded content engine that shapes how the next generation of athletes is seen,
//             supported, and celebrated. <br /><br />
//             Our flagship docuseries, <i className="text-orange-400 font-semibold">NEX GEN – NIL</i>, is already in motion, with a powerful sizzle
//             reel completed and identifying prospective streaming platforms. This is more than
//             episodic content — it’s a vehicle to spotlight transformational journeys, elevate
//             underrepresented voices, and build brand affinity across every vertical we operate —
//             from NIL to nutrition.
//           </motion.p>
//         </div>
//       </section>


//       {/* ===== SERVICES SECTION WITH PARALLAX ===== */}
//       {/* Services Section */}
//       <section className="py-24 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Our <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Services</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Comprehensive media production solutions for the modern sports industry
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* ===== NEX GEN – NIL Docuseries ===== */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-xl">
//                   <Tv className="h-8 w-8 text-white" />
//                 </div>
//                 <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-400/20 text-yellow-400">
//                   In Production
//                 </span>
//               </div>

//               <h3 className="text-2xl font-semibold text-white mb-4">
//                 <span><i>NEX GEN – NIL</i> Docuseries</span>
//               </h3>

//               <p className="text-gray-400 leading-relaxed">
//                 Our flagship docuseries showcasing transformational athlete journeys
//               </p>
//             </motion.div>

//             {/* ===== Brand Content Creation ===== */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-3 rounded-xl">
//                   <Camera className="h-8 w-8 text-white" />
//                 </div>
//                 <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/20 text-green-400">
//                   Available
//                 </span>
//               </div>

//               <h3 className="text-2xl font-semibold text-white mb-4">
//                 Brand Content Creation
//               </h3>

//               <p className="text-gray-400 leading-relaxed">
//                 Professional video and photo content for athlete brand building
//               </p>
//             </motion.div>

//             {/* ===== Podcasts ===== */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl">
//                   <Film className="h-8 w-8 text-white" />
//                 </div>
//                 <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-400/20 text-blue-400">
//                   Coming Soon
//                 </span>
//               </div>

//               <h3 className="text-2xl font-semibold text-white mb-4">
//                 Podcasts
//               </h3>

//               <p className="text-gray-400 leading-relaxed">
//                 In-depth interviews, discussions and film content on all things sports.
//               </p>
//             </motion.div>

//             {/* ===== Live Streaming ===== */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-xl">
//                   <Play className="h-8 w-8 text-white" />
//                 </div>
//                 <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/20 text-green-400">
//                   Available
//                 </span>
//               </div>

//               <h3 className="text-2xl font-semibold text-white mb-4">
//                 Live Streaming
//               </h3>

//               <p className="text-gray-400 leading-relaxed">
//                 Professional streaming and coverage of athletic events
//               </p>
//             </motion.div>
//           </div>

//         </div>
//       </section>


//       {/* ===== PORTFOLIO SECTION WITH PARALLAX ===== */}
//       <section
//         className="relative py-24 bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?w=1600')"
//         }}
//       >
//         <div className="absolute inset-0 bg-black/85"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Featured <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Content</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Showcasing the stories that matter in modern athletics
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {portfolio.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="group cursor-pointer"
//               >
//                 <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300">
//                   <div className="relative">
//                     {index === 0 ? (
//                       <video
//                         ref={videoRef}
//                         src={video1}
//                         className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                       />
//                     ) : (
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     )}
//                     {/* Hover overlay that toggles play/pause */}
//                     {index === 0 && (
//                       <button
//                         onClick={togglePlayback}
//                         className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300"
//                         aria-label={isPlaying ? 'Pause video' : 'Play video'}
//                       >
//                         {isPlaying ? (
//                           <Pause className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                         ) : (
//                           <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                         )}
//                       </button>
//                     )}
//                   </div>
//                   <div className="p-6">
//                     <span className="text-orange-400 text-sm font-medium">{item.type}</span>
//                     <h3 className="text-xl font-semibold text-white mb-2 mt-1">{item.title}</h3>
//                     <p className="text-gray-400 text-sm">{item.views} views</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// };

// export default Media;
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Tv, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import video1 from '../../assets/whatsapp-video.mp4';
import video2 from '../../assets/WhatsApp Video 2025-12-08 at 9.29.08 AM.mp4'; // add your 2nd video here

const Media = () => {
  // Track refs and state for the first two cards (both are videos)
  const videoRef0 = useRef(null);
  const videoRef1 = useRef(null);
  const [isPlaying0, setIsPlaying0] = useState(false);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isMuted0, setIsMuted0] = useState(true);
  const [isMuted1, setIsMuted1] = useState(true);

  // Helper: try playing with/without sound when item is in view
  // Autoplay helper removed
  // Autoplay removed — videos only play on click


  // Manual controls
  const togglePlayback = (e, idx) => {
    e.stopPropagation();
    const el = idx === 0 ? videoRef0.current : videoRef1.current;
    const setP = idx === 0 ? setIsPlaying0 : setIsPlaying1;
    if (!el) return;
    if (el.paused) {
      // Try resume with sound first
      el.muted = false;
      el.play().then(() => {
        setP(true);
        if (idx === 0) setIsMuted0(false); else setIsMuted1(false);
      }).catch(() => {
        // if blocked, try muted
        el.muted = true;
        el.play().then(() => setP(true));
      });
    } else {
      el.pause();
      setP(false);
    }
  };

  const toggleMute = (e, idx) => {
    e.stopPropagation();
    const el = idx === 0 ? videoRef0.current : videoRef1.current;
    const muted = idx === 0 ? isMuted0 : isMuted1;
    const setM = idx === 0 ? setIsMuted0 : setIsMuted1;
    if (!el) return;
    el.muted = !muted;
    setM(!muted);
    if (el.paused) {
      el.play().catch(() => {});
    }
  };

  const portfolio = [
    {
      title: 'Basketball Rising Stars',
      type: 'Documentary Short',
      views: '2.5M',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?w=800',
    },
    {
      title: 'Nex Gen - NIL',
      type: 'Docuseries Episode',
      views: '1.8M',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=800',
    },
    {
      title: 'Training Day Chronicles',
      type: 'Behind the Scenes',
      views: '3.2M',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=800',
    },
  ];

  const achievements = [
    { number: '50M+', label: 'Total Views' },
    { number: '25+', label: 'Original Productions' },
    { number: '500+', label: 'Athletes Featured' },
    { number: '15+', label: 'Awards Won' },
  ];

  return (
    <div className="bg-black text-gray-200">
      {/* ===== HERO SECTION WITH PARALLAX ===== */}
      <section
        className="relative min-h-[100vh] flex flex-col justify-center text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ABD
            </span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Media
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl"
          >
            Storytelling that redefines how athletes are seen, supported, and celebrated.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed"
          >
            ABD Media is the storytelling and cultural strategy arm of <span className="text-orange-400 font-semibold">Athlete By Design </span>— a
            branded content engine that shapes how the next generation of athletes is seen,
            supported, and celebrated. <br />
            <br />
            Our flagship docuseries, <i className="text-orange-400 font-semibold">NEX GEN – NIL</i>, is already in motion, with a powerful sizzle
            reel completed and identifying prospective streaming platforms.
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-xl">
                  <Tv className="h-8 w-8 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-400/20 text-yellow-400">
                  In Production
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                <span>
                  <i>NEX GEN – NIL</i> Docuseries
                </span>
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Our flagship docuseries showcasing transformational athlete journeys
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-3 rounded-xl">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/20 text-green-400">
                  Available
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Brand Content Creation</h3>

              <p className="text-gray-400 leading-relaxed">
                Professional video and photo content for athlete brand building
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl">
                  <Film className="h-8 w-8 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-400/20 text-blue-400">
                  Coming Soon
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Podcasts</h3>

              <p className="text-gray-400 leading-relaxed">
                In-depth interviews, discussions and film content on all things sports.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-xl">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/20 text-green-400">
                  Available
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Live Streaming</h3>

              <p className="text-gray-400 leading-relaxed">
                Professional streaming and coverage of athletic events
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION WITH PARALLAX ===== */}
      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?w=1600')",
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
                    {index === 0 ? (
                      <video
                        ref={videoRef0}
                        data-idx="0"
                        src={video1}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        playsInline
                        preload="metadata"
                      />
                    ) : index === 1 ? (
                      <video
                        ref={videoRef1}
                        data-idx="1"
                        src={video2}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}

                    {/* Overlay controls for card 1 */}
                    {index === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                        <button
                          onClick={(e) => togglePlayback(e, 0)}
                          className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20"
                          aria-label={isPlaying0 ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying0 ? (
                            <Pause className="h-8 w-8 text-white" />
                          ) : (
                            <Play className="h-8 w-8 text-white" />
                          )}
                        </button>
                        {/* <button
                          onClick={(e) => toggleMute(e, 0)}
                          className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20"
                          aria-label={isMuted0 ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted0 ? (
                            <VolumeX className="h-8 w-8 text-white" />
                          ) : (
                            <Volume2 className="h-8 w-8 text-white" />
                          )}
                        </button> */}
                      </div>
                    )}

                    {/* Overlay controls for card 2 */}
                    {index === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                        <button
                          onClick={(e) => togglePlayback(e, 1)}
                          className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20"
                          aria-label={isPlaying1 ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying1 ? (
                            <Pause className="h-8 w-8 text-white" />
                          ) : (
                            <Play className="h-8 w-8 text-white" />
                          )}
                        </button>
                        {/* <button
                          onClick={(e) => toggleMute(e, 1)}
                          className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20"
                          aria-label={isMuted1 ? 'Unmute video' : 'Mute video'}
                        >
                          {isMuted1 ? (
                            <VolumeX className="h-8 w-8 text-white" />
                          ) : (
                            <Volume2 className="h-8 w-8 text-white" />
                          )}
                        </button> */}
                      </div>
                    )}
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
