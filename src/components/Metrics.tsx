'use client';

import React from 'react';
import { METRICS } from '@/data/portfolioData';
import { Briefcase, FolderGit2, Database, GraduationCap } from 'lucide-react';

export default function Metrics() {
  const icons = [FolderGit2, Briefcase, Database, GraduationCap];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {METRICS.map((metric, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={metric.label}
              className="glass-card rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:translate-y-[-2px] hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                  {metric.value}
                </span>
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                {metric.label}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                {metric.sub}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
