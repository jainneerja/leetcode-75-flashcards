import React from 'react';

const LongestConsecutiveViz: React.FC<{ data?: any }> = () => {
  const nums = [100, 4, 200, 1, 3, 2];

  const numSet = new Set(nums);
  let longestStart = nums[0];
  let longestLen = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let cur = num;
      let len = 1;
      while (numSet.has(cur + 1)) { cur++; len++; }
      if (len > longestLen) { longestLen = len; longestStart = num; }
    }
  }

  const longestChain = Array.from({ length: longestLen }, (_, i) => longestStart + i);
  const isolatedNums = nums.filter(n => !longestChain.includes(n));

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="flex flex-wrap gap-2 justify-center">
        {nums.map((n, i) => (
          <div
            key={i}
            className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-slate-600 bg-slate-800 text-slate-300 font-bold text-sm shadow"
          >
            {n}
          </div>
        ))}
      </div>

      <div className="text-slate-500 text-sm">↓ put all in Set, find sequence starts</div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-slate-400 text-xs w-20">Isolated:</span>
          {isolatedNums.map((n, i) => (
            <div key={i} className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800 text-slate-400 font-bold text-sm">
              {n}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-green-900/20 border border-green-500 rounded-xl p-3">
          <span className="text-slate-400 text-xs mr-2">Longest chain:</span>
          {longestChain.map((n, i) => (
            <React.Fragment key={n}>
              <div className="w-11 h-11 flex items-center justify-center rounded-lg border-2 border-green-400 bg-green-800/50 text-green-300 font-bold text-sm shadow-md">
                {n}
              </div>
              {i < longestChain.length - 1 && (
                <span className="text-green-500 text-lg font-bold">→</span>
              )}
            </React.Fragment>
          ))}
          <div className="ml-3 bg-green-700 text-white font-bold text-sm px-3 py-1 rounded-full">
            Length: {longestLen}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-indigo-500 rounded-lg px-4 py-2 text-xs text-center text-slate-300">
        <span className="text-indigo-400 font-semibold">Key:</span> Only start counting from {longestStart}
        {' '}(since {longestStart - 1} is NOT in the Set)
      </div>
    </div>
  );
};

export default LongestConsecutiveViz;
