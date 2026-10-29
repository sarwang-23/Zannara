import React from 'react';
import { BusinessFlywheel } from '../components/business/BusinessFlywheel';
import { REVENUE_STREAMS } from '../data/brandData';
import { Briefcase, Layers, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BusinessPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" /> Media & Intellectual Property Model
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          We create the IP. We build the audience. We scale the universe.
        </h1>

        <p className="text-base sm:text-lg text-[#17233A]/80 max-w-2xl mx-auto leading-relaxed">
          Zanarra is building a scalable children's IP business in which original characters and stories create the foundation for multiple revenue streams.
        </p>
      </section>

      {/* The Three-Stage Engine */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Execution Strategy
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            The Three-Stage Engine
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-1">
            How creative invention transforms into recurring transmedia economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stage 1: Create */}
          <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Stage 01
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">Genesis</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              Create
            </h3>
            <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
              Develop original characters, story worlds, music and repeatable formats using a combination of top creative talent, technology and AI-assisted workflows.
            </p>
            <ul className="text-xs text-[#17233A]/75 space-y-1.5 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Proprietary IP ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>AI-accelerated storyboarding & audio pipelines</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Comprehensive character bible & style guides</span>
              </li>
            </ul>
          </div>

          {/* Stage 2: Build */}
          <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                Stage 02
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">Distribution</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              Build
            </h3>
            <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
              Develop audience relationships through consistent content releases, memorable storytelling, character recognition, and multilingual digital distribution.
            </p>
            <ul className="text-xs text-[#17233A]/75 space-y-1.5 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>High-frequency digital shorts & episodic pilots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Multi-language localization (Hindi, English, etc.)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Direct parent community trust & engagement</span>
              </li>
            </ul>
          </div>

          {/* Stage 3: Monetise & Expand */}
          <div className="bg-white rounded-3xl border border-[#C7A451]/25 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                Stage 03
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">Compounding</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              Monetise & Expand
            </h3>
            <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
              Extend successful IP into licensing, merchandise, digital subscriptions, education, live experiences, strategic partnerships and international markets.
            </p>
            <ul className="text-xs text-[#17233A]/75 space-y-1.5 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>High-margin retail publishing & toy licensing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Early childhood curriculum kit partnerships</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Territorial broadcast rights across global markets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Compounding Flywheel */}
      <section>
        <BusinessFlywheel />
      </section>

      {/* The Seven Planned Revenue Streams */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
              Commercial Portfolio
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#17233A]">
              Seven Planned Revenue Streams
            </h2>
            <p className="text-sm text-[#17233A]/70 mt-1 max-w-xl">
              Diversified commercial architecture engineered to capture compounding value across media, physical goods, and experiential education.
            </p>
          </div>

          <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
            *Planned commercial expansion opportunities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVENUE_STREAMS.map((stream) => (
            <div
              key={stream.id}
              className="bg-white rounded-3xl border border-[#C7A451]/20 p-6 flex flex-col justify-between hover:border-[#C7A451] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#C7A451]">
                    Stream 0{stream.id}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F0] text-[#17233A] border border-gray-200">
                    {stream.stage}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#17233A] mb-2">
                  {stream.title}
                </h3>

                <p className="text-xs text-[#17233A]/75 leading-relaxed mb-4">
                  {stream.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Target Pillars</span>
                <div className="space-y-1">
                  {stream.potentialPillars.map((p, idx) => (
                    <div key={idx} className="text-[11px] text-[#17233A] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action panel */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#17233A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Explore Strategic Alliances with Zanarra
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg">
            Whether in toy licensing, animated co-production, or early childhood learning, let's build the next generation of global children's IP together.
          </p>
        </div>

        <Link
          to="/partnerships"
          className="px-6 py-3 rounded-full bg-[#C7A451] text-[#17233A] text-xs font-bold hover:bg-[#b89543] transition-colors whitespace-nowrap"
        >
          Partner with Zanarra
        </Link>
      </section>
    </div>
  );
};
