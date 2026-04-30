import { FlashCard } from '../../../types/card';

export const slidingWindowMaximum: FlashCard = {
  id: 'sliding-window-maximum',
  leetcodeNumber: 239,
  title: 'Sliding Window Maximum',
  pattern: 'Sliding Window + Monotonic Deque',
  difficulty: 'Hard',
  category: 'Sliding Window',
  tags: ['array', 'sliding window', 'deque', 'monotonic'],
  realWorldScenario:
    'Weather station — track the highest temperature in every rolling 3-day window across a season of readings.',
  vizType: 'SlidingWindowMaxViz',
  keyIdea:
    'A monotonic decreasing deque stores indices so the front is always the current window maximum. Remove elements from the back that are smaller than the incoming element (they can never be the max), and remove from the front when out of window.',
  approach: [
    'Use a deque storing indices in decreasing order of their values.',
    'For each element: pop from back while back element < current; push current index.',
    'Pop from front if that index is outside the window (index <= i - k).',
    'After the first k elements, the front of the deque is the window maximum.',
  ],
  complexity: { time: 'O(n)', space: 'O(k)' },
  codeSnippet: `function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []; // stores indices
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indices out of this window
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Maintain decreasing order: remove smaller elements from back
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Start adding results once the first window is complete
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}`,
  hints: [
    'The deque stores indices, not values — so you can check if the front is still within the window.',
    'Elements are removed from the back only, keeping the deque monotonically decreasing.',
    'Each element is pushed and popped at most once — hence O(n) overall.',
  ],
  commonMistakes: [
    'Storing values instead of indices, making out-of-window checks impossible.',
    'Using a max-heap (O(n log k)) instead of the O(n) deque approach.',
    'Off-by-one when deciding when to start recording results (i >= k - 1).',
  ],
};
