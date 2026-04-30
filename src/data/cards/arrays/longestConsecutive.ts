import { FlashCard } from '../../../types/card';

export const longestConsecutive: FlashCard = {
  id: 'lc-128-longest-consecutive',
  leetcodeNumber: 128,
  title: 'Longest Consecutive Sequence',
  pattern: 'Hash Set',
  difficulty: 'Medium',
  category: 'Arrays & Hashing',
  tags: ['array', 'hash-set', 'sequence', 'greedy'],
  realWorldScenario:
    'You\'ve dumped a box of puzzle pieces on a table — each piece has a number. Find the longest chain of consecutively numbered pieces (e.g., pieces 1, 2, 3, 4 form a chain of length 4). You need O(n) — sorting would be too slow for the puzzle factory\'s robot arm.',
  vizType: 'LongestConsecutiveViz',
  keyIdea:
    'Put all numbers into a Set for O(1) lookup. Only start counting a sequence from its beginning (num − 1 is NOT in the set). Then count forward until the chain breaks.',
  approach: [
    'Insert all numbers into a Set.',
    'Iterate through each number. Skip it if num−1 is in the Set (it\'s not a sequence start).',
    'If it IS a start, count upward: while num+1 is in the Set, extend the chain length.',
    'Track and return the maximum chain length found.',
  ],
  complexity: { time: 'O(n) — each number is visited at most twice', space: 'O(n)' },
  codeSnippet: `function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let current = num;
      let length = 1;
      while (numSet.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
}`,
  hints: [
    'Iterating over numSet (not nums) avoids reprocessing duplicates.',
    'The "start of sequence" check (num−1 not in set) ensures each sequence is counted only once.',
    'Total work across all sequences = O(n) because each element is counted in exactly one sequence.',
  ],
  commonMistakes: [
    'Sorting first — gets you O(n log n), which doesn\'t meet the O(n) requirement.',
    'Starting a count from every number — this makes it O(n²) in the worst case.',
    'Not deduplicating input — iterating over the Set instead of the array avoids this.',
  ],
};
