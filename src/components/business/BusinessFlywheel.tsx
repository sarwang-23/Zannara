import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Layers,
  Users,
  Heart,
  ShoppingBag,
  Coins,
  RefreshCw,
  ArrowRight,
  RotateCw,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
} from 'lucide-react';

interface FlywheelStep {
  id: number;
  num: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  summary: string;
  desc: string;
  transmission: string;
  deliverables: string[];
}

export const BusinessFlywheel: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const steps: FlywheelStep[] = [
    {
      id: 0,
      num: '01',
      label: 'Original IP',
      sublabel: 'Creative Genesis',
      icon: Sparkles,
      color: '#C7A451',
      summary: 'High-concept character design, distinctive story bibles & deep lore.',
      desc: 'We invent original, emotionally resonant characters (like Momo, Tobo, and Dodi) with protected worldwide copyright and clean chain-of-title. Every asset begins with proprietary bibles and transmedia story world architecture.',
      transmission: 'Feeds Stage 02: Proprietary IP provides the rich narrative bedrock required for repeatable episodic production.',
      deliverables: ['100% Proprietary IP ownership', 'Multi-character transmedia bibles', 'Global trademark & copyright filings'],
    },
    {
      id: 1,
      num: '02',
      label: 'Content Engine',
      sublabel: 'Production Velocity',
      icon: Layers,
      color: '#E07A5F',
      summary: 'Multilingual animated shorts, songs, storybooks & digital pilots.',
      desc: 'Top creative talent combined with modern workflows accelerates storyboarding, music rendering, and simultaneous localized dubbing into English, Hindi, and key international markets.',
      transmission: 'Feeds Stage 03: High-frequency content cadences attract organic parental discovery and digital engagement.',
      deliverables: ['High-frequency digital episodic shorts', 'Original orchestral songs & rhymes', 'Multi-language localization pipelines'],
    },
    {
      id: 2,
      num: '03',
      label: 'Audience Reach',
      sublabel: 'Digital Discovery',
      icon: Users,
      color: '#0284C7',
      summary: 'Rapid organic discovery across streaming platforms & digital touchpoints.',
      desc: 'Consistent digital release cadences build a devoted base of parents and children seeking positive, wonder-driven adventures, achieving global reach without prohibitive ad-spend.',
      transmission: 'Feeds Stage 04: Repeated co-viewing habit transforms casual digital viewers into devoted character fans.',
      deliverables: ['Global streaming syndication reach', 'Direct parent community engagement', 'Cross-platform organic discovery'],
    },
    {
      id: 3,
      num: '04',
      label: 'Character Affinity',
      sublabel: 'Emotional Loyalty',
      icon: Heart,
      color: '#E11D48',
      summary: 'Deep emotional bonds, catchphrases, and childhood identification.',
      desc: 'Children do not just passively watch; they pretend to be Momo, build like Tobo, and ask questions like Dodi. This deep emotional bonding is the single most valuable asset in children’s entertainment.',
      transmission: 'Feeds Stage 05: Powerful character love converts directly into parent purchase intent for physical and digital products.',
      deliverables: ['High character recognition quotient', 'Organic playground catchphrase adoption', 'Pre-K & primary emotional loyalty'],
    },
    {
      id: 4,
      num: '05',
      label: 'Products & Partnerships',
      sublabel: 'Commercial Extension',
      icon: ShoppingBag,
      color: '#7C3AED',
      summary: 'Toys, books, publishing, school kits, and interactive companion games.',
      desc: 'High-margin consumer products and trusted brand collaborations allow children to bring Zanarra experiences into daily play, classrooms, and family bedtime routines.',
      transmission: 'Feeds Stage 06: Commercial licensing deals generate high-margin royalty streams and retail cash flows.',
      deliverables: ['Collector picture books & plush lines', 'Curriculum-aligned inquiry learning kits', 'Territorial master toy licensing'],
    },
    {
      id: 5,
      num: '06',
      label: 'Compounding Revenue',
      sublabel: 'High-Margin Returns',
      icon: Coins,
      color: '#D97706',
      summary: 'Diversified income streams spanning licensing, royalties and subscriptions.',
      desc: 'Compounding commercial cash flows with strong unit economics that do not rely solely on ad views or single-vendor distribution, generating resilient enterprise value across market cycles.',
      transmission: 'Feeds Stage 07: Free cash flow provides the expansion capital needed to invent new characters and expand story realms.',
      deliverables: ['High-margin licensing royalties (8–14%)', 'Recurring software & club subscriptions', 'Territorial broadcast minimum guarantees'],
    },
    {
      id: 6,
      num: '07',
      label: 'Reinvest in IP',
      sublabel: 'Perpetual Moat',
      icon: RefreshCw,
      color: '#059669',
      summary: 'Reinvesting capital into new story realms, characters, and franchise depth.',
      desc: 'Cash flow funds subsequent universe expansions (Terra Viva, Mechanika, Mythara, Sonika, Cosmara), unlocking new demographic cohorts and compounding the franchise moat in perpetuity.',
      transmission: 'Loops back to Stage 01: Newly developed story realms and characters enter Stage 1, multiplying the flywheel’s momentum.',
      deliverables: ['Continuous franchise world expansions', 'New character spin-offs & sub-universes', 'Defensible perpetual intellectual property moat'],
    },
  ];

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  // Trigonometric coordinates for 7 nodes on a 500x500 canvas
  // Radius R = 175px, Center = (250, 250)
  // Angle for node i: -90° + i * (360° / 7)
  const centerX = 250;
  const centerY = 250;
  const radius = 175;

  const nodePositions = steps.map((_, i) => {
    const angleDeg = -90 + i * (360 / 7);
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);
    return { x, y, angleDeg };
  });

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <div className="w-full bg-white rounded-3xl border border-[#C7A451]/30 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
      
      {/* Ambient background illumination */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[#C7A451]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 bg-[#17233A]"
      />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between pb-8 border-b border-[#E8DEC9] gap-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#C7A451]/40 text-[#C7A451] text-[10.5px] font-black uppercase tracking-[0.22em] mb-3">
            <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Compounding Economic Moat</span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A] tracking-tight leading-[1.12]"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            The Self-Sustaining Franchise Engine
          </h2>
          <p className="text-[#17233A]/75 text-sm sm:text-base mt-2 leading-relaxed">
            Unlike one-off media hits, Zanarra is architected as an interconnected economic flywheel. Each stage of audience loyalty directly compounds the equity of the original IP.
          </p>
        </div>

        {/* Stepper & Auto-play controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
              isAutoPlaying
                ? 'bg-[#17233A] text-white border-[#17233A]'
                : 'bg-[#FAF7F0] hover:bg-white text-[#17233A] border-[#E8DEC9]'
            }`}
            title={isAutoPlaying ? 'Pause automatic rotation' : 'Start automatic rotation'}
          >
            {isAutoPlaying ? <Pause className="w-3 h-3 text-[#C7A451]" /> : <Play className="w-3 h-3 text-[#C7A451]" />}
            <span>{isAutoPlaying ? 'Auto-Cycle Active' : 'Auto-Cycle'}</span>
          </button>

          <div className="flex items-center gap-1 bg-[#FAF7F0] p-1 rounded-full border border-[#E8DEC9]">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="p-1.5 rounded-full bg-white hover:bg-gray-100 text-[#17233A] shadow-2xs transition-colors"
              aria-label="Previous Flywheel Stage"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-[#17233A] px-2.5 font-mono">
              0{activeStep + 1} / 0{steps.length}
            </span>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="p-1.5 rounded-full bg-white hover:bg-gray-100 text-[#17233A] shadow-2xs transition-colors"
              aria-label="Next Flywheel Stage"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage Grid: Circular Radial Wheel (Left) + Detailed Stage Dossier (Right) */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">

        {/* ── LEFT: Genuinely Circular 7-Stage Radial Flywheel (Desktop & Tablet) ── */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          
          {/* Radial Wheel Container */}
          <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center select-none">
            
            {/* SVG Orbital Track & Connection Paths */}
            <svg
              viewBox="0 0 500 500"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <linearGradient id="goldOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C7A451" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#E07A5F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.8" />
                </linearGradient>

                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer delicate dashed guide ring */}
              <circle
                cx="250"
                cy="250"
                r="175"
                fill="none"
                stroke="#C7A451"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeOpacity="0.45"
              />

              {/* Inner ambient ring */}
              <circle
                cx="250"
                cy="250"
                r="105"
                fill="none"
                stroke="#17233A"
                strokeWidth="1"
                strokeOpacity="0.1"
              />

              {/* Clockwise directional connection lines between nodes */}
              {nodePositions.map((pos, idx) => {
                const nextPos = nodePositions[(idx + 1) % nodePositions.length];
                const isCurrentTransition = activeStep === idx;

                return (
                  <path
                    key={idx}
                    d={`M ${pos.x} ${pos.y} A 175 175 0 0 1 ${nextPos.x} ${nextPos.y}`}
                    fill="none"
                    stroke={isCurrentTransition ? '#C7A451' : '#E8DEC9'}
                    strokeWidth={isCurrentTransition ? 3 : 1.5}
                    strokeOpacity={isCurrentTransition ? 1 : 0.6}
                    strokeDasharray={isCurrentTransition ? 'none' : '3 3'}
                    filter={isCurrentTransition ? 'url(#goldGlow)' : undefined}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* Central Hub Core */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-36 h-36 rounded-full bg-[#FAF7F0] border border-[#C7A451]/40 shadow-inner flex flex-col items-center justify-center text-center p-3 z-10">
                <span className="w-2 h-2 rounded-full bg-[#C7A451] animate-ping mb-1" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C7A451]">
                  Core Engine
                </span>
                <span className="font-serif text-[15px] font-bold text-[#17233A] leading-tight mt-0.5">
                  Zanarra IP
                </span>
                <span className="text-[9px] text-[#17233A]/60 font-medium leading-tight mt-1 max-w-[85px]">
                  Self-Sustaining Value Moat
                </span>
              </div>
            </div>

            {/* The 7 Radially Positioned Interactive Node Buttons */}
            {steps.map((step, idx) => {
              const pos = nodePositions[idx];
              const Icon = step.icon;
              const isActive = activeStep === idx;

              // Convert viewBox (500x500) coordinate to percentage
              const leftPercent = (pos.x / 500) * 100;
              const topPercent = (pos.y / 500) * 100;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center transition-all duration-300 z-20 ${
                    isActive
                      ? 'w-14 h-14 sm:w-16 sm:h-16 bg-[#17233A] text-white shadow-xl scale-110 ring-4 ring-[#C7A451]/60'
                      : 'w-11 h-11 sm:w-12 sm:h-12 bg-white text-[#17233A] hover:bg-[#FAF7F0] border border-[#E8DEC9] hover:border-[#C7A451] shadow-md hover:scale-105'
                  }`}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                  aria-label={`Select ${step.label}`}
                >
                  <Icon
                    className={`transition-transform duration-300 ${
                      isActive ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4'
                    }`}
                    style={{ color: isActive ? '#C7A451' : step.color }}
                  />
                  <span
                    className={`font-mono text-[9px] font-bold leading-none mt-0.5 ${
                      isActive ? 'text-white' : 'text-[#17233A]/70'
                    }`}
                  >
                    {step.num}
                  </span>

                  {/* Tooltip / Label adjacent to node */}
                  <span
                    className={`absolute whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md pointer-events-none transition-all duration-200 hidden sm:block ${
                      isActive
                        ? 'bg-[#17233A] text-white border border-[#C7A451]/50 opacity-100 shadow-xs'
                        : 'bg-white/95 text-[#17233A]/80 border border-[#E8DEC9] opacity-75 group-hover:opacity-100'
                    }`}
                    style={{
                      transform:
                        pos.angleDeg > 90 || pos.angleDeg < -90
                          ? 'translate(-65%, 26px)'
                          : 'translate(65%, 26px)',
                    }}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Stage Indicator Pills (Mobile Friendly) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 w-full">
            {steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlaying(false);
                }}
                className={`px-2.5 py-1 rounded-full text-[10.5px] font-bold transition-all ${
                  activeStep === idx
                    ? 'bg-[#17233A] text-white shadow-xs'
                    : 'bg-[#FAF7F0] text-[#17233A]/70 hover:bg-gray-100'
                }`}
              >
                <span>{s.num}. {s.label}</span>
              </button>
            ))}
          </div>

        </div>

        {/* ── RIGHT: Active Stage Dossier & Transmission Mechanism ── */}
        <div className="lg:col-span-6">
          <div className="bg-[#FAF7F0] rounded-2xl border border-[#C7A451]/30 p-6 sm:p-8 shadow-sm">
            
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DEC9]">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                  style={{ backgroundColor: `${active.color}15`, border: `1px solid ${active.color}40` }}
                >
                  <ActiveIcon className="w-5 h-5" style={{ color: active.color }} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C7A451] block leading-none">
                    Flywheel Stage 0{activeStep + 1} of 07
                  </span>
                  <span className="text-xs font-bold text-[#17233A] font-sans">
                    {active.sublabel}
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white border border-[#E8DEC9] text-[#17233A]">
                NODE {active.num}
              </span>
            </div>

            {/* Master Stage Title & Summary */}
            <div className="mt-5 space-y-2.5">
              <h3
                className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A] leading-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {active.summary}
              </h3>
              <p className="text-sm text-[#17233A]/80 leading-relaxed font-sans pt-1">
                {active.desc}
              </p>
            </div>

            {/* Strategic Deliverables List */}
            <div className="mt-5 pt-4 border-t border-[#E8DEC9]/80 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500 block">
                Key Strategic Outputs
              </span>
              <div className="space-y-1.5">
                {active.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#17233A]/85 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transmission Mechanism: How it powers the next node */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-[#C7A451]/30 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#C7A451] mb-1">
                <ArrowRight className="w-3.5 h-3.5" />
                <span>Value Transmission Mechanism</span>
              </div>
              <p className="text-xs text-[#17233A]/85 font-medium leading-relaxed">
                {active.transmission}
              </p>
            </div>

            {/* Stage Navigation Stepper Footer */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#E8DEC9]">
              <button
                onClick={() => {
                  setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
                  setIsAutoPlaying(false);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#17233A] hover:text-[#C7A451] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Stage</span>
              </button>

              <button
                onClick={() => {
                  setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
                  setIsAutoPlaying(false);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#17233A] hover:bg-[#233554] text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Advance to Stage 0{((activeStep + 1) % steps.length) + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
