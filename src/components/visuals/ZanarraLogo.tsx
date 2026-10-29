import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'light' | 'poster';
  size?: 'sm' | 'md' | 'lg';
}

export const ZanarraLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const isLight = variant === 'light';

  // Size mapping for the emblem icon
  const emblemSizeClasses = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-10 h-10 sm:w-11 sm:h-11 rounded-2xl',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 rounded-2xl'
  };

  // Height mapping for the wordmark
  const textHeightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-9 sm:h-10'
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
        <div
          className={`relative overflow-hidden border border-[#C7A451]/40 shadow-sm bg-gradient-to-b from-white to-[#FDF8EE] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${emblemSizeClasses[size]}`}
        >
          <img
            src="/zanarra-emblem.png"
            alt="Zanarra Emblem"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </Link>
    );
  }

  // Full / Light horizontal logo lockup
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-transform active:scale-95 select-none ${className}`}
      aria-label="Zanarra Home"
    >
      {/* 3D Shooting Star "Z" Emblem */}
      <div
        className={`relative overflow-hidden border shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md shrink-0 ${
          isLight
            ? 'bg-[#1E2D4A] border-white/20 group-hover:border-[#C7A451]/60'
            : 'bg-gradient-to-b from-white to-[#FDF8EE] border-[#C7A451]/40 group-hover:border-[#C7A451]'
        } ${emblemSizeClasses[size]}`}
      >
        <img
          src="/zanarra-emblem.png"
          alt="Zanarra Shooting Star Emblem"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Colorful Official ZANARRA Wordmark + Tagline */}
      <div className="flex flex-col justify-center">
        <img
          src={isLight ? '/zanarra-text-light.png' : '/zanarra-text-transparent.png'}
          alt="Zanarra — Dream • Play • Explore • Together"
          className={`w-auto object-contain object-left transition-transform duration-200 group-hover:brightness-105 ${textHeightClasses[size]}`}
        />
      </div>
    </Link>
  );
};
