import React from 'react';

const TopKFrequentViz: React.FC<{ data?: any }> = () => {
  const nums = [1, 1, 1, 2, 2, 3];
  const k = 2;

  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);

  const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);
  const maxCount = sorted[0]?.[1] ?? 1;
  const topNums = new Set(sorted.slice(0, k).map(([n]) => n));

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="flex items-center gap-3">
        <span className="text-slate-400 text-sm">nums = [{nums.join(', ')}]</span>
        <span className="bg-purple-700 text-white text-sm font-bold px-3 py-0.5 rounded-full">k = {k}</span>
      </div>

      <div className="w-full">
        <p className="text-slate-400 text-xs mb-3 text-center">Frequency bar chart — top {k} highlighted</p>
        <div className="flex items-end justify-center gap-4 h-32">
          {sorted.map(([num, count]) => {
            const isTop = topNums.has(num);
            const barH = Math.round((count / maxCount) * 100);
            return (
              <div key={num} className="flex flex-col items-center gap-1">
                <span className={`text-xs font-bold ${isTop ? 'text-yellow-400' : 'text-slate-400'}`}>
                  {count}x
                </span>
                <div
                  className={`w-12 rounded-t-lg transition-all ${isTop ? 'bg-yellow-400' : 'bg-slate-600'}`}
                  style={{ height: `${barH}px` }}
                />
                <div className={`text-sm font-bold w-10 h-10 flex items-center justify-center rounded-lg border-2 ${
                  isTop ? 'border-yellow-400 bg-yellow-900/40 text-yellow-300' : 'border-slate-600 bg-slate-800 text-slate-300'
                }`}>
                  {num}
                </div>
                {isTop && <span className="text-yellow-400 text-xs">★ Top</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-800 border border-yellow-500 rounded-lg px-4 py-2 text-sm w-full text-center">
        <span className="text-slate-400">Top {k} most frequent: </span>
        {sorted.slice(0, k).map(([n, c], i) => (
          <span key={n} className="text-yellow-400 font-bold">
            {i > 0 && ', '}num {n} ({c} times)
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopKFrequentViz;
