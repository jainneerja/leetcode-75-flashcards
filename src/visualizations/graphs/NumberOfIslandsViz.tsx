import React from 'react';

const grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']];
const islands = [
  [[0,0],[0,1],[1,0],[1,1]],
  [[2,2]],
  [[3,3],[3,4]],
];
const islandColors = ['bg-green-500/40 border-green-400 text-green-300', 'bg-blue-500/40 border-blue-400 text-blue-300', 'bg-yellow-500/40 border-yellow-400 text-yellow-300'];

function getIsland(r: number, c: number): number {
  for (let i = 0; i < islands.length; i++) {
    if (islands[i].some(([ir, ic]) => ir === r && ic === c)) return i;
  }
  return -1;
}

export default function NumberOfIslandsViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Count distinct land masses (1=land, 0=water)</p>
      <div className="flex justify-center">
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${grid[0].length}, 36px)` }}>
          {grid.map((row, r) => row.map((cell, c) => {
            const isl = cell === '1' ? getIsland(r, c) : -1;
            return (
              <div
                key={`${r}-${c}`}
                className={`w-9 h-9 rounded border-2 flex items-center justify-center font-bold text-sm ${
                  isl >= 0 ? islandColors[isl] : 'bg-blue-900/30 border-blue-900/50 text-blue-900'
                }`}
              >
                {cell === '1' ? '🏝' : '🌊'}
              </div>
            );
          }))}
        </div>
      </div>
      <div className="flex justify-center gap-3">
        {islands.map((_, i) => (
          <div key={i} className={`px-3 py-1 rounded border text-xs font-bold ${islandColors[i]}`}>
            Island {i + 1}
          </div>
        ))}
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">Answer: {islands.length} islands</span>
      </div>
    </div>
  );
}
