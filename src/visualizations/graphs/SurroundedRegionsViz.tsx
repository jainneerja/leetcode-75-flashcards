import React from 'react';

const board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']];
// Middle O's (surrounded) at [1,1],[1,2],[2,2] → get captured
// Border-connected O at [3,1] → stays
const captured = [[1,1],[1,2],[2,2]];
const safe = [[3,1]];

function isCaptured(r: number, c: number) { return captured.some(([ir,ic]) => ir===r && ic===c); }
function isSafe(r: number, c: number) { return safe.some(([ir,ic]) => ir===r && ic===c); }

export default function SurroundedRegionsViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Capture surrounded 'O' regions (flip to 'X')</p>
      <div className="flex gap-6 justify-center">
        <div>
          <p className="text-xs text-gray-400 mb-1 text-center">Before</p>
          <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(4, 36px)' }}>
            {board.map((row, r) => row.map((cell, c) => (
              <div key={`${r}-${c}`} className={`w-9 h-9 rounded border-2 flex items-center justify-center font-bold ${cell === 'O' ? (isCaptured(r,c) ? 'border-red-400 bg-red-500/20 text-red-300' : 'border-green-400 bg-green-500/20 text-green-300') : 'border-gray-600 bg-gray-700/50 text-gray-400'}`}>
                {cell}
              </div>
            )))}
          </div>
        </div>
        <div className="flex items-center text-2xl text-purple-400">→</div>
        <div>
          <p className="text-xs text-gray-400 mb-1 text-center">After</p>
          <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(4, 36px)' }}>
            {board.map((row, r) => row.map((cell, c) => {
              const flip = cell === 'O' && isCaptured(r, c);
              const stay = cell === 'O' && isSafe(r, c);
              return (
                <div key={`${r}-${c}`} className={`w-9 h-9 rounded border-2 flex items-center justify-center font-bold ${flip ? 'border-gray-600 bg-gray-700/50 text-gray-400' : stay ? 'border-green-400 bg-green-500/20 text-green-300' : 'border-gray-600 bg-gray-700/50 text-gray-400'}`}>
                  {flip ? 'X' : cell}
                </div>
              );
            }))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-500/60"/>Captured (→X)</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green-500/60"/>Safe (border-connected)</div>
      </div>
    </div>
  );
}
