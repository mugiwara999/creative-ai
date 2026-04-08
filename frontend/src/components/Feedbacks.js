import React from 'react';
import { testimonials } from '../mock';
import { Star, Quote } from 'lucide-react';

const Feedbacks = () => {
  return (
    <section id="feedback" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            What People <span className="text-[#BFFF00]">Say</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Trusted by creative professionals and brands worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900/50 p-6 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/40 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-[#BFFF00]/10 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <Quote className="text-[#BFFF00]/30 mb-3 group-hover:text-[#BFFF00]/50 transition-colors duration-300 group-hover:rotate-12" size={32} />
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-[#BFFF00] fill-[#BFFF00] group-hover:scale-110 transition-transform duration-300" 
                    size={14}
                    style={{
                      transitionDelay: `${i * 50}ms`
                    }}
                  />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-5">
                "{testimonial.content}"
              </p>

              <div>
                <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                {testimonial.role && (
                  <div className="text-white/60 text-xs">{testimonial.role}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Feedbacks;