import React from 'react';

const TwoSumIIViz: React.FC<{ data?: any }> = () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const leftIdx = 0;
  const rightIdx = 1;
  const sum = nums[leftIdx] + nums[rightIdx];

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="bg-purple-700 text-white font-bold px-5 py-1.5 rounded-full text-sm shadow">
        Target: {target}
      </div>

      <div className="flex flex-col items-center gap-1 w-full">
        <p className="text-slate-400 text-xs mb-1">Sorted array — two pointers converging</p>

        <div className="flex gap-2 items-center justify-center">
          {nums.map((n, i) => {
            const isLeft = i === leftIdx;
            const isRight = i === rightIdx;
            const isMatch = isLeft || isRight;

            return (
              <div key={i} className="flex flex-col items-center gap-1">
                {isLeft && (
                  <div className="text-green-400 text-xs font-bold">L</div>
                )}
                {isRight && (
                  <div className="text-red-400 text-xs font-bold">R</div>
                )}
                {!isLeft && !isRight && <div className="text-xs invisible">_</div>}

                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 font-bold text-lg shadow ${
                    isLeft
                      ? 'border-green-400 bg-green-900/50 text-green-300'
                      : isRight
                      ? 'border-red-400 bg-red-900/50 text-red-300'
                      : 'border-slate-600 bg-slate-800 text-slate-400'
                  }`}
                >
                  {n}
                </div>

                <div className={`text-xs text-center ${isMatch ? 'text-slate-400' : 'text-transparent'}`}>
                  [{i}]
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm w-full justify-center">
        <span className="text-green-300 font-bold">{nums[leftIdx]}</span>
        <span className="text-slate-500">+</span>
        <span className="text-red-300 font-bold">{nums[rightIdx]}</span>
        <span className="text-slate-500">=</span>
        <span className={`font-bold text-lg ${sum === target ? 'text-yellow-400' : 'text-orange-400'}`}>
          {sum}
        </span>
        {sum === target && <span className="text-green-400 font-bold ml-1">= target ✓</span>}
      </div>

      {sum === target && (
        <div className="bg-green-900/30 border border-green-500 rounded-xl px-4 py-2 text-sm text-center w-full">
          <span className="text-green-400 font-semibold">Answer: </span>
          <span className="text-slate-300">indices [{leftIdx + 1}, {rightIdx + 1}] (1-indexed)</span>
        </div>
      )}

      <div className="bg-slate-800 border border-blue-500 rounded-lg px-3 py-2 text-xs text-slate-300 text-center">
        <span className="text-blue-400 font-semibold">Sorted property: </span>
        sum too large → move right left &nbsp;|&nbsp; sum too small → move left right
      </div>
    </div>
  );
};

export default TwoSumIIViz;
