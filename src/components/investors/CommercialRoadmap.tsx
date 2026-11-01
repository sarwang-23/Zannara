import React from 'react';
import { 
  Sparkles, 
  Film, 
  Package, 
  Globe2, 
  TrendingUp, 
  ShieldAlert, 
  Clock,
  Compass
} from 'lucide-react';

interface RoadmapPhase {
  phaseNum: string;
  phaseLabel: string;
  name: string;
  focus: string;
  status: 'active' | 'planned';
  statusBadge: string;
  commercialOutput: string;
  icon: React.ElementType;
}

const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phaseNum: '01',
    phaseLabel: 'Phase 1',
    name: 'Establish Original IP & Proof of Concept',
    focus: 'Original characters, story world architecture, initial pilot productions, and core community resonance.',
    status: 'active',
    statusBadge: 'Active Execution Phase',
    commercialOutput: 'Character copyright registrations, pilot streaming shorts, initial audience traction',
    icon: Sparkles
  },
  {
    phaseNum: '02',
    phaseLabel: 'Phase 2',
    name: 'Repeatable Formats & Distribution Expansion',
    focus: 'Grow multi-channel audience, release digital episodic stories, and test initial consumer monetization.',
    status: 'planned',
    statusBadge: 'Planned Milestone',
    commercialOutput: 'Episodic video releases, digital music streaming, first collector picture books',
    icon: Film
  },
  {
    phaseNum: '03',
    phaseLabel: 'Phase 3',
    name: 'Licensing, Merchandise & Education',
    focus: 'Expand into physical publishing, retail toy partnerships, and curriculum-aligned early education packages.',
    status: 'planned',
    statusBadge: 'Planned Milestone',
    commercialOutput: 'Plush & figurine retail distribution, scholastic licensing, classroom storytelling kits',
    icon: Package
  },
  {
    phaseNum: '04',
    phaseLabel: 'Phase 4',
    name: 'Global Localization & Strategic Scale',
    focus: 'Multilingual dubbing, territorial syndication agreements, and international co-marketing partnerships.',
    status: 'planned',
    statusBadge: 'Planned Milestone',
    commercialOutput: '10+ international languages, European & Southeast Asian broadcast licensing syndication',
    icon: Globe2
  },
  {
    phaseNum: '05',
    phaseLabel: 'Phase 5',
    name: 'Diversified Global IP Powerhouse',
    focus: 'Ecosystem of multiple interconnected story franchises driving ₹100–120 Cr annual revenue with high EBITDA margins.',
    status: 'planned',
    statusBadge: 'Planned Target: ₹100–120 Cr',
    commercialOutput: 'Compounding multi-universe franchise catalog, institutional IP valuation & global enterprise scale',
    icon: TrendingUp
  }
];

