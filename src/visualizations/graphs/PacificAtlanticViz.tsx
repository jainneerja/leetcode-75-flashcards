import React from 'react';

// 5x5 grid — manually mark pacific, atlantic, and both
const pacCells = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[2,0],[3,0],[4,0],[1,2],[2,2],[3,1],[4,1],[4,2],[4,3],[4,4]];
const atlCells = [[0,4],[1,4],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[3,3],[2,3],[1,3],[0,3]];
const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];

function inSet(arr: number[][], r: number, c: number) {
  return arr.some(([ar, ac]) => ar === r && ac === c);
}

export default function PacificAtlanticViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Cells reachable by water flow to BOTH oceans</p>
      <div className="flex justify-center">
        <div>
          <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(5, 34px)` }}>
            {heights.map((row, r) => row.map((h, c) => {
              const pac = inSet(pacCells, r, c);
              const atl = inSet(atlCells, r, c);
              const both = pac && atl;
              return (
                <div
                  key={`${r}-${c}`}
                  className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold border ${
                    both ? 'bg-purple-500/60 border-purple-400 text-white'
                    : pac ? 'bg-blue-500/30 border-blue-500/50 text-blue-300'
                    : atl ? 'bg-orange-500/30 border-orange-500/50 text-orange-300'
                    : 'bg-white/5 border-white/10 text-gray-500'
                  }`}
                >
                  {h}
                </div>
              );
            }))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-blue-500/60"/>Pacific</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-orange-500/60"/>Atlantic</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-purple-500/60"/>Both ✓</div>
      </div>
    </div>
  );
}
