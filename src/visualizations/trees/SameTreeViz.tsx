import React from 'react';

interface Props { data: { [key: string]: any } }

const SameTreeViz: React.FC<Props> = () => {
  // Both trees: [1,2,3]
  const treeP = [
    { val: 1, x: 80,  y: 30  },
    { val: 2, x: 40,  y: 90  },
    { val: 3, x: 120, y: 90  },
  ];
  const treeQ = [
    { val: 1, x: 260, y: 30  },
    { val: 2, x: 220, y: 90  },
    { val: 3, x: 300, y: 90  },
  ];
  const edgesP = [{ x1: 80, y1: 30, x2: 40, y2: 90 }, { x1: 80, y1: 30, x2: 120, y2: 90 }];
  const edgesQ = [{ x1: 260, y1: 30, x2: 220, y2: 90 }, { x1: 260, y1: 30, x2: 300, y2: 90 }];

  const comparisons = [
    { label: '1 = 1', y: 30  },
    { label: '2 = 2', y: 90  },
    { label: '3 = 3', y: 90  },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-purple-300 font-semibold text-sm mb-2">Same Tree — Simultaneous DFS Comparison</h3>
      <svg width="100%" viewBox="0 0 380 160" className="max-w-md">
        {/* Labels */}
        <text x={80}  y={14} textAnchor="middle" fill="#818cf8" fontSize={11} fontWeight="600">Tree P</text>
        <text x={260} y={14} textAnchor="middle" fill="#818cf8" fontSize={11} fontWeight="600">Tree Q</text>

        {/* Edges P */}
        {edgesP.map((e, i) => <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="#6b7280" strokeWidth={1.5} />)}
        {/* Edges Q */}
        {edgesQ.map((e, i) => <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="#6b7280" strokeWidth={1.5} />)}

        {/* Nodes P */}
        {treeP.map((n) => (
          <g key={`p${n.val}`}>
            <circle cx={n.x} cy={n.y} r={20} fill="#7c3aed" stroke="#22c55e" strokeWidth={2.5} />
            <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={13} fontWeight="bold">{n.val}</text>
          </g>
        ))}
        {/* Nodes Q */}
        {treeQ.map((n) => (
          <g key={`q${n.val}`}>
            <circle cx={n.x} cy={n.y} r={20} fill="#7c3aed" stroke="#22c55e" strokeWidth={2.5} />
            <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={13} fontWeight="bold">{n.val}</text>
          </g>
        ))}

        {/* Comparison arrows and checks */}
        {[{ y: 30, label: 'root: 1=1' }, { y: 90, leftLabel: 'left: 2=2', rightLabel: 'right: 3=3' }].map((row, i) => (
          i === 0 ? (
            <g key={i}>
              <line x1={105} y1={row.y} x2={235} y2={row.y} stroke="#22c55e" strokeWidth={1} strokeDasharray="3,3" />
              <text x={170} y={row.y - 6} textAnchor="middle" fill="#22c55e" fontSize={10}>{row.label} ✓</text>
            </g>
          ) : (
            <g key={i}>
              <line x1={65} y1={row.y} x2={195} y2={row.y} stroke="#22c55e" strokeWidth={1} strokeDasharray="3,3" />
              <text x={130} y={row.y - 6} textAnchor="middle" fill="#22c55e" fontSize={10}>{row.leftLabel} ✓</text>
              <line x1={145} y1={row.y} x2={275} y2={row.y} stroke="#22c55e" strokeWidth={1} strokeDasharray="3,3" />
              <text x={210} y={row.y + 18} textAnchor="middle" fill="#22c55e" fontSize={10}>{row.rightLabel} ✓</text>
            </g>
          )
        ))}

        {/* Result */}
        <rect x={130} y={130} width={120} height={22} rx={4} fill="#15803d" />
        <text x={190} y={145} textAnchor="middle" fill="#fff" fontSize={12} fontWeight="bold">✓ Same Tree = true</text>
      </svg>
    </div>
  );
};

export default SameTreeViz;
