import React, { useState } from 'react';
import { FinancialChart } from '../components/investors/FinancialChart';
import { InvestorEnquiryModal } from '../components/forms/InvestorEnquiryModal';
import { INVESTMENT_THESIS_CARDS, FIVE_PHASES } from '../data/brandData';
import { TrendingUp, ShieldAlert, FileText, ArrowRight, CheckCircle2, Lock, Sparkles, Building2 } from 'lucide-react';

export const InvestorsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* SECTION A: INVESTMENT THESIS */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5" /> Institutional Overview
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          Building a global children's IP company from India.
        </h1>

        <p className="text-base sm:text-lg text-[#17233A]/80 leading-relaxed max-w-2xl mx-auto">
          Zanarra combines original character creation, AI-assisted production and localisation, audience development and a diversified IP monetisation strategy.
        </p>

        <p className="text-xs sm:text-sm text-gray-500 italic max-w-xl mx-auto">
          "Our ambition is to build a portfolio of enduring characters and interconnected worlds that can scale across formats, markets and generations."
        </p>

        <div className="pt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-[#17233A] text-white font-bold text-xs hover:bg-[#2A3F66] transition-all shadow-md inline-flex items-center gap-2"
          >
            <Lock className="w-3.5 h-3.5 text-[#C7A451]" />
            <span>Request Confidential Investor Presentation</span>
          </button>
        </div>
      </section>

      {/* SECTION B: WHY THIS BUSINESS (5 Thesis Cards) */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Strategic Hypotheses & Edge
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            Why This Business
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-1">
            Five core thesis pillars that underpin the long-term compounding economics of Zanarra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INVESTMENT_THESIS_CARDS.map((card, idx) => (
            <div
              key={card.num}
              className={`bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="text-xs font-bold text-[#C7A451] tracking-widest block mb-2">
                  THESIS {card.num}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#17233A] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs font-bold text-[#17233A]/80 mb-3">
                  {card.summary}
                </p>
                <p className="text-xs text-[#17233A]/75 leading-relaxed">
                  {card.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                <span>Strategic Hypothesis</span>
                <span className="font-bold text-[#17233A]">Zanarra Edge</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION C: FIVE-YEAR FINANCIAL AMBITION CHART */}
      <section className="space-y-6">
        <FinancialChart />
      </section>

      {/* SECTION D: THE PATH TO ₹100–120 CR */}
      <section className="bg-white rounded-3xl border border-[#C7A451]/25 p-8 sm:p-12 shadow-sm space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Commercial Roadmap
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            The Path to ₹100–120 Cr
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-1">
            Structured in five sequential milestones to expand from proof-of-concept into a multi-channel franchise powerhouse.
          </p>
        </div>

        <div className="space-y-4">
          {FIVE_PHASES.map((p, idx) => (
            <div
              key={p.phase}
              className="p-5 rounded-2xl bg-[#FAF7F0] border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-[#17233A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#C7A451] uppercase">{p.phase}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <h4 className="font-bold text-sm sm:text-base text-[#17233A]">{p.name}</h4>
                  </div>
                  <p className="text-xs text-[#17233A]/75 mt-0.5">{p.focus}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
                  {idx === 0 ? 'Active Phase' : 'Planned Roadblock'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 italic pt-2">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Notice: Phases 2 through 5 are staged milestone targets and are not represented as completed.</span>
        </div>
      </section>

      {/* SECTION E: LONG-TERM AMBITION */}
      <section className="bg-[#FAF7F0] rounded-3xl border border-[#C7A451]/25 p-8 sm:p-12 shadow-sm space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451]">
            Multi-Generational Horizons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17233A]">
            From original characters to enduring global franchises.
          </h2>
          <p className="text-sm text-[#17233A]/85 leading-relaxed">
            In the global entertainment and toy industry, authentic character affinity creates durable, decade-long cash flows. As Zanarra scales from the trio of Momo, Tobo, and Dodi across publishing, games, educational partnerships, and global animation licensing, the potential pathway points toward an institution valued at ₹1,000 Cr-plus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Multiple Drivers</span>
            <span className="font-bold text-sm text-[#17233A] mt-1 block">IP Compounding & Global Licensing</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block">High recurring margin profile</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Capital Efficiency</span>
            <span className="font-bold text-sm text-[#17233A] mt-1 block">AI-Assisted Production Velocity</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block">Lower fixed studio overheads</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Market Size</span>
            <span className="font-bold text-sm text-[#17233A] mt-1 block">$100B+ Global Kids Licensing</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block">Massive international headroom</span>
          </div>
        </div>

        <p className="text-xs text-amber-900/80 italic bg-amber-50 p-3 rounded-xl border border-amber-200/60 leading-relaxed">
          *Important Valuation Disclosure: The ₹1,000 Cr valuation ambition represents a long-term strategic objective, not a guaranteed outcome. Realized valuation will depend upon future audited revenues, operating margins, market appetite, and prevailing valuation multiples at that time.
        </p>
      </section>

      {/* SECTION F: INVESTOR CTA */}
      <section className="bg-[#17233A] text-white rounded-3xl p-8 sm:p-14 shadow-xl border border-[#C7A451]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451]">
              Capital & Growth Partnership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Interested in building Zanarra with us?
            </h2>
            <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
              We welcome conversations with investors who bring more than capital — including distribution, retail, media, education and international market access.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#C7A451] text-[#17233A] font-bold text-xs hover:bg-[#b89543] transition-all shadow-md flex items-center gap-2"
            >
              <span>Request Investor Information</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <InvestorEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
