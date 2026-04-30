import { FlashCard } from '../../../types/card';

export const binarySearch: FlashCard = {
  id: 'lc-704',
  leetcodeNumber: 704,
  title: 'Binary Search',
  pattern: 'Binary Search',
  difficulty: 'Easy',
  category: 'Binary Search',
  tags: ['array', 'binary search', 'sorted'],
  realWorldScenario: 'Dictionary lookup — flip to the middle, then go left or right based on alphabetical order',
  vizType: 'BinarySearchViz',
  keyIdea: 'Compare mid to target; eliminate half the search space each iteration → O(log n)',
  approach: [
    'Initialize lo = 0, hi = nums.length - 1',
    'Loop while lo <= hi',
    'Compute mid = Math.floor((lo + hi) / 2)',
    'If nums[mid] === target return mid; if nums[mid] < target set lo = mid + 1; else set hi = mid - 1',
  ],
  complexity: { time: 'O(log n)', space: 'O(1)' },
  codeSnippet: `function search(nums: number[], target: number): number {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
  hints: [
    'The array must be sorted for binary search to work',
    'Use (lo + hi) >>> 1 to avoid integer overflow in other languages',
    'When lo > hi the element is not in the array',
  ],
  commonMistakes: [
    'Using lo < hi instead of lo <= hi (misses single-element case)',
    'Forgetting to return -1 when not found',
    'Off-by-one on lo/hi updates',
  ],
};
