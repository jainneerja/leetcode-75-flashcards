import React from 'react';

const nodes = [1, 2, 3, 4, 5];

function Node({ val, color = 'purple' }: { val: number; color?: string }) {
  const colorMap: Record<string, string> = {
    purple: 'bg-purple-500/30 border-purple-400 text-purple-200',
    green: 'bg-green-500/30 border-green-400 text-green-200',
  };
  return (
    <div className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center font-bold text-sm ${colorMap[color]}`}>
      {val}
    </div>
  );
}

function Arrow({ color = 'text-gray-400' }: { color?: string }) {
  return <span className={`text-xl font-bold ${color}`}>→</span>;
}

export default function ReverseLinkedListViz() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-gray-400 mb-2 text-center">Original list:</p>
        <div className="flex items-center justify-center gap-2">
          {nodes.map((n, i) => (
            <React.Fragment key={i}>
              <Node val={n} color="purple" />
              {i < nodes.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
          <span className="text-gray-500 text-sm ml-1">→ null</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-xs text-gray-400 bg-slate-700/40 rounded-lg px-4 py-2">
        <span className="text-yellow-400 font-bold">prev=null</span>
        <span>·</span>
        <span className="text-blue-400 font-bold">curr=1</span>
        <span>·</span>
        <span className="text-pink-400 font-bold">next=curr.next</span>
        <span>· reverse · advance</span>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2 text-center">Reversed list:</p>
        <div className="flex items-center justify-center gap-2">
          {[...nodes].reverse().map((n, i) => (
            <React.Fragment key={i}>
              <Node val={n} color="green" />
              {i < nodes.length - 1 && <Arrow color="text-green-400" />}
            </React.Fragment>
          ))}
          <span className="text-gray-500 text-sm ml-1">→ null</span>
        </div>
      </div>
    </div>
  );
}
