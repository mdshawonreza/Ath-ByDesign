import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ChevronDown } from 'lucide-react';

interface ParallaxSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isLast?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  id, 
  title, 
  description, 
  imageUrl, 
  isLast = false 
}) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById(
      id === 'athlete' ? 'philanthropist' : 
      id === 'philanthropist' ? 'entrepreneur' : ''
    );
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id={id}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <Parallax translateY={[-20, 20]} className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </Parallax>
      
      <div className="relative z-20 text-center px-6 transform transition-all duration-700 hover:scale-105">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-white mt-4 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="mt-12 inline-block">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-400 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {!isLast && (
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      )}
    </section>
  );
};

export default ParallaxSection;