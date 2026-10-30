import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'light' | 'poster';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const ZanarraLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showTagline = true
}) => {
  const isLight = variant === 'light';

  // Size mapping for the emblem container
  const emblemSizes = {
    sm: 'w-8 h-8 rounded-[12px]',
    md: 'w-10 h-10 sm:w-11 sm:h-11 rounded-[16px] sm:rounded-[18px]',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 rounded-[18px] sm:rounded-[20px]'
  };

  const innerRadius = {
    sm: 'rounded-[10.5px]',
    md: 'rounded-[14.5px] sm:rounded-[16.5px]',
    lg: 'rounded-[16.5px] sm:rounded-[18.5px]'
  };

  // Height mapping for the wordmark
  const textHeightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-8 sm:h-10'
  };

  // If user requests the complete vertical poster lockup
  if (variant === 'poster') {
    return (
      <Link to="/" className={`inline-block group transition-transform active:scale-95 ${className}`}>
        <img
          src="/zanarra-logo.png"
          alt="Zanarra — Dream • Play • Explore • Together"
          className="w-auto h-auto max-w-[280px] rounded-3xl shadow-xl transition-all duration-300 group-hover:scale-105"
        />
      </Link>
    );
  }

  // If mark only
  if (variant === 'mark') {
    return (
      <Link to="/" className={`inline-flex items-center group transition-transform active:scale-95 ${className}`}>
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-[#C7A451]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div
            className={`relative p-[1.5px] bg-gradient-to-tr from-[#9B7528] via-[#F4DE9C] to-[#BF9738] shadow-[0_2px_10px_rgba(23,35,58,0.15)] group-hover:shadow-[0_4px_20px_rgba(199,164,81,0.4)] group-hover:scale-[1.04] transition-all duration-300 ${emblemSizes[size]}`}
          >
            <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${innerRadius[size]} ${
              isLight ? 'bg-[#0E172A]' : 'bg-gradient-to-b from-[#FFFDF9] to-[#F1E9D7]'
            }`}>
              <img
                src="/zanarra-emblem.png"
                alt="Zanarra Emblem"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/50 pointer-events-none" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Full / Light horizontal logo lockup
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group transition-transform active:scale-95 select-none ${className}`}
      aria-label="Zanarra Home"
    >
      {/* 3D Shooting Star "Z" Emblem Medallion */}
      <div className="relative shrink-0">
        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#E7C97E]/30 via-[#C7A451]/25 to-[#9B7528]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div
          className={`relative p-[1.5px] bg-gradient-to-tr from-[#9B7528] via-[#F4DE9C] to-[#BF9738] shadow-[0_2px_10px_rgba(23,35,58,0.12),0_1px_3px_rgba(199,164,81,0.25)] group-hover:shadow-[0_4px_22px_rgba(199,164,81,0.45)] group-hover:scale-[1.04] transition-all duration-300 ${emblemSizes[size]}`}
        >
          <div
            className={`relative w-full h-full overflow-hidden flex items-center justify-center ${innerRadius[size]} ${
              isLight ? 'bg-[#0E172A]' : 'bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#F1E9D7]'
            }`}
          >
            <img
              src="/zanarra-emblem.png"
              alt="Zanarra Shooting Star Emblem"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-white/45 pointer-events-none" />
            <div className={`absolute inset-0 ring-1 ring-inset ring-white/60 pointer-events-none ${innerRadius[size]}`} />
          </div>
        </div>
      </div>

      {/* Official ZANARRA Wordmark + Studio Tagline */}
      <div className="flex flex-col justify-center">
        <img
          src={isLight ? '/zanarra-text-light.png' : '/zanarra-text-transparent.png'}
          alt="Zanarra — Dream • Play • Explore • Together"
          className={`w-auto object-contain object-left transition-all duration-300 drop-shadow-[0_1.5px_3px_rgba(23,35,58,0.12)] group-hover:drop-shadow-[0_3px_12px_rgba(199,164,81,0.35)] group-hover:brightness-[1.06] ${textHeightClasses[size]}`}
        />
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[7px] text-[#C7A451] leading-none opacity-80">✦</span>
            <span className={`text-[8px] sm:text-[8.5px] font-black uppercase tracking-[0.24em] leading-none font-sans ${
              isLight ? 'text-[#E8D4A8]' : 'text-[#9D762B]'
            }`}>
              Dream · Play · Explore · Together
            </span>
            <span className="text-[7px] text-[#C7A451] leading-none opacity-80">✦</span>
          </div>
        )}
      </div>
    </Link>
  );
};
