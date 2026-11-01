import React from 'react';
import { 
  Globe, 
  Sparkles, 
  Layers, 
  ShieldAlert, 
  BookOpen, 
  Tv, 
  Package, 
  Gamepad2,
  Award
} from 'lucide-react';

export const FranchiseHorizons: React.FC = () => {
  const franchisePillars = [
    {
      label: 'Multiple Drivers',
      title: 'IP Compounding & Global Licensing',
      metric: 'High Recurring Margins',
      desc: 'Licensing agreements generate 70–85% gross margins as external toy, publishing, and broadcast partners bear manufacturing and localized distribution overhead.',
      icon: Layers
    },
    {
      label: 'Capital Efficiency',
      title: 'AI-Assisted Production Velocity',
      metric: 'Fractional Burn Rate',
      desc: 'Proprietary narrative workflows reduce pre-production cycles from months to days, allowing Zanarra to iterate rapidly without ballooning fixed studio payrolls.',
      icon: Sparkles
    },
    {
      label: 'Market Size',
      title: '$100B+ Global Kids Licensing',
      metric: 'Massive International Headroom',
      desc: 'Global character licensing and entertainment merchandise represents an enormous market where top-tier evergreen character IPs capture decade-long enterprise multiples.',
      icon: Globe
    }
  ];

  const franchiseEcosystem = [
    { name: 'Original Stories & Publishing', tag: 'Print & Digital Books', icon: BookOpen },
    { name: 'Episodic Screen Entertainment', tag: 'Multi-Season Series', icon: Tv },
    { name: 'Plush, Toys & Merchandise', tag: 'Global Retail Licensing', icon: Package },
    { name: 'Interactive Digital Worlds', tag: 'Apps & Play Experiences', icon: Gamepad2 }
  ];

  return (
    <section className="bg-white rounded-3xl border border-[#E8DEC9] p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(11,27,54,0.04)] space-y-10">
      
      {/* ── TWO-COLUMN EDITORIAL SHOWCASE ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (7 cols): Vision, Economics & Strategic Pillars */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E7] border border-[#C58B39]/40 text-[#A87027] text-[11px] font-bold uppercase tracking-[0.16em] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C58B39]" /> Multi-Generational Horizons
            </div>
            
            <h2 
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1B36] tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
            >
              From original characters to enduring global franchises.
            </h2>
            
            <p className="text-[#24334C] text-[15px] sm:text-[16px] leading-[1.65] mt-3">
              In the global entertainment and toy industry, authentic character affinity creates durable, decade-long cash flows. As Zanarra scales from the trio of Momo, Tobo, and Dodi across publishing, games, educational partnerships, and global animation licensing, the potential pathway points toward an institution valued at <strong className="text-[#0B1B36] font-bold">₹1,000 Cr-plus</strong>.
            </p>
          </div>

          {/* Three Supporting Strategic Drivers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            {franchisePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div 
                  key={p.label}
                  className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#EBDCC8] hover:border-[#C58B39]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A87027]">
                        {p.label}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-[#C58B39]" />
                    </div>
                    <h4 
                      className="font-serif font-bold text-sm text-[#0B1B36] leading-snug mb-1"
                      style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
                    >
                      {p.title}
                    </h4>
                    <p className="text-[11.5px] text-[#556987] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#EBDCC8]/60 text-[10.5px] font-bold text-[#0B1B36]">
                    {p.metric}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Valuation Ambition Milestone Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6EA] border border-[#C58B39]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1B36] text-[#C58B39] flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A87027] block">
                  Enterprise Valuation Target
                </span>
                <span 
                  className="font-serif text-xl sm:text-2xl font-bold text-[#0B1B36] block"
                  style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
                >
                  ₹1,000 Cr+ Institutional Ambition
                </span>
              </div>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="text-[11px] font-bold text-[#0B1B36] bg-white px-3 py-1.5 rounded-full border border-[#EBDCC8] inline-block shadow-2xs">
                Decade-Horizon Objective
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): High-Resolution Character Franchise Ecosystem Art */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-[#C58B39]/30 shadow-[0_16px_40px_rgba(11,27,54,0.12)] bg-[#0B1B36] group">
            {/* Visual Masterpiece with Approved Momo, Tobo, Dodi & Chiku Characters */}
            <picture>
              <source srcSet="/storybook-finale-desktop.webp" type="image/webp" />
              <img
                src="/storybook-finale-desktop.jpg"
                alt="Zanarra Franchise Ecosystem — Momo, Tobo, Dodi and Chiku pointing toward the celestial crystal horizon"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover object-[75%_center] group-hover:scale-102 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
            </picture>

            {/* Subtle Gradient Overlay for Typography Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36]/95 via-[#0B1B36]/20 to-transparent pointer-events-none" />

            {/* Floating Franchise Formats Pill Overlay */}
            <div className="absolute top-4 inset-x-4 flex justify-between items-center pointer-events-none">
              <span className="text-[10.5px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#0B1B36]/80 text-[#D4AF37] border border-[#C58B39]/40 backdrop-blur-md shadow-xs">
                Franchise IP Ecosystem
              </span>
              <span className="text-[10.5px] font-bold text-white/90 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                Momo · Tobo · Dodi
              </span>
            </div>

            {/* Bottom Franchise Touchpoints Strip */}
            <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-[#0B1B36]/85 backdrop-blur-md border border-[#C58B39]/40 text-white space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#D4AF37] border-b border-white/10 pb-1.5">
                <span>Core Commercial Formats</span>
                <span>Universal Export</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {franchiseEcosystem.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.name} className="flex items-center gap-1.5 text-gray-200">
                      <ItemIcon className="w-3 h-3 text-[#C58B39] shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── VALUATION DISCLOSURE ── */}
      <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-amber-200/80 text-[11.5px] text-amber-900/90 leading-relaxed italic flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <span>
          <strong>*Important Valuation Disclosure:</strong> The ₹1,000 Cr valuation ambition represents a long-term strategic objective, not a guaranteed valuation or performance commitment. Realized valuation will depend upon future audited revenues, operating margins, prevailing capital market conditions, commercial licensing traction, and prevailing valuation multiples at that time.
        </span>
      </div>

    </section>
  );
};
