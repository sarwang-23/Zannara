import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STORIES_CATALOG, StoryItem, REALMS } from '../data/brandData';
import { LaunchInterestForm } from '../components/forms/LaunchInterestForm';
import {
  BookOpen,
  Sparkles,
  Eye,
  Clock,
  AlertCircle,
  X,
  Compass,
  ArrowRight,
  Music,
  Layers,
  Lightbulb,
  ArrowDown,
  Bookmark,
  Star,
} from 'lucide-react';

// ── 1. UNIQUE HIGH-RESOLUTION CHARACTER & STORY ARTWORK (NO REPEATS) ────
// Every single story card has its own dedicated, sharp, character-driven illustration
const STORY_ARTWORK: Record<
  string,
  {
    image: string;
    webp?: string;
    alt: string;
    objectPosition?: string;
    hook: string;
    actionLabel: string;
  }
> = {
  'story-1': {
    image: '/story-river-emerald.jpg',
    alt: 'Momo and playful animal friend navigating the enchanted glowing emerald river in Terra Viva',
    objectPosition: 'center 40%',
    hook: 'Can an emerald river really flow uphill toward the clouds?',
    actionLabel: 'Read Story Preview',
  },
  'story-2': {
    image: '/story-cloud-catcher.jpg',
    alt: 'Tobo on a clockwork rooftop in Mechanika flying a kinetic kite catching a glowing comet',
    objectPosition: 'center 35%',
    hook: 'What happens when an inventor’s kite brings down a humming comet?',
    actionLabel: 'Join the Quest',
  },
  'story-3': {
    image: '/story-whisper-temple.jpg',
    alt: 'Dodi looking in joyful wonder at floating illuminated scrolls in the ancient whisper temple of Mythara',
    objectPosition: 'center 30%',
    hook: 'Why do the ancient stone statues only smile when everyone goes quiet?',
    actionLabel: 'Read Folktale Arc',
  },
  'story-4': {
    image: '/story-raindance-geysers.jpg',
    alt: 'Momo and Dodi dancing by musical rainbow geysers in Sonika with musical notes',
    objectPosition: 'center center',
    hook: 'A monsoon rhythm so playful, even the river stones start tapping along!',
    actionLabel: 'Listen Melody Arc',
  },
  'story-5': {
    image: '/test-realm-cosmara.jpg',
    alt: 'Breathtaking celestial citadel and starlight observatory in Cosmara',
    objectPosition: 'center 35%',
    hook: 'When the north star flickers violet, three friends steer by questions.',
    actionLabel: 'Join Epic Journey',
  },
  'story-6': {
    image: '/collab-partners-storybook.jpg',
    webp: '/collab-partners-storybook.webp',
    alt: 'Giant illuminated open storybook-castle with children discovering wonders',
    objectPosition: 'center 30%',
    hook: 'The greatest tool in the universe isn’t a wrench—it’s asking “Why?”',
    actionLabel: 'Explore the Wonder',
  },
  'story-7': {
    image: '/showcase-tobo-inventor.jpg',
    alt: 'Tobo in his Mechanika workshop with clockwork gears and blueprints',
    objectPosition: 'center 22%',
    hook: 'Take a peek inside Tobo’s workshop full of kinetic gears and blueprints.',
    actionLabel: 'Peek Into Studio',
  },
  'story-8': {
    image: '/phase-04-books-merchandise.jpg',
    webp: '/phase-04-books-merchandise.webp',
    alt: 'Warm bedtime picture book and plush companion overlooking a starlit realm',
    objectPosition: 'center top',
    hook: 'A soothing acoustic flute lullaby to guide little dreamers to sleep.',
    actionLabel: 'Listen Bedtime Audio',
  },
};

// Category icon helper
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Short Stories':
      return <BookOpen className="w-3.5 h-3.5" />;
    case 'Songs & Music':
      return <Music className="w-3.5 h-3.5" />;
    case 'Adventures':
      return <Compass className="w-3.5 h-3.5" />;
    case 'Discover & Learn':
      return <Lightbulb className="w-3.5 h-3.5" />;
    case 'Behind the Worlds':
      return <Layers className="w-3.5 h-3.5" />;
    default:
      return <Sparkles className="w-3.5 h-3.5" />;
  }
};

