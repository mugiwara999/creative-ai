import React from 'react';
import VideoCard from './VideoCard';
import { creativeAds } from '../mock';
import { Megaphone } from 'lucide-react';

const CreativeAds = () => {
  return (
    <section id="creative-ads" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Megaphone className="text-[#BFFF00]" size={24} />
            <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
              Creative Ads
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            High-Impact <span className="text-[#BFFF00]">Marketing Content</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Attention-grabbing ads designed to convert and engage on social media platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creativeAds.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeAds;