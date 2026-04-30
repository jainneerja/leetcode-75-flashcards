import { FlashCard } from '../../../types/card';

export const twoSum: FlashCard = {
  id: 'lc-001-two-sum',
  leetcodeNumber: 1,
  title: 'Two Sum',
  pattern: 'Hash Map',
  difficulty: 'Easy',
  category: 'Arrays & Hashing',
  tags: ['array', 'hash-map', 'complement'],
  realWorldScenario:
    'Shopping at a flea market with a $26 budget — you want to find exactly two items whose prices add up to your budget. Checking every pair is slow; instead you remember each item you see and instantly check if its perfect complement is already in your memory.',
  vizType: 'TwoSumViz',
  keyIdea:
    'Use a hash map to check if the complement (target − current) has already been seen — turning an O(n²) brute-force into a single O(n) pass.',
  approach: [
    'Create an empty hash map { price → index } to remember items seen so far.',
    'For each item, compute complement = target − currentPrice.',
    'Check if complement already exists as a key in the map — if yes, return both indices immediately.',
    'Otherwise store { currentPrice: currentIndex } in the map and continue to the next item.',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
  hints: [
    'Think about what information you need to remember from previous elements.',
    'For each element x, you need to find target - x. Where can you look that up in O(1)?',
    'Store index as the value in the map so you can return it directly.',
  ],
  commonMistakes: [
    'Using the same element twice — the map check happens BEFORE you store the current element.',
    'Returning values instead of indices.',
    'Assuming there is always exactly one solution — the problem guarantees it, but be aware.',
  ],
};
