import React from 'react';

interface Props { data: { [key: string]: any } }

const SearchRotatedViz: React.FC<Props> = ({ data }) => {
  const nums = data?.nums ?? [4, 5, 6, 7, 0, 1, 2];
  const target = data?.target ?? 0;
  const midIdx = 3;
  const answerIdx = nums.indexOf(target);

  return (
    <div className="p-4 space-y-5 font-mono text-sm">
      <div className="text-center text-slate-300 text-xs">
        Target = <span className="text-yellow-400 font-bold">{target}</span>
      </div>

      {/* Array with mid divider */}
      <div className="space-y-2">
        <div className="text-purple-400 text-xs font-semibold">lo=0, hi=6, mid=3 → nums[3]={nums[midIdx]}</div>
        <div className="flex gap-2 justify-center items-end">
          {nums.map((v: number, i: number) => {
            const isLeft = i <= midIdx;
            const isMid = i === midIdx;
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                {isMid && <div className="text-purple-300 text-[10px]">mid</div>}
                <div className={`w-10 h-10 flex items-center justify-center border-2 rounded font-bold
                  ${isMid ? 'bg-purple-600 text-white border-purple-400'
                    : isLeft ? 'bg-blue-500/40 text-blue-100 border-blue-500'
                    : 'bg-indigo-500/30 text-indigo-200 border-indigo-500'}`}>
                  {v}
                </div>
                <div className="text-[9px] text-slate-500">{i}</div>
              </div>
            );
          })}
        </div>
        {/* Color legend */}
        <div className="flex justify-center gap-4 text-[10px]">
          <span className="text-blue-400">■ Left half [4,5,6,7] — SORTED</span>
          <span className="text-indigo-400">■ Right half [0,1,2] — unsorted</span>
        </div>
      </div>

      {/* Decision logic */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-xs space-y-2">
        <div className="text-yellow-400 font-semibold">Which half is sorted?</div>
        <div className="text-slate-300">nums[lo]=<span className="text-blue-400">{nums[0]}</span> ≤ nums[mid]=<span className="text-purple-400">{nums[midIdx]}</span> → Left half [{nums[0]}..{nums[midIdx]}] is sorted</div>
        <div className="text-yellow-400 font-semibold mt-1">Is target={target} in left half [{nums[0]}, {nums[midIdx]}]?</div>
        <div className="text-red-400 font-bold">{target} is NOT in [{nums[0]}, {nums[midIdx]}] → Search RIGHT half</div>
        <div className="text-slate-400">→ lo = mid + 1 = {midIdx + 1}</div>
      </div>

      {/* Next step */}
      <div className="space-y-2">
        <div className="text-green-400 text-xs font-semibold">Next: lo={midIdx+1}, hi=6, mid=5 → nums[5]=1 → keep narrowing → found!</div>
        <div className="flex gap-2 justify-center items-end">
          {nums.map((v: number, i: number) => {
            const active = i >= midIdx + 1;
            const isAnswer = i === answerIdx;
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 flex items-center justify-center border-2 rounded font-bold
                  ${isAnswer ? 'bg-green-500 text-white border-green-400 scale-110'
                    : active ? 'bg-indigo-500/40 text-indigo-100 border-indigo-500'
                    : 'bg-slate-800 text-slate-600 border-slate-700'}`}>
                  {v}
                </div>
                <div className="text-[9px] text-slate-500">{i}</div>
                {isAnswer && <div className="text-[9px] text-green-400 font-bold">ans</div>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 text-center text-xs">
        <span className="text-green-400 font-bold">Found {target} at index {answerIdx}</span>
      </div>
    </div>
  );
};

export default SearchRotatedViz;
