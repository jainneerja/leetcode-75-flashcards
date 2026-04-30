import React from 'react';

interface Props { data: { [key: string]: any } }

const SlidingWindowMaxViz: React.FC<Props> = ({ data }) => {
  const nums: number[] = data?.nums ?? [1, 3, -1, -3, 5, 3, 6, 7];
  const k: number = data?.k ?? 3;
  const output = [3, 3, 5, 5, 6, 7];

  // Highlight first window [0,2]
  const winStart = 0;
  const winEnd = 2;

  const maxVal = Math.max(...nums);
  const minVal = Math.min(...nums);
  const range = maxVal - minVal || 1;
  const barMaxH = 60;

  return (
    <div className="flex flex-col items-center gap-4 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
        Sliding Window Maximum — Monotonic Deque
      </h3>

      {/* Input bars */}
      <div className="flex flex-col items-start gap-1 w-full max-w-sm">
        <span className="text-gray-400 text-xs ml-1">Input nums (k={k})</span>
        <div className="flex items-end gap-1">
          {nums.map((n, i) => {
            const barH = Math.round(((n - minVal) / range) * barMaxH) + 10;
            const inWindow = i >= winStart && i <= winEnd;
            const barColor = inWindow ? 'bg-blue-500' : 'bg-purple-700';

            return (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="text-gray-300 text-xs font-mono">{n}</span>
                <div
                  className={`w-8 rounded-t ${barColor}`}
                  style={{ height: `${barH}px` }}
                />
                <span className={`text-xs ${inWindow ? 'text-blue-400' : 'text-gray-600'}`}>{i}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deque state for first window */}
      <div className="bg-gray-800/80 border border-gray-600 rounded-xl px-5 py-3 w-full max-w-sm">
        <div className="text-gray-400 text-xs mb-2">Deque state — window [1, 3, -1] (indices 0-2)</div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500 text-xs">front</span>
          <div className="flex gap-1">
            {[1].map((idx) => (
              <div key={idx} className="bg-blue-700/70 border border-blue-400 rounded px-3 py-1 text-center">
                <div className="text-white font-mono font-bold text-sm">idx {idx}</div>
                <div className="text-blue-300 text-xs">val={nums[idx]}</div>
              </div>
            ))}
          </div>
          <span className="text-gray-500 text-xs">← back</span>
          <span className="ml-auto text-green-400 font-bold text-sm">max = {nums[1]}</span>
        </div>
        <div className="text-gray-600 text-xs mt-1">idx 0 (val=1) was removed — smaller than idx 1 (val=3)</div>
      </div>

      {/* Output array */}
      <div className="flex flex-col items-center gap-2 w-full max-w-sm">
        <span className="text-gray-400 text-xs">Output maximums</span>
        <div className="flex gap-1 flex-wrap justify-center">
          {output.map((v, i) => (
            <div key={i} className="bg-green-700/50 border border-green-500/60 rounded px-2 py-1 text-center min-w-[32px]">
              <span className="text-green-300 font-mono font-bold text-sm">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="text-xs text-gray-500 text-center max-w-xs">
        Deque is <span className="text-purple-400">monotonic decreasing</span> by value.
        Front = window max. Each element enters/leaves at most once → <span className="text-blue-400">O(n)</span>.
      </div>
    </div>
  );
};

export default SlidingWindowMaxViz;
