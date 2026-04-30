import React from 'react';

interface DayData {
  day: string;
  value: number;
}

const MaxSubarrayViz: React.FC<{ data?: any }> = () => {
  const days: DayData[] = [
    { day: 'Mon', value: -2 },
    { day: 'Tue', value: 1 },
    { day: 'Wed', value: -3 },
    { day: 'Thu', value: 4 },
    { day: 'Fri', value: -1 },
    { day: 'Sat', value: 2 },
    { day: 'Sun', value: 1 },
  ];
  const winStart = 3;
  const winEnd = 6;

  let runningSum = 0;
  const runningSums: number[] = [];
  for (let i = winStart; i <= winEnd; i++) {
    runningSum += days[i].value;
    runningSums.push(runningSum);
  }

  const maxVal = Math.max(...days.map(d => Math.abs(d.value)));

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="flex gap-2 items-end justify-center">
        {days.map((d, i) => {
          const inWindow = i >= winStart && i <= winEnd;
          const isPos = d.value >= 0;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`w-10 flex items-center justify-center rounded font-bold text-xs ${
                  isPos ? 'bg-opacity-80' : 'bg-opacity-60'
                } ${inWindow ? (isPos ? 'bg-green-600 text-white border-2 border-green-400' : 'bg-red-800 text-red-200 border-2 border-red-500') : 'bg-slate-700 text-slate-400 border border-slate-600'}`}
                style={{ height: `${Math.max(24, (Math.abs(d.value) / maxVal) * 60 + 16)}px` }}
              >
                {d.value > 0 ? '+' : ''}{d.value}
              </div>
              <span className={`text-xs font-semibold ${inWindow ? 'text-green-400' : 'text-slate-500'}`}>
                {d.day}
              </span>
              {inWindow && (
                <span className="text-green-500 text-[10px]">✓</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-green-900/30 border border-green-500 rounded-xl p-3 w-full">
        <p className="text-green-400 font-semibold text-sm mb-2">Winning subarray: {days[winStart].day} – {days[winEnd].day}</p>
        <div className="flex gap-2 items-center flex-wrap">
          {days.slice(winStart, winEnd + 1).map((d, i) => (
            <React.Fragment key={i}>
              <span className={`font-bold text-sm ${d.value >= 0 ? 'text-green-300' : 'text-red-400'}`}>
                {d.value > 0 ? '+' : ''}{d.value}
              </span>
              {i < winEnd - winStart && <span className="text-slate-500">+</span>}
            </React.Fragment>
          ))}
          <span className="text-slate-400 ml-1">= </span>
          <span className="text-yellow-400 font-bold text-lg ml-1">
            {days.slice(winStart, winEnd + 1).reduce((s, d) => s + d.value, 0)}
          </span>
        </div>
      </div>

      <div className="flex gap-3 text-xs w-full justify-center">
        <div className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-slate-300">
          <span className="text-purple-400 font-semibold">Kadane: </span>
          Extend or restart at each step
        </div>
      </div>
    </div>
  );
};

export default MaxSubarrayViz;
