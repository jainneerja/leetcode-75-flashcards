import React from 'react';

const levels = [[3], [9, 20], [15, 7]];

export default function LevelOrderViz() {
  const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500'];
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {levels.map((level, li) => (
          <div key={li} className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-14 text-right">Level {li + 1}:</span>
            <div className="flex gap-2">
              {level.map((n, i) => (
                <div key={i} className={`w-10 h-10 ${colors[li]} rounded-lg flex items-center justify-center font-bold text-white shadow-lg`}>
                  {n}
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-500">Queue: [{level.join(', ')}]</span>
          </div>
        ))}
      </div>
      <div className="bg-slate-700/40 rounded-lg p-3">
        <p className="text-xs text-gray-400 font-semibold mb-1">Output (level by level):</p>
        <p className="text-sm font-mono text-green-400">[[3], [9, 20], [15, 7]]</p>
      </div>
      <p className="text-center text-xs text-gray-500">BFS: process all nodes at current depth before moving to next level</p>
    </div>
  );
}
