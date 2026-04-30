import React from 'react';

interface Props { data: { [key: string]: any } }

const MinWindowSubstringViz: React.FC<Props> = ({ data }) => {
  const s: string = data?.s ?? 'ADOBECODEBANC';
  const t: string = data?.t ?? 'ABC';

  // Minimum window is "BANC" at indices 9-12
  const winStart = 9;
  const winEnd = 12;
  const required = ['A', 'B', 'C'];

  return (
    <div className="flex flex-col items-center gap-5 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
        Minimum Window Substring
      </h3>

      {/* Target t badges */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-xs">Need t = "{t}":</span>
        {required.map((ch) => (
          <div key={ch} className="bg-green-700/60 border border-green-400 rounded-full w-7 h-7 flex items-center justify-center">
            <span className="text-white font-mono font-bold text-sm">{ch}</span>
          </div>
        ))}
      </div>

      {/* String character boxes */}
      <div className="flex gap-1 flex-wrap justify-center">
        {s.split('').map((ch, i) => {
          const inWindow = i >= winStart && i <= winEnd;
          const isRequired = required.includes(ch);

          let boxClass = 'bg-gray-700 border-gray-600 text-gray-400';
          if (inWindow && isRequired) {
            boxClass = 'bg-green-600/80 border-green-400 text-white shadow-lg shadow-green-500/40';
          } else if (inWindow) {
            boxClass = 'bg-blue-700/60 border-blue-400 text-white';
          }

          return (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-9 h-9 rounded-md border-2 flex items-center justify-center font-mono font-bold text-sm ${boxClass}`}>
                {ch}
              </div>
              <span className="text-gray-600 text-xs">{i}</span>
            </div>
          );
        })}
      </div>

      {/* Window label */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <div className="bg-green-900/40 border border-green-500/40 rounded-lg px-4 py-2 text-center">
          <div className="text-green-300 text-xs">Min Window</div>
          <div className="text-white font-mono font-bold text-lg">"BANC"</div>
        </div>
        <div className="bg-blue-900/40 border border-blue-500/40 rounded-lg px-4 py-2 text-center">
          <div className="text-blue-300 text-xs">Length</div>
          <div className="text-white font-bold text-lg">4</div>
        </div>
      </div>

      {/* Strategy arrows */}
      <div className="flex gap-6 text-xs text-center">
        <div className="bg-gray-800 rounded-lg px-3 py-2">
          <div className="text-blue-400 font-semibold mb-1">① Expand →</div>
          <div className="text-gray-300">Until all of t is covered</div>
        </div>
        <div className="text-gray-500 self-center">then</div>
        <div className="bg-gray-800 rounded-lg px-3 py-2">
          <div className="text-green-400 font-semibold mb-1">② Shrink ←</div>
          <div className="text-gray-300">While still valid, record min</div>
        </div>
      </div>
    </div>
  );
};

export default MinWindowSubstringViz;
