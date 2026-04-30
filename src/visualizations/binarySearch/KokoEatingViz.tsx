import React from 'react';

interface Props { data: { [key: string]: any } }

const KokoEatingViz: React.FC<Props> = ({ data }) => {
  const piles = data?.piles ?? [3, 6, 7, 11];
  const h = data?.h ?? 8;
  const speed = 6; // mid of lo=1, hi=11
  const maxPile = Math.max(...piles);

  const hoursPerPile = piles.map((p: number) => Math.ceil(p / speed));
  const totalHours = hoursPerPile.reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="p-4 space-y-5 font-mono text-sm">
      <div className="text-center text-slate-300 text-xs">
        h = <span className="text-yellow-400 font-bold">{h} hours</span>
        <span className="text-slate-500 mx-2">|</span>
        Binary search on speed: lo=1, hi={maxPile}
      </div>

      {/* Pile stacks */}
      <div className="space-y-1">
        <div className="text-purple-400 text-xs font-semibold mb-3">Banana Piles</div>
        <div className="flex gap-6 justify-center items-end">
          {piles.map((p: number, i: number) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="flex flex-col-reverse gap-0.5">
                {Array.from({ length: p }).map((_, j) => (
                  <div key={j} className="text-lg leading-none">🍌</div>
                ))}
              </div>
              <div className="text-yellow-400 font-bold text-sm mt-1">{p}</div>
              <div className="text-slate-500 text-[10px]">pile {i+1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Binary search state */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-xs">
        <div className="text-purple-300 font-semibold mb-2">Binary Search on Speed</div>
        <div className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-blue-400 font-bold">lo=1</div>
          </div>
          <div className="flex-1 relative h-6">
            <div className="absolute inset-y-0 left-0 right-0 bg-slate-700 rounded" />
            <div className="absolute inset-y-0 left-0 bg-blue-500/30 rounded" style={{ width: '50%' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              mid={speed}
            </div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 font-bold">hi={maxPile}</div>
          </div>
        </div>
      </div>

      {/* Hours calculation */}
      <div className="space-y-2">
        <div className="text-blue-400 text-xs font-semibold">canFinish(speed={speed})?</div>
        <div className="flex gap-3 justify-center flex-wrap">
          {piles.map((p: number, i: number) => (
            <div key={i} className="bg-slate-700 border border-slate-600 rounded-lg p-2 text-center min-w-[70px]">
              <div className="text-slate-300 text-xs">pile={p}</div>
              <div className="text-purple-300 text-xs">⌈{p}/{speed}⌉</div>
              <div className="text-yellow-400 font-bold">{hoursPerPile[i]}h</div>
            </div>
          ))}
          <div className="flex items-center text-slate-400 text-lg">=</div>
          <div className={`border rounded-lg p-2 text-center min-w-[70px] ${totalHours <= h ? 'bg-green-500/20 border-green-500/40' : 'bg-red-500/20 border-red-500/40'}`}>
            <div className="text-slate-300 text-xs">total</div>
            <div className={`font-bold text-lg ${totalHours <= h ? 'text-green-400' : 'text-red-400'}`}>{totalHours}h</div>
            <div className={`text-[10px] ${totalHours <= h ? 'text-green-300' : 'text-red-300'}`}>
              {totalHours <= h ? `≤ ${h} ✓` : `> ${h} ✗`}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 text-center text-xs">
        <span className="text-green-400 font-bold">{totalHours} ≤ {h} hours → speed={speed} works → try smaller (hi=mid)</span>
      </div>
    </div>
  );
};

export default KokoEatingViz;
