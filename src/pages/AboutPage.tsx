import React from 'react';
import { BRAND_INFO } from '../data/brandData';
import { Sparkles, Heart, Compass, Cpu, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5" /> Mission & Origin
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          A new generation of stories starts with curiosity.
        </h1>

        <p className="text-base sm:text-lg text-[#17233A]/80 max-w-2xl mx-auto leading-relaxed">
          Crafting characters children cherish, worlds they want to inhabit, and values that endure across generations.
        </p>
      </section>

      {/* Ambition Narrative */}
      <section className="bg-white rounded-3xl border border-[#C7A451]/25 p-8 sm:p-14 shadow-sm">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block">
            The Company's Ambition
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17233A] leading-snug">
            "Zanarra is being built around a simple belief: the most powerful stories do more than entertain. They become part of how children understand themselves, relate to others and explore the world."
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#17233A]/80 leading-relaxed pt-2">
            <p>
              We are creating original characters and connected worlds designed to travel across formats, languages and generations. Rather than short-lived viral trends, our ambition is to cultivate enduring companionship during the most formative years of childhood.
            </p>
            <p>
              Our approach combines creative storytelling, technology-enabled production and a long-term commitment to building intellectual property. Born in India with deep narrative traditions, our stories are conceived from day one to speak to every child on earth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Guiding Philosophy
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            Our Core Values
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-1">
            The five commitments guiding every character choice, line of dialogue, and technological workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_INFO.values.map((val, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl border border-[#C7A451]/20 p-6 sm:p-8 flex flex-col justify-between hover:border-[#C7A451] transition-all hover:shadow-md ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="text-xs font-bold text-[#C7A451] block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#17233A] mb-3">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gray-400">
                <span className="w-2 h-2 rounded-full bg-[#C7A451]" />
                <span>Zanarra Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Leadership & Ethics Note */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F0] border border-[#C7A451]/30">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block">
            Creative Stewardship
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#17233A]">
            Artistry & Technological Integrity
          </h3>
          <p className="text-xs sm:text-sm text-[#17233A]/80 leading-relaxed">
            While we harness AI-native workflows to make world-building, storyboard generation, and multi-language translation radically scalable, human empathy, emotional truth, and storytelling finesse remain the irreplaceable compass of everything we publish.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/universe"
              className="px-6 py-2.5 rounded-full bg-[#17233A] text-white text-xs font-bold hover:bg-[#2A3F66] transition-colors inline-flex items-center gap-2"
            >
              <span>Explore The Universe We Are Building</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7A451]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
