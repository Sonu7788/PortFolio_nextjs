'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  Check, 
  Download,
  Code2,
  Database,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'profile' | 'server' | 'skills'>('profile');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[560px] bg-radial-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 shadow-sm shadow-sky-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Available for MERN & Backend Roles
              </span>
              <span className="text-sky-300">|</span>
              <span className="text-xs font-mono text-sky-600 font-semibold">Jaipur, India</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500">Sonu Jangir</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 tracking-tight">
                MERN Stack Developer & Backend Engineer
              </h2>
            </div>

            {/* Core Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              6 months of hands-on production experience engineering high-performance <span className="text-blue-700 font-semibold">RESTful APIs</span>, <span className="text-blue-700 font-semibold">PostgreSQL/PostGIS</span> geospatial engines, <span className="text-blue-700 font-semibold">RBAC authentication systems</span>, and reactive <span className="text-blue-700 font-semibold">React / Next.js</span> web applications.
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-sky-900 flex items-center gap-1.5 shadow-sm">
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span>Postgres • PostGIS • MySQL • Mongo</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>JWT • RBAC Middleware • Razorpay</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>MCA 2026 (CGPA 8.0)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 hover:from-blue-700 hover:to-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore 9+ Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Sonu_Jangir_MERN_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-slate-700 hover:text-blue-600 font-semibold text-sm border border-sky-200 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-sky-600" />
                <span>Download Resume</span>
              </a>

              <a
                href="#api-playground"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-sky-50/80 hover:bg-sky-100/80 text-sky-700 hover:text-sky-800 font-mono text-xs border border-sky-200 transition-colors shadow-sm"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Test Live APIs</span>
              </a>
            </div>

            {/* Quick Contact snippet */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <span className="text-sky-200">•</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors group"
                title="Click to copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />}
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                {copied && <span className="text-emerald-600 font-sans text-[11px] font-semibold">(Copied!)</span>}
              </button>
            </div>

          </div>

          {/* Right Column: High-Contrast Developer Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl shadow-xl shadow-sky-500/10 overflow-hidden border border-sky-100 bg-white">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-sky-50/70 border-b border-sky-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="ml-2 text-xs font-mono font-medium text-slate-600">sonu@production-node: ~</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-sky-700 border border-sky-200 font-semibold shadow-xs">
                    node: v22.x
                  </span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-sky-100 bg-white px-2 pt-1 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-2 border-b-2 flex items-center gap-1.5 transition-colors font-medium ${
                    activeTab === 'profile'
                      ? 'border-blue-600 text-blue-600 bg-sky-50/50'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>engineer.json</span>
                </button>
                <button
                  onClick={() => setActiveTab('server')}
                  className={`px-3 py-2 border-b-2 flex items-center gap-1.5 transition-colors font-medium ${
                    activeTab === 'server'
                      ? 'border-blue-600 text-blue-600 bg-sky-50/50'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>pm2_cluster.log</span>
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-3 py-2 border-b-2 flex items-center gap-1.5 transition-colors font-medium ${
                    activeTab === 'skills'
                      ? 'border-blue-600 text-blue-600 bg-sky-50/50'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>database.sql</span>
                </button>
              </div>

              {/* Terminal Content Body: Dark Slate & Vibrant Syntax for Readability */}
              <div className="p-4 font-mono text-xs text-slate-200 bg-[#0c1527] overflow-x-auto min-h-[300px]">
                {activeTab === 'profile' && (
                  <pre className="space-y-1">
                    <span className="text-slate-400">// Sonu Jangir — Developer Profile</span>
                    <br />
                    <span className="text-sky-300">&#123;</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"developer"</span>: <span className="text-amber-300">"{PERSONAL_INFO.name}"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"role"</span>: <span className="text-amber-300">"MERN Stack Developer"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"primaryBackend"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"Sequelize"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"primaryFrontend"</span>: [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"Tailwind"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"databases"</span>: [<span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"PostGIS"</span>, <span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"MongoDB"</span>],
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"experience"</span>: &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">"company"</span>: <span className="text-amber-300">"Objectg Square"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">"duration"</span>: <span className="text-amber-300">"6 Months (Internship + Full-Time)"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">"projectsDelivered"</span>: <span className="text-cyan-300 font-bold">9</span>
                    <br />
                    &nbsp;&nbsp;&#125;,
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"education"</span>: <span className="text-amber-300">"MCA (UEM Jaipur, CGPA 8.0)"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-400">"status"</span>: <span className="text-emerald-400 font-bold">"OPEN_TO_HIRE"</span>
                    <br />
                    <span className="text-sky-300">&#125;</span>
                  </pre>
                )}

                {activeTab === 'server' && (
                  <div className="space-y-1.5 text-slate-200">
                    <p className="text-emerald-400">[INFO] PM2 cluster spawned 2 workers on :5000</p>
                    <p className="text-slate-300">[SYSTEM] PostgreSQL connection pool initialized (Max: 20)</p>
                    <p className="text-cyan-300">[POSTGIS] Spatial index GIST(coords) verified on table 'riders'</p>
                    <p className="text-slate-300">[AUTH] JWT verification middleware active with 256-bit secret</p>
                    <p className="text-slate-300">[ROUTES] 48 REST API endpoints registered successfully</p>
                    <p className="text-amber-300">[FCM] Firebase Cloud Messaging dispatcher listening for events</p>
                    <p className="text-emerald-400">[READY] Server accepting incoming requests (Jaipur, IN)</p>
                    <div className="pt-2 flex items-center gap-2 text-sky-400 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span>Listening for incoming socket & REST events...</span>
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <pre className="space-y-1 text-slate-200">
                    <span className="text-slate-400">-- Hyperlocal Proximity Dispatch Query (PostGIS)</span>
                    <br />
                    <span className="text-cyan-400 font-bold">SELECT</span> id, rider_name, phone_number,
                    <br />
                    &nbsp;&nbsp;ST_DistanceSphere(coordinates, ST_MakePoint(75.7873, 26.9124)) <span className="text-cyan-400 font-bold">AS</span> distance_m
                    <br />
                    <span className="text-cyan-400 font-bold">FROM</span> riders
                    <br />
                    <span className="text-cyan-400 font-bold">WHERE</span> is_active = <span className="text-amber-300">true</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-400 font-bold">AND</span> ST_DWithin(coordinates, ST_MakePoint(75.7873, 26.9124)::geography, 5000)
                    <br />
                    <span className="text-cyan-400 font-bold">ORDER BY</span> distance_m <span className="text-cyan-400 font-bold">ASC</span>
                    <br />
                    <span className="text-cyan-400 font-bold">LIMIT</span> 5;
                    <br />
                    <br />
                    <span className="text-emerald-400">-- Execution: 12ms (Bitmap Index Scan using idx_riders_geom)</span>
                  </pre>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-white border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Ready to deploy production features
                </span>
                <a
                  href="#contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold font-sans flex items-center gap-1"
                >
                  Hire Sonu <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
