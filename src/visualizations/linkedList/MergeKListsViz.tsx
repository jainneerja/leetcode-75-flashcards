import React from 'react';

export default function MergeKListsViz() {
  const lists = [[1, 4, 5], [1, 3, 4], [2, 6]];
  const heap = [1, 1, 2]; // initial heap (heads)
  const merged = [1, 1, 2, 3, 4, 4, 5, 6];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {lists.map((list, li) => {
          const colors = ['border-blue-400 bg-blue-500/20 text-blue-200', 'border-green-400 bg-green-500/20 text-green-200', 'border-yellow-400 bg-yellow-500/20 text-yellow-200'];
          return (
            <div key={li} className="text-center">
              <p className="text-xs text-gray-400 mb-1">List {li + 1}</p>
              <div className="flex items-center justify-center gap-0.5">
                {list.map((n, i) => (
                  <React.Fragment key={i}>
                    <div className={`w-8 h-8 rounded border flex items-center justify-center text-xs font-bold ${colors[li]}`}>{n}</div>
                    {i < list.length - 1 && <span className="text-gray-600 text-xs">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-slate-700/50 rounded-lg p-3 text-center">
        <p className="text-xs text-purple-300 mb-2 font-semibold">Min-Heap (initial heads)</p>
        <div className="flex justify-center gap-2">
          {heap.map((n, i) => (
            <div key={i} className="w-8 h-8 bg-orange-500/30 border border-orange-400 rounded flex items-center justify-center text-orange-300 font-bold text-sm">{n}</div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-1">Extract min → push to output → push next node</p>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-1 text-center">Merged output:</p>
        <div className="flex items-center justify-center gap-0.5 flex-wrap">
          {merged.map((n, i) => (
            <React.Fragment key={i}>
              <div className="w-8 h-8 bg-purple-500/30 border border-purple-400 rounded flex items-center justify-center text-purple-200 font-bold text-xs">{n}</div>
              {i < merged.length - 1 && <span className="text-gray-600 text-xs">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
