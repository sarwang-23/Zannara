import React from 'react';
import { 
  Film, 
  TrendingUp, 
  Globe2, 
  Handshake, 
  Rocket, 
  AlertCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface RoadmapPhase {
  phaseNum: string;
  phaseLabel: string;
  name: string;
  focus: string;
  status: 'active' | 'planned';
  commercialOutput: string;
  icon: React.ElementType;
}

const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phaseNum: '01',
    phaseLabel: 'PHASE 1',
    name: 'Establish Original IP & Proof of Concept',
    focus: 'Original characters, story world architecture, initial pilot productions, and core community resonance.',
    status: 'active',
    commercialOutput: 'Character IP & Pilot Content',
    icon: Film
  },
  {
    phaseNum: '02',
    phaseLabel: 'PHASE 2',
    name: 'Repeatable Formats & Distribution Expansion',
    focus: 'Grow multi-channel audience, release digital episodic stories, and test initial consumer monetization.',
    status: 'planned',
    commercialOutput: 'Expanded Audience',
    icon: TrendingUp
  },
  {
    phaseNum: '03',
    phaseLabel: 'PHASE 3',
    name: 'Licensing, Merchandise & Education',
    focus: 'Expand into physical products, education packages, and lifestyle categories.',
    status: 'planned',
    commercialOutput: 'Broader Consumer Reach',
    icon: Globe2
  },
  {
    phaseNum: '04',
    phaseLabel: 'PHASE 4',
    name: 'Global Localization & Strategic Scale',
    focus: 'Multi-language dubbing, regional partnerships, and international market entry.',
    status: 'planned',
    commercialOutput: 'Global Distribution',
    icon: Handshake
  },
  {
    phaseNum: '05',
    phaseLabel: 'PHASE 5',
    name: 'Diversified Global IP Powerhouse',
    focus: 'Multiple franchises, expanded categories and global platforms.',
    status: 'planned',
    commercialOutput: '₹100–120 Cr Revenue',
    icon: Rocket
  }
];

