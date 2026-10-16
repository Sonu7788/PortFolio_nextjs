'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  User, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  Target, 
  Sparkles, 
  Layers
} from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: "Full-Lifecycle Backend & APIs",
      desc: "From database modeling to endpoint routing, error middleware, and PM2 deployment."
    },
    {
      title: "Geospatial & Complex Databases",
      desc: "PostgreSQL with PostGIS distance queries, MySQL with Sequelize, and MongoDB with Mongoose."
    },
    {
      title: "Enterprise Role-Based Access Control",
      desc: "Custom multi-tier permission checking middleware designed for clinics, housing, and merchants."
    },
    {
      title: "AI-Augmented Engineering Speed",
      desc: "Proficient with Cursor, Claude, and Antigravity to build, debug, and iterate at 3x speed."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono mb-3 shadow-xs">
            <User className="w-3.5 h-3.5 text-blue-600" />
            <span>ABOUT THE ENGINEER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Systems that Work at Scale
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Passionate MERN developer with real-world production experience across healthcare, hyperlocal delivery, multi-vendor commerce, and community management platforms.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Card & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-sky-100 relative overflow-hidden shadow-lg shadow-sky-500/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 p-[2px] shadow-md shadow-sky-500/20">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-2xl font-mono font-bold text-blue-600">
                    SJ
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-sky-600 font-semibold">{PERSONAL_INFO.title}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-sky-500" /> {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {PERSONAL_INFO.bio}
              </p>

              {/* Quick Info List */}
              <div className="space-y-3 pt-4 border-t border-sky-100 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" /> Email
                  </span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono font-medium text-slate-800 hover:text-blue-600 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600" /> Phone
                  </span>
                  <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="font-mono font-medium text-slate-800 hover:text-blue-600 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-600" /> Education
                  </span>
                  <span className="font-semibold text-slate-800">
                    MCA (UEM Jaipur, 8.0 CGPA)
                  </span>
                </div>
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="rounded-2xl p-6 border border-sky-200 bg-gradient-to-br from-sky-50 via-blue-50/40 to-white shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold text-blue-700">
                <Target className="w-4 h-4" />
                <span>CAREER OBJECTIVE</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{PERSONAL_INFO.careerObjective}"
              </p>
            </div>
          </div>

          {/* Right Column: Engineering Philosophy & Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Core Architectural Principles</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-5 border border-sky-100 hover:border-sky-300 transition-all hover:translate-y-[-2px] shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mb-3 font-mono text-xs font-bold border border-sky-200">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Versatility Box */}
            <div className="rounded-2xl p-6 border border-sky-100 mt-6 bg-white shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Industry Domains Experienced</span>
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Healthcare & Clinics (DrMate)",
                  "Hyperlocal Logistics & Delivery",
                  "Multi-Vendor E-Commerce (ApnaVyapar)",
                  "Residential Society Management",
                  "Hotel Management & POS",
                  "Sports Operations (SportsLivv)",
                  "Veterinary Education (VetPathshala)",
                  "Course & Exam Hierarchies",
                  "Travel & Tours (Ekloy)"
                ].map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1.5 rounded-xl bg-sky-50/80 border border-sky-200/80 text-sky-800 font-mono text-[11px] font-medium"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
