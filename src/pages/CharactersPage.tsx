import React, { useState } from 'react';
import { CHARACTERS, Character, REALMS } from '../data/brandData';
import { CharacterVisual } from '../components/visuals/CharacterVisual';
import { CharacterModal } from '../components/modals/CharacterModal';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* shared centered container */
const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-14 ${className}`}>
    {children}
  </div>
);

export const CharactersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Curious Minds' | 'Inventors' | 'Adventurers'>('All');
  const [modalCharacter, setModalCharacter] = useState<Character | null>(null);

  const filterOptions = ['All', 'Adventurers', 'Inventors', 'Curious Minds'] as const;

  const filteredCharacters =
    activeFilter === 'All'
      ? CHARACTERS
      : CHARACTERS.filter((c) => c.category === activeFilter);

  const charConfig: Record<string, {
    img: string; alt: string; realm: string; archetype: string; tagline: string;
    traits: { label: string; cls: string }[];
    cardHover: string; btnHover: string;
  }> = {
    momo: {
      img: '/showcase-momo-adventurer.jpg',
      alt: 'Momo the Adventurer on floating sky-islands of Terra Viva with his glowing compass',
      realm: 'Terra Viva', archetype: 'The Fearless Leader',
      tagline: 'Warm, courageous, and gloriously eager to leap into the unknown.',
      traits: [
        { label: 'Brave Explorer', cls: 'bg-rose-50 text-rose-800 border-rose-200' },
        { label: 'Unshakable Optimist', cls: 'bg-amber-50 text-amber-800 border-amber-200' },
        { label: 'Team Catalyst', cls: 'bg-orange-50 text-orange-800 border-orange-200' },
      ],
      cardHover: 'hover:border-[#E07A5F]/70 hover:shadow-[0_32px_64px_rgba(224,122,95,0.20)]',
      btnHover: 'group-hover/card:bg-[#E07A5F]',
    },
    tobo: {
      img: '/showcase-tobo-inventor.jpg',
      alt: 'Tobo the Inventor in his Mechanika clockwork workshop with a glowing brass songbird',
      realm: 'Mechanika', archetype: 'The Master Tinkerer',
      tagline: 'Fascinated by gears, blueprints, and building the impossible.',
      traits: [
        { label: 'Master Inventor', cls: 'bg-sky-50 text-sky-800 border-sky-200' },
        { label: 'Curious Tinkerer', cls: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
        { label: 'Lateral Thinker', cls: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
      ],
      cardHover: 'hover:border-[#0284C7]/70 hover:shadow-[0_32px_64px_rgba(2,132,199,0.20)]',
      btnHover: 'group-hover/card:bg-[#0284C7]',
    },
    dodi: {
      img: '/showcase-dodi-explorer.jpg',
      alt: 'Dodi the Explorer discovering a luminous starlight flower in the Whispering Wilds',
      realm: 'The Whispering Wilds', archetype: 'The Tiny Nature Whisperer',
      tagline: 'Gentle, observant, and asking the questions that change everything.',
      traits: [
        { label: 'Nature Whisperer', cls: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
        { label: 'Quiet Observer', cls: 'bg-teal-50 text-teal-800 border-teal-200' },
        { label: 'Pure Empathy', cls: 'bg-amber-50 text-amber-800 border-amber-200' },
      ],
      cardHover: 'hover:border-[#D97706]/70 hover:shadow-[0_32px_64px_rgba(217,119,6,0.20)]',
      btnHover: 'group-hover/card:bg-[#D97706]',
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0]">

      {/* ═══ SECTION 1 · MAGICAL HEADER + FILTERS ═══════════════════════ */}
      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[380px] opacity-55"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #EDD89A44 0%, transparent 75%)' }} />
        <span aria-hidden className="pointer-events-none absolute top-32 left-[9%] text-[#C7A451] text-lg opacity-65 animate-pulse">✦</span>
        <span aria-hidden className="pointer-events-none absolute top-28 right-[7%] text-[#E5C158] text-sm opacity-55 animate-pulse" style={{ animationDelay: '0.8s' }}>✨</span>
        <span aria-hidden className="pointer-events-none absolute bottom-8 left-[5%] text-[#0284C7] text-xs opacity-35 animate-pulse" style={{ animationDelay: '1.5s' }}>✧</span>
        <span aria-hidden className="pointer-events-none absolute bottom-6 right-[4%] text-[#C7A451] text-base opacity-50 animate-pulse" style={{ animationDelay: '0.4s' }}>✦</span>

        <Container className="flex flex-col items-center text-center gap-5 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/40 shadow-sm text-[#C7A451] text-[11px] font-black uppercase tracking-[0.22em] hover:border-[#C7A451] hover:scale-[1.02] transition-all">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Original Zanarra Creations</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-bold text-[#17233A] tracking-tight leading-[1.06] max-w-3xl"
            style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}>
            The Character Directory
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#17233A]/80 max-w-2xl leading-relaxed font-sans">
            Step into the wondrous worlds of Zanarra's legendary trio. Meet the curious friends
            who turn every discovery into pure magic.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DEC9] shadow-sm shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#C7A451] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C7A451]">Explore by Trait</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-white border border-[#E8DEC9] shadow-sm">
              {filterOptions.map((f) => {
                const isActive = activeFilter === f;
                const count = f === 'All' ? CHARACTERS.length : CHARACTERS.filter(c => c.category === f).length;
                return (
                  <button key={f} onClick={() => setActiveFilter(f)}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                      isActive ? 'bg-[#17233A] text-white shadow-sm' : 'text-[#17233A]/70 hover:text-[#17233A] hover:bg-[#FAF7F0]'
                    }`}>
                    <span>{f === 'All' ? 'All Characters' : f}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black leading-none ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#F0EAD9] text-[#17233A]/60'
                    }`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ SECTION 2 · CHARACTER CARDS GRID ═══════════════════════════ */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredCharacters.map((char) => {
              const cfg = charConfig[char.id] ?? charConfig.momo;
              return (
                <article key={char.id} id={char.id} onClick={() => setModalCharacter(char)}
                  className={`group/card relative rounded-[2rem] bg-white border border-[#E8DEC9] shadow-[0_8px_32px_rgba(23,36,59,0.06)] ${cfg.cardHover} hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col overflow-hidden cursor-pointer`}>
                  {/* Artwork */}
                  <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden bg-[#EEE8DA]">
                    <img src={cfg.img} alt={cfg.alt}
                      className="w-full h-full object-cover object-[center_10%] group-hover/card:scale-105 transition-transform duration-700 ease-out"
                      loading="eager" decoding="async" />
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 50% 30%, ${char.accentColor} 0%, transparent 70%)` }} />
                    {/* Top labels */}
                    <div className="absolute top-4 inset-x-4 z-10 flex items-start justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17233A]/80 backdrop-blur-md border border-white/15 text-[12px] font-semibold text-white shadow-md leading-none whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full shrink-0 ring-2 ring-white/25" style={{ backgroundColor: char.accentColor }} />
                        {cfg.realm}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-[12px] font-bold text-[#17233A] shadow-md leading-none whitespace-nowrap">
                        Age {char.age}
                        <span className="w-1 h-1 rounded-full bg-[#C7A451]" />
                        <span className="text-[#C7A451] uppercase tracking-wider text-[10px] font-black">{char.category}</span>
                      </span>
                    </div>
                    {/* Scrim */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D1624]/90 via-[#0D1624]/45 to-transparent pointer-events-none" />
                    {/* Quote */}
                    <div className="absolute bottom-4 inset-x-4 z-10">
                      <div className="px-4 py-2.5 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 shadow-md">
                        <p className="font-serif italic text-white text-[13px] leading-snug text-center drop-shadow-sm">"{char.quote}"</p>
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6 sm:p-7 bg-gradient-to-b from-[#FDFAF5] to-white gap-4">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <h2 className="font-serif text-[1.7rem] sm:text-3xl font-bold text-[#17233A] tracking-tight leading-none group-hover/card:text-[#C7A451] transition-colors"
                        style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}>{char.name}</h2>
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C7A451] bg-[#C7A451]/10 px-2.5 py-1 rounded-full border border-[#C7A451]/25 whitespace-nowrap leading-none mt-1">
                        {cfg.archetype}
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold leading-snug" style={{ color: char.accentColor }}>
                      <span className="text-[#C7A451] mr-1.5">✦</span>{cfg.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cfg.traits.map(t => (
                        <span key={t.label} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold border ${t.cls}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />{t.label}
                        </span>
                      ))}
                    </div>
                    <p className="text-[13px] text-[#17233A]/80 leading-relaxed border-t border-[#EDE7D5] pt-4 flex-1">{char.description}</p>
                    {/* Pinned footer */}
                    <div className="space-y-3 border-t border-[#EDE7D5] pt-4 mt-auto">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#17233A]/45">Home Realms</span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {char.realms.map(rId => {
                            const rObj = REALMS.find(r => r.id === rId);
                            return rObj ? (
                              <span key={rId} className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white tracking-wide"
                                style={{ backgroundColor: rObj.accentColor }}>{rObj.name}</span>
                            ) : null;
                          })}
                        </div>
                      </div>
                      <button type="button" onClick={e => { e.stopPropagation(); setModalCharacter(char); }}
                        className={`w-full inline-flex items-center justify-center gap-2.5 py-3 sm:py-3.5 px-5 rounded-full bg-[#17233A] ${cfg.btnHover} text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 group/btn cursor-pointer`}>
                        <span>Meet {char.name}</span>
                        <ArrowRight className="w-4 h-4 text-[#C7A451] group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══ SECTION 3 · MEET CHIKU ══════════════════════════════════════ */}
      <section className="relative w-full bg-gradient-to-br from-[#F7F0E3] via-[#FAF7F0] to-[#F2ECD9] border-y border-[#C7A451]/20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[520px] h-[520px] bg-amber-200/18 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/14 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4" />
        <span aria-hidden className="pointer-events-none absolute top-8 right-14 text-amber-400 text-sm opacity-50 animate-pulse">✦</span>
        <span aria-hidden className="pointer-events-none absolute bottom-10 left-12 text-emerald-500 text-xs opacity-40 animate-pulse" style={{ animationDelay: '1.2s' }}>✨</span>

        <Container className="py-14 sm:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Chiku illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group w-full max-w-[480px] lg:max-w-none">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-amber-50">
                  <img src="/chiku-forest-showcase.jpg" alt="Chiku the Adventure Pup in an enchanted sunlit forest with floating lanterns"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager" decoding="async" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 via-black/18 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[12px] font-semibold text-white shadow-md leading-none">
                      <span className="text-amber-400">✦</span>Zanarra's Loyal Companion
                    </span>
                  </div>
                  <div className="absolute bottom-4 inset-x-4 z-10">
                    <div className="px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform">
                      <span className="text-lg">🐾</span>
                      <span className="font-serif font-bold text-[#17233A] text-sm sm:text-base tracking-wide">Chiku · The Heart of the Trail</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-[2.5rem] bg-amber-400/16 group-hover:bg-amber-400/28 blur-2xl pointer-events-none -z-10 transition-all duration-500" />
              </div>
            </div>

            {/* Right: Story + feature cards */}
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/40 text-amber-950 text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                Everyone's Favorite Four-Legged Explorer
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#17233A] tracking-tight leading-[1.1]"
                style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}>
                Meet Chiku —<br className="hidden sm:block" /> The Heart of the Trail
              </h2>
              <p className="text-[15px] sm:text-base text-[#17233A]/85 leading-relaxed">
                No great adventure is complete without a faithful companion. Chiku has a sixth sense for hidden portals,
                can detect backward river waves before they appear, and ensures Momo never wanders off without his snack pouch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  { icon: '🧭', iconBg: 'bg-amber-50 border-amber-200 text-amber-800', label: 'Special Skill', labelCls: 'text-[#C7A451]', hov: 'hover:border-[#C7A451]', title: 'Sniffing out ancient riddles', body: 'Finds hidden puzzle stones before anyone else.' },
                  { icon: '🍯', iconBg: 'bg-orange-50 border-orange-200 text-orange-800', label: 'Favourite Treat', labelCls: 'text-orange-700', hov: 'hover:border-orange-400', title: 'Honey-dipped seed biscuits', body: "Always safely packed in Momo's satchel." },
                  { icon: '⚙️', iconBg: 'bg-sky-50 border-sky-200 text-sky-800', label: 'Best Trick', labelCls: 'text-sky-700', hov: 'hover:border-sky-400', title: "Catching Tobo's flying gears", body: 'Mid-air somersault before the gear hits water.' },
                ].map(f => (
                  <div key={f.label} className={`flex flex-col gap-2.5 p-4 rounded-2xl bg-white border-2 border-[#E8DEC9] ${f.hov} shadow-sm hover:shadow-md transition-all duration-300 group/feat`}>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg shadow-sm group-hover/feat:scale-110 transition-transform ${f.iconBg}`}>{f.icon}</div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${f.labelCls}`}>{f.label}</span>
                    <span className="font-serif text-[15px] font-bold text-[#17233A] leading-snug">{f.title}</span>
                    <span className="text-[12px] font-medium text-[#17233A]/75 leading-relaxed">{f.body}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-[#E8DEC9] shadow-sm">
                <span className="text-2xl shrink-0 mt-0.5">🐾</span>
                <p className="font-serif italic text-[13px] sm:text-sm text-[#17233A]/88 leading-snug">
                  "Whenever the map gets confusing, Chiku's soft bark and wagging tail point toward the genuine way forward."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ SECTION 4 · THREE FRIENDS ══════════════════════════════════ */}
      <section className="relative w-full bg-white overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[480px] opacity-35"
          style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 0%, #FCEEBB44 0%, #EAF4FF33 55%, transparent 100%)' }} />
        <Container className="py-16 sm:py-20 lg:py-24 relative z-10">
          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#C7A451]/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C7A451] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#C7A451]">Synergy &amp; Problem Solving</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#17233A] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}>
              Three friends. Three different<br className="hidden sm:block" /> ways of seeing the world.
            </h2>
            <p className="text-[14px] sm:text-base text-[#17233A]/80 leading-relaxed">
              Only together — Momo's courage, Tobo's ingenuity, and Dodi's simple wisdom — do impossible mysteries get solved.
            </p>
          </div>

          {/* Three synergy cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[
              {
                id: 'momo', img: '/showcase-momo-adventurer.jpg',
                alt: "Momo's Courage — standing tall with his glowing compass",
                cardCls: 'from-rose-50/60 via-white to-amber-50/30 border-rose-200/70 hover:border-rose-400 hover:shadow-[0_24px_52px_rgba(224,122,95,0.20)]',
                imgBg: 'bg-rose-50', hoverBtn: 'group-hover/sc:bg-[#E07A5F]',
                quote: '"If there\'s no path yet, we make one!"',
                badge: { icon: '🧭', label: 'The Catalyst' },
                heading: "Momo's Courage", headHov: 'group-hover/sc:text-[#E07A5F]',
                pill: { label: 'Action', cls: 'text-rose-800 bg-rose-100 border-rose-200' },
                body: 'Provides the momentum. When everyone else hesitates on the riverbank, Momo dares to take the first step.',
                traits: [
                  { label: 'Bold Leadership', cls: 'bg-rose-50 text-rose-800 border-rose-200' },
                  { label: 'Infectious Faith', cls: 'bg-amber-50 text-amber-800 border-amber-200' },
                  { label: 'First to Leap', cls: 'bg-orange-50 text-orange-800 border-orange-200' },
                ],
                div: 'border-rose-100',
                role: { label: 'Role: Turns hesitation into motion', cls: 'bg-rose-50 border-rose-200/80 text-rose-900' },
                btnLabel: "Explore Momo's Story",
              },
              {
                id: 'tobo', img: '/showcase-tobo-inventor.jpg',
                alt: "Tobo's Inventions — in his Mechanika clockwork workshop",
                cardCls: 'from-sky-50/60 via-white to-indigo-50/30 border-sky-200/70 hover:border-sky-400 hover:shadow-[0_24px_52px_rgba(2,132,199,0.20)]',
                imgBg: 'bg-sky-50', hoverBtn: 'group-hover/sc:bg-[#0284C7]',
                quote: '"Every obstacle is just an unbuilt tool."',
                badge: { icon: '⚙️', label: 'The Mechanism' },
                heading: "Tobo's Inventions", headHov: 'group-hover/sc:text-[#0284C7]',
                pill: { label: 'Ingenuity', cls: 'text-sky-800 bg-sky-100 border-sky-200' },
                body: 'Provides the mechanism. When an obstacle cannot be climbed, Tobo gathers twigs, copper gears, and creates a pulley.',
                traits: [
                  { label: 'Lateral Solutions', cls: 'bg-sky-50 text-sky-800 border-sky-200' },
                  { label: 'Clockwork Crafting', cls: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
                  { label: 'Trial & Discovery', cls: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
                ],
                div: 'border-sky-100',
                role: { label: 'Role: Turns impossibility into engineering', cls: 'bg-sky-50 border-sky-200/80 text-sky-900' },
                btnLabel: "Discover Tobo's Inventions",
              },
              {
                id: 'dodi', img: '/showcase-dodi-explorer.jpg',
                alt: "Dodi's Wisdom — discovering the glowing starlight flower",
                cardCls: 'from-emerald-50/60 via-white to-teal-50/30 border-emerald-200/70 hover:border-emerald-400 hover:shadow-[0_24px_52px_rgba(5,150,105,0.20)]',
                imgBg: 'bg-emerald-50', hoverBtn: 'group-hover/sc:bg-[#059669]',
                quote: '"Par kyun? Maybe the door is waiting to be asked."',
                badge: { icon: '✨', label: 'The Wisdom' },
                heading: 'Dodi\'s "Par Kyun?"', headHov: 'group-hover/sc:text-[#059669]',
                pill: { label: 'Intuition', cls: 'text-emerald-800 bg-emerald-100 border-emerald-200' },
                body: "Provides the wisdom. When the older kids miss the obvious, Dodi asks why the gate was locked in the first place.",
                traits: [
                  { label: 'Quiet Observation', cls: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
                  { label: 'Empathic Truth', cls: 'bg-teal-50 text-teal-800 border-teal-200' },
                  { label: 'Nature Connector', cls: 'bg-amber-50 text-amber-800 border-amber-200' },
                ],
                div: 'border-emerald-100',
                role: { label: 'Role: Turns conflict into understanding', cls: 'bg-emerald-50 border-emerald-200/80 text-emerald-900' },
                btnLabel: "Step Into Dodi's Grove",
              },
            ].map(c => (
              <div key={c.id}
                onClick={() => { const ch = CHARACTERS.find(x => x.id === c.id); if (ch) setModalCharacter(ch); }}
                className={`group/sc rounded-[2rem] bg-gradient-to-b ${c.cardCls} border-2 shadow-[0_8px_28px_rgba(23,36,59,0.06)] hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer`}>
                {/* Illustration */}
                <div className={`relative aspect-[16/10] w-full overflow-hidden ${c.imgBg}`}>
                  <img src={c.img} alt={c.alt}
                    className="w-full h-full object-cover object-[center_12%] group-hover/sc:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/18 to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-[11px] font-bold text-[#17233A] shadow-md leading-none">
                      <span>{c.badge.icon}</span><span>{c.badge.label}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 inset-x-3.5 z-10">
                    <div className="px-3 py-1.5 rounded-xl bg-black/42 backdrop-blur-md border border-white/18 text-center">
                      <p className="font-serif italic text-white text-[12px] sm:text-[13px] leading-snug drop-shadow-md">{c.quote}</p>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3 className={`font-serif text-[1.3rem] font-bold text-[#17233A] tracking-tight ${c.headHov} transition-colors`}
                      style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}>{c.heading}</h3>
                    <span className={`text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border leading-none whitespace-nowrap mt-1 ${c.pill.cls}`}>{c.pill.label}</span>
                  </div>
                  <p className="text-[13px] font-medium text-[#17233A]/82 leading-relaxed">{c.body}</p>
                  <div className={`flex flex-wrap gap-1.5 pt-2.5 border-t ${c.div}`}>
                    {c.traits.map(t => (
                      <span key={t.label} className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${t.cls}`}>{t.label}</span>
                    ))}
                  </div>
                  <div className="space-y-2.5 mt-auto pt-3">
                    <div className={`py-2 px-3 rounded-xl border text-center ${c.role.cls}`}>
                      <span className="text-[11px] font-bold">{c.role.label}</span>
                    </div>
                    <button type="button"
                      className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#17233A] ${c.hoverBtn} text-white text-[13px] font-bold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group/btn`}>
                      <span>{c.btnLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C7A451] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ FINALE SECTION · MAGICAL STORYBOOK CTA (same as HomePage) ═════ */}
      <section className="relative w-full overflow-hidden bg-[#0B1224] border-t border-[#C7A451]/30 min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[720px] flex items-center">

        {/* Background: full-bleed cinematic panorama */}
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

          {/* Desktop: left-side darkness keeps headline readable */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(9, 14, 28, 0.88) 0%, rgba(9, 14, 28, 0.65) 24%, rgba(9, 14, 28, 0.15) 36%, transparent 48%)' }}
          />

          {/* Mobile: top-down gradient */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(9, 14, 28, 0.92) 0%, rgba(9, 14, 28, 0.70) 30%, rgba(9, 14, 28, 0.15) 50%, transparent 70%)' }}
          />

          {/* Warm horizon glow */}
          <div className="absolute top-1/2 left-[28%] -translate-y-1/2 w-96 h-96 rounded-full bg-[#E5B558]/15 blur-3xl pointer-events-none" />

          {/* Golden stardust road shimmer */}
          <div className="absolute bottom-6 left-[18%] sm:left-[24%] w-[38%] h-28 rounded-full bg-[#E5B558]/12 blur-2xl animate-pathway-pulse pointer-events-none" />

          {/* Twinkling stars */}
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

        {/* Foreground content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-center">
          <div className="w-full md:w-[48%] lg:w-[42%] xl:w-[38%] max-w-[460px] flex flex-col items-start text-left">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E172E]/70 border border-[#E5C158]/40 backdrop-blur-md shadow-sm mb-4 sm:mb-5">
              <span className="text-[#E5C158] text-xs leading-none">✦</span>
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

            {/* Subtext */}
            <p className="text-xs sm:text-[15px] lg:text-base text-[#FAF7F0]/90 leading-[1.65] font-sans max-w-sm sm:max-w-md mb-6 sm:mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Your next adventure is waiting. Discover the friends, stories, and magical worlds of Zanarra.
            </p>

            {/* CTAs */}
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
      </section>

      {/* Lore Modal */}
      <CharacterModal character={modalCharacter} isOpen={!!modalCharacter} onClose={() => setModalCharacter(null)} />
    </div>
  );
};
