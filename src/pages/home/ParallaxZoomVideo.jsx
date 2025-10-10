// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import video from "../../assets/WhatsApp Video 2025-04-11 at 4.50.14 AM.mp4";

// // // Register ScrollTrigger plugin
// // gsap.registerPlugin(ScrollTrigger);

// // const ParallaxZoomVideo = () => {
// //   const videoContainerRef = useRef(null);
// //   const videoRef = useRef(null);

// //   useEffect(() => {
// //     const container = videoContainerRef.current;
// //     const video = videoRef.current;

// //     if (!container || !video) return;

// //     // Set initial state
// //     gsap.set(video, { 
// //       scale: 1,
// //       width: '320px',
// //       height: '320px'
// //     });

// //     // Create the animation timeline
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: container,
// //         start: "top bottom",
// //         end: "bottom top",
// //         scrub: 1,
// //         markers: false // Set to true for debugging
// //       }
// //     });

// //     tl.to(video, {
// //       scale: 1.5,
// //       width: '80vw',
// //       height: '80vh',
// //       ease: "power1.out"
// //     });

// //     // Cleanup function
// //     return () => {
// //       tl.scrollTrigger?.kill();
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     };
// //   }, []);

// //   return (
// //     <div 
// //       ref={videoContainerRef} 
// //       className="w-full h-screen flex items-center justify-center bg-black overflow-hidden"
// //     >
// //       <div className="relative w-full h-full flex items-center justify-center">
// //         <video
// //           ref={videoRef}
// //           className="object-cover rounded-lg shadow-xl"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         >
// //           <source src={video} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ParallaxZoomVideo;




// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import videoFile from "../../assets/WhatsApp Video 2025-04-11 at 4.50.14 AM.mp4";

// // gsap.registerPlugin(ScrollTrigger);

// // const ParallaxZoomVideo = () => {
// //   const containerRef = useRef(null);
// //   const videoRef = useRef(null);

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     const video = videoRef.current;

// //     if (!container || !video) return;

// //     // Initial setup
// //     gsap.set(video, {
// //       scale: 1,
// //       width: "60vw", // responsive initial width
// //       height: "40vh", // responsive initial height
// //       y: 0
// //     });

// //     // Scroll-triggered smooth animation
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: container,
// //         start: "top bottom",
// //         end: "bottom top",
// //         scrub: 1.5, // slower scrub for smoother feel
// //         ease: "power2.out",
// //         invalidateOnRefresh: true
// //       }
// //     });

// //     tl.to(video, {
// //       scale: 1.8,
// //       width: "80vw",
// //       height: "60vh",
// //       y: -40,
// //       ease: "power2.out"
// //     });

// //     // Cleanup
// //     return () => {
// //       tl.scrollTrigger?.kill();
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     };
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       className="w-full h-screen flex items-center justify-center overflow-hidden bg-black relative"
// //     >
// //       <video
// //         ref={videoRef}
// //         className="object-cover rounded-xl shadow-2xl"
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //       >
// //         <source src={videoFile} type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>
// //       {/* Optional overlay for cinematic effect */}
// //       <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
// //     </div>
// //   );
// // };

// // export default ParallaxZoomVideo;


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ParallaxZoomVideo = () => {
//   const containerRef = useRef(null);
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const video = iframeRef.current;

//     if (!container || !video) return;

//     // Scroll-triggered zoom effect
//     gsap.fromTo(
//       video,
//       {
//         scale: 1,
//         width: "60vw",
//         height: "40vh",
//         y: 0,
//       },
//       {
//         scale: 1.4,
//         width: "100vw",
//         height: "100vh",
//         y: -60,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: container,
//           start: "top center",
//           end: "bottom top",
//           scrub: 2,
//           invalidateOnRefresh: true,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   // Click করলে video unmute + controls দেখাবে
//   const handleVideoClick = () => {
//     const iframe = iframeRef.current;
//     if (!iframe) return;

//     // Unmute + play
//     iframe.contentWindow.postMessage(
//       '{"event":"command","func":"unMute","args":""}',
//       "*"
//     );
//     iframe.contentWindow.postMessage(
//       '{"event":"command","func":"playVideo","args":""}',
//       "*"
//     );

//     // controls enable
//     if (iframe.src.includes("controls=0")) {
//       iframe.src = iframe.src.replace("controls=0", "controls=1");
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-black relative"
//     >
//       <iframe
//         ref={iframeRef}
//         onClick={handleVideoClick}
//         className="object-cover rounded-xl shadow-2xl cursor-pointer"
//         width="100%"
//         height="100%"
//         src="https://www.youtube.com/embed/b5HtjqVjTqo?autoplay=1&mute=1&controls=0&loop=1&playlist=b5HtjqVjTqo&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1"
//         title="Sport Promo Video"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//       ></iframe>

//       {/* Overlay for cinematic effect */}
//       <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
//     </div>
//   );
// };

// export default ParallaxZoomVideo;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxZoomVideo = () => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = iframeRef.current;

    if (!container || !video) return;

    gsap.fromTo(
      video,
      {
        scale: 1,
        width: '60vw',
        height: '40vh',
        y: 0,
      },
      {
        scale: 1.4,
        width: '100vw',
        height: '100vh',
        y: -60,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          end: 'bottom top',
          scrub: 2,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleVideoClick = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.contentWindow.postMessage(
      '{"event":"command","func":"unMute","args":""}',
      '*'
    );
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    );

    if (iframe.src.includes('controls=0')) {
      iframe.src = iframe.src.replace('controls=0', 'controls=1');
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-black relative"
    >
      <iframe
        ref={iframeRef}
        onClick={handleVideoClick}
        className="object-cover rounded-xl shadow-2xl cursor-pointer"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/b5HtjqVjTqo?autoplay=1&mute=1&controls=0&loop=1&playlist=b5HtjqVjTqo&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1"
        title="Sport Promo Video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </div>
  );
};

export default ParallaxZoomVideo;
