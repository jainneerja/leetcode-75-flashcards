import React from 'react';

export default function CourseScheduleIIViz() {
  const courses = [0, 1, 2, 3];
  const prereqs = [[1,0],[2,0],[3,1],[3,2]];
  const inDegrees = [0, 1, 1, 2];
  const order = [0, 1, 2, 3];

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Kahn's algorithm — BFS topological sort</p>
      <div className="grid grid-cols-4 gap-2">
        {courses.map(c => (
          <div key={c} className="text-center">
            <div className={`w-10 h-10 mx-auto rounded-lg border-2 flex items-center justify-center font-bold text-lg ${inDegrees[c] === 0 ? 'border-green-400 bg-green-500/20 text-green-300' : 'border-purple-400 bg-purple-500/20 text-purple-200'}`}>
              {c}
            </div>
            <p className="text-xs text-gray-500 mt-1">in: {inDegrees[c]}</p>
          </div>
        ))}
      </div>
      <div className="bg-slate-700/50 rounded-lg p-3 text-xs space-y-1">
        <p className="text-yellow-400 font-semibold">Queue starts with in-degree 0 nodes: [0]</p>
        {[
          'Process 0 → decrement neighbors 1,2 → queue=[1,2]',
          'Process 1 → decrement neighbor 3 (in=1) → queue=[2]',
          'Process 2 → decrement neighbor 3 (in=0) → queue=[3]',
          'Process 3 → done',
        ].map((step, i) => (
          <p key={i} className="text-gray-400">Step {i+1}: {step}</p>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1">
        {order.map((c, i) => (
          <React.Fragment key={i}>
            <div className="w-10 h-10 bg-purple-500/30 border-2 border-purple-400 rounded-lg flex items-center justify-center font-bold text-purple-200">
              {c}
            </div>
            {i < order.length - 1 && <span className="text-purple-400">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
