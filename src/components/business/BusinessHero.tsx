import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Music, Play, Gift, ShieldCheck } from 'lucide-react';

interface BusinessHeroProps {
  onDiscoverBusiness?: () => void;
}

export const BusinessHero: React.FC<BusinessHeroProps> = ({ onDiscoverBusiness }) => {
  const handleDiscoverClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onDiscoverBusiness) {
      onDiscoverBusiness();
      return;
    }
    const el = document.getElementById('engine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    {
      id: 'stories',
      label: 'Original Stories',
      icon: BookOpen,
      iconFill: false,
    },
    {
      id: 'music',
      label: 'Music & Songs',
      icon: Music,
      iconFill: false,
    },
    {
      id: 'animation',
      label: 'Animation',
      icon: Play,
      iconFill: true,
    },
    {
      id: 'merchandise',
      label: 'Merchandise',
      icon: Gift,
      iconFill: false,
    },
    {
      id: 'licensing',
      label: 'Licensing',
      icon: ShieldCheck,
      iconFill: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF6EE] overflow-hidden border-b border-[#E8DEC9]">
      {/* ── DESKTOP FULL-PANORAMIC CINEMATIC BACKGROUND (>= md) ── */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none select-none">
        <picture>
          <source srcSet="/business-hero-clean.webp" type="image/webp" />
          <img
            src="/business-hero-clean.jpg"
            alt="Zanarra Universe — Momo, Tobo, Dodi, Chiku on open storybook with celestial castle and floating islands"
            className="w-full h-full object-cover object-[88%_bottom] select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Crisp left-side fade — soft natural transition so artwork stays 100% luminous */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(250,246,238,0.96) 0%, rgba(250,246,238,0.85) 28%, rgba(250,246,238,0.4) 42%, rgba(250,246,238,0.05) 52%, transparent 60%)',
          }}
        />
      </div>

      {/* ── DESKTOP CONTAINER (>= md) ── */}
      <div className="hidden md:flex relative z-10 w-full pl-8 sm:pl-12 lg:pl-20 xl:pl-28 pr-6 py-8 md:min-h-[calc(100vh-72px)] items-center">
        <div className="w-[48%] lg:w-[44%] xl:w-[42%] max-w-[560px] flex flex-col justify-center text-left my-auto">
          
          {/* Logo Lockup: Golden Shooting Star + ZANARRA */}
          <div className="flex items-center gap-3 mb-4 lg:mb-5 select-none">
            <svg
              viewBox="0 0 85 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 h-8 shrink-0 drop-shadow-[0_2px_4px_rgba(180,130,40,0.35)]"
            >
              <defs>
                <linearGradient id="zanGoldGradDesk" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D77F" />
                  <stop offset="45%" stopColor="#D4A347" />
                  <stop offset="85%" stopColor="#B37C22" />
                  <stop offset="100%" stopColor="#8C5C12" />
                </linearGradient>
              </defs>
              <path
                d="M 16 44 C 12 37 14 27 24 19 C 36 10 52 6 68 5 C 51 8 36 15 26 24 C 20 30 19 36 23 40 C 29 44 44 44 58 37 C 44 41 24 46 16 44 Z"
                fill="url(#zanGoldGradDesk)"
              />
              <path
                d="M 11 38 C 14 24 30 13 56 7 C 43 11 28 19 22 31 C 29 23 45 14 64 9 L 60 12 C 45 16 32 25 24 36 C 18 39 13 40 11 38 Z"
                fill="url(#zanGoldGradDesk)"
              />
              <polygon
                points="65,1 69,9 78,9 71,15 74,23 65,18 58,23 60,15 53,9 62,9"
                fill="url(#zanGoldGradDesk)"
              />
            </svg>
            <span
              className="font-serif font-bold text-[#17233A] tracking-[0.24em] text-xl lg:text-2xl uppercase leading-none drop-shadow-2xs"
              style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
            >
              ZANARRA
            </span>
          </div>

          {/* Master Headline: Exactly 3 editorial lines as in reference design */}
          <h1
            className="font-serif font-bold text-[#17233A] tracking-[-0.025em] mb-4 lg:mb-5"
            style={{
              fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.3rem, 3.6vw, 3.8rem)',
              lineHeight: 1.06,
            }}
          >
            <span className="block drop-shadow-2xs">We create the IP.</span>
            <span className="block drop-shadow-2xs">We build the audience.</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #B58428 0%, #DDA83A 40%, #9E6B1D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We scale the universe.
            </span>
          </h1>

          {/* Diamond Divider */}
          <div className="flex items-center gap-3 mb-4 lg:mb-5 max-w-[460px]">
            <div className="h-px flex-1 bg-gradient-to-r from-[#C58B39]/50 via-[#C58B39] to-[#C58B39]" />
            <span className="text-[#C58B39] text-xs leading-none">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C58B39]/30 to-[#C58B39]" />
          </div>

          {/* Description Paragraph: Crisp, clear, high contrast */}
          <p
            className="text-[#1A2639] text-[14px] lg:text-[15.5px] leading-[1.65] font-normal mb-5 lg:mb-6 max-w-[500px]"
            translate="no"
          >
            Zanarra is an original children's entertainment and intellectual property studio building globally scalable franchises. From original character lore to episodic animation, publishing, music, merchandise and territorial licensing.
          </p>

          {/* 5 Capability Badges Strip Capsule */}
          <div className="bg-[#FAF4E6]/95 backdrop-blur-md border border-[#DFCBA0] rounded-2xl p-2.5 lg:p-3 flex items-center justify-between shadow-[0_4px_20px_rgba(197,139,57,0.12)] max-w-[500px] mb-6 lg:mb-7">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <React.Fragment key={cap.id}>
                  <div className="flex flex-col items-center justify-center flex-1 px-1 py-0.5 text-center group cursor-default transition-all">
                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-[#F9EED4] to-[#E9D19E] border border-[#DDBF7E] flex items-center justify-center text-[#7A5016] shadow-2xs group-hover:scale-108 group-hover:from-[#FDEECB] group-hover:to-[#ECD4A4] transition-transform duration-200">
                      <Icon
                        className="w-4 h-4 text-[#7A5016]"
                        strokeWidth={2.2}
                        fill={cap.iconFill ? '#7A5016' : 'none'}
                      />
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-bold text-[#17233A] tracking-tight mt-1.5 leading-tight group-hover:text-[#B37C22] transition-colors whitespace-nowrap">
                      {cap.label}
                    </span>
                  </div>
                  {idx < capabilities.length - 1 && (
                    <div className="w-px h-8 bg-[#DEC895]/70 self-center shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Primary & Secondary Call to Action Buttons */}
          <div className="flex flex-row items-center gap-3.5 sm:gap-4">
            <Link
              to="/universe"
              className="group inline-flex items-center justify-center gap-2.5 px-7 lg:px-8 py-3.5 rounded-full bg-[#0E1726] text-white font-bold text-[13.5px] lg:text-[14px] hover:bg-[#18263E] shadow-[0_6px_22px_rgba(14,23,38,0.28)] hover:shadow-[0_10px_30px_rgba(14,23,38,0.36)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/10"
            >
              <span className="tracking-wide">Explore Our Universe</span>
              <div className="w-5 h-5 rounded-full bg-[#E5B54F] text-[#0E1726] flex items-center justify-center text-xs font-black shadow-sm group-hover:translate-x-0.5 transition-transform">
                →
              </div>
            </Link>

            <a
              href="#engine"
              onClick={handleDiscoverClick}
              className="group inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 rounded-full bg-[#FAF5E8] hover:bg-white text-[#17233A] font-bold text-[13.5px] lg:text-[14px] border border-[#DEC895] hover:border-[#C59B4B] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span className="tracking-wide">Discover Our Business</span>
              <span className="text-[#8C5C12] text-sm group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
          </div>

        </div>
      </div>


      {/* ── MOBILE & COMPACT TABLET STACKED LAYOUT (< md) ── */}
      <div className="md:hidden relative z-10 w-full flex flex-col bg-[#FAF6EE] pt-8 pb-10 px-5 space-y-5">
        
        {/* Mobile Logo Lockup */}
        <div className="flex items-center gap-2 select-none">
          <svg
            viewBox="0 0 85 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-6 shrink-0"
          >
            <defs>
              <linearGradient id="zanGoldGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D77F" />
                <stop offset="45%" stopColor="#D4A347" />
                <stop offset="85%" stopColor="#B37C22" />
                <stop offset="100%" stopColor="#8C5C12" />
              </linearGradient>
            </defs>
            <path
              d="M 16 44 C 12 37 14 27 24 19 C 36 10 52 6 68 5 C 51 8 36 15 26 24 C 20 30 19 36 23 40 C 29 44 44 44 58 37 C 44 41 24 46 16 44 Z"
              fill="url(#zanGoldGradMob)"
            />
            <path
              d="M 11 38 C 14 24 30 13 56 7 C 43 11 28 19 22 31 C 29 23 45 14 64 9 L 60 12 C 45 16 32 25 24 36 C 18 39 13 40 11 38 Z"
              fill="url(#zanGoldGradMob)"
            />
            <polygon
              points="65,1 69,9 78,9 71,15 74,23 65,18 58,23 60,15 53,9 62,9"
              fill="url(#zanGoldGradMob)"
            />
          </svg>
          <span
            className="font-serif font-bold text-[#17233A] tracking-[0.20em] text-lg uppercase leading-none"
            style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
          >
            ZANARRA
          </span>
        </div>

        {/* Mobile Character Universe Visual Window */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-[#E0CE9F] bg-gradient-to-b from-[#FAF5E8] to-[#F5EEDB]">
          <picture>
            <source srcSet="/business-hero-clean.webp" type="image/webp" />
            <img
              src="/business-hero-clean.jpg"
              alt="Momo, Tobo, Dodi, and Chiku in Zanarra Universe"
              className="w-full h-auto object-cover object-[75%_center]"
              style={{ maxHeight: '320px' }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-bold text-[#17233A] tracking-tight leading-[1.08]"
          style={{
            fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.1rem, 7.8vw, 2.65rem)',
          }}
        >
          <span className="block">We create the IP.</span>
          <span className="block">We build the audience.</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #B58428 0%, #D4A347 45%, #9E6B1D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            We scale the universe.
          </span>
        </h1>

        {/* Diamond Divider */}
        <div className="flex items-center gap-3 my-1">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C58B39]/40 to-[#C58B39]" />
          <span className="text-[#C58B39] text-xs leading-none">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C58B39]/40 to-[#C58B39]" />
        </div>

        {/* Description */}
        <p className="text-[14.5px] text-[#24344E] leading-[1.6]">
          Zanarra is an original children's entertainment and intellectual property studio building globally scalable franchises. From original character lore to episodic animation, publishing, music, merchandise and territorial licensing.
        </p>

        {/* Mobile Capability Badges Strip (Scrollable / Compact) */}
        <div className="bg-[#FAF4E6] border border-[#E0CE9F] rounded-2xl p-2 sm:p-2.5 grid grid-cols-5 gap-1 shadow-2xs">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.id} className="flex flex-col items-center text-center min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#F9EED4] to-[#E9D19E] border border-[#DDBF7E]/70 flex items-center justify-center text-[#7A5016] shrink-0">
                  <Icon
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7A5016]"
                    strokeWidth={2.2}
                    fill={cap.iconFill ? '#7A5016' : 'none'}
                  />
                </div>
                <span className="text-[8px] sm:text-[9.5px] font-bold text-[#17233A] tracking-tight mt-1 leading-tight break-words">
                  {cap.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex flex-col gap-2.5 pt-1">
          <Link
            to="/universe"
            className="w-full h-12 rounded-full bg-[#0E1726] text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-transform"
          >
            <span>Explore Our Universe</span>
            <div className="w-5 h-5 rounded-full bg-[#E5B54F] text-[#0E1726] flex items-center justify-center text-xs font-black">
              →
            </div>
          </Link>
          <a
            href="#engine"
            onClick={handleDiscoverClick}
            className="w-full h-12 rounded-full bg-[#FAF5E8] text-[#17233A] font-bold text-xs border border-[#DEC895] flex items-center justify-center gap-1.5 active:scale-[0.99] transition-transform"
          >
            <span>Discover Our Business</span>
            <span className="text-[#8C5C12] text-sm">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
