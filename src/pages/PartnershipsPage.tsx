import React from 'react';
import { PartnershipForm } from '../components/forms/PartnershipForm';
import { ShoppingBag, BookOpen, Film, Music, GraduationCap, Theater, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

export const PartnershipsPage: React.FC = () => {
  const opportunities = [
    {
      icon: ShoppingBag,
      title: 'Consumer Products & Merchandise',
      desc: 'Plush character toys, STEM exploration play sets, apparel, school gear, and collectible figures.'
    },
    {
      icon: BookOpen,
      title: 'Books & Publishing',
      desc: 'Illustrated picture books, graphic novel story arcs, interactive sound books, and multilingual activity workbooks.'
    },
    {
      icon: Film,
      title: 'Streaming & Content Distribution',
      desc: 'Episodic animated broadcasts, SVOD streaming licensing, and global territorial broadcast syndication.'
    },
    {
      icon: Music,
      title: 'Music Partnerships',
      desc: 'Character soundtrack albums, multi-language sing-alongs, children\'s musical apps, and audio streaming.'
    },
    {
      icon: GraduationCap,
      title: 'Education & School Programmes',
      desc: 'Inquiry-based early childhood modules, hands-on science tinkering kits, and school storytelling workshops.'
    },
    {
      icon: Theater,
      title: 'Live Entertainment & Family Experiences',
      desc: 'Theatrical touring productions, mall interactive pop-up zones, and immersive children\'s science exhibitions.'
    },
    {
      icon: Globe,
      title: 'Regional & International Licensing',
      desc: 'Territorial master licensing, localized voice dubbing, and regional consumer goods distribution rights.'
    },
    {
      icon: Sparkles,
      title: 'Brand Alliances & Collaborations',
      desc: 'Ethical co-marketing campaigns, healthy family nutrition integrations, and educational tech sponsorships.'
    }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" /> Commercial Alliances
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          Bring Zanarra into more homes, markets and experiences.
        </h1>

        <p className="text-base sm:text-lg text-[#17233A]/80 max-w-2xl mx-auto leading-relaxed">
          We collaborate with world-class manufacturers, publishers, broadcasters, and educational institutions to bring our characters and realms to life.
        </p>
      </section>

      {/* Opportunities Grid */}
      <section className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
            Licensing Categories
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#17233A]">
            Opportunities for Collaboration
          </h2>
          <p className="text-sm text-[#17233A]/70 mt-1">
            Explore active licensing categories across physical, digital, and educational touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp, idx) => {
            const Icon = opp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#C7A451]/20 hover:border-[#C7A451] transition-all hover:shadow-md space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-gray-200 text-[#17233A] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C7A451]" />
                </div>
                <h3 className="font-bold text-[#17233A] text-base">
                  {opp.title}
                </h3>
                <p className="text-xs text-[#17233A]/75 leading-relaxed">
                  {opp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Clean Partnership Enquiry Form */}
      <section className="space-y-4">
        <PartnershipForm />
      </section>
    </div>
  );
};
