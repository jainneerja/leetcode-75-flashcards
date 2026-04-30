import { FlashCard } from '../../../types/card';

export const dailyTemperatures: FlashCard = {
  id: 'stack-daily-temperatures',
  leetcodeNumber: 739,
  title: 'Daily Temperatures',
  pattern: 'Monotonic Stack',
  difficulty: 'Medium',
  category: 'Stack',
  tags: ['array', 'stack', 'monotonic stack'],
  realWorldScenario:
    'Weather forecast — for each day, how many days until a warmer temperature? The answer array records the wait for each day.',
  vizType: 'DailyTemperaturesViz',
  keyIdea:
    'A monotonic decreasing stack stores indices of unresolved days. When a warmer day is found, pop all stack entries with smaller temperatures and record the distance (current index - popped index).',
  approach: [
    'Initialize result array of zeros and an empty stack.',
    'For each day i: while stack is non-empty and temps[i] > temps[stack.top], pop and record result[popped] = i - popped.',
    'Push current index onto the stack.',
    'Any indices remaining in the stack never found a warmer day — result stays 0.',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack: number[] = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop()!;
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
}`,
  hints: [
    'Store indices, not temperatures — you need the index to compute the distance.',
    'The stack is always in decreasing order of temperature (monotonic decreasing).',
    'Days left in the stack at the end have no warmer future day.',
  ],
  commonMistakes: [
    'Storing temperatures instead of indices on the stack.',
    'Using a min-stack or sorted structure — the monotonic stack is the key insight.',
    'Setting result[i] instead of result[popped index] when recording the answer.',
  ],
};
