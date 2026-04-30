import React from 'react';

const grid = [[0,0,1,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,0,0,1,1]];
const largestIsland = [[0,2],[1,1],[1,2],[2,1]]; // area 4

function inLargest(r: number, c: number) {
  return largestIsland.some(([ir, ic]) => ir === r && ic === c);
}

export default function MaxAreaIslandViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Find the largest connected land area</p>
      <div className="flex justify-center">
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${grid[0].length}, 36px)` }}>
          {grid.map((row, r) => row.map((cell, c) => {
            const isLargest = cell === 1 && inLargest(r, c);
            const isOther = cell === 1 && !isLargest;
            return (
              <div
                key={`${r}-${c}`}
                className={`w-9 h-9 rounded border-2 flex items-center justify-center text-sm ${
                  isLargest ? 'bg-green-500/50 border-green-400 text-green-300 font-bold'
                  : isOther ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                  : 'bg-slate-800/50 border-slate-700 text-slate-600'
                }`}
              >
                {cell === 1 ? (isLargest ? '🏝' : '●') : '·'}
              </div>
            );
          }))}
        </div>
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">Max Area = {largestIsland.length}</span>
        <span className="text-gray-400 text-xs ml-2">(green island — DFS count all connected 1s)</span>
      </div>
    </div>
  );
}
