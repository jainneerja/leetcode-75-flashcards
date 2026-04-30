import React from 'react';

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const left = 1, right = 8;
const area = Math.min(heights[left], heights[right]) * (right - left);
const maxH = Math.max(...heights);

export default function ContainerWaterViz() {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-purple-200 font-medium">
        Heights: [{heights.join(', ')}] — find the pair of walls holding the most water
      </p>
      <div className="flex items-end justify-center gap-1 h-36 px-4">
        {heights.map((h, i) => {
          const isLeft = i === left;
          const isRight = i === right;
          const isWater = i > left && i < right;
          const waterH = Math.min(heights[left], heights[right]);
          return (
            <div key={i} className="flex flex-col items-center flex-1 gap-0">
              <div className="w-full flex flex-col justify-end" style={{ height: `${(maxH / maxH) * 128}px` }}>
                {isWater && (
                  <div
                    className="w-full bg-blue-400/40 border-t border-blue-400"
                    style={{ height: `${(waterH / maxH) * 128}px` }}
                  />
                )}
                <div
                  className={`w-full rounded-t-sm ${isLeft || isRight ? 'bg-green-500' : 'bg-purple-400/60'}`}
                  style={{ height: `${(h / maxH) * 128}px` }}
                />
              </div>
              <span className={`text-xs mt-1 font-bold ${isLeft || isRight ? 'text-green-400' : 'text-gray-400'}`}>{h}</span>
            </div>
          );
        })}
      </div>
      <div className="text-center bg-green-500/20 rounded-lg py-2 border border-green-500/30">
        <span className="text-green-400 font-bold">Max Area = min(8, 7) × 7 = {area}</span>
        <span className="text-gray-400 text-xs ml-2">(indices 1 and 8, walls highlighted green)</span>
      </div>
    </div>
  );
}
