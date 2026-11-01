import React from 'react';
import { Globe, User, ChevronRight } from 'lucide-react';

interface InvestorHeroProps {
  onRequestPresentation: () => void;
}

export const InvestorHero: React.FC<InvestorHeroProps> = ({ onRequestPresentation }) => {
  return (
    <section className="relative w-full bg-[#FAF6EA] overflow-hidden border-b border-[#EBDCC8]/60">
      {/* ── DESKTOP FULL-PANORAMIC CINEMATIC BACKGROUND (>= md) ── */}
      {/* Blends seamlessly into warm ivory on the left and showcases the 4K character universe on the right */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none select-none">
        <picture>
          <source srcSet="/investor-hero-panoramic.webp" type="image/webp" />
          <img
            src="/investor-hero-panoramic.png"
            alt="Zanarra character universe — Momo, Tobo, Dodi, Chiku, open storybook and celestial castle"
            className="w-full h-full object-cover object-[78%_center] lg:object-[82%_center] xl:object-center select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Soft, warm vignette wash ensuring text contrast on ultra-wide screens */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(250, 246, 234, 0.98) 0%, rgba(250, 246, 234, 0.92) 20%, rgba(250, 246, 234, 0.80) 32%, rgba(250, 246, 234, 0.40) 44%, rgba(250, 246, 234, 0.05) 54%, transparent 64%)'
          }}
        />
      </div>

      {/* ── DESKTOP TWO-COLUMN CONTAINER (Left ~45%, Right ~55%) ── */}
      <div className="hidden md:flex relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16 xl:py-20 min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] items-center">
        <div className="w-full md:w-[48%] lg:w-[46%] xl:w-[44%] max-w-[580px] flex flex-col justify-center text-left">
          
          {/* Eyebrow Label Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E4]/85 border border-[#C58B39]/50 shadow-xs w-fit mb-4 lg:mb-5 backdrop-blur-xs">
            <Globe className="w-3.5 h-3.5 text-[#B88034] shrink-0" strokeWidth={2.2} />
            <span className="text-[11px] lg:text-[11.5px] font-bold text-[#A87027] tracking-[0.14em] uppercase">
              INSTITUTIONAL OVERVIEW
            </span>
          </div>

          {/* Main Headline: Exactly three editorial lines with India in Champagne Gold */}
          <h1
            className="font-serif font-bold text-[#0B1B36] tracking-[-0.015em] mb-4 sm:mb-5"
            style={{
              fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(2.35rem, 3.4vw, 3.85rem)',
              lineHeight: 1.08,
            }}
          >
            <span className="block whitespace-normal lg:whitespace-nowrap">Building a global</span>
            <span className="block whitespace-normal lg:whitespace-nowrap">children&rsquo;s IP company</span>
            <span className="block text-[#C58B39]">from India.</span>
          </h1>

          {/* Business & Strategy Description */}
          <p className="text-[#22324D] text-[15px] lg:text-[16px] leading-[1.62] font-normal max-w-[500px] mb-4">
            Zanarra combines original character creation, AI-assisted production and localisation, audience development and a diversified IP monetisation strategy.
          </p>

          {/* Subtle gold divider line */}
          <div className="w-24 sm:w-32 h-[1.5px] bg-gradient-to-r from-[#C58B39]/70 via-[#E4BE75]/40 to-transparent my-1 sm:my-1.5" />

          {/* Mission Statement: Elegant Italic Serif */}
          <p
            className="text-[#1C2B44] text-[14.5px] lg:text-[15.5px] italic leading-[1.62] max-w-[510px] mb-6 sm:mb-7"
            style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
          >
            &ldquo;Our ambition is to build a portfolio of enduring characters and interconnected worlds that can scale across formats, markets and generations.&rdquo;
          </p>

          {/* Primary CTA Button */}
          <div>
            <button
              onClick={onRequestPresentation}
              className="group inline-flex items-center gap-3.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#0A1932] text-white font-medium text-[13.5px] sm:text-[14.5px] hover:bg-[#122446] shadow-[0_8px_25px_rgba(10,25,50,0.22)] hover:shadow-[0_12px_32px_rgba(10,25,50,0.32)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-[#C58B39]/40 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#D4AF37] shrink-0">
                <User className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.2} />
              </div>
              <span className="tracking-wide">Request Confidential Investor Presentation</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform shrink-0" strokeWidth={2.4} />
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE & TABLET STACKED LAYOUT (< md) ── */}
      <div className="md:hidden relative z-10 w-full flex flex-col bg-[#FAF6EA] pt-8 sm:pt-10 pb-12 px-5 sm:px-8 space-y-5">
        
        {/* Eyebrow Label Capsule */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF2E4] border border-[#C58B39]/50 shadow-xs w-fit">
          <Globe className="w-3.5 h-3.5 text-[#B88034] shrink-0" strokeWidth={2.2} />
          <span className="text-[10.5px] font-bold text-[#A87027] tracking-[0.14em] uppercase">
            INSTITUTIONAL OVERVIEW
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-bold text-[#0B1B36] tracking-tight leading-[1.08]"
          style={{
            fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2.15rem, 8vw, 2.75rem)',
          }}
        >
          <span className="block">Building a global</span>
          <span className="block">children&rsquo;s IP company</span>
          <span className="block text-[#C58B39]">from India.</span>
        </h1>

        {/* Description */}
        <p className="text-[15px] text-[#22324D] leading-[1.6]">
          Zanarra combines original character creation, AI-assisted production and localisation, audience development and a diversified IP monetisation strategy.
        </p>

        {/* Character Universe Cinematic Artwork Card */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-[#C58B39]/25 bg-gradient-to-b from-[#FAF2E4] to-[#FAF6EA] my-2">
          <picture>
            <source srcSet="/investor-hero-chars.webp" type="image/webp" />
            <img
              src="/investor-hero-chars.png"
              alt="Zanarra Universe — Momo, Tobo, Dodi, Chiku, magical storybook and celestial castle"
              className="w-full h-auto object-cover object-center"
              style={{ maxHeight: '360px' }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>

        {/* Mission Statement */}
        <div className="pt-1">
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#C58B39]/70 via-[#E4BE75]/40 to-transparent mb-2.5" />
          <p
            className="text-[14px] sm:text-[15px] italic text-[#1C2B44] leading-[1.6]"
            style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
          >
            &ldquo;Our ambition is to build a portfolio of enduring characters and interconnected worlds that can scale across formats, markets and generations.&rdquo;
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <button
            onClick={onRequestPresentation}
            className="w-full group inline-flex items-center justify-between px-6 py-3.5 rounded-full bg-[#0A1932] text-white font-medium text-[13.5px] hover:bg-[#122446] shadow-md border border-[#C58B39]/40 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.2} />
              <span className="tracking-wide">Request Confidential Investor Presentation</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform shrink-0" strokeWidth={2.4} />
          </button>
        </div>

      </div>
    </section>
  );
};
