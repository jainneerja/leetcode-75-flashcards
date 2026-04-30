import React from 'react';

const minutes = [
  [[2,1,1],[1,1,0],[0,1,1]],
  [[2,2,1],[2,1,0],[0,1,1]],
  [[2,2,2],[2,2,0],[0,1,1]],
  [[2,2,2],[2,2,0],[0,2,1]],
  [[2,2,2],[2,2,0],[0,2,2]],
];

const labels = ['t=0 (initial)', 't=1', 't=2', 't=3', 't=4 (done)'];

export default function RottingOrangesViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">BFS spreads rot simultaneously from all rotten oranges</p>
      <div className="flex gap-3 justify-center overflow-x-auto">
        {minutes.map((grid, gi) => (
          <div key={gi} className="flex-shrink-0">
            <p className="text-xs text-center text-gray-400 mb-1">{labels[gi]}</p>
            <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(3, 28px)' }}>
              {grid.map((row, r) => row.map((cell, c) => (
                <div key={`${r}-${c}`} className={`w-7 h-7 rounded border flex items-center justify-center text-xs ${
                  cell === 2 ? 'bg-red-500/40 border-red-400 text-red-300'
                  : cell === 1 ? 'bg-orange-500/30 border-orange-400 text-orange-300'
                  : 'bg-slate-800 border-slate-700 text-slate-600'
                }`}>
                  {cell === 2 ? '🟥' : cell === 1 ? '🟠' : '·'}
                </div>
              )))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center bg-red-500/20 rounded-lg py-2 border border-red-500/30">
        <span className="text-red-400 font-bold">Answer: 4 minutes</span>
        <span className="text-gray-400 text-xs ml-2">(BFS level count)</span>
      </div>
    </div>
  );
}
