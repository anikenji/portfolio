"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, GitFork, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open mailto
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.open(`mailto:${SITE.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Contact"
          title="Let's work"
          highlight="together"
          description="Have a project in mind or just want to say hi? Drop me a message."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Contact Info */}
          <ScrollReveal delay={0.05}>
            <div className="space-y-6">
              <div className="glass rounded-3xl p-8 border border-white/[0.07] hover:border-indigo-500/30 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-6">Get in touch</h3>

                <div className="space-y-5">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors">
                      <Mail size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                        {SITE.email}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-slate-600 group-hover:text-indigo-400 transition-colors"
                    />
                  </a>

                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                      <GitFork size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">GitHub</p>
                      <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                        @anikenji
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-slate-600 group-hover:text-purple-400 transition-colors"
                    />
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                      <MapPin size={20} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="text-white font-medium">{SITE.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability card */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/[0.07] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-semibold text-sm">
                    Available for work
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Open to freelance projects, collaboration opportunities, and
                  full-time positions. Let&apos;s create something amazing together.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 border border-white/[0.07] space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 focus:outline-none transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40"
              >
                {submitted ? (
                  "Opening mail client..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
