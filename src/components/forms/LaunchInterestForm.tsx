import React, { useState } from 'react';
import { Mail, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export const LaunchInterestForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'Parent' | 'Educator' | 'Partner'>('Parent');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid parent or partner email address.');
      return;
    }
    if (!consent) {
      setError('Please confirm parental/guardian consent.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F2EBDD]/70 rounded-3xl border border-[#C7A451]/30 p-6 sm:p-10 shadow-sm">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider mb-2">
          <HeartHandshake className="w-3.5 h-3.5" /> Early Access Circle
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A]">
          Be the First to Welcome Zanarra Stories Home
        </h3>
        <p className="text-xs sm:text-sm text-[#17233A]/70 mt-2 max-w-lg mx-auto">
          Get notified when our pilot stories, audio songs, and printable family discovery kits launch. Zero spam, purely wonder.
        </p>

        {submitted ? (
          <div className="mt-6 p-4 rounded-2xl bg-white border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Welcome to the journey! We’ve noted <strong>{email}</strong> ({role}). You’ll receive our first preview release.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto space-y-3">
            <div className="flex justify-center gap-2 mb-2">
              {(['Parent', 'Educator', 'Partner'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    role === r
                      ? 'bg-[#17233A] text-white shadow-xs'
                      : 'bg-white text-[#17233A] hover:bg-gray-100'
                  }`}
                >
                  I am a {r}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Parent or partner email..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 text-sm bg-white outline-none focus:border-[#C7A451]"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#17233A] text-white font-bold text-xs hover:bg-[#2A3F66] transition-colors shadow-xs"
              >
                Join Circle
              </button>
            </div>

            <label className="flex items-start gap-2 cursor-pointer text-left pt-1">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-3.5 h-3.5 rounded text-[#17233A]"
              />
              <span className="text-[11px] text-[#17233A]/70 leading-tight">
                I am 18+ and consent to receiving launch alerts. (We never collect personal data from children).
              </span>
            </label>

            {error && <p className="text-xs text-rose-600">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};
