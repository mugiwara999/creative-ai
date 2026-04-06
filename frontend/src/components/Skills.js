import React from 'react';
import { skills } from '../mock';
import * as LucideIcons from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BFFF00]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Tools of the <span className="text-[#BFFF00]">Trade</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Mastering the latest AI technologies and creative tools to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = LucideIcons[skill.icon] || LucideIcons.Circle;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="bg-[#BFFF00]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#BFFF00]/20 transition-colors duration-300">
                  <IconComponent className="text-[#BFFF00]" size={32} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{skill.name}</h3>
                <p className="text-white/60 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;