import React from 'react';

const ContainsDuplicateViz: React.FC<{ data?: any }> = () => {
  const nums = [1, 2, 3, 1, 4, 4];

  const seen = new Map<number, number[]>();
  nums.forEach((n, i) => {
    if (!seen.has(n)) seen.set(n, []);
    seen.get(n)!.push(i);
  });

  const getStyle = (n: number) => {
    const indices = seen.get(n)!;
    if (indices.length <= 1) return 'border-slate-600 bg-slate-800 text-slate-200';
    if (n === 1) return 'border-yellow-400 bg-yellow-900/40 text-yellow-300';
    if (n === 4) return 'border-red-500 bg-red-900/40 text-red-300';
    return 'border-slate-600 bg-slate-800 text-slate-200';
  };

  const setElements: number[] = [];
  const setLabels: string[] = [];
  nums.forEach(n => {
    if (!setElements.includes(n)) {
      setElements.push(n);
      setLabels.push(setElements.length === 1 ? '→ added' : seen.get(n)!.length > 1 ? '→ DUPLICATE!' : '→ added');
    }
  });

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <p className="text-slate-400 text-sm">Array — duplicates highlighted</p>

      <div className="flex gap-2 items-center">
        {nums.map((n, i) => (
          <div
            key={i}
            className={`w-11 h-11 flex items-center justify-center rounded-lg border-2 font-bold text-lg shadow ${getStyle(n)}`}
          >
            {n}
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-xs">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded border-2 border-yellow-400 bg-yellow-900/40 inline-block" />
          <span className="text-yellow-300">1 appears twice</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded border-2 border-red-500 bg-red-900/40 inline-block" />
          <span className="text-red-300">4 appears twice</span>
        </span>
      </div>

      <div className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3">
        <p className="text-slate-400 text-xs mb-2 font-semibold uppercase tracking-wide">Set — building...</p>
        <div className="flex flex-col gap-1">
          {nums.map((n, i) => {
            const isDup = seen.get(n)!.length > 1 && seen.get(n)![0] !== i;
            const isFirst = seen.get(n)![0] === i;
            return (
              <div key={i} className={`flex items-center gap-2 text-xs ${isDup ? 'text-red-400' : 'text-slate-300'}`}>
                <span className="text-slate-500 w-4">{i}:</span>
                <span>Check {n}</span>
                {isDup ? (
                  <span className="text-red-400 font-bold">→ already in Set! Return true</span>
                ) : isFirst ? (
                  <span className="text-green-400">→ added to Set</span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContainsDuplicateViz;
