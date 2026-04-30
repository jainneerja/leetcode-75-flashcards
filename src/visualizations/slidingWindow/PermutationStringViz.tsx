import React from 'react';

interface Props { data: { [key: string]: any } }

const PermutationStringViz: React.FC<Props> = ({ data }) => {
  const s1: string = data?.s1 ?? 'ab';
  const s2: string = data?.s2 ?? 'eidbaooo';

  // Window 'ba' at index 3-4 matches s1 anagram
  const winStart = 3;
  const winEnd = 4;

  const s1Freq: Record<string, number> = {};
  for (const ch of s1) s1Freq[ch] = (s1Freq[ch] || 0) + 1;

  return (
    <div className="flex flex-col items-center gap-5 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
        Permutation in String — Fixed Window
      </h3>

      {/* s1 frequency map */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-gray-400 text-xs">Pattern s1 = "{s1}"</span>
        <div className="flex gap-2">
          {Object.entries(s1Freq).map(([ch, cnt]) => (
            <div key={ch} className="bg-indigo-700/60 border border-indigo-400 rounded-lg px-3 py-1 text-center">
              <div className="text-white font-mono font-bold">{ch}</div>
              <div className="text-indigo-300 text-xs">×{cnt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* s2 character boxes */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-gray-400 text-xs">String s2 = "{s2}"</span>
        <div className="flex gap-1">
          {s2.split('').map((ch, i) => {
            const inWindow = i >= winStart && i <= winEnd;
            const boxClass = inWindow
              ? 'bg-green-600/70 border-green-400 text-white shadow-lg shadow-green-500/30'
              : 'bg-gray-700 border-gray-600 text-gray-300';

            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className={`w-9 h-9 rounded-md border-2 flex items-center justify-center font-mono font-bold text-sm ${boxClass}`}>
                  {ch}
                </div>
                <span className="text-gray-500 text-xs">{i}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Match illustration */}
      <div className="flex items-center gap-4">
        <div className="bg-indigo-900/40 border border-indigo-500/40 rounded-lg px-4 py-3 text-center">
          <div className="text-indigo-300 text-xs mb-1">s1 freq</div>
          <div className="font-mono text-white">a:1  b:1</div>
        </div>
        <div className="text-green-400 text-xl font-bold">==</div>
        <div className="bg-green-900/40 border border-green-500/40 rounded-lg px-4 py-3 text-center">
          <div className="text-green-300 text-xs mb-1">window "ba" freq</div>
          <div className="font-mono text-white">a:1  b:1</div>
        </div>
      </div>

      {/* Result */}
      <div className="bg-green-800/30 border border-green-500/50 rounded-xl px-6 py-2">
        <span className="text-green-300 font-semibold">Permutation found at index {winStart}! → </span>
        <span className="text-white font-mono font-bold">return true</span>
      </div>

      {/* matches counter info */}
      <div className="text-xs text-gray-500 text-center">
        Use a <span className="text-purple-400">matches</span> counter (0-26) to avoid comparing full freq arrays each step
      </div>
    </div>
  );
};

export default PermutationStringViz;
