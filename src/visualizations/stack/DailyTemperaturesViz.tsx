import React from 'react';

const temps = [73, 74, 75, 71, 69, 72, 76, 73];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
const answer = [1, 1, 4, 2, 1, 1, 0, 0];
const maxT = Math.max(...temps);
const minT = Math.min(...temps);

export default function DailyTemperaturesViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200 font-medium">
        How many days to wait for a warmer temperature?
      </p>
      <div className="flex items-end justify-center gap-1 h-28">
        {temps.map((t, i) => {
          const h = ((t - minT) / (maxT - minT)) * 80 + 20;
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              <span className="text-xs text-yellow-400 font-bold mb-1">{answer[i]}</span>
              <div
                className="w-full bg-gradient-to-t from-orange-600 to-yellow-400 rounded-t-sm"
                style={{ height: `${h}px` }}
              />
              <span className="text-xs text-gray-400 mt-1">{t}°</span>
              <span className="text-xs text-gray-500">{days[i]}</span>
            </div>
          );
        })}
      </div>
      <div className="bg-slate-700/50 rounded-lg p-2 text-center">
        <span className="text-xs text-gray-400">Result: </span>
        <span className="text-xs text-yellow-400 font-mono">[{answer.join(', ')}]</span>
        <span className="text-xs text-gray-500 ml-1">(0 = no warmer day after)</span>
      </div>
    </div>
  );
}
