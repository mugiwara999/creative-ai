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
              Turning Ideas into <span className="text-[#BFFF00]">Visual Stories</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              AI Video Director specializing in cinematic content that connects with audiences
            </p>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#BFFF00]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_neural-gallery-3/artifacts/wwjpypvu_WhatsApp%20Image%202026-04-09%20at%201.26.05%20AM%20%281%29.jpeg"
                alt="Thilak Varma - AI Video Director"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#BFFF00]/30 group-hover:border-[#BFFF00]/60 transition-all duration-300 shadow-lg shadow-[#BFFF00]/20"
              />
            </div>
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
                I'm Thilak Varma, and I work as an AI Video Director. I like turning ideas into visual stories using AI — from shaping the concept to building it into a complete video. Most of my work focuses on making content that feels cinematic but still connects with people.
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
                I create AI-driven videos from idea to final output — including storyboarding, visual generation, editing, and design. I also work on social media strategy, SEO, lead generation, and content growth to make sure the content actually performs.
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
                I focus on making content that not only looks good but also connects with the audience. I've worked with different clients and managed social media pages, so I understand what works and what doesn't. I'm consistent with my work, quick with delivery, and always try to keep the storytelling clear and engaging.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#BFFF00] mb-2">
                {projectsCount}+
              </div>
              <div className="text-white/60 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center border-none md:border-x border-[#BFFF00]/20 md:px-4">
              <div className="text-4xl md:text-5xl font-bold text-[#BFFF00] mb-2">
                {viewsCount}+ Million
              </div>
              <div className="text-white/60 text-sm md:text-base">Total Views</div>
            </div>
            <div className="text-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 bg-[#BFFF00] text-black font-bold px-6 py-4 rounded-lg hover:bg-[#a8e600] transition-all duration-300 animate-float group"
              >
                <svg 
                  className="w-5 h-5 group-hover:scale-110 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                Book a 1:1 Session
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;