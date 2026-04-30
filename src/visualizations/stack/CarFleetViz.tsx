import React from 'react';

const cars = [
  { pos: 10, speed: 2, color: 'bg-red-400', fleet: 1 },
  { pos: 8, speed: 4, color: 'bg-red-400', fleet: 1 },
  { pos: 5, speed: 1, color: 'bg-yellow-400', fleet: 2 },
  { pos: 3, speed: 3, color: 'bg-blue-400', fleet: 3 },
  { pos: 0, speed: 1, color: 'bg-blue-400', fleet: 3 },
];
const target = 12;

export default function CarFleetViz() {
  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-purple-200 font-medium">
        Target: {target} miles — cars forming fleets (same color = same fleet)
      </p>
      <div className="relative bg-slate-800 rounded-xl p-4">
        <div className="relative h-8 mb-4">
          <div className="absolute inset-0 bg-gray-700 rounded-full h-2 top-3" />
          {cars.map((car, i) => (
            <div
              key={i}
              className={`absolute -top-1 w-8 h-6 ${car.color} rounded-md flex items-center justify-center text-xs font-bold text-white shadow`}
              style={{ left: `${(car.pos / target) * 90}%` }}
            >
              🚗
            </div>
          ))}
          <div className="absolute right-0 top-0 text-green-400 font-bold text-sm">🏁{target}</div>
        </div>
        <div className="space-y-1 mt-6">
          {cars.map((car, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div className={`w-3 h-3 rounded-sm ${car.color}`} />
              <span className="text-gray-300">pos={car.pos}, speed={car.speed}</span>
              <span className="text-gray-500">→ arrives in {(target - car.pos) / car.speed}h → Fleet {car.fleet}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center bg-purple-500/20 rounded-lg py-2 border border-purple-500/30">
        <span className="text-purple-300 font-bold">Answer: 3 fleets</span>
        <span className="text-gray-400 text-xs ml-2">(red, yellow, blue groups)</span>
      </div>
    </div>
  );
}
