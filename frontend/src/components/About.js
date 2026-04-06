import React from 'react';
import { User, Target, Zap } from 'lucide-react';

const About = () => {
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
        </div>
      </div>
    </section>
  );
};

export default About;