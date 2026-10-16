'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/portfolioData';
import { 
  X, 
  Database, 
  Server, 
  Layers, 
  CheckCircle2, 
  Terminal
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-2xl border border-sky-200 bg-white shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-5 right-5 p-2 rounded-xl bg-sky-50 text-slate-500 hover:text-slate-800 hover:bg-sky-100 transition-colors border border-sky-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 font-semibold">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                ★ Production Flagship
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {project.title}
          </h3>
          <p className="text-sm text-blue-600 font-mono font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6 pb-6 border-b border-sky-100">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-sky-50 text-slate-700 border border-sky-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-sm text-slate-700">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Project Overview & Scope</span>
            </h4>
            <p className="text-slate-700 leading-relaxed bg-sky-50/50 p-4 rounded-xl border border-sky-100">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Resume Highlights */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Implementation Highlights</span>
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Design & Architecture */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Server className="w-4 h-4 text-blue-600" />
              <span>System Design & Architecture</span>
            </h4>
            <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-100 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
              {project.architectureDetails.systemDesign}
            </div>
          </div>

          {/* Database Modeling & Relations */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Database className="w-4 h-4 text-amber-500" />
              <span>Database Schema & Models</span>
            </h4>
            <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-100 font-mono text-xs text-slate-800">
              {project.architectureDetails.databaseModel}
            </div>
          </div>

          {/* API Endpoints Contract */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Terminal className="w-4 h-4 text-emerald-600" />
              <span>REST API Route Endpoints</span>
            </h4>
            <div className="bg-[#0c1527] rounded-xl border border-sky-900/60 p-4 font-mono text-xs space-y-2 shadow-inner">
              {project.architectureDetails.apis.map((endpoint, i) => {
                const [method, ...rest] = endpoint.split(' ');
                const route = rest.join(' ');
                const methodColor = 
                  method === 'GET' ? 'text-emerald-400' :
                  method === 'POST' ? 'text-sky-400' :
                  method === 'PATCH' ? 'text-amber-300' : 'text-rose-400';
                return (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`font-bold ${methodColor} w-16`}>{method}</span>
                    <span className="text-slate-200">{route}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-sky-100 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Verified production implementation
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white text-xs font-semibold shadow-md shadow-sky-500/20 transition-all"
          >
            Close Specs
          </button>
        </div>
      </div>
    </div>
  );
}
