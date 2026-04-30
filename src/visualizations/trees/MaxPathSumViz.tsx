import React from 'react';

export default function MaxPathSumViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Max path sum through any nodes (can pass through root)</p>
      <div className="flex justify-center">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <line x1="110" y1="25" x2="60" y2="70" stroke="#4b5563" strokeWidth="1.5"/>
          <line x1="110" y1="25" x2="165" y2="70" stroke="#4ade80" strokeWidth="2.5"/>
          <line x1="165" y1="70" x2="130" y2="115" stroke="#4ade80" strokeWidth="2.5"/>
          <line x1="165" y1="70" x2="195" y2="115" stroke="#4ade80" strokeWidth="2.5"/>
          <circle cx="110" cy="25" r="14" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="110" y="30" textAnchor="middle" fill="#9ca3af" fontWeight="bold" fontSize="13">-10</text>
          <circle cx="60" cy="70" r="13" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="60" y="75" textAnchor="middle" fill="white" fontSize="12">9</text>
          <circle cx="165" cy="70" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2.5"/>
          <text x="165" y="75" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">20</text>
          <circle cx="130" cy="115" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2.5"/>
          <text x="130" y="120" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">15</text>
          <circle cx="195" cy="115" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2.5"/>
          <text x="195" y="120" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">7</text>
        </svg>
      </div>
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-xs space-y-1">
        <p className="text-green-400 font-bold">Best path: 15 → 20 → 7</p>
        <p className="text-gray-400">At node 20: left_gain=15, right_gain=7, path=15+20+7=<span className="text-yellow-400 font-bold">42</span></p>
        <p className="text-gray-500">Each node contributes: val + max(0, left_gain) + max(0, right_gain)</p>
      </div>
    </div>
  );
}
