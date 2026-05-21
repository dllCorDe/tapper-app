import { useEffect, useMemo, useState } from 'react';
import { Zap } from 'lucide-react';
import type { TapStats } from '../../app/App';

type TapperArenaProps = {
  stats: TapStats;
  onStatsChange: (stats: TapStats) => void;
};

export function TapperArena({ stats, onStatsChange }: TapperArenaProps) {
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    setCurrentStreak(0);
  }, [stats.startedAt]);

  const hitsPerMinute = useMemo(() => {
    const elapsedMinutes = Math.max((Date.now() - new Date(stats.startedAt).getTime()) / 60000, 1);
    return Math.round(stats.hits / elapsedMinutes);
  }, [stats.hits, stats.startedAt]);

  const handleTap = () => {
    const nextStreak = currentStreak + 1;
    setCurrentStreak(nextStreak);

    onStatsChange({
      ...stats,
      hits: stats.hits + 1,
      bestStreak: Math.max(stats.bestStreak, nextStreak),
    });
  };

  return (
    <section className="arena" aria-label="Tapper game">
      <div className="stat-grid">
        <Stat label="Hits" value={stats.hits.toLocaleString()} />
        <Stat label="Streak" value={currentStreak.toLocaleString()} />
        <Stat label="Best" value={stats.bestStreak.toLocaleString()} />
        <Stat label="Rate" value={`${hitsPerMinute}/min`} />
      </div>

      <button className="tap-button" type="button" onClick={handleTap} aria-label="Add one hit">
        <span className="tap-icon">
          <Zap size={48} aria-hidden="true" />
        </span>
        <span>Tap</span>
      </button>
    </section>
  );
}

type StatProps = {
  label: string;
  value: string;
};

function Stat({ label, value }: StatProps) {
  return (
    <article className="stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}
