import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-[#BFFF00]/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-[#BFFF00] mb-2">
              CREATIVE<span className="text-white">AI</span>
            </div>
            <p className="text-white/60 text-sm">Crafting AI-Powered Visual Stories</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-zinc-900 p-3 rounded-full text-white/60 hover:text-[#BFFF00] hover:bg-zinc-800 transition-all duration-300"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#BFFF00]/10 text-center">
          <p className="text-white/40 text-sm flex items-center justify-center gap-2">
            © {currentYear} CreativeAI. Made with <Heart className="text-[#BFFF00]" size={16} fill="#BFFF00" /> using GenAI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;