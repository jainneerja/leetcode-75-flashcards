import React from 'react';
import type { FlashCard, ProgressStatus } from '../types/card';

const DIFFICULTY_STYLES = {
  Easy: 'bg-green-500/20 text-green-400 border-green-500/40',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
  Hard: 'bg-red-500/20 text-red-400 border-red-500/40',
};

const STATUS_ICONS: Record<ProgressStatus, string> = {
  known: '✅',
  review: '🔄',
  unseen: '⬜',
};

interface Props {
  card: FlashCard;
  onClick: () => void;
  progressStatus: ProgressStatus;
}

export default function CardThumbnail({ card, onClick, progressStatus }: Props) {
  return (
    <div
      onClick={onClick}
      className={`bg-white/10 backdrop-blur-lg rounded-xl p-5 cursor-pointer border border-white/20 transition-all duration-200 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl hover:shadow-purple-500/10 ${
        progressStatus === 'known' ? 'shadow-green-500/10 shadow-lg' : ''
      }`}
    >
      {/* Top row */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DIFFICULTY_STYLES[card.difficulty]}`}>
            {card.difficulty}
          </span>
          <span className="text-lg" title={`Status: ${progressStatus}`}>{STATUS_ICONS[progressStatus]}</span>
        </div>
        <span className="text-xs bg-white/10 text-purple-300 px-2.5 py-1 rounded-full border border-white/10">
          {card.category}
        </span>
      </div>

      {/* Title */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-xs text-gray-500 font-mono">#{card.leetcodeNumber}</span>
        <h3 className="text-lg font-bold text-white leading-tight">{card.title}</h3>
      </div>

      {/* Pattern */}
      <p className="text-purple-300 text-xs font-medium italic mb-2">{card.pattern}</p>

      {/* Scenario */}
      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3">{card.realWorldScenario}</p>

      {/* Tags */}
      {card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {card.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 font-mono">
          {card.complexity.time} · {card.complexity.space}
        </span>
        <span className="text-purple-400 text-xs font-medium">Study →</span>
      </div>
    </div>
  );
}
