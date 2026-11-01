import React from 'react';
import { 
  Lightbulb, 
  Settings, 
  Layers, 
  Globe, 
  Rocket, 
  TrendingUp,
  Infinity as InfinityIcon,
  Zap,
  ArrowUpRight,
  Gem
} from 'lucide-react';

interface ThesisCardData {
  num: string;
  stageNum: string;
  stageTitle: string;
  icon: React.ElementType;
  title: string;
  statement: string;
  explanation: string;
  image: string;
  edgeLabel: string;
  edgeIcon: React.ElementType;
  edgeIconCustom?: string;
}

const THESIS_CARDS: ThesisCardData[] = [
  {
    num: '01',
    stageNum: 'STAGE 1',
    stageTitle: 'STAGE 1: IP ASSET CREATION',
    icon: Lightbulb,
    title: 'Original Intellectual Property',
    statement: '100% proprietary character and universe ownership.',
    explanation: 'Unlike service studios or contract animation vendors, Zanarra retains unrestricted IP ownership of every character, realm, and story world.',
    image: '/thesis-card-01-sketchbook.webp',
    edgeLabel: '100% IP Ownership',
    edgeIcon: InfinityIcon
  },
  {
    num: '02',
    stageNum: 'STAGE 2',
    stageTitle: 'STAGE 2: AGILE PRODUCTION',
    icon: Settings,
    title: 'Repeatable Production Engine',
    statement: 'Capital-efficient generation and rapid localised delivery.',
    explanation: 'Proprietary narrative frameworks paired with AI-accelerated visual pipelines enable 5–10x faster concept-to-screen velocity.',
    image: '/thesis-card-02-production.webp',
    edgeLabel: '10x Velocity',
    edgeIcon: Zap
  },
  {
    num: '03',
    stageNum: 'STAGE 3',
    stageTitle: 'STAGE 3: 7X MONETISATION',
    icon: Layers,
    title: 'Multiple Monetisation Pathways',
    statement: 'Seven diversified revenue streams.',
    explanation: 'A single high-affinity character scales simultaneously across short digital streaming, music, episodic series, publishing, physical toys and more.',
    image: '/thesis-card-03-monetisation.webp',
    edgeLabel: '7 Revenue Streams',
    edgeIcon: ArrowUpRight
  },
  {
    num: '04',
    stageNum: 'STAGE 4',
    stageTitle: 'STAGE 4: GLOBAL EXPORT',
    icon: Globe,
    title: 'International Scalability',
    statement: 'Global-ready content and partnerships.',
    explanation: "Conceived with universal archetypes, curiosity and emotional warmth, Zanarra's stories transcend geographic borders.",
    image: '/thesis-card-04-scalability.webp',
    edgeLabel: 'Global Footprint',
    edgeIcon: Globe
  },
  {
    num: '05',
    stageNum: 'STAGE 5',
    stageTitle: 'STAGE 5: GENERATIONAL EQUITY',
    icon: Rocket,
    title: 'Generational Equity',
    statement: 'A lasting brand for future generations.',
    explanation: 'Enduring childhood affinity translates into generational LTV, creating a multi-decade value proposition.',
    image: '/thesis-card-05-equity.webp',
    edgeLabel: 'Decade-Scale Value',
    edgeIcon: Gem
  }
];

