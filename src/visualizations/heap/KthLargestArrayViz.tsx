import React from 'react';

export default function KthLargestArrayViz() {
  const nums = [3, 2, 1, 5, 6, 4];
  const k = 2;
  const heapStates = [
    { nums: [3, 2], heap: [2, 3], note: 'Init heap with first k=2' },
    { nums: [1], heap: [2, 3], note: '1 < 2 (heap top) → skip' },
    { nums: [5], heap: [3, 5], note: '5 > 2 → push, pop min → heap=[3,5]' },
    { nums: [6], heap: [5, 6], note: '6 > 3 → push, pop min → heap=[5,6]' },
    { nums: [4], heap: [5, 6], note: '4 < 5 (heap top) → skip' },
  ];

  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Find 2nd largest in [{nums.join(', ')}]</p>
      <div className="space-y-1.5">
        {heapStates.map((s, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 text-xs">
            <span className="text-gray-400 w-4">{i + 1}.</span>
            <span className="text-gray-300">{s.note}</span>
            <div className="flex gap-1 ml-auto">
              {s.heap.map((n, j) => (
                <div key={j} className={`w-7 h-7 rounded border flex items-center justify-center font-bold ${j === 0 ? 'border-yellow-400 bg-yellow-500/20 text-yellow-300' : 'border-purple-400 bg-purple-500/20 text-purple-200'}`}>{n}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center bg-yellow-500/20 rounded-lg py-2 border border-yellow-500/30">
        <span className="text-yellow-400 font-bold">Answer: heap top = 5</span>
        <span className="text-gray-400 text-xs ml-2">(2nd largest)</span>
      </div>
    </div>
  );
}
