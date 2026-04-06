import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#BFFF00]/5"></div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(191,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,255,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          {/* Main heading */}
          <div className="mb-6">
            <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-[#BFFF00]/10 rounded-full border border-[#BFFF00]/30">
              GenAI Creative Artist
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            <span className="text-white">What </span>
            <span className="text-[#BFFF00]">Electricity</span>
            <span className="text-white"> Was to Industry,</span>
            <br />
            <span className="text-[#BFFF00]">AI</span>
            <span className="text-white"> Is to </span>
            <span className="text-[#BFFF00]">Creativity</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            AI Creative Ads • Cinematic Shorts • Visual Storyboarding • Content Strategy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              onClick={() => scrollToSection('featured')}
              className="bg-[#BFFF00] text-black hover:bg-[#a8e600] font-semibold px-8 py-6 text-lg group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Watch My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-[#BFFF00] text-[#BFFF00] hover:bg-[#BFFF00]/10 font-semibold px-8 py-6 text-lg"
            >
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>

      {/* Hire Me button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 animate-vibrate shadow-lg shadow-white/30"
        >
          Hire Me
        </button>
      </div>

      <style jsx>{`
        @keyframes vibrate {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          10% { transform: translate(-2px, -2px) rotate(-1deg); }
          20% { transform: translate(2px, -2px) rotate(1deg); }
          30% { transform: translate(-2px, 2px) rotate(-1deg); }
          40% { transform: translate(2px, 2px) rotate(1deg); }
          50% { transform: translate(-2px, -2px) rotate(-1deg); }
          60% { transform: translate(2px, -2px) rotate(1deg); }
          70% { transform: translate(-2px, 2px) rotate(-1deg); }
          80% { transform: translate(2px, 2px) rotate(1deg); }
          90% { transform: translate(-2px, -2px) rotate(-1deg); }
        }
        
        .animate-vibrate {
          animation: vibrate 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;