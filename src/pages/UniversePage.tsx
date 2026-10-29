import React, { useState } from 'react';
import { UniverseMapVisual } from '../components/visuals/UniverseMapVisual';
import { RealmVisual } from '../components/visuals/RealmVisual';
import { REALMS, Realm, CHARACTERS, Character } from '../data/brandData';
import { RealmModal } from '../components/modals/RealmModal';
import { CharacterModal } from '../components/modals/CharacterModal';
import { Compass, Sparkles, MapPin, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UniversePage: React.FC = () => {
  const [selectedRealm, setSelectedRealm] = useState<Realm>(REALMS[0]);
  const [modalRealm, setModalRealm] = useState<Realm | null>(null);
  const [modalCharacter, setModalCharacter] = useState<Character | null>(null);

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" /> World-Building & Lore
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          Welcome to the world of Zanarra.
        </h1>

        <p className="text-lg sm:text-xl text-[#17233A]/80 font-serif italic max-w-2xl mx-auto">
          "Three friends. Five extraordinary realms. One simple belief: the world becomes more wonderful when we keep asking questions."
        </p>
      </section>

      {/* Narrative Architecture */}
      <section className="bg-white rounded-3xl border border-[#C7A451]/25 p-8 sm:p-12 shadow-sm">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Franchise Structure
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            The Narrative Architecture
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-1">
            How character connection, world-building, and transmedia touchpoints weave into an interconnected children’s IP ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-gray-200/80 space-y-2">
            <span className="text-xs font-bold text-[#F2A18B] uppercase tracking-wider block">Pillar 1</span>
            <h3 className="font-bold text-[#17233A] text-lg">The Characters</h3>
            <p className="text-xs text-[#17233A]/80 leading-relaxed">
              Provide the emotional connection. Momo, Tobo, and Dodi embody bravery, inventive wit, and boundless inquisitive wonder.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-gray-200/80 space-y-2">
            <span className="text-xs font-bold text-[#4A7C59] uppercase tracking-wider block">Pillar 2</span>
            <h3 className="font-bold text-[#17233A] text-lg">The Five Realms</h3>
            <p className="text-xs text-[#17233A]/80 leading-relaxed">
              Provide the world-building. Each realm offers a distinct domain of human thought: ecology, engineering, ancient myth, acoustic feeling, and cosmic time.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-gray-200/80 space-y-2">
            <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider block">Pillar 3</span>
            <h3 className="font-bold text-[#17233A] text-lg">The Stories</h3>
            <p className="text-xs text-[#17233A]/80 leading-relaxed">
              Create recurring audience engagement. Modular episodic tales, songs, and picture books keep children engaged season after season.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-gray-200/80 space-y-2">
            <span className="text-xs font-bold text-[#C7A451] uppercase tracking-wider block">Pillar 4</span>
            <h3 className="font-bold text-[#17233A] text-lg">Products & Play</h3>
            <p className="text-xs text-[#17233A]/80 leading-relaxed">
              Extend the relationship beyond the screen. Books, physical STEM kits, musical instruments, and interactive apps bring story magic into physical playtime.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Universe Map */}
      <section className="space-y-4">
        <UniverseMapVisual
          selectedRealmId={selectedRealm.id}
          onSelectRealm={(r) => setSelectedRealm(r)}
        />
      </section>

      {/* One Universe, Many Journeys */}
      <section className="bg-[#FAF7F0] rounded-3xl border border-[#C7A451]/20 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451]">
              Modular Story Design
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
              One universe, many journeys.
            </h2>
            <p className="text-sm text-[#17233A]/80 leading-relaxed">
              Each Zanarra adventure is crafted to stand completely on its own. A 5-year-old child listening to an episodic bedtime song in <em>Sonika</em> enjoys a self-contained emotional arc without needing prior lore.
            </p>
            <p className="text-sm text-[#17233A]/80 leading-relaxed">
              Simultaneously, curious older readers uncover subtle environmental clues—like Tobo's solar copper batteries utilizing crystals harvested from <em>Cosmara</em>—revealing the grandeur of a larger, cohesive universe.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Zero Lore Gatekeeping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Compounding Transmedia Rewards</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-gray-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Story-World Information
            </span>
            <h4 className="font-serif text-xl font-bold text-[#17233A]">
              The Great Question Veil
            </h4>
            <p className="text-xs text-[#17233A]/75 mt-2 leading-relaxed">
              In Zanarra lore, realms are kept in vibrant harmony as long as living beings ask genuine questions. When people stop wondering or become too sure of everything, misty barriers form between realms. Momo, Tobo, and Dodi's curiosity keeps the realm pathways open.
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#C7A451] font-bold">
              <span>Lore Codex #01</span>
              <span>Universe Bible Draft</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-dive into all 5 realms cards */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            The Five Individual Realms
          </h2>
          <p className="text-xs sm:text-sm text-[#17233A]/70 mt-1">
            Explore the ecosystem, adventure types, and story potential across each realm.
          </p>
        </div>

        <div className="space-y-6">
          {REALMS.map((realm) => (
            <div
              key={realm.id}
              id={realm.id}
              className="bg-white rounded-3xl border border-[#C7A451]/20 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-4 h-48 sm:h-56 w-full">
                <RealmVisual id={realm.id} className="w-full h-full" />
              </div>

              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: realm.accentColor }} />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">
                      Realm 0{realm.number}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F0] border border-gray-200">
                    {realm.theme}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A]">
                  {realm.name}
                </h3>

                <p className="font-serif italic text-base text-amber-900/90 font-medium">
                  "{realm.storyPromise}"
                </p>

                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
                  <strong>Landscape & Ecology:</strong> {realm.landscape}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#17233A] block mb-1">Core Themes:</span>
                    <div className="flex flex-wrap gap-1">
                      {realm.coreThemes.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-[#17233A] block mb-1">Adventure Types:</span>
                    <ul className="text-xs text-[#17233A]/80 space-y-0.5 list-disc list-inside">
                      {realm.adventureTypes.map((adv, idx) => (
                        <li key={idx}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-gray-500">
                    <strong>Story Formats:</strong> {realm.storyFormats.join(' • ')}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalRealm(realm)}
                      className="px-3.5 py-1.5 rounded-full bg-[#17233A] text-white font-bold text-xs hover:bg-[#25395E] flex items-center gap-1.5 shadow-xs transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#C7A451]" />
                      <span>Creatures & Lore</span>
                    </button>
                    <Link
                      to="/stories"
                      className="font-bold text-[#17233A] hover:text-[#C7A451] inline-flex items-center gap-1 py-1.5 px-3 rounded-full bg-[#FAF7F0] hover:bg-gray-200 transition-colors"
                    >
                      <span>Stories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
