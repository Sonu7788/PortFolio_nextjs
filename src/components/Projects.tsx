'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  Terminal, 
  ArrowRight
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Backend & APIs', 'Geolocation & Realtime', 'Enterprise'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            9+ production applications, APIs, and micro-platforms built with Node.js, Express, PostgreSQL, PostGIS, MySQL, MongoDB, and React/Next.js.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-sky-500/25'
                      : 'bg-white text-slate-600 hover:text-blue-600 border border-sky-200 hover:bg-sky-50 shadow-xs'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] ${
                project.featured 
                  ? 'border-sky-300 shadow-md shadow-sky-500/10 hover:border-blue-400 hover:shadow-xl hover:shadow-sky-500/15' 
                  : 'border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-lg hover:shadow-sky-500/10'
              }`}
            >
              <div>
                {/* Header: Category & Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-800 font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                      ★ Flagship
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2 border-t border-sky-100 pt-4">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                      <span className="line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tech tags + Action buttons */}
              <div className="mt-6 pt-4 border-t border-sky-100">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-50/70 text-slate-700 border border-sky-100"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-50/70 text-sky-700">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                  >
                    <span>Architecture & APIs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {['hyperlocal-delivery', 'drmate', 'apnavyapar'].includes(project.id) && (
                    <a
                      href="#api-playground"
                      className="text-[11px] font-mono text-emerald-700 hover:text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200 font-medium"
                    >
                      <Terminal className="w-3 h-3" />
                      <span>Live API</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Architecture Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}
