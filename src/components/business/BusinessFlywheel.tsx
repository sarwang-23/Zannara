import React, { useState } from 'react';
import { ArrowRight, RotateCw, Sparkles, Layers, Users, Heart, ShoppingBag, Coins, RefreshCw } from 'lucide-react';

export const BusinessFlywheel: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: '1. Original IP',
      icon: Sparkles,
      color: '#C7A451',
      summary: 'High-concept character design, distinctive story bibles & deep lore.',
      desc: 'We create original, emotionally resonant characters (like Momo, Tobo, and Dodi) with protected worldwide copyright and trademark assets.'
    },
    {
      id: 1,
      title: '2. Content',
      icon: Layers,
      color: '#E26D5C',
      summary: 'Multilingual animated shorts, songs, storybooks & digital pilots.',
      desc: 'AI-assisted production workflows accelerate animation, music rendering, and simultaneous localized dubbing into global languages.'
    },
    {
      id: 2,
      title: '3. Audience',
      icon: Users,
      color: '#B9D9F3',
      summary: 'Rapid organic discovery across streaming platforms & digital touchpoints.',
      desc: 'Consistent digital release cadences build a devoted base of parents and children seeking positive, wonder-driven adventures.'
    },
    {
      id: 3,
      title: '4. Character Affinity',
      icon: Heart,
      color: '#F2A18B',
      summary: 'Deep emotional bonds, catchphrases, and childhood identification.',
      desc: 'Children do not just watch; they pretend to be Momo, build like Tobo, and ask questions like Dodi, cementing franchise loyalty.'
    },
    {
      id: 4,
      title: '5. Products & Partnerships',
      icon: ShoppingBag,
      color: '#7C3AED',
      summary: 'Toys, books, publishing, school kits, and interactive companion games.',
      desc: 'High-margin consumer products and trusted brand collaborations allow children to bring Zanarra experiences into daily play.'
    },
    {
      id: 5,
      title: '6. Revenue',
      icon: Coins,
      color: '#B45309',
      summary: 'Diversified income streams spanning licensing, royalties and subscriptions.',
      desc: 'Compounding cash flows with strong unit economics that don’t rely solely on ad views or single-vendor distribution.'
    },
    {
      id: 6,
      title: '7. More IP',
      icon: RefreshCw,
      color: '#4A7C59',
      summary: 'Reinvesting capital into new story realms, characters, and franchise depth.',
      desc: 'Cash flow funds subsequent universe expansions (Terra Viva, Mechanika, Mythara, Sonika, Cosmara) expanding the perpetual franchise moat.'
    }
  ];

  return (
    <div className="w-full bg-[#FAF7F0] rounded-3xl border border-[#C7A451]/25 p-6 sm:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#17233A]/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C7A451]/40 text-[#C7A451] text-xs font-bold uppercase tracking-wider mb-2">
            <RotateCw className="w-3.5 h-3.5" /> Compounding IP Flywheel
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A]">
            The Self-Sustaining Franchise Engine
          </h3>
          <p className="text-sm text-[#17233A]/70 mt-1 max-w-xl">
            Each stage of audience engagement feeds directly into franchise equity and perpetual expansion.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="p-2 rounded-full bg-white border border-gray-200 hover:bg-[#F2EBDD] text-[#17233A] text-xs transition-colors"
            title="Previous step"
          >
            ←
          </button>
          <span className="text-xs font-bold text-[#17233A] px-2">
            {activeStep + 1} / {steps.length}
          </span>
          <button
            onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="p-2 rounded-full bg-white border border-gray-200 hover:bg-[#F2EBDD] text-[#17233A] text-xs transition-colors"
            title="Next step"
          >
            →
          </button>
        </div>
      </div>

      {/* Flywheel Progression Ribbon */}
      <div className="mt-8 overflow-x-auto pb-4 pt-2">
        <div className="flex items-center gap-2 min-w-max">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#17233A] text-[#FAF7F0] border-[#C7A451] shadow-md scale-105'
                      : 'bg-white hover:bg-[#F2EBDD] text-[#17233A] border-gray-200/80'
                  }`}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: isActive ? '#C7A451' : step.color }}
                  />
                  <span>{step.title}</span>
                </button>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]/60 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
          <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]/60 shrink-0" />
          <div className="px-3 py-1 rounded-lg bg-amber-100 text-[#17233A] text-[11px] font-bold">
            Loops back to Step 1
          </div>
        </div>
      </div>

      {/* Active Step Spotlight Card */}
      <div className="mt-6 p-6 sm:p-8 bg-white rounded-2xl border border-[#C7A451]/30 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C7A451]">Stage Detail</span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#FAF7F0] text-[#17233A] font-semibold border border-gray-200">
              {steps[activeStep].title}
            </span>
          </div>
          <h4 className="font-serif text-2xl font-bold text-[#17233A]">
            {steps[activeStep].summary}
          </h4>
          <p className="text-sm text-[#17233A]/80 leading-relaxed">
            {steps[activeStep].desc}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#C7A451]/20 flex flex-col items-center justify-center min-w-[140px] text-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-xs mb-2">
            {React.createElement(steps[activeStep].icon, {
              className: "w-6 h-6",
              style: { color: steps[activeStep].color }
            })}
          </div>
          <span className="text-[11px] font-bold text-[#17233A]">Flywheel Node</span>
          <span className="text-[10px] text-gray-500">Step {activeStep + 1} of 7</span>
        </div>
      </div>
    </div>
  );
};
