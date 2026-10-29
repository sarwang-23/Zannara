import React, { useState } from 'react';
import { Character, REALMS } from '../../data/brandData';
import { X, Sparkles, Compass, Lightbulb, Volume2, ArrowRight, Heart, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  isOpen,
  onClose
}) => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [activeTab, setActiveTab] = useState<'story' | 'inventions' | 'qa'>('story');
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  if (!isOpen || !character) return null;

  // Rich lore data specific to each character
  const characterExtras: Record<string, {
    portrait: string;
    signatureGear: { name: string; desc: string; icon: string }[];
    favoriteCompanion: string;
    qa: { q: string; a: string }[];
    voiceLine: string;
    badgeStyle: string;
    colorAccent: string;
    bgGradient: string;
  }> = {
    momo: {
      portrait: '/momo-solo-hd.png',
      voiceLine: '"If there\'s no path yet, that just means we get to name the trees! Follow me!"',
      signatureGear: [
        { name: 'Cedar Compass of Courage', desc: 'Points toward whatever problem needs solving most urgently.', icon: '🧭' },
        { name: 'Wind-Skimmer Coral Scarf', desc: 'Flutters in the direction of secret river currents.', icon: '🧣' },
        { name: 'Terra Boots', desc: 'Scuffed red canvas sneakers made for climbing every slippery moss rock.', icon: '👟' }
      ],
      favoriteCompanion: 'Chiku the Trail Pup & Tobo\'s runaway gadgets',
      qa: [
        {
          q: 'What does Momo do when he gets lost?',
          a: 'He stops, looks around with a gigantic grin, and says: "We\'re not lost, we\'ve just discovered a place that wasn\'t on our map yet!"'
        },
        {
          q: 'Why does Momo wear the coral scarf?',
          a: 'It was gifted to him by the Cedar Elders of Terra Viva when he saved a stranded seed-turtle from the backward rapids.'
        },
        {
          q: 'What is Momo\'s biggest fear?',
          a: 'Having to sit quietly indoors while an unexplored thunderstorm is happening outside.'
        }
      ],
      badgeStyle: 'bg-rose-50 text-rose-700 border-rose-200',
      colorAccent: '#F2A18B',
      bgGradient: 'from-orange-50 via-rose-50/40 to-white'
    },
    tobo: {
      portrait: '/tobo-solo-hd.png',
      voiceLine: '"Technically, it didn\'t explode—it simply distributed its mechanical energy with extreme enthusiasm!"',
      signatureGear: [
        { name: 'Pneumatic Cloud-Net', desc: 'Designed to capture starlight embers; currently catches accidental apples.', icon: '🎒' },
        { name: 'Sliding Spectacles', desc: 'Brass-rimmed lenses that switch between heat-vision, gear-count, and magnifying.', icon: '👓' },
        { name: 'Pocket Clockwork Wrench', desc: 'A multi-tool forged from Mechanika copper that whistles when a screw is tight.', icon: '🔧' }
      ],
      favoriteCompanion: 'Gizmo the Clockwork Dragonfly',
      qa: [
        {
          q: 'How many things does Tobo carry in his backpack?',
          a: 'Exactly 42 tools, 7 loose brass cogs, 3 rolls of glowing flax-tape, and half a peanut-butter roti for energy.'
        },
        {
          q: 'Has Tobo ever made an invention that worked on the first try?',
          a: 'Once! But it worked so well it flew all the way into Cosmara orbit before he could write down the formula.'
        },
        {
          q: 'Why do his glasses always slide down?',
          a: 'Because his brain is thinking so fast that his eyebrows are constantly dancing with new ideas.'
        }
      ],
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
      colorAccent: '#C7A451',
      bgGradient: 'from-amber-50 via-yellow-50/30 to-white'
    },
    dodi: {
      portrait: '/dodi-solo-hd.png',
      voiceLine: '"Bhaiya, suno... par kyun? Why do the floating islands never fall down?"',
      signatureGear: [
        { name: 'Amber Magnifying Glass', desc: 'Reveals glowing bioluminescent footprints and singing moss patterns.', icon: '🔍' },
        { name: 'Sunny Raincoat', desc: 'Bright dandelion yellow, 100% waterproof against storm clouds and waterfall spray.', icon: '🧥' },
        { name: 'Whispering Shell Pouch', desc: 'A tiny woven satchel filled with smooth river stones that hum soft lullabies.', icon: '🐚' }
      ],
      favoriteCompanion: 'The Little Forest Puppy & singing moss spores',
      qa: [
        {
          q: 'Why does Dodi always ask "par kyun?" (but why?)',
          a: 'Because she knows that the most wonderful secrets in the universe are hiding right behind the things everyone takes for granted.'
        },
        {
          q: 'What is Dodi\'s secret superpower?',
          a: 'She is the only one who can listen to the singing stones of Sonika and decipher ancient riddle doors in Mythara.'
        },
        {
          q: 'Why does she love puddle jumping with Momo?',
          a: 'Because the ripples in the water make circular soundwaves that echo through the ground like secret laughter.'
        }
      ],
      badgeStyle: 'bg-sky-50 text-sky-800 border-sky-200',
      colorAccent: '#B9D9F3',
      bgGradient: 'from-sky-50 via-indigo-50/20 to-white'
    }
  };

  const extra = characterExtras[character.id] || characterExtras.momo;

  const handleSimulateVoice = () => {
    setIsPlayingVoice(true);
    setTimeout(() => setIsPlayingVoice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#17233A]/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#C7A451]/30 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${extra.bgGradient} border-b border-gray-100 relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/90 hover:bg-white text-[#17233A] shadow-sm hover:scale-105 transition-all z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Expressive Character Portrait with Ambient Glow */}
            <div className="relative shrink-0">
              <div 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-[#FAF7F0] to-[#E9DFBF] relative z-10 flex items-center justify-center"
              >
                <img
                  src={extra.portrait}
                  alt={character.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Golden circular halo */}
              <div 
                className="absolute -inset-3 rounded-3xl blur-xl opacity-60 pointer-events-none animate-pulse-glow"
                style={{ backgroundColor: extra.colorAccent }}
              />
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#17233A] text-white shadow-md whitespace-nowrap">
                Age {character.age}
              </span>
            </div>

            {/* Character Info */}
            <div className="text-center sm:text-left flex-1 space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-xs" style={{ backgroundColor: character.bgLight, borderColor: character.accentColor }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: character.accentColor }} />
                <span>{character.category}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
                {character.name}
              </h2>
              <p className="text-sm font-semibold text-[#C7A451]">
                {character.title} • {character.personality}
              </p>

              {/* Spoken Quote Box */}
              <div className="mt-3 p-3.5 rounded-2xl bg-white/90 border border-gray-200/80 shadow-xs flex items-center gap-3">
                <button
                  onClick={handleSimulateVoice}
                  className={`p-2.5 rounded-full transition-all shrink-0 ${
                    isPlayingVoice
                      ? 'bg-[#17233A] text-white animate-pulse'
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  }`}
                  title="Listen to character quote"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <p className="text-xs sm:text-sm font-serif italic text-[#17233A]/90 leading-snug">
                  {character.quote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-gray-100 bg-[#FAF7F0]/60 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('story')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'story'
                ? 'border-[#17233A] text-[#17233A]'
                : 'border-transparent text-gray-500 hover:text-[#17233A]'
            }`}
          >
            Character Story
          </button>
          <button
            onClick={() => setActiveTab('inventions')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'inventions'
                ? 'border-[#17233A] text-[#17233A]'
                : 'border-transparent text-gray-500 hover:text-[#17233A]'
            }`}
          >
            Signature Gear & Tools
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'qa'
                ? 'border-[#17233A] text-[#17233A]'
                : 'border-transparent text-gray-500 hover:text-[#17233A]'
            }`}
          >
            Curiosity Q&A
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          {activeTab === 'story' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A451] mb-1">
                  How Children Connect With {character.name}
                </h4>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {character.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
                  <span className="text-[11px] font-bold uppercase text-gray-400 block mb-1">Role in Friendship Trio</span>
                  <p className="text-xs sm:text-sm font-medium text-[#17233A]">{character.roleInGroup}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
                  <span className="text-[11px] font-bold uppercase text-gray-400 block mb-1">Core Appeal</span>
                  <p className="text-xs sm:text-sm font-medium text-[#17233A]">{character.coreAppeal}</p>
                </div>
              </div>

              {/* Connected Realms */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                  Favorite Realms to Explore:
                </span>
                <div className="flex flex-wrap gap-2">
                  {character.realms.map((realmId) => {
                    const realm = REALMS.find(r => r.id === realmId);
                    if (!realm) return null;
                    return (
                      <Link
                        key={realmId}
                        to="/universe"
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold hover:scale-105 transition-transform"
                        style={{ backgroundColor: realm.bgLight, color: realm.textColor }}
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>{realm.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventions' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#475569]">
                Every Zanarra adventurer carries signature artifacts designed for discovery, play, and surviving the unexpected.
              </p>
              <div className="space-y-3">
                {extra.signatureGear.map((gear, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80 flex items-start gap-4 hover:border-[#C7A451]/50 transition-colors">
                    <span className="text-2xl shrink-0 p-2 rounded-xl bg-white shadow-xs">{gear.icon}</span>
                    <div>
                      <h5 className="font-bold text-sm text-[#17233A]">{gear.name}</h5>
                      <p className="text-xs text-[#334155] mt-0.5 leading-relaxed">{gear.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-[#475569] mb-2">
                Kids love asking the deepest questions. Tap below to hear how {character.name} answers:
              </p>
              {extra.qa.map((item, idx) => {
                const isSelected = selectedQuestion === idx;
                return (
                  <div key={idx} className="rounded-2xl border border-gray-200/80 overflow-hidden bg-white">
                    <button
                      onClick={() => setSelectedQuestion(isSelected ? null : idx)}
                      className="w-full text-left p-4 font-bold text-xs sm:text-sm text-[#17233A] hover:bg-[#FAF7F0] flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-amber-500 font-serif">Q:</span> {item.q}
                      </span>
                      <span className="text-gray-400 font-normal text-xs">{isSelected ? '−' : '+'}</span>
                    </button>
                    {isSelected && (
                      <div className="p-4 pt-1 bg-[#FAF7F0]/60 text-xs sm:text-sm text-[#334155] leading-relaxed border-t border-gray-100">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF7F0] border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-500 font-medium">
            Original Zanarra Intellectual Property • Safe for all young explorers
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              to={`/characters#${character.id}`}
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#17233A] text-white text-xs font-bold hover:bg-[#25395E] transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>Full Character Profile</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
