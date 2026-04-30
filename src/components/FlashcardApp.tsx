import React, { useState, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { FLASHCARD_DATA } from '../data/allCards';
import { useProgress } from '../hooks/useProgress';
import type { FlashCard, Category, Difficulty } from '../types/card';
import CategorySidebar from './CategorySidebar';
import SearchFilter from './SearchFilter';
import CardThumbnail from './CardThumbnail';
import CardModal from './CardModal';
import ProgressTracker from './ProgressTracker';

export default function FlashcardApp() {
  const [selectedCard, setSelectedCard] = useState<FlashCard | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | 'All'>('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { progress, setCardStatus, resetProgress, getStats } = useProgress();

  const filteredCards = useMemo(() => {
    return FLASHCARD_DATA.filter(card => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        !q ||
        card.title.toLowerCase().includes(q) ||
        card.pattern.toLowerCase().includes(q) ||
        card.category.toLowerCase().includes(q) ||
        card.tags.some(t => t.toLowerCase().includes(q));
      const matchesCat = filterCategory === 'All' || card.category === filterCategory;
      const matchesDiff = filterDifficulty === 'All' || card.difficulty === filterDifficulty;
      return matchesSearch && matchesCat && matchesDiff;
    });
  }, [searchTerm, filterCategory, filterDifficulty]);

  const selectedIndex = selectedCard ? filteredCards.findIndex(c => c.id === selectedCard.id) : -1;

  function openCard(card: FlashCard) {
    if (selectedCard?.id === card.id) {
      setIsFlipped(f => !f);
    } else {
      setSelectedCard(card);
      setIsFlipped(false);
    }
  }

  function closeCard() {
    setSelectedCard(null);
    setIsFlipped(false);
  }

  function goNext() {
    if (selectedIndex < filteredCards.length - 1) {
      setSelectedCard(filteredCards[selectedIndex + 1]);
      setIsFlipped(false);
    }
  }

  function goPrev() {
    if (selectedIndex > 0) {
      setSelectedCard(filteredCards[selectedIndex - 1]);
      setIsFlipped(false);
    }
  }

  function handleCategoryChange(cat: Category | 'All') {
    setFilterCategory(cat);
    setSidebarOpen(false);
  }

  const stats = getStats(FLASHCARD_DATA.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex overflow-x-hidden">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-60 bg-black/30 backdrop-blur border-r border-white/10 z-30
        transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <CategorySidebar
          activeCategory={filterCategory}
          onCategoryChange={handleCategoryChange}
          allCards={FLASHCARD_DATA}
          progress={progress}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-60 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            {/* Title + hamburger */}
            <div className="flex items-start gap-3">
              <button
                className="md:hidden mt-1 p-2 rounded-xl bg-white/10 border border-white/20 text-white flex-shrink-0"
                onClick={() => setSidebarOpen(o => !o)}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div>
                <h1 className="text-2xl md:text-4xl font-black text-white mb-1 leading-tight">
                  LeetCode 75{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Flashcards
                  </span>
                </h1>
                <p className="text-gray-400 text-xs md:text-sm">
                  {filterCategory === 'All' ? 'All patterns' : filterCategory} ·{' '}
                  <span className="text-purple-300">{filteredCards.length} problems</span>
                </p>
              </div>
            </div>
            {/* Progress tracker */}
            <div className="w-full md:w-72 md:flex-shrink-0">
              <ProgressTracker stats={stats} onReset={resetProgress} />
            </div>
          </div>

          {/* Search & filters */}
          <SearchFilter
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            filterDifficulty={filterDifficulty}
            onDifficultyChange={setFilterDifficulty}
            resultCount={filteredCards.length}
            totalCount={FLASHCARD_DATA.length}
          />

          {/* Card grid */}
          {filteredCards.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-lg">No problems match your search.</p>
              <button
                onClick={() => { setSearchTerm(''); setFilterCategory('All'); setFilterDifficulty('All'); }}
                className="mt-4 text-purple-400 hover:text-purple-300 text-sm underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filteredCards.map(card => (
                <CardThumbnail
                  key={card.id}
                  card={card}
                  onClick={() => openCard(card)}
                  progressStatus={progress[card.id] ?? 'unseen'}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <CardModal
          card={selectedCard}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(f => !f)}
          onClose={closeCard}
          progressStatus={progress[selectedCard.id] ?? 'unseen'}
          onStatusChange={status => setCardStatus(selectedCard.id, status)}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filteredCards.length - 1}
        />
      )}
    </div>
  );
}
