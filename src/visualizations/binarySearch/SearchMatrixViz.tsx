import React from 'react';

interface Props { data: { [key: string]: any } }

const SearchMatrixViz: React.FC<Props> = ({ data }) => {
  const matrix = data?.matrix ?? [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
  const target = data?.target ?? 3;
  const m = matrix.length;
  const n = matrix[0].length;
  const flat = matrix.flat() as number[];
  // mid = 1 (0-indexed), maps to matrix[0][1] = 3
  const midIdx = 1;
  const midRow = Math.floor(midIdx / n);
  const midCol = midIdx % n;

  return (
    <div className="p-4 space-y-5 font-mono text-sm">
      <div className="text-center text-slate-300 text-xs">
        Target = <span className="text-yellow-400 font-bold">{target}</span>
        <span className="text-slate-500 ml-2">| m={m}, n={n}, total={m*n}</span>
      </div>

      {/* Matrix grid */}
      <div className="space-y-1">
        <div className="text-purple-400 text-xs font-semibold mb-2">Matrix (sorted row-by-row)</div>
        <div className="flex flex-col items-center gap-1">
          {matrix.map((row: number[], r: number) => (
            <div key={r} className="flex gap-1">
              {row.map((val: number, c: number) => {
                const isTarget = r === midRow && c === midCol;
                return (
                  <div key={c}
                    className={`w-10 h-10 flex flex-col items-center justify-center border-2 rounded text-xs font-bold
                      ${isTarget ? 'bg-green-500 text-white border-green-400 scale-110' : 'bg-slate-700 text-slate-200 border-slate-600'}`}>
                    <span>{val}</span>
                    {isTarget && <span className="text-[8px] text-green-200">[{r},{c}]</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow showing flatten */}
      <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
        <div className="h-px w-8 bg-slate-600" />
        <span>flatten to 1D array (size {m*n})</span>
        <div className="h-px w-8 bg-slate-600" />
      </div>

      {/* Flat array */}
      <div className="space-y-1">
        <div className="text-blue-400 text-xs font-semibold mb-2">Flattened Array — Binary search on indices 0..{m*n-1}</div>
        <div className="flex gap-1 justify-center flex-wrap">
          {flat.map((val: number, i: number) => {
            const isMid = i === midIdx;
            const inRange = i >= 0 && i <= 3;
            return (
              <div key={i} className={`relative w-10 h-10 flex items-center justify-center border-2 rounded text-xs font-bold
                ${isMid ? 'bg-green-500 text-white border-green-400 scale-110'
                  : inRange ? 'bg-blue-500/30 text-blue-200 border-blue-500'
                  : 'bg-slate-700 text-slate-400 border-slate-600'}`}>
                {val}
                <span className="absolute -bottom-4 text-[9px] text-slate-500">{i}</span>
                {isMid && <span className="absolute -top-5 text-[9px] text-green-300">mid</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mapping callout */}
      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-3 text-xs space-y-1">
        <div className="text-indigo-300 font-semibold">Index → Matrix Mapping</div>
        <div className="text-slate-300">mid = <span className="text-yellow-400">{midIdx}</span></div>
        <div className="text-slate-300">row = ⌊{midIdx} / {n}⌋ = <span className="text-blue-400">{midRow}</span></div>
        <div className="text-slate-300">col = {midIdx} % {n} = <span className="text-blue-400">{midCol}</span></div>
        <div className="text-green-400 font-bold">matrix[{midRow}][{midCol}] = {matrix[midRow][midCol]} = target ✓</div>
      </div>
    </div>
  );
};

export default SearchMatrixViz;
