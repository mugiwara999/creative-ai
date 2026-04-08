import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    if (formData.name && formData.email && formData.message) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BFFF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BFFF00]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Side - Get In Touch */}
            <div>
              <div className="mb-12">
                <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  Let's Work <span className="text-[#BFFF00]">Together</span>
                </h2>
                <p className="text-white/60 text-lg">
                  Have a project in mind? Let's create something amazing together. Drop me a message and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid gap-6 mb-8">
                <a 
                  href="mailto:thilakvarma003@gmail.com"
                  className="bg-zinc-900/50 p-6 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#BFFF00]/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#BFFF00]/20 transition-colors">
                      <Mail className="text-[#BFFF00]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Email Me</h3>
                      <p className="text-white/60 text-sm">thilakvarma003@gmail.com</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919347041279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900/50 p-6 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group cursor-pointer block"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#BFFF00]/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#BFFF00]/20 transition-colors">
                      <MessageSquare className="text-[#BFFF00]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Quick Chat</h3>
                      <p className="text-white/60 text-sm">WhatsApp: +91 93470 41279</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-white font-semibold mb-2 block">Your Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-black border-[#BFFF00]/20 text-white focus:border-[#BFFF00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-black border-[#BFFF00]/20 text-white focus:border-[#BFFF00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 block">Your Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-black border-[#BFFF00]/20 text-white focus:border-[#BFFF00] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#BFFF00] text-black hover:bg-[#a8e600] font-semibold py-6 text-lg group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Side - Workflow */}
            <div>
              <div className="mb-12">
                <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
                  My Process
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                  How I <span className="text-[#BFFF00]">Work</span>
                </h2>
                <p className="text-white/60 text-lg">
                  A streamlined process from concept to delivery
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { step: 1, title: "Understanding the Requirement", delay: 0 },
                  { step: 2, title: "Concept & Direction", delay: 100 },
                  { step: 3, title: "Script & Storyboarding", delay: 200 },
                  { step: 4, title: "AI Visual Generation", delay: 300 },
                  { step: 5, title: "Editing & Sound Design", delay: 400 },
                  { step: 6, title: "Review & Revisions", delay: 500 },
                  { step: 7, title: "Final Delivery & Feedback", delay: 600 }
                ].map((item, index) => (
                  <div key={item.step}>
                    <div 
                      className="bg-zinc-900/50 p-6 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/40 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-[#BFFF00]/10 animate-slide-in-right"
                      style={{ animationDelay: `${item.delay}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-[#BFFF00]/10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-[#BFFF00] text-lg group-hover:bg-[#BFFF00] group-hover:text-black transition-all duration-300">
                          {item.step}
                        </div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-[#BFFF00] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    {index < 6 && (
                      <div className="flex justify-center py-2">
                        <div className="w-0.5 h-6 bg-[#BFFF00]/30"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Contact;