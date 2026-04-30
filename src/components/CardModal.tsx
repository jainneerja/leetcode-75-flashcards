import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { FlashCard, ProgressStatus } from '../types/card';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface Props {
  card: FlashCard;
  isFlipped: boolean;
  onFlip: () => void;
  onClose: () => void;
  progressStatus: ProgressStatus;
  onStatusChange: (status: ProgressStatus) => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const STATUS_BUTTONS: { status: ProgressStatus; label: string; emoji: string; style: string }[] = [
  { status: 'known', label: 'Known', emoji: '✅', style: 'bg-green-500/20 border-green-500/50 text-green-400 hover:bg-green-500/30' },
  { status: 'review', label: 'Review', emoji: '🔄', style: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/30' },
  { status: 'unseen', label: 'Unseen', emoji: '⬜', style: 'bg-white/10 border-white/20 text-gray-400 hover:bg-white/15' },
];

export default function CardModal({
  card, isFlipped, onFlip, onClose,
  progressStatus, onStatusChange,
  onPrev, onNext, hasPrev, hasNext,
}: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') { e.preventDefault(); onFlip(); }
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onFlip, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors p-1"
        >
          <X size={28} />
        </button>

        {/* Nav arrows */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-x-14 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 translate-x-14 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all border border-white/20"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Card flip container */}
        <div className="card-flip-container">
          <div
            className={`card-inner ${isFlipped ? 'flipped' : ''}`}
            onClick={onFlip}
            style={{ cursor: 'pointer' }}
          >
            {/* Front */}
            <div className="card-face bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[80vh]">
              <CardFront card={card} />
            </div>
            {/* Back */}
            <div className="card-face card-back-face bg-gradient-to-br from-purple-700 via-purple-800 to-blue-900 rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[80vh]"
              style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
            >
              <CardBack card={card} />
            </div>
          </div>
        </div>

        {/* Progress controls */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="text-gray-400 text-xs">Mark as:</span>
          {STATUS_BUTTONS.map(btn => (
            <button
              key={btn.status}
              onClick={e => { e.stopPropagation(); onStatusChange(btn.status); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-semibold transition-all ${btn.style} ${progressStatus === btn.status ? 'ring-2 ring-offset-1 ring-offset-transparent ring-current scale-105' : ''}`}
            >
              <span>{btn.emoji}</span>
              {btn.label}
            </button>
          ))}
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-gray-600 text-xs mt-2">
          Space to flip · Esc to close · ← → to navigate
        </p>
      </div>
    </div>
  );
}
