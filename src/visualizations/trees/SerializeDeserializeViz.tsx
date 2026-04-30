import React from 'react';

export default function SerializeDeserializeViz() {
  const serialized = '1,2,#,#,3,4,#,#,5,#,#';

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <svg width="180" height="110" viewBox="0 0 180 110">
          <line x1="90" y1="20" x2="45" y2="55" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="90" y1="20" x2="135" y2="55" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="135" y1="55" x2="110" y2="90" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="135" y1="55" x2="162" y2="90" stroke="#6b7280" strokeWidth="1.5"/>
          {[{x:90,y:20,v:'1'},{x:45,y:55,v:'2'},{x:135,y:55,v:'3'},{x:110,y:90,v:'4'},{x:162,y:90,v:'5'}].map((n,i) => (
            <React.Fragment key={i}>
              <circle cx={n.x} cy={n.y} r="13" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1.5"/>
              <text x={n.x} y={n.y+5} textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">{n.v}</text>
            </React.Fragment>
          ))}
        </svg>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <div className="h-px flex-1 bg-gray-600"/>
        <span className="text-purple-400">serialize (pre-order)</span>
        <div className="h-px flex-1 bg-gray-600"/>
      </div>
      <div className="bg-slate-800 rounded-lg p-3 font-mono text-xs overflow-x-auto">
        <span className="text-green-400">"</span>
        {serialized.split(',').map((t, i) => (
          <span key={i}>
            <span className={t === '#' ? 'text-gray-500' : 'text-yellow-400'}>{t}</span>
            {i < serialized.split(',').length - 1 && <span className="text-gray-600">,</span>}
          </span>
        ))}
        <span className="text-green-400">"</span>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <div className="h-px flex-1 bg-gray-600"/>
        <span className="text-blue-400">deserialize → identical tree ✓</span>
        <div className="h-px flex-1 bg-gray-600"/>
      </div>
      <p className="text-center text-xs text-gray-500"># = null node (sentinel). Pre-order traversal preserves structure.</p>
    </div>
  );
}
