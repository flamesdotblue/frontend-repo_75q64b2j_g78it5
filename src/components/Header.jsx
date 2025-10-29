import React from 'react';
import { Brain, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-black/50 text-white border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="text-cyan-300" />
          <span className="font-semibold">NeuroWrite</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#upload" className="hover:text-white">Input</a>
          <a href="#analytics" className="hover:text-white">Analytics</a>
          <a href="#" className="hover:text-white">Support</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-xs hover:bg-white/10">
          <User size={14} /> Sign in
        </button>
      </div>
    </header>
  );
}
