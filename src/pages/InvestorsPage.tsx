import React, { useState } from 'react';
import { InvestorHero } from '../components/investors/InvestorHero';
import { ThesisPillars } from '../components/investors/ThesisPillars';
import { FinancialChart } from '../components/investors/FinancialChart';
import { CommercialRoadmap } from '../components/investors/CommercialRoadmap';
import { FranchiseHorizons } from '../components/investors/FranchiseHorizons';
import { InvestorEnquiryModal } from '../components/forms/InvestorEnquiryModal';
import { ArrowRight, Lock, Building2 } from 'lucide-react';

export const InvestorsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FAF7F0] overflow-x-hidden flex flex-col">
      {/* ── SECTION A: MASTER HERO (INVESTOR RECREATION) ── */}
      <InvestorHero onRequestPresentation={() => setIsModalOpen(true)} />

      {/* ── MAIN INSTITUTIONAL INVESTOR CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-20 lg:space-y-28 w-full">
        
        {/* ── SECTION 1: WHY THIS BUSINESS (Strategic Hypotheses & Edge) ── */}
        <ThesisPillars />

        {/* ── SECTION 2: FIVE-YEAR FINANCIAL PROJECTIONS (Base Case) ── */}
        <section className="space-y-4">
          <FinancialChart />
        </section>

        {/* ── SECTION 3: COMMERCIAL ROADMAP (The Path to ₹100–120 Cr) ── */}
        <CommercialRoadmap />

        {/* ── SECTION 4: MULTI-GENERATIONAL HORIZONS (Franchise Ecosystem) ── */}
        <FranchiseHorizons />

        {/* ── SECTION 5: CINEMATIC INVESTOR FINALE CTA (FULL-WIDTH PANORAMIC) ── */}
      </div>

      {/* Full-bleed cinematic CTA — outside the max-w-7xl container so it spans edge-to-edge */}
      <section className="relative w-full overflow-hidden bg-[#0B1224] border-t border-[#C58B39]/30 min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center">

        {/* Background Artwork: Investor Hero Panoramic (characters on glowing storybook + celestial globe) */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/investor-hero-panoramic.webp" type="image/webp" />
            <img
              src="/investor-hero-panoramic.png"
              alt="Zanarra character universe — Momo, Tobo, Dodi, Chiku pointing towards the celestial horizon"
              className="w-full h-full object-cover object-[68%_center] lg:object-[75%_center] select-none pointer-events-none"
              loading="lazy"
              decoding="async"
            />
          </picture>

          {/* Desktop: strong left-to-centre gradient so text pops cleanly */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(9,14,36,0.96) 0%, rgba(9,14,36,0.82) 28%, rgba(9,14,36,0.45) 48%, rgba(9,14,36,0.10) 62%, transparent 75%)'
            }}
          />

          {/* Mobile: top-to-bottom gradient */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(9,14,36,0.94) 0%, rgba(9,14,36,0.72) 35%, rgba(9,14,36,0.20) 55%, transparent 72%)'
            }}
          />

          {/* Subtle warm gold ambient radiance behind the characters */}
          <div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-80 h-80 rounded-full bg-[#C58B39]/12 blur-3xl pointer-events-none" />
          <div className="absolute bottom-4 left-[40%] w-[28%] h-24 rounded-full bg-[#C58B39]/08 blur-2xl pointer-events-none" />

          {/* Delicate twinkling accent stars */}
          <div className="absolute top-10 left-[14%] w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_8px_#fff] animate-pulse pointer-events-none" style={{ animationDuration: '3.2s' }} />
          <div className="absolute top-20 left-[28%] w-1 h-1 rounded-full bg-[#D4AF37]/90 shadow-[0_0_6px_#D4AF37] animate-pulse pointer-events-none" style={{ animationDuration: '5s' }} />
          <div className="absolute top-14 right-[38%] w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_8px_#fff] animate-pulse pointer-events-none" style={{ animationDuration: '4.1s' }} />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-center">
          <div className="w-full md:w-[52%] lg:w-[46%] xl:w-[42%] max-w-[520px] flex flex-col items-start text-left">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E172E]/70 border border-[#C58B39]/50 backdrop-blur-md shadow-sm mb-4 sm:mb-5">
              <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#D4AF37]">
                Capital &amp; Strategic Partnership
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-[#FAF7F0] leading-[1.14] tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
              style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
            >
              <span className="block">Interested in building</span>
              <span className="block text-[#D4AF37]">Zanarra with us?</span>
            </h2>

            {/* Supporting Body */}
            <p className="text-[#FAF7F0]/85 text-[15px] sm:text-[16px] leading-[1.68] max-w-[480px] mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              We welcome conversations with institutional investors and strategic partners who bring more than capital — including broadcast distribution, retail manufacturing, global media syndication, and international market access.
            </p>

            {/* CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FAF7F0] via-[#FFF8EC] to-[#D4AF37] text-[#0B1B36] font-bold text-sm tracking-wide shadow-[0_8px_24px_rgba(212,175,55,0.30)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.50)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-[#0B1B36]" strokeWidth={2.2} />
                <span>Request Investor Presentation</span>
                <ArrowRight className="w-4 h-4 text-[#0B1B36] group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[12px] text-[#FAF7F0]/55 italic sm:self-center sm:pl-1">
                Confidential overview &amp; audited deck
              </span>
            </div>

          </div>
        </div>
      </section>



      {/* ── INVESTOR ENQUIRY MODAL ── */}
      <InvestorEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
