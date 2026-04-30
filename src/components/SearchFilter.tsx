import React from 'react';
import { Search } from 'lucide-react';
import type { Difficulty } from '../types/card';

interface SearchFilterProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  filterDifficulty: Difficulty | 'All';
  onDifficultyChange: (difficulty: Difficulty | 'All') => void;
  resultCount: number;
  totalCount: number;
}

const DIFFICULTIES: Array<Difficulty | 'All'> = ['All', 'Easy', 'Medium', 'Hard'];

const difficultyStyles: Record<string, string> = {
  All: 'bg-purple-600 text-white border-purple-500',
  Easy: 'bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 hover:bg-yellow-500/30',
  Hard: 'bg-red-500/20 text-red-400 border-red-500/50 hover:bg-red-500/30',
};

const activeStyles: Record<string, string> = {
  All: 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/30',
  Easy: 'bg-green-500 text-white border-green-400 shadow-lg shadow-green-500/30',
  Medium: 'bg-yellow-500 text-white border-yellow-400 shadow-lg shadow-yellow-500/30',
  Hard: 'bg-red-500 text-white border-red-400 shadow-lg shadow-red-500/30',
};

export default function SearchFilter({
  searchTerm,
  onSearch,
  filterDifficulty,
  onDifficultyChange,
  resultCount,
  totalCount,
}: SearchFilterProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search input */}
        <div className="flex-1 relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300 pointer-events-none"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search problems, patterns, tags..."
            className="w-full bg-white/10 border border-white/20 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => onSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Difficulty filters */}
        <div className="flex items-center gap-2">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => onDifficultyChange(d)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                filterDifficulty === d
                  ? activeStyles[d]
                  : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <div className="mt-3 text-xs text-gray-400">
        Showing{' '}
        <span className="text-purple-300 font-semibold">{resultCount}</span> of{' '}
        <span className="text-gray-300 font-semibold">{totalCount}</span> problems
      </div>
    </div>
  );
}
