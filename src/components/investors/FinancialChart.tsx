import React, { useState } from 'react';
import { FINANCIAL_TRAJECTORY } from '../../data/brandData';
import { TrendingUp, AlertCircle, ShieldAlert, Award } from 'lucide-react';

export const FinancialChart: React.FC = () => {
  const [selectedBar, setSelectedBar] = useState<number | null>(4); // FY31 selected by default
  const maxRevenue = 110; // ₹110 Cr is the highest value

  return (
    <div className="w-full bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-10 shadow-lg">
      {/* Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" /> Base-Case Projection
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A]">
            Illustrative Five-Year Base Case
          </h3>
          <p className="text-xs sm:text-sm text-[#17233A]/70 mt-1">
            Management planning assumptions, subject to execution and commercial validation.
          </p>
        </div>

        <div className="text-left md:text-right">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block">FY31 Target Revenue</span>
          <span className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A] text-amber-900">
            ₹110 Cr
          </span>
        </div>
      </div>

      {/* Bar Chart Visualization Area */}
      <div className="mt-10 pt-4 pb-2">
        <div className="grid grid-cols-5 gap-3 sm:gap-6 items-end h-64 sm:h-72 border-b-2 border-[#17233A]/15 pb-2 px-2 sm:px-6 relative">
          {/* Subtle horizontal grid lines */}
          <div className="absolute inset-x-0 top-0 border-b border-dashed border-gray-200 pointer-events-none flex justify-between text-[10px] text-gray-400 px-2">
            <span>₹110 Cr</span>
            <span>Target Ceiling</span>
          </div>
          <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-gray-200 pointer-events-none flex justify-between text-[10px] text-gray-400 px-2">
            <span>₹55 Cr</span>
          </div>
          <div className="absolute inset-x-0 top-3/4 border-b border-dashed border-gray-200 pointer-events-none flex justify-between text-[10px] text-gray-400 px-2">
            <span>₹27.5 Cr</span>
          </div>

          {FINANCIAL_TRAJECTORY.map((item, index) => {
            const heightPercent = Math.max((item.revenue / maxRevenue) * 100, 6);
            const isSelected = selectedBar === index;
            const isEbitdaPositive = item.year === 'FY29';

            return (
              <div
                key={item.year}
                onClick={() => setSelectedBar(index)}
                className="flex flex-col items-center h-full justify-end group cursor-pointer relative z-10"
              >
                {/* Revenue Popover on Hover or Select */}
                <div
                  className={`transition-all duration-200 mb-2 text-center ${
                    isSelected ? 'opacity-100 scale-105' : 'opacity-80 group-hover:opacity-100'
                  }`}
                >
                  <span
                    className={`inline-block font-bold text-xs sm:text-sm px-2 py-0.5 rounded-md shadow-xs ${
                      isSelected
                        ? 'bg-[#17233A] text-[#FAF7F0] ring-2 ring-[#C7A451]'
                        : 'bg-[#FAF7F0] text-[#17233A] border border-gray-200'
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.ebitda && (
                    <span className="block text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-1 border border-emerald-200">
                      ★ {item.ebitda}
                    </span>
                  )}
                </div>

                {/* Animated Pillar Bar */}
                <div
                  className={`w-full max-w-[64px] rounded-t-xl transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-gradient-to-t from-[#17233A] via-[#2A3F66] to-[#C7A451] shadow-lg ring-4 ring-[#C7A451]/20'
                      : 'bg-gradient-to-t from-[#E2D7C3] to-[#C7A451]/70 group-hover:from-[#C7A451]/70 group-hover:to-[#C7A451]'
                  }`}
                  style={{ height: `${heightPercent}%` }}
                >
                  {isEbitdaPositive && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  )}
                </div>

                {/* Fiscal Year Label */}
                <div className="mt-3 text-center">
                  <span className={`text-xs sm:text-sm font-bold block ${isSelected ? 'text-[#17233A]' : 'text-gray-500'}`}>
                    {item.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Item Detail Context */}
      {selectedBar !== null && (
        <div className="mt-4 p-4 rounded-xl bg-[#FAF7F0] border border-[#C7A451]/20 flex items-center justify-between text-xs sm:text-sm">
          <div>
            <span className="font-bold text-[#17233A] mr-2">
              {FINANCIAL_TRAJECTORY[selectedBar].year} Strategic Focus:
            </span>
            <span className="text-[#17233A]/80">
              {FINANCIAL_TRAJECTORY[selectedBar].comment}
            </span>
          </div>
          <span className="font-bold text-[#C7A451] whitespace-nowrap ml-4">
            {FINANCIAL_TRAJECTORY[selectedBar].label} Target
          </span>
        </div>
      )}

      {/* Key Financial Trajectory Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
        <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
          <span className="text-[11px] font-bold uppercase text-gray-500 tracking-wider block">FY31 Target Revenue</span>
          <span className="font-serif text-2xl font-bold text-[#17233A] mt-1 block">₹110 Cr</span>
          <span className="text-[11px] text-[#17233A]/70 mt-0.5 block">Diversified IP engine</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
          <span className="text-[11px] font-bold uppercase text-gray-500 tracking-wider block">Projected EBITDA</span>
          <span className="font-serif text-2xl font-bold text-[#17233A] mt-1 block">~₹40.2 Cr</span>
          <span className="text-[11px] text-emerald-700 font-semibold mt-0.5 block">~36.5% EBITDA Margin</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
          <span className="text-[11px] font-bold uppercase text-gray-500 tracking-wider block">Projected PAT</span>
          <span className="font-serif text-2xl font-bold text-[#17233A] mt-1 block">~₹29.5 Cr</span>
          <span className="text-[11px] text-[#17233A]/70 mt-0.5 block">Healthy bottom-line scale</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-gray-200/80">
          <span className="text-[11px] font-bold uppercase text-gray-500 tracking-wider block">EBITDA-Positive Year</span>
          <span className="font-serif text-2xl font-bold text-[#17233A] mt-1 block">FY29</span>
          <span className="text-[11px] text-amber-700 font-medium mt-0.5 block">Year 3 inflection point</span>
        </div>
      </div>

      {/* Disclaimer note */}
      <div className="mt-6 flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900/90 leading-relaxed">
        <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
        <p>
          <strong>Planning Assumptions Note:</strong> These figures are management planning models based on strategic assumptions and market comparables. They are not historical results, guarantees, or investment solicitations. Actual results are subject to production execution and commercial distribution partnerships.
        </p>
      </div>
    </div>
  );
};
