import React from 'react';

export default function RemoveNthFromEndViz() {
  const nodes = [1, 2, 3, 4, 5];
  const n = 2;
  const removeIdx = nodes.length - n; // index 3 (value 4)
  const fastStart = n + 1; // fast starts n+1 ahead

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Remove {n}nd node from end (node 4)</p>
      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-400 mb-1 text-center">Step 1: Move fast {n+1} steps ahead</p>
          <div className="flex items-end justify-center gap-2">
            {nodes.map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                {i === 0 && <span className="text-yellow-400 text-xs mb-1">slow</span>}
                {i === fastStart && <span className="text-blue-400 text-xs mb-1">fast</span>}
                {i !== 0 && i !== fastStart && <span className="text-xs mb-1"> </span>}
                <div className={`w-10 h-10 rounded border-2 flex items-center justify-center font-bold ${i === removeIdx ? 'border-red-400 bg-red-500/20 text-red-300' : 'border-purple-400 bg-purple-500/20 text-purple-200'}`}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1 text-center">Step 2: Advance both until fast = null → slow.next is target</p>
          <div className="flex items-end justify-center gap-2">
            {nodes.map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                {i === removeIdx - 1 && <span className="text-yellow-400 text-xs mb-1">slow</span>}
                {i === nodes.length - 1 && <span className="text-blue-400 text-xs mb-1">fast</span>}
                {i !== removeIdx - 1 && i !== nodes.length - 1 && <span className="text-xs mb-1"> </span>}
                <div className={`w-10 h-10 rounded border-2 flex items-center justify-center font-bold ${i === removeIdx ? 'border-red-400 bg-red-500/30 text-red-300 line-through' : 'border-purple-400 bg-purple-500/20 text-purple-200'}`}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30 text-sm text-green-400">
        Result: [1, 2, 3, 5] — node 4 removed ✓
      </div>
    </div>
  );
}
