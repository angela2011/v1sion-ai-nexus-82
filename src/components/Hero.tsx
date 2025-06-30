import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        videoRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* First Screen - Video with Parallax Effect and Only Main Heading */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden">
        {/* Video Background with Parallax */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-75 ease-out"
            style={{ 
              transform: 'scale(1.1)',
              willChange: 'transform'
            }}
          >
            <source src="/public/Strategic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-black/20 z-5"></div>
        </div>

        {/* Only Main Heading on First Screen */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-tomorrow font-medium leading-tight fade-in-up">
              <span className="block text-white drop-shadow-2xl">
                Strategic AI-Native
              </span>
              <span className="block bg-gradient-to-r from-green-300 via-green-200 to-emerald-400 bg-clip-text text-transparent mt-2 drop-shadow-2xl">
                Transformation
              </span>
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Screen - Content Below Video */}
      <section className="section-spacing bg-white relative z-20">
        <div className="section-container">
          <div className="text-center flex flex-col items-center">
            {/* Professional Badge */}
            <div className="mb-8 inline-flex items-center gap-2 frosted-glass px-6 py-3 hover-lift">
              <Sparkles className="w-5 h-5 text-amber-600 animated-icon" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Enterprise AI Transformation</span>
            </div>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl font-agile text-gray-700 mb-8 max-w-4xl mx-auto fade-in-up leading-relaxed">
              Building Tomorrow's AI-Native Organizations Today
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 fade-in-up">
              <a 
                href="https://calendly.com/versiontwoworld/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="professional-button group flex items-center justify-center gap-4 text-lg"
              >
                Schedule AI Readiness Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </a>
              <a 
              href="mailto:contact@versiontwo.world" 
              className="professional-button-secondary text-lg inline-flex items-center justify-center"
              >
              Book Strategic Consultation
              </a>
            </div>

            {/* Redesigned Contact Info - Compact & Professional */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up">
              {/* Email Contact */}
              <a 
                href="mailto:contact@versiontwo.world" 
                className="group inline-flex items-center gap-3 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 p-0.5 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                    <Mail className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700 transition-colors duration-300">
                  contact@versiontwo.world
                </span>
              </a>
              
              {/* Phone Contact */}
              <a 
                href="tel:+91 9711390266" 
                className="group inline-flex items-center gap-3 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 p-0.5 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  +91 9711390266
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 fade-in-up">
              <div className="inline-flex items-center gap-6 px-6 py-3 bg-gray-50/80 backdrop-blur-sm border border-gray-200/40 rounded-full">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
