import React, { useState, useEffect, useRef } from 'react';
import { User, Target, Zap } from 'lucide-react';

const About = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      // Animate Projects Count to 19
      let projectInterval = setInterval(() => {
        setProjectsCount((prev) => {
          if (prev < 19) {
            return prev + 1;
          } else {
            clearInterval(projectInterval);
            return 19;
          }
        });
      }, 50);

      // Animate Views Count to 50
      let viewsInterval = setInterval(() => {
        setViewsCount((prev) => {
          if (prev < 50) {
            return prev + 1;
          } else {
            clearInterval(viewsInterval);
            return 50;
          }
        });
      }, 30);

      return () => {
        clearInterval(projectInterval);
        clearInterval(viewsInterval);
      };
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#BFFF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BFFF00]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Redefining Creativity with <span className="text-[#BFFF00]">AI</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              I'm a creative technologist pushing the boundaries of what's possible with AI-powered video production. 
              Combining artistic vision with cutting-edge generative AI tools to create captivating visual experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div 
              onClick={() => window.open('#who-i-am', '_blank')}
              className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="bg-[#BFFF00]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#BFFF00]/20 transition-colors duration-300">
                <User className="text-[#BFFF00]" size={28} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Who I Am</h3>
              <p className="text-white/60 leading-relaxed">
                A passionate GenAI artist and video editor with expertise in transforming ideas into stunning visual narratives that captivate audiences.
              </p>
            </div>

            <div 
              onClick={() => window.open('#what-i-do', '_blank')}
              className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="bg-[#BFFF00]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#BFFF00]/20 transition-colors duration-300">
                <Target className="text-[#BFFF00]" size={28} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">What I Do</h3>
              <p className="text-white/60 leading-relaxed">
                Specialize in AI-powered video production, social media content creation, and cinematic storytelling using the latest generative AI technologies.
              </p>
            </div>

            <div 
              onClick={() => window.open('#why-choose-me', '_blank')}
              className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="bg-[#BFFF00]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#BFFF00]/20 transition-colors duration-300">
                <Zap className="text-[#BFFF00]" size={28} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Why Choose Me</h3>
              <p className="text-white/60 leading-relaxed">
                I deliver high-quality, engaging content that drives results. Fast turnarounds, innovative approaches, and a deep understanding of social media trends.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#BFFF00] mb-2">
                {projectsCount}+
              </div>
              <div className="text-white/60 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center border-l border-[#BFFF00]/20">
              <div className="text-4xl md:text-5xl font-bold text-[#BFFF00] mb-2">
                {viewsCount}+ Million
              </div>
              <div className="text-white/60 text-sm md:text-base">Total Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;