export const CommercialRoadmap: React.FC = () => {
  return (
    <section className="relative rounded-3xl border border-[#DFD3C2] p-6 sm:p-9 lg:p-12 shadow-[0_24px_80px_rgba(11,27,54,0.08)] overflow-hidden">
      
      {/* ── PANORAMIC 16:9 SKYLINE & 3D GOLDEN BARS BACKGROUND ── */}
      <picture className="absolute inset-0 z-0 pointer-events-none select-none">
        <source srcSet="/roadmap-panoramic.webp" type="image/webp" />
        <img
          src="/roadmap-panoramic.jpg"
          alt="Commercial Roadmap 3D Golden Growth Chart and Financial Skyline at Dawn"
          className="w-full h-full object-cover object-[80%_center] lg:object-[right_center]"
        />
      </picture>

      {/* ── LUMINOUS GRADIENT OVERLAYS (ENSURES FLAWLESS CARD CONTRAST WHILE SHOWCASING THE 3D GOLDEN CHART) ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.92) 42%, rgba(255,255,255,0.70) 68%, rgba(255,255,255,0.20) 84%, rgba(255,255,255,0.02) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, transparent 40%, rgba(255,255,255,0.60) 100%)'
        }}
      />

      {/* ── TOP HEADER ── */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E6DCC9]/80 pb-6 gap-6">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E4]/90 border border-[#C58B39]/50 shadow-2xs backdrop-blur-xs mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#B87B28]" strokeWidth={2.4} />
            <span className="text-[10.5px] font-bold text-[#9E651E] tracking-[0.16em] uppercase">
              COMMERCIAL ROADMAP
            </span>
          </div>

          {/* Master Headline */}
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B1B36] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
          >
            The Path to ₹100–120 Cr
          </h2>

          {/* Subtitle */}
          <p className="text-[#3E4E68] text-[14.5px] sm:text-[16px] leading-[1.65] mt-2 max-w-2xl font-normal">
            Structured in five sequential milestones to expand from creative proof-of-concept into a multi-channel international franchise powerhouse.
          </p>
        </div>

        {/* Top-Right Badges */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
          
          {/* Active Status Capsule */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#DFCDB7] shadow-2xs backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C58B39] shadow-[0_0_8px_#C58B39] animate-pulse" />
            <span className="text-[11.5px] font-bold text-[#0B1B36]">
              Phase 1 Active · Phases 2–5: Staged Milestones
            </span>
          </div>

          {/* Enterprise Ambition Floating Dark Navy Card */}
          <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0B1B36] via-[#102344] to-[#0B1B36] border border-[#C58B39]/70 shadow-[0_8px_30px_rgba(11,27,54,0.25)] text-right">
            <span 
              className="font-serif text-2xl sm:text-[28px] font-bold text-[#D4AF37] leading-none block"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ₹100–120 Cr
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-200 block mt-1">
              LONG-TERM REVENUE AMBITION
            </span>
          </div>

        </div>
      </div>

      {/* ── 5 SEQUENTIAL MILESTONE CARDS (INTEGRATED SEAMLESSLY WITH 3D GOLDEN BARS) ── */}
      <div className="relative z-10 pt-4 pb-2">
        
        {/* Horizontal Layout: 5 Cards occupy 78% of the stage, leaving the right 22% for the soaring 3D golden bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-3 items-stretch relative">
          
          {/* 5 Cards Container: Spans 9–10 columns on desktop */}
          <div className="lg:col-span-9 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-3 items-stretch relative">
            
            {/* Horizontal Gold Connecting Rail running behind icons on desktop */}
            <div className="hidden lg:block absolute top-[36px] left-6 right-6 h-[2px] bg-gradient-to-r from-[#C58B39] via-[#D8AE66] to-[#E5CCA0] z-0 pointer-events-none" />

            {ROADMAP_PHASES.map((stage, idx) => {
              const IconComponent = stage.icon;
              const isActive = stage.status === 'active';
              const isTarget = stage.phaseNum === '05';

              return (
                <div key={stage.phaseNum} className="relative flex flex-col z-10">
                  
                  {/* Frosted Glass Card Container */}
                  <div
                    className={`h-full rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 relative group backdrop-blur-md ${
                      isActive
                        ? 'bg-[#0B1B36]/95 text-white border-2 border-[#C58B39] shadow-[0_16px_40px_rgba(11,27,54,0.35),0_0_24px_rgba(197,139,57,0.3)] ring-1 ring-[#C58B39]/50'
                        : isTarget
                        ? 'bg-white/85 text-[#0B1B36] border border-[#C58B39]/80 shadow-[0_8px_24px_rgba(197,139,57,0.15)] hover:bg-white hover:border-[#C58B39] hover:-translate-y-1'
                        : 'bg-white/80 text-[#0B1B36] border border-[#DFD2BF] shadow-[0_4px_20px_rgba(11,27,54,0.05)] hover:bg-white/95 hover:border-[#C58B39]/70 hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      {/* Top: Icon Medallion */}
                      <div className="flex flex-col items-center text-center mb-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-105 shadow-md ${
                            isActive
                              ? 'bg-gradient-to-br from-[#B87B28] via-[#D49E45] to-[#B87B28] text-[#0B1B36] ring-4 ring-[#C58B39]/35 shadow-[0_0_18px_rgba(197,139,57,0.6)]'
                              : 'bg-[#0B1B36] text-[#D4AF37] border-2 border-[#C58B39] shadow-sm'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" strokeWidth={2.2} />
                        </div>

                        {/* Phase Tag */}
                        <span
                          className={`text-[10px] font-bold tracking-[0.18em] uppercase ${
                            isActive ? 'text-[#D4AF37]' : 'text-[#8A5A1B]'
                          }`}
                        >
                          {isActive ? '✦ PHASE 1 ✦' : stage.phaseLabel}
                        </span>
                      </div>

                      {/* Phase Title */}
                      <h3
                        className={`font-serif text-[14.5px] sm:text-[15.5px] font-bold text-center leading-snug mb-2 ${
                          isActive ? 'text-white' : 'text-[#0B1B36]'
                        }`}
                        style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
                      >
                        {stage.name}
                      </h3>

                      {/* Focus Description */}
                      <p
                        className={`text-[11.5px] leading-[1.6] text-center mb-4 ${
                          isActive ? 'text-gray-300' : 'text-[#4A5A72]'
                        }`}
                      >
                        {stage.focus}
                      </p>
                    </div>

                    {/* Bottom Key Output Pill */}
                    <div className="pt-2 border-t border-black/5 dark:border-white/10 mt-auto">
                      <div
                        className={`py-2 px-2.5 rounded-xl text-center leading-tight shadow-xs ${
                          isActive
                            ? 'bg-gradient-to-r from-[#B87B28] via-[#DFAB54] to-[#B87B28] text-[#0B1B36] font-bold'
                            : isTarget
                            ? 'bg-gradient-to-r from-[#C58B39] via-[#DFAB54] to-[#C58B39] text-[#0B1B36] font-bold border border-[#C58B39]/60'
                            : 'bg-gradient-to-r from-[#F7E6CE] to-[#F2D7B3] text-[#7A4E18] font-bold border border-[#DFCDB7]'
                        }`}
                      >
                        <span className="block text-[8.5px] uppercase tracking-wider font-bold opacity-80 mb-0.5">
                          Key Output:
                        </span>
                        <span className="block text-[11px] font-bold leading-tight">
                          {stage.commercialOutput}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Horizontal Arrow Indicator between desktop cards */}
                  {idx < 4 && (
                    <div className="hidden lg:flex absolute -right-2 top-[36px] -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-4 h-4 rounded-full bg-[#FAF2E4] border border-[#C58B39] flex items-center justify-center text-[#B87B28] shadow-xs">
                        <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    </div>
                  )}

                  {/* Arrow pointing from Phase 5 into the 3D Golden Bars on the right */}
                  {idx === 4 && (
                    <div className="hidden lg:flex absolute -right-3 top-[36px] -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-5 h-5 rounded-full bg-[#C58B39] text-[#0B1B36] flex items-center justify-center shadow-md animate-pulse">
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Right Empty Spacing for 3D Golden Bars & Arrow (3 Columns on Large Desktop) */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3 min-h-[360px] pointer-events-none" />

        </div>

      </div>

      {/* ── PLANNING ASSUMPTIONS DISCLAIMER ── */}
      <div className="relative z-10 flex items-center justify-center gap-2.5 p-3.5 sm:p-4 rounded-2xl border border-[#E5DAC6] text-[11px] sm:text-[11.5px] text-[#556987] leading-relaxed bg-white/85 backdrop-blur-md text-center max-w-4xl mx-auto shadow-2xs mt-4">
        <AlertCircle className="w-4 h-4 text-[#9E651E] shrink-0" />
        <span>
          <strong className="text-[#0B1B36]">Planning Assumptions Disclaimer:</strong> The financial trajectory depicted above represents management base-case planning estimates subject to staged capital deployment, creative IP traction, licensing agreement timelines, and commercial validation. These projections do not constitute a performance guarantee.
        </span>
      </div>

    </section>
  );
};
