import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

const VideoCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if it's a Google Drive link
  const isGoogleDrive = project.video.includes('drive.google.com');

  return (
    <>
      <div
        className="group relative bg-zinc-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#BFFF00]/20"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-[#BFFF00] rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
              <Play className="text-black" size={32} fill="black" />
            </div>
          </div>

          {/* Duration badge */}
          {project.duration && (
            <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
              {project.duration}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#BFFF00] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
          
          {project.tools && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#BFFF00]/10 text-[#BFFF00] px-2 py-1 rounded border border-[#BFFF00]/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-full bg-black border-[#BFFF00]/30 p-0">
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#BFFF00] transition-colors z-50"
            >
              <X size={32} />
            </button>
            {isGoogleDrive ? (
              <iframe
                src={project.video}
                className="w-full aspect-video rounded-lg"
                allow="autoplay"
                allowFullScreen
              />
            ) : (
              <video
                src={project.video}
                controls
                autoPlay
                className="w-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="p-6">
              <h2 className="text-white text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-white/70">{project.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoCard;