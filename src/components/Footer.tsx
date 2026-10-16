'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { getAssetPath } from '@/lib/utils';
import { 
  Github, 
  Linkedin, 
  FileText, 
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-sky-100 bg-white/80 text-slate-600 text-xs py-12 relative shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sky-100">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-blue-600">
                SJ
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">{PERSONAL_INFO.name}</div>
              <div className="text-[11px] font-mono text-sky-700">MERN Stack Developer • Jaipur, India</div>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#strengths" className="hover:text-blue-600 transition-colors">Strengths</a>
            <a href="#api-playground" className="hover:text-blue-600 transition-colors">Playground</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Right Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-white hover:bg-sky-50 text-slate-600 hover:text-blue-600 border border-sky-200 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-white hover:bg-sky-50 text-slate-600 hover:text-blue-600 border border-sky-200 transition-colors shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={getAssetPath(PERSONAL_INFO.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              download="Sonu_Jangir_MERN_Developer_Resume.pdf"
              aria-label="Resume"
              className="p-2 rounded-xl bg-white hover:bg-sky-50 text-slate-600 hover:text-blue-600 border border-sky-200 transition-colors shadow-xs"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-sky-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-sky-200 transition-all ml-2 shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-slate-600">
            <span>Built with Next.js 14, React 18 & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
