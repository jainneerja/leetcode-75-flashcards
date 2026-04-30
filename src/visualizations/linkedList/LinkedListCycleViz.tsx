import React from 'react';

export default function LinkedListCycleViz() {
  const nodes = [3, 2, 0, -4];
  const cycleBack = 1; // -4 points back to index 1 (value 2)

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Node -4 points back to node 2 (index {cycleBack}) — a cycle!</p>
      <div className="flex items-center justify-center gap-2">
        {nodes.map((n, i) => (
          <React.Fragment key={i}>
            <div className={`w-12 h-12 rounded-full border-2 flex flex-col items-center justify-center ${i === cycleBack ? 'border-yellow-400 bg-yellow-500/20' : 'border-purple-400 bg-purple-500/20'}`}>
              <span className="text-white font-bold text-sm">{n}</span>
              <span className="text-gray-500 text-xs">[{i}]</span>
            </div>
            {i < nodes.length - 1 && <span className="text-gray-400 text-xl">→</span>}
          </React.Fragment>
        ))}
        <svg width="60" height="40" className="ml-1">
          <path d="M 0 20 Q 30 5 55 20" stroke="#facc15" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#facc15" />
            </marker>
          </defs>
        </svg>
      </div>
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2 bg-blue-500/20 rounded-lg px-3 py-2">
          <span className="text-2xl">🐢</span>
          <div className="text-xs">
            <p className="text-blue-300 font-bold">Slow (tortoise)</p>
            <p className="text-gray-400">moves 1 step</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-red-500/20 rounded-lg px-3 py-2">
          <span className="text-2xl">🐇</span>
          <div className="text-xs">
            <p className="text-red-300 font-bold">Fast (hare)</p>
            <p className="text-gray-400">moves 2 steps</p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-green-400 font-semibold">If they ever meet → cycle detected!</p>
    </div>
  );
}
