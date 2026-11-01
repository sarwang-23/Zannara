import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Award,
  Globe,
  CheckCircle2,
  Film,
  BookOpen,
  Star,
  ArrowUpRight,
  Sparkles,
  Building2,
  Layers,
  Compass
} from 'lucide-react';

interface MilestoneData {
  year: string;
  revenue: number;
  label: string;
  phase: string;
  margin: string;
  highlight: string;
  type: 'base' | 'inflection' | 'target';
}

const strategicMilestones: MilestoneData[] = [
  {
    year: 'FY27',
    revenue: 0.75,
    label: '₹0.75 Cr',
    phase: 'Foundation',
    margin: 'Investment Phase',
    highlight: 'Initial IP creation, core pilots, and audience validation',
    type: 'base'
  },
  {
    year: 'FY28',
    revenue: 5.0,
    label: '₹5 Cr',
    phase: 'Expansion',
    margin: 'Break-even trend',
    highlight: 'Episodic digital stories, music sync & publishing pilots',
    type: 'base'
  },
  {
    year: 'FY29',
    revenue: 20.0,
    label: '₹20 Cr',
    phase: 'Inflection',
    margin: 'EBITDA Positive ★',
    highlight: 'Operating profitability achieved; multi-stream retail trials',
    type: 'inflection'
  },
  {
    year: 'FY30',
    revenue: 55.0,
    label: '₹55 Cr',
    phase: 'Multi-Territory',
    margin: '~32% EBITDA',
    highlight: 'National licensing, toy distribution & localized overseas pilots',
    type: 'base'
  },
  {
    year: 'FY31',
    revenue: 110.0,
    label: '₹110 Cr',
    phase: 'Global Franchise',
    margin: '~36.5% EBITDA',
    highlight: 'International syndication, global IP licensing & multi-format scale',
    type: 'target'
  },
];

const MAX_REV = 110;
const CHART_H = 190; // px
const MIN_BAR_H = 24; // px minimum visible bar so FY27 is clearly legible

function getBarHeight(rev: number): number {
  return Math.max((rev / MAX_REV) * CHART_H, MIN_BAR_H);
}

const franchiseEngines = [
  {
    icon: Globe,
    title: 'Global Ecosystem',
    desc: 'Multi-territory worldwide IP syndication'
  },
  {
    icon: Film,
    title: 'Multi-Format Scale',
    desc: 'Streaming, episodic animation & cinema'
  },
  {
    icon: BookOpen,
    title: 'Publishing & Retail',
    desc: 'High-margin licensing & consumer merchandise'
  },
  {
    icon: Star,
    title: 'Generational Value',
    desc: 'Multi-decade compounding emotional equity'
  },
];

