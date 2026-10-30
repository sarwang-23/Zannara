import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ZanarraLogo } from '../visuals/ZanarraLogo';
import { Menu, X, ArrowUpRight, TrendingUp, ChevronRight } from 'lucide-react';
import { InvestorEnquiryModal } from '../forms/InvestorEnquiryModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Explore Universe', path: '/universe' },
    { name: 'Characters', path: '/characters' },
    { name: 'Stories & Experiences', path: '/stories' },
    { name: 'Our Business', path: '/business' },
    { name: 'Investors', path: '/investors' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          ZANARRA PREMIUM NAVBAR
          Layout: Logo (left) · Nav links (centre) · CTAs (right)
          ─────────────────────────────────────────────────────────────
          Colour system
            Background  : #FAF7F0 (warm cream)  →  scrolled: white/97
            Border      : #EBDCC8 (warm sand)
            Typography  : #17233A (deep navy)
            Accent      : #C7A451 (warm gold)
            Active pill : #17233A bg + white text
          ═══════════════════════════════════════════════════════════════ */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/97 backdrop-blur-xl border-b border-[#E8DEC9] shadow-[0_2px_20px_rgba(23,35,58,0.08)]'
            : 'bg-[#FAF7F0] border-b border-[#EBDCC8]/70'
        }`}
      >
        {/* Thin golden top accent line — brand-identity stripe */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A451]/60 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            isScrolled ? 'h-[60px] sm:h-[64px]' : 'h-[68px] sm:h-[72px]'
          }`}>

            {/* ── BRAND LOGO ──────────────────────────────────────────── */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="inline-flex items-center gap-3 sm:gap-3.5 group select-none py-1"
                aria-label="Zanarra — Home"
              >
                {/* Jewel-crafted Emblem Medallion */}
                <div className="relative shrink-0">
                  {/* Ambient golden aura on hover */}
                  <div className="absolute -inset-1.5 rounded-[22px] bg-gradient-to-r from-[#E7C97E]/30 via-[#C7A451]/25 to-[#9B7528]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Multi-layered metallic gold bezel */}
                  <div
                    className={`relative p-[1.5px] rounded-[16px] sm:rounded-[18px] bg-gradient-to-tr from-[#9B7528] via-[#F4DE9C] to-[#BF9738] shadow-[0_2px_10px_rgba(23,35,58,0.12),0_1px_3px_rgba(199,164,81,0.25)] transition-all duration-300 group-hover:shadow-[0_4px_22px_rgba(199,164,81,0.45)] group-hover:scale-[1.04] ${
                      isScrolled ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-11 h-11 sm:w-12 sm:h-12'
                    }`}
                  >
                    {/* Inner pearl vessel */}
                    <div className="relative w-full h-full rounded-[14.5px] sm:rounded-[16.5px] overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#F1E9D7] flex items-center justify-center">
                      <img
                        src="/zanarra-emblem.png"
                        alt="Zanarra Shooting Star Emblem"
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                        draggable={false}
                      />
                      {/* Glass specular sheen overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/50 pointer-events-none" />
                      {/* Inner fine highlight border */}
                      <div className="absolute inset-0 rounded-[14.5px] sm:rounded-[16.5px] ring-1 ring-inset ring-white/60 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Studio Wordmark & Official Tagline Lockup */}
                <div className="flex flex-col justify-center">
                  <img
                    src="/zanarra-text-transparent.png"
                    alt="Zanarra"
                    className={`w-auto object-contain object-left transition-all duration-300 drop-shadow-[0_1.5px_3px_rgba(23,35,58,0.12)] group-hover:drop-shadow-[0_3px_12px_rgba(199,164,81,0.35)] group-hover:brightness-[1.06] ${
                      isScrolled ? 'h-[28px] sm:h-[30px]' : 'h-[32px] sm:h-[35px]'
                    }`}
                    draggable={false}
                  />
                  <div className="flex items-center gap-1.5 mt-0.5 hidden sm:flex">
                    <span className="text-[7px] text-[#C7A451] leading-none opacity-80">✦</span>
                    <span className="text-[8.5px] sm:text-[9px] font-black uppercase tracking-[0.24em] text-[#9D762B] leading-none font-sans">
                      Dream · Play · Explore · Together
                    </span>
                    <span className="text-[7px] text-[#C7A451] leading-none opacity-80">✦</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* ── DESKTOP NAVIGATION ──────────────────────────────────── */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center justify-center flex-1 px-4"
            >
              {/* Pill container — frosted glass track */}
              <div className="inline-flex items-center gap-0.5 bg-white/80 backdrop-blur-md border border-[#E4D8C4]/80 rounded-full px-1.5 py-1.5 shadow-[0_1px_8px_rgba(23,35,58,0.06)]">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-3.5 xl:px-4 py-1.5 rounded-full text-[12.5px] xl:text-[13px] font-semibold tracking-[0.01em] whitespace-nowrap transition-all duration-200 ${
                        active
                          ? 'bg-[#17233A] text-white shadow-[0_2px_8px_rgba(23,35,58,0.25)] font-bold'
                          : 'text-[#17233A]/75 hover:text-[#17233A] hover:bg-[#F5EEE3]/80'
                      }`}
                    >
                      {link.name}
                      {/* Subtle gold dot indicator for active */}
                      {active && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C7A451] opacity-0" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* ── DESKTOP CTA ACTIONS ─────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
              {/* Secondary: Investor Enquiries */}
              <button
                onClick={() => setIsInvestorModalOpen(true)}
                className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-3.5 sm:px-4 rounded-full text-[12px] sm:text-[12.5px] font-semibold text-[#17233A]/85 hover:text-[#17233A] bg-transparent hover:bg-white border border-transparent hover:border-[#E4D8C4] transition-all duration-200 cursor-pointer group/inv"
                title="Investor Enquiries"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#C7A451] group-hover/inv:scale-110 transition-transform flex-shrink-0" />
                <span className="hidden xl:inline">Investor Enquiries</span>
                <span className="xl:hidden">Investors</span>
              </button>

              {/* Divider */}
              <div className="w-px h-5 bg-[#E4D8C4]" />

              {/* Primary: Partner with Zanarra */}
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-1.5 h-9 sm:h-10 px-4 sm:px-5 rounded-full text-[12px] sm:text-[12.5px] font-bold bg-[#17233A] text-white hover:bg-[#1E2E4A] shadow-[0_2px_10px_rgba(23,35,58,0.25)] hover:shadow-[0_4px_18px_rgba(23,35,58,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/cta"
              >
                <span>Partner with Zanarra</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A451] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* ── MOBILE CONTROLS ─────────────────────────────────────── */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Investor icon — visible on mobile, hidden md+ */}
              <button
                onClick={() => setIsInvestorModalOpen(true)}
                className="flex md:hidden items-center justify-center w-9 h-9 rounded-full bg-white border border-[#E4D8C4] shadow-sm text-[#17233A] hover:border-[#C7A451]/50 transition-all"
                title="Investor Enquiries"
                aria-label="Investor Enquiries"
              >
                <TrendingUp className="w-4 h-4 text-[#C7A451]" />
              </button>

              {/* Hamburger / Close */}
              <button
                onClick={() => setMobileMenuOpen((o) => !o)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#E4D8C4] shadow-sm text-[#17233A] hover:border-[#C7A451]/50 hover:bg-[#FAF7F0] transition-all"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen
                  ? <X className="w-5 h-5" />
                  : <Menu className="w-5 h-5" />
                }
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE FULL-SCREEN DRAWER
          ─────────────────────────────────────────────────────────────
          Cream background — matches the brand; elegant + readable
          ═══════════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-[#FAF7F0] lg:hidden"
          style={{ paddingTop: '72px' }} /* below sticky header */
        >
          {/* Thin top accent */}
          <div className="absolute top-[72px] inset-x-0 h-px bg-[#EBDCC8]" />

          {/* Scrollable nav body */}
          <div className="flex-1 overflow-y-auto px-5 pt-6 pb-4">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#C7A451] mb-3 px-1">
              Navigate
            </p>

            <nav className="space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-semibold transition-all duration-150 ${
                      active
                        ? 'bg-[#17233A] text-white shadow-md'
                        : 'text-[#17233A] hover:bg-[#F0E9DC]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active
                      ? <span className="w-1.5 h-1.5 rounded-full bg-[#C7A451]" />
                      : <ChevronRight className="w-4 h-4 text-[#17233A]/30" />
                    }
                  </Link>
                );
              })}

              {/* Contact Us */}
              <Link
                to="/contact"
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-semibold text-[#17233A] hover:bg-[#F0E9DC] transition-all"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-[#17233A]/30" />
              </Link>
            </nav>
          </div>

          {/* Pinned CTA footer */}
          <div className="flex-shrink-0 px-5 pb-8 pt-4 border-t border-[#E4D8C4] space-y-3">
            <Link
              to="/partnerships"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold bg-[#17233A] text-white shadow-md hover:bg-[#1E2E4A] transition-colors"
            >
              <span>Partner with Zanarra</span>
              <ArrowUpRight className="w-4 h-4 text-[#C7A451]" />
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsInvestorModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold bg-white text-[#17233A] border border-[#E4D8C4] hover:border-[#C7A451]/50 hover:bg-[#FAF7F0] transition-all cursor-pointer"
            >
              <TrendingUp className="w-4 h-4 text-[#C7A451]" />
              <span>Investor Enquiries</span>
            </button>

            <p className="text-center text-[11px] text-[#17233A]/45 font-serif italic pt-1">
              One universe. Infinite stories.
            </p>
          </div>
        </div>
      )}

      {/* Investor Modal */}
      <InvestorEnquiryModal
        isOpen={isInvestorModalOpen}
        onClose={() => setIsInvestorModalOpen(false)}
      />
    </>
  );
};
