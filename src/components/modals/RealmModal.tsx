import React from 'react';
import { Realm, CHARACTERS } from '../../data/brandData';
import { RealmVisual } from '../visuals/RealmVisual';
import { X, Sparkles, Compass, MapPin, ArrowRight, BookOpen, Music, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RealmModalProps {
  realm: Realm | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectCharacter?: (charId: string) => void;
}

export const RealmModal: React.FC<RealmModalProps> = ({
  realm,
  isOpen,
  onClose,
  onSelectCharacter
}) => {
  if (!isOpen || !realm) return null;

  // Extended realm lore
  const realmExtras: Record<string, {
    keyCreatures: string[];
    magicalPhenomenon: string;
    ambientSound: string;
    curiosityQuestion: string;
  }> = {
    'terra-viva': {
      keyCreatures: ['Seed-Otters with blossom pouches', 'Singing Canopy Owls', 'Giant Cedar Tortoises'],
      magicalPhenomenon: 'Luminous backward waterfalls that only flow upward when an adventurer asks a genuine question.',
      ambientSound: 'Rushing stream water, gentle rustling emerald leaves, and distant chime birds.',
      curiosityQuestion: 'Why do trees in the deep forest share their nutrients with the youngest saplings through hidden roots?'
    },
    'mechanika': {
      keyCreatures: ['Clockwork Dragonflies', 'Magnetic Gear-Beetles', 'Whistling Steam Badgers'],
      magicalPhenomenon: 'Kinetic bridges that form automatically when two travelers synchronize their footsteps.',
      ambientSound: 'Ticking brass chronometers, soft steam whistles, and harmonious copper bells.',
      curiosityQuestion: 'How can a tiny pendulum remember the rhythm of time without ever needing to stop?'
    },
    'mythara': {
      keyCreatures: ['Scroll-Spiders that weave oral history', 'Stone Sundial Hounds', 'Constellation Storks'],
      magicalPhenomenon: 'Ancient hieroglyphic temple walls that illuminate only when children tell the truth.',
      ambientSound: 'Resonant temple chimes, desert wind whisper, and acoustic oral chanting.',
      curiosityQuestion: 'Why do stories told around a fire thousands of years ago still make us feel brave today?'
    },
    'sonika': {
      keyCreatures: ['Choral Hummingbirds', 'Rhythm Dolphins in sound rivers', 'Bell-Flower Frogs'],
      magicalPhenomenon: 'Crystal geysers that spray water droplets tuned to exact pentatonic harmonies.',
      ambientSound: 'Gentle cello hums, reverberating crystalline echoes, and cheerful whistling reeds.',
      curiosityQuestion: 'How can a melody with no words at all tell you whether a character is happy or longing for home?'
    },
    'cosmara': {
      keyCreatures: ['Starlight Foxes with comet tails', 'Gravity-Whales navigating nebula belts', 'Pulsar Swifts'],
      magicalPhenomenon: 'Orbital timekeeper rings where night and morning swirl together like liquid gold and indigo ink.',
      ambientSound: 'Deep harmonic cosmic frequencies, celestial chime showers, and serene silence.',
      curiosityQuestion: 'If the light from distant stars took millions of years to reach us, are we looking at the past right now?'
    }
  };

  const extra = realmExtras[realm.id] || realmExtras['terra-viva'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#17233A]/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#C7A451]/30 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Realm Header */}
        <div 
          className="p-6 sm:p-8 border-b border-gray-100 relative"
          style={{ backgroundColor: realm.bgLight }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/90 hover:bg-white text-[#17233A] shadow-sm hover:scale-105 transition-all z-10"
            aria-label="Close realm details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Visual Tile */}
            <div className="w-36 h-28 sm:w-48 sm:h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border border-white">
              <RealmVisual id={realm.id} className="w-full h-full" />
            </div>

            {/* Title & Theme */}
            <div className="text-center sm:text-left flex-1 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 shadow-xs border" style={{ borderColor: realm.accentColor + '50', color: realm.textColor }}>
                <span>Realm 0{realm.number}</span>
                <span>•</span>
                <span>{realm.theme}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
                {realm.name}
              </h2>

              <p className="font-serif italic text-sm text-[#17233A]/80">
                "{realm.storyPromise}"
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-gray-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C7A451]" />
                <span>The Zanarra Multiverse</span>
              </div>
            </div>
          </div>
        </div>

        {/* Realm Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
          {/* Landscape and World Lore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A451] mb-1.5">
              Landscape & Environment
            </h4>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {realm.landscape}
            </p>
          </div>

          {/* Magical Phenomenon & Sound */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
              <div className="flex items-center gap-2 mb-1 text-xs font-bold uppercase text-[#C7A451]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Magical Discovery</span>
              </div>
              <p className="text-xs sm:text-sm text-[#17233A] leading-relaxed">
                {extra.magicalPhenomenon}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
              <div className="flex items-center gap-2 mb-1 text-xs font-bold uppercase text-[#C7A451]">
                <Music className="w-3.5 h-3.5" />
                <span>Ambient Soundscape</span>
              </div>
              <p className="text-xs sm:text-sm text-[#17233A] leading-relaxed">
                {extra.ambientSound}
              </p>
            </div>
          </div>

          {/* Big Curiosity Question */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
              The Question Children Ask Here
            </span>
            <p className="font-serif text-sm sm:text-base font-bold text-[#17233A] leading-snug">
              "{extra.curiosityQuestion}"
            </p>
          </div>

          {/* Key Inhabitants & Core Themes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Creatures & Inhabitants
              </h5>
              <ul className="space-y-1.5">
                {extra.keyCreatures.map((creature, idx) => (
                  <li key={idx} className="text-xs text-[#334155] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: realm.accentColor }} />
                    <span>{creature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Core Wonder Themes
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {realm.coreThemes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-[#17233A]"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Characters Exploring Here */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Frequent Explorers:
            </h5>
            <div className="flex flex-wrap gap-2">
              {realm.relatedCharacters.map((charId) => {
                const char = CHARACTERS.find(c => c.id === charId);
                if (!char) return null;
                return (
                  <button
                    key={charId}
                    onClick={() => {
                      onClose();
                      if (onSelectCharacter) onSelectCharacter(charId);
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-white border border-gray-200 hover:border-[#17233A] text-[#17233A] shadow-xs hover:scale-105 transition-all"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: char.accentColor }} />
                    <span>{char.name} ({char.title})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Realm Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF7F0] border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-500 font-medium">
            Format: Picture books, animated shorts & interactive inquiry kits
          </span>
          <Link
            to="/universe"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#17233A] text-white text-xs font-bold hover:bg-[#25395E] transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Explore in Full Universe Map</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
