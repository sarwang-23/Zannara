import React from 'react';
import { PartnershipForm } from '../components/forms/PartnershipForm';
import { 
  ShoppingBag, 
  BookOpen, 
  Film, 
  Music, 
  GraduationCap, 
  Theater, 
  Globe, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowRight
} from 'lucide-react';

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
      title: 'Brand Partnerships',
      desc: 'Ethical co-marketing campaigns, healthy family lifestyle integrations, and educational tech sponsorships.'
    }
  ];

  return (
    <div className="pt-8 sm:pt-10 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* ── 1. PAGE HEADER ── */}
      <section className="text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF2E4] border border-[#C58B39]/50 text-[#9E651E] text-xs font-bold uppercase tracking-[0.16em] shadow-2xs">
          <Building2 className="w-3.5 h-3.5 text-[#B87B28]" /> Strategic Licensing &amp; Alliances
        </div>

        <h1 
          className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0B1B36] leading-[1.12] tracking-tight"
          style={{ fontFamily: "'Playfair Display', 'DM Serif Display', Georgia, serif" }}
        >
          Bring Zanarra into more{' '}
          <span className="bg-gradient-to-r from-[#B87B28] via-[#D49E45] to-[#B87B28] bg-clip-text text-transparent">
            homes, markets and experiences.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#3E4E68] max-w-2xl mx-auto leading-relaxed font-normal">
          We collaborate with world-class manufacturers, publishers, broadcasters, and educational institutions to scale our character universe globally.
        </p>
      </section>

      {/* ── 2. EIGHT LICENSING CATEGORIES (4x2 GRID) ── */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E6DCC9] pb-5 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A5A1B] block mb-1">
              Commercial Opportunities
            </span>
            <h2 
              className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Eight Pathways for Global Collaboration
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DFD3C2] text-xs font-semibold text-[#0B1B36] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Turnkey Brand Guides &amp; Assets</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {opportunities.map((opp, idx) => {
            const Icon = opp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#DFD3C2] hover:border-[#C58B39] transition-all hover:shadow-[0_12px_30px_rgba(11,27,54,0.06)] hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF2E4] border border-[#DFCDB7] flex items-center justify-center text-[#9E651E] group-hover:bg-[#0B1B36] group-hover:text-[#D4AF37] group-hover:border-[#0B1B36] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 
                    className="font-serif text-lg font-bold text-[#0B1B36] leading-snug pt-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {opp.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A5A72] leading-relaxed">
                    {opp.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EDE3D2] flex items-center justify-between text-[11px] font-bold text-[#8A5A1B]">
                  <span>Active Category</span>
                  <span className="text-[#C58B39] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. STRATEGIC PARTNERSHIP ENQUIRY FORM ── */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A5A1B] block">
            Initiate Dialogue
          </span>
          <h2 
            className="font-serif text-3xl font-bold text-[#0B1B36]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Submit a Partnership Proposal
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5A72] max-w-xl mx-auto">
            Share details regarding your company, operating region, and product category. Our global licensing team will review your proposal promptly.
          </p>
        </div>

        <PartnershipForm />
      </section>

      {/* ── 4. BRAND INTEGRITY & CHILD SAFETY PRINCIPLE ── */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#FAF6EE] border border-[#E5DAC6] flex items-start gap-4 max-w-4xl mx-auto shadow-2xs">
        <ShieldCheck className="w-5 h-5 text-[#9E651E] shrink-0 mt-0.5" />
        <div className="text-xs sm:text-[12.5px] text-[#556987] leading-relaxed">
          <strong className="text-[#0B1B36] block mb-0.5 font-bold">Zanarra Partnership &amp; Brand Integrity Standard:</strong>
          We adhere to strict child-protection guidelines across all commercial touchpoints. We partner exclusively with ethical organizations committed to product safety, environmental sustainability, and enriching children's developmental wellbeing.
        </div>
      </section>

    </div>
  );
};
