'use client';

import React, { useState } from 'react';
import { SIMULATED_APIS } from '@/data/portfolioData';
import { 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  RotateCcw,
  Code2
} from 'lucide-react';

export default function ApiPlayground() {
  const [selectedApiIndex, setSelectedApiIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(SIMULATED_APIS[0].responseBody);
  const [responseTime, setResponseTime] = useState<string>(SIMULATED_APIS[0].responseTime);
  const [hasExecuted, setHasExecuted] = useState(true);
  const [copied, setCopied] = useState(false);

  const activeApi = SIMULATED_APIS[selectedApiIndex];

  const handleSelectApi = (index: number) => {
    setSelectedApiIndex(index);
    setResponse(SIMULATED_APIS[index].responseBody);
    setResponseTime(SIMULATED_APIS[index].responseTime);
    setHasExecuted(true);
  };

  const handleSendRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResponse(activeApi.responseBody);
      const jitter = Math.floor(Math.random() * 8) + 12;
      setResponseTime(`${jitter}ms`);
      setIsLoading(false);
      setHasExecuted(true);
    }, 350);
  };

  const handleCopyCurl = () => {
    const curl = activeApi.method === 'GET'
      ? `curl -X GET "https://api.sonujangir.dev${activeApi.endpoint}" -H "Authorization: Bearer mock_jwt_token"`
      : `curl -X POST "https://api.sonujangir.dev${activeApi.endpoint}" -H "Content-Type: application/json" -d '${JSON.stringify(activeApi.requestBody)}'`;
    
    navigator.clipboard.writeText(curl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api-playground" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono mb-3 shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE TESTBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live API Simulator & Architecture Playground
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
            Test simulated live endpoints demonstrating PostGIS geospatial math, RBAC clinic security, and multi-vendor checkout order splitting.
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-2xl border border-sky-200 bg-white shadow-xl shadow-sky-500/10 overflow-hidden">
          
          {/* Top Bar with Endpoints selector */}
          <div className="bg-sky-50/70 p-4 border-b border-sky-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {SIMULATED_APIS.map((api, idx) => (
                <button
                  key={api.id}
                  onClick={() => handleSelectApi(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 font-medium ${
                    selectedApiIndex === idx
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:text-blue-600 hover:bg-sky-50 border border-sky-200 shadow-xs'
                  }`}
                >
                  <span className={`text-[10px] font-bold ${selectedApiIndex === idx ? 'text-white' : (api.method === 'GET' ? 'text-emerald-600' : 'text-blue-600')}`}>
                    {api.method}
                  </span>
                  <span>{api.title}</span>
                </button>
              ))}
            </div>

            <button
              onClick={handleCopyCurl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-700 hover:text-blue-600 text-xs font-mono transition-colors border border-sky-200 shadow-xs"
              title="Copy cURL command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'cURL Copied' : 'Copy cURL'}</span>
            </button>
          </div>

          {/* Request Address Bar */}
          <div className="p-4 bg-white border-b border-sky-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 flex items-center bg-sky-50/60 rounded-xl px-3 py-2.5 border border-sky-200 text-xs font-mono overflow-x-auto shadow-inner">
              <span className={`font-bold px-2 py-0.5 rounded mr-2 ${
                activeApi.method === 'GET' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-blue-800'
              }`}>
                {activeApi.method}
              </span>
              <span className="text-slate-500 select-none">https://api.sonujangir.dev</span>
              <span className="text-slate-900 font-semibold ml-0.5">{activeApi.endpoint}</span>
            </div>

            <button
              onClick={handleSendRequest}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-xs tracking-wide transition-all shadow-md shadow-sky-500/25 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>Executing Query...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Send Request</span>
                </>
              )}
            </button>
          </div>

          {/* Request / Response Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-sky-100">
            
            {/* Left: Request Params / Payload */}
            <div className="lg:col-span-5 p-5 bg-white space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="uppercase tracking-wider flex items-center gap-1.5 font-bold text-slate-700">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Request Context</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200 font-medium">
                  {activeApi.category}
                </span>
              </div>

              {/* Request Headers */}
              <div className="space-y-1 text-xs font-mono">
                <span className="text-slate-500 text-[11px]">Headers:</span>
                <div className="bg-sky-50/60 p-3 rounded-xl border border-sky-100 text-slate-700 space-y-1">
                  <div><span className="text-blue-600 font-semibold">Content-Type:</span> application/json</div>
                  <div><span className="text-blue-600 font-semibold">Authorization:</span> Bearer jwt_verified_sonu_jangir</div>
                </div>
              </div>

              {/* Request Body if POST */}
              {activeApi.requestBody ? (
                <div className="space-y-1 text-xs font-mono">
                  <span className="text-slate-500 text-[11px]">JSON Payload:</span>
                  <pre className="bg-sky-50/70 p-3 rounded-xl border border-sky-200 text-blue-950 overflow-x-auto text-[11px] leading-relaxed max-h-[220px]">
                    {JSON.stringify(activeApi.requestBody, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="bg-sky-50/40 p-4 rounded-xl border border-sky-100 text-xs text-slate-500 italic">
                  No body payload required for this GET query. Query parameters are handled via URL query string.
                </div>
              )}
            </div>

            {/* Right: Response Output */}
            <div className="lg:col-span-7 p-5 bg-[#0c1527] space-y-4">
              {/* Response Status Header */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">Response:</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    {activeApi.responseCode} OK
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <Clock className="w-3 h-3 text-sky-400" />
                  <span>Latency: <strong className="text-slate-100">{responseTime}</strong></span>
                </div>
              </div>

              {/* JSON Response View */}
              <div className="relative">
                <pre className="bg-[#080e1c] p-4 rounded-xl border border-sky-900/40 font-mono text-xs text-slate-200 overflow-x-auto max-h-[340px] leading-relaxed shadow-inner">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                <span>Server: Node.js / Express / PM2</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK Execution
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
