import React from 'react';

interface Props { data: { [key: string]: any } }

const FindMinRotatedViz: React.FC<Props> = ({ data }) => {
  const nums = data?.nums ?? [3, 4, 5, 1, 2];
  const sortedNums = [...nums].sort((a: number, b: number) => a - b);
  const minIdx = nums.indexOf(Math.min(...nums));

  return (
    <div className="p-4 space-y-5 font-mono text-sm">

      {/* Original sorted → rotated */}
      <div className="space-y-3">
        <div className="text-blue-400 text-xs font-semibold">Original Sorted Array</div>
        <div className="flex gap-2 justify-center">
          {sortedNums.map((v: number, i: number) => (
            <div key={i} className="w-10 h-10 flex items-center justify-center border-2 border-blue-500/50 bg-blue-500/20 text-blue-200 rounded font-bold">
              {v}
            </div>
          ))}
        </div>

        {/* Rotation arrow */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
          <div className="flex items-center gap-1">
            <div className="h-px w-6 bg-slate-600" />
            <span className="text-purple-400">rotated by 3 positions</span>
            <div className="h-px w-6 bg-slate-600" />
          </div>
        </div>
        <div className="flex justify-center relative">
          <svg width="220" height="20" className="absolute -top-1">
            <path d="M 30 10 Q 110 -10 190 10" stroke="#7c3aed" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
            <polygon points="188,6 194,12 182,12" fill="#7c3aed" />
          </svg>
        </div>

        <div className="text-purple-400 text-xs font-semibold pt-1">Rotated Array</div>
        <div className="flex gap-2 justify-center">
          {nums.map((v: number, i: number) => {
            const isPivot = i === minIdx;
            return (
              <div key={i} className={`relative w-10 h-10 flex items-center justify-center border-2 rounded font-bold
                ${isPivot ? 'bg-green-500 text-white border-green-400 scale-110' : 'bg-slate-700 text-slate-200 border-slate-600'}`}>
                {v}
                <span className="absolute -bottom-5 text-[10px] text-slate-500">{i}</span>
                {isPivot && <span className="absolute -top-5 text-[10px] text-green-300">min</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Binary search trace */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-xs space-y-2">
        <div className="text-purple-300 font-semibold">Binary Search Trace</div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="text-slate-400">lo</div><div className="text-slate-400">hi</div>
          <div className="text-slate-400">mid</div><div className="text-slate-400">decision</div>
          <div className="text-blue-400">0</div><div className="text-blue-400">4</div>
          <div className="text-purple-400">2</div>
          <div className="text-slate-300 text-[10px]">nums[2]=5 &gt; nums[4]=2 → lo=3</div>
          <div className="text-blue-400">3</div><div className="text-blue-400">4</div>
          <div className="text-purple-400">3</div>
          <div className="text-slate-300 text-[10px]">nums[3]=1 ≤ nums[4]=2 → hi=3</div>
          <div className="text-green-400 col-span-2">lo=hi=3</div>
          <div className="text-green-400 col-span-2">return nums[3] = 1</div>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 text-center text-xs">
        <span className="text-green-400 font-bold">Minimum = {Math.min(...nums)} at index {minIdx}</span>
      </div>
    </div>
  );
};

export default FindMinRotatedViz;
