import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ZanarraLogo } from '../visuals/ZanarraLogo';
import { Menu, X, ArrowUpRight, Sparkles, Briefcase, TrendingUp } from 'lucide-react';
import { InvestorEnquiryModal } from '../forms/InvestorEnquiryModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
      <header
        className={`sticky top-0 z-50 bg-[#FAF7F0] border-b border-[#EBDCC8]/80 transition-all duration-200 ${
          isScrolled
            ? 'shadow-xs py-2.5 sm:py-3'
            : 'py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <ZanarraLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#17233A]/10 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-[#17233A] text-white shadow-xs'
                    : 'text-[#17233A]/80 hover:text-[#17233A] hover:bg-[#FAF7F0]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions & CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setIsInvestorModalOpen(true)}
              className="px-3.5 py-2 rounded-full text-xs font-bold text-[#17233A] hover:bg-white/90 border border-transparent hover:border-gray-200 transition-all flex items-center gap-1.5"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#C7A451]" />
              <span>Investor Enquiries</span>
            </button>

            <Link
              to="/partnerships"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#17233A] text-white hover:bg-[#25395E] transition-all shadow-xs hover:shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <span>Partner with Zanarra</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A451]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsInvestorModalOpen(true)}
              className="md:hidden p-2 rounded-full bg-white/80 border border-gray-200 text-[#17233A]"
              title="Investor Enquiries"
            >
              <TrendingUp className="w-4 h-4 text-[#C7A451]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/90 border border-gray-200 text-[#17233A] hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF7F0] pt-24 px-6 pb-8 overflow-y-auto lg:hidden animate-fadeIn flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
              Explore Zanarra
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#17233A] text-white'
                    : 'text-[#17233A] hover:bg-[#F2EBDD]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-3 rounded-2xl text-base font-bold text-[#17233A] hover:bg-[#F2EBDD]"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-200 space-y-3">
            <Link
              to="/partnerships"
              className="w-full py-3.5 rounded-full text-center text-sm font-bold bg-[#17233A] text-white block shadow-md"
            >
              Partner with Zanarra
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsInvestorModalOpen(true);
              }}
              className="w-full py-3 rounded-full text-center text-sm font-bold bg-white text-[#17233A] border border-gray-300 block"
            >
              Investor Enquiries
            </button>
            <p className="text-center text-xs text-gray-500 pt-2 font-serif">
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
