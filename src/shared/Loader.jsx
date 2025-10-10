import React from 'react';
import logo from '../../src/assets/AthleteByDesign-White_230x.avif';
import loading from '../../src/assets/WhatsApp Video 2025-09-14 at 3.43.48 AM.mp4';

const Loader = () => {
    return (
        <div
            id="full-loading-initial"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
            {/* 🎥 Responsive ভিডিও */}
            <video
                className="w-[800px] md:w-[900px] sm:w-[90vw] h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={loading} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 🌀 Responsive Overlay Logo */}
            <div className='absolute top-1/2 left-1/2 bg-black rounded-full 
                            -translate-x-1/2 -translate-y-1/2 
                            w-[220px] h-[220px] md:w-[160px] md:h-[160px] sm:w-[120px] sm:h-[120px] 
                            flex flex-col justify-center items-center gap-2 pointer-events-none'>
                <img
                    className="loading-img w-[220px] md:w-[160px] sm:w-[120px] animate-scale-bounce object-contain"
                    src={logo}
                    alt="LBJ Logo"
                />
            </div>
        </div>
    );
};

export default Loader;
