import React from 'react';
import { BusinessFlywheel } from '../components/business/BusinessFlywheel';
import { REVENUE_STREAMS } from '../data/brandData';
import {
  Briefcase, Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles,
  BookOpen, Music, Film, Package, Globe, ArrowRight, Play,
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

      {/* ══════════════════════════════════════════════════════════════
          PREMIUM CINEMATIC IP HERO
          Left: Editorial headline · Right: Character universe visual
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF7F0] via-[#F5EDD8] to-[#EDE5CC] border-b border-[#E2D4B8]">

        {/* ── Ambient glow blobs ── */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C7A451]/[0.07] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#17233A]/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#F4DE9C]/[0.25] blur-3xl pointer-events-none" />

        {/* ── Decorative constellation dots ── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" aria-hidden="true">
          <circle cx="8%" cy="20%" r="1.5" fill="#C7A451" opacity="0.7" />
          <circle cx="15%" cy="10%" r="1" fill="#C7A451" opacity="0.5" />
          <circle cx="25%" cy="6%" r="2" fill="#C7A451" opacity="0.6" />
          <circle cx="88%" cy="12%" r="1.5" fill="#C7A451" opacity="0.7" />
          <circle cx="94%" cy="25%" r="1" fill="#C7A451" opacity="0.5" />
          <circle cx="78%" cy="8%" r="2" fill="#C7A451" opacity="0.6" />
          <circle cx="5%" cy="75%" r="1.5" fill="#C7A451" opacity="0.5" />
          <circle cx="12%" cy="88%" r="1" fill="#C7A451" opacity="0.4" />
          <circle cx="95%" cy="80%" r="1.5" fill="#C7A451" opacity="0.5" />
        </svg>

        {/* ── Golden top accent stripe ── */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#C7A451]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-end min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">

            {/* ── LEFT COLUMN: Editorial Headline + Copy + CTAs ── */}
            <div className="flex flex-col justify-center pb-12 lg:pb-16 pt-4 sm:pt-6 lg:pt-8 space-y-6 lg:space-y-7">

              {/* Eyebrow label */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#C7A451]/40 text-[#9D762B] text-[11px] font-black uppercase tracking-[0.22em] shadow-sm w-fit backdrop-blur-sm">
                <Briefcase className="w-3.5 h-3.5 text-[#C7A451]" />
                <span>Media &amp; Intellectual Property Model</span>
              </div>

              {/* Master headline — 3 strong broken lines */}
              <div>
                <h1
                  className="font-serif font-bold text-[#17233A] leading-[1.1] tracking-tight"
                  style={{
                    fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
                  }}
                >
                  <span className="block">We create the IP.</span>
                  <span className="block">We build the audience.</span>
                  <span
                    className="block"
                    style={{
                      background: 'linear-gradient(135deg, #C7A451 0%, #E8C56A 50%, #9D762B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    We scale the universe.
                  </span>
                </h1>
              </div>

              {/* Supporting description */}
              <p className="text-[14.5px] sm:text-[15px] text-[#17233A]/80 leading-relaxed max-w-[480px] font-sans">
                Zanarra is building a globally scalable original children's IP company — from original characters and story universes to animated series, music, merchandise and licensing across markets.
              </p>

              {/* IP Format Pill Tags */}
              <div className="flex flex-wrap gap-2">
                {IP_FORMATS.map((fmt) => (
                  <span
                    key={fmt.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-bold border"
                    style={{ backgroundColor: fmt.bg, color: fmt.color, borderColor: fmt.border }}
                  >
                    <fmt.icon className="w-3.5 h-3.5" />
                    <span>{fmt.label}</span>
                  </span>
                ))}
              </div>

              {/* Key business facts strip */}
              <div className="grid grid-cols-3 gap-3 max-w-[460px]">
                {[
                  { stat: '100%', label: 'Proprietary IP' },
                  { stat: '5', label: 'Story Realms' },
                  { stat: '8+', label: 'Revenue Streams' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/80 border border-[#E8DEC9] rounded-2xl px-3 py-3 text-center backdrop-blur-sm shadow-sm">
                    <div
                      className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A]"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    >
                      {item.stat}
                    </div>
                    <div className="text-[10.5px] text-[#17233A]/65 font-semibold uppercase tracking-wide leading-tight mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
                <Link
                  to="/investors"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#17233A] hover:bg-[#233554] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <span>Investor Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5C378] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/partnerships"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white/90 hover:bg-white text-[#17233A] border border-[#DACFBA] hover:border-[#C7A451] text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200"
                >
                  <span>Partner with Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A451]" />
                </Link>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Character Universe Visual Composition ── */}
            <div className="relative flex items-end justify-center lg:justify-end h-full min-h-[420px] sm:min-h-[500px] pb-0">

              {/* Large scenic base image — world panorama or storybook */}
              <div className="relative w-full max-w-[560px] lg:max-w-none">

                {/* Golden gradient halo behind characters */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C7A451]/20 via-transparent to-transparent rounded-3xl pointer-events-none z-0" />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#EDE5CC] via-[#EDE5CC]/60 to-transparent pointer-events-none z-20" />

                {/* Main hero character image — trio together */}
                <picture>
                  <source srcSet="/hero-chars-ultra.webp" type="image/webp" />
                  <img
                    src="/hero-chars-ultra.png"
                    alt="Momo, Tobo and Dodi — the original Zanarra characters — ready for their next adventure"
                    className="relative z-10 w-full object-contain object-bottom select-none drop-shadow-2xl"
                    style={{ maxHeight: '580px' }}
                    loading="eager"
                    decoding="async"
                  />
                </picture>

                {/* Floating story format badge cards */}
                {/* Top-left: IP Label */}
                <div className="absolute top-6 left-2 sm:left-4 z-30 animate-[float_4s_ease-in-out_infinite]">
                  <div className="bg-white/95 backdrop-blur-md border border-[#E2D4B8] rounded-2xl px-3.5 py-2.5 shadow-lg text-left max-w-[160px]">
                    <div className="text-[9.5px] font-black uppercase tracking-[0.18em] text-[#9D762B] mb-0.5">Original IP</div>
                    <div className="font-serif text-sm font-bold text-[#17233A] leading-tight">One Universe</div>
                    <div className="text-[10px] text-[#17233A]/60 font-medium mt-0.5">Infinite stories</div>
                  </div>
                </div>

                {/* Top-right: Animation badge */}
                <div className="absolute top-16 right-2 sm:right-4 z-30 animate-[float_5s_ease-in-out_0.8s_infinite]">
                  <div className="bg-[#0B1224]/90 backdrop-blur-md border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-lg text-left">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Film className="w-3.5 h-3.5 text-[#E5C158]" />
                      <div className="text-[9.5px] font-black uppercase tracking-[0.18em] text-[#E5C158]">Animation</div>
                    </div>
                    <div className="text-[11px] text-white font-bold">Pilot Stage</div>
                    <div className="text-[10px] text-white/60 font-medium">In production</div>
                  </div>
                </div>

                {/* Mid-left: Music badge */}
                <div className="absolute top-[42%] left-0 sm:left-2 z-30 animate-[float_4.5s_ease-in-out_1.5s_infinite]">
                  <div className="bg-[#FFF1F2]/95 backdrop-blur-md border border-[#FECDD3] rounded-2xl px-3 py-2 shadow-md">
                    <div className="flex items-center gap-1.5">
                      <Music className="w-3.5 h-3.5 text-[#E11D48]" />
                      <div className="text-[10px] font-bold text-[#9F1239]">Original Music</div>
                    </div>
                    <div className="text-[9.5px] text-[#9F1239]/70 font-medium mt-0.5 pl-5">Songs &amp; Albums</div>
                  </div>
                </div>

                {/* Mid-right: Stories badge */}
                <div className="absolute top-[55%] right-0 sm:right-2 z-30 animate-[float_3.8s_ease-in-out_2.2s_infinite]">
                  <div className="bg-[#F0F7F3]/95 backdrop-blur-md border border-[#B8D4B4] rounded-2xl px-3 py-2 shadow-md">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#4A7C59]" />
                      <div className="text-[10px] font-bold text-[#1A5435]">Story Library</div>
                    </div>
                    <div className="text-[9.5px] text-[#1A5435]/70 font-medium mt-0.5 pl-5">8 pilots in pipeline</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom wave / transition into page body ── */}
        <div className="h-8 bg-gradient-to-b from-[#EDE5CC] to-[#FAF7F0]" />
      </section>

      <div className="pt-4 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* The Three-Stage Engine */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Execution Strategy
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            The Three-Stage Engine
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-1">
            How creative invention transforms into recurring transmedia economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stage 1: Create */}
          <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Stage 01
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">Genesis</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              Create
            </h3>
            <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
              Develop original characters, story worlds, music and repeatable formats using a combination of top creative talent, technology and AI-assisted workflows.
            </p>
            <ul className="text-xs text-[#17233A]/75 space-y-1.5 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Proprietary IP ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>AI-accelerated storyboarding & audio pipelines</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Comprehensive character bible & style guides</span>
              </li>
            </ul>
          </div>

          {/* Stage 2: Build */}
          <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                Stage 02
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">Distribution</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              Build
            </h3>
            <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
              Develop audience relationships through consistent content releases, memorable storytelling, character recognition, and multilingual digital distribution.
            </p>
            <ul className="text-xs text-[#17233A]/75 space-y-1.5 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>High-frequency digital shorts & episodic pilots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Multi-language localization (Hindi, English, etc.)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Direct parent community trust & engagement</span>
              </li>
            </ul>
          </div>

          {/* Stage 3: Monetise & Expand */}
          <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                Stage 03
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">Compounding</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              Monetise & Expand
            </h3>
            <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
              Extend successful IP into licensing, merchandise, digital subscriptions, education, live experiences, strategic partnerships and international markets.
            </p>
            <ul className="text-xs text-[#17233A]/75 space-y-1.5 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>High-margin retail publishing & toy licensing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Early childhood curriculum kit partnerships</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Territorial broadcast rights across global markets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Compounding Flywheel */}
      <section>
        <BusinessFlywheel />
      </section>

      {/* The Seven Planned Revenue Streams */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
              Commercial Portfolio
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#17233A]">
              Seven Planned Revenue Streams
            </h2>
            <p className="text-sm text-[#17233A]/70 mt-1 max-w-xl">
              Diversified commercial architecture engineered to capture compounding value across media, physical goods, and experiential education.
            </p>
          </div>

          <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
            *Planned commercial expansion opportunities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVENUE_STREAMS.map((stream) => (
            <div
              key={stream.id}
              className="bg-white rounded-3xl border border-[#C7A451]/20 p-6 flex flex-col justify-between hover:border-[#C7A451] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#C7A451]">
                    Stream 0{stream.id}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    {stream.stage}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#17233A] mb-2">
                  {stream.title}
                </h3>

                <p className="text-xs text-[#17233A]/75 leading-relaxed mb-4">
                  {stream.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Target Pillars</span>
                <div className="space-y-1">
                  {stream.potentialPillars.map((p, idx) => (
                    <div key={idx} className="text-[11px] text-[#17233A] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action panel */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#17233A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Explore Strategic Alliances with Zanarra
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg">
            Whether in toy licensing, animated co-production, or early childhood learning, let's build the next generation of global children's IP together.
          </p>
        </div>

          <Link
            to="/partnerships"
            className="px-6 py-3 rounded-full bg-[#C7A451] text-[#17233A] text-xs font-bold hover:bg-[#b89543] transition-colors whitespace-nowrap"
          >
            Partner with Zanarra
          </Link>
        </section>
      </div>
    </div>
  );
};
