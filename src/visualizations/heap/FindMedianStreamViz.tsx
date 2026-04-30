import React from 'react';

export default function FindMedianStreamViz() {
  const steps = [
    { num: 1, maxH: [1], minH: [], median: 1 },
    { num: 7, maxH: [1], minH: [7], median: 4 },
    { num: 3, maxH: [1, 3], minH: [7], median: 3 },
    { num: 4, maxH: [1, 3], minH: [4, 7], median: 3.5 },
    { num: 2, maxH: [1, 2, 3], minH: [4, 7], median: 3 },
  ];

  return (
    <div className="space-y-3">
      <div className="flex justify-center gap-4 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-blue-500"/><span className="text-blue-300">Max-Heap (lower half)</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green-500"/><span className="text-green-300">Min-Heap (upper half)</span></div>
      </div>
      <div className="space-y-1.5">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 text-xs">
            <span className="text-purple-400 w-14">add {s.num}:</span>
            <div className="flex gap-0.5">
              {s.maxH.map((n, j) => (
                <div key={j} className={`w-6 h-6 rounded border border-blue-500 bg-blue-500/20 flex items-center justify-center font-bold text-blue-300 ${j === s.maxH.length - 1 ? 'ring-1 ring-blue-400' : ''}`}>{n}</div>
              ))}
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex gap-0.5">
              {s.minH.map((n, j) => (
                <div key={j} className={`w-6 h-6 rounded border border-green-500 bg-green-500/20 flex items-center justify-center font-bold text-green-300 ${j === 0 ? 'ring-1 ring-green-400' : ''}`}>{n}</div>
              ))}
            </div>
            <span className="text-yellow-400 font-bold ml-auto">med={s.median}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-gray-500">Max-heap top ≤ Min-heap top always. Rebalance if sizes differ by &gt;1.</p>
    </div>
  );
}
