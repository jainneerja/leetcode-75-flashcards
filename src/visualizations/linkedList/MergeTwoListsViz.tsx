import React from 'react';

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
const merged = [1, 1, 2, 3, 4, 4];
const sources = [0, 1, 0, 1, 0, 1]; // 0=list1, 1=list2

export default function MergeTwoListsViz() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 justify-center">
        {[list1, list2].map((list, li) => (
          <div key={li} className="text-center">
            <p className="text-xs font-semibold mb-2" style={{ color: li === 0 ? '#60a5fa' : '#4ade80' }}>
              List {li + 1}
            </p>
            <div className="flex items-center gap-1">
              {list.map((n, i) => (
                <React.Fragment key={i}>
                  <div className={`w-9 h-9 rounded border-2 flex items-center justify-center font-bold text-sm ${li === 0 ? 'border-blue-400 bg-blue-500/20 text-blue-200' : 'border-green-400 bg-green-500/20 text-green-200'}`}>
                    {n}
                  </div>
                  {i < list.length - 1 && <span className="text-gray-500">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
        <div className="h-px flex-1 bg-gray-600" />
        compare heads, take smaller
        <div className="h-px flex-1 bg-gray-600" />
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-2">Merged:</p>
        <div className="flex items-center justify-center gap-1 flex-wrap">
          {merged.map((n, i) => (
            <React.Fragment key={i}>
              <div className={`w-9 h-9 rounded border-2 flex items-center justify-center font-bold text-sm ${sources[i] === 0 ? 'border-blue-400 bg-blue-500/20 text-blue-200' : 'border-green-400 bg-green-500/20 text-green-200'}`}>
                {n}
              </div>
              {i < merged.length - 1 && <span className="text-gray-500 text-xs">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
