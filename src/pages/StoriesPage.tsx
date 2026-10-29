import React, { useState } from 'react';
import { STORIES_CATALOG, StoryItem, REALMS, CHARACTERS } from '../data/brandData';
import { RealmVisual } from '../components/visuals/RealmVisual';
import { LaunchInterestForm } from '../components/forms/LaunchInterestForm';
import { BookOpen, Music, Sparkles, Compass, Eye, Clock, AlertCircle } from 'lucide-react';

export const StoriesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const categories = [
    'All',
    'Short Stories',
    'Songs & Music',
    'Adventures',
    'Discover & Learn',
    'Behind the Worlds'
  ] as const;

  const filteredStories = activeCategory === 'All'
    ? STORIES_CATALOG
    : STORIES_CATALOG.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C7A451]/30 text-[#C7A451] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" /> Content Discovery Showcase
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17233A] leading-tight">
          Little stories. Big possibilities.
        </h1>

        <p className="text-base sm:text-lg text-[#17233A]/80 max-w-2xl mx-auto leading-relaxed">
          Explore upcoming narrative storybooks, original songs, and hands-on discovery arcs currently in development across the five realms.
        </p>
      </section>

      {/* Editorial Content Disclaimer */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Production Showcase Notice:</strong> The titles below represent active pipeline projects and pilot concepts. All releases are marked with their current development status.
          </span>
        </div>
      </div>

      {/* Filterable Content Navigation */}
      <section className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === cat
                ? 'bg-[#17233A] text-white shadow-md scale-105'
                : 'bg-white hover:bg-[#F2EBDD] text-[#17233A] border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Catalog Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStories.map((story) => {
          const realm = REALMS.find(r => r.id === story.realmId);
          return (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-[#C7A451]/20 p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="h-36 w-full rounded-2xl overflow-hidden mb-4 relative">
                  <RealmVisual id={story.realmId} className="w-full h-full" />
                  
                  {/* Status badge overlay */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-[#17233A] shadow-xs border border-gray-200">
                      {story.status}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#17233A]/80 text-[#FAF7F0] backdrop-blur-xs">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#17233A] group-hover:text-[#C7A451] transition-colors leading-snug">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#17233A]/75 mt-2 line-clamp-3 leading-relaxed">
                  {story.description}
                </p>
              </div>

              {/* Card Meta & Associations */}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-medium">Format:</span>
                  <span className="font-bold text-[#17233A]">{story.contentType}</span>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-medium">Realm:</span>
                  <span
                    className="font-bold px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: realm?.bgLight, color: realm?.textColor }}
                  >
                    {realm?.name}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] pt-1">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{story.durationOrLength}</span>
                  </div>

                  <button
                    onClick={() => setSelectedStory(story)}
                    className="text-xs font-bold text-[#17233A] hover:text-[#C7A451] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Overview</span>
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17233A]/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF7F0] border border-[#C7A451]/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 text-gray-600"
            >
              ✕
            </button>

            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C7A451] block mb-1">
              {selectedStory.category} • {selectedStory.status}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#17233A]">
              {selectedStory.title}
            </h3>

            <div className="h-40 w-full my-4 rounded-xl overflow-hidden">
              <RealmVisual id={selectedStory.realmId} className="w-full h-full" />
            </div>

            <p className="text-sm text-[#17233A]/80 leading-relaxed">
              {selectedStory.description}
            </p>

            <div className="mt-4 p-3 bg-white rounded-xl border border-gray-200 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-gray-500">Target Content Type:</span>
                <span className="font-bold text-[#17233A]">{selectedStory.contentType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estimated Duration:</span>
                <span className="font-bold text-[#17233A]">{selectedStory.durationOrLength}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Featured Characters:</span>
                <span className="font-bold text-[#17233A]">
                  {selectedStory.characterIds.map(id => id.toUpperCase()).join(', ')}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedStory(null)}
                className="px-6 py-2 rounded-full bg-[#17233A] text-white text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Section: Newsletter / Early Launch Interest for Parents and Partners */}
      <section>
        <LaunchInterestForm />
      </section>
    </div>
  );
};
