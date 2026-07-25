import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { NeonGlassHead } from './components/NeonGlassHead';
import ShoulderStudy from './components/ShoulderStudy';
import UpperBody from './components/upperbody';
import { cn } from './lib/utils';

export function App() {
  const [activeTab, setActiveTab] = useState<'head' | 'shoulder' | 'upperbody'>('head');

  return (
    <main
      className={cn(
        'grid min-h-screen place-items-center overflow-hidden bg-stage-bg text-white',
        'bg-[radial-gradient(circle_at_50%_42%,var(--color-stage-mid)_0,var(--color-stage-bg)_56%,var(--color-stage-ink)_100%)]',
      )}
    >
      <div className="absolute left-4 top-4 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/35">
        <Sparkles className="size-4" strokeWidth={1.5} />
        <span>Glass head prototype</span>
      </div>

      <div className="absolute top-4 right-4 flex gap-2 rounded-lg bg-white/5 p-1 backdrop-blur-md border border-white/10">
        <button
          onClick={() => setActiveTab('head')}
          className={cn(
            'px-4 py-2 text-sm font-medium transition-all rounded-md cursor-pointer',
            activeTab === 'head'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          )}
        >
          Neon Glass Head
        </button>
        <button
          onClick={() => setActiveTab('shoulder')}
          className={cn(
            'px-4 py-2 text-sm font-medium transition-all rounded-md cursor-pointer',
            activeTab === 'shoulder'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          )}
        >
          Shoulder Study
        </button>
        <button
          onClick={() => setActiveTab('upperbody')}
          className={cn(
            'px-4 py-2 text-sm font-medium transition-all rounded-md cursor-pointer',
            activeTab === 'upperbody'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          )}
        >
          Upper Body
        </button>
      </div>

      <div className="flex items-center justify-center">
        {activeTab === 'head' ? (
          <NeonGlassHead className="h-[420px] w-[420px]" />
        ) : activeTab === 'shoulder' ? (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-sm font-mono text-white/50 tracking-wider">SHOULDER STUDY GEOMETRY</h2>
            <div className="p-6 rounded-2xl bg-[#0d0b18] border border-white/10 shadow-2xl">
              <ShoulderStudy />
            </div>
          </div>
        ) : (
          <UpperBody />
        )}
      </div>
    </main>
  );
}
