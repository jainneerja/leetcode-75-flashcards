import React from 'react';

export default function CloneGraphViz() {
  const nodes = [
    { id: 1, x: 60, y: 40 },
    { id: 2, x: 140, y: 40 },
    { id: 3, x: 140, y: 120 },
    { id: 4, x: 60, y: 120 },
  ];
  const edges = [[0,1],[1,2],[2,3],[3,0]];

  function Graph({ offsetX, color, label }: { offsetX: number; color: string; label: string }) {
    return (
      <g transform={`translate(${offsetX}, 0)`}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#4b5563" strokeWidth="1.5"/>
        ))}
        {nodes.map(n => (
          <React.Fragment key={n.id}>
            <circle cx={n.x} cy={n.y} r="16" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5"/>
            <text x={n.x} y={n.y + 5} textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">{n.id}</text>
          </React.Fragment>
        ))}
        <text x="100" y="155" textAnchor="middle" fill="#9ca3af" fontSize="11">{label}</text>
      </g>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200">Deep copy a graph — nodes and all edges duplicated</p>
      <svg width="340" height="170" viewBox="0 0 340 170" className="mx-auto">
        <Graph offsetX={0} color="#7c3aed" label="Original" />
        <text x="170" y="85" textAnchor="middle" fill="#6b7280" fontSize="20">→</text>
        <Graph offsetX={170} color="#065f46" label="Clone (new nodes)" />
      </svg>
      <div className="text-center bg-purple-500/10 rounded-lg py-2 text-xs text-gray-400">
        HashMap maps original node → clone. DFS ensures each node is cloned exactly once.
      </div>
    </div>
  );
}
