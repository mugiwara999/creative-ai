import React from 'react';
import VideoCard from './VideoCard';
import { featuredWorks } from '../mock';
import { Sparkles } from 'lucide-react';

const FeaturedWorks = () => {
  return (
    <section id="featured" className="py-24 bg-black">
      <div className="container mx-auto px-6">
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
    </section>
  );
};

export default FeaturedWorks;