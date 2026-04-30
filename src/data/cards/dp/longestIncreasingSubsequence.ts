import { FlashCard } from '../../../types/card';

export const longestIncreasingSubsequence: FlashCard = {
  id: 'lc-300-longest-increasing-subsequence',
  leetcodeNumber: 300,
  title: 'Longest Increasing Subsequence',
  pattern: '1D DP / Binary Search (Patience Sorting)',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  tags: ['dp', 'binary-search', 'patience-sorting', 'lis'],
  realWorldScenario:
    'Building stacking puzzle — you have Lego bricks with numbers. Find the longest chain where each brick has a strictly larger number than the one below it. The bricks can be picked in any order from the array.',
  vizType: 'LISViz',
  keyIdea:
    'DP approach: dp[i] = length of LIS ending at index i = 1 + max(dp[j]) for all j < i where nums[j] < nums[i]. O(n log n) with patience sorting: maintain a tails array and binary search for the insertion position.',
  approach: [
    'O(n²) DP: dp[i] = 1 + max(dp[j]) where j < i and nums[j] < nums[i]. Answer = max(dp).',
    'O(n log n) optimisation: maintain tails[] where tails[i] is the smallest tail of all IS of length i+1.',
    'For each num, binary search tails for first element ≥ num; replace it (or extend tails if none found).',
    'Answer = length of tails array.',
  ],
  complexity: { time: 'O(n log n)', space: 'O(n)' },
  codeSnippet: `function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];
  for (const num of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < num) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = num;
  }
  return tails.length;
}`,
  hints: [
    'The tails array is always sorted — you can binary search it.',
    'tails[i] is NOT the actual LIS — it\'s the smallest ending value of any IS with length i+1.',
  ],
};
