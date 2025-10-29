import React from 'react';
import { BarChart3, Activity, Ruler, ScanLine } from 'lucide-react';

export default function AnalyticsPreview() {
  return (
    <section id="analytics" className="w-full bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Insights & Risk Estimation</h2>
          <p className="mt-2 text-white/70 text-sm sm:text-base">
            Visual previews of what the system can surface: spacing consistency, stroke variation, alignment drift, and overall risk score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon={<BarChart3 className="text-cyan-300" size={20} />}
            title="Risk Score"
            subtitle="Indicative only"
          >
            <div className="mt-3 h-2 w-full overflow-hidden rounded bg-white/10">
              <div className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" style={{ width: '62%' }} />
            </div>
            <p className="mt-2 text-sm text-white/70">Current estimate: 0.62</p>
          </MetricCard>

          <MetricCard
            icon={<Ruler className="text-cyan-300" size={20} />}
            title="Spacing & Alignment"
            subtitle="Preview"
          >
            <div className="mt-3 grid grid-cols-6 gap-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className={`h-8 rounded ${i % 5 === 0 ? 'bg-cyan-500/70' : 'bg-white/10'}`} />
              ))}
            </div>
            <p className="mt-2 text-sm text-white/70">Detects uneven spacing, baseline drift, and letter crowding.</p>
          </MetricCard>

          <MetricCard
            icon={<Activity className="text-cyan-300" size={20} />}
            title="Stroke Variation"
            subtitle="Preview"
          >
            <svg viewBox="0 0 300 70" className="mt-3 h-20 w-full">
              <polyline
                fill="none"
                stroke="url(#g1)"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="0,35 30,25 60,45 90,20 120,40 150,30 180,50 210,25 240,45 270,22 300,40"
              />
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-sm text-white/70">Assesses pressure consistency and stroke thickness changes.</p>
          </MetricCard>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2">
            <ScanLine className="text-cyan-300" size={18} />
            <h3 className="font-medium">OCR & Accuracy Check (Preview)</h3>
          </div>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black p-4 text-sm">
              <p className="text-white/60">Expected text</p>
              <p className="mt-1">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black p-4 text-sm">
              <p className="text-white/60">Detected text</p>
              <p className="mt-1">The quik brwn fox jmps over the lazy doq.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, title, subtitle, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-xs text-white/60">{subtitle}</p>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
