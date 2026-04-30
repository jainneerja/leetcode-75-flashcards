import React from 'react';

export default function WordBreakViz() {
  const s = 'leetcode';
  const wordDict = ['leet', 'code'];
  const dp = [true, false, false, false, true, false, false, false, true];

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Can "leetcode" be split into dict words?</p>
      <div className="flex justify-center gap-1">
        {wordDict.map(w => (
          <div key={w} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded text-blue-300 font-mono text-sm">{w}</div>
        ))}
      </div>
      <div className="flex gap-0.5 justify-center">
        {s.split('').map((ch, i) => (
          <div key={i} className={`w-9 h-9 rounded border-2 flex flex-col items-center justify-center ${i < 4 ? 'border-green-400 bg-green-500/20' : 'border-blue-400 bg-blue-500/20'}`}>
            <span className={`text-sm font-bold ${i < 4 ? 'text-green-300' : 'text-blue-300'}`}>{ch}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-0.5 justify-center text-center">
        {dp.map((v, i) => (
          <div key={i} className="w-9 text-center">
            <div className={`text-xs font-bold ${v ? 'text-yellow-400' : 'text-gray-600'}`}>{v ? 'T' : 'F'}</div>
            <div className="text-xs text-gray-500">{i}</div>
          </div>
        ))}
      </div>
      <div className="text-center bg-green-500/10 rounded-lg p-2 text-xs">
        <p className="text-green-400 font-bold">dp[4]=T ("leet"∈dict) · dp[8]=T ("code"∈dict)</p>
        <p className="text-gray-400 mt-1">Split: <span className="text-green-400 font-mono">[leet][code]</span></p>
      </div>
    </div>
  );
}
