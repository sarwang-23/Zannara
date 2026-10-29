import React from 'react';

export const REALM_ARTWORK: Record<string, {
  image: string;
  webp: string;
  alt: string;
  accentColor: string;
  objectPosition: string;
}> = {
  'terra-viva': {
    image: '/realm-terra-viva.jpg',
    webp: '/realm-terra-viva.webp',
    alt: 'Terra Viva — Enchanted living nature realm with towering ancient trees, luminous flora, and a glowing crystal gateway',
    accentColor: '#16A34A',
    objectPosition: 'center 40%',
  },
  'mechanika': {
    image: '/realm-mechanika.jpg',
    webp: '/realm-mechanika.webp',
    alt: 'Mechanika — Clockwork world of interlocking brass gears, inventive blueprints, and whimsical engineering',
    accentColor: '#D97706',
    objectPosition: 'center 35%',
  },
  'mythara': {
    image: '/realm-mythara.jpg',
    webp: '/realm-mythara.webp',
    alt: 'Mythara — Ancient civilisation of grand scroll fortress libraries, armillary astrolabes, and floating ruins',
    accentColor: '#7C3AED',
    objectPosition: 'center 30%',
  },
  'sonika': {
    image: '/realm-sonika.jpg',
    webp: '/realm-sonika.webp',
    alt: 'Sonika — Luminous musical realm with glowing golden harp, enchanted flute, and swirling sound waves',
    accentColor: '#E11D48',
    objectPosition: 'center 45%',
  },
  'cosmara': {
    image: '/realm-cosmara.jpg',
    webp: '/realm-cosmara.webp',
    alt: 'Cosmara — Breathtaking celestial citadel in the deep starry cosmos with rainbow nebula halo and observatories',
    accentColor: '#0284C7',
    objectPosition: 'center 35%',
  },
};

interface RealmVisualProps {
  id: string;
  className?: string;
  variant?: 'card' | 'hero' | 'badge';
  showOverlay?: boolean;
}

export const RealmVisual: React.FC<RealmVisualProps> = ({
  id,
  className = '',
  variant = 'card',
  showOverlay = true,
}) => {
  const art = REALM_ARTWORK[id] || REALM_ARTWORK['terra-viva'];

  return (
    <div className={`relative overflow-hidden w-full h-full bg-[#17233A]/5 ${className}`}>
      <picture>
        <source srcSet={art.webp} type="image/webp" />
        <img
          src={art.image}
          alt={art.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ objectPosition: art.objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </picture>
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#17233A]/50 via-transparent to-black/10 pointer-events-none" />
      )}
    </div>
  );
};