export const ThesisPillars: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden space-y-6 sm:space-y-8">
      
      {/* ── TOP HEADER (CLEAN INSTITUTIONAL HEADING) ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EBDCC8]/80 pb-6 gap-6">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Label Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E4] border border-[#C58B39]/50 shadow-2xs mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#B87B28]" strokeWidth={2.2} />
            <span className="text-[10.5px] font-bold text-[#A87027] tracking-[0.14em] uppercase">
              STRATEGIC HYPOTHESES &amp; EDGE
            </span>
          </div>

          {/* Master Headline */}
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B36] tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
          >
            Why This Business
          </h2>

          {/* Subtitle */}
          <p className="text-[#3A4A63] text-[15px] sm:text-[16px] leading-[1.6] mt-2.5 max-w-xl">
            Five interconnected strategic thesis pillars that underpin the long-term compounding economics and defensibility of Zanarra.
          </p>

          {/* Subtle gold divider line */}
          <div className="w-28 h-[1.5px] bg-gradient-to-r from-[#C58B39] to-transparent mt-3.5" />
        </div>

        {/* Executive Moat Summary Badge */}
        <div className="hidden lg:flex flex-col items-end text-right">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
            Institutional Value Driver
          </span>
          <span className="font-serif text-xl font-bold text-[#0B1B36] mt-0.5">
            IP Ownership &times; AI Velocity
          </span>
          <span className="text-xs text-[#A87027] font-semibold mt-0.5">
            Compounding multi-decade franchise equity
          </span>
        </div>
      </div>

      {/* ── CONNECTED 5-STAGE PROGRESSION TIMELINE BAR ── */}
      <div className="relative w-full pt-1 pb-2">
        {/* Horizontal Connecting Gold Rail (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[1.5px] bg-gradient-to-r from-[#C58B39]/40 via-[#C58B39]/80 to-[#C58B39]/40 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-3.5 relative z-10">
          {THESIS_CARDS.map((item, idx) => (
            <div key={item.stageNum} className="flex items-center justify-center">
              <div className="w-full py-1.5 px-3 rounded-full bg-[#FCFAF5] border border-[#DFD3BE] shadow-2xs flex items-center justify-center gap-2 group hover:border-[#C58B39] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#C58B39] shrink-0" />
                <span className="text-[10px] font-bold text-[#0B1B36] uppercase tracking-wider truncate">
                  {item.stageTitle}
                </span>
                {idx < 4 && (
                  <span className="hidden lg:inline-block w-1.5 h-1.5 rounded-full bg-[#C58B39]/60 shrink-0 ml-auto" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FIVE DISTINCTIVE THESIS CARDS (1:1 RECREATION OF REFERENCE) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 items-stretch pt-2">
        {THESIS_CARDS.map((card) => {
          const IconComponent = card.icon;
          const EdgeIcon = card.edgeIcon;

          return (
            <div
              key={card.num}
              className="group relative bg-[#FCFAF5] hover:bg-white rounded-3xl border border-[#E5D7C3] hover:border-[#C58B39]/80 p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(11,27,54,0.04)] hover:shadow-[0_14px_36px_rgba(11,27,54,0.09)] hover:-translate-y-1"
            >
              <div>
                {/* 1. Header Row: Large Gold Number & Circular Icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <span 
                    className="font-serif text-3xl sm:text-[34px] font-bold text-[#C58B39] leading-none"
                    style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
                  >
                    {card.num}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-[#FAF2E4] border border-[#E0D0BA] flex items-center justify-center text-[#0B1B36] group-hover:bg-[#0B1B36] group-hover:text-[#C58B39] group-hover:border-[#0B1B36] transition-all shrink-0 shadow-2xs">
                    <IconComponent className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* 2. Card Title */}
                <h3 
                  className="font-serif text-[18px] sm:text-[19px] font-bold text-[#0B1B36] leading-snug mb-2"
                  style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
                >
                  {card.title}
                </h3>

                {/* 3. Gold Strategic Statement */}
                <p className="text-[12px] font-bold text-[#B87B28] leading-tight mb-2.5">
                  {card.statement}
                </p>

                {/* 4. Business Explanation */}
                <p className="text-[11.5px] text-[#3A4A63] leading-[1.62]">
                  {card.explanation}
                </p>
              </div>

              {/* 5. Dedicated Bottom Artwork & Zanarra Edge */}
              <div className="pt-3 mt-4 border-t border-[#EBDCC8]/60 flex flex-col items-center">
                
                {/* Visual Illustration of the Thesis Concept */}
                <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden my-2 flex items-center justify-center bg-white/40">
                  <picture>
                    <source srcSet={card.image} type="image/webp" />
                    <img
                      src={card.image.replace('.webp', '.png')}
                      alt={card.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </picture>
                </div>

                {/* Zanarra Edge Section */}
                <div className="w-full text-center pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-1">
                    ZANARRA EDGE
                  </span>
                  
                  <div className="inline-flex items-center justify-center gap-1.5 text-[11.5px] font-bold text-[#0B1B36] bg-[#FAF3E7] px-3 py-1 rounded-full border border-[#E8DAC5] shadow-2xs">
                    <EdgeIcon className="w-3.5 h-3.5 text-[#C58B39]" strokeWidth={2.2} />
                    <span>{card.edgeLabel}</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* ── BOTTOM GOLDEN CURVE ACCENT ── */}
      <div 
        aria-hidden="true" 
        className="w-full h-4 bg-gradient-to-r from-transparent via-[#C58B39]/25 to-transparent rounded-full mt-4" 
      />
    </section>
  );
};
