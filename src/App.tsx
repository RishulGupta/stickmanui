import { Sparkles } from 'lucide-react';
import { NeonGlassHead } from './components/NeonGlassHead';
import { cn } from './lib/utils';

export function App() {
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
      <NeonGlassHead className="h-[420px] w-[420px]" />
    </main>
  );
}
