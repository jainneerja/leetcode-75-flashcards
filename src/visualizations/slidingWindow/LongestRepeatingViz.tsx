import React from 'react';

interface Props { data: { [key: string]: any } }

const LongestRepeatingViz: React.FC<Props> = ({ data }) => {
  const s: string = data?.s ?? 'AABABBA';
  const k: number = data?.k ?? 1;

  // Window AABAB (indices 0-4), maxFreq=4 (A), replaced char at index 3 (B→A)
  const windowStart = 0;
  const windowEnd = 4;
  const replacedIdx = 3; // the B we "replace" with A

  return (
    <div className="flex flex-col items-center gap-5 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
        Longest Repeating with k={k} Replacement
      </h3>

      {/* Character boxes */}
      <div className="flex gap-1 items-center">
        {s.split('').map((ch, i) => {
          const inWindow = i >= windowStart && i <= windowEnd;
          const isReplaced = i === replacedIdx;

          let boxClass = 'bg-gray-700 border-gray-600 text-gray-400';
          let label = ch;

          if (inWindow && !isReplaced) {
            boxClass = 'bg-purple-600/70 border-purple-400 text-white shadow-lg shadow-purple-500/20';
          }
          if (isReplaced) {
            boxClass = 'bg-yellow-500/70 border-yellow-400 text-white shadow-lg shadow-yellow-400/30';
            label = ch; // still shows B but marked as replaced
          }

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-9 h-9 rounded-md border-2 flex items-center justify-center font-mono font-bold text-sm ${boxClass}`}>
                {label}
              </div>
              {isReplaced && (
                <span className="text-yellow-400 text-xs font-bold">→A</span>
              )}
              {!isReplaced && <span className="text-gray-600 text-xs">·</span>}
              <span className="text-gray-500 text-xs">{i}</span>
            </div>
          );
        })}
      </div>

      {/* Formula display */}
      <div className="bg-gray-800/80 border border-gray-600 rounded-xl px-5 py-3 text-center">
        <div className="text-gray-300 text-sm mb-1">Validity check</div>
        <div className="font-mono text-base">
          <span className="text-white">windowSize</span>
          <span className="text-gray-400"> − </span>
          <span className="text-green-400">maxFreq</span>
          <span className="text-gray-400"> ≤ </span>
          <span className="text-yellow-400">k</span>
        </div>
        <div className="font-mono text-lg mt-1">
          <span className="text-white">5</span>
          <span className="text-gray-400"> − </span>
          <span className="text-green-400">4</span>
          <span className="text-gray-400"> = </span>
          <span className="text-blue-400">1</span>
          <span className="text-gray-400"> ≤ </span>
          <span className="text-yellow-400">1</span>
          <span className="text-green-400 ml-2">✓ Valid</span>
        </div>
      </div>

      {/* Stat badges */}
      <div className="flex gap-3 flex-wrap justify-center">
        <div className="bg-purple-900/40 border border-purple-500/40 rounded-lg px-3 py-2 text-center">
          <div className="text-purple-300 text-xs">Window</div>
          <div className="text-white font-mono font-bold">"AABAB"</div>
        </div>
        <div className="bg-green-900/40 border border-green-500/40 rounded-lg px-3 py-2 text-center">
          <div className="text-green-300 text-xs">maxFreq (A)</div>
          <div className="text-white font-bold text-lg">4</div>
        </div>
        <div className="bg-yellow-900/40 border border-yellow-500/40 rounded-lg px-3 py-2 text-center">
          <div className="text-yellow-300 text-xs">Result length</div>
          <div className="text-white font-bold text-lg">5</div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-purple-600 inline-block" /> Dominant char</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-500 inline-block" /> Replaced char</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-700 inline-block" /> Outside window</span>
      </div>
    </div>
  );
};

export default LongestRepeatingViz;
