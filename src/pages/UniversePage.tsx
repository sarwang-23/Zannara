import React, { useState } from 'react';
import { UniverseMapVisual } from '../components/visuals/UniverseMapVisual';
import { RealmVisual, REALM_ARTWORK } from '../components/visuals/RealmVisual';
import { REALMS, Realm, CHARACTERS, Character } from '../data/brandData';
import { RealmModal } from '../components/modals/RealmModal';
import { CharacterModal } from '../components/modals/CharacterModal';
import { Compass, Sparkles, MapPin, BookOpen, Layers, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UniversePage: React.FC = () => {
  const [selectedRealm, setSelectedRealm] = useState<Realm>(REALMS[0]);
  const [modalRealm, setModalRealm] = useState<Realm | null>(null);
  const [modalCharacter, setModalCharacter] = useState<Character | null>(null);

  const narrativePillars = [
    {
      num: '01',
      title: 'The Characters',
      subtitle: 'Bravery, Wit & Boundless Wonder',
      category: 'Emotional Connection',
      desc: 'Provide the emotional connection. Momo, Tobo, and Dodi embody bravery, inventive wit, and boundless inquisitive wonder that children bond with for life.',
      image: '/philosophy-03-connection.jpg',
      alt: 'Momo, Tobo, Dodi and puppy Chiku sitting together under glowing lanterns',
      accentColor: '#E07A5F',
      link: '/characters',
      actionText: 'Meet Character Trio',
      icon: Users
    },
    {
      num: '02',
      title: 'The Five Realms',
      subtitle: 'Ecology, Engineering & Cosmos',
      category: 'The Living Multiverse',
      desc: 'Provide the world-building. Each realm offers a distinct domain of human thought: ecology, engineering, ancient myth, acoustic feeling, and cosmic discovery.',
      image: '/world-zanarra-panorama.jpg',
      alt: 'The magical World of Zanarra with floating islands and five realms sanctuary',
      accentColor: '#0284C7',
      link: '#realms-explorer',
      actionText: 'Explore Realms Codex',
      icon: Compass
    },
    {
      num: '03',
      title: 'The Stories',
      subtitle: 'Episodic Lore, Music & Books',
      category: 'Ecosystem Retention',
      desc: 'Create recurring audience engagement. Modular episodic tales, songs, and picture books keep children engaged season after season without barrier to entry.',
      image: '/collab-partners-storybook.webp',
      imageJpg: '/collab-partners-storybook.jpg',
      alt: 'Grand enchanted storybook library castle with children on glowing path surrounded by floating books',
      accentColor: '#7C3AED',
      link: '/stories',
      actionText: 'Browse Stories Catalog',
      icon: BookOpen
    },
    {
      num: '04',
      title: 'Products & Play',
      subtitle: 'Tangible Toys, STEM Kits & Apps',
      category: 'Tangible Immersion',
      desc: 'Extend the relationship beyond the screen. Books, physical STEM kits, musical instruments, and interactive apps bring story magic into physical playtime.',
      image: '/phase-04-books-merchandise.webp',
      imageJpg: '/phase-04-books-merchandise.jpg',
      alt: 'Collector picture books, plush companions, and creative artist desk',
      accentColor: '#C7A451',
      link: '/partnerships',
      actionText: 'Discover Play Ecosystem',
      icon: Sparkles
    }
  ];

  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: WORLD-BUILDING INTRODUCTION (FULL-WIDTH CINEMATIC HERO)
          Breathtaking fantasy panorama with Momo, Tobo, Dodi, Chiku,
          floating sky islands, atmospheric lighting & prominent headline.
          Spans full width edge-to-edge across the entire screen.
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#0B1224] border-b border-[#C7A451]/25 min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] xl:min-h-[700px] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
        {/* Full-Bleed Panoramic Background Artwork */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/hero-panoramic-ultra.webp" type="image/webp" />
            <img
              src="/hero-panoramic-ultra.png"
              alt="Zanarra magical universe — Momo, Tobo, Dodi, and Chiku looking towards floating sky islands and five realms"
              className="w-full h-full object-cover object-[72%_center] sm:object-center select-none pointer-events-none"
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* Cinematic atmospheric gradient overlays */}
          {/* Desktop Left-to-Right contrast fade: text is 100% crisp, characters on right are vibrant */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(11, 18, 36, 0.94) 0%, rgba(11, 18, 36, 0.86) 30%, rgba(11, 18, 36, 0.52) 46%, rgba(11, 18, 36, 0.15) 66%, transparent 82%)'
            }}
          />

          {/* Mobile bottom-up gradient */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(11, 18, 36, 0.96) 0%, rgba(11, 18, 36, 0.85) 50%, rgba(11, 18, 36, 0.35) 80%, transparent 100%)'
            }}
          />

          {/* Bottom subtle fade transition */}
          <div
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(11, 18, 36, 0.85) 0%, rgba(11, 18, 36, 0.25) 50%, transparent 100%)'
            }}
          />

          {/* Warm horizon ambient glow */}
          <div className="absolute top-1/2 left-[28%] -translate-y-1/2 w-96 h-96 rounded-full bg-[#E5B558]/12 blur-3xl pointer-events-none" />
        </div>

        {/* Foreground Content Aligned with Standard Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[46%] max-w-[620px] flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17233A]/85 border border-[#E5C158]/40 backdrop-blur-md shadow-xs mb-4">
              <span className="text-[#E5C158] text-xs leading-none">✨</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C158]">
                World-Building & Lore
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-[#FAF7F0] leading-[1.12] tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
              style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              Welcome to the world of Zanarra.
            </h1>

            {/* Supporting Statement Quote */}
            <div className="border-l-2 border-[#E5C158] pl-4 py-1 mb-6">
              <p className="text-sm sm:text-base lg:text-lg text-[#FAF7F0]/95 font-serif italic leading-relaxed drop-shadow-sm">
                “Three friends. Five extraordinary realms. One simple belief: the world becomes more wonderful when we keep asking questions.”
              </p>
            </div>

            {/* Quick Universe Highlights Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#E07A5F]" />
                <span>3 Original Characters</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                <span>5 Living Realms</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
                <span>Infinite Adventures</span>
              </div>
            </div>

            {/* Dual Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#narrative-architecture"
                className="h-12 inline-flex items-center justify-center gap-2.5 px-7 rounded-full bg-gradient-to-r from-[#FAF7F0] via-[#FFF9ED] to-[#F3E5C8] text-[#17233A] font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Discover Narrative Architecture</span>
                <ArrowRight className="w-4 h-4 text-[#17233A]" />
              </a>

              <Link
                to="/characters"
                className="h-12 inline-flex items-center justify-center px-6 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] border border-white/25 hover:border-white/40 font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Meet the Trio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Content Container with Standard Global Page Rhythm */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-24 sm:space-y-32">

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: THE NARRATIVE ARCHITECTURE
          Four visually rich, premium pillar cards:
          Pillar 01 (Characters) | Pillar 02 (Realms) |
          Pillar 03 (Stories)    | Pillar 04 (Products & Play)
          ══════════════════════════════════════════════════════════════ */}
      <section id="narrative-architecture" className="scroll-mt-28 space-y-10 sm:space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8] shadow-xs mb-3.5">
            <span className="text-[#C7A451] text-xs leading-none">✨</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A451]">
              Franchise Structure
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17233A] tracking-tight leading-[1.14] mb-3.5"
            style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            The Narrative Architecture
          </h2>

          <p className="text-base sm:text-lg text-[#17233A]/75 font-sans leading-relaxed max-w-2xl mx-auto">
            How character connection, world-building, and transmedia touchpoints weave into an interconnected children’s IP ecosystem.
          </p>
        </div>

        {/* 4 Premium Visual Pillar Cards — strictly normalized height, padding, and alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {narrativePillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group rounded-3xl bg-[#FAF7F0] border border-[#E8DEC9] shadow-[0_4px_20px_rgba(23,36,59,0.04)] hover:shadow-[0_20px_45px_rgba(23,36,59,0.11)] hover:border-[#C7A451]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
              >
                <div>
                  {/* Artwork Banner (Fixed Aspect & Height) */}
                  <div className="relative w-full h-[180px] sm:h-[190px] overflow-hidden bg-[#17233A]/5 border-b border-[#E8DEC9]/60">
                    <picture>
                      {pillar.image.endsWith('.webp') && (
                        <source srcSet={pillar.image} type="image/webp" />
                      )}
                      <img
                        src={pillar.imageJpg || pillar.image}
                        alt={pillar.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>

                    {/* Gradient Vignette for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17233A]/60 via-transparent to-black/15 pointer-events-none" />

                    {/* Top-Left: Pillar Number Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-[10px] font-bold text-[#17233A] shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.accentColor }} />
                        <span className="uppercase tracking-wider">Pillar {pillar.num}</span>
                      </span>
                    </div>

                    {/* Top-Right: Pillar Category Tag */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#17233A]/85 backdrop-blur-md border border-white/20 text-[9.5px] font-semibold text-white/95 shadow-xs">
                        <span>{pillar.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C7A451]">
                          Core Anchor {pillar.num}
                        </span>
                        <IconComponent className="w-4 h-4 text-[#C7A451]" />
                      </div>

                      <h3
                        className="font-serif text-xl sm:text-[1.35rem] font-bold text-[#17233A] leading-snug group-hover:text-[#C7A451] transition-colors"
                        style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
                      >
                        {pillar.title}
                      </h3>

                      <span
                        className="text-[11px] font-bold uppercase tracking-wider block mt-1"
                        style={{ color: pillar.accentColor }}
                      >
                        {pillar.subtitle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#17233A]/75 leading-relaxed font-sans pt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="px-5 sm:px-6 pb-5 pt-2 mt-auto">
                  <div className="pt-3.5 border-t border-[#E8DEC9]/60 flex items-center justify-between text-xs font-bold text-[#17233A] group-hover:text-[#C7A451] transition-colors">
                    {pillar.link.startsWith('#') ? (
                      <a href={pillar.link} className="inline-flex items-center justify-between w-full group/link">
                        <span>{pillar.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C7A451] group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link to={pillar.link} className="inline-flex items-center justify-between w-full group/link">
                        <span>{pillar.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C7A451] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Universe Map */}
      <section className="space-y-4">
        <UniverseMapVisual
          selectedRealmId={selectedRealm.id}
          onSelectRealm={(r) => setSelectedRealm(r)}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4: ONE UNIVERSE, MANY JOURNEYS — Immersive Story Portal
          Cinematic dark universe with SVG constellation map,
          editorial title, and interactive story portal card.
          ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative rounded-3xl overflow-hidden border border-[#C7A451]/25"
        style={{
          background: 'linear-gradient(135deg, #0B1224 0%, #111B35 45%, #0D1829 100%)',
          boxShadow: '0 24px 80px rgba(11,18,36,0.35), inset 0 1px 0 rgba(199,164,81,0.15)',
        }}
      >
        {/* Starfield background — subtle scattered white dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '8%',  left: '5%',  size: 1.5, opacity: 0.5, delay: '0s' },
            { top: '15%', left: '18%', size: 1,   opacity: 0.3, delay: '1.5s' },
            { top: '5%',  left: '42%', size: 2,   opacity: 0.6, delay: '0.7s' },
            { top: '22%', left: '61%', size: 1,   opacity: 0.35, delay: '2.1s' },
            { top: '10%', left: '78%', size: 1.5, opacity: 0.5, delay: '0.3s' },
            { top: '35%', left: '88%', size: 1,   opacity: 0.25, delay: '3s' },
            { top: '72%', left: '92%', size: 2,   opacity: 0.45, delay: '1s' },
            { top: '85%', left: '72%', size: 1,   opacity: 0.3, delay: '2.8s' },
            { top: '90%', left: '52%', size: 1.5, opacity: 0.4, delay: '0.5s' },
            { top: '80%', left: '28%', size: 1,   opacity: 0.3, delay: '1.8s' },
            { top: '65%', left: '8%',  size: 2,   opacity: 0.5, delay: '0.9s' },
            { top: '48%', left: '3%',  size: 1,   opacity: 0.25, delay: '2.4s' },
            { top: '55%', left: '55%', size: 1.5, opacity: 0.3, delay: '3.5s' },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-star-breathe"
              style={{
                top: star.top, left: star.left,
                width: `${star.size}px`, height: `${star.size}px`,
                backgroundColor: '#FAF7F0',
                opacity: star.opacity,
                animationDelay: star.delay,
                boxShadow: `0 0 ${star.size * 3}px rgba(250,247,240,0.6)`,
              }}
            />
          ))}
        </div>

        {/* Warm golden ambient bloom — centre */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(199,164,81,0.08) 0%, transparent 70%)' }}
        />

        {/* Main 3-column unified composition: Left Story | Center Constellation | Right Portal */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[520px] sm:min-h-[560px]">

          {/* LEFT: Title + context (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center px-8 sm:px-10 lg:px-10 py-10 lg:py-14 border-b lg:border-b-0 lg:border-r border-white/8">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-px bg-[#C7A451]/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C7A451]">
                Modular Story Design
              </span>
            </div>

            {/* Title — the visual hero */}
            <h2
              className="font-serif font-bold text-[#FAF7F0] leading-[1.08] tracking-tight mb-5"
              style={{
                fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              }}
            >
              One universe,{' '}
              <span style={{ color: '#C7A451' }}>many</span>{' '}
              journeys.
            </h2>

            {/* Short emotional explanation */}
            <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
              Every child enters the same universe through a different door. Each story stands alone — yet every journey quietly reveals a bigger world.
            </p>

            {/* Journey path micro-pills */}
            <div className="space-y-2.5">
              <span className="text-[9.5px] font-black uppercase tracking-[0.22em] text-[#C7A451]/80 block">Five paths. One universe.</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { emoji: '🌿', label: 'Nature',   color: '#4A7C59' },
                  { emoji: '⚙️', label: 'Creation', color: '#D97706' },
                  { emoji: '🏛️', label: 'Myth',     color: '#7C3AED' },
                  { emoji: '🎵', label: 'Sound',    color: '#E11D48' },
                  { emoji: '✨', label: 'Cosmos',   color: '#0284C7' },
                ].map(p => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border backdrop-blur-sm"
                    style={{
                      color: p.color,
                      backgroundColor: `${p.color}18`,
                      borderColor: `${p.color}40`,
                    }}
                  >
                    <span className="text-xs">{p.emoji}</span>
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CENTRE: SVG Universe Constellation Map (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-6 lg:p-4 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/8">
            {/* Background radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(199,164,81,0.08) 0%, transparent 65%)' }}
            />

            <svg
              viewBox="0 0 420 380"
              className="w-full max-w-[360px] lg:max-w-full h-auto select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer orbit rings */}
              <circle cx="210" cy="190" r="155" stroke="rgba(199,164,81,0.12)" strokeWidth="1" />
              <circle cx="210" cy="190" r="110" stroke="rgba(199,164,81,0.08)" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx="210" cy="190" r="65"  stroke="rgba(199,164,81,0.15)" strokeWidth="1" />

              {/* Constellation connection lines — realm to nexus */}
              <line x1="75"  y1="90"  x2="210" y2="190" stroke="rgba(74,124,89,0.45)"  strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="345" y1="90"  x2="210" y2="190" stroke="rgba(217,119,6,0.45)"  strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="65"  y1="300" x2="210" y2="190" stroke="rgba(124,58,237,0.45)" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="355" y1="300" x2="210" y2="190" stroke="rgba(225,29,72,0.45)"  strokeWidth="1.2" strokeDasharray="4 4" />

              {/* Outer rim trails */}
              <path d="M75 90 Q210 40 345 90"   stroke="rgba(199,164,81,0.18)" strokeWidth="1.5" />
              <path d="M75 90 Q40 195 65 300"   stroke="rgba(199,164,81,0.15)" strokeWidth="1.5" />
              <path d="M345 90 Q380 195 355 300" stroke="rgba(199,164,81,0.15)" strokeWidth="1.5" />
              <path d="M65 300 Q210 350 355 300" stroke="rgba(199,164,81,0.18)" strokeWidth="1.5" />

              {/* ── Nexus / Cosmara — Centre glowing hub ── */}
              <circle cx="210" cy="190" r="38" fill="rgba(2,132,199,0.12)" stroke="rgba(2,132,199,0.35)" strokeWidth="1.5" />
              <circle cx="210" cy="190" r="26" fill="rgba(2,132,199,0.18)" stroke="rgba(2,132,199,0.6)" strokeWidth="2" />
              <circle cx="210" cy="190" r="16" fill="rgba(2,132,199,0.35)" />
              <circle cx="210" cy="190" r="8"  fill="#0284C7" />
              <circle cx="210" cy="190" r="3"  fill="#E0F2FE" />
              <text x="210" y="240" textAnchor="middle" fill="#38BDF8" fontSize="8.5" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.15em">
                COSMARA
              </text>

              {/* ── Terra Viva — top-left ── */}
              <circle cx="75" cy="90"  r="22" fill="rgba(74,124,89,0.2)"  stroke="rgba(74,124,89,0.6)"  strokeWidth="1.5" />
              <circle cx="75" cy="90"  r="12" fill="rgba(74,124,89,0.4)"   />
              <circle cx="75" cy="90"  r="5"  fill="#4ADE80" />
              <text x="75"  y="62"  textAnchor="middle" fill="#86EFAC" fontSize="8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.12em">TERRA VIVA</text>

              {/* ── Mechanika — top-right ── */}
              <circle cx="345" cy="90"  r="22" fill="rgba(217,119,6,0.2)"  stroke="rgba(217,119,6,0.6)"  strokeWidth="1.5" />
              <circle cx="345" cy="90"  r="12" fill="rgba(217,119,6,0.4)"   />
              <circle cx="345" cy="90"  r="5"  fill="#FBBF24" />
              <text x="345" y="62"  textAnchor="middle" fill="#FDE047" fontSize="8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.12em">MECHANIKA</text>

              {/* ── Mythara — bottom-left ── */}
              <circle cx="65"  cy="300" r="22" fill="rgba(124,58,237,0.2)" stroke="rgba(124,58,237,0.6)" strokeWidth="1.5" />
              <circle cx="65"  cy="300" r="12" fill="rgba(124,58,237,0.4)"  />
              <circle cx="65"  cy="300" r="5"  fill="#C084FC" />
              <text x="65"  y="336" textAnchor="middle" fill="#D8B4FE" fontSize="8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.12em">MYTHARA</text>

              {/* ── Sonika — bottom-right ── */}
              <circle cx="355" cy="300" r="22" fill="rgba(225,29,72,0.2)"  stroke="rgba(225,29,72,0.6)"  strokeWidth="1.5" />
              <circle cx="355" cy="300" r="12" fill="rgba(225,29,72,0.4)"   />
              <circle cx="355" cy="300" r="5"  fill="#FB7185" />
              <text x="355" y="336" textAnchor="middle" fill="#FDA4AF" fontSize="8" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="0.12em">SONIKA</text>

              {/* Floating micro-stars */}
              <circle cx="150" cy="135" r="1.5" fill="rgba(250,247,240,0.6)" />
              <circle cx="280" cy="140" r="1"   fill="rgba(250,247,240,0.45)" />
              <circle cx="170" cy="255" r="1.5" fill="rgba(250,247,240,0.5)" />
              <circle cx="260" cy="250" r="1"   fill="rgba(250,247,240,0.4)" />
              <circle cx="210" cy="100" r="1"   fill="rgba(199,164,81,0.7)" />
              <circle cx="120" cy="190" r="1.5" fill="rgba(199,164,81,0.5)" />
              <circle cx="300" cy="190" r="1.5" fill="rgba(199,164,81,0.5)" />
            </svg>
          </div>

          {/* RIGHT: Story Portal Card (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-center px-8 sm:px-10 lg:px-8 py-10 lg:py-14">
            <div
              className="group relative rounded-2xl p-6 transition-all duration-300 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(199,164,81,0.12) 0%, rgba(23,35,58,0.70) 100%)',
                border: '1px solid rgba(199,164,81,0.30)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 30px rgba(11,18,36,0.4)',
              }}
            >
              {/* Card ambient glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(199,164,81,0.12) 0%, transparent 70%)' }}
              />

              {/* Story world label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C7A451] text-xs">✦</span>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C7A451]">Story World</span>
              </div>

              {/* Portal title */}
              <h4
                className="font-serif font-bold text-[#FAF7F0] leading-snug mb-3 group-hover:text-[#EDD98A] transition-colors duration-200"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
                }}
              >
                The Great Question Veil
              </h4>

              {/* Lore description */}
              <p className="text-xs text-white/70 leading-relaxed mb-5 font-sans">
                In Zanarra lore, realms stay in harmony as long as living beings ask genuine questions. When wonder fades, misty barriers rise between worlds. The trio's curiosity keeps every pathway open.
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-4" />

              {/* Lore metadata */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C7A451]">Lore Codex #01</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Universe Bible</span>
              </div>

              {/* CTA */}
              <button
                onClick={() => setModalRealm(REALMS[0])}
                className="w-full h-11 inline-flex items-center justify-center gap-2 px-4 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(199,164,81,0.30) 0%, rgba(199,164,81,0.15) 100%)',
                  border: '1px solid rgba(199,164,81,0.45)',
                  color: '#FAF7F0',
                }}
              >
                <span>Explore the Lore</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A451] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Connector text below card */}
            <p className="text-[10.5px] text-white/40 text-center mt-4 leading-relaxed font-serif italic">
              Every question opens a new path inside Zanarra.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: THE FIVE INDIVIDUAL REALMS — World Portal Cards
          Strictly normalized geometry: alternating image panels,
          identical desktop height, identical padding, aligned CTAs.
          ══════════════════════════════════════════════════════════════ */}
      <section className="space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8] shadow-xs">
            <span className="text-[#C7A451] text-xs">🗺️</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A451]">Explore the Worlds</span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17233A] tracking-tight leading-[1.14]"
            style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            The Five Individual Realms
          </h2>

          <p className="text-base sm:text-lg text-[#17233A]/75 leading-relaxed max-w-xl mx-auto font-sans">
            Five worlds. Five ways to discover, imagine and create.
          </p>

          {/* Journey path indicator */}
          <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
            {[
              { emoji: '🌿', label: 'Nature', color: '#16A34A' },
              { emoji: '⚙️', label: 'Creation', color: '#D97706' },
              { emoji: '🏛️', label: 'Myth', color: '#7C3AED' },
              { emoji: '🎵', label: 'Sound', color: '#E11D48' },
              { emoji: '✨', label: 'Cosmos', color: '#0284C7' },
            ].map((stop, i) => (
              <React.Fragment key={stop.label}>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DEC9] shadow-xs">
                  <span className="text-sm leading-none">{stop.emoji}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: stop.color }}>{stop.label}</span>
                </div>
                {i < 4 && (
                  <div className="w-5 h-px bg-[#C7A451]/30 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 5 World Portal Cards — strictly identical height, padding, and proportions */}
        <div className="space-y-8 sm:space-y-10">
          {REALMS.map((realm, index) => {
            const realmArtwork = REALM_ARTWORK[realm.id];
            const discoveryTags: Record<string, string[]> = {
              'terra-viva':  ['🌿 Living Ecosystems', '🐾 Hidden Creatures', '💧 Ancient Rivers'],
              'mechanika':   ['⚙️ Inventions', '🔧 Engineering Quests', '💡 STEM Challenges'],
              'mythara':     ['🏛️ Ancient Temples', '📜 Hidden Legends', '🌟 Mystical Riddles'],
              'sonika':      ['🎵 Musical Worlds', '🎶 Emotional Rhythms', '🎤 Sound Stories'],
              'cosmara':     ['✨ Nebula Islands', '🔭 Star Secrets', '🌌 Cosmic Voyages'],
            };
            const tags = discoveryTags[realm.id] || [];
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={realm.id}
                id={realm.id}
                className="group relative rounded-3xl overflow-hidden bg-[#FAF7F0] border border-[#E8DEC9] transition-all duration-300 lg:h-[460px] flex flex-col justify-between"
                style={{
                  boxShadow: '0 4px 24px rgba(23,35,58,0.06)',
                  border: `1.5px solid ${realm.accentColor}30`,
                }}
              >
                {/* ── Strict 12-Column Grid (7 Cols Image, 5 Cols Content) ────── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

                  {/* IMAGE PANEL — 7 columns, crisp, cinematic */}
                  <div
                    className={`relative lg:col-span-7 h-64 sm:h-80 lg:h-full overflow-hidden ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <picture>
                      <source srcSet={realmArtwork.webp} type="image/webp" />
                      <img
                        src={realmArtwork.image}
                        alt={realmArtwork.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        style={{ objectPosition: realmArtwork.objectPosition }}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>

                    {/* Gradient fade towards content panel on desktop */}
                    <div
                      className={`absolute inset-y-0 ${isImageLeft ? 'right-0' : 'left-0'} w-24 lg:block hidden pointer-events-none`}
                      style={{
                        background: isImageLeft
                          ? `linear-gradient(to left, ${realm.bgLight} 0%, transparent 100%)`
                          : `linear-gradient(to right, ${realm.bgLight} 0%, transparent 100%)`,
                      }}
                    />

                    {/* Mobile bottom fade */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-16 lg:hidden pointer-events-none"
                      style={{
                        background: `linear-gradient(to top, ${realm.bgLight} 0%, transparent 100%)`,
                      }}
                    />

                    {/* Top-Left: Standardized Realm Index Badge */}
                    <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-[10px] font-bold text-[#17233A] shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: realm.accentColor }} />
                        <span className="uppercase tracking-wider">Realm 0{realm.number}</span>
                      </span>
                    </div>

                    {/* Top-Right: Realm Theme Tag */}
                    <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md border text-white shadow-xs"
                        style={{
                          backgroundColor: `${realm.accentColor}CC`,
                          borderColor: `${realm.accentColor}88`,
                        }}
                      >
                        {realm.theme}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT PANEL — 5 columns, perfectly padded & aligned */}
                  <div
                    className={`relative lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-9 ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                    style={{ backgroundColor: realm.bgLight }}
                  >
                    {/* Top section: Category Eyebrow, Title, Story Promise */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: realm.accentColor }}
                        />
                        <span
                          className="text-[10px] font-black uppercase tracking-[0.22em]"
                          style={{ color: realm.accentColor }}
                        >
                          Realm 0{realm.number} · {realm.theme}
                        </span>
                      </div>

                      <div>
                        <h3
                          className="font-serif font-bold text-[#17233A] leading-tight group-hover:text-[#17233A]/90 transition-colors"
                          style={{
                            fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(1.85rem, 3.2vw, 2.45rem)',
                          }}
                        >
                          {realm.name}
                        </h3>
                        <div
                          className="mt-2 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                          style={{ backgroundColor: realm.accentColor }}
                        />
                      </div>

                      <p
                        className="font-serif italic font-semibold leading-snug pt-1"
                        style={{
                          color: realm.textColor,
                          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                          fontFamily: "'DM Serif Display', Georgia, serif",
                        }}
                      >
                        "{realm.storyPromise}"
                      </p>
                    </div>

                    {/* Middle section: Discovery tags */}
                    <div className="space-y-2 py-3">
                      <span className="text-[9.5px] font-black uppercase tracking-[0.2em] text-[#17233A]/50 block">
                        What you'll discover
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
                            style={{
                              color: realm.textColor,
                              backgroundColor: `${realm.accentColor}14`,
                              borderColor: `${realm.accentColor}35`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom section: CTAs (locked baseline) */}
                    <div className="pt-2 flex items-center gap-4">
                      <button
                        onClick={() => setModalRealm(realm)}
                        className="h-11 inline-flex items-center justify-center gap-2 px-6 rounded-full font-bold text-xs sm:text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
                        style={{
                          backgroundColor: realm.accentColor,
                          boxShadow: `0 4px 16px ${realm.accentColor}40`,
                        }}
                      >
                        <span>Enter This World</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <Link
                        to="/stories"
                        className="text-xs font-bold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity"
                        style={{ color: realm.textColor }}
                      >
                        See Stories →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6: STORYBOOK FINALE CTA — Full-width cinematic panorama
          Consistent max-w-7xl px-4 sm:px-6 lg:px-8 alignment with Hero!
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#0B1224] border-t border-[#C7A451]/25 min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] flex items-center">
        {/* Background Scene */}
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

          {/* Desktop gradient */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(9, 14, 28, 0.88) 0%, rgba(9, 14, 28, 0.65) 24%, rgba(9, 14, 28, 0.15) 36%, transparent 48%)'
            }}
          />

          {/* Mobile gradient */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(9, 14, 28, 0.92) 0%, rgba(9, 14, 28, 0.70) 30%, rgba(9, 14, 28, 0.15) 50%, transparent 70%)'
            }}
          />

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-[28%] -translate-y-1/2 w-96 h-96 rounded-full bg-[#E5B558]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-6 left-[18%] sm:left-[24%] w-[38%] h-28 rounded-full bg-[#E5B558]/12 blur-2xl animate-pathway-pulse pointer-events-none" />

          {/* Stars */}
          <div className="absolute top-8 left-[14%] w-2 h-2 rounded-full bg-[#FAF7F0] shadow-[0_0_10px_#FFF] animate-star-breathe pointer-events-none" style={{ animationDelay: '0s' }} />
          <div className="absolute top-20 left-[36%] w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158] animate-star-breathe pointer-events-none" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-10 right-[32%] w-2 h-2 rounded-full bg-[#FAF7F0] shadow-[0_0_10px_#FFF] animate-star-breathe pointer-events-none" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-16 right-[18%] w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_8px_#E5C158] animate-star-breathe pointer-events-none" style={{ animationDelay: '3.8s' }} />

          {/* Fireflies */}
          <div className="absolute top-[48%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#FFE082] shadow-[0_0_8px_#FFD54F] animate-firefly-a pointer-events-none" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[56%] left-[34%] w-2 h-2 rounded-full bg-[#FFD54F] shadow-[0_0_10px_#FFCA28] animate-firefly-b pointer-events-none" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[68%] left-[44%] w-1.5 h-1.5 rounded-full bg-[#FFE082] shadow-[0_0_8px_#FFD54F] animate-firefly-a pointer-events-none" style={{ animationDelay: '5s' }} />
          <div className="absolute top-[62%] right-[40%] w-1.5 h-1.5 rounded-full bg-[#FFD54F] shadow-[0_0_9px_#FFCA28] animate-firefly-b pointer-events-none" style={{ animationDelay: '1.8s' }} />
        </div>

        {/* Foreground Content — precisely aligned with global max-w-7xl grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex flex-col justify-center">
          <div className="w-full md:w-[48%] lg:w-[42%] xl:w-[38%] max-w-[460px] flex flex-col items-start text-left">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E172E]/70 border border-[#E5C158]/40 backdrop-blur-md shadow-sm mb-4 sm:mb-5">
              <span className="text-[#E5C158] text-xs leading-none">✨</span>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#E5C158]">
                The Horizon Awaits
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[3.15rem] font-bold text-[#FAF7F0] leading-[1.18] tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
              style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              <span className="block">Every universe starts</span>
              <span className="block text-[#FAF7F0]">with a little wonder.</span>
            </h2>

            {/* Supporting line */}
            <p className="text-xs sm:text-[15px] lg:text-base text-[#FAF7F0]/90 leading-[1.65] font-sans max-w-sm sm:max-w-md mb-6 sm:mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Your next adventure is waiting. Discover the friends, stories, and magical worlds of Zanarra.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <Link
                to="/characters"
                className="h-12 inline-flex items-center justify-center gap-2 px-7 rounded-full bg-gradient-to-r from-[#FAF7F0] via-[#FFF9ED] to-[#F3E5C8] text-[#17233A] font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Meet the Characters</span>
                <ArrowRight className="w-4 h-4 text-[#17233A]" />
              </Link>

              <Link
                to="/contact"
                className="h-12 inline-flex items-center justify-center px-7 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F0] border border-white/25 hover:border-white/40 font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md shadow-sm active:scale-[0.98] transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modals */}
      <RealmModal
        realm={modalRealm}
        isOpen={!!modalRealm}
        onClose={() => setModalRealm(null)}
        onSelectCharacter={(charId) => {
          const char = CHARACTERS.find(c => c.id === charId);
          if (char) setModalCharacter(char);
        }}
      />

      <CharacterModal
        character={modalCharacter}
        isOpen={!!modalCharacter}
        onClose={() => setModalCharacter(null)}
      />
    </div>
  );
};
