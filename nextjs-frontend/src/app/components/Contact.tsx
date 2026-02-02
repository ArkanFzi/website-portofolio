"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/UI/GlassCard";
import { Mail, MapPin, MessageSquare, Send, User } from "lucide-react";
import { Toast } from "@/components/UI/Toast";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-white"
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-12 border-red-900/30">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Interested in collaborating or have a project in mind? Let&apos;s build something exceptional together.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-accent-dark border border-red-900/30 rounded-full group-hover:border-accent-primary transition-colors">
                      <Mail className="w-6 h-6 text-accent-primary" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors">arkan@example.com</span>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-accent-dark border border-red-900/30 rounded-full group-hover:border-accent-primary transition-colors">
                      <MapPin className="w-6 h-6 text-accent-primary" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors">Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-red-900/30 rounded-lg focus:outline-none focus:border-accent-primary focus:bg-black/40 text-white placeholder-gray-500 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-red-900/30 rounded-lg focus:outline-none focus:border-accent-primary focus:bg-black/40 text-white placeholder-gray-500 transition-all"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-red-900/30 rounded-lg focus:outline-none focus:border-accent-primary focus:bg-black/40 text-white placeholder-gray-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-secondary to-accent-primary hover:from-accent-primary hover:to-red-500 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(220,20,60,0.3)]"
                >
                  {loading ? "Sending..." : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </GlassCard>
        </motion.div>

        {/* Toast Notification */}
        <Toast 
          message="Your message has been sent successfully!" 
          isVisible={showToast} 
          onClose={() => setShowToast(false)} 
        />
      </div>
    </section>
  );
};

export default Contact;
