import React from 'react';

export default function CourseScheduleViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200">Can you complete all courses? (no circular deps)</p>
      <div className="flex justify-center">
        <svg width="300" height="100" viewBox="0 0 300 100">
          {/* Arrows */}
          {[{x1:55,y1:50,x2:105,y2:50},{x1:155,y1:50,x2:205,y2:50},{x1:255,y1:50,x2:295,y2:50}].map((a,i) => (
            <React.Fragment key={i}>
              <line {...a} stroke="#4ade80" strokeWidth="2" markerEnd="url(#arr)"/>
            </React.Fragment>
          ))}
          <defs>
            <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80"/>
            </marker>
          </defs>
          {[{x:30,y:50,label:'CS101',emoji:'💻'},{x:130,y:50,label:'CS201',emoji:'🌳'},{x:230,y:50,label:'CS202',emoji:'⚙️'}].map((n,i) => (
            <React.Fragment key={i}>
              <rect x={n.x-28} y={n.y-18} width="56" height="36" rx="8" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5"/>
              <text x={n.x} y={n.y-4} textAnchor="middle" fill="white" fontSize="14">{n.emoji}</text>
              <text x={n.x} y={n.y+12} textAnchor="middle" fill="#a78bfa" fontSize="8">{n.label}</text>
            </React.Fragment>
          ))}
        </svg>
      </div>
      <div className="flex justify-center gap-3 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-white/20 border border-white/40"/>Unvisited (0)</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-500/60"/>Visiting (1)</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-500/60"/>Done (2)</div>
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">No cycle detected → canFinish = true ✓</span>
      </div>
    </div>
  );
}
