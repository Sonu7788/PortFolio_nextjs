'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  ArrowUpRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Strengths', href: '#strengths' },
    { label: 'API Playground', href: '#api-playground' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm shadow-sky-500/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-3 text-slate-900 hover:text-sky-600 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-[1.5px] shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-mono font-bold text-base text-blue-600">
                SJ
              </div>
            </div>
            <div>
              <div className="font-bold text-base tracking-tight flex items-center gap-2 text-slate-900">
                <span>{PERSONAL_INFO.name}</span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="text-xs font-mono text-sky-600 font-medium hidden sm:block">
                MERN & Backend Dev
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 border border-sky-100 rounded-full px-4 py-1.5 shadow-sm shadow-sky-500/5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 rounded-full transition-colors hover:bg-sky-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Social Icons */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-sky-50 border border-sky-100 hover:border-sky-300 rounded-xl transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-sky-600 bg-white hover:bg-sky-50 border border-sky-100 hover:border-sky-300 rounded-xl transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Sonu_Jangir_MERN_Developer_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 hover:from-blue-700 hover:to-sky-600 text-white shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white border border-sky-100 rounded-xl shadow-sm"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white/95 border border-sky-100 rounded-2xl shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 pb-3 border-b border-sky-100">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-sky-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Sonu_Jangir_MERN_Developer_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-sky-500/20"
              >
                <FileText className="w-4 h-4" /> Download Resume PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
