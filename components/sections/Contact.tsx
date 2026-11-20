"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Send,
  GitFork,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  ChevronDown,
  Check,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "landing",
    budget: "tier1",
    message: "",
  });
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedService =
      t.contact.form.serviceOptions.find((opt) => opt.value === formState.service)?.label ||
      formState.service;
    const selectedBudget =
      t.contact.form.budgetOptions.find((opt) => opt.value === formState.budget)?.label ||
      formState.budget;

    const subject = encodeURIComponent(
      `[Project Inquiry] ${formState.name} - ${selectedService} (${selectedBudget})`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nService: ${selectedService}\nEstimated Budget: ${selectedBudget}\n\nProject Scope & Details:\n${formState.message}`
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

                {/* Direct chat channels: Zalo & Telegram */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <a
                    href={SITE.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-500/40 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400 font-normal">Zalo Chat</div>
                      <div className="font-semibold text-slate-200 group-hover:text-white truncate">
                        {SITE.zaloNumber}
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto opacity-50 group-hover:opacity-100 flex-shrink-0" />
                  </a>

                  <a
                    href={SITE.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-sky-500/40 transition-all text-xs font-medium text-slate-300 hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Send size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400 font-normal">Telegram</div>
                      <div className="font-semibold text-slate-200 group-hover:text-white truncate">
                        {SITE.telegramHandle}
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto opacity-50 group-hover:opacity-100 flex-shrink-0" />
                  </a>
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

              {/* Custom Service Selector */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                  {t.contact.form.serviceLabel}
                </label>
                <button
                  type="button"
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.1] hover:border-indigo-500/40 text-left transition-all group cursor-pointer"
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-white text-sm sm:text-base font-semibold truncate">
                      {t.contact.form.serviceOptions.find((opt) => opt.value === formState.service)?.label ||
                        formState.service}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 truncate mt-0.5">
                      {t.contact.form.serviceOptions.find((opt) => opt.value === formState.service)?.desc}
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 group-hover:text-white flex-shrink-0 transition-transform duration-200 ${
                      isServiceOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>

                {/* Animated Glass Dropdown Menu */}
                {isServiceOpen && (
                  <div className="absolute left-0 right-0 top-full mt-2 z-40 rounded-2xl bg-[#0d0f1e]/98 border border-white/[0.12] backdrop-blur-xl shadow-2xl shadow-indigo-950/60 p-2 space-y-1 max-h-72 overflow-y-auto">
                    {t.contact.form.serviceOptions.map((opt) => {
                      const isSelected = formState.service === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setFormState({ ...formState, service: opt.value });
                            setIsServiceOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-indigo-600/25 text-indigo-200 border border-indigo-500/40"
                              : "hover:bg-white/[0.06] text-slate-200"
                          }`}
                        >
                          <div className="min-w-0 pr-3">
                            <div className="text-sm font-semibold text-white">
                              {opt.label}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">
                              {opt.desc}
                            </div>
                          </div>
                          {isSelected && (
                            <Check size={16} className="text-indigo-400 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Estimated Budget Chips */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                  {t.contact.form.budgetLabel}
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {t.contact.form.budgetOptions.map((opt) => {
                    const isSelected = formState.budget === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setFormState({ ...formState, budget: opt.value })}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border-indigo-500/80 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500/40"
                            : "bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-white/20 text-slate-300"
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                          <span>{opt.label}</span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {opt.hint}
                        </div>
                      </button>
                    );
                  })}
                </div>
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
