import React from 'react';

interface Props { data: { [key: string]: any } }

const LongestSubstringViz: React.FC<Props> = ({ data }) => {
  const s: string = data?.s ?? 'abcabcbb';
  // Window [0,2] = 'abc' is the best window; index 3 is duplicate 'a'
  const windowStart = 0;
  const windowEnd = 2;
  const duplicateIdx = 3;

  return (
    <div className="flex flex-col items-center gap-5 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">Sliding Window — No Repeats</h3>

      {/* Character boxes */}
      <div className="flex gap-1 items-center">
        {s.split('').map((ch, i) => {
          const inWindow = i >= windowStart && i <= windowEnd;
          const isDuplicate = i === duplicateIdx;

          let boxClass = 'bg-gray-700 border-gray-600 text-gray-300';
          if (inWindow) boxClass = 'bg-blue-600/70 border-blue-400 text-white shadow-lg shadow-blue-500/30';
          if (isDuplicate) boxClass = 'bg-red-600/70 border-red-400 text-white shadow-lg shadow-red-500/30';

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-9 h-9 rounded-md border-2 flex items-center justify-center font-mono font-bold text-sm transition-all ${boxClass}`}>
                {ch}
              </div>
              <span className="text-gray-500 text-xs">{i}</span>
            </div>
          );
        })}
      </div>

      {/* Window bracket annotation */}
      <div className="flex flex-col items-start w-full max-w-xs pl-2">
        <div className="flex items-center gap-2">
          <div className="w-24 h-1 rounded bg-blue-500" />
          <span className="text-blue-400 text-xs font-semibold">Current window "abc"</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-9 h-1 rounded bg-red-500" style={{ marginLeft: '108px' }} />
          <span className="text-red-400 text-xs font-semibold">Duplicate 'a' found → shrink left</span>
        </div>
      </div>

      {/* State badges */}
      <div className="flex gap-3 flex-wrap justify-center">
        <div className="bg-blue-900/40 border border-blue-500/40 rounded-lg px-3 py-2 text-center">
          <div className="text-blue-300 text-xs">Window</div>
          <div className="text-white font-mono font-bold">"abc"</div>
        </div>
        <div className="bg-yellow-900/40 border border-yellow-500/40 rounded-lg px-3 py-2 text-center">
          <div className="text-yellow-300 text-xs">Max Length</div>
          <div className="text-white font-bold text-lg">3</div>
        </div>
        <div className="bg-purple-900/40 border border-purple-500/40 rounded-lg px-3 py-2 text-center">
          <div className="text-purple-300 text-xs">Map stores</div>
          <div className="text-white font-mono text-xs">a→0, b→1, c→2</div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500 inline-block" /> In window</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-500 inline-block" /> Duplicate</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-700 inline-block" /> Outside</span>
      </div>
    </div>
  );
};

export default LongestSubstringViz;
