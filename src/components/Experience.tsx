'use client';

import React from 'react';
import { EXPERIENCE_LIST, EDUCATION_LIST } from '@/data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Award,
  Sparkles
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-sky-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-mono mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience & Education
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Hands-on production track record in full-stack MERN software development coupled with strong academic foundations in Computer Science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Work Experience Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono text-blue-600 uppercase tracking-wider mb-2 font-bold">
              <Briefcase className="w-4 h-4" />
              <span>Production Experience</span>
            </div>

            {EXPERIENCE_LIST.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-sky-100 hover:border-sky-300 transition-all shadow-sm hover:shadow-lg hover:shadow-sky-500/10 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-sky-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-sky-500" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-medium mb-4">
                  ✓ {exp.type}
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="mt-6 pt-4 border-t border-sky-100 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-sky-50 text-slate-700 border border-sky-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Academic Rigor Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono text-blue-600 uppercase tracking-wider mb-2 font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Formal Education</span>
            </div>

            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-sky-100 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-600 font-semibold mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex-shrink-0 shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mb-4 pb-4 border-b border-sky-100">
                  <span className="flex items-center gap-1 text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" /> {edu.period}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200">
                    {edu.score}
                  </span>
                </div>

                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Key Coursework</span>
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                  {edu.coursework.map((course, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional CS Foundations Card */}
            <div className="rounded-2xl p-6 border border-sky-200 bg-gradient-to-br from-sky-50 via-blue-50/30 to-white shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Foundational CS & Additional Tech</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Java:</strong> OOP principles, Collections Framework, Exception Handling, Memory Management & Garbage Collection.
                </p>
                <p>
                  <strong className="text-slate-900">JavaScript Internals:</strong> ES6+, Promises, Event Loop, Asynchronous programming, Call Stack & Microtasks.
                </p>
                <p>
                  <strong className="text-slate-900">Mobile & Cloud:</strong> Basic Kotlin & Android app development, Cloud computing architectural fundamentals.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
