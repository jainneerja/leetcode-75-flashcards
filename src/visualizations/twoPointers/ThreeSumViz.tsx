import React from 'react';

const ThreeSumViz: React.FC<{ data?: any }> = () => {
  const nums = [-4, -1, -1, 0, 1, 2];
  const pivotIdx = 1;
  const leftIdx = 2;
  const rightIdx = 5;
  const tripletSum = nums[pivotIdx] + nums[leftIdx] + nums[rightIdx];

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <p className="text-slate-400 text-xs">Sorted array — pivot fixed, two pointers scanning</p>

      <div className="flex gap-2 items-center justify-center">
        {nums.map((n, i) => {
          const isPivot = i === pivotIdx;
          const isLeft = i === leftIdx;
          const isRight = i === rightIdx;

          let style = 'border-slate-600 bg-slate-800 text-slate-400';
          if (isPivot) style = 'border-yellow-400 bg-yellow-900/50 text-yellow-300';
          else if (isLeft) style = 'border-green-400 bg-green-900/50 text-green-300';
          else if (isRight) style = 'border-red-400 bg-red-900/50 text-red-300';

          let label = '';
          if (isPivot) label = 'i (fixed)';
          else if (isLeft) label = 'L';
          else if (isRight) label = 'R';

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-semibold text-slate-400 h-4">{label}</span>
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 font-bold text-lg shadow ${style}`}>
                {n}
              </div>
              <span className="text-[10px] text-slate-600">[{i}]</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm w-full justify-center">
        <span className="text-yellow-300 font-bold">{nums[pivotIdx]}</span>
        <span className="text-slate-500">+</span>
        <span className="text-green-300 font-bold">{nums[leftIdx]}</span>
        <span className="text-slate-500">+</span>
        <span className="text-red-300 font-bold">{nums[rightIdx]}</span>
        <span className="text-slate-500">=</span>
        <span className={`font-bold text-lg ${tripletSum === 0 ? 'text-green-400' : 'text-orange-400'}`}>
          {tripletSum}
        </span>
      </div>

      {tripletSum === 0 ? (
        <div className="bg-green-900/30 border border-green-500 rounded-xl px-4 py-2 text-sm text-center w-full">
          <span className="text-green-400 font-semibold">Triplet found! </span>
          <span className="text-slate-300">
            [{nums[pivotIdx]}, {nums[leftIdx]}, {nums[rightIdx]}] sums to 0 ✓
          </span>
        </div>
      ) : (
        <div className="bg-orange-900/20 border border-orange-500 rounded-xl px-4 py-2 text-sm text-center w-full">
          <span className="text-orange-400 font-semibold">Sum = {tripletSum} </span>
          <span className="text-slate-300">
            {tripletSum > 0 ? '→ move right pointer left' : '→ move left pointer right'}
          </span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 text-xs w-full">
        <div className="bg-slate-800 border border-yellow-600 rounded-lg px-2 py-1.5 text-center">
          <span className="text-yellow-400">Step 1:</span>
          <span className="text-slate-300 ml-1">Sort array</span>
        </div>
        <div className="bg-slate-800 border border-slate-600 rounded-lg px-2 py-1.5 text-center">
          <span className="text-slate-400">Skip duplicates at i, L, R</span>
        </div>
      </div>
    </div>
  );
};

export default ThreeSumViz;
