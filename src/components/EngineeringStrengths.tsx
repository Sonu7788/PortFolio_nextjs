'use client';

import React from 'react';
import { BACKEND_STRENGTHS } from '@/data/portfolioData';
import { 
  ShieldCheck, 
  Database, 
  MapPin, 
  Zap, 
  Server, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function EngineeringStrengths() {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck: ShieldCheck,
    Database: Database,
    MapPin: MapPin,
    Zap: Zap,
    Server: Server,
    Sparkles: Sparkles,
  };

  return (
    <section id="strengths" className="py-20 relative bg-sky-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-mono mb-3 shadow-xs">
            <Server className="w-3.5 h-3.5 text-blue-600" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Backend & Engineering Strengths
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Detailed breakdown of production architectural competencies developed through hands-on full-stack product engineering.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BACKEND_STRENGTHS.map((strength) => {
            const Icon = iconMap[strength.icon] || Server;
            return (
              <div
                key={strength.title}
                className="glass-card rounded-2xl p-6 border border-sky-100 hover:border-sky-300 transition-all hover:translate-y-[-2px] group shadow-sm hover:shadow-lg hover:shadow-sky-500/10"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                      {strength.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {strength.desc}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 pt-3 border-t border-sky-100">
                  {strength.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
