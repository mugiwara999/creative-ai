import React from 'react';
import VideoCard from './VideoCard';
import { cinematicWorks } from '../mock';
import { Film } from 'lucide-react';

const CinematicWorks = () => {
  return (
    <section id="cinematic" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film className="text-[#BFFF00]" size={24} />
            <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
              Cinematic Film Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Storytelling Through <span className="text-[#BFFF00]">Cinematic Vision</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Immersive narratives crafted with AI-powered cinematography and visual effects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cinematicWorks.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinematicWorks;