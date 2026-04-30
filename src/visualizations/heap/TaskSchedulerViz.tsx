import React from 'react';

export default function TaskSchedulerViz() {
  const schedule = ['A', 'B', 'idle', 'A', 'B', 'idle', 'A', 'B'];

  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Tasks: AAABBB, cooldown n=2</p>
      <div className="flex gap-1 justify-center">
        {schedule.map((task, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center text-xs font-bold border-2 ${
              task === 'A' ? 'bg-blue-500/30 border-blue-400 text-blue-300'
              : task === 'B' ? 'bg-green-500/30 border-green-400 text-green-300'
              : 'bg-gray-700/50 border-gray-600 text-gray-500'
            }`}
          >
            <span>{task === 'idle' ? '💤' : task}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1 text-xs text-gray-500">
        {schedule.map((_, i) => <div key={i} className="w-10 text-center">{i}</div>)}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="bg-blue-500/20 rounded-lg p-2 text-center">
          <div className="text-lg">A</div>
          <div className="text-xs text-blue-300">×3 tasks</div>
        </div>
        <div className="bg-green-500/20 rounded-lg p-2 text-center">
          <div className="text-lg">B</div>
          <div className="text-xs text-green-300">×3 tasks</div>
        </div>
        <div className="bg-gray-700/50 rounded-lg p-2 text-center">
          <div className="text-lg">💤</div>
          <div className="text-xs text-gray-400">×2 idles</div>
        </div>
      </div>
      <div className="text-center bg-purple-500/20 rounded-lg py-2 border border-purple-500/30">
        <span className="text-purple-300 font-bold">Minimum intervals = 8</span>
      </div>
    </div>
  );
}
