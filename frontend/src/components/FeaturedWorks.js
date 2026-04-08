import React from 'react';
import VideoCard from './VideoCard';
import { featuredWorks } from '../mock';
import { Sparkles } from 'lucide-react';

const FeaturedWorks = () => {
  const featuredOn = [
    "Deccan Chronicle",
    "Sakshi",
    "News18",
    "way2news",
    "Mahanews"
  ];

  return (
    <section id="featured" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Featured On Section */}
        <div className="mb-16">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Featured <span className="text-[#BFFF00]">On</span>
          </h3>
          <div className="relative overflow-hidden py-6">
            <div className="flex animate-scroll-right whitespace-nowrap">
              {/* Duplicate the array for seamless loop */}
              {[...featuredOn, ...featuredOn, ...featuredOn].map((outlet, index) => (
                <div
                  key={index}
                  className="inline-flex items-center mx-6 px-10 py-4 bg-zinc-900/50 border border-[#BFFF00]/20 rounded-lg"
                >
                  <span className="text-white/80 font-semibold text-xl">{outlet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-[#BFFF00]" size={24} />
            <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
              Featured Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Showcasing My <span className="text-[#BFFF00]">Best Creations</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Handpicked projects that demonstrate the power of AI in creative storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-left 25s linear infinite;
        }
        
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default FeaturedWorks;