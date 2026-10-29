import React from 'react';
import { CharacterVisual } from './CharacterVisual';

export const TrioHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center justify-center py-6 select-none">
      {/* Background ambient circular realm ripples */}
      <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#C7A451]/20 animate-pulse-glow" />
      <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full bg-gradient-to-b from-[#F2EBDD]/60 via-[#FAF7F0] to-[#FAF7F0]/40 blur-2xl" />

      {/* Floating atmospheric elements */}
      <div className="absolute top-4 left-6 animate-float" style={{ animationDelay: '0.2s' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#C7A451" opacity="0.65" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="#B9D9F3" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="3" fill="#B9D9F3" />
        </svg>
      </div>

      <div className="absolute bottom-6 left-12 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#B8D4B4] shadow-xs text-[11px] font-semibold text-[#17233A]">
          <span className="w-2 h-2 rounded-full bg-[#4A7C59]" />
          Terra Viva
        </div>
      </div>

      <div className="absolute bottom-8 right-8 animate-float" style={{ animationDelay: '3.2s' }}>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#C9B9EA] shadow-xs text-[11px] font-semibold text-[#17233A]">
          <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          Cosmara
        </div>
      </div>

      {/* The Trio Layout */}
      <div className="relative flex items-end justify-center gap-2 sm:gap-4 z-10 pt-4">
        {/* Tobo on Left (Slightly tilted, tinker genius) */}
        <div className="transform -translate-y-2 hover:-translate-y-4 transition-transform duration-300">
          <CharacterVisual id="tobo" size="md" showBadge={false} />
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#17233A] bg-white/90 px-2 py-0.5 rounded-full shadow-xs border border-[#C7A451]/30">Tobo</span>
          </div>
        </div>

        {/* Momo in Center (Leading, prominent, hero posture) */}
        <div className="transform -translate-y-6 hover:-translate-y-8 transition-transform duration-300 z-20">
          <CharacterVisual id="momo" size="md" showBadge={false} />
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#17233A] bg-white/95 px-3 py-0.5 rounded-full shadow-sm border border-[#F2A18B]/50 ring-2 ring-[#F2A18B]/20">Momo</span>
          </div>
        </div>

        {/* Dodi on Right (Little spark, looking up in wonder) */}
        <div className="transform hover:-translate-y-2 transition-transform duration-300">
          <CharacterVisual id="dodi" size="md" showBadge={false} />
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#17233A] bg-white/90 px-2 py-0.5 rounded-full shadow-xs border border-[#B9D9F3]/50">Dodi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
