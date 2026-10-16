'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { 
  Server, 
  Database, 
  Layout, 
  Zap, 
  Terminal, 
  Cpu, 
  Code2,
  CheckCircle2 
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

  const iconMap: Record<string, React.ElementType> = {
    Server: Server,
    Database: Database,
    Layout: Layout,
    Zap: Zap,
    Terminal: Terminal,
    Cpu: Cpu,
  };

  const displayedCategories = selectedCategory === 'all' 
    ? SKILL_CATEGORIES 
    : [SKILL_CATEGORIES[selectedCategory]];

  return (
    <section id="skills" className="py-20 relative bg-sky-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-mono mb-3 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tools, Technologies & Architecture Stack
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Engineered with modern JavaScript/TypeScript paradigms, production Node.js micro-frameworks, and multi-paradigm database architectures.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-white text-slate-600 hover:text-blue-600 border border-sky-200 hover:bg-sky-50 shadow-xs'
              }`}
            >
              All Skills ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {SKILL_CATEGORIES.map((cat, index) => {
              const Icon = iconMap[cat.iconName] || Code2;
              return (
                <button
                  key={cat.title}
                  onClick={() => setSelectedCategory(index)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === index
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-sky-500/25'
                      : 'bg-white text-slate-600 hover:text-blue-600 border border-sky-200 hover:bg-sky-50 shadow-xs'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Code2;
            return (
              <div
                key={cat.title}
                className="glass-card rounded-2xl p-6 border border-sky-100 hover:border-sky-300 transition-all flex flex-col justify-between shadow-sm hover:shadow-lg hover:shadow-sky-500/10"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-sky-100">
                    <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] font-mono text-sky-700 font-medium">
                        {cat.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-blue-600 font-bold">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-sky-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Sub-tags */}
                        {skill.tags && (
                          <div className="flex flex-wrap gap-1 pt-0.5">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Chip */}
                <div className="mt-6 pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Tested
                  </span>
                  <span className="text-sky-700">MERN Ecosystem</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
