import React from 'react';

export default function LastStoneWeightViz() {
  const rounds = [
    { stones: [2, 7, 4, 1, 8, 1], smash: '8 vs 7 → 1 left', result: [2, 4, 1, 1, 1] },
    { stones: [2, 4, 1, 1, 1], smash: '4 vs 2 → 2 left', result: [2, 1, 1, 1] },
    { stones: [2, 1, 1, 1], smash: '2 vs 1 → 1 left', result: [1, 1, 1] },
    { stones: [1, 1, 1], smash: '1 vs 1 → both gone', result: [1] },
    { stones: [1], smash: 'Only 1 stone left!', result: [] },
  ];

  return (
    <div className="space-y-2">
      <p className="text-center text-sm text-purple-200">Smash the two heaviest each round</p>
      {rounds.map((r, i) => (
        <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5">
          <div className="flex gap-1">
            {r.stones.map((s, j) => (
              <div key={j} className={`w-7 h-7 rounded border flex items-center justify-center text-xs font-bold ${j < 2 && i < rounds.length - 1 ? 'border-red-400 bg-red-500/20 text-red-300' : 'border-gray-600 bg-gray-700/50 text-gray-300'}`}>{s}</div>
            ))}
          </div>
          <span className="text-xs text-yellow-400 ml-2 flex-1">{r.smash}</span>
        </div>
      ))}
      <div className="text-center bg-yellow-500/20 rounded-lg py-2 border border-yellow-500/30">
        <span className="text-yellow-400 font-bold">Last stone weight = 1</span>
      </div>
    </div>
  );
}