// Character avatar badge helper
const getCharacterBadge = (id: string) => {
  switch (id.toLowerCase()) {
    case 'momo':
      return { name: 'Momo', bg: 'bg-[#FFF2EF]', border: 'border-[#F2A18B]', dot: 'bg-[#E26D5C]', text: 'text-[#9C3E32]' };
    case 'tobo':
      return { name: 'Tobo', bg: 'bg-[#FEF7EC]', border: 'border-[#B45309]/30', dot: 'bg-[#D97706]', text: 'text-[#7D3804]' };
    case 'dodi':
      return { name: 'Dodi', bg: 'bg-[#F9F5FF]', border: 'border-[#7C3AED]/30', dot: 'bg-[#9333EA]', text: 'text-[#581C87]' };
    default:
      return { name: id, bg: 'bg-white', border: 'border-gray-200', dot: 'bg-gray-400', text: 'text-gray-700' };
  }
};

// Status badge styling helper
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Pilot Stage':
      return {
        bg: 'bg-indigo-600/90 text-white border-indigo-400/30',
        dot: 'bg-indigo-300',
      };
    case 'Concept Arc':
      return {
        bg: 'bg-purple-600/90 text-white border-purple-400/30',
        dot: 'bg-purple-300',
      };
    case 'Coming Soon':
      return {
        bg: 'bg-teal-700/90 text-white border-teal-400/30',
        dot: 'bg-teal-300',
      };
    case 'In Development':
    default:
      return {
        bg: 'bg-[#9D762B]/95 text-white border-amber-300/30',
        dot: 'bg-amber-200',
      };
  }
};

