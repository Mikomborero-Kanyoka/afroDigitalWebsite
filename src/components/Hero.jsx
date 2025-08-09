import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Custom T-shirts, caps, mugs, and more—designed for impact.";

  useEffect(() => {
    setIsLoaded(true);
    
    // Typing animation
    const typingTimer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);

    return () => clearTimeout(typingTimer);
  }, [currentIndex, fullText]);

  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('../assets/hero.png')`,
        }}
      />
      
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/3 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Main Headlines */}
        <div className={`transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Print Bold.{' '}
            <span className="bg-purple-500 bg-clip-text text-transparent">
              Wear Loud!
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed">
            AfroDigital brings your vision to life with custom-branded apparel that speaks style, identity, and innovation.
            From sleek T-shirts to statement caps, we <span className='text-purple-500'>craft</span> gear that celebrates Black excellence and elevates your message.


          </p>
        </div>

        {/* CTA Button */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <a 
            href="#products" 
            className="group inline-flex items-center bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explore Products
            <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;