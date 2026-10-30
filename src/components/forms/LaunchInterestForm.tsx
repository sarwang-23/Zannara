import React, { useState } from 'react';
import { Mail, CheckCircle, ShieldCheck, Sparkles, HeartHandshake, Check, Key, ArrowRight } from 'lucide-react';

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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F1E8D5] border border-[#C7A451]/40 p-6 sm:p-9 lg:p-10 shadow-[0_12px_36px_rgba(23,35,58,0.08)]">
      {/* Decorative ambient gold lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C7A451]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0284C7]/8 blur-3xl pointer-events-none" />
      
      {/* Subtle top golden accent bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#C7A451]/70 to-transparent" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Vertically Aligned Storytelling Chest Visual + Editorial Invitation */}
        <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#C7A451]/40 text-[#9D762B] text-xs font-bold uppercase tracking-[0.2em] shadow-2xs">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C7A451]" />
            <span>Early Access Circle</span>
          </div>

          {/* Heading */}
          <h3
            className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A] leading-tight tracking-tight"
            style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            Be the First to Welcome Zanarra Stories Home
          </h3>

          {/* Subtitle / Description */}
          <p className="text-sm text-[#17233A]/75 leading-relaxed font-sans max-w-lg">
            Get notified when our pilot stories, audio songs, and printable family discovery kits launch. Every subscriber receives our preview chapter reader. Zero spam, purely wonder.
          </p>

          {/* Story Chest Visual & Perks Strip */}
          <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/80 border border-[#E8DEC9] text-left shadow-2xs">
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-[#9B7528] via-[#F4DE9C] to-[#BF9738] shadow-xs">
              <div className="w-full h-full rounded-[11px] overflow-hidden bg-[#FAF4E8]">
                <img
                  src="/early-access-story-chest.jpg"
                  alt="Magical storybook chest with golden stardust, keys and scrolls"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-1 text-xs text-[#17233A]/85">
              <div className="flex items-center gap-1.5 font-bold text-[#17233A]">
                <Sparkles className="w-3 h-3 text-[#C7A451]" />
                <span>Early Circle Welcome Package:</span>
              </div>
              <ul className="text-[11px] text-[#17233A]/70 space-y-0.5">
                <li>✦ Digital Chapter 1 Reader Preview</li>
                <li>✦ Printable Family Discovery Activity Kit</li>
              </ul>
            </div>
          </div>

          {/* Child Safety Assurance */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#17233A]/60 pt-0.5">
            <ShieldCheck className="w-4 h-4 text-[#4A7C59] shrink-0" />
            <span className="font-medium">COPPA & Indian Digital Child Safety Compliant • Unsubscribe anytime</span>
          </div>
        </div>

        {/* Right Column: Balanced Form & Standardized Field Dimensions */}
        <div className="lg:col-span-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] shadow-sm">
          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-emerald-400 text-emerald-950 text-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-[#17233A] text-base">Welcome to the Story Circle!</p>
                <p className="text-xs text-[#17233A]/80 mt-1 leading-relaxed">
                  We’ve recorded <strong>{email}</strong> as a <strong>{role}</strong>. Look out for our first digital preview kit in your inbox.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Role Selection Label & Equal 3-Column Grid Pills */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#9D762B]">
                  Select Your Reader Role:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Parent', 'Educator', 'Partner'] as const).map((r) => {
                    const isSelected = role === r;
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`h-9 px-3 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#17233A] text-white shadow-xs scale-[1.01]'
                            : 'bg-[#FAF6ED] hover:bg-white text-[#17233A]/80 border border-[#E4D7C5]'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#E5C378] shrink-0" />}
                        <span>{r}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Email Input Field with Fixed Height */}
              <div className="space-y-1">
                <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#9D762B]">
                  Parent / Educator Email Address:
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A451] pointer-events-none" />
                  <input
                    type="email"
                    placeholder="e.g. parent@family.com or educator@school.org"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#DED0BD] text-xs sm:text-sm bg-[#FAF8F5] text-[#17233A] placeholder-[#17233A]/40 outline-none focus:border-[#C7A451] focus:ring-2 focus:ring-[#C7A451]/25 transition-all"
                  />
                </div>
              </div>

              {/* Standardized Primary CTA Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-full bg-[#17233A] hover:bg-[#233554] text-white font-extrabold text-xs sm:text-[13px] uppercase tracking-[0.16em] shadow-[0_4px_16px_rgba(23,35,58,0.2)] hover:shadow-[0_8px_24px_rgba(199,164,81,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group/cta"
              >
                <span>Unlock Early Access Stories</span>
                <ArrowRight className="w-4 h-4 text-[#E5C378] group-hover/cta:translate-x-1 transition-transform" />
              </button>

              {/* Parental Consent Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer text-left pt-0.5 group">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setError('');
                  }}
                  className="mt-0.5 w-4 h-4 rounded border-[#DED0BD] text-[#17233A] focus:ring-[#C7A451] accent-[#17233A] cursor-pointer shrink-0"
                />
                <span className="text-[11px] text-[#17233A]/75 leading-tight group-hover:text-[#17233A]">
                  I am 18+ and consent to receiving launch alerts. (We never collect personal data directly from children under 13).
                </span>
              </label>

              {/* Error Alert */}
              {error && (
                <p className="text-xs text-rose-600 font-semibold animate-fadeIn">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
