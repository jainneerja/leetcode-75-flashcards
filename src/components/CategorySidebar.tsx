import React from 'react';
import type { Category, FlashCard, CardProgress } from '../types/card';

const CATEGORY_ICONS: Record<string, string> = {
  'Arrays & Hashing': '🧮',
  'Two Pointers': '👆',
  'Sliding Window': '🪟',
  'Stack': '📚',
  'Binary Search': '🔍',
  'Linked List': '🔗',
  'Trees': '🌳',
  'Tries': '🔤',
  'Heap / Priority Queue': '🏔️',
  'Graphs': '🕸️',
  'Dynamic Programming': '🧩',
};

interface Props {
  activeCategory: Category | 'All';
  onCategoryChange: (cat: Category | 'All') => void;
  allCards: FlashCard[];
  progress: CardProgress;
}

export default function CategorySidebar({ activeCategory, onCategoryChange, allCards, progress }: Props) {
  const categories = ['All', ...Object.keys(CATEGORY_ICONS)] as Array<Category | 'All'>;

  function countFor(cat: Category | 'All') {
    return cat === 'All' ? allCards.length : allCards.filter(c => c.category === cat).length;
  }

  function knownFor(cat: Category | 'All') {
    const cards = cat === 'All' ? allCards : allCards.filter(c => c.category === cat);
    return cards.filter(c => progress[c.id] === 'known').length;
  }

  const totalKnown = Object.values(progress).filter(v => v === 'known').length;

  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-4 py-5 border-b border-white/10">
        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          LC75
        </div>
        <p className="text-xs text-gray-400 mt-0.5">Interview Flashcards</p>
      </div>

      {/* Category list */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-0.5 px-2">
        {categories.map(cat => {
          const count = countFor(cat);
          const known = knownFor(cat);
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 text-left ${
                isActive
                  ? 'bg-purple-500/30 border border-purple-500/50 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'
              }`}
            >
              <span className="text-base flex-shrink-0">
                {cat === 'All' ? '📋' : CATEGORY_ICONS[cat]}
              </span>
              <span className="flex-1 truncate font-medium text-xs">{cat}</span>
              <div className="flex items-center gap-1 flex-shrink-0">
                {known > 0 && (
                  <span className="text-green-400 text-xs font-bold">{known}/</span>
                )}
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-300'}`}>
                  {count}
                </span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer progress */}
      <div className="px-4 py-3 border-t border-white/10">
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>Overall</span>
          <span className="text-green-400 font-bold">{totalKnown}/{allCards.length} known</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${allCards.length > 0 ? (totalKnown / allCards.length) * 100 : 0}%` }}
          />
        </div>
      </div>
    </div>
  );
}
