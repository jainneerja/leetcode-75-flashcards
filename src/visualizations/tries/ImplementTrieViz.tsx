import React from 'react';

export default function ImplementTrieViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Trie for: app, apple, apply, apt, bat</p>
      <div className="flex justify-center">
        <svg width="280" height="180" viewBox="0 0 280 180">
          {/* Root */}
          <circle cx="140" cy="20" r="12" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1.5"/>
          <text x="140" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">root</text>
          {/* a branch */}
          <line x1="140" y1="32" x2="80" y2="60" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="80" cy="70" r="12" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="1.5"/>
          <text x="80" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">a</text>
          {/* ap */}
          <line x1="80" y1="82" x2="80" y2="100" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="80" cy="110" r="12" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5"/>
          <text x="80" y="115" textAnchor="middle" fill="white" fontSize="11">p</text>
          {/* app */}
          <line x1="80" y1="122" x2="50" y2="140" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="50" cy="150" r="12" fill="#1e3a8a" stroke="#93c5fd" strokeWidth="2"/>
          <text x="50" y="155" textAnchor="middle" fill="white" fontSize="11">p*</text>
          {/* apt */}
          <line x1="80" y1="122" x2="110" y2="140" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="110" cy="150" r="12" fill="#1e3a8a" stroke="#6b7280" strokeWidth="1.5"/>
          <text x="110" y="155" textAnchor="middle" fill="white" fontSize="11">t*</text>
          {/* apple/apply children of app */}
          <line x1="50" y1="162" x2="30" y2="175" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="30" cy="175" r="8" fill="#1e3a8a" stroke="#86efac" strokeWidth="2"/>
          <text x="30" y="179" textAnchor="middle" fill="white" fontSize="8">le*</text>
          <line x1="50" y1="162" x2="68" y2="175" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="68" cy="175" r="8" fill="#1e3a8a" stroke="#86efac" strokeWidth="2"/>
          <text x="68" y="179" textAnchor="middle" fill="white" fontSize="8">ly*</text>
          {/* b branch */}
          <line x1="140" y1="32" x2="210" y2="60" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="210" cy="70" r="12" fill="#065f46" stroke="#34d399" strokeWidth="1.5"/>
          <text x="210" y="75" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">b</text>
          <line x1="210" y1="82" x2="210" y2="100" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="210" cy="110" r="12" fill="#064e3b" stroke="#34d399" strokeWidth="1.5"/>
          <text x="210" y="115" textAnchor="middle" fill="white" fontSize="11">a</text>
          <line x1="210" y1="122" x2="210" y2="140" stroke="#6b7280" strokeWidth="1.5"/>
          <circle cx="210" cy="150" r="12" fill="#064e3b" stroke="#86efac" strokeWidth="2"/>
          <text x="210" y="155" textAnchor="middle" fill="white" fontSize="11">t*</text>
        </svg>
      </div>
      <p className="text-center text-xs text-gray-400">* = isEnd node (complete word). O(m) per insert/search/startsWith</p>
    </div>
  );
}
