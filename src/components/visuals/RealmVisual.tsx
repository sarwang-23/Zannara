import React from 'react';

interface RealmVisualProps {
  id: string;
  className?: string;
  variant?: 'card' | 'hero' | 'badge';
}

export const RealmVisual: React.FC<RealmVisualProps> = ({
  id,
  className = '',
  variant = 'card'
}) => {
  const isCard = variant === 'card';

  if (id === 'terra-viva') {
    return (
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center bg-[#F1F7F1] border border-[#B8D4B4]/60 ${className}`}>
        <svg viewBox="0 0 240 160" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gentle hill gradients */}
          <ellipse cx="120" cy="180" rx="140" ry="80" fill="#E2EFE2" />
          <ellipse cx="60" cy="170" rx="90" ry="60" fill="#CCE3CC" />
          <ellipse cx="190" cy="175" rx="80" ry="50" fill="#B8D4B4" />

          {/* Winding emerald river */}
          <path d="M120 70 C100 95, 140 120, 110 160" stroke="#78B09F" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
          <path d="M120 70 C100 95, 140 120, 110 160" stroke="#FAF7F0" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />

          {/* Stylized Giant Living Tree & Canopy */}
          <path d="M120 120 L120 75" stroke="#5D4037" strokeWidth="8" strokeLinecap="round" />
          {/* Canopy foliage blobs */}
          <circle cx="120" cy="60" r="28" fill="#4A7C59" />
          <circle cx="102" cy="54" r="20" fill="#5F976F" />
          <circle cx="138" cy="56" r="22" fill="#3D684A" />
          <circle cx="120" cy="42" r="18" fill="#75AC86" />

          {/* Floating glowing botanical spores */}
          <circle cx="85" cy="45" r="4" fill="#C7A451" opacity="0.8" />
          <circle cx="160" cy="40" r="3" fill="#C7A451" opacity="0.8" />
          <circle cx="70" cy="85" r="2.5" fill="#4A7C59" />
          <circle cx="175" cy="90" r="3" fill="#4A7C59" />
        </svg>
      </div>
    );
  }

  if (id === 'mechanika') {
    return (
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center bg-[#FDF8F0] border border-[#F59E0B]/30 ${className}`}>
        <svg viewBox="0 0 240 160" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Copper plateau platforms */}
          <rect x="20" y="110" width="80" height="50" rx="6" fill="#FDE68A" opacity="0.6" />
          <rect x="140" y="90" width="85" height="70" rx="8" fill="#FCD34D" opacity="0.5" />
          {/* Kinetic Bridge */}
          <line x1="85" y1="120" x2="155" y2="105" stroke="#B45309" strokeWidth="4" strokeDasharray="6 3" />

          {/* Central Clockwork Cog Spire */}
          <g transform="translate(120, 65)">
            <circle cx="0" cy="0" r="32" stroke="#B45309" strokeWidth="6" strokeDasharray="12 4" fill="#FEF3C7" />
            <circle cx="0" cy="0" r="18" fill="#D97706" />
            <circle cx="0" cy="0" r="7" fill="#FAF7F0" />
            {/* Cog teeth indications */}
            <circle cx="0" cy="-32" r="4" fill="#B45309" />
            <circle cx="0" cy="32" r="4" fill="#B45309" />
            <circle cx="-32" cy="0" r="4" fill="#B45309" />
            <circle cx="32" cy="0" r="4" fill="#B45309" />
          </g>

          {/* Steam / Airship glider silhouette */}
          <path d="M50 48 Q70 38 90 48 Q70 54 50 48 Z" fill="#78350F" />
          <line x1="70" y1="48" x2="70" y2="56" stroke="#78350F" strokeWidth="2" />
          <circle cx="70" cy="58" r="2.5" fill="#C7A451" />
        </svg>
      </div>
    );
  }

  if (id === 'mythara') {
    return (
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center bg-[#F7F3FF] border border-[#C9B9EA]/60 ${className}`}>
        <svg viewBox="0 0 240 160" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mystical purple terraces */}
          <ellipse cx="120" cy="180" rx="130" ry="70" fill="#EDE9FE" />
          
          {/* Classical illuminated scroll temple pillars */}
          <rect x="70" y="60" width="8" height="65" rx="3" fill="#8B5CF6" />
          <rect x="95" y="52" width="8" height="73" rx="3" fill="#7C3AED" />
          <rect x="135" y="52" width="8" height="73" rx="3" fill="#7C3AED" />
          <rect x="160" y="60" width="8" height="65" rx="3" fill="#8B5CF6" />

          {/* Temple pediment arch */}
          <path d="M60 60 Q120 30 180 60 L174 66 Q120 38 66 66 Z" fill="#6D28D9" />

          {/* Levitating illuminated manuscript / star glyph */}
          <g transform="translate(120, 75)" className="animate-float">
            <rect x="-14" y="-18" width="28" height="22" rx="3" fill="#FAF7F0" stroke="#C7A451" strokeWidth="2" transform="rotate(-6)" />
            <line x1="-8" y1="-12" x2="8" y2="-12" stroke="#7C3AED" strokeWidth="1.5" />
            <line x1="-8" y1="-7" x2="6" y2="-7" stroke="#7C3AED" strokeWidth="1.5" />
            <circle cx="0" cy="8" r="4" fill="#C7A451" />
          </g>

          {/* Floating constellation stars */}
          <circle cx="45" cy="40" r="2.5" fill="#8B5CF6" />
          <circle cx="195" cy="45" r="2.5" fill="#8B5CF6" />
          <line x1="45" y1="40" x2="65" y2="28" stroke="#DDD6FE" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>
    );
  }

  if (id === 'sonika') {
    return (
      <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center bg-[#FFF1F2] border border-[#F2A18B]/60 ${className}`}>
        <svg viewBox="0 0 240 160" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Coral resonance amphitheater curves */}
          <path d="M20 140 Q120 70 220 140" stroke="#FDA4AF" strokeWidth="20" strokeLinecap="round" opacity="0.4" />
          <path d="M40 145 Q120 90 200 145" stroke="#FB7185" strokeWidth="14" strokeLinecap="round" opacity="0.6" />
          <path d="M60 150 Q120 110 180 150" stroke="#F43F5E" strokeWidth="10" strokeLinecap="round" opacity="0.8" />

          {/* Singing crystal spires in center */}
          <polygon points="120,35 128,115 112,115" fill="#E11D48" />
          <polygon points="104,55 110,120 98,120" fill="#F43F5E" opacity="0.85" />
          <polygon points="136,58 142,120 130,120" fill="#BE123C" opacity="0.85" />

          {/* Musical pulse waves radiating */}
          <circle cx="120" cy="40" r="14" stroke="#F2A18B" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="120" cy="40" r="24" stroke="#F2A18B" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
          <circle cx="120" cy="40" r="34" stroke="#F2A18B" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />

          {/* Floating musical note glyph */}
          <circle cx="165" cy="50" r="4" fill="#E11D48" />
          <line x1="169" y1="50" x2="169" y2="35" stroke="#E11D48" strokeWidth="2" />
          <path d="M169 35 Q178 35 178 42" stroke="#E11D48" strokeWidth="2" />
        </svg>
      </div>
    );
  }

  // Cosmara
  return (
    <div className={`relative overflow-hidden rounded-2xl flex items-center justify-center bg-[#F0F9FF] border border-[#B9D9F3]/60 ${className}`}>
      <svg viewBox="0 0 240 160" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft daylight starlight sky */}
        <circle cx="120" cy="180" r="110" fill="#E0F2FE" />
        
        {/* Ringed Celestial Sphere */}
        <g transform="translate(120, 70)">
          <circle cx="0" cy="0" r="26" fill="#0284C7" />
          {/* Sphere shadow & texture */}
          <path d="M-26 0 A26 26 0 0 0 26 0 A26 12 0 0 1 -26 0" fill="#0369A1" />
          {/* Planetary rings */}
          <ellipse cx="0" cy="0" rx="55" ry="14" stroke="#38BDF8" strokeWidth="4" transform="rotate(-15)" fill="none" opacity="0.85" />
          <ellipse cx="0" cy="0" rx="64" ry="17" stroke="#BAE6FD" strokeWidth="2" strokeDasharray="4 2" transform="rotate(-15)" fill="none" />
        </g>

        {/* Observatory Dome Spire on mountain */}
        <path d="M40 150 L65 105 L90 150 Z" fill="#0C4A6E" opacity="0.3" />
        <path d="M60 105 Q65 98 70 105 Z" fill="#0284C7" />

        {/* Orbit track & Little Wonder Beacon */}
        <path d="M30 60 Q120 15 210 60" stroke="#7DD3FC" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="185" cy="45" r="4" fill="#C7A451" />
        <circle cx="185" cy="45" r="7" stroke="#C7A451" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
};
