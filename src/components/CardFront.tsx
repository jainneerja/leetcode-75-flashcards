import React from 'react';
import type { FlashCard } from '../types/card';
import VizRenderer from './VizRenderer';

const DIFFICULTY_STYLES = {
  Easy: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Hard: 'bg-red-100 text-red-800',
};

interface Props {
  card: FlashCard;
}

export default function CardFront({ card }: Props) {
  return (
    <div className="text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-mono text-gray-400">#{card.leetcodeNumber}</span>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
              {card.category}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{card.title}</h2>
          <p className="text-purple-600 font-semibold text-sm mt-0.5">Pattern: {card.pattern}</p>
        </div>
        <span className={`text-sm font-bold px-3 py-1.5 rounded-full ml-4 flex-shrink-0 ${DIFFICULTY_STYLES[card.difficulty]}`}>
          {card.difficulty}
        </span>
      </div>

      {/* Real-world scenario */}
      <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold text-purple-700">Real-world: </span>
          {card.realWorldScenario}
        </p>
      </div>

      {/* Visualization */}
      <div className="mb-5">
        <VizRenderer card={card} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {card.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm italic">Click to reveal the solution →</p>
    </div>
  );
}
