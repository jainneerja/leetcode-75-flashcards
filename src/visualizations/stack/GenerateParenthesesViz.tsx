import React from 'react';

const results = ['((()))', '(()())', '(())()', '()(())', '()()()'];

export default function GenerateParenthesesViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200 font-medium">
        n=3 — all 5 valid combinations (Catalan number C₃ = 5)
      </p>
      <div className="grid grid-cols-1 gap-2">
        {results.map((combo, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
            <span className="text-purple-400 text-sm font-bold w-4">{i + 1}.</span>
            <div className="flex gap-0.5">
              {combo.split('').map((ch, j) => (
                <span
                  key={j}
                  className={`text-lg font-bold ${ch === '(' ? 'text-green-400' : 'text-blue-400'}`}
                >
                  {ch}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-auto">depth: 3</span>
          </div>
        ))}
      </div>
      <div className="text-center bg-purple-500/10 rounded-lg py-2">
        <span className="text-xs text-gray-400">Rule: add </span>
        <span className="text-green-400 text-xs font-bold">(</span>
        <span className="text-xs text-gray-400"> if open &lt; n · add </span>
        <span className="text-blue-400 text-xs font-bold">)</span>
        <span className="text-xs text-gray-400"> if close &lt; open</span>
      </div>
    </div>
  );
}
