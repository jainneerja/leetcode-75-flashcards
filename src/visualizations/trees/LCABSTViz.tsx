import React from 'react';

export default function LCABSTViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Find LCA of p=2 and q=8 in BST</p>
      <div className="flex justify-center">
        <svg width="240" height="160" viewBox="0 0 240 160">
          {/* Edges */}
          <line x1="120" y1="30" x2="70" y2="70" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="120" y1="30" x2="170" y2="70" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="70" y1="70" x2="40" y2="110" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="70" y1="70" x2="100" y2="110" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="170" y1="70" x2="145" y2="110" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="170" y1="70" x2="200" y2="110" stroke="#6b7280" strokeWidth="1.5"/>
          {/* Root - LCA highlighted */}
          <circle cx="120" cy="30" r="18" fill="#facc15" stroke="#fbbf24" strokeWidth="2"/>
          <text x="120" y="35" textAnchor="middle" fill="#1a1a1a" fontWeight="bold" fontSize="13">6</text>
          {/* Left subtree */}
          <circle cx="70" cy="70" r="16" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2"/>
          <text x="70" y="75" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">2</text>
          <circle cx="40" cy="110" r="14" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="40" y="115" textAnchor="middle" fill="white" fontSize="12">0</text>
          <circle cx="100" cy="110" r="14" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="100" y="115" textAnchor="middle" fill="white" fontSize="12">4</text>
          {/* Right subtree */}
          <circle cx="170" cy="70" r="16" fill="#ef4444" stroke="#f87171" strokeWidth="2"/>
          <text x="170" y="75" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">8</text>
          <circle cx="145" cy="110" r="14" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="145" y="115" textAnchor="middle" fill="white" fontSize="12">7</text>
          <circle cx="200" cy="110" r="14" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="200" y="115" textAnchor="middle" fill="white" fontSize="12">9</text>
        </svg>
      </div>
      <div className="flex justify-center gap-4 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-blue-500"/><span className="text-blue-300">p=2</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"/><span className="text-red-300">q=8</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-400"/><span className="text-yellow-300">LCA=6 ✓</span></div>
      </div>
      <p className="text-center text-xs text-gray-400">2 &lt; 6 and 8 &gt; 6 → root 6 splits them → LCA</p>
    </div>
  );
}
