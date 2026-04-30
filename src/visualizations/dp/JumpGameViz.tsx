import React from 'react';

const nums = [2, 3, 1, 1, 4];

export default function JumpGameViz() {
  let maxReach = 0;
  const reaches = nums.map((n, i) => {
    if (i > maxReach) return -1;
    maxReach = Math.max(maxReach, i + n);
    return i + n;
  });

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Each tile = max jump distance from that position</p>
      <div className="flex gap-2 justify-center">
        {nums.map((n, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-lg border-2 flex flex-col items-center justify-center ${reaches[i] === -1 ? 'border-red-400 bg-red-500/20' : 'border-purple-400 bg-purple-500/20'}`}>
              <span className="text-xl font-bold text-white">{n}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1">reach={reaches[i] === -1 ? '✗' : reaches[i]}</span>
          </div>
        ))}
      </div>
      <div className="bg-slate-700/50 rounded-lg p-3 text-xs space-y-1">
        <p className="text-gray-300">Track <span className="text-yellow-400 font-bold">maxReach</span> as you go:</p>
        <p className="text-gray-400">i=0: maxReach=max(0, 0+2)=2</p>
        <p className="text-gray-400">i=1: maxReach=max(2, 1+3)=4</p>
        <p className="text-gray-400">i=2,3,4: all ≤ 4 → reachable ✓</p>
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">canJump = true ✓</span>
        <span className="text-gray-400 text-xs ml-2">(maxReach always ≥ current index)</span>
      </div>
    </div>
  );
}
