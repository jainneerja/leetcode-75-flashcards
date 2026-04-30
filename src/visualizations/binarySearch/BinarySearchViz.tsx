import React from 'react';

interface Props { data: { [key: string]: any } }

const BinarySearchViz: React.FC<Props> = ({ data }) => {
  const nums = data?.nums ?? [-1, 0, 3, 5, 9, 12];
  const target = data?.target ?? 9;

  // Step 1: lo=0, hi=5, mid=2 (val=3 < 9, go right)
  const step1 = { lo: 0, hi: 5, mid: 2 };
  // Step 2: lo=3, hi=5, mid=4 (val=9 = target, found!)
  const step2 = { lo: 3, hi: 5, mid: 4 };

  const boxStyle = (idx: number, step: typeof step1, found = false) => {
    if (found && idx === step.mid) return 'bg-green-500 text-white border-green-400 scale-110';
    if (idx === step.mid) return 'bg-purple-600 text-white border-purple-400';
    if (idx >= step.lo && idx <= step.hi) return 'bg-blue-500/30 text-blue-200 border-blue-500';
    return 'bg-slate-700 text-slate-400 border-slate-600';
  };

  return (
    <div className="p-4 space-y-6 font-mono text-sm">
      <div className="text-center text-slate-300 text-xs mb-1">
        Target = <span className="text-yellow-400 font-bold">{target}</span>
      </div>

      {/* Step 1 */}
      <div className="space-y-2">
        <div className="text-purple-400 text-xs font-semibold">Step 1 — lo=0, hi=5, mid=2 → nums[2]=3 &lt; 9 → go right</div>
        <div className="flex gap-2 justify-center">
          {nums.map((v: number, i: number) => (
            <div key={i} className={`relative w-10 h-10 flex items-center justify-center border-2 rounded transition-all ${boxStyle(i, step1)}`}>
              <span className="font-bold">{v}</span>
              <span className="absolute -bottom-5 text-[10px] text-slate-500">{i}</span>
              {i === step1.lo && <span className="absolute -top-5 text-[10px] text-blue-400">lo</span>}
              {i === step1.hi && <span className="absolute -top-5 text-[10px] text-blue-400">hi</span>}
              {i === step1.mid && <span className="absolute -top-5 text-[10px] text-purple-300">mid</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-slate-500">
          <div className="w-0.5 h-4 bg-slate-600" />
          <div className="text-xs">nums[2]=3 &lt; target → lo = mid+1 = 3</div>
          <div className="w-0.5 h-4 bg-slate-600" />
          <div className="text-slate-400">↓</div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="space-y-2">
        <div className="text-green-400 text-xs font-semibold">Step 2 — lo=3, hi=5, mid=4 → nums[4]=9 = target → FOUND!</div>
        <div className="flex gap-2 justify-center">
          {nums.map((v: number, i: number) => (
            <div key={i} className={`relative w-10 h-10 flex items-center justify-center border-2 rounded transition-all ${boxStyle(i, step2, true)}`}>
              <span className="font-bold">{v}</span>
              <span className="absolute -bottom-5 text-[10px] text-slate-500">{i}</span>
              {i === step2.lo && <span className="absolute -top-5 text-[10px] text-blue-400">lo</span>}
              {i === step2.hi && <span className="absolute -top-5 text-[10px] text-blue-400">hi</span>}
              {i === step2.mid && <span className="absolute -top-5 text-[10px] text-green-300">mid</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
        <span className="text-green-400 font-bold">Found {target} at index 4</span>
        <span className="text-slate-400 text-xs block mt-1">Only 2 iterations → O(log 6) ≈ 2.6</span>
      </div>
    </div>
  );
};

export default BinarySearchViz;
