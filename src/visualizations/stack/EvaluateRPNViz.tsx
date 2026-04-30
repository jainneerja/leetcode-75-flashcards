import React from 'react';

interface Props { data: { [key: string]: any } }

const EvaluateRPNViz: React.FC<Props> = ({ data }) => {
  const tokens: string[] = data?.tokens ?? ['2', '1', '+', '3', '*'];

  const steps = [
    { token: '2',  stack: [2],    action: 'push 2',         note: 'Number → push' },
    { token: '1',  stack: [2, 1], action: 'push 1',         note: 'Number → push' },
    { token: '+',  stack: [3],    action: '2 + 1 = 3',      note: 'Op: pop 1, pop 2 → push 3' },
    { token: '3',  stack: [3, 3], action: 'push 3',         note: 'Number → push' },
    { token: '*',  stack: [9],    action: '3 × 3 = 9',      note: 'Op: pop 3, pop 3 → push 9' },
  ];

  const isOp = (t: string) => ['+', '-', '*', '/'].includes(t);

  return (
    <div className="flex flex-col items-center gap-4 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
        Evaluate RPN — Stack Trace
      </h3>

      {/* Token row */}
      <div className="flex gap-1 items-center">
        {tokens.map((t, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-md border-2 flex items-center justify-center font-mono font-bold text-sm ${
              isOp(t)
                ? 'bg-yellow-500/70 border-yellow-400 text-white'
                : 'bg-blue-600/70 border-blue-400 text-white'
            }`}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Steps table */}
      <div className="w-full max-w-sm space-y-1">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs border ${
              isOp(step.token)
                ? 'bg-yellow-900/30 border-yellow-500/40'
                : 'bg-blue-900/20 border-blue-600/30'
            }`}
          >
            {/* Token */}
            <div className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 ${
              isOp(step.token) ? 'bg-yellow-500/80 text-white' : 'bg-blue-600/80 text-white'
            }`}>
              {step.token}
            </div>

            {/* Action */}
            <div className="flex-1">
              <div className="text-gray-200 font-semibold">{step.action}</div>
              <div className="text-gray-500">{step.note}</div>
            </div>

            {/* Stack state */}
            <div className="flex gap-0.5 flex-shrink-0">
              {step.stack.map((v, j) => (
                <div key={j} className="bg-gray-700 border border-gray-500 rounded px-1.5 py-0.5 font-mono text-white text-xs">
                  {v}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="bg-green-800/30 border border-green-500/50 rounded-xl px-6 py-3 text-center">
        <div className="text-green-300 text-xs mb-1">Final stack value</div>
        <div className="text-white font-bold text-2xl">9</div>
        <div className="text-gray-400 text-xs">(2 + 1) × 3 = 9</div>
      </div>
    </div>
  );
};

export default EvaluateRPNViz;
