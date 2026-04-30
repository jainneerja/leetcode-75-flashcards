import { FlashCard } from '../../../types/card';

export const findMinRotated: FlashCard = {
  id: 'lc-153',
  leetcodeNumber: 153,
  title: 'Find Minimum in Rotated Sorted Array',
  pattern: 'Binary Search (Modified)',
  difficulty: 'Medium',
  category: 'Binary Search',
  tags: ['array', 'binary search', 'rotated'],
  realWorldScenario: 'Broken odometer — a sorted sequence got shifted; find where it resets to minimum',
  vizType: 'FindMinRotatedViz',
  keyIdea: 'If nums[mid] > nums[right], minimum is in right half; else search left half (including mid)',
  approach: [
    'Set lo = 0, hi = nums.length - 1',
    'While lo < hi: compute mid',
    'If nums[mid] > nums[hi], the minimum is in the right half → lo = mid + 1',
    'Else the minimum is in the left half including mid → hi = mid',
  ],
  complexity: { time: 'O(log n)', space: 'O(1)' },
  codeSnippet: `function findMin(nums: number[]): number {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] > nums[hi]) lo = mid + 1;
    else hi = mid;
  }
  return nums[lo];
}`,
  hints: [
    'Compare nums[mid] to nums[hi] (not nums[lo]) to determine which side has the minimum',
    'If the array is not rotated at all, the minimum is nums[0]',
    'The invariant: the answer is always within [lo, hi]',
  ],
  commonMistakes: [
    'Comparing to nums[lo] instead of nums[hi]',
    'Using lo <= hi which causes infinite loop',
    'Off-by-one when setting hi = mid vs hi = mid - 1',
  ],
};
