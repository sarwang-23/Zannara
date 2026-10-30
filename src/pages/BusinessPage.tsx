import React from 'react';
import { BusinessFlywheel } from '../components/business/BusinessFlywheel';
import { REVENUE_STREAMS } from '../data/brandData';
import {
  Briefcase, Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles,
  BookOpen, Music, Film, Package, Globe, ArrowRight, Play,
  Tv, Smartphone, GraduationCap, TrendingUp, Compass, ChevronRight, Check,
  RotateCw,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// IP Format pillars displayed as visual tags on the hero
const IP_FORMATS = [
  { label: 'Original Stories', icon: BookOpen, color: '#4A7C59', bg: '#F0F7F3', border: '#B8D4B4' },
  { label: 'Music & Songs', icon: Music, color: '#E11D48', bg: '#FFF1F2', border: '#FECDD3' },
  { label: 'Animation', icon: Film, color: '#0284C7', bg: '#F0F9FF', border: '#BAE6FD' },
  { label: 'Merchandise', icon: Package, color: '#D97706', bg: '#FEF7EC', border: '#FCD34D' },
  { label: 'Licensing', icon: Globe, color: '#7C3AED', bg: '#F9F5FF', border: '#DDD6FE' },
];

export const BusinessPage: React.FC = () => {
  return (
    <div className="bg-[#FAF7F0] min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════
          PREMIUM CORPORATE IP & ENTERTAINMENT HERO
          Left: Authoritative corporate headline, metrics, capability tags & CTAs
          Right: Dominant studio-grade franchise key art showcasing Momo, Tobo & Dodi
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden border-b border-[#E8DEC9]">
        {/* Subtle ambient corporate illumination */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[480px] opacity-60"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #EDD89A38 0%, transparent 75%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-[#C7A451]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

            {/* Left 7 Columns: Corporate Value Proposition & Credentials */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Executive Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C7A451]/40 shadow-2xs mb-4 hover:border-[#C7A451] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#C7A451] animate-pulse" />
                <span className="text-[#C7A451] text-[10.5px] font-black uppercase tracking-[0.24em]">
                  Media &amp; Intellectual Property Model
                </span>
              </div>

              {/* Master Headline */}
              <h1
                className="font-serif font-bold text-[#17233A] tracking-[-0.015em] mb-4"
                style={{
                  fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.4rem, 4.1vw, 3.8rem)',
                  lineHeight: 1.08,
                }}
              >
                <span className="block">We create the IP.</span>
                <span className="block">We build the audience.</span>
                <span className="block text-[#C7A451]">
                  We scale the universe.
                </span>
              </h1>

              {/* Executive Summary */}
              <p className="text-[#17233A]/80 text-[15px] sm:text-[16px] leading-[1.65] mb-5 max-w-[560px] font-sans">
                Zanarra is an original children's entertainment and intellectual property studio building globally scalable franchises. From original character lore to episodic animation, publishing, music, merchandise, and territorial licensing.
              </p>

              {/* IP Capabilities Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {IP_FORMATS.map((format) => {
                  const Icon = format.icon;
                  return (
                    <div
                      key={format.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8DEC9] text-[#17233A] text-xs font-semibold shadow-2xs hover:border-[#C7A451]/60 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: format.color }} />
                      <span>{format.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Executive Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-7">
                <div className="bg-white rounded-2xl border border-[#C7A451]/30 p-3.5 sm:p-4 shadow-xs hover:border-[#C7A451]/60 transition-colors">
                  <div className="font-serif text-[1.85rem] font-bold text-[#17233A] leading-none mb-1">
                    100%
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C7A451]">
                    Proprietary IP
                  </div>
                  <div className="text-[11px] text-[#17233A]/65 mt-1 leading-snug">
                    Zero third-party rights encumbrance
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-[#C7A451]/30 p-3.5 sm:p-4 shadow-xs hover:border-[#C7A451]/60 transition-colors">
                  <div className="font-serif text-[1.85rem] font-bold text-[#17233A] leading-none mb-1">
                    5
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C7A451]">
                    Story Realms
                  </div>
                  <div className="text-[11px] text-[#17233A]/65 mt-1 leading-snug">
                    Interconnected transmedia lore
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-[#C7A451]/30 p-3.5 sm:p-4 shadow-xs col-span-2 sm:col-span-1 hover:border-[#C7A451]/60 transition-colors">
                  <div className="font-serif text-[1.85rem] font-bold text-[#17233A] leading-none mb-1">
                    8+
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C7A451]">
                    Revenue Horizons
                  </div>
                  <div className="text-[11px] text-[#17233A]/65 mt-1 leading-snug">
                    Compounding commercial flywheel
                  </div>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/investors"
                  className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-[#17233A] hover:bg-[#233554] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <span>Investor Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]" />
                </Link>

                <Link
                  to="/partnerships"
                  className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-white hover:bg-gray-50 border border-[#17233A]/20 hover:border-[#C7A451] text-[#17233A] text-xs font-bold uppercase tracking-wider shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <span>Partner With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A451]" />
                </Link>
              </div>

            </div>

            {/* Right 5 Columns: Studio Franchise Key Art & IP Dossier Presentation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[500px] bg-white rounded-3xl border border-[#C7A451]/25 p-4 sm:p-5 shadow-[0_12px_40px_-8px_rgba(23,35,58,0.08),0_2px_8px_rgba(199,164,81,0.06)] relative overflow-hidden">
                
                {/* Dossier Header Bar */}
                <div className="flex items-center justify-between border-b border-[#E8DEC9]/80 pb-3 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451]" />
                    <span className="text-[10.5px] font-black uppercase tracking-[0.2em] text-[#17233A]">
                      Core Franchise IP · Master Asset
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Production-Ready
                  </span>
                </div>

                {/* Cinematic Franchise Key Art Window: Momo, Tobo & Dodi (Visually Dominant) */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0E1726] shadow-inner mb-3.5 group select-none">
                  
                  {/* Atmospheric Cinematic Environment Backdrop */}
                  <div className="absolute inset-0">
                    <picture>
                      <source srcSet="/collab-investors-universe.webp" type="image/webp" />
                      <img
                        src="/collab-investors-universe.jpg"
                        alt="Zanarra Universe Landscape"
                        className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05] blur-[0.5px] scale-102 group-hover:scale-106 transition-transform duration-700"
                      />
                    </picture>
                    {/* Cinematic lighting and depth vignettes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/90 via-[#0E1726]/20 to-transparent pointer-events-none" />
                  </div>

                  {/* High-Resolution Character Key Art (Foreground: Momo, Tobo & Dodi) */}
                  <div className="absolute inset-x-0 bottom-0 top-2 flex items-end justify-center z-10 pointer-events-none">
                    <picture>
                      <source srcSet="/hero-chars-ultra.webp" type="image/webp" />
                      <img
                        src="/hero-chars-ultra.png"
                        alt="Momo, Tobo and Dodi — Original Zanarra Characters"
                        className="w-[96%] max-w-[450px] h-full object-contain object-bottom drop-shadow-[0_18px_32px_rgba(0,0,0,0.65)]"
                        loading="eager"
                        decoding="async"
                      />
                    </picture>
                  </div>

                  {/* Sleek Studio Character Identification Bar */}
                  <div className="absolute bottom-2.5 inset-x-2.5 z-20 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#0E1726]/85 backdrop-blur-md border border-white/10 text-white">
                    <div>
                      <div className="font-serif text-[13px] font-bold text-white leading-tight">
                        Momo, Tobo &amp; Dodi
                      </div>
                      <div className="text-[9.5px] text-[#C7A451] font-semibold tracking-wide">
                        The Original Ensemble Cast
                      </div>
                    </div>
                    <span className="text-[9px] text-white/70 font-mono font-medium tracking-wider bg-white/10 px-2 py-0.5 rounded-md border border-white/10">
                      100% OWNED IP
                    </span>
                  </div>
                </div>

                {/* Streamlined Franchise Portfolio Specifications */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-[#FAF7F0] px-3 py-2 rounded-xl border border-[#E8DEC9]/70">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-[#C7A451]">
                      Target Demographic
                    </span>
                    <span className="font-bold text-[#17233A] text-[11.5px] block leading-tight mt-0.5">
                      Ages 3–9 Global &amp; Co-Viewing
                    </span>
                  </div>

                  <div className="bg-[#FAF7F0] px-3 py-2 rounded-xl border border-[#E8DEC9]/70">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-[#C7A451]">
                      Rights Portfolio
                    </span>
                    <span className="font-bold text-[#17233A] text-[11.5px] block leading-tight mt-0.5">
                      Animation, Publishing &amp; Toys
                    </span>
                  </div>
                </div>

                {/* Character Roster Strip & Bible Link */}
                <div className="pt-2.5 border-t border-[#E8DEC9]/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <img
                        src="/momo-portrait.png"
                        alt="Momo"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                      />
                      <img
                        src="/tobo-portrait.png"
                        alt="Tobo"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                      />
                      <img
                        src="/dodi-portrait.png"
                        alt="Dodi"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#17233A]">
                      Franchise Character Roster
                    </span>
                  </div>

                  <Link
                    to="/characters"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#17233A] hover:text-[#C7A451] transition-colors"
                  >
                    <span>Character Bible</span>
                    <ArrowRight className="w-3 h-3 text-[#C7A451]" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="pt-4 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: THE THREE-STAGE ENGINE
          A visually connected 3-stage business roadmap:
          Create (Genesis) ➔ Build (Distribution) ➔ Monetise & Expand (Compounding)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-4xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C7A451]/40 text-[#C7A451] text-[10.5px] font-black uppercase tracking-[0.22em] mb-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451]" />
              <span>Commercialization Architecture</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A] tracking-tight leading-[1.12]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              The Three-Stage Engine
            </h2>
            <p className="text-sm sm:text-base text-[#17233A]/75 mt-2 leading-relaxed">
              How Zanarra methodically transitions original creative intuition into a global, compounding commercial entertainment franchise.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-[#17233A]/60 shrink-0 pb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Strategic Roadmap</span>
          </div>
        </div>

        {/* Roadmap Progression Track (Desktop Visual Connector) */}
        <div className="hidden lg:block relative py-2">
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#C7A451]/50 via-[#0284C7]/40 to-[#7C3AED]/50 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-3 gap-8 relative z-10">
            
            <div className="flex items-center gap-3 bg-[#FAF7F0] pr-4">
              <div className="w-9 h-9 rounded-full bg-[#17233A] text-white flex items-center justify-center font-mono font-bold text-xs ring-4 ring-[#C7A451]/40 shadow-sm">
                01
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C7A451] block leading-none">
                  Stage 01
                </span>
                <span className="text-xs font-bold text-[#17233A]">Creative Genesis</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#FAF7F0] px-4">
              <div className="w-9 h-9 rounded-full bg-[#17233A] text-white flex items-center justify-center font-mono font-bold text-xs ring-4 ring-[#0284C7]/40 shadow-sm">
                02
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0284C7] block leading-none">
                  Stage 02
                </span>
                <span className="text-xs font-bold text-[#17233A]">Audience Velocity</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#FAF7F0] pl-4">
              <div className="w-9 h-9 rounded-full bg-[#17233A] text-white flex items-center justify-center font-mono font-bold text-xs ring-4 ring-[#7C3AED]/40 shadow-sm">
                03
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7C3AED] block leading-none">
                  Stage 03
                </span>
                <span className="text-xs font-bold text-[#17233A]">Transmedia Scale</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Interconnected Roadmap Milestone Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ── STAGE 01: CREATE (Genesis) ── */}
          <div className="bg-white rounded-3xl border border-[#C7A451]/35 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#C7A451] transition-all duration-300 relative group overflow-hidden">
            <div className="space-y-4">
              
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-[10.5px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451]" />
                  Stage 01 · Genesis
                </span>
                <span className="font-serif text-2xl font-bold text-[#C7A451]/80 font-mono">
                  01
                </span>
              </div>

              {/* Title & Narrative */}
              <div>
                <h3
                  className="font-serif text-2xl font-bold text-[#17233A] tracking-tight mb-2"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  Create Proprietary IP
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed font-sans">
                  Develop original character bibles, transmedia story worlds, music motifs, and repeatable formats with 100% clean worldwide copyright and trademark ownership.
                </p>
              </div>

              {/* Creative Development Asset Window: Authentic Momo Concept Artwork */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#17233A] shadow-inner border border-gray-100 group-hover:border-[#C7A451]/40 transition-colors">
                <img
                  src="/showcase-momo-adventurer.jpg"
                  alt="Creative Development Bible: Momo the Adventurer on Terra Viva"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#17233A]/85 backdrop-blur-md border border-white/10 text-white text-[10px]">
                  <span className="font-semibold text-white/95 truncate">
                    Concept Bible: Momo · Terra Viva
                  </span>
                  <span className="text-[#C7A451] font-mono shrink-0 ml-2">
                    100% OWNED
                  </span>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 block">
                  Core Intellectual Property Assets
                </span>
                <ul className="space-y-1.5 text-xs text-[#17233A]/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Multi-character design bibles &amp; 3D style guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Five connected story realms &amp; sonic themes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Global trademark &amp; chain-of-title asset defensibility</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Progression Indicator */}
            <div className="mt-6 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C7A451]">
              <span>Next: Audience Distribution</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* ── STAGE 02: BUILD (Distribution) ── */}
          <div className="bg-white rounded-3xl border border-[#0284C7]/30 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#0284C7] transition-all duration-300 relative group overflow-hidden">
            <div className="space-y-4">
              
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-900 border border-sky-200/80 text-[10.5px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  Stage 02 · Distribution
                </span>
                <span className="font-serif text-2xl font-bold text-[#0284C7]/80 font-mono">
                  02
                </span>
              </div>

              {/* Title & Narrative */}
              <div>
                <h3
                  className="font-serif text-2xl font-bold text-[#17233A] tracking-tight mb-2"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  Build Global Audience
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed font-sans">
                  Cultivate direct audience relationships through high-frequency digital content releases, memorable storytelling, recognizable catchphrases, and multilingual digital localization.
                </p>
              </div>

              {/* Content Pipeline Asset Window: Episodic Digital Stories */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#17233A] shadow-inner border border-gray-100 group-hover:border-[#0284C7]/40 transition-colors">
                <img
                  src="/phase-01-digital-stories.webp"
                  alt="Audience Distribution: Episodic Digital Stories"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#17233A]/85 backdrop-blur-md border border-white/10 text-white text-[10px]">
                  <span className="font-semibold text-white/95 truncate">
                    Streaming Shorts &amp; Episodic Pilots
                  </span>
                  <span className="text-[#0284C7] font-mono shrink-0 ml-2">
                    GLOBAL CADENCE
                  </span>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 block">
                  Audience Growth &amp; Content Engine
                </span>
                <ul className="space-y-1.5 text-xs text-[#17233A]/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>High-cadence animated shorts &amp; musical tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Multilingual dubbing (Hindi, English, Spanish, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct co-viewing parental community trust</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Progression Indicator */}
            <div className="mt-6 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0284C7]">
              <span>Next: Commercial Compounding</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* ── STAGE 03: MONETISE & EXPAND (Compounding) ── */}
          <div className="bg-white rounded-3xl border border-[#7C3AED]/30 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#7C3AED] transition-all duration-300 relative group overflow-hidden">
            <div className="space-y-4">
              
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200/80 text-[10.5px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  Stage 03 · Compounding
                </span>
                <span className="font-serif text-2xl font-bold text-[#7C3AED]/80 font-mono">
                  03
                </span>
              </div>

              {/* Title & Narrative */}
              <div>
                <h3
                  className="font-serif text-2xl font-bold text-[#17233A] tracking-tight mb-2"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  Monetise &amp; Expand
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed font-sans">
                  Extend validated character affinity into high-margin licensing, collector publishing, toy lines, interactive subscriptions, live experiences, and worldwide territorial syndication.
                </p>
              </div>

              {/* Commercial Expansion Asset Window: Picture Books & Consumer Products */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#17233A] shadow-inner border border-gray-100 group-hover:border-[#7C3AED]/40 transition-colors">
                <img
                  src="/phase-04-books-merchandise.webp"
                  alt="Commercial Licensing: Books and Merchandise"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#17233A]/85 backdrop-blur-md border border-white/10 text-white text-[10px]">
                  <span className="font-semibold text-white/95 truncate">
                    Publishing, Toys &amp; Consumer Products
                  </span>
                  <span className="text-[#7C3AED] font-mono shrink-0 ml-2">
                    HIGH MARGIN
                  </span>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 block">
                  Transmedia Monetization Horizons
                </span>
                <ul className="space-y-1.5 text-xs text-[#17233A]/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Master toy licensing &amp; picture book publishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Curriculum-aligned early learning kit modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Worldwide territorial broadcast licensing agreements</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Progression Indicator */}
            <div className="mt-6 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#7C3AED]">
              <span>Feeds Perpetual IP Flywheel</span>
              <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
            </div>
          </div>

        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: THE SELF-SUSTAINING FRANCHISE ENGINE
          Circular 7-Stage Radial Flywheel Component
          ═══════════════════════════════════════════════════════════════════ */}
      <section>
        <BusinessFlywheel />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: SEVEN PLANNED REVENUE STREAMS
          Sophisticated Commercial Portfolio Presentation
          3 Intentional Clusters (2 + 3 + 2 = 7 Streams Asymmetric Grid)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E8DEC9]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C7A451]/40 text-[#C7A451] text-[10.5px] font-black uppercase tracking-[0.22em] mb-2.5 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Commercial Portfolio Architecture</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A] tracking-tight leading-[1.12]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Seven Planned Revenue Streams
            </h2>
            <p className="text-[#17233A]/75 text-sm sm:text-base mt-2 leading-relaxed">
              A diversified commercial architecture engineered to capture compounding value across media syndication, consumer goods, interactive software, and international rights.
            </p>
          </div>

          {/* Legal / Forward-Looking Disclaimer Badge */}
          <div className="bg-white px-4 py-2 rounded-2xl border border-gray-200 shadow-2xs max-w-xs shrink-0">
            <span className="text-[10px] text-gray-500 font-semibold block leading-snug">
              *Forward-looking commercial framework. Planned expansion horizons subject to strategic partner agreements.
            </span>
          </div>
        </div>

        {/* ── CLUSTER 01: DIGITAL MEDIA & SONIC DISTRIBUTION (2 Columns: 50% / 50%) ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#17233A]">
              Pillar 01 · Media, Streaming &amp; Audio Syndication
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Stream 01: Digital Content Distribution */}
            <div className="bg-white rounded-3xl border border-[#0284C7]/25 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#0284C7] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] block leading-none">
                        Stream 01
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        Media Distribution
                      </span>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    Stage 1 Genesis &amp; Distribution
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#17233A] mb-2.5">
                  Digital Content Distribution
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed mb-5">
                  Revenue opportunities from eligible platform distribution, streaming partnerships, and commissioned ethical brand integrations that match Zanarra's high standards.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Commercial Delivery Channels</span>
                <div className="space-y-1.5">
                  {['Global streaming licensing (AVOD / SVOD)', 'Digital video platform syndication', 'Short-form social episodic storytelling'].map((p, idx) => (
                    <div key={idx} className="text-xs text-[#17233A] flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-50">
                  <span>Economic Model:</span>
                  <span className="font-bold text-[#17233A]">Platform Licensing &amp; Ad Rev-Share</span>
                </div>
              </div>
            </div>

            {/* Stream 02: Music & Audio Sponsorship */}
            <div className="bg-white rounded-3xl border border-[#E11D48]/25 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#E11D48] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48]">
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E11D48] block leading-none">
                        Stream 02
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        Sonic Lore &amp; Audio
                      </span>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    Stage 1 Sonic Lore
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#17233A] mb-2.5">
                  Music &amp; Audio Sponsorship
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed mb-5">
                  Original character soundtracks, multi-language nursery and adventure songs, podcast bedtime stories, and family brand sponsorships.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Commercial Delivery Channels</span>
                <div className="space-y-1.5">
                  {['Streaming royalties (Spotify, Apple Music, YouTube)', 'Audiobook syndication & bedtime story podcasts', 'Live family music event integrations'].map((p, idx) => (
                    <div key={idx} className="text-xs text-[#17233A] flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-50">
                  <span>Economic Model:</span>
                  <span className="font-bold text-[#17233A]">Streaming Royalties &amp; Audio Sponsorships</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── CLUSTER 02: CONSUMER PRODUCTS, SOFTWARE & EDUCATION (3 Columns: 33% each) ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#17233A]">
              Pillar 02 · Physical Products, Interactive Software &amp; Institutional Learning
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stream 03: Licensing & Merchandise */}
            <div className="bg-white rounded-3xl border border-[#D97706]/25 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#D97706] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#D97706]">
                      <Package className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#D97706] block leading-none">
                        Stream 03
                      </span>
                      <span className="text-[11px] font-bold text-gray-500">
                        Consumer Products
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    Stage 3
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#17233A] mb-2">
                  Licensing &amp; Merchandise
                </h3>
                <p className="text-xs text-[#17233A]/80 leading-relaxed mb-4">
                  Transforming emotional character affinity into tangible consumer goods including storybooks, plush toys, STEM building kits, and sustainable apparel.
                </p>
              </div>

              <div className="pt-3.5 border-t border-gray-100 space-y-2.5">
                <span className="text-[9.5px] uppercase font-bold text-gray-400 block">Target Pillars</span>
                <div className="space-y-1">
                  {['Toy manufacturing partnerships', 'Publishing & graphic novels', 'Apparel & school gear'].map((p, idx) => (
                    <div key={idx} className="text-[11px] text-[#17233A] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-[10.5px] text-gray-500 border-t border-gray-50 flex items-center justify-between">
                  <span>Model:</span>
                  <span className="font-bold text-[#17233A]">Retail Royalties (8–14%)</span>
                </div>
              </div>
            </div>

            {/* Stream 04: Subscriptions & Interactive Apps */}
            <div className="bg-white rounded-3xl border border-[#7C3AED]/25 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#7C3AED] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7C3AED]">
                      <Smartphone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#7C3AED] block leading-none">
                        Stream 04
                      </span>
                      <span className="text-[11px] font-bold text-gray-500">
                        Interactive Apps
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    Stage 2
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#17233A] mb-2">
                  Subscriptions &amp; Interactive Apps
                </h3>
                <p className="text-xs text-[#17233A]/80 leading-relaxed mb-4">
                  Subscription-based digital realms where children solve story challenges, build Tobo-style inventions, and unlock safe community features.
                </p>
              </div>

              <div className="pt-3.5 border-t border-gray-100 space-y-2.5">
                <span className="text-[9.5px] uppercase font-bold text-gray-400 block">Target Pillars</span>
                <div className="space-y-1">
                  {['Zanarra Universe Companion App', 'Gamified STEM challenges', 'Family subscription tier'].map((p, idx) => (
                    <div key={idx} className="text-[11px] text-[#17233A] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-[10.5px] text-gray-500 border-t border-gray-50 flex items-center justify-between">
                  <span>Model:</span>
                  <span className="font-bold text-[#17233A]">Recurring App Subscriptions</span>
                </div>
              </div>
            </div>

            {/* Stream 05: Education & Story-Led Learning */}
            <div className="bg-white rounded-3xl border border-[#059669]/25 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#059669] transition-all">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#059669]">
                      <GraduationCap className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#059669] block leading-none">
                        Stream 05
                      </span>
                      <span className="text-[11px] font-bold text-gray-500">
                        Education Kits
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    Stage 3
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#17233A] mb-2">
                  Education &amp; Story-Led Learning
                </h3>
                <p className="text-xs text-[#17233A]/80 leading-relaxed mb-4">
                  Story-led classroom materials, inquiry-based pedagogical kits for early childhood educators, and experiential school workshops.
                </p>
              </div>

              <div className="pt-3.5 border-t border-gray-100 space-y-2.5">
                <span className="text-[9.5px] uppercase font-bold text-gray-400 block">Target Pillars</span>
                <div className="space-y-1">
                  {['Early-years inquiry kits', 'Institutional licensing', 'Educator story training'].map((p, idx) => (
                    <div key={idx} className="text-[11px] text-[#17233A] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-[10.5px] text-gray-500 border-t border-gray-50 flex items-center justify-between">
                  <span>Model:</span>
                  <span className="font-bold text-[#17233A]">Annual Institutional Licenses</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── CLUSTER 03: EXPERIENTIAL ENTERTAINMENT & GLOBAL RIGHTS (2 Columns: 40% / 60% Asymmetric) ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C7A451]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#17233A]">
              Pillar 03 · Live Experiential IP &amp; Global Territorial Licensing
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Stream 06: Live Experiences & Family Events (5 Cols ~ 42%) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-[#C7A451]/30 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#C7A451] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C7A451]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C7A451] block leading-none">
                        Stream 06
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        Live Experiences
                      </span>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    Stage 3
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#17233A] mb-2.5">
                  Live Experiences &amp; Family Events
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed mb-5">
                  Interactive theatrical productions, touring museum interactive pop-ups, and ticketed experiential universe events across top metropolitan centers.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Commercial Delivery Channels</span>
                <div className="space-y-1.5">
                  {['Theatrical stage tours & meet-and-greets', 'Interactive sensory pop-ups in flagship hubs', 'Mall & botanical realm installations'].map((p, idx) => (
                    <div key={idx} className="text-xs text-[#17233A] flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-50">
                  <span>Economic Model:</span>
                  <span className="font-bold text-[#17233A]">Ticket Sales &amp; Venue Partnerships</span>
                </div>
              </div>
            </div>

            {/* Stream 07: International Territorial Licensing (7 Cols ~ 58% — Flagship Strategic Asset) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-[#C7A451]/50 p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#C7A451] transition-all relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[#C7A451]"
              />

              <div>
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#17233A] text-white flex items-center justify-center shadow-xs">
                      <Globe className="w-5 h-5 text-[#C7A451]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C7A451] block leading-none">
                        Stream 07 · Flagship Strategic Asset
                      </span>
                      <span className="text-xs font-bold text-[#17233A]">
                        Worldwide Territorial Rights
                      </span>
                    </div>
                  </div>
                  <span className="text-[10.5px] font-bold px-3 py-1 rounded-full bg-[#FAF7F0] text-[#17233A] border border-[#C7A451]/40">
                    Stage 3 Global Expansion
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A] mb-2.5 relative z-10">
                  International Territorial Licensing
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed mb-5 max-w-xl font-sans relative z-10">
                  Territorial broadcast rights, dubbing in European, Asian, and Latin American languages, regional publishing distribution, and country-specific master licensing deals.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3 relative z-10">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Commercial Delivery Channels</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Foreign language broadcast rights',
                    'Regional master publishing distribution',
                    'Global co-production alliances',
                    'Country-specific master licensing deals',
                  ].map((p, idx) => (
                    <div key={idx} className="text-xs text-[#17233A] flex items-center gap-2 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2.5 flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-100">
                  <span>Economic Model:</span>
                  <span className="font-bold text-[#17233A]">Multi-Year Territorial Guarantees &amp; Syndication Royalties</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA — STRATEGIC ALLIANCES & PARTNERSHIPS (CINEMATIC PANORAMA)
          Rich, immersive full-width cinematic finale matching HomePage above footer
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#0B1224] border-t border-[#C7A451]/30 min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        
        {/* Background Scene: Desktop & Mobile Responsive High-Res Master Artwork */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 767px)" srcSet="/storybook-finale-mobile.webp" type="image/webp" />
            <source media="(max-width: 767px)" srcSet="/storybook-finale-mobile.jpg" type="image/jpeg" />
            <source srcSet="/storybook-finale-desktop.webp" type="image/webp" />
            <img
              src="/storybook-finale-desktop.jpg"
              alt="Zanarra magical franchise universe — Momo, Tobo, Dodi, and Chiku looking towards the glowing crystal gateway"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              loading="lazy"
              decoding="async"
            />
          </picture>

          {/* Atmospheric lighting overlays */}
          {/* Desktop: Midnight-indigo gradient on the left ensures crisp corporate readability while preserving the artwork */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(9, 14, 28, 0.90) 0%, rgba(9, 14, 28, 0.70) 26%, rgba(9, 14, 28, 0.20) 38%, transparent 50%)'
            }}
          />

          {/* Mobile: Top-down twilight gradient keeps headline & buttons readable against the starry sky */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(9, 14, 28, 0.94) 0%, rgba(9, 14, 28, 0.75) 35%, rgba(9, 14, 28, 0.20) 55%, transparent 75%)'
            }}
          />

          {/* Subtle warm horizon ambient glow behind the portal */}
          <div className="absolute top-1/2 left-[28%] -translate-y-1/2 w-96 h-96 rounded-full bg-[#E5B558]/15 blur-3xl pointer-events-none" />

          {/* Slow, gentle luminous shimmer on the winding golden stardust road */}
          <div className="absolute bottom-6 left-[18%] sm:left-[24%] w-[38%] h-28 rounded-full bg-[#E5B558]/12 blur-2xl animate-pathway-pulse pointer-events-none" />

          {/* Subtle twinkling celestial stars */}
          <div className="absolute top-8 left-[14%] w-2 h-2 rounded-full bg-[#FAF7F0] shadow-[0_0_10px_#FFF] animate-star-breathe pointer-events-none" style={{ animationDelay: '0s' }} />
          <div className="absolute top-20 left-[36%] w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158] animate-star-breathe pointer-events-none" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-10 right-[32%] w-2 h-2 rounded-full bg-[#FAF7F0] shadow-[0_0_10px_#FFF] animate-star-breathe pointer-events-none" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-16 right-[18%] w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158] animate-star-breathe pointer-events-none" style={{ animationDelay: '3.8s' }} />

          {/* Gentle fireflies floating softly near the meadow & pathway */}
          <div className="absolute top-[48%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#FFE082] shadow-[0_0_8px_#FFD54F] animate-firefly-a pointer-events-none" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[56%] left-[34%] w-2 h-2 rounded-full bg-[#FFD54F] shadow-[0_0_10px_#FFCA28] animate-firefly-b pointer-events-none" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[68%] left-[44%] w-1.5 h-1.5 rounded-full bg-[#FFE082] shadow-[0_0_8px_#FFD54F] animate-firefly-a pointer-events-none" style={{ animationDelay: '5s' }} />
          <div className="absolute top-[62%] right-[40%] w-1.5 h-1.5 rounded-full bg-[#FFD54F] shadow-[0_0_9px_#FFCA28] animate-firefly-b pointer-events-none" style={{ animationDelay: '1.8s' }} />
        </div>

        {/* Foreground Corporate Alliances Content: Aligned inside max-w-7xl global grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-center">
          <div className="w-full md:w-[52%] lg:w-[46%] xl:w-[42%] max-w-[500px] flex flex-col items-start text-left">
            
            {/* Eyebrow badge with refined corporate styling */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E172E]/70 border border-[#E5C158]/40 backdrop-blur-md shadow-sm mb-4 sm:mb-5">
              <span className="text-[#E5C158] text-xs leading-none">✨</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#E5C158]">
                Strategic Alliances · Co-Production
              </span>
            </div>

            {/* Main Headline strictly broken into TWO balanced lines */}
            <h2
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-[#FAF7F0] leading-[1.18] tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
              style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              <span className="block">Explore Strategic Alliances</span>
              <span className="block text-[#FAF7F0]">with Zanarra.</span>
            </h2>

            {/* Supporting Line */}
            <p className="text-xs sm:text-[15px] lg:text-base text-[#FAF7F0]/90 leading-[1.65] font-sans max-w-sm sm:max-w-md mb-6 sm:mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Whether in toy licensing, animated co-production, or early childhood learning, let's build the next generation of global children's IP together.
            </p>

            {/* Two Clear Calls to Action */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <Link
                to="/partnerships"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FAF7F0] via-[#FFF9ED] to-[#F3E5C8] text-[#17233A] font-bold text-xs sm:text-sm tracking-wide shadow-[0_8px_24px_rgba(235,210,160,0.35)] hover:shadow-[0_12px_32px_rgba(235,210,160,0.55)] hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#C7A451] focus:ring-offset-2 focus:ring-offset-[#17233A] transition-all duration-200"
              >
                <span>Partner with Zanarra</span>
                <ArrowRight className="w-4 h-4 text-[#17233A] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] border border-white/25 hover:border-white/40 font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md shadow-sm active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#FAF7F0] focus:ring-offset-2 focus:ring-offset-[#17233A] transition-all duration-200"
              >
                Investor Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
