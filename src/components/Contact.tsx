'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { getAssetPath } from '@/lib/utils';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (type: 'email' | 'phone') => {
    if (type === 'email') {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Sonu,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something High-Performance
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Actively open to full-time MERN Stack, Node.js Backend, and Full-Stack Engineering roles. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-sky-100 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>Contact Channels</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-4 rounded-xl bg-sky-50/60 border border-sky-100">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors mt-0.5 break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('email')}
                  className="p-2 text-slate-500 hover:text-blue-600 bg-white hover:bg-sky-50 border border-sky-200 rounded-lg transition-colors flex-shrink-0 shadow-xs"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Mobile Phone</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phoneRaw}`}
                      className="block text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors mt-0.5 font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('phone')}
                  className="p-2 text-slate-500 hover:text-blue-600 bg-white hover:bg-sky-50 border border-sky-200 rounded-lg transition-colors flex-shrink-0 shadow-xs"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-sky-50/60 border border-sky-100">
                <div className="p-2.5 rounded-xl bg-white border border-sky-200 text-slate-700 shadow-xs">
                  <MapPin className="w-4 h-4 text-rose-500" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Current Base</span>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 flex flex-col gap-2.5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">Social Links</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-sky-200 text-slate-700 hover:text-blue-600 hover:border-sky-300 hover:bg-sky-50 transition-all text-xs font-semibold shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-sky-200 text-sky-700 hover:text-blue-600 hover:border-sky-300 hover:bg-sky-50 transition-all text-xs font-semibold shadow-xs"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Resume download quick card */}
              <div className="pt-2">
                <a
                  href={getAssetPath(PERSONAL_INFO.resumePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sonu_Jangir_MERN_Developer_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-semibold text-xs shadow-md shadow-sky-500/20 transition-all hover:scale-[1.01]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Sonu_Jangir_Resume.pdf</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-sky-100 relative shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Looking for a dedicated MERN Stack engineer or have an inquiry? Drop a note below.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Message Prepared!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your email client will open to send this directly to <strong className="text-blue-600">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono text-blue-600 hover:underline pt-2 inline-block font-semibold"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe / Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-slate-900 placeholder:text-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-100 transition-all shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-slate-900 placeholder:text-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-100 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                      Subject / Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. MERN Developer Role / Technical Interview"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-slate-900 placeholder:text-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-100 transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Sonu, we are impressed by your MERN and PostgreSQL/PostGIS experience and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-slate-900 placeholder:text-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-100 transition-all shadow-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Preparing Email...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message to Sonu</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
