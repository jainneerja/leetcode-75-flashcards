import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ProgressStats {
  known: number;
  review: number;
  unseen: number;
  total: number;
}

interface ProgressTrackerProps {
  stats: ProgressStats;
  onReset: () => void;
}

export default function ProgressTracker({ stats, onReset }: ProgressTrackerProps) {
  const { known, review, unseen, total } = stats;

  const knownPct = total > 0 ? Math.round((known / total) * 100) : 0;
  const reviewPct = total > 0 ? Math.round((review / total) * 100) : 0;
  const unseenPct = total > 0 ? Math.round((unseen / total) * 100) : 0;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Progress</h3>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 px-2 py-1 rounded-lg transition-colors"
          title="Reset all progress"
        >
          <RotateCcw size={12} />
          Reset
        </button>
      </div>

      {/* Stacked bar */}
      <div className="flex rounded-full overflow-hidden h-2 mb-3 bg-white/10">
        {knownPct > 0 && (
          <div
            className="bg-green-500 transition-all duration-500"
            style={{ width: `${knownPct}%` }}
          />
        )}
        {reviewPct > 0 && (
          <div
            className="bg-yellow-400 transition-all duration-500"
            style={{ width: `${reviewPct}%` }}
          />
        )}
        {unseenPct > 0 && (
          <div
            className="bg-white/20 transition-all duration-500"
            style={{ width: `${unseenPct}%` }}
          />
        )}
      </div>

      {/* Stats row */}
      <div className="flex justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-green-400 font-medium">{known}</span>
          <span className="text-gray-400">Known</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="text-yellow-400 font-medium">{review}</span>
          <span className="text-gray-400">Review</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <span className="text-gray-300 font-medium">{unseen}</span>
          <span className="text-gray-400">Unseen</span>
        </div>
      </div>
    </div>
  );
}
