import React from 'react';
import { BRAND_INFO } from '../data/brandData';
import { 
  Sparkles, 
  Heart, 
  Compass, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  Lightbulb,
  Palette,
  Users,
  CheckCircle2,
  Building2,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const valueIcons = [
    Lightbulb,   // Curiosity over certainty
    Palette,     // Originality over imitation
    Heart,       // Emotional connection over disposable content
    Cpu,         // Creativity supported by technology
    Globe2       // Global ambition rooted in Indian imagination
  ];

  const brandPillars = [
    {
      audience: 'Children & Parents',
      role: 'Emotional Wonder & Connection',
      description: 'Stories that spark curiosity, characters that become lifelong friends, and safe, enriching experiences parents can trust wholeheartedly.'
    },
    {
      audience: 'Strategic Partners',
      role: 'High-Margin Transmedia Scalability',
      description: 'Turnkey character IP, rich style guides, and multi-category licensing across toys, books, animation, apparel, and live experiences.'
    },
    {
      audience: 'Institutional Investors',
      role: 'Defensible Compounding IP Assets',
      description: 'Capital-efficient AI-assisted production velocity driving 100% proprietary character universes with decade-scale enterprise value.'
    }
  ];

  return (
    <div className="pt-8 sm:pt-10 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* ── 1. CINEMATIC PAGE HERO ── */}
      <section className="text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF2E4] border border-[#C58B39]/50 text-[#9E651E] text-xs font-bold uppercase tracking-[0.16em] shadow-2xs">
          <Heart className="w-3.5 h-3.5 text-[#B87B28]" /> Origin, Purpose &amp; Vision
        </div>

        <h1 
          className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0B1B36] leading-[1.12] tracking-tight"
          style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
        >
          A new generation of stories starts with{' '}
          <span className="bg-gradient-to-r from-[#B87B28] via-[#D49E45] to-[#B87B28] bg-clip-text text-transparent">
            curiosity.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#3E4E68] max-w-2xl mx-auto leading-relaxed font-normal">
          Crafting characters children cherish, worlds they want to explore, and timeless values that endure across generations.
        </p>
      </section>

      {/* ── 2. THE COMPANY'S AMBITION (MASTER EDITORIAL SPREAD) ── */}
      <section className="bg-white rounded-3xl border border-[#DFD3C2] p-8 sm:p-14 lg:p-16 shadow-[0_20px_70px_rgba(11,27,54,0.06)] relative overflow-hidden">
        {/* Subtle warm ambient lighting */}
        <div 
          className="absolute -top-32 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #EAD8BD 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C58B39]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A5A1B]">
              The Company's Ambition
            </span>
          </div>

          <blockquote 
            className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1B36] leading-snug border-l-4 border-[#C58B39] pl-6 sm:pl-8 italic"
            style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
          >
            "Zanarra is being built around a simple belief: the most powerful stories do more than entertain. They become part of how children understand themselves, relate to others and explore the world."
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-[15.5px] text-[#3E4E68] leading-[1.75] pt-4">
            <div className="space-y-4">
              <p>
                We are creating original characters and connected worlds designed to travel across formats, languages and generations. Rather than short-lived viral gimmicks or disposable screen time, our mission is to cultivate deep, authentic companionship during the most formative years of childhood.
              </p>
              <p>
                Every narrative arc begins with an honest childhood question — from how rivers flow backwards in Terra Viva to why machines hum in Mechanika — transforming curiosity into empathy, problem-solving, and resilience.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our approach combines human creative storytelling, technology-enabled production velocity and a resolute long-term commitment to owning 100% proprietary intellectual property.
              </p>
              <p>
                Born in India with centuries of rich narrative heritage, our story universes are conceived from day one with universal emotional archetypes, engineered to resonate seamlessly with families across Tokyo, London, New York, and Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THREE CORE AUDIENCES ── */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A5A1B] block">
            Designed for Three Audiences
          </span>
          <h2 
            className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B36]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            One Universe. Universal Resonance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#DFD3C2] p-7 flex flex-col justify-between shadow-2xs hover:border-[#C58B39]/70 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-3">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#9E651E] block">
                  Audience 0{idx + 1}
                </span>
                <h3 
                  className="font-serif text-2xl font-bold text-[#0B1B36]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {pillar.audience}
                </h3>
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF2E4] border border-[#DFCDB7] text-[11px] font-bold text-[#7A4E18]">
                  {pillar.role}
                </span>
                <p className="text-xs sm:text-sm text-[#4A5A72] leading-relaxed pt-1">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. CORE VALUES (FIVE GUIDING COMMITMENTS) ── */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A5A1B] block">
            Guiding Philosophy
          </span>
          <h2 
            className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B36]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Five Core Values
          </h2>
          <p className="text-sm text-[#4A5A72]">
            The foundational principles guiding every character choice, line of dialogue, and technological decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_INFO.values.map((val, idx) => {
            const Icon = valueIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl border border-[#DFD3C2] p-7 sm:p-8 flex flex-col justify-between hover:border-[#C58B39] transition-all hover:shadow-md group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="font-serif text-3xl font-bold text-[#C58B39]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF2E4] border border-[#DFCDB7] flex items-center justify-center text-[#9E651E] group-hover:bg-[#0B1B36] group-hover:text-[#D4AF37] group-hover:border-[#0B1B36] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 
                    className="font-serif text-xl sm:text-2xl font-bold text-[#0B1B36] mb-2.5 leading-snug"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#4A5A72] leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#EDE3D2] flex items-center gap-2 text-xs font-bold text-[#8A5A1B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C58B39]" />
                  <span>The Zanarra Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. CREATIVE STEWARDSHIP & ETHICAL AI GOVERNANCE ── */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1B36] via-[#102344] to-[#0B1B36] border border-[#C58B39]/50 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-5 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Creative Stewardship &amp; Child Safety
          </div>

          <h3 
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Human Artistry Powered by Technological Speed
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            While we harness AI-native visual pipelines to make world-building, multi-language dubbing, and episodic creation 5–10x faster, human empathy, emotional truth, and rigorous child-safety standards remain the irreplaceable compass of everything we publish.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/universe"
              className="px-6 py-3 rounded-full bg-[#C58B39] text-[#0B1B36] text-xs font-bold hover:bg-[#D4AF37] transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Explore The Five Realms</span>
              <ArrowRight className="w-4 h-4 text-[#0B1B36]" />
            </Link>
            <Link
              to="/partnerships"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold transition-all inline-flex items-center gap-2"
            >
              <span>Partner With Zanarra</span>
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
