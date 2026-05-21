import { useMemo, useState } from 'react';
import { Flame, RotateCcw, Shield, UserRound } from 'lucide-react';
import { ProfileSetup } from '../features/profile/ProfileSetup';
import { TapperArena } from '../features/tapper/TapperArena';
import { useLocalStorageState } from '../lib/useLocalStorageState';

export type PlayerProfile = {
  name: string;
  createdAt: string;
};

export type TapStats = {
  hits: number;
  bestStreak: number;
  startedAt: string;
};

const emptyStats = (): TapStats => ({
  hits: 0,
  bestStreak: 0,
  startedAt: new Date().toISOString(),
});

export function App() {
  const [profile, setProfile] = useLocalStorageState<PlayerProfile | null>('tapper.profile', null);
  const [isPrivate, setIsPrivate] = useLocalStorageState('tapper.privateMode', false);
  const [stats, setStats] = useLocalStorageState<TapStats>('tapper.stats', emptyStats);
  const [hasChosenMode, setHasChosenMode] = useState(Boolean(profile || isPrivate));

  const playerLabel = useMemo(() => {
    if (profile) {
      return profile.name;
    }

    return 'Private player';
  }, [profile]);

  const handleCreateProfile = (name: string) => {
    setProfile({ name, createdAt: new Date().toISOString() });
    setIsPrivate(false);
    setHasChosenMode(true);
  };

  const handleSkipProfile = () => {
    setProfile(null);
    setIsPrivate(true);
    setHasChosenMode(true);
  };

  const resetGame = () => {
    setStats(emptyStats());
  };

  const switchProfileMode = () => {
    setHasChosenMode(false);
  };

  if (!hasChosenMode) {
    return <ProfileSetup onCreateProfile={handleCreateProfile} onSkip={handleSkipProfile} />;
  }

  return (
    <main className="app-shell">
      <header className="top-bar" aria-label="Player summary">
        <div>
          <span className="eyebrow">Tapper App</span>
          <h1>Build the streak.</h1>
        </div>

        <div className="profile-pill">
          {profile ? <UserRound size={18} aria-hidden="true" /> : <Shield size={18} aria-hidden="true" />}
          <span>{playerLabel}</span>
        </div>
      </header>

      <TapperArena stats={stats} onStatsChange={setStats} />

      <section className="action-row" aria-label="Game actions">
        <button className="secondary-button" type="button" onClick={resetGame}>
          <RotateCcw size={18} aria-hidden="true" />
          Reset
        </button>
        <button className="secondary-button" type="button" onClick={switchProfileMode}>
          <Flame size={18} aria-hidden="true" />
          Profile
        </button>
      </section>
    </main>
  );
}
