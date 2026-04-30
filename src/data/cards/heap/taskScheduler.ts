import { FlashCard } from '../../../types/card';

export const taskScheduler: FlashCard = {
  id: 'heap-621',
  leetcodeNumber: 621,
  title: 'Task Scheduler',
  pattern: 'Max Heap + Greedy',
  difficulty: 'Medium',
  category: 'Heap / Priority Queue',
  tags: ['heap', 'greedy', 'hash table', 'counting'],
  realWorldScenario: 'CPU scheduling — complete all tasks with cooldown periods between same-type tasks',
  vizType: 'TaskSchedulerViz',
  keyIdea: 'Always schedule the most frequent remaining task; fill idles with next most frequent tasks',
  approach: [
    'Count frequency of each task',
    'Use a max-heap ordered by frequency',
    'Each CPU cycle: pop up to (n+1) tasks, decrement counts, re-push non-zero',
    'If popped fewer than n+1, add idle slots to fill the window',
    'Repeat until heap is empty',
  ],
  complexity: { time: 'O(n log n)', space: 'O(n)' },
  codeSnippet: `function leastInterval(tasks, n) {
  const freq = {};
  for (const t of tasks) freq[t] = (freq[t] || 0) + 1;

  // Math formula approach (optimal)
  const maxFreq = Math.max(...Object.values(freq));
  const maxCount = Object.values(freq).filter(f => f === maxFreq).length;

  // Place most-frequent tasks with gaps, fill others in gaps
  const chunks = maxFreq - 1;
  const idleSlots = chunks * n - (maxCount - 1) * chunks;
  // Wait — use simpler formula:
  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
}

// Example: leastInterval(['A','A','A','B','B','B'], 2) => 8
// Timeline: A B idle A B idle A B`,
  hints: [
    'What determines the minimum number of intervals?',
    'The most frequent task dictates the number of "frames" needed',
    'Each frame has (n+1) slots: the most frequent task + n others or idles',
  ],
  commonMistakes: [
    'Forgetting that total tasks can exceed the formula result',
    'Off-by-one in frame size: frame is n+1 (task + n cooldown slots)',
    'Not accounting for ties in max frequency',
  ],
};
