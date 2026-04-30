import React from 'react';

interface Props { data: { [key: string]: any } }

const ValidParenthesesViz: React.FC<Props> = ({ data }) => {
  const expr: string = data?.expr ?? '({[]})';

  // Simulate processing steps
  const steps = [
    { char: '(', action: 'push', stack: ['('], note: 'Push opening' },
    { char: '{', action: 'push', stack: ['(', '{'], note: 'Push opening' },
    { char: '[', action: 'push', stack: ['(', '{', '['], note: 'Push opening' },
    { char: ']', action: 'match', stack: ['(', '{'], note: '[ matches ] ✓' },
    { char: '}', action: 'match', stack: ['('], note: '{ matches } ✓' },
    { char: ')', action: 'match', stack: [], note: '( matches ) ✓' },
  ];

  const colors: Record<string, string> = {
    '(': 'bg-blue-600 border-blue-400',
    ')': 'bg-blue-600 border-blue-400',
    '{': 'bg-purple-600 border-purple-400',
    '}': 'bg-purple-600 border-purple-400',
    '[': 'bg-indigo-600 border-indigo-400',
    ']': 'bg-indigo-600 border-indigo-400',
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
        Valid Parentheses — Stack Trace
      </h3>

      {/* Expression */}
      <div className="flex gap-1">
        {expr.split('').map((ch, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-md border-2 flex items-center justify-center font-mono font-bold text-lg ${colors[ch] ?? 'bg-gray-700 border-gray-500'} text-white`}
          >
            {ch}
          </div>
        ))}
      </div>

      {/* Step-by-step processing */}
      <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`rounded-lg px-3 py-2 border text-xs flex items-center gap-2 ${
              step.action === 'push'
                ? 'bg-blue-900/30 border-blue-500/40'
                : 'bg-green-900/30 border-green-500/40'
            }`}
          >
            <span className={`font-mono font-bold text-base ${colors[step.char]?.includes('blue') ? 'text-blue-300' : colors[step.char]?.includes('purple') ? 'text-purple-300' : 'text-indigo-300'}`}>
              {step.char}
            </span>
            <span className="text-gray-300">{step.note}</span>
          </div>
        ))}
      </div>

      {/* Final stack state */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-gray-400 text-xs">Final stack (empty = valid)</span>
        <div className="flex items-center gap-3">
          <div className="w-12 h-16 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-xs">empty</span>
          </div>
          <div className="bg-green-700/50 border border-green-500/60 rounded-xl px-4 py-2">
            <span className="text-green-300 font-bold text-lg">✓ Valid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidParenthesesViz;
