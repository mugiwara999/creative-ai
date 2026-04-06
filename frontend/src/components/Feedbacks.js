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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group"
            >
              <Quote className="text-[#BFFF00]/30 mb-4" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#BFFF00] fill-[#BFFF00]" size={18} />
                ))}
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#BFFF00]/30"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;