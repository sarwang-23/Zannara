import React, { useState, useRef } from 'react';
import { REALMS, Realm, CHARACTERS } from '../../data/brandData';
import { REALM_ARTWORK } from './RealmVisual';
import { ArrowRight, BookOpen, Music, Compass, Sparkles, Globe2, Telescope, Leaf, Cog, Scroll, MapPin, Star } from 'lucide-react';

interface UniverseMapVisualProps {
  onSelectRealm?: (realm: Realm) => void;
  selectedRealmId?: string | null;
}

// Realm enrichment metadata
const REALM_META: Record<string, {
  icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  envLabel: string;
  realmEmoji: string;
}> = {
  'terra-viva': { icon: Leaf, envLabel: 'Ancient Botanical Canopy', realmEmoji: '🌿' },
  'mechanika':  { icon: Cog,  envLabel: 'Clockwork City of Invention', realmEmoji: '⚙️' },
  'mythara':    { icon: Scroll, envLabel: 'Ancient Ruins & Mystical Temples', realmEmoji: '🏛️' },
  'sonika':     { icon: Music, envLabel: 'Crystal Amphitheater & Sound Waves', realmEmoji: '🎵' },
  'cosmara':    { icon: Telescope, envLabel: 'Celestial Observatories & Nebulae', realmEmoji: '✨' },
};

// Character portrait images
const CHAR_PORTRAITS: Record<string, string> = {
  'momo': '/showcase-momo-adventurer.jpg',
  'tobo': '/showcase-tobo-inventor.jpg',
  'dodi': '/showcase-dodi-explorer.jpg',
};

// Format icon mapping
const FORMAT_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'Picture Books': BookOpen,
  'Interactive Explorers': Globe2,
  'Audio Soundscapes': Music,
  'Animated Shorts': Sparkles,
  'Makerspace Guides': Cog,
  'Episodic Engineering Quests': Compass,
  'Hands-on Activity Kits': Star,
  'Illustrated Storybooks': BookOpen,
  'Immersive Audio Dramas': Music,
  'Cultural Folklore Anthologies': Scroll,
  'Original Songs & Albums': Music,
  'Sing-along Animation': Sparkles,
  'Interactive Musical Apps': Globe2,
  'Sci-fi Animated Series': Telescope,
  'Planetarium Visuals': Star,
  'Augmented Reality Stargazing': Globe2,
};

