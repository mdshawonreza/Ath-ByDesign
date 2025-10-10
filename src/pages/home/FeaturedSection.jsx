import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FeaturedSection = () => {
  return (
    <section
      className="relative py-24 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* === Video 1 === */}
        <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 h-[350px]">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&playlist=tgbNymZ7vqY&controls=0"
            title="Champion’s Journey"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>

          {/* Hover black effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500"></div>

          {/* Social icons */}
          <div className="absolute inset-0 flex items-center justify-center gap-6">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" z-10"
            >
              <FaFacebookF className="text-white text-4xl" />
            </a>
          </div>
        </div>

        {/* === Video 2 === */}
        <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 h-[350px]">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&playlist=tgbNymZ7vqY&controls=0"
            title="Speed & Strength"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500"></div>

          <div className="absolute inset-0 flex items-center justify-center gap-6">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" z-10"
            >
              <FaInstagram className="text-white text-4xl" />
            </a>
          </div>
        </div>

        {/* === Video 3 === */}
        <div className="group relative bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 h-[350px]">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&playlist=tgbNymZ7vqY&controls=0"
            title="Focus & Fire"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500"></div>

          <div className="absolute inset-0 flex items-center justify-center gap-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" z-10"
            >
              <FaTwitter className="text-white text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
