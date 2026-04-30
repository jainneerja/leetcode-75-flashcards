import React from 'react';

export default function MedianTwoArraysViz() {
  const nums1 = [1, 3];
  const nums2 = [2];
  const merged = [1, 2, 3];

  return (
    <div className="space-y-4">
      <div className="flex gap-4 justify-center">
        <div className="text-center">
          <p className="text-xs text-purple-300 mb-2 font-semibold">nums1</p>
          <div className="flex gap-1">
            {nums1.map((n, i) => (
              <div key={i} className="w-10 h-10 bg-blue-500/30 border border-blue-500 rounded flex items-center justify-center text-white font-bold">
                {n}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-purple-300 mb-2 font-semibold">nums2</p>
          <div className="flex gap-1">
            {nums2.map((n, i) => (
              <div key={i} className="w-10 h-10 bg-green-500/30 border border-green-500 rounded flex items-center justify-center text-white font-bold">
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px flex-1 bg-gray-600" />
        <span className="text-gray-400 text-sm">merge & sort</span>
        <div className="h-px flex-1 bg-gray-600" />
      </div>
      <div className="flex gap-1 justify-center">
        {merged.map((n, i) => (
          <div
            key={i}
            className={`w-12 h-12 rounded flex items-center justify-center font-bold text-lg border-2 ${
              i === 1 ? 'bg-yellow-400/30 border-yellow-400 text-yellow-300 scale-110' : 'bg-white/10 border-white/20 text-white'
            }`}
          >
            {n}
          </div>
        ))}
      </div>
      <div className="text-center bg-yellow-500/20 rounded-lg py-2 border border-yellow-500/30">
        <span className="text-yellow-400 font-bold">Median = 2.0</span>
        <span className="text-gray-400 text-xs ml-2">(middle of merged array)</span>
      </div>
      <p className="text-center text-xs text-gray-500">Binary search on partition of smaller array → O(log(min(m,n)))</p>
    </div>
  );
}
