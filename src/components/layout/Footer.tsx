import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZanarraLogo } from '../visuals/ZanarraLogo';
import { ArrowUpRight, Shield, Sparkles, X, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const navigationLinks = [
    { name: 'The Zanarra Universe', path: '/universe' },
    { name: 'Original Characters', path: '/characters' },
    { name: 'Stories & Experiences', path: '/stories' },
    { name: 'Our Business & Flywheel', path: '/business' },
    { name: 'Investor Relations', path: '/investors' },
    { name: 'Partnerships & Licensing', path: '/partnerships' },
    { name: 'About Zanarra', path: '/about' },
    { name: 'Contact & Pathways', path: '/contact' },
  ];

  const realms = [
    {
      id: 'terra-viva',
      name: 'Terra Viva',
      theme: 'Living Earth',
      color: '#4A7C59',
      glow: 'rgba(74, 124, 89, 0.45)',
    },
    {
      id: 'mechanika',
      name: 'Mechanika',
      theme: 'The Makers',
      color: '#D97706',
      glow: 'rgba(217, 119, 6, 0.45)',
    },
    {
      id: 'mythara',
      name: 'Mythara',
      theme: 'Stories & Mystery',
      color: '#9333EA',
      glow: 'rgba(147, 51, 234, 0.45)',
    },
    {
      id: 'sonika',
      name: 'Sonika',
      theme: 'Sound & Emotion',
      color: '#E11D48',
      glow: 'rgba(225, 29, 72, 0.45)',
    },
    {
      id: 'cosmara',
      name: 'Cosmara',
      theme: 'Starlight & Time',
      color: '#0284C7',
      glow: 'rgba(2, 132, 199, 0.45)',
    },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          ZANARRA MAGICAL CELESTIAL FOOTER
          Atmosphere: Deep midnight navy · golden stardust · storybook aura
          ═══════════════════════════════════════════════════════════════ */}
      <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#080E1C] via-[#0B1428] to-[#050811] text-[#FAF7F0] border-t border-[#C7A451]/30">
        
        {/* Golden top stardust accent stripe */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A451]/80 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#C7A451]/[0.08] via-transparent to-transparent pointer-events-none" />

        {/* Ambient celestial lighting orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0284C7]/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#C7A451]/[0.05] blur-3xl pointer-events-none" />

        {/* Magical starfield background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF4D4" stopOpacity="1" />
              <stop offset="100%" stopColor="#C7A451" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Subtle constellation stars */}
          <circle cx="8%" cy="18%" r="1.5" fill="#FFF4D4" opacity="0.8" />
          <circle cx="14%" cy="32%" r="1" fill="#C7A451" opacity="0.6" />
          <circle cx="22%" cy="12%" r="2" fill="#FFF4D4" opacity="0.9" />
          <circle cx="31%" cy="26%" r="1.2" fill="#E8D4A8" opacity="0.7" />
          <circle cx="45%" cy="15%" r="1.8" fill="#FFF4D4" opacity="0.8" />
          <circle cx="58%" cy="28%" r="1" fill="#C7A451" opacity="0.5" />
          <circle cx="68%" cy="14%" r="2" fill="#FFF4D4" opacity="0.9" />
          <circle cx="76%" cy="36%" r="1.3" fill="#E8D4A8" opacity="0.6" />
          <circle cx="86%" cy="20%" r="1.5" fill="#FFF4D4" opacity="0.8" />
          <circle cx="94%" cy="34%" r="1" fill="#C7A451" opacity="0.5" />
          <circle cx="12%" cy="65%" r="1.5" fill="#FFF4D4" opacity="0.7" />
          <circle cx="28%" cy="75%" r="1.2" fill="#C7A451" opacity="0.6" />
          <circle cx="48%" cy="68%" r="1" fill="#E8D4A8" opacity="0.5" />
          <circle cx="72%" cy="72%" r="1.8" fill="#FFF4D4" opacity="0.8" />
          <circle cx="89%" cy="62%" r="1.2" fill="#C7A451" opacity="0.6" />
          {/* Twinkling 4-point cross stars */}
          <path d="M120 40 L122 45 L127 47 L122 49 L120 54 L118 49 L113 47 L118 45 Z" fill="#FFF4D4" opacity="0.6" />
          <path d="M540 80 L541.5 84 L546 85.5 L541.5 87 L540 91 L538.5 87 L534 85.5 L538.5 84 Z" fill="#F4DE9C" opacity="0.7" />
          <path d="M980 60 L982 65 L987 67 L982 69 L980 74 L978 69 L973 67 L978 65 Z" fill="#FFF4D4" opacity="0.6" />
          <path d="M1120 110 L1121 113 L1125 114 L1121 115 L1120 118 L1119 115 L1115 114 L1119 113 Z" fill="#C7A451" opacity="0.5" />
        </svg>

        {/* Storybook Fantasy Horizon Silhouette at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none opacity-20 overflow-hidden">
          <svg
            viewBox="0 0 1440 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover object-bottom"
            preserveAspectRatio="none"
          >
            <path
              d="M0 160L0 110C120 95 240 125 360 115C480 105 600 80 720 95C840 110 960 135 1080 120C1200 105 1320 85 1440 100L1440 160Z"
              fill="#0E172E"
            />
            <path
              d="M0 160L0 128C140 118 280 138 420 128C560 118 700 98 840 112C980 126 1120 142 1260 130C1360 122 1400 115 1440 120L1440 160Z"
              fill="#060A14"
            />
          </svg>
        </div>

        {/* ── MAIN CONTENT CONTAINER ─────────────────────────────────── */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 pt-16 sm:pt-20 pb-12">
          
          {/* Top 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#C7A451]/20">
            
            {/* ── COLUMN 1: Brand & Studio Promise (lg:col-span-5) ──────── */}
            <div className="lg:col-span-5 space-y-6">
              {/* Zanarra Master Logo Lockup */}
              <div className="inline-block">
                <ZanarraLogo variant="light" size="lg" />
              </div>

              {/* Company Editorial Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#FAF7F0]/80 leading-relaxed font-sans max-w-md">
                Zanarra is an AI-native children's entertainment and intellectual property company building original characters, immersive story universes and globally scalable children's franchises from India for the world.
              </p>

              {/* Enchanted Studio Brand Promise Card */}
              <div className="relative overflow-hidden rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-[#C7A451]/[0.08] border border-[#C7A451]/35 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.35)] group transition-all duration-300 hover:border-[#C7A451]/60 hover:shadow-[0_6px_28px_rgba(199,164,81,0.25)]">
                {/* Subtle golden corner flare */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C7A451]/20 to-transparent pointer-events-none rounded-tr-2xl" />
                <Sparkles className="absolute top-3.5 right-3.5 w-4 h-4 text-[#F4DE9C]/60 group-hover:rotate-12 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-[8px] text-[#C7A451]">✦</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#E5C378]">
                      Brand Promise
                    </span>
                    <span className="text-[8px] text-[#C7A451]">✦</span>
                  </div>
                  <blockquote className="text-[13.5px] sm:text-[14px] text-[#FFF9EE] italic font-serif leading-relaxed">
                    "We create characters children love, worlds they want to explore, and stories that grow with them."
                  </blockquote>
                  <p className="text-[11px] text-[#C7A451]/80 font-sans uppercase tracking-[0.16em] font-semibold mt-2.5">
                    — The Zanarra Creed
                  </p>
                </div>
              </div>
            </div>

            {/* ── COLUMN 2: Universe & Company Navigation (lg:col-span-4) ── */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-[#C7A451]/20">
                <span className="text-[9px] text-[#C7A451]">✦</span>
                <h3 className="text-[11.5px] font-black uppercase tracking-[0.24em] text-[#E5C378]">
                  Universe & Company
                </h3>
              </div>

              <nav aria-label="Footer navigation">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2">
                  {navigationLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-2 text-[13px] text-[#FAF7F0]/75 hover:text-[#FFF4D4] py-1 transition-all duration-200"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#C7A451]/60 group-hover:text-[#F4DE9C] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200 font-medium">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ── COLUMN 3: The 5 Story Realms & Licensing CTA (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 pb-1 border-b border-[#C7A451]/20">
                  <span className="text-[9px] text-[#C7A451]">✦</span>
                  <h3 className="text-[11.5px] font-black uppercase tracking-[0.24em] text-[#E5C378]">
                    The Five Story Realms
                  </h3>
                </div>

                {/* Illuminated Realms List */}
                <ul className="space-y-2 pt-3" aria-label="The Five Realms">
                  {realms.map((r) => (
                    <li key={r.id}>
                      <Link
                        to={`/universe#realm-${r.id}`}
                        className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#C7A451]/40 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-2.5">
                          {/* Radiant glowing jewel indicator */}
                          <div className="relative flex items-center justify-center shrink-0">
                            <span
                              className="w-2.5 h-2.5 rounded-full ring-2 ring-white/30 transition-transform duration-300 group-hover:scale-125"
                              style={{
                                backgroundColor: r.color,
                                boxShadow: `0 0 10px ${r.glow}`,
                              }}
                            />
                          </div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[12.5px] font-semibold text-[#FAF7F0] group-hover:text-white transition-colors">
                              {r.name}
                            </span>
                            <span className="text-[11px] text-[#FAF7F0]/50 font-serif italic">
                              ({r.theme})
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] text-[#C7A451] opacity-0 group-hover:opacity-100 transition-opacity">
                          ✦
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Licensing CTA Pill */}
              <div className="pt-3">
                <Link
                  to="/partnerships"
                  className="w-full inline-flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#C7A451]/25 via-[#E5C378]/20 to-[#C7A451]/25 border border-[#C7A451]/55 hover:border-[#F4DE9C] text-[#FFF4D4] hover:text-white shadow-[0_4px_16px_rgba(199,164,81,0.25)] hover:shadow-[0_6px_24px_rgba(199,164,81,0.45)] hover:scale-[1.01] transition-all duration-300 group"
                  title="Explore commercial licensing with Zanarra"
                >
                  <div className="flex flex-col">
                    <span className="text-[12px] sm:text-[12.5px] font-bold tracking-wide">
                      Explore Commercial Licensing
                    </span>
                    <span className="text-[10px] text-[#C7A451] font-semibold uppercase tracking-wider">
                      Franchise · IP · Media
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C7A451]/30 border border-[#C7A451]/60 flex items-center justify-center shrink-0 group-hover:bg-[#C7A451] group-hover:text-[#17233A] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#F4DE9C] group-hover:text-[#17233A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              </div>

            </div>

          </div>

          {/* ── BOTTOM COPYRIGHT & LEGAL ROW ───────────────────────────── */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FAF7F0]/65 gap-4">
            
            {/* Brand Signature and Copyright */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
              <span className="font-serif text-[#FAF7F0]/95 font-medium italic text-[13px]">
                Zanarra — One universe. Infinite stories.
              </span>
              <span className="text-[#C7A451] opacity-70">✦</span>
              <span className="text-[#FAF7F0]/70">
                © {currentYear} Zanarra Entertainment. All rights reserved.
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11.5px]">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-[#F4DE9C] transition-colors underline decoration-[#C7A451]/40 underline-offset-4 cursor-pointer"
              >
                Privacy Policy (Child Safe)
              </button>
              <span className="text-white/20">•</span>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-[#F4DE9C] transition-colors underline decoration-[#C7A451]/40 underline-offset-4 cursor-pointer"
              >
                Terms of Use
              </button>
              <span className="text-white/20">•</span>
              <button
                onClick={() => setActiveLegalModal('cookies')}
                className="hover:text-[#F4DE9C] transition-colors underline decoration-[#C7A451]/40 underline-offset-4 cursor-pointer"
              >
                Cookie Preferences
              </button>
            </div>

          </div>

        </div>
      </footer>

      {/* ── LEGAL INFORMATION MODAL ──────────────────────────────────── */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-[#17233A] relative max-h-[85vh] overflow-y-auto shadow-2xl border border-[#EBDCC8]">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacy' && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#17233A]">Privacy & Children’s Safety</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Zanarra is deeply committed to online child safety. In compliance with international frameworks including COPPA and Indian digital data protection standards, our public websites and experiences never knowingly collect, store, or sell personal information directly from children under 13.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All communication channels (newsletter updates, licensing inquiries, and investor dialogues) are strictly intended for verified adults, parents, educators, and institutional partners.
                </p>
              </div>
            )}

            {activeLegalModal === 'terms' && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#17233A]">Terms of Intellectual Property</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All characters (Momo, Tobo, Dodi), realms (Terra Viva, Mechanika, Mythara, Sonika, Cosmara), logos, audio files, and story bibles are proprietary intellectual property of Zanarra. Unauthorized copying, unauthorized merchandise production, or commercial exploitation without an executed licensing agreement is strictly prohibited.
                </p>
              </div>
            )}

            {activeLegalModal === 'cookies' && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#17233A]">Cookie Preferences</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We use strictly necessary technical cookies to ensure smooth site navigation, typography caching, and form submission security. We do not employ invasive behavioural tracking or third-party advertising cookies targeting young audiences.
                </p>
              </div>
            )}

            <button
              onClick={() => setActiveLegalModal(null)}
              className="w-full mt-6 py-2.5 rounded-full bg-[#17233A] hover:bg-[#1E2E4A] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
