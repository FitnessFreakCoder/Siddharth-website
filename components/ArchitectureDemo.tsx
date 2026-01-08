import React from 'react';

const ArchitectureDemo: React.FC = () => {
  return (
    <div className="w-full p-4 bg-ai-card border border-slate-800 rounded-xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/5 to-ai-purple/5 pointer-events-none" />
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">System Architecture: RAG Pipeline</h3>
        <p className="text-slate-400 text-sm">Visualizing the data flow in my intelligent retrieval systems.</p>
      </div>

      {/* Diagram */}
      <div className="relative h-64 w-full flex items-center justify-between max-w-4xl mx-auto px-4 sm:px-10">
        
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
            </marker>
          </defs>
          <path d="M 80 128 L 200 128" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" markerEnd="url(#arrowhead)" />
          <path d="M 280 128 L 400 128" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" markerEnd="url(#arrowhead)" />
          <path d="M 480 128 L 600 128" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" markerEnd="url(#arrowhead)" />
        </svg>

        {/* Nodes */}
        
        {/* User Input */}
        <div className="z-10 flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-ai-cyan transition-colors duration-500">
            <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-xs font-mono text-slate-400">User Query</span>
        </div>

        {/* Embedding Model */}
        <div className="z-10 flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-xl bg-slate-900 border-2 border-ai-cyan/50 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)] animate-pulse-slow">
            <svg className="w-8 h-8 text-ai-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className="text-xs font-mono text-ai-cyan">Embeddings</span>
        </div>

        {/* Vector DB */}
        <div className="z-10 flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-xl bg-slate-900 border-2 border-purple-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <span className="text-xs font-mono text-purple-400">Vector DB</span>
        </div>

        {/* LLM */}
        <div className="z-10 flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-xl bg-slate-900 border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
             <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs font-mono text-emerald-400">GenAI/LLM</span>
        </div>

      </div>
    </div>
  );
};

export default ArchitectureDemo;
