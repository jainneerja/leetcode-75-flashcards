import React from 'react';

interface Props { data: { [key: string]: any } }

const MinStackViz: React.FC<Props> = ({ data }) => {
  // After push -2, push 0, push -3
  const mainStack = [-2, 0, -3];
  const minStack = [-2, -2, -3];
  // Show state after getMin() → -3
  // After pop(): main=[-2,0], min=[-2,-2]
  const afterPopMain = [-2, 0];
  const afterPopMin = [-2, -2];

  const renderStack = (items: number[], label: string, highlightTop: boolean, highlightColor: string) => (
    <div className="flex flex-col items-center gap-1">
      <span className="text-gray-400 text-xs mb-1">{label}</span>
      <div className="flex flex-col-reverse gap-1">
        {items.map((val, i) => {
          const isTop = i === items.length - 1;
          const bg = isTop && highlightTop ? highlightColor : 'bg-gray-700 border-gray-600';
          return (
            <div
              key={i}
              className={`w-16 h-10 rounded border-2 flex items-center justify-center font-mono font-bold text-sm ${bg} text-white`}
            >
              {val}
            </div>
          );
        })}
      </div>
      <div className="w-16 border-t-2 border-gray-500 mt-1" />
      <span className="text-gray-600 text-xs">bottom</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-5 p-4 select-none">
      <h3 className="text-purple-300 font-semibold text-sm tracking-wide uppercase">
        Min Stack — Two Parallel Stacks
      </h3>

      {/* State: push -2, 0, -3 */}
      <div className="bg-gray-800/60 border border-gray-600 rounded-xl p-4 w-full max-w-xs">
        <div className="text-gray-400 text-xs mb-3 text-center">After: push(-2) → push(0) → push(-3)</div>
        <div className="flex justify-around">
          {renderStack(mainStack, 'Main Stack', true, 'bg-blue-600 border-blue-400')}
          {renderStack(minStack, 'Min Stack', true, 'bg-purple-600 border-purple-400')}
        </div>

        {/* getMin result */}
        <div className="mt-3 bg-purple-900/40 border border-purple-500/40 rounded-lg px-3 py-2 text-center">
          <span className="text-purple-300 text-xs">getMin() → </span>
          <span className="text-white font-mono font-bold text-lg">-3</span>
          <span className="text-purple-300 text-xs"> (minStack top)</span>
        </div>
      </div>

      {/* After pop */}
      <div className="bg-gray-800/60 border border-gray-600 rounded-xl p-4 w-full max-w-xs">
        <div className="text-gray-400 text-xs mb-3 text-center">After: pop()</div>
        <div className="flex justify-around">
          {renderStack(afterPopMain, 'Main Stack', true, 'bg-blue-600/70 border-blue-500')}
          {renderStack(afterPopMin, 'Min Stack', true, 'bg-purple-600/70 border-purple-500')}
        </div>
        <div className="mt-3 bg-purple-900/40 border border-purple-500/40 rounded-lg px-3 py-2 text-center">
          <span className="text-purple-300 text-xs">getMin() → </span>
          <span className="text-white font-mono font-bold text-lg">-2</span>
          <span className="text-purple-300 text-xs"> (new top)</span>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center max-w-xs">
        Min stack always mirrors main stack size. Top of min stack = current minimum in O(1).
      </div>
    </div>
  );
};

export default MinStackViz;
