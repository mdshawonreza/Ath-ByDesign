
// import React, { useRef, useEffect, useState } from "react";
// import Female1 from "../../assets/pexels-pixabay-290416.jpg";
// import Female2 from "../../assets/pexels-willpicturethis-1954524.jpg";
// import Boxer from "../../assets/pexels-pixabay-290416.jpg"; // replace with your boxer image
// import Video from "../../assets/WhatsApp Video 2025-11-02 at 23.05.44_a9b69dfb.mp4";

// const PartnersSection = () => {
//   const videoRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );
//     if (videoRef.current) observer.observe(videoRef.current);
//     return () => {
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       if (isVisible) {
//         video.muted = false;
//         video.play().catch((err) => console.log("Autoplay error:", err));
//       } else {
//         video.muted = true;
//         video.pause();
//       }
//     }
//   }, [isVisible]);

//   return (
//     <div className="bg-black">


//       {/* Middle: Boxer image full width */}
//       <div className="relative w-full h-[100vh] overflow-hidden">
//         <img
//           src={Boxer}
//           alt="Boxer"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </div>

//       {/* Bottom: Video full width */}
//       <div className="relative w-full h-[100vh] overflow-hidden bg-black hidden md:flex">
//         <video
//           ref={videoRef}  // <- ref goes here
//           src={Video}
//           className="absolute inset-0 w-full h-full object-cover"
//           loop
//           playsInline
//           muted
//         />
//       </div>
//       <div className="relative w-full overflow-hidden bg-red-600 flex md:hidden">
//         <video
//           ref={videoRef}
//           src={Video}
//           className="w-full h-auto object-cover"
//           loop
//           playsInline
//           muted
//         />
//       </div>



//     </div>
//   );
// };

// export default PartnersSection;
"use client";
import React, { useEffect, useRef, useState } from "react";
import Boxer from "../../assets/pexels-pixabay-290416.jpg";
import Video from "../../assets/WhatsApp Video 2025-11-02 at 23.05.44_a9b69dfb.mp4";

export default function PartnersSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ callback refs without TS types
  const setVideoRef = (el) => { videoRef.current = el; };
  const setSectionRef = (el) => { sectionRef.current = el; };

  const [isVisible, setIsVisible] = useState(false);
  const [soundAllowed, setSoundAllowed] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;
    const io = new IntersectionObserver(
      (entries) => setIsVisible(!!entries[0]?.isIntersecting),
      { threshold: 0.5 }
    );
    io.observe(target);
    return () => io.unobserve(target);
  }, []);

  useEffect(() => {
    if (soundAllowed) return;
    const unlock = () => {
      setSoundAllowed(true);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchend", unlock);
      window.removeEventListener("click", unlock);
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("touchend", unlock, { once: true });
    window.addEventListener("click", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("touchend", unlock);
      window.removeEventListener("click", unlock);
    };
  }, [soundAllowed]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playSafely = () => {
      if (!soundAllowed) video.muted = true; // required for autoplay
      video.play().catch(() => {});
    };

    if (document.hidden) {
      video.pause();
      return;
    }

    if (isVisible) {
      playSafely();
      if (soundAllowed) {
        video.muted = false;
        video.volume = 1;
      }
    } else {
      video.muted = true;
      video.pause();
    }
  }, [isVisible, soundAllowed]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onVis = () => {
      if (document.hidden) video.pause();
      else if (isVisible) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [isVisible]);

  return (
    <div className="bg-black">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <img src={Boxer} alt="Boxer" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div ref={setSectionRef} className="relative w-full overflow-hidden bg-black">
        <video
          ref={setVideoRef}
          src={Video}
          className="w-full h-auto md:h-[100vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noremoteplayback"
        />
      </div>
    </div>
  );
}
