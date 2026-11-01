import React from 'react';
import { 
  Globe, 
  Layers, 
  Zap, 
  BarChart3, 
  Award,
  AlertCircle,
  BookOpen,
  Film,
  Package,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export const FranchiseHorizons: React.FC = () => {
  const franchisePillars = [
    {
      label: 'MULTIPLE DRIVERS',
      title: 'IP Compounding & Global Licensing',
      metric: 'High recurring margins',
      desc: 'Licensing agreements generate 70–85% gross margins as external broadcast and retail partners bear manufacturing overhead.',
      icon: Layers
    },
    {
      label: 'CAPITAL EFFICIENCY',
      title: 'AI-Assisted Production Velocity',
      metric: 'Faster, cost-efficient production',
      desc: 'Proprietary narrative workflows compress concept-to-screen pre-production cycles from months to days without fixed studio bloat.',
      icon: Zap
    },
    {
      label: 'MARKET SIZE',
      title: '$100B+ Global Kids Licensing',
      metric: 'Massive international demand',
      desc: 'Global character licensing and entertainment merchandise captures durable, decade-long institutional enterprise multiples.',
      icon: BarChart3
    }
  ];

  const ecosystemSectors = [
    { name: 'Publishing', icon: BookOpen },
    { name: 'Animation', icon: Film },
    { name: 'Merchandise', icon: Package },
    { name: 'Licensing', icon: Award },
    { name: 'Education', icon: GraduationCap }
  ];

  return (
    <section className="bg-white rounded-3xl border border-[#DFD3C2] p-6 sm:p-10 lg:p-12 shadow-[0_20px_70px_rgba(11,27,54,0.06)] space-y-8 lg:space-y-10 relative overflow-hidden">
      
      {/* ── AMBIENT WARM CORNER GLOW ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-28 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, #EAD8BD 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-24 right-10 w-96 h-96 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #C58B39 0%, transparent 70%)' }}
        />
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
        
        {/* ── LEFT COLUMN: EDITORIAL, STRATEGIC PILLARS & VALUATION (7 COLS) ── */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E4] border border-[#C58B39]/50 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-[#B87B28]" strokeWidth={2.4} />
              <span className="text-[10.5px] font-bold text-[#9E651E] tracking-[0.16em] uppercase">
                MULTI-GENERATIONAL HORIZONS
              </span>
            </div>

            {/* Master Headline */}
            <h2 
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1B36] tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
            >
              From Original Characters to{' '}
              <span className="bg-gradient-to-r from-[#B87B28] via-[#D49E45] to-[#B87B28] bg-clip-text text-transparent">
                Enduring Global Franchises.
              </span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-[#3E4E68] text-[14.5px] sm:text-[15.5px] leading-[1.68]">
              In the global entertainment and toy industry, authentic character affinity creates durable, decade-long cash flows. As Zanarra scales from the trio of Momo, Tobo, and Dodi across publishing, games, educational partnerships, and global animation licensing, the potential pathway points toward an institution valued at{' '}
              <strong className="text-[#0B1B36] font-bold">₹1,000 Cr-plus</strong>.
            </p>
          </div>

          {/* Three Strategic Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
            {franchisePillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.label}
                  className="p-4 rounded-2xl bg-gradient-to-br from-[#FCFAF6] to-[#F7F2E8] border border-[#E3D6C1] shadow-2xs hover:border-[#C58B39]/70 hover:bg-white transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Label + Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8A5A1B]">
                        {pillar.label}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#FAF2E4] border border-[#DFCDB7] flex items-center justify-center text-[#9E651E]">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="font-serif font-bold text-[14px] sm:text-[15px] text-[#0B1B36] leading-snug mb-1"
                      style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
                    >
                      {pillar.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-[11px] text-[#556987] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Metric Sub-Label */}
                  <div className="mt-3 pt-2.5 border-t border-[#E8DEC9] text-[10.5px] font-bold text-[#0B1B36]">
                    {pillar.metric}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Valuation Aspiration Panel */}
          <div className="rounded-2xl bg-gradient-to-r from-[#0B1B36] via-[#102344] to-[#0B1B36] border border-[#C58B39]/60 p-4 sm:p-5 shadow-[0_8px_30px_rgba(11,27,54,0.18)] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#C58B39]/20 border border-[#C58B39]/50 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[9.5px] uppercase font-bold tracking-wider text-[#D4AF37] block">
                  Institutional Valuation Aspiration
                </span>
                <span 
                  className="font-serif text-2xl sm:text-3xl font-bold text-white block leading-tight tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  ₹1,000 Cr+ Institutional Ambition
                </span>
              </div>
            </div>

            <div className="sm:border-l sm:border-white/20 sm:pl-5 shrink-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                Target Horizon
              </span>
              <span className="text-xs font-semibold text-[#D4AF37] block mt-0.5">
                Decade-Horizon Objective
              </span>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: 3D CONCEPTUAL FRANCHISE ECOSYSTEM VISUAL (5 COLS) ── */}
        <div className="lg:col-span-5 relative flex flex-col justify-between">
          <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] rounded-3xl overflow-hidden border border-[#D8C7B0] shadow-xl bg-[#071326] flex flex-col justify-between group">
            
            {/* Visual Image: Connected Global IP Network & Franchise Chronicles */}
            <picture className="absolute inset-0 z-0">
              <source srcSet="/global-franchise-ecosystem.webp" type="image/webp" />
              <img
                src="/global-franchise-ecosystem.jpg"
                alt="Zanarra Global IP Franchise Network, Film Reels and Intellectual Property Assets"
                className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>

            {/* Subtle Gradient Overlays for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36]/85 via-transparent to-[#0B1B36]/40 pointer-events-none z-10" />

            {/* Top Badges */}
            <div className="relative z-20 p-5 flex items-start justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1B36]/85 text-[#FAF2E4] border border-[#C58B39]/50 backdrop-blur-md text-[10.5px] font-bold uppercase tracking-wider shadow-sm">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                Connected Global IP Network
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-950/85 border border-emerald-400/50 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9.5px] font-bold text-emerald-200 uppercase tracking-wider">
                  International Assets
                </span>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Bottom Floating Sector Showcase */}
            <div className="relative z-20 p-4 sm:p-5">
              <div className="rounded-2xl bg-[#09152B]/90 backdrop-blur-md border border-[#C58B39]/40 p-4 space-y-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Transmedia Distribution Streams
                  </span>
                  <span className="text-[10px] text-gray-300 font-medium">5 Staged Verticals</span>
                </div>

                {/* 5 Ecosystem Verticals */}
                <div className="flex flex-wrap gap-2">
                  {ecosystemSectors.map((sec) => {
                    const SecIcon = sec.icon;
                    return (
                      <div 
                        key={sec.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-gray-200 text-[11px] font-medium backdrop-blur-sm"
                      >
                        <SecIcon className="w-3 h-3 text-[#D4AF37]" />
                        <span>{sec.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400">Institutional Enterprise Engine</span>
                  <span className="font-serif text-[#D4AF37] font-bold text-sm">Zanarra Universe IP</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── IMPORTANT VALUATION DISCLAIMER ── */}
      <div className="relative z-10 flex items-center justify-center gap-2.5 p-3.5 sm:p-4 rounded-xl border border-[#E5DAC6] text-[11px] sm:text-[11.5px] text-[#5A687D] leading-relaxed bg-[#FAF6EE] text-center max-w-5xl mx-auto shadow-2xs">
        <AlertCircle className="w-4 h-4 text-[#9E651E] shrink-0" />
        <span>
          <strong className="text-[#0B1B36]">Important Valuation Disclaimer:</strong> The ₹1,000 Cr valuation ambition represents a long-term strategic objective, not a guaranteed valuation or performance commitment, dependent upon future audience retention, prevailing capital market conditions, commercial licensing traction, and prevailing valuation multiples at that time.
        </span>
      </div>

    </section>
  );
};
