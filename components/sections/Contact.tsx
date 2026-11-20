"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  GitFork,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

function LinkedInIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "landing",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedService =
      t.contact.form.serviceOptions.find((opt) => opt.value === formState.service)?.label ||
      formState.service;

    const subject = encodeURIComponent(`[Project Inquiry] ${formState.name} - ${selectedService}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nProject Type / Budget: ${selectedService}\n\nProject Scope & Details:\n${formState.message}`
    );
    window.open(`mailto:${SITE.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag={t.contact.tag}
          title={t.contact.title}
          highlight={t.contact.highlight}
          description={t.contact.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Quick Channels Column */}
          <ScrollReveal delay={0.05}>
            <div className="space-y-5 sm:space-y-6">
              {/* Status / Availability Card */}
              <div className="rounded-3xl p-5 sm:p-7 md:p-8 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-indigo-900/20 border border-white/[0.08] backdrop-blur-sm shadow-xl shadow-indigo-950/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                    {t.contact.availableCardTitle}
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {t.contact.availableCardDesc}
                </p>
              </div>

              {/* Direct channels card */}
              <div className="glass rounded-3xl p-5 sm:p-7 md:p-8 border border-white/[0.07] hover:border-indigo-500/30 transition-colors duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                  {t.contact.quickChannelsTitle}
                </h3>

                {/* Vietnam clients */}
                <div className="mb-5">
                  <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider block mb-2.5">
                    {t.contact.vietnamHeader}
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={SITE.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-indigo-500/40 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MessageCircle size={15} />
                      </div>
                      <span className="truncate">Zalo Chat</span>
                      <ArrowUpRight size={13} className="ml-auto opacity-50 group-hover:opacity-100" />
                    </a>

                    <a
                      href={SITE.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-indigo-500/40 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Send size={15} />
                      </div>
                      <span className="truncate">Telegram</span>
                      <ArrowUpRight size={13} className="ml-auto opacity-50 group-hover:opacity-100" />
                    </a>
                  </div>
                </div>

                {/* International clients */}
                <div className="mb-5">
                  <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider block mb-2.5">
                    {t.contact.globalHeader}
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-emerald-500/40 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={15} />
                      </div>
                      <span className="truncate">WhatsApp</span>
                      <ArrowUpRight size={13} className="ml-auto opacity-50 group-hover:opacity-100" />
                    </a>

                    <a
                      href={SITE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-500/40 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <LinkedInIcon size={15} />
                      </div>
                      <span className="truncate">LinkedIn</span>
                      <ArrowUpRight size={13} className="ml-auto opacity-50 group-hover:opacity-100" />
                    </a>
                  </div>
                </div>

                {/* Email, GitHub & Location */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <Mail size={16} className="text-indigo-400" />
                    <span className="text-white font-medium group-hover:text-indigo-300 truncate">
                      {SITE.email}
                    </span>
                    <ArrowUpRight size={13} className="ml-auto opacity-40 group-hover:opacity-100" />
                  </a>

                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <GitFork size={16} className="text-purple-400" />
                    <span className="text-white font-medium group-hover:text-purple-300">
                      github.com/anikenji
                    </span>
                    <ArrowUpRight size={13} className="ml-auto opacity-40 group-hover:opacity-100" />
                  </a>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400">
                    <MapPin size={16} className="text-indigo-400" />
                    <span className="text-slate-300">{SITE.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Inquiry Form with Service & Budget Dropdown */}
          <ScrollReveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-5 sm:p-7 md:p-8 border border-white/[0.07] space-y-4 sm:space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-slate-300 mb-2"
                >
                  {t.contact.form.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-base placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 focus:outline-none transition-colors duration-200"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-slate-300 mb-2"
                >
                  {t.contact.form.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-base placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 focus:outline-none transition-colors duration-200"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              {/* Service & Budget Dropdown */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs sm:text-sm font-medium text-slate-300 mb-2"
                >
                  {t.contact.form.serviceLabel}
                </label>
                <select
                  id="service"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-white/[0.1] text-white text-sm sm:text-base focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 focus:outline-none transition-colors duration-200 cursor-pointer"
                >
                  {t.contact.form.serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#0a0a14] text-white py-1">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-slate-300 mb-2"
                >
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-base placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40"
              >
                {submitted ? (
                  t.contact.form.sendingButton
                ) : (
                  <>
                    <Send size={16} />
                    {t.contact.form.sendButton}
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
