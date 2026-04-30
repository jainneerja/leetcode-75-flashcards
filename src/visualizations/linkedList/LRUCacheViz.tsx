import React from 'react';

export default function LRUCacheViz() {
  const states = [
    { label: 'put(1,"A"), put(2,"B"), put(3,"C")', cache: ['A(1)', 'B(2)', 'C(3)'], note: 'capacity=3, MRU→LRU' },
    { label: 'get(1) → moves 1 to front', cache: ['A(1)', 'C(3)', 'B(2)'], note: '1 accessed → front' },
    { label: 'put(4,"D") → evict LRU (B)', cache: ['D(4)', 'A(1)', 'C(3)'], note: 'B evicted (least recent)' },
  ];

  return (
    <div className="space-y-3">
      <p className="text-center text-xs text-purple-300 font-semibold">DLL (Head=MRU) + HashMap = O(1) get/put</p>
      {states.map((s, si) => (
        <div key={si} className="bg-white/5 rounded-lg p-3">
          <p className="text-xs text-yellow-400 mb-2 font-mono">{s.label}</p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-green-400 mr-1">MRU</span>
            {s.cache.map((item, i) => (
              <React.Fragment key={i}>
                <div className={`px-3 py-1.5 rounded border text-xs font-bold ${i === 0 ? 'border-green-400 bg-green-500/20 text-green-300' : i === s.cache.length - 1 && si === 2 ? 'border-red-400/30 bg-red-500/10 text-red-300/50' : 'border-purple-400/50 bg-purple-500/10 text-purple-200'}`}>
                  {item}
                </div>
                {i < s.cache.length - 1 && <span className="text-gray-500 text-xs">↔</span>}
              </React.Fragment>
            ))}
            <span className="text-xs text-red-400 ml-1">LRU</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{s.note}</p>
        </div>
      ))}
    </div>
  );
}
