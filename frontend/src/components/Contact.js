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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#BFFF00] text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Let's Work <span className="text-[#BFFF00]">Together</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together. Drop me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="mailto:thilakvarma003@gmail.com"
              className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group cursor-pointer block"
            >
              <div className="bg-[#BFFF00]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#BFFF00]/20 transition-colors">
                <Mail className="text-[#BFFF00]" size={28} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Email Me</h3>
              <p className="text-white/60">thilakvarma003@gmail.com</p>
            </a>

            <a
              href="https://wa.me/919347041279"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/50 p-8 rounded-lg border border-[#BFFF00]/10 hover:border-[#BFFF00]/30 transition-all duration-300 group cursor-pointer block"
            >
              <div className="bg-[#BFFF00]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#BFFF00]/20 transition-colors">
                <MessageSquare className="text-[#BFFF00]" size={28} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Quick Chat</h3>
              <p className="text-white/60">WhatsApp: +91 93470 41279</p>
            </a>
          </div>

          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-lg border border-[#BFFF00]/10">
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
      </div>
    </section>
  );
};

export default Contact;