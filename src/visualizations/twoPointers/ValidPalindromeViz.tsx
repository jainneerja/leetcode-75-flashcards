import React from 'react';

const ValidPalindromeViz: React.FC<{ data?: any }> = () => {
  const phrase = 'A man, a plan, a canal: Panama';

  const cleaned = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
  const n = cleaned.length;

  const matchedPairs: Array<[number, number]> = [];
  for (let i = 0; i < Math.floor(n / 2); i++) {
    matchedPairs.push([i, n - 1 - i]);
  }

  const leftIdx = 0;
  const rightIdx = n - 1;

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-slate-400 text-xs text-center">
        Original: <span className="text-slate-200 font-mono">"{phrase}"</span>
      </div>

      <div className="text-slate-500 text-xs">↓ keep only alphanumeric, lowercase</div>

      <div className="flex flex-wrap justify-center gap-0.5 max-w-xs">
        {cleaned.split('').map((char, i) => {
          const isLeft = i === leftIdx;
          const isRight = i === rightIdx;
          const pairIndex = matchedPairs.findIndex(([l, r]) => l === i || r === i);
          const isMatched = pairIndex !== -1;
          const isMiddle = n % 2 === 1 && i === Math.floor(n / 2);

          let style = 'border-slate-600 bg-slate-800 text-slate-400';
          if (isLeft) style = 'border-green-400 bg-green-900/50 text-green-300 scale-110';
          else if (isRight) style = 'border-red-400 bg-red-900/50 text-red-300 scale-110';
          else if (isMiddle) style = 'border-yellow-500 bg-yellow-900/40 text-yellow-300';
          else if (isMatched) style = 'border-indigo-500 bg-indigo-900/30 text-indigo-300';

          return (
            <div
              key={i}
              className={`w-6 h-7 flex items-center justify-center rounded border font-mono font-bold text-xs ${style}`}
            >
              {char}
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded border-2 border-green-400 bg-green-900/50" />
          <span className="text-green-300">Left pointer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded border-2 border-red-400 bg-red-900/50" />
          <span className="text-red-300">Right pointer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded border-2 border-indigo-500 bg-indigo-900/30" />
          <span className="text-indigo-300">Matched pairs</span>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-green-900/30 border border-green-500 rounded-xl px-4 py-2 text-sm w-full justify-center">
        <span className="text-green-300 font-mono font-bold">{cleaned[0]}</span>
        <span className="text-slate-500">↔</span>
        <span className="text-green-300 font-mono font-bold">{cleaned[n - 1]}</span>
        <span className="text-green-400 font-semibold">match ✓</span>
        <span className="text-slate-400 mx-2">→</span>
        <span className="text-yellow-400 font-bold">Valid Palindrome</span>
      </div>
    </div>
  );
};

export default ValidPalindromeViz;
