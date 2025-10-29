import React from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export default function SuggestionsPanel() {
  const items = [
    {
      title: 'Letter Formation Drills',
      desc: 'Trace large-format letters focusing on start/end points and directionality. Practice 10 minutes daily.',
    },
    {
      title: 'Spacing Guides',
      desc: 'Use finger-spacing or grid-lined paper to maintain consistent gaps between letters and words.',
    },
    {
      title: 'Grip & Posture',
      desc: 'Try triangular pencil grips and ensure forearm support on desk to reduce pressure variability.',
    },
    {
      title: 'Alignment Practice',
      desc: 'Use baseline sheets with midline to reduce letter height drift and improve alignment.',
    },
  ];

  return (
    <section className="w-full bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-6 flex items-center gap-2">
          <Lightbulb className="text-cyan-300" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Personalized Learning Suggestions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-emerald-400" size={18} />
                <div>
                  <h3 className="font-medium">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 p-5">
          <div>
            <p className="text-sm text-white/80">Track student progress over time with visual analytics and weekly reports.</p>
          </div>
          <a href="#upload" className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-neutral-200">
            Add New Sample
          </a>
        </div>
      </div>
    </section>
  );
}