export const UniverseMapVisual: React.FC<UniverseMapVisualProps> = ({
  onSelectRealm,
  selectedRealmId,
}) => {
  const [activeRealm, setActiveRealm] = useState<Realm>(
    REALMS.find(r => r.id === selectedRealmId) || REALMS[0]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRealmClick = (realm: Realm) => {
    if (realm.id === activeRealm?.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveRealm(realm);
      setIsTransitioning(false);
      if (onSelectRealm) onSelectRealm(realm);
    }, 220);
  };

  const art = REALM_ARTWORK[activeRealm.id];
  const meta = REALM_META[activeRealm.id];
  const IconComponent = meta?.icon || Compass;
  const relatedCharacters = (activeRealm.relatedCharacters || [])
    .map(id => CHARACTERS.find(c => c.id === id))
    .filter(Boolean) as typeof CHARACTERS;

  return (
    <div id="realms-explorer" className="w-full scroll-mt-24">

      {/* ── Section Header ──────────────────────────────────────────────────── */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E7] border border-[#EBDCC8] shadow-xs mb-3.5">
          <Compass className="w-3.5 h-3.5 text-[#C7A451]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A451]">
            The Living Multiverse
          </span>
        </div>
        <h2
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#17233A] tracking-tight leading-[1.14] mb-3"
          style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
        >
          The Five Connected Realms of Zanarra
        </h2>
        <p className="text-base sm:text-lg text-[#17233A]/70 font-sans leading-relaxed max-w-2xl mx-auto">
          Five extraordinary worlds. One interconnected universe. Select any realm to begin your journey.
        </p>
      </div>

      {/* ── Main Layout: Selector Strip + Cinematic Detail Panel ────────────── */}
      <div className="flex flex-col xl:flex-row gap-6 items-stretch">

        {/* LEFT: Illustrated Realm Selector Cards (Exactly matches panel height on desktop) */}
        <div className="xl:w-[320px] flex-shrink-0 flex xl:flex-col gap-3">
          {REALMS.map((realm) => {
            const isActive = activeRealm?.id === realm.id;
            const realmArt = REALM_ARTWORK[realm.id];
            const realmMeta = REALM_META[realm.id];
            const RealmIcon = realmMeta?.icon || Compass;

            return (
              <button
                key={realm.id}
                onClick={() => handleRealmClick(realm)}
                className="group relative flex-1 text-left rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  border: `2px solid ${isActive ? realm.accentColor : 'rgba(23,35,58,0.08)'}`,
                  boxShadow: isActive ? `0 8px 24px ${realm.accentColor}35` : '0 1px 4px rgba(23,35,58,0.04)',
                  backgroundColor: isActive ? 'transparent' : '#FAF7F0',
                }}
                aria-label={`Select ${realm.name} realm`}
              >
                {/* Background artwork */}
                <div className={`absolute inset-0 transition-opacity duration-400 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`}>
                  <picture>
                    <source srcSet={realmArt.webp} type="image/webp" />
                    <img
                      src={realmArt.image}
                      alt={realmArt.alt}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: realmArt.objectPosition }}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${realm.accentColor}D9 0%, rgba(11,18,36,0.75) 100%)`
                        : 'linear-gradient(135deg, rgba(23,35,58,0.72) 0%, rgba(23,35,58,0.25) 100%)'
                    }}
                  />
                </div>

                {/* Card content */}
                <div className="relative z-10 flex items-center gap-3.5 p-3.5 xl:p-4 h-full">
                  {/* Icon badge */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-2xs"
                    style={{
                      backgroundColor: isActive ? 'rgba(255,255,255,0.22)' : `${realm.accentColor}18`,
                      border: `1.5px solid ${isActive ? 'rgba(255,255,255,0.4)' : realm.accentColor + '40'}`,
                    }}
                  >
                    <RealmIcon
                      className="w-4 h-4 transition-colors"
                      style={{ color: isActive ? '#fff' : realm.accentColor }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.2em] transition-colors block leading-none mb-1"
                      style={{ color: isActive ? 'rgba(255,255,255,0.85)' : '#C7A451' }}
                    >
                      Realm 0{realm.number}
                    </span>
                    <h3
                      className="font-serif font-bold leading-tight text-sm xl:text-[0.95rem] truncate transition-colors"
                      style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        color: isActive ? '#FAF7F0' : '#17233A',
                      }}
                    >
                      {realm.name}
                    </h3>
                    <p
                      className="text-[10.5px] mt-0.5 truncate transition-colors"
                      style={{ color: isActive ? 'rgba(255,255,255,0.70)' : 'rgba(23,35,58,0.55)' }}
                    >
                      {realm.theme}
                    </p>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <div
                      className="flex-shrink-0 w-2 h-2 rounded-full animate-pulse shadow-sm"
                      style={{ backgroundColor: '#FAF7F0' }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT: Cinematic Realm Detail Panel ─────────────────────────────── */}
        <div
          className="flex-1 min-w-0 rounded-3xl overflow-hidden relative"
          style={{
            minHeight: '560px',
            border: `1.5px solid ${activeRealm.accentColor}40`,
            boxShadow: `0 16px 50px ${activeRealm.accentColor}18, 0 4px 20px rgba(23,35,58,0.12)`,
            transition: 'opacity 220ms ease, transform 220ms ease',
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'scale(0.99)' : 'scale(1)',
          }}
        >
          {/* Full-bleed realm artwork background */}
          <div className="absolute inset-0 z-0 bg-[#0B1224]">
            <picture>
              <source srcSet={art.webp} type="image/webp" />
              <img
                src={art.image}
                alt={art.alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: art.objectPosition }}
                loading="lazy"
                decoding="async"
              />
            </picture>

            {/* Cinematic gradient overlay — bottom-up dark to keep text legible */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top,
                  rgba(11,18,36,0.98) 0%,
                  rgba(11,18,36,0.88) 28%,
                  rgba(11,18,36,0.55) 50%,
                  rgba(11,18,36,0.12) 75%,
                  transparent 100%)`
              }}
            />

            {/* Realm-tinted left ambient wash */}
            <div
              className="absolute inset-y-0 left-0 w-[50%] pointer-events-none"
              style={{ background: `linear-gradient(to right, ${activeRealm.accentColor}1A 0%, transparent 100%)` }}
            />

            {/* Bottom-left ambient glow */}
            <div
              className="absolute -bottom-8 -left-8 w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ backgroundColor: activeRealm.accentColor, opacity: 0.22 }}
            />
          </div>

          {/* Giant number watermark */}
          <div
            className="absolute top-4 right-6 font-serif font-black opacity-[0.055] select-none pointer-events-none z-0 leading-none"
            style={{
              fontSize: 'clamp(72px, 10vw, 130px)',
              color: activeRealm.accentColor,
              fontFamily: "'DM Serif Display', Georgia, serif",
            }}
          >
            0{activeRealm.number}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 lg:p-9" style={{ minHeight: '540px' }}>

            {/* Header: icon + name + theme badge */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md shadow-2xs"
                    style={{
                      backgroundColor: `${activeRealm.accentColor}2E`,
                      border: `1.5px solid ${activeRealm.accentColor}55`,
                    }}
                  >
                    <IconComponent className="w-4 h-4" style={{ color: activeRealm.accentColor }} />
                  </div>
                  <span
                    className="text-[11px] font-black uppercase tracking-[0.22em]"
                    style={{ color: activeRealm.accentColor }}
                  >
                    Realm 0{activeRealm.number}
                  </span>
                </div>

                <h3
                  className="font-serif font-bold text-[#FAF7F0] leading-tight drop-shadow-md"
                  style={{
                    fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  }}
                >
                  {activeRealm.name}
                </h3>

                <span
                  className="text-[10.5px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block backdrop-blur-md"
                  style={{
                    color: activeRealm.accentColor,
                    backgroundColor: `${activeRealm.accentColor}1A`,
                    border: `1px solid ${activeRealm.accentColor}40`,
                  }}
                >
                  {activeRealm.theme}
                </span>
              </div>

              {/* Realm emoji badge */}
              <div
                className="hidden sm:flex w-14 h-14 rounded-2xl items-center justify-center text-2xl backdrop-blur-xl flex-shrink-0 border shadow-xs"
                style={{
                  backgroundColor: `${activeRealm.accentColor}1E`,
                  borderColor: `${activeRealm.accentColor}40`,
                }}
              >
                {meta?.realmEmoji}
              </div>
            </div>

            {/* Body content — pushed to bottom */}
            <div className="mt-auto pt-6 space-y-4">

              {/* Story Promise pull-quote */}
              <div
                className="rounded-2xl p-4 sm:p-5 backdrop-blur-md"
                style={{
                  background: `linear-gradient(135deg, ${activeRealm.accentColor}1E 0%, rgba(11,18,36,0.65) 100%)`,
                  border: `1px solid ${activeRealm.accentColor}35`,
                }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C7A451] block mb-1">✦ Story Promise</span>
                <p
                  className="font-serif italic text-[#FAF7F0] font-semibold leading-relaxed"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                    fontFamily: "'DM Serif Display', Georgia, serif",
                  }}
                >
                  "{activeRealm.storyPromise}"
                </p>
              </div>

              {/* Two-column: Environment + Themes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: activeRealm.accentColor }} />
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#C7A451]">Environment</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed font-sans">{activeRealm.landscape}</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: activeRealm.accentColor }} />
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#C7A451]">Core Themes</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRealm.coreThemes.map((theme, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full text-white/90 backdrop-blur-md"
                        style={{
                          backgroundColor: `${activeRealm.accentColor}25`,
                          border: `1px solid ${activeRealm.accentColor}45`,
                        }}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Adventures */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3 h-3 flex-shrink-0" style={{ color: activeRealm.accentColor }} />
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-white/45">Typical Adventures</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeRealm.adventureTypes.map((adv, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white/75 px-2.5 py-1 rounded-full bg-white/8 border border-white/12 backdrop-blur-md"
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: activeRealm.accentColor }} />
                      {adv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom row: Characters + Formats */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t"
                style={{ borderColor: `${activeRealm.accentColor}28` }}
              >
                {/* Characters with portrait images */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45 block">Lead Characters</span>
                  <div className="flex items-center gap-3">
                    {relatedCharacters.map((char) => {
                      const portraitSrc = CHAR_PORTRAITS[char.id];
                      return (
                        <div key={char.id} className="flex items-center gap-2">
                          <div
                            className="w-9 h-9 rounded-full overflow-hidden border-2 flex-shrink-0"
                            style={{ borderColor: char.accentColor }}
                          >
                            {portraitSrc ? (
                              <img
                                src={portraitSrc}
                                alt={char.name}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                                decoding="async"
                              />
                            ) : (
                              <div
                                className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                                style={{ backgroundColor: char.accentColor }}
                              >
                                {char.name[0]}
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white leading-none">{char.name}</p>
                            <p className="text-[9px] text-white/45 leading-none mt-0.5">{char.title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Content formats */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45 block sm:text-right">Content Formats</span>
                  <div className="flex flex-wrap sm:justify-end gap-1.5">
                    {activeRealm.storyFormats.slice(0, 3).map((format, i) => {
                      const FormatIcon = FORMAT_ICONS[format] || Sparkles;
                      return (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[9px] font-semibold text-white/65 px-2 py-1 rounded-full border border-white/12 backdrop-blur-sm"
                          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                        >
                          <FormatIcon className="w-2.5 h-2.5 flex-shrink-0" />
                          {format}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile horizontal scroll realm strip */}
      <div className="mt-5 xl:hidden">
        <p className="text-[10px] text-[#17233A]/35 font-bold text-center mb-2 uppercase tracking-widest">All five realms</p>
        <div className="flex gap-2.5 overflow-x-auto pb-3 snap-x snap-mandatory -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
          {REALMS.map((realm) => {
            const isActive = activeRealm?.id === realm.id;
            const realmArt = REALM_ARTWORK[realm.id];
            return (
              <button
                key={realm.id}
                onClick={() => handleRealmClick(realm)}
                className="flex-shrink-0 snap-center rounded-xl overflow-hidden relative cursor-pointer transition-all duration-300"
                style={{
                  width: '112px',
                  height: '68px',
                  border: `2px solid ${isActive ? realm.accentColor : 'transparent'}`,
                  boxShadow: isActive ? `0 4px 14px ${realm.accentColor}45` : 'none',
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <picture>
                  <source srcSet={realmArt.webp} type="image/webp" />
                  <img src={realmArt.image} alt={realm.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#17233A]/80 to-transparent" />
                <p className="absolute bottom-1.5 left-0 right-0 text-center text-white text-[10px] font-bold leading-none drop-shadow">
                  {realm.name}
                </p>
                {isActive && (
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: realm.accentColor }} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};