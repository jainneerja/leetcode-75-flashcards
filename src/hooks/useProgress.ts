import { useState, useCallback } from 'react';
import { CardProgress, ProgressStatus } from '../types/card';

const STORAGE_KEY = 'lc75_progress';

function loadProgress(): CardProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: CardProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore storage errors
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<CardProgress>(loadProgress);

  const setCardStatus = useCallback((cardId: string, status: ProgressStatus) => {
    setProgress(prev => {
      const next = { ...prev, [cardId]: status };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({});
    saveProgress({});
  }, []);

  const getStats = useCallback(
    (totalCards: number) => {
      const known = Object.values(progress).filter(s => s === 'known').length;
      const review = Object.values(progress).filter(s => s === 'review').length;
      const unseen = totalCards - known - review;
      return { known, review, unseen, total: totalCards };
    },
    [progress]
  );

  return { progress, setCardStatus, resetProgress, getStats };
}
