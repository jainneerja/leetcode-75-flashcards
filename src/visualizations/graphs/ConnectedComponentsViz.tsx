import React from 'react';

export default function ConnectedComponentsViz() {
  const nodes = [
    { id: 0, x: 60, y: 50, comp: 0 },
    { id: 1, x: 120, y: 30, comp: 0 },
    { id: 2, x: 110, y: 90, comp: 0 },
    { id: 3, x: 200, y: 40, comp: 1 },
    { id: 4, x: 200, y: 100, comp: 1 },
  ];
  const edges = [[0,1],[1,2],[3,4]];
  const compColors = ['#7c3aed', '#065f46'];
  const compBorder = ['#a78bfa', '#4ade80'];

  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">5 nodes, 3 edges → how many sub-networks?</p>
      <div className="flex justify-center">
        <svg width="280" height="140" viewBox="0 0 280 140">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke={compBorder[nodes[a].comp]} strokeWidth="2"/>
          ))}
          {nodes.map(n => (
            <React.Fragment key={n.id}>
              <circle cx={n.x} cy={n.y} r="16" fill={compColors[n.comp]} fillOpacity="0.4" stroke={compBorder[n.comp]} strokeWidth="2"/>
              <text x={n.x} y={n.y + 5} textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">{n.id}</text>
            </React.Fragment>
          ))}
          <rect x="30" y="5" width="110" height="110" rx="8" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="4"/>
          <rect x="170" y="20" width="80" height="90" rx="8" fill="none" stroke="#4ade80" strokeWidth="1" strokeDasharray="4"/>
          <text x="85" y="125" textAnchor="middle" fill="#a78bfa" fontSize="10">Component 1</text>
          <text x="210" y="125" textAnchor="middle" fill="#4ade80" fontSize="10">Component 2</text>
        </svg>
      </div>
      <div className="bg-slate-700/40 rounded-lg p-2 text-xs text-center">
        <p className="text-gray-400">Union-Find: parent=[0,0,0,3,3] → <span className="text-yellow-400 font-bold">2 distinct roots</span></p>
      </div>
      <div className="text-center bg-purple-500/20 rounded-lg py-2 border border-purple-500/30">
        <span className="text-purple-300 font-bold">Answer: 2 connected components</span>
      </div>
    </div>
  );
}
