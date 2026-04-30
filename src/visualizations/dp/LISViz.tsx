import React from 'react';

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const dpVals = [1, 1, 1, 2, 2, 3, 4, 4];
const lisIndices = [2, 4, 5, 7]; // values: 2,3,7,18

export default function LISViz() {
  const maxH = Math.max(...nums);
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Find longest strictly increasing subsequence</p>
      <div className="flex items-end justify-center gap-1 h-24">
        {nums.map((n, i) => {
          const inLIS = lisIndices.includes(i);
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              <div
                className={`w-full rounded-t-sm ${inLIS ? 'bg-green-500' : 'bg-purple-400/40'}`}
                style={{ height: `${(n / maxH) * 80}px` }}
              />
              <span className={`text-xs mt-0.5 font-bold ${inLIS ? 'text-green-400' : 'text-gray-500'}`}>{n}</span>
              <span className="text-xs text-purple-400">{dpVals[i]}</span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-1 flex-wrap">
        {lisIndices.map((idx, i) => (
          <React.Fragment key={idx}>
            <div className="w-9 h-9 bg-green-500/30 border-2 border-green-400 rounded flex items-center justify-center font-bold text-green-300 text-sm">{nums[idx]}</div>
            {i < lisIndices.length - 1 && <span className="text-green-400">→</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">LIS = [2, 3, 7, 18], length = 4</span>
      </div>
    </div>
  );
}
