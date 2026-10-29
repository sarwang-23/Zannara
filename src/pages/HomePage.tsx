import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrioHeroVisual } from '../components/visuals/TrioHeroVisual';
import { CharacterVisual } from '../components/visuals/CharacterVisual';
import { RealmVisual } from '../components/visuals/RealmVisual';
import { CHARACTERS, REALMS, BRAND_INFO, Character, Realm } from '../data/brandData';
import { InvestorEnquiryModal } from '../components/forms/InvestorEnquiryModal';
import { CharacterModal } from '../components/modals/CharacterModal';
import { RealmModal } from '../components/modals/RealmModal';
import {
  ArrowRight,
  Sparkles,
  Compass,
  Layers,
  Globe2,
  TrendingUp,
  Heart,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [selectedCharacterForModal, setSelectedCharacterForModal] = useState<Character | null>(null);
  const [selectedRealmForModal, setSelectedRealmForModal] = useState<Realm | null>(null);

  // ── Section 2: World of Zanarra interactive state ──
  const [activeZone, setActiveZone] = useState<'characters' | 'realms' | 'franchise' | null>(null);
  const [selectedRealmTab, setSelectedRealmTab] = useState<string>('terra-viva');
  const [activeCharacterSecret, setActiveCharacterSecret] = useState<string | null>(null);
  const [chikuWaved, setChikuWaved] = useState(false);
  const [clueRevealed, setClueRevealed] = useState(false);
  const worldSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = worldSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setChikuWaved(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 8 Experiences for Section 6
  const experiences = [
    { num: '01', title: 'Short-Form Digital Stories', desc: 'Bite-sized episodic narratives introducing characters and wondrous realms.' },
    { num: '02', title: 'Original Music & Songs', desc: 'Memorable, culturally rich songs fostering emotion, rhythm, and joy.' },
    { num: '03', title: 'Longer Episodic Entertainment', desc: 'Richly plotted narrative series exploring deeper lore and team problem-solving.' },
    { num: '04', title: 'Books & Merchandise', desc: 'High-quality picture books, plush companions, and creative activity sets.' },
    { num: '05', title: 'Interactive Digital Experiences', desc: 'Immersive exploration apps and safe game environments.' },
    { num: '06', title: 'Educational Products', desc: 'Inquiry-led learning modules sparking natural scientific and artistic curiosity.' },
    { num: '07', title: 'Live Events & Experiences', desc: 'Theatrical shows, sensory exhibitions, and touring universe installations.' },
    { num: '08', title: 'Licensing & Distribution', desc: 'Global co-productions, localized territorial broadcast, and retail distribution.' }
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: UNIFIED CINEMATIC HERO (EXACTLY MATCHING IMAGE 2)
          Single seamless panoramic background with warm ivory dream wash
          on left and crystal-clear character world on right
          ═══════════════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: BALANCED EDITORIAL HERO (2-COLUMN COMPOSITION)
          Left: 45–48% width, 3-line balanced headline, clean ivory background
          Right: Vivid, cinematic, full-colour character illustration
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[calc(100vh-68px)] min-h-[560px] max-h-[880px] flex items-center bg-[#FAF7F0] overflow-hidden">
        
        {/* ── FULL PANORAMIC BACKGROUND (3K ULTRA-HD CRYSTAL CLEAR) ── */}
        <div className="hidden md:block absolute inset-0 z-0">
          <picture>
            <source srcSet="/hero-panoramic-ultra.webp" type="image/webp" />
            <img
              src="/hero-panoramic-ultra.png"
              alt="Zanarra magical universe — Momo, Tobo, Dodi, and Chiku looking towards floating sky islands"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              loading="eager"
              decoding="async"
            />
          </picture>
          {/* Warm-ivory gradient: strong contrast on left for text, fully transparent before characters */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(252, 248, 240, 0.87) 0%, rgba(252, 248, 240, 0.82) 8%, rgba(252, 248, 240, 0.72) 18%, rgba(252, 248, 240, 0.55) 30%, rgba(252, 248, 240, 0.35) 42%, rgba(252, 248, 240, 0.15) 53%, rgba(252, 248, 240, 0.04) 62%, transparent 72%)'
            }}
          />
        </div>

        {/* ── DESKTOP CONTENT CONTAINER (Left column 45–48% width) ────── */}
        <div className="hidden md:block relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 sm:py-6">
          <div className="w-full md:w-[48%] lg:w-[46%] xl:w-[45%] max-w-[600px] flex flex-col justify-center">
            
            {/* Eyebrow capsule badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8]/80 shadow-xs w-fit mb-3.5 lg:mb-4">
              <span className="text-[#C7A451] text-xs leading-none">✨</span>
              <span className="text-[11.5px] font-semibold text-[#17243B] tracking-[0.06em] uppercase">
                Small questions. Big adventures.
              </span>
            </div>

            {/* Main Headline: Exactly THREE balanced lines with extra breathing room below */}
            <h1
              className="font-serif font-bold text-[#17243B] tracking-[-0.015em] mb-4 sm:mb-5 lg:mb-5.5"
              style={{
                fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.15rem, 3.15vw, 3.42rem)',
                lineHeight: 1.05,
                maxWidth: '620px'
              }}
            >
              <span className="block whitespace-normal lg:whitespace-nowrap">Every great adventure</span>
              <span className="block">begins with a</span>
              <span className="block">question.</span>
            </h1>

            {/* Supporting description: Natural width & comfortable spacing */}
            <p
              className="text-[#17243B] leading-[1.6] max-w-[510px] mb-4 sm:mb-5"
              style={{ fontSize: 'clamp(15px, 1.05vw, 17px)', fontWeight: 500 }}
            >
              Meet Zanarra — a universe of unforgettable characters, extraordinary worlds and stories that inspire children to keep wondering, discovering and imagining.
            </p>

            {/* CTA Buttons: Aligned horizontally, 48–52px height, rounded-full */}
            <div className="flex flex-row items-center gap-3.5 sm:gap-4 mb-2.5 sm:mb-3">
              <Link
                to="/universe"
                className="h-[48px] lg:h-[52px] px-7 sm:px-8 rounded-full bg-[#17233A] text-white font-bold text-sm lg:text-[14.5px] hover:bg-[#1E2D4A] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap shadow-md flex items-center justify-center text-center"
              >
                Explore the Universe
              </Link>
              <Link
                to="/characters"
                className="h-[48px] lg:h-[52px] px-7 sm:px-8 rounded-full bg-[#FAF7F0] hover:bg-white text-[#17233A] font-bold text-sm lg:text-[14.5px] border-[1.5px] border-[#17233A] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap flex items-center justify-center text-center"
              >
                Meet Our Characters
              </Link>
            </div>

            {/* Supporting tagline directly below buttons */}
            <p className="text-[12px] font-semibold text-[#2E3D55] tracking-wide">
              Original worlds. Endless possibilities.
            </p>
          </div>
        </div>

        {/* ── MOBILE & COMPACT TABLET (< md) STACKED LAYOUT ───────────── */}
        <div className="md:hidden relative z-10 w-full flex flex-col bg-[#FAF7F0] pt-8 sm:pt-10 pb-10 px-5 space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8]/80 shadow-xs w-fit">
            <span className="text-[#C7A451] text-xs leading-none">✨</span>
            <span className="text-[11px] font-semibold text-[#17233A] tracking-[0.06em] uppercase">
              Small questions. Big adventures.
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-bold text-[#17233A] tracking-tight leading-[1.05]"
            style={{
              fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.15rem, 8.5vw, 2.75rem)',
            }}
          >
            Every great adventure begins with a question.
          </h1>

          {/* Supporting description */}
          <p className="text-[15px] text-[#334155] leading-[1.6]">
            Meet Zanarra — a universe of unforgettable characters, extraordinary worlds and stories that inspire children to keep wondering, discovering and imagining.
          </p>

          {/* Character Artwork — prominent, sharp, colourful, and unobstructed */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-[#17233A]/5 bg-gradient-to-b from-[#F5EFE4] to-[#FAF7F0]">
            <picture>
              <source srcSet="/hero-chars-ultra.webp" type="image/webp" />
              <img
                src="/hero-chars-ultra.png"
                alt="Momo, Tobo, Dodi and Chiku in the magical Zanarra world"
                className="w-full h-auto object-cover object-center"
                style={{ maxHeight: '340px' }}
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-1">
            <Link
              to="/universe"
              className="w-full h-[52px] rounded-full bg-[#17233A] text-white font-bold text-sm flex items-center justify-center shadow-md active:scale-[0.99] transition-transform"
            >
              Explore the Universe
            </Link>
            <Link
              to="/characters"
              className="w-full h-[52px] rounded-full bg-[#FAF7F0] text-[#17233A] font-bold text-sm border-[1.5px] border-[#17233A] flex items-center justify-center active:scale-[0.99] transition-transform"
            >
              Meet Our Characters
            </Link>
          </div>

          {/* Supporting tagline */}
          <p className="text-center text-[12px] font-medium text-[#64748B] tracking-wide">
            Original worlds. Endless possibilities.
          </p>
        </div>

        {/* Hidden SEO / screen-reader content */}
        <div className="sr-only">
          <p>Small questions. Big adventures.</p>
          <p>Meet Zanarra — a universe of unforgettable characters, extraordinary worlds and stories that inspire children to keep wondering, discovering and imagining.</p>
          <p>Original worlds. Endless possibilities.</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — THE WORLD OF ZANARRA (FULL IMMERSIVE REDESIGN)
          SVG storybook landscape · Chiku guide · 3 interactive zones
          All animations scoped here via <style> · No external assets
          ══════════════════════════════════════════════════════════════ */}
      <section
        ref={worldSectionRef as React.RefObject<HTMLElement>}
        id="world-of-zanarra"
        aria-labelledby="zanarra-world-heading"
        className="relative overflow-hidden scroll-mt-24 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16"
        style={{ background: 'linear-gradient(180deg, #FAF6EE 0%, #F4EAD6 50%, #EDE5CC 100%)' }}
      >
        {/* ── Section-scoped keyframe animations ── */}
        <style>{`
          @keyframes zan-cloud-l { 0%{transform:translateX(0)} 100%{transform:translateX(60px)} }
          @keyframes zan-cloud-r { 0%{transform:translateX(0)} 100%{transform:translateX(-50px)} }
          @keyframes zan-twinkle { 0%,100%{opacity:0.2;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
          @keyframes zan-pulse-gold { 0%,100%{box-shadow:0 0 0 0 rgba(199,164,81,0.5)} 60%{box-shadow:0 0 0 14px rgba(199,164,81,0)} }
          @keyframes zan-pulse-blue { 0%,100%{box-shadow:0 0 0 0 rgba(2,132,199,0.55)} 60%{box-shadow:0 0 0 14px rgba(2,132,199,0)} }
          @keyframes zan-pulse-coral { 0%,100%{box-shadow:0 0 0 0 rgba(225,29,72,0.55)} 60%{box-shadow:0 0 0 14px rgba(225,29,72,0)} }
          @keyframes zan-pulse-green { 0%,100%{box-shadow:0 0 0 0 rgba(22,163,74,0.55)} 60%{box-shadow:0 0 0 14px rgba(22,163,74,0)} }
          @keyframes zan-pulse-amber { 0%,100%{box-shadow:0 0 0 0 rgba(217,119,6,0.55)} 60%{box-shadow:0 0 0 14px rgba(217,119,6,0)} }
          @keyframes zan-pulse-purple { 0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0.55)} 60%{box-shadow:0 0 0 14px rgba(124,58,237,0)} }
          @keyframes zan-wave { 0%,100%{transform:rotate(-10deg)} 50%{transform:rotate(18deg)} }
          @keyframes zan-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
          @keyframes zan-float-isle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
          @keyframes zan-glow-path { 0%,100%{opacity:0.5} 50%{opacity:1} }
          @keyframes zan-firefly { 0%,100%{opacity:0;transform:translate(0,0)} 25%{opacity:1;transform:translate(6px,-8px)} 75%{opacity:0.6;transform:translate(-4px,4px)} }
          @media (prefers-reduced-motion: reduce) {
            .zan-anim { animation: none !important; transition: none !important; }
          }
        `}</style>

        {/* ── Header — centered, generous spacing from navbar ── */}
        <div className="relative z-20 text-center pt-2 sm:pt-4 pb-6 px-4">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C7A451] mb-2">
            <span className="block w-8 h-px bg-[#C7A451]/60" />
            The World of Zanarra
            <span className="block w-8 h-px bg-[#C7A451]/60" />
          </span>
          <h2
            id="zanarra-world-heading"
            className="font-serif font-bold text-[#17243B] leading-[1.08] mb-2"
            style={{
              fontFamily: "'DM Serif Display','Cormorant Garamond',Georgia,serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            }}
          >
            One universe.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C7A451 0%, #E8C56A 55%, #C7A451 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Infinite stories.
            </span>
          </h2>
          <p className="text-[15px] text-[#2C3E5A] max-w-lg mx-auto leading-relaxed">
            Original characters, five magical realms, and a universe built to grow with every child — and every generation.
          </p>
        </div>

        {/* ── MAIN ILLUSTRATED WORLD ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="relative rounded-3xl overflow-hidden border border-[#C7A451]/30 shadow-2xl bg-[#F6EEDF]"
            style={{ boxShadow: '0 16px 64px rgba(23,36,59,0.16)' }}
          >
            {/* Panoramic Storybook Landscape */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.8] max-h-[520px] overflow-hidden select-none">
              <img
                src="/world-zanarra-panorama.jpg"
                alt="The Magical World of Zanarra with floating islands, character village, five realms sanctuary, and grand library"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="eager"
                decoding="async"
              />

              {/* Atmospheric lighting gradient overlay: subtle warm vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, transparent 60%, rgba(23,36,59,0.18) 100%), linear-gradient(to top, rgba(23,36,59,0.14) 0%, transparent 26%)',
                }}
              />

              {/* Glowing Stardust Trail & Footprints leading to Five Realms */}
              <svg
                viewBox="0 0 1200 675"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                {/* Golden stardust path glow */}
                <path
                  d="M 600 640 Q 560 520 620 440 T 700 320"
                  fill="none"
                  stroke={clueRevealed ? '#F59E0B' : '#FDE68A'}
                  strokeWidth={clueRevealed ? '6' : '3'}
                  strokeDasharray="8 8"
                  opacity={clueRevealed ? '0.95' : '0.45'}
                  className="zan-anim"
                  style={{
                    animation: clueRevealed ? 'zan-glow-path 1.5s ease-in-out infinite' : 'none',
                    filter: clueRevealed ? 'drop-shadow(0 0 10px rgba(245,158,11,0.9))' : 'none'
                  }}
                />

                {/* Stardust paw prints along the trail */}
                {[
                  { cx: 585, cy: 580, r: -15 },
                  { cx: 575, cy: 530, r: 10 },
                  { cx: 590, cy: 485, r: -5 },
                  { cx: 615, cy: 440, r: 15 },
                  { cx: 650, cy: 390, r: 25 },
                  { cx: 685, cy: 345, r: 20 },
                ].map((p, idx) => (
                  <g
                    key={idx}
                    transform={`translate(${p.cx}, ${p.cy}) rotate(${p.r}) scale(0.9)`}
                    opacity={clueRevealed ? 0.95 : 0.4}
                    className="zan-anim"
                    style={{
                      transition: 'opacity 0.4s ease',
                      animation: clueRevealed ? `zan-twinkle 2s ease-in-out infinite ${idx * 0.25}s` : 'none',
                    }}
                  >
                    <ellipse cx="0" cy="0" rx="4.5" ry="5.5" fill="#FDE68A" />
                    <circle cx="-5" cy="-6" r="2" fill="#FDE68A" />
                    <circle cx="-1.5" cy="-8" r="2" fill="#FDE68A" />
                    <circle cx="2.5" cy="-8" r="2" fill="#FDE68A" />
                    <circle cx="5.5" cy="-6" r="2" fill="#FDE68A" />
                  </g>
                ))}
              </svg>

              {/* ── 3 INTEGRATED DESTINATION MARKERS ── */}

              {/* Destination 1 — Characters Village (Left) */}
              <div
                className="absolute"
                style={{ left: '17%', top: '48%', transform: 'translate(-50%, -50%)', zIndex: 20 }}
              >
                <button
                  onClick={() => setActiveZone(activeZone === 'characters' ? null : 'characters')}
                  className={`group relative flex flex-col items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C7A451] rounded-2xl p-1 transition-all duration-300 ${
                    activeZone === 'characters' ? 'scale-105' : 'hover:scale-105'
                  }`}
                  aria-pressed={activeZone === 'characters'}
                  aria-label="Discover Original Characters Destination"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-md transition-all duration-200 border ${
                      activeZone === 'characters'
                        ? 'bg-[#FEF3C7] border-[#C7A451] text-[#17243B] ring-2 ring-[#C7A451]'
                        : 'bg-[#FFFDF8]/95 border-[#C7A451]/50 text-[#17243B] group-hover:bg-[#FFFDF5] group-hover:border-[#C7A451]'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">✨</span>
                    <span className="whitespace-nowrap">Original Characters</span>
                  </span>
                  <div className="relative mt-1 flex items-center justify-center">
                    <span
                      className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full zan-anim"
                      style={{
                        background: 'radial-gradient(circle, rgba(199,164,81,0.65) 0%, rgba(199,164,81,0) 70%)',
                        animation: 'zan-pulse-gold 2.4s ease-in-out infinite',
                      }}
                    />
                    <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#C7A451] border-2 border-white shadow-sm" />
                  </div>
                </button>
              </div>

              {/* Destination 2 — Five Magical Realms Hub & Distinct Interactive Realm Markers */}
              {/* Sanctuary Master Badge */}
              <div
                className="absolute"
                style={{ left: '60%', top: '9%', transform: 'translate(-50%, -50%)', zIndex: 22 }}
              >
                <button
                  onClick={() => setActiveZone(activeZone === 'realms' ? null : 'realms')}
                  className={`group relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-full text-[10.5px] sm:text-xs font-bold shadow-lg backdrop-blur-md transition-all duration-200 border ${
                    activeZone === 'realms'
                      ? 'bg-[#0284C7] text-white border-white ring-2 ring-[#38BDF8] shadow-md scale-105'
                      : 'bg-white/95 text-[#17243B] border-[#7DD3FC]/70 hover:bg-[#F0F9FF] hover:border-[#38BDF8] hover:scale-105'
                  }`}
                  aria-pressed={activeZone === 'realms'}
                  aria-label="Discover Five Interconnected Realms"
                >
                  <span className="text-xs sm:text-sm">🏔️</span>
                  <span className="whitespace-nowrap">Five Magical Realms</span>
                </button>
              </div>

              {/* 5 Distinct Realm Beacons across the fantasy sanctuary */}
              {[
                { id: 'terra-viva', name: 'Terra Viva', icon: '🌿', color: '#16A34A', pulse: 'zan-pulse-green', left: '42%', top: '38%', delay: '0s' },
                { id: 'mechanika', name: 'Mechanika', icon: '⚙️', color: '#D97706', pulse: 'zan-pulse-amber', left: '52%', top: '24%', delay: '0.4s' },
                { id: 'cosmara', name: 'Cosmara', icon: '🌌', color: '#0284C7', pulse: 'zan-pulse-blue', left: '60%', top: '22%', delay: '0.8s' },
                { id: 'mythara', name: 'Mythara', icon: '📜', color: '#7C3AED', pulse: 'zan-pulse-purple', left: '68%', top: '27%', delay: '1.2s' },
                { id: 'sonika', name: 'Sonika', icon: '🎵', color: '#E11D48', pulse: 'zan-pulse-coral', left: '76%', top: '35%', delay: '1.6s' },
              ].map(realm => {
                const isSelected = activeZone === 'realms' && selectedRealmTab === realm.id;
                return (
                  <div
                    key={realm.id}
                    className="absolute"
                    style={{ left: realm.left, top: realm.top, transform: 'translate(-50%, -50%)', zIndex: 21 }}
                  >
                    <button
                      onClick={() => {
                        setSelectedRealmTab(realm.id);
                        setActiveZone('realms');
                      }}
                      className={`group relative flex flex-col items-center focus:outline-none focus-visible:ring-4 rounded-full p-0.5 sm:p-1 transition-all duration-300 ${
                        isSelected ? 'scale-110 z-30' : 'hover:scale-110'
                      }`}
                      style={{ outlineColor: realm.color }}
                      aria-label={`Explore Realm: ${realm.name}`}
                    >
                      {/* Name Badge with Realm Visual Marker */}
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold shadow-md backdrop-blur-md transition-all duration-200 border ${
                          isSelected
                            ? 'text-white border-white ring-2 ring-white/80 shadow-lg'
                            : 'bg-white/95 text-[#17243B] group-hover:bg-white border-black/10'
                        }`}
                        style={{
                          background: isSelected ? realm.color : undefined,
                          borderColor: isSelected ? '#ffffff' : `${realm.color}60`,
                        }}
                      >
                        <span className="text-[10px] sm:text-xs">{realm.icon}</span>
                        <span className="whitespace-nowrap hidden xs:inline sm:inline">{realm.name}</span>
                      </span>

                      {/* Colored Pulsing Beacon */}
                      <div className="relative mt-0.5 sm:mt-1 flex items-center justify-center">
                        <span
                          className="absolute w-6 h-6 sm:w-7 sm:h-7 rounded-full zan-anim"
                          style={{
                            background: `radial-gradient(circle, ${realm.color}66 0%, ${realm.color}00 70%)`,
                            animation: `${realm.pulse} 2.4s ease-in-out infinite ${realm.delay}`,
                          }}
                        />
                        <span
                          className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white shadow-sm transition-transform duration-200 group-hover:scale-125"
                          style={{ background: realm.color }}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* Destination 3 — Grand Storybook Library (Right) */}
              <div
                className="absolute"
                style={{ left: '88%', top: '38%', transform: 'translate(-50%, -50%)', zIndex: 20 }}
              >
                <button
                  onClick={() => setActiveZone(activeZone === 'franchise' ? null : 'franchise')}
                  className={`group relative flex flex-col items-center focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F87171] rounded-2xl p-1 transition-all duration-300 ${
                    activeZone === 'franchise' ? 'scale-105' : 'hover:scale-105'
                  }`}
                  aria-pressed={activeZone === 'franchise'}
                  aria-label="Discover Storybook Library Destination"
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-md transition-all duration-200 border ${
                      activeZone === 'franchise'
                        ? 'bg-[#FEE2E2] border-[#F87171] text-[#17243B] ring-2 ring-[#EF4444]'
                        : 'bg-[#FFF9F8]/95 border-[#FCA5A5]/60 text-[#17243B] group-hover:bg-[#FEF2F2] group-hover:border-[#F87171]'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">📖</span>
                    <span className="whitespace-nowrap">Storybook Library</span>
                  </span>
                  <div className="relative mt-1 flex items-center justify-center">
                    <span
                      className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full zan-anim"
                      style={{
                        background: 'radial-gradient(circle, rgba(208,92,66,0.65) 0%, rgba(208,92,66,0) 70%)',
                        animation: 'zan-pulse-coral 2.4s ease-in-out infinite 1.6s',
                      }}
                    />
                    <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#DC2626] border-2 border-white shadow-sm" />
                  </div>
                </button>
              </div>

              {/* ── CHIKU THE ADVENTURE PUPPY (HERO GUIDE) ── */}
              <div
                className="absolute pointer-events-auto cursor-pointer group"
                style={{
                  left: '49%',
                  bottom: '1.5%',
                  transform: 'translateX(-50%)',
                  width: 'clamp(115px, 15vw, 175px)',
                  zIndex: 25,
                }}
                onClick={() => setClueRevealed(prev => !prev)}
                role="button"
                tabIndex={0}
                aria-label="Chiku the Adventure Puppy — tap to discover clue"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setClueRevealed(prev => !prev);
                  }
                }}
              >
                {/* Polished Storybook Speech Bubble with Downward Pointer Tail */}
                <div className="absolute -top-10 sm:-top-11 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-[#17243B] text-[11px] sm:text-[12px] font-bold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-2xl shadow-xl border-2 border-[#C7A451]/45 flex items-center gap-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#C7A451] group-hover:shadow-2xl">
                  <span className="text-[#C7A451] text-xs">🐾</span>
                  <span>{clueRevealed ? "Key found! Tap to hide" : "Hi! I'm Chiku — follow me!"}</span>
                  {/* Downward triangle pointer tail */}
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '7px solid #C7A451',
                    }}
                  />
                  <div
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '6px solid white',
                    }}
                  />
                </div>

                {/* Chiku character illustration */}
                <img
                  src="/chiku-guide.png"
                  alt="Chiku the friendly puppy guide of Zanarra"
                  className="w-full h-auto drop-shadow-[0_12px_24px_rgba(23,36,59,0.35)] transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 zan-anim"
                  style={{ animation: 'zan-bob 3.2s ease-in-out infinite' }}
                />
              </div>

            </div>
          </div>

          {/* ── EXPANDING DESTINATION DISCOVERY PANELS ── */}
          <div
            style={{
              maxHeight: activeZone ? '700px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* 1. ORIGINAL CHARACTERS PANEL */}
            {activeZone === 'characters' && (
              <div
                className="mt-5 rounded-2xl p-5 sm:p-7 border transition-all shadow-md"
                style={{ background: 'linear-gradient(135deg, #FFFDF8 0%, #FEF9EC 100%)', borderColor: 'rgba(199,164,81,0.35)' }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C7A451]">Pillar I · Character First</span>
                      <span className="w-8 h-px bg-[#C7A451]/40" />
                    </div>
                    <h3 className="font-serif font-bold text-[#17243B] text-xl sm:text-2xl" style={{ fontFamily: "'DM Serif Display',Georgia,serif" }}>
                      Meet the Original Characters
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-[#2C3E5A] leading-relaxed max-w-2xl mt-1">
                      Characters built from scratch to feel like real friends — each with their own personality, unique way of thinking, emotional vulnerability, and boundless sense of wonder.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveZone(null)}
                    className="shrink-0 w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#EBDCC8] flex items-center justify-center text-[#17243B] hover:bg-[#F0E8D5] transition-colors text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#C7A451]"
                    aria-label="Close Characters Panel"
                  >
                    ✕
                  </button>
                </div>

                {/* Character Interactive Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
                  {[
                    {
                      char: CHARACTERS.find(c => c.id === 'momo'),
                      icon: '🦁',
                      tag: 'Age 7 · Adventurer',
                      quote: 'Courage & Friendship',
                      bg: '#FFF5F2',
                      border: '#F2A18B',
                      desc: 'Always first into adventure, bringing friends along for every unexpected turn.'
                    },
                    {
                      char: CHARACTERS.find(c => c.id === 'tobo'),
                      icon: '👓',
                      tag: 'Age 6 · Inventor',
                      quote: 'Creativity & STEM',
                      bg: '#FBF7EE',
                      border: '#C7A451',
                      desc: 'Backpack full of gadgets, turning accidental mistakes into wondrous inventions.'
                    },
                    {
                      char: CHARACTERS.find(c => c.id === 'dodi'),
                      icon: '🔍',
                      tag: 'Age 4 · Curious Mind',
                      quote: 'Observation & Empathy',
                      bg: '#F3F9FD',
                      border: '#5D9CEC',
                      desc: 'Asks "par kyun?" and spots the quietest clues that change everything.'
                    },
                    {
                      char: null,
                      name: 'Chiku',
                      icon: '🐾',
                      tag: 'Companion · Guide',
                      quote: 'Loyalty & Discovery',
                      bg: '#FEF3C7',
                      border: '#F59E0B',
                      desc: 'The adventure puppy who spots every glowing secret door along the trail.'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border flex flex-col justify-between transition-transform hover:-translate-y-0.5 shadow-xs"
                      style={{ background: item.bg, borderColor: `${item.border}50` }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/80 text-[#17243B] border border-black/5">
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="font-bold text-[#17243B] text-[15px]">{item.char ? item.char.name : item.name}</h4>
                        <p className="text-[10.5px] font-semibold text-[#64748B] mb-1.5">{item.quote}</p>
                        <p className="text-[12px] text-[#334155] leading-snug">{item.desc}</p>
                      </div>

                      {item.char ? (
                        <button
                          onClick={() => setSelectedCharacterForModal(item.char!)}
                          className="mt-3 text-[11px] font-bold text-[#17243B] hover:text-[#C7A451] flex items-center gap-1 transition-colors"
                        >
                          <span>Explore Story</span>
                          <span>→</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => setClueRevealed(prev => !prev)}
                          className="mt-3 text-[11px] font-bold text-[#17243B] hover:text-[#C7A451] flex items-center gap-1 transition-colors"
                        >
                          <span>{clueRevealed ? "Hide Secret" : "Find Secret"}</span>
                          <span>🐾</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#C7A451]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[12px] text-[#64748B]">
                    Built with genuine emotional gravity and memorable silhouettes that children recognize for life.
                  </p>
                  <Link
                    to="/characters"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17243B] hover:text-[#C7A451] transition-colors shrink-0"
                  >
                    <span>View All Characters Directory</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )}

            {/* 2. FIVE INTERCONNECTED REALMS PANEL */}
            {activeZone === 'realms' && (() => {
              const currentRealm = REALMS.find(r => r.id === selectedRealmTab) || REALMS[0];
              const realmIcons: Record<string, string> = {
                'terra-viva': '🌿',
                'mechanika': '⚙️',
                'mythara': '📜',
                'sonika': '🎵',
                'cosmara': '🌌'
              };

              return (
                <div
                  className="mt-5 rounded-2xl p-5 sm:p-7 border transition-all shadow-md"
                  style={{ background: 'linear-gradient(135deg, #F4FAFF 0%, #EBF5FF 100%)', borderColor: 'rgba(56,189,248,0.35)' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0284C7]">Pillar II · Connected Storyworlds</span>
                        <span className="w-8 h-px bg-[#0284C7]/40" />
                      </div>
                      <h3 className="font-serif font-bold text-[#17243B] text-xl sm:text-2xl" style={{ fontFamily: "'DM Serif Display',Georgia,serif" }}>
                        The Five Interconnected Realms
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] text-[#2C3E5A] leading-relaxed max-w-2xl mt-1">
                        Five extraordinary environments where nature, inventions, ancient folklore, melodies, and astrophysics meet — all connected by the glowing discovery path.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveZone(null)}
                      className="shrink-0 w-8 h-8 rounded-full bg-[#EBF5FF] border border-[#BAE6FD] flex items-center justify-center text-[#17243B] hover:bg-[#D0EAFB] transition-colors text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                      aria-label="Close Realms Panel"
                    >
                      ✕
                    </button>
                  </div>

                  {/* 5 Realm Selection Tabs */}
                  <div className="flex flex-wrap gap-2 my-3">
                    {REALMS.map((realm) => {
                      const isSelected = realm.id === currentRealm.id;
                      return (
                        <button
                          key={realm.id}
                          onClick={() => setSelectedRealmTab(realm.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                            isSelected
                              ? 'bg-white text-[#17243B] shadow-sm border-2 ring-1'
                              : 'bg-white/60 text-[#334155] border-transparent hover:bg-white/90'
                          }`}
                          style={{
                            borderColor: isSelected ? realm.accentColor : 'transparent',
                            outlineColor: realm.accentColor
                          }}
                        >
                          <span>{realmIcons[realm.id] || '✨'}</span>
                          <span>{realm.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Realm Spotlight Card */}
                  <div
                    className="p-4 sm:p-5 rounded-xl border mt-3 transition-all"
                    style={{ background: currentRealm.bgLight, borderColor: `${currentRealm.accentColor}40` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: currentRealm.accentColor }}>
                          Realm {currentRealm.number} · {currentRealm.theme}
                        </span>
                        <h4 className="font-serif font-bold text-[#17243B] text-lg sm:text-xl">
                          {currentRealm.name}
                        </h4>
                      </div>
                      <span className="text-[12px] italic font-medium px-3 py-1 rounded-full bg-white/80 border border-black/5 text-[#334155] w-fit">
                        "{currentRealm.storyPromise}"
                      </span>
                    </div>

                    <p className="text-[13px] text-[#2C3E5A] leading-relaxed mb-3">
                      {currentRealm.landscape}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-black/5">
                      <div className="flex flex-wrap gap-1.5">
                        {currentRealm.coreThemes.map(theme => (
                          <span
                            key={theme}
                            className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#17243B] border border-black/5"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedRealmForModal(currentRealm)}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white transition-all hover:shadow-md shrink-0 active:scale-95"
                        style={{ background: currentRealm.accentColor }}
                      >
                        <span>Explore {currentRealm.name} Details</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* 3. GRAND STORYBOOK LIBRARY PANEL */}
            {activeZone === 'franchise' && (
              <div
                className="mt-5 rounded-2xl p-5 sm:p-7 border transition-all shadow-md"
                style={{ background: 'linear-gradient(135deg, #FFF8F6 0%, #FEF0ED 100%)', borderColor: 'rgba(208,92,66,0.35)' }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D05C42]">Pillar III · Story Ecosystem</span>
                      <span className="w-8 h-px bg-[#D05C42]/40" />
                    </div>
                    <h3 className="font-serif font-bold text-[#17243B] text-xl sm:text-2xl" style={{ fontFamily: "'DM Serif Display',Georgia,serif" }}>
                      The Grand Storybook Library
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] text-[#2C3E5A] leading-relaxed max-w-2xl mt-1">
                      A growing universe of stories, picture books, music, and interactive adventures that children can return to as they grow — expanding with the depth of a generational franchise.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveZone(null)}
                    className="shrink-0 w-8 h-8 rounded-full bg-[#FEF0ED] border border-[#FECACA] flex items-center justify-center text-[#17243B] hover:bg-[#FDDDD6] transition-colors text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#D05C42]"
                    aria-label="Close Library Panel"
                  >
                    ✕
                  </button>
                </div>

                {/* 5 Franchise Story Formats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-3">
                  {[
                    { icon: '📚', label: 'Picture Books', desc: 'Bedtime adventures & illustrated anthologies.' },
                    { icon: '🧸', label: 'Companions', desc: 'Tactile plush toys children can hold and play with.' },
                    { icon: '🎵', label: 'Music & Songs', desc: 'Emotionally rich melodies and playful anthems.' },
                    { icon: '📺', label: 'Episodic Series', desc: 'Animated series solving team mysteries.' },
                    { icon: '🎮', label: 'Interactive Apps', desc: 'Safe digital world exploration environments.' },
                  ].map((format, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/80 border border-[#D05C42]/20 flex flex-col justify-between shadow-xs"
                    >
                      <div>
                        <span className="text-2xl block mb-1">{format.icon}</span>
                        <h4 className="font-bold text-[#17243B] text-xs sm:text-[13px]">{format.label}</h4>
                        <p className="text-[11px] text-[#64748B] mt-1 leading-snug">{format.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#D05C42]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[12px] text-[#64748B]">
                    Engineered as a perpetual intellectual property platform with books, music, collectibles, and global streaming.
                  </p>
                  <Link
                    to="/universe"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17243B] hover:text-[#D05C42] transition-colors shrink-0"
                  >
                    <span>Explore Universe Stories Catalog</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── CHIKU CLUE DISCOVERY STRIP ── */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border p-4 sm:p-5 transition-all duration-500 shadow-sm ${
              clueRevealed
                ? 'border-[#C7A451] bg-gradient-to-r from-[#FFFDF5] via-[#FEF3C7]/40 to-[#FFFDF5] shadow-md ring-2 ring-[#C7A451]/30'
                : 'border-[#C7A451]/30 bg-gradient-to-r from-white via-[#FAF4E6]/80 to-white'
            }`}
          >
            <div className="flex items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center overflow-hidden shadow-sm shrink-0 border border-[#C7A451]/40 bg-[#FEF3C7]">
                <img src="/chiku-guide.png" alt="Chiku avatar" className="w-11 h-11 object-contain -mt-1 scale-125" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <strong className="text-[13px] sm:text-[14px] font-bold text-[#17243B]">
                    {clueRevealed ? "🗝️ Golden Key Discovered!" : "🐾 Chiku's Secret Clue"}
                  </strong>
                  {clueRevealed ? (
                    <span className="text-[10px] font-bold text-[#C7A451] uppercase tracking-wider bg-[#FEF3C7] border border-[#C7A451]/40 px-2 py-0.5 rounded-full animate-pulse">
                      ✨ Secret Unlocked!
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider bg-white/80 border border-black/5 px-2 py-0.5 rounded-full">
                      Tap to explore
                    </span>
                  )}
                </div>
                <p className="text-[12px] sm:text-[13px] text-[#334155] mt-0.5 leading-relaxed">
                  {clueRevealed
                    ? '✨ "Woof! Chiku found the magic key behind the waterfall! It unlocks the secret door to the Five Realms."'
                    : '🐾 Golden paw prints lead to the magic realms! Tap to see what Chiku found.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setClueRevealed(r => !r)}
              className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-[12.5px] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#C7A451]/40"
              style={{ background: 'linear-gradient(135deg, #C7A451 0%, #E8C56A 100%)' }}
            >
              <span>{clueRevealed ? 'Hide Clue' : 'Discover Clue ✨'}</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d={clueRevealed ? 'M5 12h14' : 'M5 12h14M12 5l7 7-7 7'} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(250,247,240,0.7))' }} />
      </section>



      {/* SECTION 3: THE ORIGINAL TRIO — DELIGHTFUL CHARACTER SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8]/80 shadow-xs mb-3">
              <span className="text-[#C7A451] text-xs">✨</span>
              <span className="text-[11px] font-bold text-[#17243B] uppercase tracking-[0.16em]">
                The Original Trio
              </span>
            </div>
            <h2
              className="font-serif font-bold text-[#17233A] tracking-tight leading-[1.1]"
              style={{
                fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              }}
            >
              Meet Momo, Tobo, and Dodi
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#2C3E5A] mt-2.5 leading-relaxed">
              Three friends. Three completely different ways of seeing the world. When courage, invention, and questions combine, anything is possible.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/characters"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#17233A] hover:bg-[#25395E] text-[13px] font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discover All Three</span>
              <ArrowRight className="w-4 h-4 text-[#C7A451] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── THREE LARGE CHARACTER FEATURE PANELS: MOMO, TOBO, DODI ── */}
        {(() => {
          const momo = CHARACTERS.find(c => c.id === 'momo') || CHARACTERS[0];
          const tobo = CHARACTERS.find(c => c.id === 'tobo') || CHARACTERS[1];
          const dodi = CHARACTERS.find(c => c.id === 'dodi') || CHARACTERS[2];

          return (
            <div className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
                
                {/* ═════════════════════════════════════════════════
                    PANEL 1: MOMO — THE LEADER (Age 7)
                    ═════════════════════════════════════════════════ */}
                <div
                  className="group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(180deg, #FFF8F4 0%, #FFF2EB 50%, #FFEBE0 100%)',
                    borderColor: 'rgba(226, 109, 92, 0.4)',
                    boxShadow: '0 12px 36px rgba(226, 109, 92, 0.12)',
                  }}
                >
                  {/* TOP: FULL-BLEED ULTRA-HD CINEMATIC ARTWORK STAGE */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#FFEFE8]">
                    <img
                      src="/momo-solo-hd.png"
                      alt="Momo — The Leader"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Seamless Gradient Fade to Card Background */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, rgba(255,248,244,0.7) 80%, #FFF8F4 100%)',
                      }}
                    />

                    {/* Floating Age & Title Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E26D5C]/35 shadow-md text-[11px] font-bold text-[#9C3A24]">
                      <span>Age 7</span>
                      <span>·</span>
                      <span>The Leader</span>
                    </div>

                    {/* Floating Compass Rose */}
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-[#C7A451]/40 shadow-md flex items-center justify-center text-sm text-[#C7A451] transition-transform duration-700 group-hover:rotate-45">
                      🧭
                    </div>

                    {/* Subtle Trail Tag */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#17233A]/85 backdrop-blur-md text-[10.5px] font-bold text-white shadow-sm">
                      <span>🚩</span>
                      <span>Trail Blazer</span>
                    </div>
                  </div>

                  {/* BOTTOM: STORYTELLING, DESCRIPTION & CORE APPEAL */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#FFF8F4]">
                    <div className="space-y-3">
                      {/* Name & Tagline */}
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <h3
                            className="font-serif font-bold text-[#17233A] tracking-tight leading-none"
                            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem' }}
                          >
                            Momo
                          </h3>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#E26D5C]">
                            The Leader
                          </span>
                        </div>
                        {/* Personality */}
                        <p className="text-[12px] font-semibold text-[#9C3A24] mt-1.5 leading-snug">
                          Warm, brave, enthusiastic and gloriously overconfident.
                        </p>
                      </div>

                      {/* Character Description */}
                      <p className="text-[13px] text-[#2C3E5A] leading-relaxed">
                        Momo is always the first to jump into an adventure and usually the first to discover that the plan was not quite as brilliant as it sounded. He never gives up, never stops trying and brings his friends along for every unexpected turn.
                      </p>

                      {/* Core Appeal */}
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9C3A24] block mb-1">
                          Core Appeal
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Confidence', 'Friendship', 'Courage', 'Resilience'].map(item => (
                            <span
                              key={item}
                              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#17233A] border border-[#E26D5C]/30 shadow-2xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Adventure Secret */}
                      <div className="pt-2">
                        <button
                          onClick={() => setActiveCharacterSecret(activeCharacterSecret === 'momo' ? null : 'momo')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white/95 hover:bg-white border border-[#E26D5C]/35 text-[12px] font-bold text-[#9C3A24] transition-all flex items-center justify-between shadow-2xs group-hover:border-[#E26D5C]"
                          aria-expanded={activeCharacterSecret === 'momo'}
                        >
                          <span className="flex items-center gap-1.5">
                            <span>🧭</span>
                            <span>{activeCharacterSecret === 'momo' ? 'Hide Adventure Clue' : 'Discover Adventure Clue'}</span>
                          </span>
                          <span className="text-xs">{activeCharacterSecret === 'momo' ? '▲' : '▼'}</span>
                        </button>

                        {activeCharacterSecret === 'momo' && (
                          <div className="mt-2.5 p-3 rounded-xl bg-white border border-[#E26D5C]/40 text-[12px] text-[#2C3E5A] leading-relaxed shadow-xs animate-fadeIn">
                            🌟 <strong>Secret Trail:</strong> Behind the Whispering Falls of Terra Viva lies a hidden cedar raft. Momo carved the map on the back of his coral scarf so friends never get left behind!
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Individual Character Detail Action */}
                    <div className="mt-5 pt-4 border-t border-[#E26D5C]/25 flex items-center justify-between gap-3">
                      <Link
                        to="/characters#momo"
                        className="text-[12px] font-bold text-[#9C3A24] hover:text-[#E26D5C] transition-colors"
                      >
                        Character Page →
                      </Link>
                      <button
                        onClick={() => setSelectedCharacterForModal(momo)}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-[#E26D5C]/40"
                        style={{ background: 'linear-gradient(135deg, #E26D5C 0%, #F2A18B 100%)' }}
                      >
                        <span>Meet Momo</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>


                {/* ═════════════════════════════════════════════════
                    PANEL 2: TOBO — THE CLUMSY GENIUS (Age 6)
                    ═════════════════════════════════════════════════ */}
                <div
                  className="group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(180deg, #FFFDF8 0%, #FAF5E8 50%, #F6ECDA 100%)',
                    borderColor: 'rgba(199, 164, 81, 0.4)',
                    boxShadow: '0 12px 36px rgba(199, 164, 81, 0.12)',
                  }}
                >
                  {/* TOP: FULL-BLEED ULTRA-HD CINEMATIC ARTWORK STAGE */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#FFF9EE]">
                    <img
                      src="/tobo-solo-hd.png"
                      alt="Tobo — The Clumsy Genius"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Seamless Gradient Fade to Card Background */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, rgba(255,253,248,0.7) 80%, #FFFDF8 100%)',
                      }}
                    />

                    {/* Floating Age & Title Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#C7A451]/35 shadow-md text-[11px] font-bold text-[#855D08]">
                      <span>Age 6</span>
                      <span>·</span>
                      <span>The Clumsy Genius</span>
                    </div>

                    {/* Floating Lightbulb */}
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-[#C7A451]/40 shadow-md flex items-center justify-center text-sm text-[#C7A451] transition-transform duration-700 group-hover:rotate-90">
                      💡
                    </div>

                    {/* Subtle Tinkerer Tag */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#17233A]/85 backdrop-blur-md text-[10.5px] font-bold text-white shadow-sm">
                      <span>⚙️</span>
                      <span>Master Tinkerer</span>
                    </div>
                  </div>

                  {/* BOTTOM: STORYTELLING, DESCRIPTION & CORE APPEAL */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#FFFDF8]">
                    <div className="space-y-3">
                      {/* Name & Tagline */}
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <h3
                            className="font-serif font-bold text-[#17233A] tracking-tight leading-none"
                            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem' }}
                          >
                            Tobo
                          </h3>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                            The Clumsy Genius
                          </span>
                        </div>
                        {/* Personality */}
                        <p className="text-[12px] font-semibold text-[#855D08] mt-1.5 leading-snug">
                          Brilliant, fast-talking, inventive and magnificently clumsy.
                        </p>
                      </div>

                      {/* Character Description */}
                      <p className="text-[13px] text-[#2C3E5A] leading-relaxed">
                        With round glasses sliding down his nose and an oversized backpack full of inventions, Tobo believes he can explain almost anything. His inventions don't always cooperate, but his curiosity rarely lets him down.
                      </p>

                      {/* Core Appeal */}
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#855D08] block mb-1">
                          Core Appeal
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Creativity', 'Experimentation', 'Problem-solving', 'Humour'].map(item => (
                            <span
                              key={item}
                              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#17233A] border border-[#C7A451]/30 shadow-2xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Invention Secret */}
                      <div className="pt-2">
                        <button
                          onClick={() => setActiveCharacterSecret(activeCharacterSecret === 'tobo' ? null : 'tobo')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white/95 hover:bg-white border border-[#C7A451]/35 text-[12px] font-bold text-[#855D08] transition-all flex items-center justify-between shadow-2xs group-hover:border-[#C7A451]"
                          aria-expanded={activeCharacterSecret === 'tobo'}
                        >
                          <span className="flex items-center gap-1.5">
                            <span>⚙️</span>
                            <span>{activeCharacterSecret === 'tobo' ? 'Hide Tiny Invention' : 'Explore Tiny Invention'}</span>
                          </span>
                          <span className="text-xs">{activeCharacterSecret === 'tobo' ? '▲' : '▼'}</span>
                        </button>

                        {activeCharacterSecret === 'tobo' && (
                          <div className="mt-2.5 p-3 rounded-xl bg-white border border-[#C7A451]/40 text-[12px] text-[#2C3E5A] leading-relaxed shadow-xs animate-fadeIn">
                            💡 <strong>The Cloud-Catcher Net:</strong> Tobo built a pneumatic gadget to scoop wandering morning mist into lemonade bottles. It accidentally floats in the air whenever you whistle!
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Individual Character Detail Action */}
                    <div className="mt-5 pt-4 border-t border-[#C7A451]/25 flex items-center justify-between gap-3">
                      <Link
                        to="/characters#tobo"
                        className="text-[12px] font-bold text-[#855D08] hover:text-[#C7A451] transition-colors"
                      >
                        Character Page →
                      </Link>
                      <button
                        onClick={() => setSelectedCharacterForModal(tobo)}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-[#C7A451]/40"
                        style={{ background: 'linear-gradient(135deg, #B45309 0%, #D97706 100%)' }}
                      >
                        <span>Meet Tobo</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>


                {/* ═════════════════════════════════════════════════
                    PANEL 3: DODI — THE TINY SPARK (Age 4)
                    ═════════════════════════════════════════════════ */}
                <div
                  className="group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(180deg, #F0F8FF 0%, #E8F3FE 50%, #DDEEFE 100%)',
                    borderColor: 'rgba(56, 189, 248, 0.4)',
                    boxShadow: '0 12px 36px rgba(56, 189, 248, 0.12)',
                  }}
                >
                  {/* TOP: FULL-BLEED ULTRA-HD CINEMATIC ARTWORK STAGE */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#EBF5FE]">
                    <img
                      src="/dodi-solo-hd.png"
                      alt="Dodi — The Tiny Spark"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Seamless Gradient Fade to Card Background */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, rgba(240,248,255,0.7) 80%, #F0F8FF 100%)',
                      }}
                    />

                    {/* Floating Age & Title Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#38BDF8]/35 shadow-md text-[11px] font-bold text-[#0369A1]">
                      <span>Age 4</span>
                      <span>·</span>
                      <span>The Tiny Spark</span>
                    </div>

                    {/* Floating Companion Paw */}
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-[#38BDF8]/40 shadow-md flex items-center justify-center text-sm text-[#0284C7] transition-transform duration-700 group-hover:scale-110">
                      🐾
                    </div>

                    {/* Subtle Wonder Tag */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#17233A]/85 backdrop-blur-md text-[10.5px] font-bold text-white shadow-sm">
                      <span>🔍</span>
                      <span>Wonder Seeker</span>
                    </div>
                  </div>

                  {/* BOTTOM: STORYTELLING, DESCRIPTION & CORE APPEAL */}
                  <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#F0F8FF]">
                    <div className="space-y-3">
                      {/* Name & Tagline */}
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <h3
                            className="font-serif font-bold text-[#17233A] tracking-tight leading-none"
                            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem' }}
                          >
                            Dodi
                          </h3>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                            The Tiny Spark
                          </span>
                        </div>
                        {/* Personality */}
                        <p className="text-[12px] font-semibold text-[#0369A1] mt-1.5 leading-snug">
                          Curious, fearless and always asking "par kyun?"
                        </p>
                      </div>

                      {/* Character Description */}
                      <p className="text-[13px] text-[#2C3E5A] leading-relaxed">
                        Dodi sees what everyone else misses and asks the questions nobody thought to ask. Not the biggest or the bravest, Dodi often discovers the answer that changes everything.
                      </p>

                      {/* Core Appeal */}
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0369A1] block mb-1">
                          Core Appeal
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Curiosity', 'Observation', 'Empathy', 'Power of Asking Why'].map(item => (
                            <span
                              key={item}
                              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#17233A] border border-[#38BDF8]/30 shadow-2xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Curious Question */}
                      <div className="pt-2">
                        <button
                          onClick={() => setActiveCharacterSecret(activeCharacterSecret === 'dodi' ? null : 'dodi')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl bg-white/95 hover:bg-white border border-[#38BDF8]/35 text-[12px] font-bold text-[#0369A1] transition-all flex items-center justify-between shadow-2xs group-hover:border-[#38BDF8]"
                          aria-expanded={activeCharacterSecret === 'dodi'}
                        >
                          <span className="flex items-center gap-1.5">
                            <span>🔍</span>
                            <span>{activeCharacterSecret === 'dodi' ? 'Hide Curious Question' : 'Reveal Curious Question'}</span>
                          </span>
                          <span className="text-xs">{activeCharacterSecret === 'dodi' ? '▲' : '▼'}</span>
                        </button>

                        {activeCharacterSecret === 'dodi' && (
                          <div className="mt-2.5 p-3 rounded-xl bg-white border border-[#38BDF8]/40 text-[12px] text-[#2C3E5A] leading-relaxed shadow-xs animate-fadeIn">
                            ❓ <strong>Dodi's Wonder:</strong> “If the stars hum lullabies at night, do the sleeping mountains dream of flying?” (And when she whispered this near the singing stones of Sonika, they glowed soft cyan in agreement!)
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Individual Character Detail Action */}
                    <div className="mt-5 pt-4 border-t border-[#38BDF8]/25 flex items-center justify-between gap-3">
                      <Link
                        to="/characters#dodi"
                        className="text-[12px] font-bold text-[#0369A1] hover:text-[#0284C7] transition-colors"
                      >
                        Character Page →
                      </Link>
                      <button
                        onClick={() => setSelectedCharacterForModal(dodi)}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 focus:outline-none focus:ring-4 focus:ring-[#38BDF8]/40"
                        style={{ background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)' }}
                      >
                        <span>Meet Dodi</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom CTA Banner matching "CTA: Discover All Three" */}
              <div className="rounded-2xl p-6 sm:p-7 border border-[#C7A451]/30 bg-gradient-to-r from-[#FFFDF8] via-[#FAF4E6] to-[#FFFDF8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#17233A] text-white flex items-center justify-center font-serif text-lg font-bold shrink-0">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#17233A] text-lg">
                      Ready to journey with the Trio?
                    </h4>
                    <p className="text-xs text-[#2C3E5A] mt-0.5">
                      Explore their full stories, voice dialogues, signature gadgets, and interconnected realm quests.
                    </p>
                  </div>
                </div>

                <Link
                  to="/characters"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#17233A] hover:bg-[#25395E] text-white font-bold text-xs tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Discover All Three</span>
                  <ArrowRight className="w-4 h-4 text-[#C7A451]" />
                </Link>
              </div>
            </div>
          );
        })()}
      </section>

      {/* SECTION 4: FIVE MAGICAL REALMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            The Living Multiverse
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17233A]">
            Five realms. Countless adventures.
          </h2>
          <p className="text-sm sm:text-base text-[#17233A]/80 mt-3 leading-relaxed">
            One universe. Five dimensions of human experience. Each world offers a new way to discover, question, build, imagine and explore. Click any realm to enter its lore.
          </p>
        </div>

        {/* 5 Cohesive Illustrated Realm Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REALMS.map((realm, index) => (
            <div
              key={realm.id}
              onClick={() => setSelectedRealmForModal(realm)}
              className={`bg-white rounded-3xl border border-[#C7A451]/25 p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Realm Illustration Tile with hover zoom */}
                <div className="h-44 w-full mb-4 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform shadow-xs">
                  <RealmVisual id={realm.id} className="w-full h-full" />
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A451]">
                    Realm 0{realm.number}
                  </span>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: realm.bgLight, color: realm.textColor }}
                  >
                    {realm.theme}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#17233A] group-hover:text-[#C7A451] transition-colors">
                  {realm.name}
                </h3>

                <p className="text-xs italic font-serif text-amber-900/80 mt-1">
                  "{realm.storyPromise}"
                </p>

                <p className="text-xs text-[#17233A]/75 mt-3 leading-relaxed line-clamp-2">
                  {realm.landscape}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">
                  {realm.adventureTypes[0]}
                </span>
                <span
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF7F0] group-hover:bg-[#17233A] group-hover:text-white text-[#17233A] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <span>Explore Realm</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: MORE THAN ENTERTAINMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] rounded-3xl border border-[#C7A451]/25 p-8 sm:p-14 shadow-sm">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
              Philosophical Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
              Stories children love. Ideas that stay with them.
            </h2>
            <p className="text-sm text-[#17233A]/70 mt-2 leading-relaxed">
              We never position Zanarra as a dry textbook or didactic school lecture. Deep, meaningful inquiry and social-emotional growth emerge naturally from high-stakes storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                01
              </span>
              <h3 className="font-bold text-[#17233A] text-lg">Curiosity</h3>
              <p className="text-xs text-[#17233A]/80 leading-relaxed">
                Stories begin with questions and encourage children to look at the world differently rather than accepting easy conclusions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                02
              </span>
              <h3 className="font-bold text-[#17233A] text-lg">Creativity</h3>
              <p className="text-xs text-[#17233A]/80 leading-relaxed">
                Characters make mistakes, experiment with wild inventions, and discover unforeseen answers through spirited trial and error.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                03
              </span>
              <h3 className="font-bold text-[#17233A] text-lg">Connection</h3>
              <p className="text-xs text-[#17233A]/80 leading-relaxed">
                Friendship, family, emotional vulnerability and genuine teamwork sit at the bedrock of every journey into the realms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-2">
              <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs">
                04
              </span>
              <h3 className="font-bold text-[#17233A] text-lg">Discovery</h3>
              <p className="text-xs text-[#17233A]/80 leading-relaxed">
                Each realm creates natural pathways to explore ecology, mechanics, musicality, ancient lore, and astrophysics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ONE UNIVERSE, MANY EXPERIENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
              Commercial & Creative Extension
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
              A story is only the beginning.
            </h2>
            <p className="text-sm text-[#17233A]/70 mt-1 max-w-xl">
              How Zanarra transforms a single narrative spark into eight complementary consumer and digital experiences.
            </p>
          </div>

          <div className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
            *Development & commercial expansion opportunities
          </div>
        </div>

        {/* 8-Stage Horizontal Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.num}
              className="p-5 rounded-2xl bg-white border border-[#C7A451]/20 hover:border-[#C7A451] transition-all hover:shadow-md"
            >
              <span className="text-xs font-bold text-[#C7A451] block mb-1">
                Phase {exp.num}
              </span>
              <h3 className="font-bold text-[#17233A] text-base mb-2">
                {exp.title}
              </h3>
              <p className="text-xs text-[#17233A]/75 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: BUILT FOR A GLOBAL AUDIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block">
                Global Footprint
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17233A] leading-tight">
                Born in India. Imagined for the world.
              </h2>
              <p className="text-base text-[#17233A]/80 leading-relaxed">
                Zanarra is building original intellectual property with the potential to travel across languages, cultures and generations. Our ambition is to create characters that resonate locally, travel internationally and grow into enduring global franchises.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F0] text-[#C7A451] border border-[#C7A451]/30 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#17233A] block">Original Indian creativity with universal emotional themes:</strong>
                    <span className="text-xs text-[#17233A]/70">Rooted in rich oral storytelling tradition and timeless wonder without geographic boundaries.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F0] text-[#C7A451] border border-[#C7A451]/30 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#17233A] block">Multilingual storytelling and cultural localisation:</strong>
                    <span className="text-xs text-[#17233A]/70">Engineered from day one for seamless adaptation across Hindi, English, Spanish, Japanese, and more.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F0] text-[#C7A451] border border-[#C7A451]/30 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-[#17233A] block">Scalable IP across content, products, partnerships and experiences:</strong>
                    <span className="text-xs text-[#17233A]/70">Built for perpetual transmedia expansion rather than single-season entertainment.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Light, Elegant World Map Graphic */}
            <div className="lg:col-span-6 bg-[#FAF7F0] rounded-2xl p-6 sm:p-8 border border-gray-200/80 text-center relative overflow-hidden">
              <svg viewBox="0 0 600 320" className="w-full h-auto drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* World Map Outlines in soft ivory & sage */}
                <ellipse cx="300" cy="160" rx="280" ry="140" fill="#FAF7F0" stroke="#C7A451" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                {/* Americas */}
                <path d="M120 70 Q140 100 130 160 Q150 200 160 250 Q130 260 110 210 Q90 140 100 80 Z" fill="#E2EFE2" stroke="#B8D4B4" strokeWidth="1.5" />
                {/* Europe & Africa */}
                <path d="M260 60 Q300 70 290 110 Q320 160 300 240 Q260 230 250 170 Q240 110 260 60 Z" fill="#E2EFE2" stroke="#B8D4B4" strokeWidth="1.5" />
                {/* Asia & India */}
                <path d="M330 60 Q440 70 470 120 Q440 180 390 200 Q360 220 340 170 Q320 120 330 60 Z" fill="#E2EFE2" stroke="#B8D4B4" strokeWidth="1.5" />
                {/* India Beacon Highlight */}
                <g transform="translate(370, 150)">
                  <circle cx="0" cy="0" r="14" fill="#C7A451" fillOpacity="0.2" className="animate-ping" />
                  <circle cx="0" cy="0" r="7" fill="#C7A451" />
                  <circle cx="0" cy="0" r="3" fill="#FAF7F0" />
                  <text x="0" y="-12" textAnchor="middle" fill="#17233A" fontSize="10" fontWeight="bold">Born in India</text>
                </g>
                {/* Global Resonance Radii */}
                <path d="M370 150 Q260 90 140 110" stroke="#C7A451" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
                <path d="M370 150 Q310 100 280 80" stroke="#C7A451" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
                <path d="M370 150 Q430 130 460 120" stroke="#C7A451" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
              </svg>
              <p className="text-[11px] text-gray-500 mt-3 italic">
                *Target international distribution and co-publishing roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOR PARTNERS AND INVESTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Institutional Collaboration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
            Help build the next generation of global children's IP.
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-2">
            We are creating an original entertainment universe with opportunities across content, technology, licensing, merchandise, education and live experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: For Strategic Partners */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#C7A451]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451] block mb-1">
                Alliances & Co-Creation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#17233A]">
                For Strategic Partners
              </h3>
              <p className="text-sm text-[#17233A]/80 mt-3 leading-relaxed">
                Explore licensing, distribution, retail merchandise, brand collaborations and curriculum-aligned education partnerships.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-gray-100">
              <Link
                to="/partnerships"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#17233A] text-white font-bold text-xs hover:bg-[#2A3F66] transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-4 h-4 text-[#C7A451]" />
              </Link>
            </div>
          </div>

          {/* Panel 2: For Investors */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F0] border border-[#C7A451]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-800 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451] block mb-1">
                Capital & Scaling
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#17233A]">
                For Investors
              </h3>
              <p className="text-sm text-[#17233A]/80 mt-3 leading-relaxed">
                Learn about our business model, 5-year growth strategy, revenue trajectory, unit economics and long-term vision.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-gray-200">
              <button
                onClick={() => setIsInvestorModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C7A451] text-[#17233A] font-bold text-xs hover:bg-[#b89543] transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Investor Enquiries</span>
                <ArrowRight className="w-4 h-4 text-[#17233A]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#17233A] text-[#FAF7F0] rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl border border-[#C7A451]/30">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C7A451]/10 blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451]">
              The Horizon Awaits
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Every universe starts with a little wonder.
            </h2>
            <p className="text-sm sm:text-base text-[#FAF7F0]/80 leading-relaxed max-w-lg mx-auto">
              Come explore what we're creating at Zanarra — where characters inspire courage, invention, and curiosity.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/universe"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FAF7F0] text-[#17233A] font-bold text-xs hover:bg-[#F2EBDD] transition-colors shadow-sm"
              >
                Explore the Universe
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] border border-white/20 font-bold text-xs transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <InvestorEnquiryModal
        isOpen={isInvestorModalOpen}
        onClose={() => setIsInvestorModalOpen(false)}
      />

      <CharacterModal
        character={selectedCharacterForModal}
        isOpen={!!selectedCharacterForModal}
        onClose={() => setSelectedCharacterForModal(null)}
      />

      <RealmModal
        realm={selectedRealmForModal}
        isOpen={!!selectedRealmForModal}
        onClose={() => setSelectedRealmForModal(null)}
        onSelectCharacter={(charId) => {
          const char = CHARACTERS.find(c => c.id === charId);
          if (char) setSelectedCharacterForModal(char);
        }}
      />
    </div>
  );
};
