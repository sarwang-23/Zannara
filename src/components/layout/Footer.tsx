import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZanarraLogo } from '../visuals/ZanarraLogo';
import { ArrowUpRight, Shield, Heart, Sparkles, X } from 'lucide-react';

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
    { name: 'Terra Viva (Living Earth)', color: '#4A7C59' },
    { name: 'Mechanika (The Makers)', color: '#B45309' },
    { name: 'Mythara (Stories & Mystery)', color: '#7C3AED' },
    { name: 'Sonika (Sound & Emotion)', color: '#E11D48' },
    { name: 'Cosmara (Starlight & Time)', color: '#0284C7' },
  ];

  return (
    <>
      <footer className="bg-[#17233A] text-[#FAF7F0] pt-16 pb-12 border-t border-[#C7A451]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-4">
              <ZanarraLogo variant="light" size="lg" />
              <p className="text-sm text-[#FAF7F0]/80 max-w-md leading-relaxed mt-4">
                Zanarra is an AI-native children's entertainment and intellectual property company building original characters, immersive story universes and globally scalable children's franchises from India for the world.
              </p>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C7A451] block mb-1">
                  Brand Promise
                </span>
                <p className="text-xs text-[#FAF7F0]/90 italic font-serif">
                  "We create characters children love, worlds they want to explore, and stories that grow with them."
                </p>
              </div>
            </div>

            {/* Quick Navigation Column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block">
                Universe & Company
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#FAF7F0]/80 hover:text-[#C7A451] transition-colors py-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* The 5 Realms Column */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block">
                The Five Story Realms
              </span>
              <ul className="space-y-2 text-xs">
                {realms.map((r) => (
                  <li key={r.name} className="flex items-center gap-2 text-[#FAF7F0]/80">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                    <span>{r.name}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <Link
                  to="/partnerships"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C7A451] hover:underline"
                >
                  <span>Explore commercial licensing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Copyright and Legal Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F0]/60 gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-[#FAF7F0]/90 font-medium">
                Zanarra — One universe. Infinite stories.
              </span>
              <span>•</span>
              <span>© {currentYear} Zanarra Entertainment. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-[#FAF7F0] transition-colors underline"
              >
                Privacy Policy (Child Safe)
              </button>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-[#FAF7F0] transition-colors underline"
              >
                Terms of Use
              </button>
              <button
                onClick={() => setActiveLegalModal('cookies')}
                className="hover:text-[#FAF7F0] transition-colors underline"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-[#17233A] relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacy' && (
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Privacy & Children’s Safety</h3>
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
                <h3 className="font-serif text-2xl font-bold">Terms of Intellectual Property</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All characters (Momo, Tobo, Dodi), realms (Terra Viva, Mechanika, Mythara, Sonika, Cosmara), logos, audio files, and story bibles are proprietary intellectual property of Zanarra. Unauthorized copying, unauthorized merchandise production, or commercial exploitation without an executed licensing agreement is strictly prohibited.
                </p>
              </div>
            )}

            {activeLegalModal === 'cookies' && (
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold">Cookie Preferences</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We use strictly necessary technical cookies to ensure smooth site navigation, typography caching, and form submission security. We do not employ invasive behavioural tracking or third-party advertising cookies targeting young audiences.
                </p>
              </div>
            )}

            <button
              onClick={() => setActiveLegalModal(null)}
              className="w-full mt-6 py-2.5 rounded-full bg-[#17233A] text-white text-xs font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
