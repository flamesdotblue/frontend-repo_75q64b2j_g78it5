import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UploadArea from './components/UploadArea';
import AnalyticsPreview from './components/AnalyticsPreview';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <Header />
      <HeroSection />
      <UploadArea />
      <AnalyticsPreview />
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-white/60">
          <p>© {new Date().getFullYear()} NeuroWrite — AI-based Dysgraphia Detection & Support.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
