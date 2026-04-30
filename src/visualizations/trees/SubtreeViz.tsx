import React from 'react';

export default function SubtreeViz() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 justify-center items-start">
        <div>
          <p className="text-xs text-gray-400 mb-1 text-center">Main Tree</p>
          <svg width="140" height="130">
            <line x1="70" y1="20" x2="35" y2="55" stroke="#4b5563" strokeWidth="1.5"/>
            <line x1="70" y1="20" x2="110" y2="55" stroke="#4b5563" strokeWidth="1.5"/>
            <line x1="35" y1="55" x2="15" y2="90" stroke="#4ade80" strokeWidth="2"/>
            <line x1="35" y1="55" x2="55" y2="90" stroke="#4ade80" strokeWidth="2"/>
            <circle cx="70" cy="20" r="13" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
            <text x="70" y="25" textAnchor="middle" fill="white" fontSize="12">3</text>
            <circle cx="35" cy="55" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2.5"/>
            <text x="35" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">4</text>
            <circle cx="110" cy="55" r="13" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
            <text x="110" y="60" textAnchor="middle" fill="white" fontSize="12">5</text>
            <circle cx="15" cy="90" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2"/>
            <text x="15" y="95" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">1</text>
            <circle cx="55" cy="90" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2"/>
            <text x="55" y="95" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">2</text>
          </svg>
        </div>
        <div className="flex items-center pt-10 text-2xl text-purple-400">≡</div>
        <div>
          <p className="text-xs text-green-400 mb-1 text-center font-bold">subRoot ✓</p>
          <svg width="90" height="80">
            <line x1="45" y1="20" x2="20" y2="55" stroke="#4ade80" strokeWidth="2"/>
            <line x1="45" y1="20" x2="70" y2="55" stroke="#4ade80" strokeWidth="2"/>
            <circle cx="45" cy="20" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2.5"/>
            <text x="45" y="25" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">4</text>
            <circle cx="20" cy="55" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2"/>
            <text x="20" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">1</text>
            <circle cx="70" cy="55" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="2"/>
            <text x="70" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">2</text>
          </svg>
        </div>
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">isSubtree = true ✓</span>
        <span className="text-gray-400 text-xs ml-2">subtree rooted at 4 matches exactly</span>
      </div>
    </div>
  );
}
