import React from 'react';

interface Props { data: { [key: string]: any } }

const NodeCircle: React.FC<{ x: number; y: number; val: number; color?: string }> = ({ x, y, val, color = '#7c3aed' }) => (
  <>
    <circle cx={x} cy={y} r={20} fill={color} stroke="#fff" strokeWidth={2} />
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={13} fontWeight="bold">{val}</text>
  </>
);

const TreeSVG: React.FC<{ nodes: (number | null)[]; label: string; startX?: number }> = ({ nodes, label, startX = 0 }) => {
  const positions: { x: number; y: number }[] = [];
  const W = 200;
  const levelGap = 52;

  for (let i = 0; i < nodes.length; i++) {
    const level = Math.floor(Math.log2(i + 1));
    const posInLevel = i - (Math.pow(2, level) - 1);
    const nodesInLevel = Math.pow(2, level);
    const x = startX + (W / (nodesInLevel + 1)) * (posInLevel + 1);
    const y = 30 + level * levelGap;
    positions.push({ x, y });
  }

  const edges: JSX.Element[] = [];
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] === null) continue;
    const leftIdx = 2 * i + 1;
    const rightIdx = 2 * i + 2;
    if (leftIdx < nodes.length && nodes[leftIdx] !== null) {
      edges.push(<line key={`l${i}`} x1={positions[i].x} y1={positions[i].y} x2={positions[leftIdx].x} y2={positions[leftIdx].y} stroke="#6b7280" strokeWidth={1.5} />);
    }
    if (rightIdx < nodes.length && nodes[rightIdx] !== null) {
      edges.push(<line key={`r${i}`} x1={positions[i].x} y1={positions[i].y} x2={positions[rightIdx].x} y2={positions[rightIdx].y} stroke="#6b7280" strokeWidth={1.5} />);
    }
  }

  return (
    <>
      {edges}
      {nodes.map((val, i) => val !== null ? <NodeCircle key={i} x={positions[i].x} y={positions[i].y} val={val} /> : null)}
      <text x={startX + W / 2} y={185} textAnchor="middle" fill="#a78bfa" fontSize={12} fontWeight="600">{label}</text>
    </>
  );
};

const InvertTreeViz: React.FC<Props> = () => {
  const original = [4, 2, 7, 1, 3, 6, 9];
  const inverted = [4, 7, 2, 9, 6, 3, 1];

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-purple-300 font-semibold text-sm mb-2">Invert Binary Tree — Mirror Swap</h3>
      <svg width="100%" viewBox="0 0 460 200" className="max-w-lg">
        <TreeSVG nodes={original} label="Original" startX={10} />

        {/* Mirror arrow */}
        <g transform="translate(215, 95)">
          <line x1={0} y1={0} x2={30} y2={0} stroke="#facc15" strokeWidth={2} />
          <polygon points="30,0 22,-5 22,5" fill="#facc15" />
          <polygon points="0,0 8,-5 8,5" fill="#facc15" transform="rotate(180, 15, 0)" />
          <text x={15} y={-8} textAnchor="middle" fill="#facc15" fontSize={10}>swap</text>
        </g>

        <TreeSVG nodes={inverted} label="Inverted" startX={250} />
      </svg>
      <div className="flex gap-6 text-xs text-gray-400 mt-1">
        <span className="text-purple-400">Left ↔ Right at every node</span>
        <span className="text-green-400">Result: [4,7,2,9,6,3,1]</span>
      </div>
    </div>
  );
};

export default InvertTreeViz;