export const FinancialChart: React.FC = () => {
  const [selectedBar, setSelectedBar] = useState<number>(4);

  return (
    <div
      className="w-full rounded-3xl overflow-hidden border border-[#DFD3C2] shadow-[0_24px_80px_rgba(11,27,54,0.08)] relative"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FDFBF7 45%, #F7F2E7 100%)'
      }}
    >
      {/* ── AMBIENT WARM RADIAL GLOWS ── */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, #E8D5B5 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-10 w-80 h-80 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        />
      </div>

      {/* ── HEADER SECTION ── */}
      <div className="relative px-6 sm:px-10 lg:px-12 pt-8 sm:pt-10 pb-7 border-b border-[#E8DEC9]/80">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

          <div className="max-w-2xl text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E4] border border-[#C58B39]/50 shadow-2xs mb-3.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#B87B28]" strokeWidth={2.4} />
              <span className="text-[10.5px] font-bold text-[#9E651E] tracking-[0.16em] uppercase">
                Capital Efficiency &amp; Cash Flow Scale
              </span>
            </div>

            {/* Headline */}
            <h3
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0B1B36]"
              style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
            >
              Illustrative Five-Year{' '}
              <span className="bg-gradient-to-r from-[#B87B28] via-[#D49E45] to-[#B87B28] bg-clip-text text-transparent">
                Base Case
              </span>
            </h3>

            {/* Subtitle */}
            <p className="text-[#4A5970] text-[14px] sm:text-[15px] leading-[1.65] mt-2.5 max-w-xl">
              Management planning assumptions based on phased commercial expansion, subject to market execution and commercial validation.
            </p>

            {/* Decorative Gold Accent Bar */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#C58B39] to-transparent mt-3.5" />
          </div>

          {/* Top-Right Executive Target Pill */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/90 border border-[#DFCDB7] shadow-[0_4px_20px_rgba(11,27,54,0.05)] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FAF2E4] border border-[#E0D0BA] flex items-center justify-center text-[#9E651E] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#7B6347] block">
                  Five-Year Revenue Target
                </span>
                <span
                  className="font-serif text-2xl sm:text-[28px] font-bold text-[#0B1B36] leading-tight block"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  ₹110 Cr
                </span>
                <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
                  ~36.5% EBITDA by FY31
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── MAIN BODY GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">

        {/* ── LEFT COLUMN: METRICS & CHART (7 COLS) ── */}
        <div className="lg:col-span-7 px-6 sm:px-10 lg:px-12 py-7 sm:py-8 space-y-6 sm:space-y-7 border-b lg:border-b-0 lg:border-r border-[#E8DEC9]/80">

          {/* ── 3 EXECUTIVE KPI STAT CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            
            {/* Card 1: Revenue */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#FCFAF6] to-[#F5ECE0] border border-[#E5D7C3] shadow-2xs space-y-1.5 transition-transform hover:-translate-y-0.5 duration-200">
              <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8A5A1B] block">
                FY31 Revenue Target
              </span>
              <span
                className="font-serif text-[28px] sm:text-[32px] font-bold text-[#0B1B36] block leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                ₹110 Cr
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#C58B39]" />
                <span className="text-[11px] font-medium text-[#65523F]">7 Revenue Streams</span>
              </div>
            </div>

            {/* Card 2: EBITDA */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#F5FBF7] to-[#E6F5EC] border border-emerald-200/90 shadow-2xs space-y-1.5 transition-transform hover:-translate-y-0.5 duration-200">
              <span className="text-[9.5px] font-bold uppercase tracking-wider text-emerald-800 block">
                Operating Profit (EBITDA)
              </span>
              <span
                className="font-serif text-[28px] sm:text-[32px] font-bold text-[#0B1B36] block leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                ~₹40.2 Cr
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300/60">
                  ~36.5% Margin
                </span>
              </div>
            </div>

            {/* Card 3: PAT */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#F8FAFC] to-[#EEF3FA] border border-blue-200/80 shadow-2xs space-y-1.5 transition-transform hover:-translate-y-0.5 duration-200">
              <span className="text-[9.5px] font-bold uppercase tracking-wider text-blue-900 block">
                Net Profit (PAT)
              </span>
              <span
                className="font-serif text-[28px] sm:text-[32px] font-bold text-[#0B1B36] block leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                ~₹29.5 Cr
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100/90 text-blue-800 border border-blue-300/60">
                  High Cash Conversion
                </span>
              </div>
            </div>

          </div>

          {/* ── EBITDA MILESTONE INFLECTION BANNER ── */}
          <div className="rounded-2xl p-4 bg-gradient-to-r from-[#0B3D2E] via-[#0D523E] to-[#0A3D2E] text-white shadow-[0_8px_24px_rgba(11,61,46,0.18)] flex items-center justify-between gap-4 border border-emerald-400/30">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-300/40 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 block">
                  Operating Breakeven Inflection
                </span>
                <span className="font-semibold text-[13px] sm:text-[14px] text-white block truncate">
                  FY29 — EBITDA Positive Achieved in Year 3 of Operations
                </span>
              </div>
            </div>
            <div className="shrink-0 px-3 py-1.5 rounded-xl bg-emerald-500/25 border border-emerald-400/40 text-center">
              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-200 block">Milestone</span>
              <span
                className="font-serif text-lg font-bold text-[#F1E0A8] block leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                ★ FY29
              </span>
            </div>
          </div>

          {/* ── 5-YEAR REVENUE TRAJECTORY BAR CHART ── */}
          <div className="rounded-2xl bg-white border border-[#E3D6C1] shadow-[0_6px_24px_rgba(11,27,54,0.04)] overflow-hidden">
            
            {/* Chart Sub-Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EDE3D2] bg-[#FAF7F0]/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0B1B36]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1B36]">
                  5-Year Revenue Trajectory (₹ Cr)
                </span>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-3 text-[10.5px]">
                <span className="flex items-center gap-1.5 text-[#5C6E85] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#0B1B36]" />
                  Base Scale
                </span>
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600" />
                  FY29 Inflection
                </span>
                <span className="flex items-center gap-1.5 text-[#B87B28] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#C58B39]" />
                  FY31 Target
                </span>
              </div>
            </div>

            {/* Chart Canvas Area */}
            <div className="px-5 pt-6 pb-4">

              {/* Revenue Numbers Above Bars */}
              <div className="flex gap-2 sm:gap-3 mb-3">
                {strategicMilestones.map((item, i) => {
                  const isSelected = selectedBar === i;
                  const isTarget   = item.type === 'target';
                  const isInflect  = item.type === 'inflection';

                  let badgeStyle = 'bg-[#F4EFE6] text-[#4A5970] border-[#E0D5C3]';
                  if (isTarget) {
                    badgeStyle = 'bg-[#C58B39] text-white border-[#B87B28] shadow-sm font-bold';
                  } else if (isInflect) {
                    badgeStyle = 'bg-emerald-700 text-white border-emerald-800 shadow-sm font-bold';
                  } else if (isSelected) {
                    badgeStyle = 'bg-[#0B1B36] text-white border-[#0B1B36] shadow-sm font-bold';
                  }

                  return (
                    <div key={item.year} className="flex-1 flex justify-center">
                      <span className={`inline-block text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md border transition-all whitespace-nowrap ${badgeStyle}`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bar Canvas — Fixed Height */}
              <div className="relative flex items-end gap-2 sm:gap-3" style={{ height: `${CHART_H}px` }}>

                {/* Horizontal Guide Gridlines */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top line (₹110 Cr) */}
                  <div className="absolute top-0 left-0 right-0 border-t border-[#E8DEC9]">
                    <span className="absolute -top-[14px] right-0 text-[9.5px] text-[#A87027] font-bold">
                      ₹110 Cr
                    </span>
                  </div>
                  {/* Mid line (₹55 Cr) */}
                  <div className="absolute left-0 right-0 border-t border-[#EFE8DC]" style={{ top: '50%' }}>
                    <span className="absolute -top-[14px] right-0 text-[9px] text-[#8C9AA9] font-medium">
                      ₹55 Cr
                    </span>
                  </div>
                  {/* Inflection line (₹20 Cr) */}
                  <div
                    className="absolute left-0 right-0 border-t border-dashed border-emerald-400/50"
                    style={{ top: `${100 - (20 / MAX_REV) * 100}%` }}
                  >
                    <span className="absolute -top-[14px] right-0 text-[9px] text-emerald-700 font-bold">
                      ₹20 Cr ★ Breakeven
                    </span>
                  </div>
                  {/* Base baseline */}
                  <div className="absolute bottom-0 left-0 right-0 border-t-2 border-[#D5C6AF]" />
                </div>

                {/* Bars */}
                {strategicMilestones.map((item, idx) => {
                  const isSelected = selectedBar === idx;
                  const isTarget   = item.type === 'target';
                  const isInflect  = item.type === 'inflection';
                  const hPx        = getBarHeight(item.revenue);

                  let barBackground = 'linear-gradient(to top, #0B1B36 0%, #1A345C 70%, #294D85 100%)';
                  if (isTarget) {
                    barBackground = 'linear-gradient(to top, #8B5A1A 0%, #C58B39 50%, #E6C163 100%)';
                  } else if (isInflect) {
                    barBackground = 'linear-gradient(to top, #0A4A36 0%, #0F7655 60%, #1EB382 100%)';
                  } else if (isSelected) {
                    barBackground = 'linear-gradient(to top, #071326 0%, #17325C 100%)';
                  }

                  return (
                    <div
                      key={item.year}
                      onClick={() => setSelectedBar(idx)}
                      className="flex-1 flex justify-center items-end cursor-pointer group relative z-10 h-full"
                    >
                      <div
                        className={`w-full rounded-t-xl relative overflow-hidden transition-all duration-300 ${
                          isTarget
                            ? 'shadow-[0_8px_24px_rgba(197,139,57,0.35)] ring-2 ring-[#C58B39]'
                            : isInflect
                            ? 'shadow-[0_6px_18px_rgba(15,118,85,0.30)] ring-1 ring-emerald-500'
                            : isSelected
                            ? 'shadow-[0_6px_18px_rgba(11,27,54,0.25)] ring-2 ring-[#0B1B36]'
                            : 'hover:opacity-95'
                        }`}
                        style={{ height: `${hPx}px`, background: barBackground }}
                      >
                        {/* Top Sheen */}
                        <div className="absolute top-0 inset-x-0 h-2.5 bg-white/25 rounded-t-xl" />

                        {/* Special Icon on top of Bar */}
                        {isTarget && (
                          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                            <Award className="w-4 h-4 text-[#C58B39] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
                          </div>
                        )}
                        {isInflect && !isTarget && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-200 animate-pulse" />
                        )}
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* X-Axis Labels */}
              <div className="flex gap-2 sm:gap-3 mt-3 pt-3 border-t border-[#EDE3D2]">
                {strategicMilestones.map((item, idx) => (
                  <div
                    key={item.year}
                    onClick={() => setSelectedBar(idx)}
                    className="flex-1 text-center cursor-pointer transition-transform hover:scale-105"
                  >
                    <span
                      className={`text-[11px] font-bold block ${
                        selectedBar === idx
                          ? 'text-[#0B1B36]'
                          : 'text-[#64748B] hover:text-[#0B1B36]'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span className="text-[9px] text-[#8C9AA9] font-medium block leading-tight truncate">
                      {item.phase}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive Milestone Details Box */}
              <div className="mt-3.5 flex items-center justify-between gap-3 py-2.5 px-3.5 rounded-xl border border-[#E3D6C1] bg-[#FAF7F0]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-[#FAF2E4] text-[#9E651E] flex items-center justify-center font-bold text-[10px] shrink-0 border border-[#DFCDB7]">
                    {strategicMilestones[selectedBar].year}
                  </span>
                  <span className="text-[12px] text-[#334155] font-medium truncate">
                    {strategicMilestones[selectedBar].highlight}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#8A5A1B] shrink-0 bg-white px-2 py-0.5 rounded-md border border-[#E0D5C3]">
                  {strategicMilestones[selectedBar].margin}
                </span>
              </div>

            </div>
          </div>

          {/* ── DISCLAIMER NOTE ── */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl border border-[#E5DAC6] text-[11px] text-[#5A687D] leading-relaxed bg-white/70">
            <ShieldCheck className="w-4 h-4 text-[#9E651E] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#0B1B36]">Planning Assumptions Disclaimer:</strong> The financial trajectory depicted represents management base-case planning estimates subject to staged capital deployment, creative IP traction, licensing agreement timelines, and commercial validation. These projections do not constitute a performance guarantee.
            </span>
          </div>

        </div>

        {/* ── RIGHT COLUMN: REDESIGNED ARCHITECTURAL FRANCHISE SHOWCASE (5 COLS) ── */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-5 bg-[#FCFAF6]/60">

          {/* 1. Architectural Artwork Window */}
          <div className="relative w-full h-[320px] sm:h-[350px] rounded-3xl overflow-hidden border border-[#D8C7B0] shadow-md bg-[#0A1628] group">
            
            {/* Visual Image */}
            <picture className="absolute inset-0 z-0">
              <source srcSet="/franchise-headquarters.webp" type="image/webp" />
              <img
                src="/franchise-headquarters.jpg"
                alt="Zanarra Global Entertainment IP Pavilion and Creative Observatory"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>

            {/* Subtle Vignettes for High-Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36]/80 via-transparent to-[#0B1B36]/50 pointer-events-none z-10" />

            {/* Top Badges */}
            <div className="relative z-20 p-4 sm:p-5 flex items-start justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B1B36]/80 text-[#FAF2E4] border border-[#C58B39]/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                Creative IP Pavilion
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/50 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9.5px] font-bold text-emerald-200 uppercase tracking-wider">
                  Global Scale
                </span>
              </div>
            </div>

            {/* Bottom Caption Pill on Image */}
            <div className="absolute bottom-4 inset-x-4 z-20">
              <div className="px-3.5 py-2 rounded-xl bg-[#0B1B36]/80 border border-white/15 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] font-semibold text-white tracking-wide">
                    Global Creative Studio &amp; IP Engine
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#E8D5B5] uppercase tracking-wider">
                  FY27 – FY31
                </span>
              </div>
            </div>
          </div>

          {/* 2. Franchise Asset Engines (Clean Unobscured Grid) */}
          <div className="rounded-2xl bg-white border border-[#E3D6C1] p-5 shadow-[0_4px_20px_rgba(11,27,54,0.04)] space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#EFE5D5] pb-2.5">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B87B28]" />
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#0B1B36]">
                  Franchise Asset Engines
                </span>
              </div>
              <span className="text-[10.5px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Compounding IP
              </span>
            </div>

            {/* 4 Clean Cards (No Truncation) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {franchiseEngines.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DEC9] hover:border-[#C58B39]/60 hover:bg-[#FAF4E8] transition-all flex items-start gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#FAF2E4] border border-[#DFCDB7] flex items-center justify-center text-[#9E651E] shrink-0 mt-0.5">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[11.5px] font-bold text-[#0B1B36] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-[#5C6E85] leading-tight mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3. Executive Target Strip */}
            <div className="pt-1">
              <div className="rounded-xl bg-gradient-to-r from-[#0B1B36] to-[#152B4D] p-3.5 sm:p-4 text-white flex items-center justify-between gap-4 border border-[#C58B39]/50 shadow-md">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">
                    FY31 Enterprise Revenue Target
                  </span>
                  <span className="text-[11px] text-gray-300 block">
                    7 Diversified Monetisation Pathways
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="font-serif text-2xl font-bold text-[#D4AF37]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    ₹110 Cr
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#C58B39]/25 border border-[#C58B39]/60 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
