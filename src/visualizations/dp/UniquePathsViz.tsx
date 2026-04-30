import React from 'react';

const grid = [[1,1,1],[1,2,3],[1,3,6]];

export default function UniquePathsViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">3×3 grid — robot moves only right or down</p>
      <div className="flex justify-center">
        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(3, 56px)' }}>
          {grid.map((row, r) => row.map((val, c) => {
            const isStart = r === 0 && c === 0;
            const isEnd = r === 2 && c === 2;
            return (
              <div
                key={`${r}-${c}`}
                className={`w-14 h-14 rounded-lg border-2 flex flex-col items-center justify-center ${
                  isStart ? 'border-blue-400 bg-blue-500/30'
                  : isEnd ? 'border-green-400 bg-green-500/30 ring-2 ring-green-400'
                  : 'border-purple-500/50 bg-purple-500/10'
                }`}
              >
                {isStart && <span className="text-lg">🤖</span>}
                {isEnd && <span className="text-lg">🏁</span>}
                {!isStart && !isEnd && <span className="text-white font-bold text-xl">{val}</span>}
                {(isStart || isEnd) && <span className="text-xs text-gray-300 font-bold">{val}</span>}
              </div>
            );
          }))}
        </div>
      </div>
      <p className="text-center text-xs text-gray-400">Each cell = top + left (number of paths reaching it)</p>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">Unique paths for 3×3 = 6</span>
        <span className="text-gray-400 text-xs ml-2">(bottom-right cell value)</span>
      </div>
    </div>
  );
}
