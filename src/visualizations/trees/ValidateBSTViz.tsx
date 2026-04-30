import React from 'react';

export default function ValidateBSTViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Is this a valid BST? (bounds check)</p>
      <div className="flex justify-center">
        <svg width="200" height="140" viewBox="0 0 200 140">
          <line x1="100" y1="25" x2="55" y2="65" stroke="#4b5563" strokeWidth="1.5"/>
          <line x1="100" y1="25" x2="150" y2="65" stroke="#ef4444" strokeWidth="2"/>
          <line x1="150" y1="65" x2="125" y2="105" stroke="#ef4444" strokeWidth="2"/>
          <line x1="150" y1="65" x2="175" y2="105" stroke="#4b5563" strokeWidth="1.5"/>
          {/* Root */}
          <circle cx="100" cy="25" r="14" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1.5"/>
          <text x="100" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">5</text>
          {/* Left (valid) */}
          <circle cx="55" cy="65" r="13" fill="#16a34a" stroke="#4ade80" strokeWidth="1.5"/>
          <text x="55" y="70" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">1</text>
          {/* Right (invalid) */}
          <circle cx="150" cy="65" r="13" fill="#ef4444" stroke="#f87171" strokeWidth="2"/>
          <text x="150" y="70" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">4</text>
          <circle cx="125" cy="105" r="13" fill="#ef4444" stroke="#f87171" strokeWidth="2"/>
          <text x="125" y="110" textAnchor="middle" fill="white" fontSize="12">3</text>
          <circle cx="175" cy="105" r="13" fill="#4b5563" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="175" y="110" textAnchor="middle" fill="white" fontSize="12">6</text>
          {/* X mark */}
          <text x="165" y="58" fill="#ef4444" fontSize="16" fontWeight="bold">✗</text>
        </svg>
      </div>
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-xs space-y-1">
        <p className="text-red-400 font-bold">❌ INVALID BST</p>
        <p className="text-gray-400">Right child of root must be &gt; 5, but node 4 &lt; 5</p>
        <p className="text-gray-500 font-mono">bounds at node 4: must be in (5, ∞) — VIOLATION</p>
      </div>
    </div>
  );
}
