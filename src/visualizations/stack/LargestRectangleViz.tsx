import React from 'react';

const heights = [2, 1, 5, 6, 2, 3];
const maxH = Math.max(...heights);
// Largest rectangle: bars 2&3 (heights 5,6), limited by 5, width 2 = area 10
const rectStart = 2, rectEnd = 3, rectH = 5;

export default function LargestRectangleViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200 font-medium">
        Histogram heights: [{heights.join(', ')}] — find the largest rectangle
      </p>
      <div className="flex items-end justify-center gap-1 h-32 relative">
        {heights.map((h, i) => {
          const barH = (h / maxH) * 110;
          const inRect = i >= rectStart && i <= rectEnd;
          return (
            <div key={i} className="flex flex-col items-center flex-1 relative">
              <div
                className={`w-full rounded-t-sm relative ${inRect ? 'bg-blue-500' : 'bg-purple-400/60'}`}
                style={{ height: `${barH}px` }}
              >
                {inRect && (
                  <div
                    className="absolute inset-x-0 bottom-0 bg-blue-300/30 border-2 border-blue-300"
                    style={{ height: `${(rectH / maxH) * 110}px` }}
                  />
                )}
              </div>
              <span className="text-xs text-gray-400 mt-1">{h}</span>
            </div>
          );
        })}
      </div>
      <div className="text-center bg-blue-500/20 rounded-lg py-2 border border-blue-500/30">
        <span className="text-blue-400 font-bold">Max Area = 5 × 2 = 10</span>
        <span className="text-gray-400 text-xs ml-2">(bars 2–3, limited by height 5)</span>
      </div>
      <p className="text-center text-xs text-gray-500">Monotonic stack finds left/right boundaries in O(n)</p>
    </div>
  );
}
