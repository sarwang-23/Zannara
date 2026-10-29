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
import {
  WORLD_CONTINENTS_SVG_PATH,
  INDIA_ORIGIN_SVG_PATH,
  GLOBAL_HUBS,
  INDIA_COORDS,
  GlobalHub,
} from '../data/worldMapData';

export const HomePage: React.FC = () => {
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [selectedCharacterForModal, setSelectedCharacterForModal] = useState<Character | null>(null);
  const [selectedRealmForModal, setSelectedRealmForModal] = useState<Realm | null>(null);
  const [selectedGlobalHubId, setSelectedGlobalHubId] = useState<string | null>(null);

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

  // 8 Experiences for Section 6 — Commercial & Creative Extension
  const experiences = [
    {
      num: '01',
      title: 'Short-Form Digital Stories',
      desc: 'Bite-sized episodic narratives introducing characters and wondrous realms.',
      category: 'Core Narrative IP',
      format: 'Bite-Sized Streaming',
      image: '/phase-01-digital-stories.webp',
      imageJpg: '/phase-01-digital-stories.jpg',
      alt: 'Momo and Tobo discovering floating celestial islands — the first chapter of a wondrous digital story',
      objectPosition: 'center 20%'
    },
    {
      num: '02',
      title: 'Original Music & Songs',
      desc: 'Memorable, culturally rich songs fostering emotion, rhythm, and joy.',
      category: 'Sonic Lore & Audio',
      format: 'Soundtracks & Chimes',
      image: '/phase-02-music-songs.webp',
      imageJpg: '/phase-02-music-songs.jpg',
      alt: 'Enchanting golden harp and flute resting in a wildflower meadow with melody stardust',
      objectPosition: 'center center'
    },
    {
      num: '03',
      title: 'Longer Episodic Entertainment',
      desc: 'Richly plotted narrative series exploring deeper lore and team problem-solving.',
      category: 'Flagship Screen Franchise',
      format: 'Multi-Season Series',
      image: '/phase-03-episodic-entertainment.webp',
      imageJpg: '/phase-03-episodic-entertainment.jpg',
      alt: 'Momo, Tobo, Dodi and Chiku — the full ensemble cast of Zanarra\'s multi-season episodic series',
      objectPosition: 'center 15%'
    },
    {
      num: '04',
      title: 'Books & Merchandise',
      desc: 'High-quality picture books, plush companions, and creative activity sets.',
      category: 'Publishing & Consumer Products',
      format: 'Picture Books & Plush',
      image: '/phase-04-books-merchandise.webp',
      imageJpg: '/phase-04-books-merchandise.jpg',
      alt: 'Collector picture book, plush companion, and artist desk overlooking castle',
      objectPosition: 'center top'
    },
    {
      num: '05',
      title: 'Interactive Digital Experiences',
      desc: 'Immersive exploration apps and safe game environments.',
      category: 'Interactive Media & Games',
      format: 'Safe Exploration Apps',
      image: '/world-zanarra-panorama.jpg',
      imageJpg: '/world-zanarra-panorama.jpg',
      alt: 'Magical Zanarra village with glowing pathways, gears, crystals and floating islands — interactive world exploration',
      objectPosition: 'center 40%'
    },
    {
      num: '06',
      title: 'Educational Products',
      desc: 'Inquiry-led learning modules sparking natural scientific and artistic curiosity.',
      category: 'Pedagogy & Curriculum',
      format: 'Inquiry Learning Modules',
      image: '/collab-partners-storybook.webp',
      imageJpg: '/collab-partners-storybook.jpg',
      alt: 'Giant enchanted book-library castle with children walking up a glowing path surrounded by floating books',
      objectPosition: 'center 30%'
    },
    {
      num: '07',
      title: 'Live Events & Experiences',
      desc: 'Theatrical shows, sensory exhibitions, and touring universe installations.',
      category: 'Location-Based Entertainment',
      format: 'Theatrical Stage & Touring',
      image: '/phase-07-live-events.webp',
      imageJpg: '/phase-07-live-events.jpg',
      alt: 'Spectacular family stage production with illuminated glowing realm canopy',
      objectPosition: 'center center'
    },
    {
      num: '08',
      title: 'Licensing & Distribution',
      desc: 'Global co-productions, localized territorial broadcast, and retail distribution.',
      category: 'Global Commercial Syndication',
      format: 'Territorial Broadcast & Retail',
      image: '/phase-08-licensing-distribution.webp',
      imageJpg: '/phase-08-licensing-distribution.jpg',
      alt: 'Celestial astrolabe globe with broadcast streams linking international markets',
      objectPosition: 'center center'
    }
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



      {/* SECTION 3: MEET THE TRIO — EDITORIAL STORYBOOK ROWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Compact header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8]/80 mb-3">
              <span className="text-[#C7A451] text-sm">✨</span>
              <span className="text-[11px] font-bold text-[#17243B] uppercase tracking-[0.18em]">The Original Trio</span>
            </div>
            <h2 className="font-serif font-bold text-[#17233A] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.8vw, 3.25rem)' }}>
              Meet Momo, Tobo, and Dodi
            </h2>
            <p className="text-[15px] text-[#2C3E5A] mt-3 leading-relaxed max-w-xl">
              Three friends. Three completely different ways of seeing the world. When courage, invention, and curiosity combine — anything is possible.
            </p>
          </div>
          <div className="shrink-0">
            <Link to="/characters"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#17233A] hover:bg-[#25395E] text-[13px] font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <span>Discover All Three</span>
              <ArrowRight className="w-4 h-4 text-[#C7A451] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            STORYBOOK ROWS — alternating editorial layout
            NOT three equal cards. Each character gets a full-width
            scene. Image and info sit side by side, never overlapping.
            ══════════════════════════════════════════════════════════ */}
        {(() => {
          const momo = CHARACTERS.find(c => c.id === 'momo') || CHARACTERS[0];
          const tobo = CHARACTERS.find(c => c.id === 'tobo') || CHARACTERS[1];
          const dodi = CHARACTERS.find(c => c.id === 'dodi') || CHARACTERS[2];

          return (
            <div className="space-y-5">

              {/* ══════════════════════════════════════════
                  ROW 1 — MOMO THE ADVENTURER
                  Image LEFT (landscape 680×640 — object-right
                  to show character), info RIGHT
                  bg: warm coral → peach
                  ══════════════════════════════════════════ */}
              <div
                className="group relative overflow-hidden rounded-[1.75rem] flex flex-col md:flex-row"
                style={{
                  background: 'linear-gradient(125deg, #FFF0EA 0%, #FDDECE 60%, #FCCCB0 100%)',
                  boxShadow: '0 16px 48px rgba(226,109,92,0.18), 0 2px 8px rgba(226,109,92,0.10)',
                  border: '1px solid rgba(226,109,92,0.20)',
                  minHeight: '340px',
                }}
              >
                {/* Momo artwork — LEFT, 58% desktop width */}
                {/* 680×640 px image: character is on the right side of the frame */}
                <div className="relative w-full md:w-[58%] overflow-hidden flex-shrink-0"
                  style={{ minHeight: '300px' }}>
                  {/* Warm ambient sky glow behind image */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 80% 70% at 70% 30%, rgba(255,200,150,0.35) 0%, transparent 70%)' }} />
                  <img
                    src="/momo-solo-hd.png"
                    alt="Momo the Adventurer — pointing towards the floating sky islands of Terra Viva"
                    className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'right center', /* Momo is on the RIGHT of this 680×640 image */
                      display: 'block',
                    }}
                    loading="eager"
                    width="680"
                    height="640"
                    decoding="async"
                  />
                  {/* No white wash. Only a very subtle right-edge vignette to blend into info panel */}
                  <div className="absolute inset-y-0 right-0 w-16 pointer-events-none hidden md:block"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(253,222,206,0.55))' }} />
                </div>

                {/* Momo info — RIGHT, fills remaining width */}
                <div className="relative flex flex-col justify-center p-8 md:p-10 md:pl-6 flex-1">
                  {/* Personality badge */}
                  <span className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide mb-4"
                    style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(226,109,92,0.35)', color: '#9C3A24', backdropFilter: 'blur(8px)' }}>
                    🏔️ The Adventurer
                  </span>

                  {/* Name */}
                  <h3 className="font-serif font-bold text-[#17233A] leading-none mb-2"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>
                    Momo
                  </h3>

                  {/* Short hook */}
                  <p className="text-[15px] font-semibold text-[#9C3A24] mb-2 leading-snug">
                    Warm. Brave. Gloriously overconfident.
                  </p>
                  <p className="text-[14px] text-[#3D2218] leading-relaxed mb-6 max-w-xs opacity-85">
                    Every path leads to a new adventure. Momo is already on the way — come along!
                  </p>

                  {/* Primary action */}
                  <div className="space-y-2.5">
                    <button
                      onClick={() => setActiveCharacterSecret(activeCharacterSecret === 'momo' ? null : 'momo')}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                      style={{ background: 'linear-gradient(135deg, #D4533E 0%, #F2855E 100%)' }}
                      aria-expanded={activeCharacterSecret === 'momo'}
                    >
                      🗺️ Join the adventure
                      <span className="text-xs opacity-75 transition-transform duration-200 inline-block"
                        style={{ transform: activeCharacterSecret === 'momo' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                    </button>

                    {activeCharacterSecret === 'momo' && (
                      <div className="p-4 rounded-2xl text-[13px] text-[#3D2218] leading-relaxed max-w-xs"
                        style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(226,109,92,0.25)', backdropFilter: 'blur(8px)' }}>
                        🌟 <strong>Adventure Clue:</strong> Behind the Whispering Falls of Terra Viva lies a hidden cedar raft. Momo carved the map on his coral scarf — so friends are never left behind!
                      </div>
                    )}

                    <div>
                      <Link to="/characters#momo"
                        className="text-[12px] font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
                        style={{ color: '#9C3A24' }}>
                        Read Momo's full story →
                      </Link>
                    </div>
                  </div>

                  {/* Large background character initial — decorative depth */}
                  <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
                    aria-hidden="true"
                    style={{ fontSize: '14rem', lineHeight: 1, color: 'rgba(226,109,92,0.06)', fontFamily: "'DM Serif Display', serif", fontWeight: 700, letterSpacing: '-0.05em' }}>
                    M
                  </div>
                </div>
              </div>


              {/* ══════════════════════════════════════════
                  ROW 2 — TOBO THE INVENTOR
                  Info LEFT, image RIGHT (portrait 520×530
                  — object-center to show face + magnifier)
                  bg: amber → warm honey
                  ══════════════════════════════════════════ */}
              <div
                className="group relative overflow-hidden rounded-[1.75rem] flex flex-col md:flex-row-reverse"
                style={{
                  background: 'linear-gradient(125deg, #FFF8E8 0%, #F9EABD 60%, #F5DDA0 100%)',
                  boxShadow: '0 16px 48px rgba(199,164,81,0.18), 0 2px 8px rgba(199,164,81,0.10)',
                  border: '1px solid rgba(199,164,81,0.22)',
                  minHeight: '340px',
                }}
              >
                {/* Tobo artwork — RIGHT (reversed row), 54% desktop */}
                {/* 520×530 portrait — character is center, magnifying glass bottom-right */}
                <div className="relative w-full md:w-[54%] overflow-hidden flex-shrink-0"
                  style={{ minHeight: '300px' }}>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 80% 70% at 40% 25%, rgba(255,210,100,0.30) 0%, transparent 70%)' }} />
                  {/* Slow-spin gear decoration — behind image */}
                  <div className="absolute top-6 left-6 pointer-events-none z-0" aria-hidden="true">
                    <svg viewBox="0 0 80 80" style={{ width: '80px', height: '80px', opacity: 0.10, animation: 'spin 25s linear infinite' }}>
                      <circle cx="40" cy="40" r="14" fill="none" stroke="#C7A451" strokeWidth="3.5"/>
                      <circle cx="40" cy="40" r="28" fill="none" stroke="#C7A451" strokeWidth="1.5" strokeDasharray="5 4"/>
                      {[0,45,90,135,180,225,270,315].map((a: number) => {
                        const rad = (a * Math.PI) / 180;
                        return <line key={a} x1={40+28*Math.cos(rad)} y1={40+28*Math.sin(rad)} x2={40+37*Math.cos(rad)} y2={40+37*Math.sin(rad)} stroke="#C7A451" strokeWidth="4" strokeLinecap="round"/>;
                      })}
                    </svg>
                  </div>
                  <img
                    src="/tobo-solo-hd.png"
                    alt="Tobo the Inventor — holding his magnifying glass, ready to explain everything"
                    className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 15%', /* Tobo's face is center-top of the 520×530 frame */
                      display: 'block',
                      position: 'relative',
                      zIndex: 1,
                    }}
                    loading="eager"
                    width="520"
                    height="530"
                    decoding="async"
                  />
                  {/* Left-edge vignette to blend into info */}
                  <div className="absolute inset-y-0 left-0 w-16 pointer-events-none hidden md:block"
                    style={{ background: 'linear-gradient(to left, transparent, rgba(249,234,189,0.55))' }} />
                </div>

                {/* Tobo info — LEFT */}
                <div className="relative flex flex-col justify-center p-8 md:p-10 md:pr-6 flex-1">
                  <span className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide mb-4"
                    style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(199,164,81,0.38)', color: '#6B4A06', backdropFilter: 'blur(8px)' }}>
                    ⚙️ The Inventor
                  </span>

                  <h3 className="font-serif font-bold text-[#17233A] leading-none mb-2"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>
                    Tobo
                  </h3>

                  <p className="text-[15px] font-semibold text-[#6B4A06] mb-2 leading-snug">
                    Brilliant. Fast-talking. Magnificently clumsy.
                  </p>
                  <p className="text-[14px] text-[#3A2E08] leading-relaxed mb-6 max-w-xs opacity-85">
                    What can we invent when imagination takes the lead? Tobo always has a theory — and a gadget.
                  </p>

                  <div className="space-y-2.5">
                    <button
                      onClick={() => setActiveCharacterSecret(activeCharacterSecret === 'tobo' ? null : 'tobo')}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                      style={{ background: 'linear-gradient(135deg, #92590A 0%, #D4900F 100%)' }}
                      aria-expanded={activeCharacterSecret === 'tobo'}
                    >
                      🔧 Explore the invention
                      <span className="text-xs opacity-75 inline-block transition-transform duration-200"
                        style={{ transform: activeCharacterSecret === 'tobo' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                    </button>

                    {activeCharacterSecret === 'tobo' && (
                      <div className="p-4 rounded-2xl text-[13px] text-[#3A2E08] leading-relaxed max-w-xs"
                        style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(199,164,81,0.28)', backdropFilter: 'blur(8px)' }}>
                        💡 <strong>The Cloud-Catcher:</strong> Tobo built a pneumatic gadget to scoop wandering morning mist into lemonade bottles. It accidentally floats whenever you whistle!
                      </div>
                    )}

                    <div>
                      <Link to="/characters#tobo"
                        className="text-[12px] font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
                        style={{ color: '#6B4A06' }}>
                        Read Tobo's full story →
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
                    aria-hidden="true"
                    style={{ fontSize: '14rem', lineHeight: 1, color: 'rgba(199,164,81,0.07)', fontFamily: "'DM Serif Display', serif", fontWeight: 700, letterSpacing: '-0.05em' }}>
                    T
                  </div>
                </div>
              </div>


              {/* ══════════════════════════════════════════
                  ROW 3 — DODI THE CURIOUS EXPLORER
                  Image LEFT (portrait 590×580 — object-left
                  to keep Dodi's face visible), info RIGHT
                  bg: sky blue → lavender
                  ══════════════════════════════════════════ */}
              <div
                className="group relative overflow-hidden rounded-[1.75rem] flex flex-col md:flex-row"
                style={{
                  background: 'linear-gradient(125deg, #EEF7FF 0%, #D5EAFF 60%, #C2DDFF 100%)',
                  boxShadow: '0 16px 48px rgba(56,155,220,0.16), 0 2px 8px rgba(56,155,220,0.10)',
                  border: '1px solid rgba(56,189,248,0.22)',
                  minHeight: '340px',
                }}
              >
                {/* Dodi artwork — LEFT, 56% desktop */}
                {/* 590×580 portrait — Dodi's face is left-center, compass stone wall right */}
                <div className="relative w-full md:w-[56%] overflow-hidden flex-shrink-0"
                  style={{ minHeight: '300px' }}>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 80% 70% at 30% 30%, rgba(130,190,255,0.30) 0%, transparent 70%)' }} />
                  {/* Subtle star constellation */}
                  <svg className="absolute top-5 right-10 pointer-events-none z-0" viewBox="0 0 90 80"
                    style={{ width: '90px', height: '80px', opacity: 0.18 }} aria-hidden="true">
                    <circle cx="12" cy="12" r="3" fill="#5D9CEC"/>
                    <circle cx="45" cy="6" r="2" fill="#B9D9F3"/>
                    <circle cx="72" cy="18" r="2.5" fill="#5D9CEC"/>
                    <circle cx="25" cy="45" r="2" fill="#B9D9F3"/>
                    <circle cx="60" cy="50" r="2.5" fill="#5D9CEC"/>
                    <circle cx="80" cy="68" r="2" fill="#B9D9F3"/>
                    <circle cx="5" cy="65" r="2.5" fill="#5D9CEC"/>
                    <line x1="12" y1="12" x2="45" y2="6" stroke="#B9D9F3" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="45" y1="6" x2="72" y2="18" stroke="#B9D9F3" strokeWidth="0.8" opacity="0.6"/>
                    <line x1="25" y1="45" x2="60" y2="50" stroke="#B9D9F3" strokeWidth="0.8" opacity="0.6"/>
                  </svg>
                  <img
                    src="/dodi-solo-hd.png"
                    alt="Dodi the Curious Explorer — wide eyes full of wonder, standing before a stone compass"
                    className="w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{
                      objectFit: 'cover',
                      objectPosition: '30% center', /* Dodi's face is left of center in the 590×580 frame */
                      display: 'block',
                      position: 'relative',
                      zIndex: 1,
                    }}
                    loading="eager"
                    width="590"
                    height="580"
                    decoding="async"
                  />
                  {/* Right-edge vignette to blend into info */}
                  <div className="absolute inset-y-0 right-0 w-16 pointer-events-none hidden md:block"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(197,220,255,0.55))' }} />
                </div>

                {/* Dodi info — RIGHT */}
                <div className="relative flex flex-col justify-center p-8 md:p-10 md:pl-6 flex-1">
                  <span className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide mb-4"
                    style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(56,189,248,0.38)', color: '#04537F', backdropFilter: 'blur(8px)' }}>
                    🔍 The Curious Explorer
                  </span>

                  <h3 className="font-serif font-bold text-[#17233A] leading-none mb-2"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>
                    Dodi
                  </h3>

                  <p className="text-[15px] font-semibold text-[#04537F] mb-2 leading-snug">
                    Curious. Fearless. Always asking why.
                  </p>
                  <p className="text-[14px] text-[#0B2D46] leading-relaxed mb-6 max-w-xs opacity-85">
                    Every little question can lead to a big discovery! Dodi notices what everyone else misses.
                  </p>

                  <div className="space-y-2.5">
                    <button
                      onClick={() => setActiveCharacterSecret(activeCharacterSecret === 'dodi' ? null : 'dodi')}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                      style={{ background: 'linear-gradient(135deg, #035E8F 0%, #0EA5E9 100%)' }}
                      aria-expanded={activeCharacterSecret === 'dodi'}
                    >
                      🔍 Solve the mystery
                      <span className="text-xs opacity-75 inline-block transition-transform duration-200"
                        style={{ transform: activeCharacterSecret === 'dodi' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                    </button>

                    {activeCharacterSecret === 'dodi' && (
                      <div className="p-4 rounded-2xl text-[13px] text-[#0B2D46] leading-relaxed max-w-xs"
                        style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(56,189,248,0.28)', backdropFilter: 'blur(8px)' }}>
                        ❓ <strong>Dodi's Wonder:</strong> "If the stars hum lullabies at night, do the sleeping mountains dream of flying?" When she whispered this near the singing stones of Sonika, they glowed soft cyan!
                      </div>
                    )}

                    <div>
                      <Link to="/characters#dodi"
                        className="text-[12px] font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
                        style={{ color: '#04537F' }}>
                        Read Dodi's full story →
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
                    aria-hidden="true"
                    style={{ fontSize: '14rem', lineHeight: 1, color: 'rgba(56,189,248,0.06)', fontFamily: "'DM Serif Display', serif", fontWeight: 700, letterSpacing: '-0.05em' }}>
                    D
                  </div>
                </div>
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

      {/* SECTION 6: ONE UNIVERSE, MANY EXPERIENCES — COMMERCIAL & CREATIVE EXTENSION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8] shadow-xs mb-3.5">
              <span className="text-[#C7A451] text-xs leading-none">✨</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A451]">
                Commercial & Creative Extension
              </span>
            </div>

            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17233A] tracking-tight leading-[1.18]"
              style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              A story is only the beginning.
            </h2>

            <p className="text-base sm:text-lg text-[#17233A]/80 mt-3 font-sans leading-relaxed">
              How Zanarra transforms a single narrative spark into eight complementary consumer, entertainment, and digital formats.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F0] border border-[#E8DEC9] text-xs font-semibold text-[#17233A]/70 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C7A451]" />
              <span>Multi-Platform IP Expansion Roadmap</span>
            </span>
          </div>
        </div>

        {/* 8-Phase Cohesive Transmedia Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {experiences.map((exp, idx) => (
            <div
              key={exp.num}
              className="group rounded-2xl sm:rounded-3xl bg-[#FAF7F0] border border-[#E8DEC9] shadow-[0_4px_20px_rgba(23,36,59,0.04)] hover:shadow-[0_20px_48px_rgba(23,36,59,0.13)] hover:border-[#C7A451]/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden motion-reduce:hover:translate-y-0 motion-reduce:transition-none cursor-pointer"
            >
              <div>
                {/* 16:10 Cinematic Concept Art Banner */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#FAF3E7] border-b border-[#E8DEC9]/50">
                  <picture>
                    <source srcSet={exp.image} type="image/webp" />
                    <img
                      src={exp.imageJpg}
                      alt={exp.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
                      style={{ objectPosition: exp.objectPosition || 'center center' }}
                      loading={idx < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </picture>

                  {/* Soft bottom edge transition for card body contact */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(250, 247, 240, 0.25) 85%, #FAF7F0 100%)'
                    }}
                  />

                  {/* Gold border glow on hover */}
                  <div className="absolute inset-0 rounded-t-2xl sm:rounded-t-3xl ring-0 group-hover:ring-2 group-hover:ring-[#C7A451]/50 transition-all duration-300 pointer-events-none" />

                  {/* Refined Phase Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#17233A]/85 backdrop-blur-md border border-[#C7A451]/40 group-hover:border-[#C7A451]/80 group-hover:bg-[#17233A]/95 text-[#FAF7F0] text-[10.5px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1.5 transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                    <span>Phase {exp.num}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 pb-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#C7A451] block mb-1.5">
                    {exp.category}
                  </span>

                  <h3
                    className="font-serif text-lg sm:text-xl font-bold text-[#17233A] mb-2 leading-snug group-hover:text-[#C7A451] transition-colors duration-300"
                    style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#17233A]/75 leading-relaxed font-sans mb-3 min-h-[44px]">
                    {exp.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer: Format Pillar Tag */}
              <div className="p-5 sm:p-6 pt-0 mt-auto">
                <div className="pt-3 border-t border-[#E8DEC9]/75 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAF3E7] border border-[#E8DEC9] group-hover:border-[#C7A451]/40 group-hover:bg-[#FBF5E8] text-[10.5px] sm:text-[11px] text-[#17233A]/85 font-semibold shadow-2xs truncate transition-all duration-300">
                    {exp.format}
                  </span>
                  <span className="text-sm font-bold text-[#C7A451] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: BUILT FOR A GLOBAL AUDIENCE — GLOBAL FOOTPRINT */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#FAF7F0] via-[#FCF9F2] to-[#FAF5EB] border border-[#E8DEC9] p-6 sm:p-10 lg:p-12 shadow-[0_12px_45px_rgba(23,36,59,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* Left Column: Strategic Narrative & Balanced Editorial Pillars */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8] shadow-xs mb-3.5">
                  <span className="text-[#C7A451] text-xs leading-none">✨</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A451]">
                    Global Footprint & Vision
                  </span>
                </div>

                <h2
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#17233A] leading-[1.18] tracking-tight mb-4"
                  style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
                >
                  Born in India. <br className="hidden sm:inline" />
                  Imagined for the world.
                </h2>

                <p className="text-base sm:text-lg text-[#17233A]/85 leading-relaxed font-sans">
                  Zanarra originates from India’s rich narrative heritage, engineered from day one as a universal children's entertainment intellectual property with a multi-territory expansion roadmap across languages, cultures, and platforms.
                </p>
              </div>

              {/* 3 Strategic Value Pillars: Airy, elegant, readable editorial cards */}
              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#E6DBCA] shadow-xs hover:shadow-md hover:border-[#C7A451]/60 transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF3E7] text-[#C7A451] border border-[#C7A451]/40 flex items-center justify-center shrink-0 font-bold font-mono text-xs sm:text-sm mt-0.5">
                    01
                  </div>
                  <div className="space-y-1">
                    <strong className="text-base sm:text-[17px] font-bold text-[#17233A] block tracking-tight">
                      Universal Narrative Architecture
                    </strong>
                    <span className="text-sm sm:text-base text-[#17233A]/80 leading-relaxed font-sans block">
                      Rooted in timeless themes of curiosity, friendship, and wonder that resonate effortlessly across international borders without cultural friction.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#E6DBCA] shadow-xs hover:shadow-md hover:border-[#C7A451]/60 transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF3E7] text-[#C7A451] border border-[#C7A451]/40 flex items-center justify-center shrink-0 font-bold font-mono text-xs sm:text-sm mt-0.5">
                    02
                  </div>
                  <div className="space-y-1">
                    <strong className="text-base sm:text-[17px] font-bold text-[#17233A] block tracking-tight">
                      Multilingual Localization Framework
                    </strong>
                    <span className="text-sm sm:text-base text-[#17233A]/80 leading-relaxed font-sans block">
                      Engineered for seamless territorial adaptation across English, Hindi, Spanish, Japanese, Mandarin, and high-growth emerging digital markets.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#E6DBCA] shadow-xs hover:shadow-md hover:border-[#C7A451]/60 transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF3E7] text-[#C7A451] border border-[#C7A451]/40 flex items-center justify-center shrink-0 font-bold font-mono text-xs sm:text-sm mt-0.5">
                    03
                  </div>
                  <div className="space-y-1">
                    <strong className="text-base sm:text-[17px] font-bold text-[#17233A] block tracking-tight">
                      Transmedia Franchise Scalability
                    </strong>
                    <span className="text-sm sm:text-base text-[#17233A]/80 leading-relaxed font-sans block">
                      Conceived for perpetual commercial growth across screen entertainment, publishing, audio lore, and physical consumer products.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: World-Class Clean Geographic Cartography */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl sm:rounded-3xl bg-[#0B1325] border border-[#C7A451]/45 p-5 sm:p-7 shadow-[0_20px_60px_rgba(11,19,37,0.35)] relative overflow-hidden text-[#FAF7F0]">
                
                {/* Subtle celestial compass background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#E5C158]/10 blur-3xl pointer-events-none" />

                {/* Header inside the Map */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/15 gap-2 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#E5C158] animate-pulse" />
                    <span className="text-sm sm:text-base font-bold uppercase tracking-[0.16em] text-[#E5C158]">
                      Global Distribution & Licensing Network
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-white/90 font-mono bg-white/10 px-3.5 py-1 rounded-full border border-white/15 w-fit">
                    Origin Studio: India (20.59° N, 78.96° E)
                  </span>
                </div>

                {/* Quick Interactive Territory Navigator Pills — Enriched font size & contrast */}
                <div className="flex flex-wrap items-center gap-2 pt-3.5 pb-2 relative z-10">
                  <span className="text-xs sm:text-sm text-white/80 font-semibold mr-1 hidden sm:inline">
                    Planned Corridors:
                  </span>
                  <button
                    onClick={() => setSelectedGlobalHubId(null)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                      selectedGlobalHubId === null
                        ? 'bg-[#E5C158] text-[#0B1325] border-white shadow-md font-extrabold'
                        : 'bg-white/10 text-white/90 border-white/20 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    All Corridors
                  </button>
                  {GLOBAL_HUBS.map(hub => {
                    const isSelected = selectedGlobalHubId === hub.id;
                    return (
                      <button
                        key={hub.id}
                        onClick={() => setSelectedGlobalHubId(isSelected ? null : hub.id)}
                        className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                          isSelected
                            ? 'bg-[#E5C158] text-[#0B1325] border-white shadow-md font-extrabold'
                            : 'bg-white/10 text-white/90 border-white/20 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {hub.name}
                      </button>
                    );
                  })}
                </div>

                {/* SVG Vector World Map (Clean Natural Earth Landmasses with Zero Internal Border Clutter) */}
                <div className="relative w-full py-2 sm:py-4">
                  <svg
                    viewBox="0 0 1000 500"
                    className="w-full h-auto drop-shadow-xl select-none min-h-[300px] sm:min-h-[380px]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Rich Gold Gradient for Visible Continents */}
                      <linearGradient id="continentGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EAD292" stopOpacity="0.90" />
                        <stop offset="50%" stopColor="#C7A451" stopOpacity="0.82" />
                        <stop offset="100%" stopColor="#A88334" stopOpacity="0.92" />
                      </linearGradient>

                      {/* Luminous Route Glow */}
                      <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFF2B2" stopOpacity="1" />
                        <stop offset="50%" stopColor="#E5C158" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#C7A451" stopOpacity="0.85" />
                      </linearGradient>

                      {/* India Radiant Beacon Gradient */}
                      <radialGradient id="beaconRadial" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="40%" stopColor="#FFE082" />
                        <stop offset="100%" stopColor="#E5C158" />
                      </radialGradient>
                    </defs>

                    {/* Graticule Grid Lines (Equator, Tropics, Meridians) */}
                    <ellipse cx="500" cy="250" rx="480" ry="230" stroke="#C7A451" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.20" />
                    <line x1="20" y1="250" x2="980" y2="250" stroke="#C7A451" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.16" />
                    <line x1="500" y1="20" x2="500" y2="480" stroke="#C7A451" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.16" />
                    <line x1="40" y1="150" x2="960" y2="150" stroke="#C7A451" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.12" />
                    <line x1="40" y1="350" x2="960" y2="350" stroke="#C7A451" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.12" />

                    {/* ══════════════════════════════════════════════════════════
                        WORLD CONTINENTS: CLEAN NATURAL EARTH LANDMASSES (NO COUNTRY LINES)
                        ══════════════════════════════════════════════════════════ */}
                    <path
                      d={WORLD_CONTINENTS_SVG_PATH}
                      fill="url(#continentGold)"
                      stroke="#E5C158"
                      strokeWidth="1.2"
                      strokeOpacity="0.80"
                      className="transition-opacity duration-300"
                    />

                    {/* ══════════════════════════════════════════════════════════
                        INDIA: THE RADIANT CREATIVE ORIGIN (Accurate Geography)
                        ══════════════════════════════════════════════════════════ */}
                    <path
                      d={INDIA_ORIGIN_SVG_PATH}
                      fill="#FFFDF5"
                      stroke="#E5C158"
                      strokeWidth="2.4"
                      className="filter drop-shadow-[0_0_12px_rgba(229,193,88,0.7)]"
                    />

                    {/* ══════════════════════════════════════════════════════════
                        STRATEGIC EXPANSION CORRIDORS: PROMINENT, CLEAN GOLD ARCS
                        ══════════════════════════════════════════════════════════ */}
                    {GLOBAL_HUBS.map((hub, idx) => {
                      const isFocused = selectedGlobalHubId === null || selectedGlobalHubId === hub.id;
                      return (
                        <g key={hub.id} className="transition-opacity duration-300" opacity={isFocused ? 1 : 0.22}>
                          <path
                            d={`M ${INDIA_COORDS.x} ${INDIA_COORDS.y} Q ${hub.routeControlX} ${hub.routeControlY} ${hub.x} ${hub.y}`}
                            stroke="url(#routeGlow)"
                            strokeWidth={isFocused ? (selectedGlobalHubId === hub.id ? '3.6' : '2.4') : '1.5'}
                            strokeLinecap="round"
                            strokeDasharray="7 5"
                            className="animate-pathway-pulse"
                            style={{ animationDelay: `${idx * 0.3}s` }}
                          />
                        </g>
                      );
                    })}

                    {/* ══════════════════════════════════════════════════════════
                        TARGET REGION BADGES: CLEAN, NON-OVERLAPPING & 100% READABLE
                        ══════════════════════════════════════════════════════════ */}
                    {GLOBAL_HUBS.map(hub => {
                      const isSelected = selectedGlobalHubId === hub.id;
                      const badgeWidth = 126;
                      const badgeHeight = 26;
                      return (
                        <g
                          key={hub.id}
                          transform={`translate(${hub.x}, ${hub.y})`}
                          className="cursor-pointer transition-transform duration-200 hover:scale-105"
                          onClick={() => setSelectedGlobalHubId(isSelected ? null : hub.id)}
                        >
                          {/* Anchor Marker Dot */}
                          <circle
                            cx="0"
                            cy="0"
                            r={isSelected ? 6.5 : 5}
                            fill="#E5C158"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            className="filter drop-shadow-md"
                          />

                          {/* Pill Badge with offset */}
                          <g transform={`translate(0, ${hub.labelOffsetY})`}>
                            <rect
                              x={-badgeWidth / 2}
                              y={-badgeHeight / 2}
                              width={badgeWidth}
                              height={badgeHeight}
                              rx={badgeHeight / 2}
                              fill={isSelected ? '#E5C158' : '#0F182A'}
                              stroke={isSelected ? '#FFFFFF' : '#E5C158'}
                              strokeWidth={isSelected ? 2 : 1.5}
                              className="filter drop-shadow-lg"
                            />
                            <text
                              x="0"
                              y="4"
                              textAnchor="middle"
                              fill={isSelected ? '#17233A' : '#FAF7F0'}
                              fontSize="12"
                              fontWeight="700"
                              letterSpacing="0.02em"
                            >
                              {hub.name}
                            </text>
                          </g>
                        </g>
                      );
                    })}

                    {/* ══════════════════════════════════════════════════════════
                        INDIA ORIGIN BEACON: SPECTACULAR, RADIANT CENTERPIECE
                        ══════════════════════════════════════════════════════════ */}
                    <g transform={`translate(${INDIA_COORDS.x}, ${INDIA_COORDS.y})`}>
                      {/* Concentric radar waves */}
                      <circle cx="0" cy="0" r="32" fill="#E5C158" fillOpacity="0.14" className="animate-ping" />
                      <circle cx="0" cy="0" r="20" fill="#E5C158" fillOpacity="0.28" />
                      <circle cx="0" cy="0" r="10" fill="url(#beaconRadial)" stroke="#FFFFFF" strokeWidth="2.2" />
                      
                      {/* Flagship ORIGIN: INDIA Badge */}
                      <g transform="translate(0, -36)">
                        <rect
                          x="-72"
                          y="-15"
                          width="144"
                          height="30"
                          rx="15"
                          fill="#E5C158"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          className="filter drop-shadow-xl"
                        />
                        <text
                          x="0"
                          y="5"
                          textAnchor="middle"
                          fill="#17233A"
                          fontSize="12.5"
                          fontWeight="900"
                          letterSpacing="0.08em"
                        >
                          ✨ ORIGIN: INDIA
                        </text>
                      </g>
                    </g>

                  </svg>
                </div>

                {/* Interactive Territory Inspector Panel — Enriched text size & high contrast */}
                <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-[#0F1B33]/90 border border-[#C7A451]/30 backdrop-blur-sm transition-all duration-300 shadow-md">
                  {selectedGlobalHubId ? (
                    (() => {
                      const activeHub = GLOBAL_HUBS.find(h => h.id === selectedGlobalHubId);
                      if (!activeHub) return null;
                      return (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                          <div className="space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#E5C158]" />
                              <strong className="text-base sm:text-lg font-bold text-[#E5C158]">
                                {activeHub.name} ({activeHub.region})
                              </strong>
                              <span className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full bg-[#E5C158]/20 text-[#E5C158] border border-[#E5C158]/40">
                                {activeHub.expansionPhase} · {activeHub.status}
                              </span>
                            </div>
                            <p className="text-sm sm:text-base text-white/95 font-sans leading-relaxed">
                              {activeHub.focus}
                            </p>
                            <p className="text-xs sm:text-sm text-white/80 font-medium">
                              Target Territories: <span className="text-[#E5C158]">{activeHub.territories}</span>
                            </p>
                          </div>
                          <button
                            onClick={() => setSelectedGlobalHubId(null)}
                            className="text-xs sm:text-sm text-white/80 hover:text-white underline shrink-0 self-start sm:self-center font-medium"
                          >
                            Reset view
                          </button>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm sm:text-base text-white/90">
                      <div>
                        <strong className="text-[#E5C158] font-bold">Planned Multi-Territory Synchronization: </strong>
                        India serves as the master creative and IP studio, deploying localized broadcast, streaming, and licensing across 5 planned global target corridors.
                      </div>
                      <span className="text-xs sm:text-sm font-mono text-[#E5C158]/90 bg-white/10 px-3 py-1 rounded-full shrink-0 border border-white/15">
                        Tap any corridor above
                      </span>
                    </div>
                  )}
                </div>

                {/* Map Footer: High-Contrast Legend & Institutional Clarification */}
                <div className="pt-5 mt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm sm:text-base text-white">
                  <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#E5C158] border-2 border-white shadow-xs" />
                      <span className="font-bold text-white">Creative Studio Origin</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#0F182A] border-2 border-[#E5C158]" />
                      <span className="font-bold text-white">Planned Expansion Hubs</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-0.5 bg-[#E5C158] border-b-2 border-dashed border-[#E5C158]" />
                      <span className="font-bold text-white">Expansion Corridors</span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-white/80 italic sm:text-right font-medium">
                    *Planned multi-territory co-production, broadcast, and licensing expansion roadmap.
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: INSTITUTIONAL COLLABORATION — STRATEGIC PARTNERS & INVESTORS */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8] shadow-xs mb-4">
            <span className="text-[#C7A451] text-xs leading-none">✨</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A451]">
              Institutional Collaboration
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17233A] tracking-tight leading-[1.18] mb-4 sm:mb-5"
            style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            Help build the next generation <br className="hidden sm:inline" />
            of global children's IP.
          </h2>

          <p className="text-base sm:text-lg text-[#17233A]/80 leading-relaxed max-w-2xl mx-auto font-sans">
            We are building an original entertainment universe with opportunities across content, technology, licensing, merchandise, education, and live experiences.
          </p>
        </div>

        {/* Two Distinct Institutional Opportunity Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: For Strategic Partners */}
          <div className="group rounded-2xl sm:rounded-[2rem] bg-[#FAF7F0] border border-[#E8DEC9] shadow-[0_12px_40px_rgba(23,36,59,0.06)] hover:shadow-[0_20px_50px_rgba(23,36,59,0.12)] hover:border-[#C7A451]/60 hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0 motion-reduce:transition-none flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col flex-1">
              {/* Cinematic Storybook Creative Universe Concept Art */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#FAF3E7] border-b border-[#E8DEC9]/50">
                <picture>
                  <source srcSet="/collab-partners-storybook.webp" type="image/webp" />
                  <img
                    src="/collab-partners-storybook.jpg"
                    alt="Zanarra grand storybook library castle, cascading waterfalls, and celestial astrolabe representing creative co-creation"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out motion-reduce:group-hover:scale-100"
                    loading="lazy"
                  />
                </picture>
                
                {/* Ultra-gentle bottom edge feather for seamless card body contact (90%+ artwork totally clear) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 88%, rgba(250, 247, 240, 0.35) 96%, #FAF7F0 100%)'
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 lg:p-9 pt-5 sm:pt-6 flex flex-col flex-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C7A451] block mb-2">
                  Licensing & Commercial Alliances
                </span>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A] mb-3 leading-snug"
                  style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
                >
                  For Strategic Partners
                </h3>

                <p className="text-sm sm:text-base text-[#17233A]/80 leading-relaxed mb-6 font-sans min-h-[3rem] sm:min-h-[3.25rem]">
                  Collaborate across global publishing, SVOD streaming, consumer merchandise, interactive media, and curriculum-aligned educational distribution.
                </p>

                {/* Refined Institutional Focus Areas: Consistent feature pills */}
                <div className="border-t border-[#E8DEC9]/80 pt-5 mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C7A451] block mb-3.5">
                    Key Scope & Channels
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-[13px] text-[#17233A] font-medium">
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-[#FAF3E7] border border-[#E8DEC9] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Global Publishing & Books</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-[#FAF3E7] border border-[#E8DEC9] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Consumer Products & Toys</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-[#FAF3E7] border border-[#E8DEC9] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Broadcast & SVOD Distribution</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-[#FAF3E7] border border-[#E8DEC9] shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Educational & School Programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer / CTA */}
            <div className="p-6 sm:p-8 lg:p-9 pt-0 mt-auto">
              <div className="pt-6 border-t border-[#E8DEC9] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
                <Link
                  to="/partnerships"
                  className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#17233A] text-[#FAF7F0] font-bold text-xs sm:text-sm tracking-wide hover:bg-[#233555] hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#C7A451] focus:ring-offset-2 transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm motion-reduce:transition-none"
                >
                  <span>Explore Partnerships</span>
                  <ArrowRight className="w-4 h-4 text-[#C7A451] group-hover:translate-x-1 transition-transform duration-200 motion-reduce:group-hover:translate-x-0" />
                </Link>
                <span className="text-xs text-[#17233A]/60 italic text-center sm:text-right">
                  Licensing & distribution agreements
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: For Investors */}
          <div className="group rounded-2xl sm:rounded-[2rem] bg-gradient-to-b from-[#141E33] via-[#111A2D] to-[#0D1526] border border-[#C7A451]/30 shadow-[0_16px_50px_rgba(15,23,42,0.2)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.3)] hover:border-[#C7A451]/60 hover:-translate-y-1 transition-all duration-300 motion-reduce:hover:translate-y-0 motion-reduce:transition-none flex flex-col justify-between overflow-hidden text-[#FAF7F0]">
            <div className="flex flex-col flex-1">
              {/* Cinematic Celestial Citadel Scale Concept Art */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0A101D] border-b border-white/10">
                <picture>
                  <source srcSet="/collab-investors-universe.webp" type="image/webp" />
                  <img
                    src="/collab-investors-universe.jpg"
                    alt="Zanarra celestial floating citadel with luminous rainbow halo, waterfalls, and sky islands representing enterprise scale"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out motion-reduce:group-hover:scale-100"
                    loading="lazy"
                  />
                </picture>

                {/* Ultra-gentle bottom edge feather for seamless card body contact (dark overlay restricted strictly to text area below) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 88%, rgba(20, 30, 51, 0.45) 96%, #141E33 100%)'
                  }}
                />
              </div>

              {/* Card Body: Dark institutional theme lives strictly here */}
              <div className="p-6 sm:p-8 lg:p-9 pt-5 sm:pt-6 flex flex-col flex-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E5C158] block mb-2">
                  Franchise Equity & Scale
                </span>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F0] mb-3 leading-snug"
                  style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
                >
                  For Investors
                </h3>

                <p className="text-sm sm:text-base text-[#FAF7F0]/85 leading-relaxed mb-6 font-sans min-h-[3rem] sm:min-h-[3.25rem]">
                  Access our 5-year franchise roadmap, multi-tier monetization architecture, production efficiency model, and long-term IP valuation thesis.
                </p>

                {/* Refined Institutional Growth Pillars: Consistent feature pills */}
                <div className="border-t border-white/10 pt-5 mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E5C158] block mb-3.5">
                    Investment Thesis & Scale
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-[13px] text-[#FAF7F0] font-medium">
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-white/[0.06] border border-white/10 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Compounding IP Asset Value</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-white/[0.06] border border-white/10 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Multi-Tier Revenue Architecture</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-white/[0.06] border border-white/10 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Global Franchise Scalability</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl sm:rounded-full bg-white/[0.06] border border-white/10 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shrink-0" />
                      <span className="truncate sm:whitespace-normal">Confidential Data Room Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer / CTA */}
            <div className="p-6 sm:p-8 lg:p-9 pt-0 mt-auto">
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
                <button
                  onClick={() => setIsInvestorModalOpen(true)}
                  className="w-full sm:w-auto h-12 px-7 rounded-full bg-gradient-to-r from-[#FAF7F0] via-[#FFF8EC] to-[#E5C158] text-[#17233A] font-bold text-xs sm:text-sm tracking-wide hover:shadow-[0_8px_25px_rgba(229,193,88,0.35)] hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#E5C158] focus:ring-offset-2 focus:ring-offset-[#141E33] transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm motion-reduce:transition-none motion-reduce:hover:scale-100"
                >
                  <span>Investor Enquiries</span>
                  <ArrowRight className="w-4 h-4 text-[#17233A] group-hover:translate-x-1 transition-transform duration-200 motion-reduce:group-hover:translate-x-0" />
                </button>
                <span className="text-xs text-[#FAF7F0]/60 italic text-center sm:text-right">
                  Confidential overview upon request
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9: FINAL CTA — MAGICAL STORYBOOK FINALE */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pb-12">
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#C7A451]/30 bg-[#0B1224] min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] flex items-center">
          
          {/* Background Scene: Desktop & Mobile Responsive High-Res Master Artwork */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source media="(max-width: 767px)" srcSet="/storybook-finale-mobile.webp" type="image/webp" />
              <source media="(max-width: 767px)" srcSet="/storybook-finale-mobile.jpg" type="image/jpeg" />
              <source srcSet="/storybook-finale-desktop.webp" type="image/webp" />
              <img
                src="/storybook-finale-desktop.jpg"
                alt="Zanarra magical storybook finale — Momo, Tobo, Dodi, and Chiku looking towards the glowing crystal gateway"
                className="w-full h-full object-cover object-center select-none pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </picture>

            {/* Atmospheric lighting overlays */}
            {/* Desktop: Compact midnight-indigo gradient on the far left ensures clear heading contrast while keeping the magical crystal doorway and sunset completely unobstructed */}
            <div
              className="hidden md:block absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(9, 14, 28, 0.88) 0%, rgba(9, 14, 28, 0.65) 24%, rgba(9, 14, 28, 0.15) 36%, transparent 48%)'
              }}
            />

            {/* Mobile: Top-down twilight gradient keeps headline & buttons readable against the starry sky */}
            <div
              className="md:hidden absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(9, 14, 28, 0.92) 0%, rgba(9, 14, 28, 0.70) 30%, rgba(9, 14, 28, 0.15) 50%, transparent 70%)'
              }}
            />

            {/* Subtle warm horizon ambient glow behind the portal */}
            <div className="absolute top-1/2 left-[28%] -translate-y-1/2 w-96 h-96 rounded-full bg-[#E5B558]/15 blur-3xl pointer-events-none" />

            {/* Slow, gentle luminous shimmer on the winding golden stardust road */}
            <div className="absolute bottom-6 left-[18%] sm:left-[24%] w-[38%] h-28 rounded-full bg-[#E5B558]/12 blur-2xl animate-pathway-pulse pointer-events-none" />

            {/* Subtle twinkling celestial stars (tranquil, slow breathing) */}
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

          {/* Foreground Storybook Content: Compact left placement gives maximum visibility to the crystal doorway & sunset */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 flex flex-col justify-center">
            <div className="w-full md:w-[48%] lg:w-[42%] xl:w-[38%] max-w-[460px] flex flex-col items-start text-left">
              
              {/* Eyebrow badge with compact, refined spacing */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E172E]/70 border border-[#E5C158]/40 backdrop-blur-md shadow-sm mb-4 sm:mb-5">
                <span className="text-[#E5C158] text-xs leading-none">✨</span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#E5C158]">
                  The Horizon Awaits
                </span>
              </div>

              {/* Main Headline strictly broken into TWO balanced lines */}
              <h2
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[3.15rem] font-bold text-[#FAF7F0] leading-[1.18] tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
                style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                <span className="block">Every universe starts</span>
                <span className="block text-[#FAF7F0]">with a little wonder.</span>
              </h2>

              {/* Supporting Line: Concise, compact and easy to read */}
              <p className="text-xs sm:text-[15px] lg:text-base text-[#FAF7F0]/90 leading-[1.65] font-sans max-w-sm sm:max-w-md mb-6 sm:mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                Your next adventure is waiting. Discover the friends, stories, and magical worlds of Zanarra.
              </p>

              {/* Two Clear Calls to Action */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                <Link
                  to="/universe"
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FAF7F0] via-[#FFF9ED] to-[#F3E5C8] text-[#17233A] font-bold text-xs sm:text-sm tracking-wide shadow-[0_8px_24px_rgba(235,210,160,0.35)] hover:shadow-[0_12px_32px_rgba(235,210,160,0.55)] hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#C7A451] focus:ring-offset-2 focus:ring-offset-[#17233A] transition-all duration-200"
                >
                  <span>Explore the Universe</span>
                  <ArrowRight className="w-4 h-4 text-[#17233A] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] border border-white/25 hover:border-white/40 font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md shadow-sm active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#FAF7F0] focus:ring-offset-2 focus:ring-offset-[#17233A] transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
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
