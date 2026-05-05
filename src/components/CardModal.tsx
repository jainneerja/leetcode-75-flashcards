import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle, RefreshCw, Circle } from 'lucide-react';
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

const STATUS_BUTTONS: { status: ProgressStatus; label: string; icon: React.ReactNode; style: string; activeStyle: string }[] = [
  {
    status: 'known',
    label: 'Known',
    icon: <CheckCircle size={15} />,
    style: 'bg-purple-500/20 border-purple-400/50 text-purple-300 hover:bg-purple-500/30',
    activeStyle: 'bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/30',
  },
  {
    status: 'review',
    label: 'Review',
    icon: <RefreshCw size={15} />,
    style: 'bg-blue-500/20 border-blue-400/50 text-blue-300 hover:bg-blue-500/30',
    activeStyle: 'bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/30',
  },
  {
    status: 'unseen',
    label: 'Unseen',
    icon: <Circle size={15} />,
    style: 'bg-white/10 border-white/20 text-gray-400 hover:bg-white/15',
    activeStyle: 'bg-white/20 border-white/40 text-white',
  },
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
        className="w-full max-w-3xl relative"
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all border border-white/20 z-10"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all border border-white/20 z-10"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Card flip container */}
        <div className="card-flip-container">
          <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
            {/* Front */}
            <div
              className="card-face-front bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-h-[75vh]"
              onClick={onFlip}
              style={{ cursor: 'pointer' }}
            >
              <CardFront card={card} />
            </div>
            {/* Back */}
            <div
              className="card-face-back bg-gradient-to-br from-purple-700 via-purple-800 to-blue-900 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[75vh]"
              onClick={onFlip}
              style={{ cursor: 'pointer' }}
            >
              <CardBack card={card} />
            </div>
          </div>
        </div>

        {/* Progress controls */}
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-gray-400 text-xs w-full text-center sm:w-auto">Mark as:</span>
          {STATUS_BUTTONS.map(btn => {
            const isActive = progressStatus === btn.status;
            return (
              <button
                key={btn.status}
                onClick={e => { e.stopPropagation(); onStatusChange(btn.status); }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-semibold transition-all ${
                  isActive ? btn.activeStyle : btn.style
                } ${isActive ? 'scale-105 shadow-lg' : ''}`}
              >
                {btn.icon}
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Keyboard hint — desktop only */}
        <p className="hidden md:block text-center text-gray-600 text-xs mt-2">
          Space to flip · Esc to close · ← → to navigate
        </p>
      </div>
    </div>
  );
}
