import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { UniversePage } from './pages/UniversePage';
import { CharactersPage } from './pages/CharactersPage';
import { StoriesPage } from './pages/StoriesPage';
import { BusinessPage } from './pages/BusinessPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

// 404 fallback page
function NotFound() {
  return (
    <div className="pt-40 pb-32 text-center max-w-xl mx-auto px-4">
      <span className="text-xs font-bold uppercase tracking-widest text-[#C7A451] block mb-2">
        Realm Exploration Detour
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#17233A]">
        404 — Realm Not Found
      </h1>
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        It seems Dodi's curiosity led down an unmapped starlight trail. Let's return to the safety of the main universe.
      </p>
      <div className="mt-6">
        <a
          href="/"
          className="px-6 py-2.5 rounded-full bg-[#17233A] text-white text-xs font-bold hover:bg-[#2A3F66] transition-colors inline-block"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#17233A] selection:bg-[#C7A451]/20">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/universe" element={<UniversePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