export const CommercialRoadmap: React.FC = () => {
  return (
    <section className="bg-white rounded-3xl border border-[#E8DEC9] p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(11,27,54,0.04)] space-y-10">
      {/* ── HEADER ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#EBDCC8]/80 pb-6 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E7] border border-[#C58B39]/40 text-[#A87027] text-[11px] font-bold uppercase tracking-[0.16em] mb-2.5">
            <Compass className="w-3.5 h-3.5 text-[#C58B39]" /> Commercial Roadmap
          </div>
          <h2 
            className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B1B36] tracking-tight leading-[1.12]"
            style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
          >
            The Path to ₹100–120 Cr
          </h2>
          <p className="text-[#42526E] text-[15px] sm:text-[16px] leading-[1.6] mt-2">
            Structured in five sequential milestones to expand from creative proof-of-concept into a multi-channel international franchise powerhouse.
          </p>
        </div>

        {/* Milestone Indicator Badge */}
        <div className="flex items-center gap-3 bg-[#FAF7F0] px-4 py-3 rounded-2xl border border-[#EBDCC8] shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C58B39] animate-pulse" />
          <span className="text-xs font-bold text-[#0B1B36]">
            Phase 1 Active · Phases 2–5 Staged Milestones
          </span>
        </div>
      </div>

      {/* ── FIVE-STAGE PROGRESSION TIMELINE ── */}
      <div className="relative space-y-4 sm:space-y-5">
        {/* Continuous Left Spine Rail on Desktop */}
        <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#0B1B36] via-[#C58B39]/50 to-[#EBDCC8] z-0" />

        {ROADMAP_PHASES.map((stage, idx) => {
          const IconComponent = stage.icon;
          const isActive = stage.status === 'active';

          return (
            <div
              key={stage.phaseNum}
              className={`relative z-10 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-[#0B1B36] text-white p-6 sm:p-7 shadow-[0_12px_32px_rgba(11,27,54,0.18)] border border-[#C58B39]/50'
                  : 'bg-[#FAF7F0] text-[#0B1B36] p-5 sm:p-6 border border-[#EBDCC8] hover:border-[#C58B39]/50 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                
                {/* Left: Stage Number, Icon & Content */}
                <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
                  {/* Distinctive Stage Number Badge */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-xs transition-colors ${
                      isActive
                        ? 'bg-[#C58B39] text-[#0B1B36] ring-4 ring-[#C58B39]/20'
                        : 'bg-white text-[#0B1B36] border border-[#EBDCC8]'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" strokeWidth={2.2} />
                  </div>

                  <div className="space-y-1.5">
                    {/* Phase Tag & Title */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isActive ? 'text-[#D4AF37]' : 'text-[#A87027]'
                        }`}
                      >
                        {stage.phaseLabel}
                      </span>
                      <span className={`text-xs ${isActive ? 'text-gray-400' : 'text-gray-300'}`}>•</span>
                      <h4
                        className={`font-serif text-lg sm:text-xl font-bold leading-snug ${
                          isActive ? 'text-white' : 'text-[#0B1B36]'
                        }`}
                        style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
                      >
                        {stage.name}
                      </h4>
                    </div>

                    {/* Focus Description */}
                    <p
                      className={`text-[13px] sm:text-[14px] leading-relaxed ${
                        isActive ? 'text-gray-300' : 'text-[#42526E]'
                      }`}
                    >
                      {stage.focus}
                    </p>

                    {/* Commercial Deliverables Pill */}
                    <div className="pt-1 flex items-center gap-2">
                      <span
                        className={`text-[10px] uppercase font-bold tracking-wider ${
                          isActive ? 'text-gray-400' : 'text-gray-400'
                        }`}
                      >
                        Key Output:
                      </span>
                      <span
                        className={`text-[11.5px] font-medium ${
                          isActive ? 'text-[#E0C078]' : 'text-[#1C2B44]'
                        }`}
                      >
                        {stage.commercialOutput}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Status Identifier Badge */}
                <div className="lg:text-right shrink-0 flex items-center lg:flex-col lg:items-end justify-between border-t lg:border-t-0 pt-3 lg:pt-0 border-white/10 lg:border-transparent">
                  <span
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs ${
                      isActive
                        ? 'bg-[#C58B39] text-[#0B1B36]'
                        : idx === 4
                        ? 'bg-[#FAF3E7] text-[#A87027] border border-[#C58B39]/50'
                        : 'bg-white text-gray-600 border border-gray-200'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-[#0B1B36] animate-pulse" />
                        {stage.statusBadge}
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 text-gray-400" />
                        {stage.statusBadge}
                      </>
                    )}
                  </span>
                  <span
                    className={`text-[10px] mt-1 ${
                      isActive ? 'text-gray-400' : 'text-gray-400'
                    }`}
                  >
                    {isActive ? 'Current Focus' : `Milestone 0${idx + 1}`}
                  </span>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* ── NOTICE & DISCLAIMER ── */}
      <div className="flex items-center gap-2.5 text-xs text-[#556987] italic pt-2 border-t border-[#EBDCC8]/80">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          <strong>Operational Notice:</strong> Phase 1 is the currently funded active execution phase. Phases 2 through 5 are staged milestone targets contingent on performance milestones, market reception, and subsequent growth rounds.
        </span>
      </div>
    </section>
  );
};
