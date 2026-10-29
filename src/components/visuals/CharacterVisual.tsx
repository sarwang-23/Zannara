import React from 'react';

interface CharacterVisualProps {
  id: 'momo' | 'tobo' | 'dodi' | 'puppy' | 'trio' | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  showBadge?: boolean;
  variant?: 'illustrated' | 'svg' | 'portrait';
}

export const CharacterVisual: React.FC<CharacterVisualProps> = ({
  id,
  size = 'md',
  className = '',
  showBadge = true,
  variant = 'illustrated'
}) => {
  const sizeMap = {
    sm: 'w-20 h-20 sm:w-24 sm:h-24',
    md: 'w-40 h-40 sm:w-48 sm:h-48',
    lg: 'w-60 h-60 sm:w-72 sm:h-72',
    xl: 'w-72 h-72 sm:w-80 sm:h-80',
    hero: 'w-80 h-80 sm:w-96 sm:h-96'
  };

  const imageSizeMap = {
    sm: 'w-20 h-20',
    md: 'w-36 h-36 sm:w-44 sm:h-44',
    lg: 'w-56 h-56 sm:w-64 sm:h-64',
    xl: 'w-64 h-64 sm:w-72 sm:h-72',
    hero: 'w-80 h-80 sm:w-96 sm:h-96'
  };

  // If using the authentic illustrated 3D franchise artwork
  if (variant === 'illustrated' || variant === 'portrait') {
    const portraitMap: Record<string, {
      src: string;
      alt: string;
      name: string;
      title: string;
      glowColor: string;
      borderColor: string;
      badgeColor: string;
    }> = {
      momo: {
        src: '/momo-portrait.png',
        alt: 'Momo the Adventurer',
        name: 'Momo',
        title: 'The Leader (Age 7)',
        glowColor: '#F2A18B',
        borderColor: '#E26D5C',
        badgeColor: 'text-[#E26D5C]'
      },
      tobo: {
        src: '/tobo-portrait.png',
        alt: 'Tobo the Inventor',
        name: 'Tobo',
        title: 'The Clumsy Genius (Age 6)',
        glowColor: '#C7A451',
        borderColor: '#B45309',
        badgeColor: 'text-[#B45309]'
      },
      dodi: {
        src: '/dodi-portrait.png',
        alt: 'Dodi the Curious Spark',
        name: 'Dodi',
        title: 'The Tiny Spark (Age 4)',
        glowColor: '#B9D9F3',
        borderColor: '#0284C7',
        badgeColor: 'text-[#0284C7]'
      },
      puppy: {
        src: '/puppy-portrait.png',
        alt: 'Chiku the Trail Pup',
        name: 'Chiku',
        title: 'Loyal Companion',
        glowColor: '#E2D7C3',
        borderColor: '#C7A451',
        badgeColor: 'text-amber-800'
      },
      trio: {
        src: '/trio-group.png',
        alt: 'Zanarra Trio Adventure Lineup',
        name: 'The Adventurers',
        title: 'Momo, Tobo & Dodi',
        glowColor: '#C7A451',
        borderColor: '#17233A',
        badgeColor: 'text-[#17233A]'
      }
    };

    const char = portraitMap[id] || portraitMap.momo;

    return (
      <div className={`relative flex flex-col items-center justify-center select-none group ${className}`}>
        {/* Soft Ambient Realm Aura */}
        <div 
          className="absolute inset-0 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: char.glowColor }}
        />

        {/* Organic Storybook Arched Frame */}
        <div 
          className={`relative z-10 ${imageSizeMap[size]} rounded-3xl overflow-hidden border-2 sm:border-3 bg-gradient-to-b from-[#FAF7F0] via-white to-[#F2EBDD] shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center`}
          style={{ borderColor: char.borderColor + '40' }}
        >
          <img
            src={char.src}
            alt={char.alt}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Floating Sparkle Dot */}
        <div 
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border border-[#C7A451] shadow-xs flex items-center justify-center text-[8px] text-[#C7A451] z-20 group-hover:rotate-45 transition-transform"
        >
          ✦
        </div>

        {/* Interactive Badge */}
        {showBadge && (
          <div className="relative z-20 -mt-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-gray-200 shadow-md text-center group-hover:border-[#C7A451]/60 transition-colors">
            <span className="text-xs font-bold text-[#17233A]">{char.name}</span>
            <span className={`text-[10px] ${char.badgeColor} ml-1.5 font-medium`}>{char.title}</span>
          </div>
        )}
      </div>
    );
  }

  // Fallback SVG representation
  if (id === 'momo') {
    return (
      <div className={`relative flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F2A18B]/30 to-[#FAF7F0] blur-xl opacity-70 animate-pulse-glow" />
        <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="84" fill="#FAF7F0" stroke="#F2A18B" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M70 145 C70 120, 130 120, 130 145 L138 185 C138 190, 62 190, 62 185 Z" fill="#E26D5C" />
          <path d="M72 118 Q100 134 128 118 Q138 128 122 136 Q100 144 78 136 Z" fill="#F2A18B" />
          <circle cx="100" cy="88" r="34" fill="#F3CCA8" />
          <path d="M66 84 C62 60, 92 46, 100 48 C108 46, 138 60, 134 84 Z" fill="#2C1810" />
          <ellipse cx="88" cy="86" rx="4.5" ry="6" fill="#17233A" />
          <circle cx="89.5" cy="84" r="1.8" fill="#FFF" />
          <ellipse cx="112" cy="86" rx="4.5" ry="6" fill="#17233A" />
          <circle cx="113.5" cy="84" r="1.8" fill="#FFF" />
          <path d="M91 99 Q100 108 109 99" stroke="#17233A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (id === 'tobo') {
    return (
      <div className={`relative flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C7A451]/30 to-[#FAF7F0] blur-xl opacity-70 animate-pulse-glow" />
        <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="84" fill="#FAF7F0" stroke="#C7A451" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M72 142 C72 124, 128 124, 128 142 L132 188 Z" fill="#C7A451" />
          <circle cx="100" cy="90" r="33" fill="#F3CCA8" />
          <circle cx="85" cy="89" r="13" stroke="#17233A" strokeWidth="3.5" fill="#FAF7F0" fillOpacity="0.8" />
          <circle cx="115" cy="89" r="13" stroke="#17233A" strokeWidth="3.5" fill="#FAF7F0" fillOpacity="0.8" />
          <line x1="98" y1="89" x2="102" y2="89" stroke="#17233A" strokeWidth="3.5" />
          <path d="M92 106 Q102 112 110 104" stroke="#17233A" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // Dodi
  return (
    <div className={`relative flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B9D9F3]/40 to-[#C9B9EA]/30 blur-xl opacity-75 animate-pulse-glow" />
      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="84" fill="#FAF7F0" stroke="#B9D9F3" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M78 148 C78 132, 122 132, 122 148 L126 186 Z" fill="#93C5FD" />
        <circle cx="100" cy="98" r="32" fill="#F3CCA8" />
        <ellipse cx="86" cy="96" rx="6" ry="8" fill="#17233A" />
        <circle cx="88" cy="93" r="2.5" fill="#FFF" />
        <ellipse cx="114" cy="96" rx="6" ry="8" fill="#17233A" />
        <circle cx="116" cy="93" r="2.5" fill="#FFF" />
        <ellipse cx="100" cy="112" rx="3.5" ry="4.5" fill="#17233A" />
      </svg>
    </div>
  );
};