export const StoriesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const categories = [
    'All',
    'Short Stories',
    'Songs & Music',
    'Adventures',
    'Discover & Learn',
    'Behind the Worlds',
  ] as const;

  const filteredStories =
    activeCategory === 'All'
      ? STORIES_CATALOG
      : STORIES_CATALOG.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#FAF7F0] min-h-screen text-[#17233A]">
      {/* ── MAIN CONTENT CONTAINER (Matched precisely to Global Max-Width 1240px Grid) ── */}
      <div className="pt-6 sm:pt-8 pb-16 sm:pb-20 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── 1. COMPACT MAGICAL STORYBOOK HERO ───────────────────────── */}
        <section className="relative w-full rounded-3xl bg-gradient-to-r from-white/95 via-[#FAF5EC]/95 to-[#F4ECE0]/95 border border-[#EBDCC8] shadow-[0_4px_24px_rgba(23,35,58,0.06)] p-6 sm:p-8 lg:p-9 mb-7 sm:mb-8 overflow-hidden">
          {/* Subtle magical ambient glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#C7A451]/12 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-8 w-72 h-72 rounded-full bg-[#F4DE9C]/18 blur-2xl pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A451]/75 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Left Column: Heading, Subtitle & Exploration CTA */}
            <div className="flex-1 text-center lg:text-left space-y-3.5 max-w-2xl">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C7A451]/40 shadow-2xs text-[#9D762B] text-xs font-bold uppercase tracking-[0.24em]">
                <BookOpen className="w-3.5 h-3.5 text-[#C7A451]" />
                <span>The Story Vault</span>
                <span className="text-[#C7A451] text-[9px]">✦</span>
              </div>

              {/* Master Heading */}
              <h1
                className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#17233A] leading-[1.16] tracking-tight"
                style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                Little stories. Big possibilities.
              </h1>

              {/* Storytelling Subtitle */}
              <p className="text-sm sm:text-[15px] text-[#17233A]/80 leading-relaxed font-sans max-w-xl">
                Step into five living realms where curious minds solve runaway gears, reverse enchanted rivers, and map starlight constellations with Momo, Tobo, and Dodi.
              </p>

              {/* Exploration Trigger Button + Realm Guide Pills */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#story-catalog"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#17233A] hover:bg-[#233553] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group shrink-0"
                >
                  <span>Explore Stories</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#E5C378] group-hover:translate-y-0.5 transition-transform" />
                </a>

                {/* Five Realms Guide Pills */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                  {REALMS.map((r) => (
                    <span
                      key={r.id}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold shadow-2xs"
                      style={{ backgroundColor: r.bgLight, color: r.textColor }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: r.accentColor }} />
                      <span>{r.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Whimsical Glowing Storybook Illustration Portal */}
            <div className="w-full sm:w-[360px] lg:w-[380px] xl:w-[410px] mx-auto lg:mx-0 shrink-0">
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#9B7528]/50 via-[#F4DE9C]/80 to-[#BF9738]/50 shadow-[0_8px_28px_rgba(23,35,58,0.12),0_1px_4px_rgba(199,164,81,0.3)] group transition-all duration-300 hover:shadow-[0_12px_36px_rgba(199,164,81,0.4)]">
                <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[230px] rounded-[14.5px] overflow-hidden bg-gradient-to-b from-[#FAF4E8] to-[#EFE4D2]">
                  <img
                    src="/stories-hero-storybook.jpg"
                    alt="Magical open glowing storybook pouring stardust into the living world with young heroes leaping out"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Atmospheric vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17233A]/65 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Storybook Badge */}
                  <div className="absolute bottom-3 inset-x-3.5 flex items-center justify-between text-white drop-shadow-md">
                    <span className="text-[11.5px] font-bold tracking-wide flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F4DE9C]" />
                      <span>Living Storybook Portal</span>
                    </span>
                    <span className="text-[9.5px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[#17233A]/85 backdrop-blur-sm border border-white/20 text-[#E5C378]">
                      Original Universe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PRODUCTION SHOWCASE NOTICE BANNER ──────────────────── */}
        <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#FAF3E6] border border-[#E8DEC9] text-xs text-[#7A5B1C] shadow-2xs mb-7 sm:mb-8">
          <div className="w-6 h-6 rounded-full bg-[#C7A451]/15 flex items-center justify-center shrink-0">
            <AlertCircle className="w-4 h-4 text-[#9D762B]" />
          </div>
          <p className="leading-relaxed">
            <strong className="text-[#17233A] font-bold">Production Showcase Notice:</strong> The titles below represent active pipeline projects and pilot concepts. All releases are marked with their current development status.
          </p>
        </div>

        {/* ── 3. CATEGORY PILL FILTERS ──────────────────────────────── */}
        <section
          id="story-catalog"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 scroll-mt-28"
          aria-label="Story categories"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? STORIES_CATALOG.length
                : STORIES_CATALOG.filter((s) => s.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[38px] rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#17233A] text-white shadow-[0_2px_10px_rgba(23,35,58,0.22)] scale-[1.02]'
                    : 'bg-white hover:bg-[#F5EFE4] text-[#17233A]/80 hover:text-[#17233A] border border-[#E6DAC8] shadow-2xs'
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold leading-none inline-flex items-center justify-center ${
                    isActive
                      ? 'bg-white/20 text-[#E5C378]'
                      : 'bg-[#F2EBDD] text-[#17233A]/70'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </section>

        {/* ── 4. STORY AND EXPERIENCE CARDS GRID (PERFECT SYMMETRY & ZERO TRUNCATION) ── */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6.5 mb-14 sm:mb-16"
          aria-label="Story cards discovery catalog"
        >
          {filteredStories.map((story) => {
            const realm = REALMS.find((r) => r.id === story.realmId);
            const artwork = STORY_ARTWORK[story.id] || {
              image: '/story-river-emerald.jpg',
              alt: story.title,
              hook: 'Step into an unforgettable adventure.',
              actionLabel: 'Read Preview',
            };
            const statusStyle = getStatusBadge(story.status);

            return (
              <article
                key={story.id}
                className="bg-white rounded-3xl border border-[#EBDCC8]/90 shadow-[0_2px_14px_rgba(23,35,58,0.06)] hover:shadow-[0_16px_40px_rgba(199,164,81,0.22)] hover:border-[#C7A451]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full"
              >
                <div>
                  {/* Visual Artwork Thumbnail (Strictly 16:9 Cinematic Ratio) */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#17233A]/5">
                    <picture>
                      {artwork.webp && <source srcSet={artwork.webp} type="image/webp" />}
                      <img
                        src={artwork.image}
                        alt={artwork.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        style={{ objectPosition: artwork.objectPosition || 'center center' }}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>

                    {/* Ambient vignette gradient for readable overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

                    {/* Category Pill (Top Left) */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#17233A]/85 backdrop-blur-md text-[#FAF7F0] border border-white/20 shadow-xs leading-none">
                        {getCategoryIcon(story.category)}
                        <span>{story.category}</span>
                      </span>
                    </div>

                    {/* Status Badge (Top Right) */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-xs border leading-none ${statusStyle.bg}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                        <span>{story.status}</span>
                      </span>
                    </div>

                    {/* Realm Tag (Bottom Left Overlay) */}
                    {realm && (
                      <div className="absolute bottom-2.5 left-2.5 z-10">
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-2xs backdrop-blur-sm leading-none"
                          style={{
                            backgroundColor: realm.bgLight,
                            color: realm.textColor,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: realm.accentColor }}
                          />
                          <span>{realm.name}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body — Strictly Aligned Heights, Full Text Visibility */}
                  <div className="p-5 sm:p-5.5 space-y-2.5">
                    {/* Whimsical Story Hook / Wonder Question (Consistent Min-Height) */}
                    <div className="min-h-[32px] flex items-start">
                      <p className="text-[11.5px] font-serif italic text-[#9D762B] leading-snug flex items-start gap-1">
                        <span className="text-[#C7A451] not-italic text-[10px] mt-0.5">“</span>
                        <span>{artwork.hook}</span>
                      </p>
                    </div>

                    {/* Story Title with Baseline Alignment (Strict Min-Height) */}
                    <div className="min-h-[48px] flex items-start">
                      <h3
                        className="font-serif text-[17.5px] sm:text-[18px] font-bold text-[#17233A] leading-[1.28] group-hover:text-[#9D762B] transition-colors duration-200"
                        style={{
                          fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        {story.title}
                      </h3>
                    </div>

                    {/* Story Description with Complete Sentence Visibility (No Cutoff / No Ellipsis) */}
                    <div className="min-h-[78px] sm:min-h-[82px] flex items-start">
                      <p className="text-[12.5px] text-[#1E293B] leading-[1.6]">
                        {story.description}
                      </p>
                    </div>

                    {/* Featured Character Avatar Badges (Consistent Min-Height) */}
                    <div className="min-h-[26px] flex flex-wrap items-center gap-1.5 pt-0.5">
                      {story.characterIds.map((charId) => {
                        const char = getCharacterBadge(charId);
                        return (
                          <span
                            key={charId}
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border leading-none ${char.bg} ${char.border} ${char.text}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${char.dot}`} />
                            <span>{char.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Meta & Unified Bottom CTA Button (Pinned to Bottom) */}
                <div className="px-5 sm:px-5.5 pb-5 pt-3.5 border-t border-[#F0E6D6]/80 mt-auto space-y-2.5">
                  {/* Clean Non-Truncated Format Row */}
                  <div className="min-h-[24px] flex items-center justify-between text-[11px]">
                    <span className="text-[#17233A]/65 font-medium flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-[#C7A451]" />
                      <span>Format:</span>
                    </span>
                    <span className="font-bold text-[#17233A] bg-[#FAF5EB] px-2 py-0.5 rounded-md border border-[#E8DEC9]">
                      {story.contentType}
                    </span>
                  </div>

                  {/* Duration Row */}
                  <div className="min-h-[22px] flex items-center justify-between text-[11px]">
                    <span className="text-[#17233A]/65 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C7A451]" />
                      <span>Duration:</span>
                    </span>
                    <span className="font-bold text-[#17233A]">
                      {story.durationOrLength}
                    </span>
                  </div>

                  {/* Full-Width Aligned Action Button */}
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="w-full h-[38px] flex items-center justify-center gap-2 px-4 rounded-full bg-[#17233A] hover:bg-[#233554] text-white font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer group/btn"
                    aria-label={`View overview of ${story.title}`}
                  >
                    <span>{artwork.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5C378] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        {/* ── 5. VISUAL STORYBOOK BRIDGE & EARLY ACCESS CIRCLE ────────── */}
        <section className="mb-0">
          {/* Centered Transition Heading */}
          <div className="text-center max-w-xl mx-auto mb-7 sm:mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#9D762B]">
              <span className="w-6 h-px bg-[#C7A451]/50" />
              <span>A Story Is Only The Beginning</span>
              <span className="w-6 h-px bg-[#C7A451]/50" />
            </div>
            <h2
              className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A] leading-tight"
              style={{ fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              Ready to bring these stories home to your family?
            </h2>
            <p className="text-xs sm:text-sm text-[#17233A]/70 leading-relaxed">
              Join parents, educators, and story lovers in our Early Access Circle.
            </p>
          </div>

          {/* Form */}
          <LaunchInterestForm />
        </section>

      </div>

      {/* ═══ FINALE SECTION · MAGICAL STORYBOOK CTA (same as HomePage) ═════ */}
      <section className="relative w-full overflow-hidden bg-[#0B1224] border-t border-[#C7A451]/30 min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[720px] flex items-center">
        
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

        {/* Foreground Storybook Content: Aligned inside max-w-7xl global grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-center">
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
      </section>

      {/* ── STORY DETAIL MODAL (ENCHANTED STORYBOOK PREVIEW) ────────── */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E1C]/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedStory(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#FFFDF9] border border-[#C7A451]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white hover:bg-gray-100 border border-[#EBDCC8] flex items-center justify-center text-gray-500 hover:text-[#17233A] transition-all cursor-pointer shadow-xs"
              aria-label="Close story preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Category & Status Header */}
            <div className="flex items-center gap-2 mb-2 pr-10">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#9D762B] flex items-center gap-1.5">
                {getCategoryIcon(selectedStory.category)}
                <span>{selectedStory.category}</span>
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-[10.5px] font-bold text-[#17233A]/70">
                {selectedStory.status}
              </span>
            </div>

            {/* Modal Title */}
            <h3
              className="font-serif text-2xl font-bold text-[#17233A] leading-snug"
              style={{
                fontFamily: "'DM Serif Display', 'Cormorant Garamond', Georgia, serif",
              }}
            >
              {selectedStory.title}
            </h3>

            {/* Modal High-Res Visual Thumbnail */}
            <div className="relative w-full h-48 my-4 rounded-2xl overflow-hidden border border-[#EBDCC8] shadow-inner bg-[#17233A]/5">
              {(() => {
                const modalArt = STORY_ARTWORK[selectedStory.id] || {
                  image: '/story-river-emerald.jpg',
                  alt: selectedStory.title,
                };
                return (
                  <picture>
                    {modalArt.webp && <source srcSet={modalArt.webp} type="image/webp" />}
                    <img
                      src={modalArt.image}
                      alt={modalArt.alt}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: modalArt.objectPosition || 'center center' }}
                    />
                  </picture>
                );
              })()}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17233A]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold drop-shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F4DE9C]" />
                <span>
                  {REALMS.find((r) => r.id === selectedStory.realmId)?.name || 'Zanarra Universe'}
                </span>
              </div>
            </div>

            {/* Modal Story Description */}
            <p className="text-sm text-[#17233A]/80 leading-relaxed font-sans">
              {selectedStory.description}
            </p>

            {/* Detailed Meta Box */}
            <div className="mt-5 p-4 bg-[#FAF5EB] rounded-2xl border border-[#E8DEC9] text-xs space-y-2 shadow-2xs">
              <div className="flex justify-between items-center py-0.5">
                <span className="text-[#17233A]/60 font-medium">Target Content Type:</span>
                <span className="font-bold text-[#17233A]">{selectedStory.contentType}</span>
              </div>
              <div className="flex justify-between items-center py-0.5 border-t border-[#E8DEC9]/60">
                <span className="text-[#17233A]/60 font-medium">Estimated Duration:</span>
                <span className="font-bold text-[#17233A] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C7A451]" />
                  <span>{selectedStory.durationOrLength}</span>
                </span>
              </div>
              <div className="flex justify-between items-center py-0.5 border-t border-[#E8DEC9]/60">
                <span className="text-[#17233A]/60 font-medium">Featured Characters:</span>
                <span className="font-bold text-[#9D762B] tracking-wide">
                  {selectedStory.characterIds
                    .map((id) => id.charAt(0).toUpperCase() + id.slice(1))
                    .join(' · ')}
                </span>
              </div>
            </div>

            {/* Close CTA */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedStory(null)}
                className="px-6 py-2.5 rounded-full bg-[#17233A] hover:bg-[#233553] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
