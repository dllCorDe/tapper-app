import { FormEvent, useState } from 'react';
import { LockKeyhole, UserRoundPlus } from 'lucide-react';

type ProfileSetupProps = {
  onCreateProfile: (name: string) => void;
  onSkip: () => void;
};

export function ProfileSetup({ onCreateProfile, onSkip }: ProfileSetupProps) {
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();

    if (trimmedName.length === 0) {
      return;
    }

    onCreateProfile(trimmedName);
  };

  return (
    <main className="setup-screen">
      <section className="setup-panel" aria-labelledby="setup-title">
        <span className="eyebrow">New session</span>
        <h1 id="setup-title">Choose how you want to play.</h1>
        <p>
          Create a local profile for future features, or skip it and keep this session private on this device.
        </p>

        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="player-name">Profile name</label>
          <input
            id="player-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Alex"
            maxLength={24}
          />

          <div className="button-stack">
            <button className="primary-button" type="submit">
              <UserRoundPlus size={20} aria-hidden="true" />
              Create profile
            </button>
            <button className="secondary-button" type="button" onClick={onSkip}>
              <LockKeyhole size={20} aria-hidden="true" />
              Play privately
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
