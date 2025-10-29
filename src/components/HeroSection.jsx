import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/50 to-black/90" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-12 sm:pt-28 md:pt-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Rocket size={14} className="text-cyan-300" />
            AI + Neuroscience for Better Handwriting Support
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Early Dysgraphia Screening and Personalized Support
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-white/80">
            Upload or draw handwriting samples to get instant insights, risk scores, and tailored learning plans for students. Built with computer vision, OCR, and deep learning.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#upload" className="rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-cyan-400 transition">
              Get Started
            </a>
            <a href="#analytics" className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
              See Analytics
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
