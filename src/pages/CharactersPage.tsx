import React, { useState } from 'react';
import { CHARACTERS, Character, REALMS } from '../data/brandData';
import { CharacterVisual } from '../components/visuals/CharacterVisual';
import { CharacterModal } from '../components/modals/CharacterModal';
import { Sparkles, Compass, Lightbulb, Users, Heart, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CharactersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Curious Minds' | 'Inventors' | 'Adventurers'>('All');
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(CHARACTERS[0]);
  const [modalCharacter, setModalCharacter] = useState<Character | null>(null);

  const filterOptions = ['All', 'Adventurers', 'Inventors', 'Curious Minds'] as const;

  const filteredCharacters = activeFilter === 'All'
    ? CHARACTERS
    : CHARACTERS.filter(c => c.category === activeFilter);

  // Character deep dive extra structured details
  const extendedDetails: Record<string, {
    strengths: string[];
    quirks: string;
    relatable: string;
  }> = {
    momo: {
      strengths: ['Unshakable courage', 'Infectious optimism', 'Loyalty to friends', 'Quick physical agility'],
      quirks: 'Announces dramatic names for simple plans and frequently jumps into puddles before checking how deep they are.',
      relatable: 'Every child who has ever run forward shouting "Watch this!" with high hopes and a bruised knee.'
    },
    tobo: {
      strengths: ['Lateral problem-solving', 'Mechanical improvisation', 'Encyclopedic curiosity', 'Persistent iterative trial'],
      quirks: 'Pushes his round spectacles up his nose every 10 seconds and keeps at least four different gears in his jacket pockets.',
      relatable: 'Every kid who loves taking things apart, tinkering, and accidentally turning the living room into a laboratory.'
    },
    dodi: {
      strengths: ['Quiet observation', 'Unbiased questions', 'Empathic intuition', 'Finding hidden patterns'],
      quirks: 'Always stops at the exact moment everyone else is rushing ahead to inspect an interesting leaf or humming pebble.',
      relatable: 'Every toddler and young child whose simple "par kyun?" uncovers the truth adults and older kids overlook.'
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Original Zanarra Creations
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          The Character Directory
        </h1>

        <p className="text-base sm:text-lg text-[#17233A]/80 max-w-2xl mx-auto leading-relaxed">
          Meet the trio whose boundless spirit, mishaps, and heartwarming friendship bring the universe to life.
        </p>
      </section>

      {/* Working Filters */}
      <section className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-[#C7A451]/20 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Filter By Trait:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === f
                  ? 'bg-[#17233A] text-white shadow-md scale-105'
                  : 'bg-white hover:bg-[#F2EBDD] text-[#17233A] border border-gray-200'
              }`}
            >
              {f === 'All' ? 'All Characters' : f}
            </button>
          ))}
        </div>
      </section>

      {/* Character Profiles Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredCharacters.map((char) => {
          const extra = extendedDetails[char.id] || { strengths: [], quirks: '', relatable: '' };
          return (
            <div
              key={char.id}
              id={char.id}
              className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-[#17233A]"
                    style={{ backgroundColor: char.bgLight }}
                  >
                    {char.category}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    Age {char.age} Years
                  </span>
                </div>

                {/* Big Character Visual */}
                <div className="py-6 flex justify-center">
                  <CharacterVisual id={char.id} size="lg" showBadge={false} />
                </div>

                {/* Name & Title */}
                <div className="text-center">
                  <h2 className="font-serif text-3xl font-bold text-[#17233A]">
                    {char.name}
                  </h2>
                  <span className="text-xs font-bold text-[#C7A451] uppercase tracking-wider block mt-0.5">
                    {char.title}
                  </span>
                  <p className="font-serif italic text-sm text-[#17233A]/80 mt-2 bg-[#FAF7F0] p-2 rounded-xl">
                    {char.quote}
                  </p>
                </div>

                {/* Personality & Description */}
                <div className="mt-5 space-y-3 text-xs sm:text-sm text-[#17233A]/85">
                  <p>
                    <strong>Personality:</strong> {char.personality}
                  </p>
                  <p className="text-xs text-[#17233A]/75 leading-relaxed">
                    {char.description}
                  </p>
                </div>

                {/* Structured Profile Attributes */}
                <div className="mt-6 pt-5 border-t border-gray-100 space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-[#17233A] block mb-1">Key Strengths:</span>
                    <div className="flex flex-wrap gap-1">
                      {extra.strengths.map((str, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-[#FAF7F0] border border-gray-200 rounded text-[11px] text-[#17233A]">
                          ✓ {str}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-[#17233A] block">Funny Quirks:</span>
                    <p className="text-[#17233A]/75 text-[11px] leading-relaxed">
                      {extra.quirks}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#17233A] block">Why Children Relate:</span>
                    <p className="text-[#17233A]/75 text-[11px] leading-relaxed">
                      {extra.relatable}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#17233A] block">Role in the Group:</span>
                    <p className="text-[#17233A]/75 text-[11px] leading-relaxed">
                      {char.roleInGroup}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#17233A] block">Signature Story Premise:</span>
                    <p className="text-[#17233A]/75 text-[11px] italic leading-relaxed">
                      "{char.examplePremise}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Realm Connections */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Realms</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    {char.realms.map((rId) => {
                      const rObj = REALMS.find(r => r.id === rId);
                      return rObj ? (
                        <span
                          key={rId}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: rObj.accentColor }}
                        >
                          {rObj.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalCharacter(char)}
                    className="px-3.5 py-1.5 rounded-full bg-[#17233A] text-white hover:bg-[#25395E] transition-all text-xs font-bold flex items-center gap-1 shadow-xs"
                  >
                    <Sparkles className="w-3 h-3 text-[#C7A451]" />
                    <span>Lore & Voice</span>
                  </button>
                  <Link
                    to="/stories"
                    className="px-3 py-1.5 rounded-full bg-[#FAF7F0] hover:bg-gray-200 transition-colors text-xs font-bold text-[#17233A]"
                  >
                    Stories
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* SPECIAL COMPANION: CHIKU THE ADVENTURE PUP */}
      <section className="bg-gradient-to-r from-[#FAF7F0] via-amber-50/40 to-[#FAF7F0] rounded-3xl border border-[#C7A451]/30 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-amber-100 to-[#FAF7F0] relative z-10">
                <img
                  src="/puppy-portrait.png"
                  alt="Chiku the Adventure Pup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-2 rounded-3xl bg-amber-400/20 blur-xl pointer-events-none animate-pulse-glow" />
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#17233A] text-white shadow-md whitespace-nowrap">
                Loyal Companion
              </span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C7A451]/40 text-amber-900 text-xs font-bold">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Everyone's Favorite Four-Legged Explorer</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
              Meet Chiku — The Heart of the Trail
            </h3>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              No great adventure is complete without a faithful companion. Chiku has a sixth sense for hidden portals, can detect backward river waves before they appear, and ensures Momo never wanders off without his snack pouch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-2xl border border-gray-200/80">
                <strong className="text-xs font-bold text-[#17233A] block">Special Skill</strong>
                <span className="text-[11px] text-[#475569]">Sniffing out ancient riddles</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-gray-200/80">
                <strong className="text-xs font-bold text-[#17233A] block">Favorite Treat</strong>
                <span className="text-[11px] text-[#475569]">Honey-dipped seed biscuits</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-gray-200/80">
                <strong className="text-xs font-bold text-[#17233A] block">Best Trick</strong>
                <span className="text-[11px] text-[#475569]">Catching Tobo's flying gears</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THREE FRIENDS. THREE DIFFERENT WAYS OF SEEING THE WORLD */}
      <section className="bg-[#FAF7F0] rounded-3xl border border-[#C7A451]/25 p-8 sm:p-14 shadow-sm">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451]">
            Synergy & Problem Solving
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
            Three friends. Three different ways of seeing the world.
          </h2>
          <p className="text-sm sm:text-base text-[#17233A]/80 leading-relaxed">
            In every adventure, no single character holds all the answers. It is only when Momo's confidence leaps forward, Tobo's inventive thinking constructs a solution, and Dodi's simple questions reframe the obstacle that impossible mysteries are solved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center mx-auto font-bold text-base shadow-xs">
              M
            </div>
            <h3 className="font-serif text-xl font-bold text-[#17233A]">Momo's Courage</h3>
            <p className="text-xs text-[#17233A]/75 leading-relaxed">
              Provides the momentum. When everyone else is hesitant on the riverbank, Momo dares to take the first step.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto font-bold text-base shadow-xs">
              T
            </div>
            <h3 className="font-serif text-xl font-bold text-[#17233A]">Tobo's Inventions</h3>
            <p className="text-xs text-[#17233A]/75 leading-relaxed">
              Provides the mechanism. When an obstacle cannot be climbed, Tobo gathers twigs, copper gears, and creates a pulley.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center mx-auto font-bold text-base shadow-xs">
              D
            </div>
            <h3 className="font-serif text-xl font-bold text-[#17233A]">Dodi's "Par Kyun?"</h3>
            <p className="text-xs text-[#17233A]/75 leading-relaxed">
              Provides the wisdom. When the older kids miss the obvious, Dodi asks why the gate was locked in the first place, unlocking harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Lore Modal */}
      <CharacterModal
        character={modalCharacter}
        isOpen={!!modalCharacter}
        onClose={() => setModalCharacter(null)}
      />
    </div>
  );
};
