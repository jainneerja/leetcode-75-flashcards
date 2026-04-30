import React from 'react';

const points = [{ x: 1, y: 3, dist: 10, label: '(1,3)' }, { x: -2, y: 2, dist: 8, label: '(-2,2)' }, { x: 5, y: 8, dist: 89, label: '(5,8)' }, { x: 0, y: 1, dist: 1, label: '(0,1)' }];
const k = 2;

export default function KClosestPointsViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Find {k} closest points to origin (0,0)</p>
      <div className="flex justify-center">
        <svg width="200" height="180" viewBox="-6 -5 12 11">
          <line x1="-6" y1="0" x2="6" y2="0" stroke="#4b5563" strokeWidth="0.2"/>
          <line x1="0" y1="-5" x2="0" y2="6" stroke="#4b5563" strokeWidth="0.2"/>
          <circle cx="0" cy="0" r="0.3" fill="#facc15"/>
          {points.map((p, i) => {
            const closest = i === 1 || i === 3;
            return (
              <React.Fragment key={i}>
                <line x1="0" y1="0" x2={p.x} y2={-p.y} stroke={closest ? '#4ade80' : '#6b7280'} strokeWidth="0.12" strokeDasharray={closest ? '' : '0.3'}/>
                <circle cx={p.x} cy={-p.y} r="0.35" fill={closest ? '#16a34a' : '#4b5563'} stroke={closest ? '#4ade80' : '#6b7280'} strokeWidth="0.15"/>
                <text x={p.x + 0.4} y={-p.y + 0.15} fill={closest ? '#4ade80' : '#9ca3af'} fontSize="0.5">{p.label}</text>
              </React.Fragment>
            );
          })}
        </svg>
      </div>
      <div className="space-y-1">
        {points.map((p, i) => {
          const closest = i === 1 || i === 3;
          return (
            <div key={i} className={`flex items-center gap-2 text-xs px-3 py-1 rounded ${closest ? 'bg-green-500/20 border border-green-500/30' : 'bg-white/5'}`}>
              <span className={closest ? 'text-green-400 font-bold' : 'text-gray-400'}>{p.label}</span>
              <span className="text-gray-500 ml-auto">dist² = {p.dist}</span>
              {closest && <span className="text-green-400">✓ K-closest</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
