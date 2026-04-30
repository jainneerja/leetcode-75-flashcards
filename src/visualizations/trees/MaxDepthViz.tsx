import React from 'react';

interface Props { data: { [key: string]: any } }

const MaxDepthViz: React.FC<Props> = () => {
  // Tree: [3,9,20,null,null,15,7]
  // Positions: level 0: root(3), level 1: 9,20, level 2: 15,7
  const nodes = [
    { val: 3,  x: 160, y: 30,  level: 1, deepPath: true  },
    { val: 9,  x: 80,  y: 90,  level: 2, deepPath: false },
    { val: 20, x: 240, y: 90,  level: 2, deepPath: true  },
    { val: 15, x: 190, y: 150, level: 3, deepPath: true  },
    { val: 7,  x: 290, y: 150, level: 3, deepPath: true  },
  ];

  const edges = [
    { x1: 160, y1: 30,  x2: 80,  y2: 90,  deep: false },
    { x1: 160, y1: 30,  x2: 240, y2: 90,  deep: true  },
    { x1: 240, y1: 90,  x2: 190, y2: 150, deep: true  },
    { x1: 240, y1: 90,  x2: 290, y2: 150, deep: true  },
  ];

  const levels = [
    { y: 30,  label: 'Level 1' },
    { y: 90,  label: 'Level 2' },
    { y: 150, label: 'Level 3' },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-purple-300 font-semibold text-sm mb-2">Maximum Depth — Level Tracking</h3>
      <svg width="100%" viewBox="0 0 400 195" className="max-w-md">
        {/* Level guide lines */}
        {levels.map((lv) => (
          <g key={lv.label}>
            <line x1={10} y1={lv.y} x2={330} y2={lv.y} stroke="#374151" strokeWidth={1} strokeDasharray="4,4" />
            <text x={345} y={lv.y + 5} fill="#6b7280" fontSize={11}>{lv.label}</text>
          </g>
        ))}

        {/* Edges */}
        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke={e.deep ? '#22c55e' : '#6b7280'} strokeWidth={e.deep ? 2.5 : 1.5} />
        ))}

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.val}>
            <circle cx={n.x} cy={n.y} r={20} fill={n.deepPath ? '#16a34a' : '#4b5563'} stroke="#fff" strokeWidth={2} />
            <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={13} fontWeight="bold">{n.val}</text>
          </g>
        ))}

        {/* Answer badge */}
        <rect x={120} y={172} width={120} height={20} rx={4} fill="#7c3aed" />
        <text x={180} y={186} textAnchor="middle" fill="#fff" fontSize={12} fontWeight="bold">Max Depth = 3</text>
      </svg>
      <div className="text-xs text-green-400 mt-1">Green path: 3 → 20 → 15 (or 7) — both reach depth 3</div>
    </div>
  );
};

export default MaxDepthViz;
