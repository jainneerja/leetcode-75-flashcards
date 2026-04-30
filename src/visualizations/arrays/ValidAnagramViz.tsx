import React from 'react';

const ValidAnagramViz: React.FC<{ data?: any }> = () => {
  const word1 = 'anagram';
  const word2 = 'nagaram';

  const getFreq = (w: string): Map<string, number> => {
    const m = new Map<string, number>();
    for (const c of w) m.set(c, (m.get(c) ?? 0) + 1);
    return m;
  };

  const freq1 = getFreq(word1);
  const freq2 = getFreq(word2);
  const allChars = [...new Set([...freq1.keys(), ...freq2.keys()])].sort();
  const maxCount = Math.max(...allChars.map(c => Math.max(freq1.get(c) ?? 0, freq2.get(c) ?? 0)));

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="flex gap-6 w-full justify-center">
        {[{ label: word1, freq: freq1 }, { label: word2, freq: freq2 }].map(({ label, freq }, wi) => (
          <div key={wi} className="flex flex-col items-center gap-2">
            <div className="bg-indigo-700 text-white font-bold px-4 py-1 rounded-full text-sm tracking-widest">
              {label}
            </div>
            <div className="flex items-end gap-1 h-24">
              {allChars.map(c => {
                const count = freq.get(c) ?? 0;
                const match = (freq1.get(c) ?? 0) === (freq2.get(c) ?? 0);
                const barH = maxCount > 0 ? Math.round((count / maxCount) * 80) : 0;
                return (
                  <div key={c} className="flex flex-col items-center gap-0.5">
                    <span className="text-[10px] text-slate-300">{count}</span>
                    <div
                      className={`w-5 rounded-t transition-all ${match && count > 0 ? 'bg-green-500' : count === 0 ? 'bg-slate-700' : 'bg-red-500'}`}
                      style={{ height: `${Math.max(barH, count > 0 ? 8 : 0)}px` }}
                    />
                    <span className="text-[10px] text-slate-400">{c}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-900/40 border border-green-400 rounded-lg px-4 py-2 text-center text-sm">
        <span className="text-green-400 font-bold">All frequencies match! </span>
        <span className="text-slate-300">"anagram" and "nagaram" are anagrams ✓</span>
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {allChars.map(c => (
          <span key={c} className="bg-green-800/50 border border-green-500 text-green-300 text-xs px-2 py-0.5 rounded">
            {c}: {freq1.get(c) ?? 0} = {freq2.get(c) ?? 0}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ValidAnagramViz;
