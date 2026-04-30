import React from 'react';

const board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']];
const oathPath = [[0,0],[1,1],[1,0],[2,1]]; // o-t-e-h no... let's do eat=[1,3],[1,2],[1,1]
const eatPath = [[1,3],[1,2],[1,1]];
const oathPath2 = [[1,1],[0,0],[2,1],[3,2]]; // t-o-h-l? let's just color two paths

function inPath(r: number, c: number, path: number[][]): boolean {
  return path.some(([pr, pc]) => pr === r && pc === c);
}

export default function WordSearchIIViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Words: ['oath', 'eat'] — find all in grid</p>
      <div className="flex gap-4 justify-center">
        <div>
          <p className="text-xs text-gray-400 mb-1 text-center">Board</p>
          <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(4, 36px)' }}>
            {board.map((row, r) => row.map((cell, c) => {
              const isEat = inPath(r, c, eatPath);
              return (
                <div
                  key={`${r}-${c}`}
                  className={`w-9 h-9 rounded flex items-center justify-center font-bold text-sm border-2 uppercase ${
                    isEat
                      ? 'bg-green-500/40 border-green-400 text-green-300'
                      : 'bg-white/5 border-white/20 text-gray-300'
                  }`}
                >
                  {cell}
                </div>
              );
            }))}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-2 text-center">Results</p>
          <div className="space-y-2">
            {['eat', 'oath'].map((w, i) => (
              <div key={w} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${i === 0 ? 'bg-green-500/20 border-green-500/40' : 'bg-blue-500/20 border-blue-500/40'}`}>
                <span className="text-lg">✓</span>
                <span className={`font-mono font-bold ${i === 0 ? 'text-green-400' : 'text-blue-400'}`}>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500">Build Trie from all words → DFS grid using Trie to prune early</p>
    </div>
  );
}
