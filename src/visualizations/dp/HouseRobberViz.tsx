import React from 'react';

const houses = [2, 7, 9, 3, 1];
const robbed = [true, false, true, false, true]; // rob 0+2+4 = 12

export default function HouseRobberViz() {
  const dp = [2, 7, 11, 11, 12];
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Max loot without robbing adjacent houses</p>
      <div className="flex justify-center gap-2">
        {houses.map((h, i) => (
          <div key={i} className="flex flex-col items-center">
            {robbed[i] && <span className="text-green-400 text-xs mb-1">✓ rob</span>}
            {!robbed[i] && <span className="text-xs mb-1 text-gray-600">skip</span>}
            <div className={`w-12 h-16 rounded-lg border-2 flex flex-col items-center justify-center ${robbed[i] ? 'border-green-400 bg-green-500/20' : 'border-gray-600 bg-gray-700/30'}`}>
              <span className="text-xl">🏠</span>
              <span className={`text-xs font-bold ${robbed[i] ? 'text-green-300' : 'text-gray-400'}`}>${h}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1">dp={dp[i]}</span>
          </div>
        ))}
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">Max loot = $2 + $9 + $1 = $12</span>
      </div>
    </div>
  );
}
