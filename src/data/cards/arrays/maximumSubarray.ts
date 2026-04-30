import { FlashCard } from '../../../types/card';

export const maximumSubarray: FlashCard = {
  id: 'lc-053-maximum-subarray',
  leetcodeNumber: 53,
  title: 'Maximum Subarray',
  pattern: "Kadane's Algorithm",
  difficulty: 'Medium',
  category: 'Arrays & Hashing',
  tags: ['array', 'dynamic-programming', 'kadane', 'subarray'],
  realWorldScenario:
    'You\'re a stock trader who can hold a position for any consecutive stretch of days. Each day\'s value is the gain or loss from that day. Find the best consecutive run of days to maximize total profit — knowing when to "cut losses" and restart is key.',
  vizType: 'MaxSubarrayViz',
  keyIdea:
    "Kadane's Algorithm: at each position, decide whether to extend the current subarray or start fresh. currentSum = max(nums[i], currentSum + nums[i]). Track the global maximum throughout.",
  approach: [
    'Initialize currentSum = nums[0], maxSum = nums[0].',
    'Iterate from index 1. At each element, decide: extend current run or start fresh.',
    'currentSum = max(nums[i], currentSum + nums[i]) — drop the prefix if it hurts.',
    'Update maxSum = max(maxSum, currentSum) at every step. Return maxSum.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}`,
  hints: [
    'If currentSum goes negative, starting fresh from the next element is always better.',
    'The decision at each step is purely local: is the current element alone better than extending?',
    'Works even when all numbers are negative — returns the least-negative element.',
  ],
  commonMistakes: [
    'Initializing currentSum and maxSum to 0 — fails for all-negative arrays.',
    'Resetting to 0 when currentSum < 0 — same issue as above.',
    'Returning currentSum instead of maxSum at the end.',
  ],
};
