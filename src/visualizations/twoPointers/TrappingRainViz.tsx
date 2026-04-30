import React from 'react';

const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const maxH = Math.max(...heights);

function waterAt(i: number): number {
  const maxL = Math.max(...heights.slice(0, i + 1));
  const maxR = Math.max(...heights.slice(i));
  return Math.max(0, Math.min(maxL, maxR) - heights[i]);
}

const totalWater = heights.reduce((acc, _, i) => acc + waterAt(i), 0);

export default function TrappingRainViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200 font-medium">
        Elevation map — blue cells show trapped water
      </p>
      <div className="flex items-end justify-center gap-0.5 h-28">
        {heights.map((h, i) => {
          const water = waterAt(i);
          const barH = (h / maxH) * 96;
          const waterH = (water / maxH) * 96;
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="w-full flex flex-col justify-end" style={{ height: '96px' }}>
                {water > 0 && (
                  <div className="w-full bg-blue-400/70" style={{ height: `${waterH}px` }} />
                )}
                {h > 0 && (
                  <div className="w-full bg-slate-500 rounded-t-sm" style={{ height: `${barH}px` }} />
                )}
              </div>
              <span className="text-xs text-gray-500 mt-0.5">{h}</span>
            </div>
          );
        })}
      </div>
      <div className="text-center bg-blue-500/20 rounded-lg py-2 border border-blue-500/30">
        <span className="text-blue-400 font-bold">Total Trapped Water = {totalWater} units</span>
      </div>
    </div>
  );
}
