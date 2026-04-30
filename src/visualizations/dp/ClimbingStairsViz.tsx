import React from 'react';

const dp = [1, 1, 2, 3, 5, 8];

export default function ClimbingStairsViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">n=5 stairs — take 1 or 2 steps at a time</p>
      <div className="flex items-end justify-center gap-1 h-20">
        {dp.slice(1).map((ways, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <span className="text-xs text-yellow-400 font-bold mb-1">{ways}</span>
            <div
              className="w-full bg-gradient-to-t from-purple-700 to-purple-400 rounded-t"
              style={{ height: `${(ways / 8) * 64}px` }}
            />
            <span className="text-xs text-gray-400 mt-1">n={i + 1}</span>
          </div>
        ))}
      </div>
      <div className="bg-slate-700/50 rounded-lg p-3 text-xs font-mono">
        <div className="flex gap-2 flex-wrap justify-center">
          {dp.slice(1).map((v, i) => (
            <div key={i} className="text-center">
              <div className="text-gray-500">dp[{i+1}]</div>
              <div className="text-yellow-400 font-bold">{v}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-2">dp[i] = dp[i-1] + dp[i-2] (Fibonacci!)</p>
      </div>
      <div className="text-center bg-yellow-500/20 rounded-lg py-2 border border-yellow-500/30">
        <span className="text-yellow-400 font-bold">Answer for n=5: 8 distinct ways</span>
      </div>
    </div>
  );
}
