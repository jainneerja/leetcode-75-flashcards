import React from 'react';

export default function RightSideViewViz() {
  return (
    <div className="space-y-4">
      <div className="flex gap-6 justify-center">
        <div>
          <p className="text-xs text-gray-400 mb-2 text-center">Full tree</p>
          <svg width="150" height="140" viewBox="0 0 150 140">
            <line x1="75" y1="25" x2="40" y2="65" stroke="#4b5563" strokeWidth="1.5"/>
            <line x1="75" y1="25" x2="110" y2="65" stroke="#4b5563" strokeWidth="1.5"/>
            <line x1="40" y1="65" x2="65" y2="105" stroke="#4b5563" strokeWidth="1.5"/>
            <line x1="110" y1="65" x2="130" y2="105" stroke="#4b5563" strokeWidth="1.5"/>
            <circle cx="75" cy="25" r="14" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1.5"/>
            <text x="75" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">1</text>
            <circle cx="40" cy="65" r="13" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
            <text x="40" y="70" textAnchor="middle" fill="white" fontSize="12">2</text>
            <circle cx="110" cy="65" r="13" fill="#f97316" stroke="#fb923c" strokeWidth="1.5"/>
            <text x="110" y="70" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">3</text>
            <circle cx="65" cy="105" r="13" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
            <text x="65" y="110" textAnchor="middle" fill="white" fontSize="12">5</text>
            <circle cx="130" cy="105" r="13" fill="#f97316" stroke="#fb923c" strokeWidth="1.5"/>
            <text x="130" y="110" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">4</text>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs text-orange-400 mb-2 text-center">👁 Right side view</p>
          <div className="space-y-2">
            {[1, 3, 4].map((n, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs text-gray-500">L{i+1}:</span>
                <div className="w-9 h-9 bg-orange-500/30 border-2 border-orange-400 rounded-lg flex items-center justify-center font-bold text-orange-300">
                  {n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-700/40 rounded-lg p-2 text-center">
        <span className="text-xs text-orange-400 font-mono font-bold">Output: [1, 3, 4]</span>
        <span className="text-xs text-gray-500 ml-2">— last node at each BFS level</span>
      </div>
    </div>
  );
}
