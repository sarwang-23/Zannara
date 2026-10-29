import React, { useState } from 'react';
import { REALMS, Realm, CHARACTERS } from '../../data/brandData';
import { RealmVisual } from './RealmVisual';
import { CharacterVisual } from './CharacterVisual';
import { ArrowRight, Compass, Sparkles, X } from 'lucide-react';

interface UniverseMapVisualProps {
  onSelectRealm?: (realm: Realm) => void;
  selectedRealmId?: string | null;
}

export const UniverseMapVisual: React.FC<UniverseMapVisualProps> = ({
  onSelectRealm,
  selectedRealmId
}) => {
  const [activeRealm, setActiveRealm] = useState<Realm | null>(
    REALMS.find(r => r.id === selectedRealmId) || REALMS[0]
  );

  const handleRealmClick = (realm: Realm) => {
    setActiveRealm(realm);
    if (onSelectRealm) {
      onSelectRealm(realm);
    }
  };

  // Coordinates for the 5 realms on the 800x500 canvas
  const nodePositions: Record<string, { x: number; y: number; label: string; offset: string }> = {
    'terra-viva': { x: 170, y: 150, label: 'Terra Viva', offset: 'top' },
    'mechanika': { x: 630, y: 140, label: 'Mechanika', offset: 'top' },
    'mythara': { x: 190, y: 380, label: 'Mythara', offset: 'bottom' },
    'sonika': { x: 610, y: 370, label: 'Sonika', offset: 'bottom' },
    'cosmara': { x: 400, y: 250, label: 'Cosmara (The Nexus)', offset: 'center' },
  };

  return (
    <div className="w-full bg-[#FAF7F0] rounded-3xl border border-[#C7A451]/20 shadow-xl overflow-hidden p-4 sm:p-8">
      {/* Map Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#17233A]/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#C7A451]/40 text-[#C7A451] text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" /> Interactive Cartography
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A]">
            The Five Connected Realms of Zanarra
          </h3>
          <p className="text-sm text-[#17233A]/70 max-w-xl mt-1">
            Click any realm node to inspect its ecosystem, story promise, and interconnected narrative portals.
          </p>
        </div>

        {/* Quick Realm Filter pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {REALMS.map((r) => {
            const isSelected = activeRealm?.id === r.id;
            return (
              <button
                key={r.id}
                onClick={() => handleRealmClick(r)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#17233A] text-white shadow-md scale-105'
                    : 'bg-white hover:bg-[#F2EBDD] text-[#17233A] border border-[#17233A]/10'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: r.accentColor }}
                />
                {r.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Map Canvas & Drawer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-7 relative bg-[#FBF9F4] rounded-2xl border border-[#C7A451]/15 p-2 sm:p-4 min-h-[360px] sm:min-h-[460px] flex items-center justify-center overflow-hidden">
          {/* Subtle Topographic & Compass Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 500 500" className="w-full h-full stroke-[#17233A]" fill="none">
              <circle cx="250" cy="250" r="230" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="250" cy="250" r="160" strokeWidth="1" />
              <circle cx="250" cy="250" r="90" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="20" y1="250" x2="480" y2="250" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="250" y1="20" x2="250" y2="480" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          <svg viewBox="0 0 800 500" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connecting Pathways between Realms */}
            {/* Terra Viva <-> Cosmara */}
            <path d="M170 150 Q285 200 400 250" stroke="#C7A451" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
            {/* Mechanika <-> Cosmara */}
            <path d="M630 140 Q515 195 400 250" stroke="#C7A451" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
            {/* Mythara <-> Cosmara */}
            <path d="M190 380 Q295 315 400 250" stroke="#C7A451" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
            {/* Sonika <-> Cosmara */}
            <path d="M610 370 Q505 310 400 250" stroke="#C7A451" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
            {/* Outer Rim Trails */}
            <path d="M170 150 Q400 80 630 140" stroke="#FAF7F0" strokeWidth="3" opacity="0.9" />
            <path d="M170 150 Q130 265 190 380" stroke="#FAF7F0" strokeWidth="3" opacity="0.9" />
            <path d="M630 140 Q670 255 610 370" stroke="#FAF7F0" strokeWidth="3" opacity="0.9" />
            <path d="M190 380 Q400 440 610 370" stroke="#FAF7F0" strokeWidth="3" opacity="0.9" />

            {/* Interactive Realm Nodes */}
            {REALMS.map((realm) => {
              const pos = nodePositions[realm.id] || { x: 400, y: 250, label: realm.name };
              const isSelected = activeRealm?.id === realm.id;

              return (
                <g
                  key={realm.id}
                  onClick={() => handleRealmClick(realm)}
                  className="cursor-pointer transition-transform group"
                  transform={`translate(${pos.x}, ${pos.y})`}
                >
                  {/* Outer pulse ring if selected */}
                  {isSelected && (
                    <circle
                      cx="0"
                      cy="0"
                      r="46"
                      stroke={realm.accentColor}
                      strokeWidth="2"
                      fill={realm.accentColor}
                      fillOpacity="0.12"
                      className="animate-ping"
                      style={{ animationDuration: '3s' }}
                    />
                  )}

                  {/* Realm background button circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isSelected ? 36 : 30}
                    fill="#FAF7F0"
                    stroke={isSelected ? realm.accentColor : '#17233A'}
                    strokeWidth={isSelected ? 3.5 : 2}
                    className="transition-all duration-300 filter drop-shadow-md group-hover:drop-shadow-lg"
                  />

                  {/* Inner themed core circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isSelected ? 22 : 16}
                    fill={realm.accentColor}
                    className="transition-all duration-300"
                  />

                  {/* Center glyph or star */}
                  <circle cx="0" cy="0" r="5" fill="#FAF7F0" />

                  {/* Realm Label Tag */}
                  <rect
                    x="-65"
                    y={pos.y > 300 ? -54 : 40}
                    width="130"
                    height="26"
                    rx="13"
                    fill={isSelected ? '#17233A' : '#FAF7F0'}
                    stroke={isSelected ? realm.accentColor : '#C7A451'}
                    strokeWidth="1.2"
                    className="drop-shadow-xs transition-colors"
                  />
                  <text
                    x="0"
                    y={pos.y > 300 ? -37 : 57}
                    textAnchor="middle"
                    fill={isSelected ? '#FAF7F0' : '#17233A'}
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    className="select-none pointer-events-none"
                  >
                    {realm.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Realm Detail Panel (Right Side) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#C7A451]/25 p-5 sm:p-6 shadow-md transition-all">
          {activeRealm ? (
            <div>
              {/* Realm Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: activeRealm.accentColor }}
                  />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A451]">
                      Realm 0{activeRealm.number}
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-[#17233A]">
                      {activeRealm.name}
                    </h4>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F0] border border-[#C7A451]/30 text-[#17233A]">
                  {activeRealm.theme}
                </span>
              </div>

              {/* Landscape Illustration */}
              <div className="mt-4 h-32 w-full">
                <RealmVisual id={activeRealm.id} className="w-full h-full" />
              </div>

              {/* Story Promise */}
              <div className="mt-4 p-3 rounded-xl bg-[#FAF7F0] border-l-4" style={{ borderColor: activeRealm.accentColor }}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Story Promise</span>
                <p className="font-serif italic text-base font-semibold text-[#17233A] mt-0.5">
                  "{activeRealm.storyPromise}"
                </p>
              </div>

              {/* Landscape description */}
              <p className="text-xs sm:text-sm text-[#17233A]/80 mt-3 leading-relaxed">
                <strong className="text-[#17233A]">Landscape: </strong>
                {activeRealm.landscape}
              </p>

              {/* Core Themes tags */}
              <div className="mt-3">
                <span className="text-[11px] font-bold text-[#17233A] block mb-1.5">Core Themes:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeRealm.coreThemes.map((theme, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F2EBDD] text-[#17233A]"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Adventure Types */}
              <div className="mt-3">
                <span className="text-[11px] font-bold text-[#17233A] block mb-1.5">Typical Adventures:</span>
                <ul className="text-xs text-[#17233A]/80 space-y-1 list-disc list-inside">
                  {activeRealm.adventureTypes.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
              </div>

              {/* Characters associated */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-gray-500 block">Lead Characters</span>
                  <div className="flex items-center gap-2 mt-1">
                    {activeRealm.relatedCharacters.map((charId) => {
                      const char = CHARACTERS.find(c => c.id === charId);
                      return char ? (
                        <div key={char.id} className="flex items-center gap-1 text-xs font-semibold text-[#17233A] bg-[#FAF7F0] px-2 py-1 rounded-full border border-gray-200">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: char.accentColor }} />
                          {char.name}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-gray-500 block">Formats</span>
                  <span className="text-xs font-medium text-[#17233A]">
                    {activeRealm.storyFormats.slice(0, 2).join(', ')}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              Select a realm from the map to view its details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
