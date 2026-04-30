import React from 'react';
import type { FlashCard } from '../types/card';

interface Props {
  card: FlashCard;
}

export default function CardBack({ card }: Props) {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-5">Solution — {card.title}</h2>

      {/* Key Idea */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-5 mb-4">
        <h3 className="text-lg font-bold mb-2 text-yellow-300 flex items-center gap-2">
          <span>💡</span> Key Idea
        </h3>
        <p className="text-sm leading-relaxed text-gray-100">{card.keyIdea}</p>
      </div>

      {/* Approach */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-5 mb-4">
        <h3 className="text-lg font-bold mb-3 text-yellow-300 flex items-center gap-2">
          <span>🎯</span> Approach
        </h3>
        <div className="space-y-2.5">
          {card.approach.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 text-purple-900 flex items-center justify-center text-xs font-bold">
                {idx + 1}
              </span>
              <p className="text-sm text-gray-100 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Code */}
      {card.codeSnippet && (
        <div className="bg-white/10 backdrop-blur rounded-xl p-5 mb-4">
          <h3 className="text-lg font-bold mb-3 text-yellow-300 flex items-center gap-2">
            <span>💻</span> Code
          </h3>
          <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
            <code className="text-green-300 text-xs font-mono leading-relaxed whitespace-pre">
              {card.codeSnippet}
            </code>
          </pre>
        </div>
      )}

      {/* Complexity */}
      <div className="flex justify-center gap-4 mb-4">
        <div className="bg-white/20 rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-gray-300 mb-0.5">Time</p>
          <p className="font-bold text-yellow-300 font-mono">{card.complexity.time}</p>
        </div>
        <div className="bg-white/20 rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-gray-300 mb-0.5">Space</p>
          <p className="font-bold text-blue-300 font-mono">{card.complexity.space}</p>
        </div>
      </div>

      {/* Hints */}
      {card.hints && card.hints.length > 0 && (
        <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-3">
          <h3 className="text-sm font-bold mb-2 text-purple-200 flex items-center gap-2">
            <span>💭</span> Hints
          </h3>
          <ul className="space-y-1">
            {card.hints.map((h, i) => (
              <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">•</span>{h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {card.commonMistakes && card.commonMistakes.length > 0 && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <h3 className="text-sm font-bold mb-2 text-red-300 flex items-center gap-2">
            <span>⚠️</span> Common Mistakes
          </h3>
          <ul className="space-y-1">
            {card.commonMistakes.map((m, i) => (
              <li key={i} className="text-xs text-red-200 flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>{m}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
