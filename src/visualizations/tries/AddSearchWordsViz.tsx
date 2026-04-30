import React from 'react';

export default function AddSearchWordsViz() {
  const words = ['bad', 'dad', 'mad'];
  const searches = [
    { query: '.ad', result: true, matches: ['bad', 'dad', 'mad'] },
    { query: 'b..', result: true, matches: ['bad'] },
    { query: '.b.', result: false, matches: [] },
  ];

  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs text-purple-300 font-semibold mb-2">Words added:</p>
        <div className="flex gap-2">
          {words.map(w => (
            <div key={w} className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded text-blue-300 font-mono text-sm">{w}</div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-purple-300 font-semibold mb-2">Search queries (. = wildcard):</p>
        <div className="space-y-2">
          {searches.map(s => (
            <div key={s.query} className={`flex items-center gap-3 rounded-lg p-2 border ${s.result ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
              <span className={`font-mono font-bold text-sm ${s.result ? 'text-green-400' : 'text-red-400'}`}>{s.query}</span>
              <span className={`text-xs font-bold ${s.result ? 'text-green-400' : 'text-red-400'}`}>{s.result ? '✓' : '✗'}</span>
              {s.matches.length > 0 && (
                <span className="text-xs text-gray-400">matches: {s.matches.join(', ')}</span>
              )}
              {!s.result && <span className="text-xs text-gray-500">no match</span>}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-gray-500">'.' triggers DFS through all 26 children at that level</p>
    </div>
  );
}
