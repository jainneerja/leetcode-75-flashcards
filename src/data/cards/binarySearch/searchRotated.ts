import { FlashCard } from '../../../types/card';

export const searchRotated: FlashCard = {
  id: 'lc-33',
  leetcodeNumber: 33,
  title: 'Search in Rotated Sorted Array',
  pattern: 'Binary Search (Modified)',
  difficulty: 'Medium',
  category: 'Binary Search',
  tags: ['array', 'binary search', 'rotated'],
  realWorldScenario: 'Finding a page in a circular book — the pages wrap around; determine which half is sorted',
  vizType: 'SearchRotatedViz',
  keyIdea: 'Determine which half is sorted; check if target falls in that half; eliminate the other half',
  approach: [
    'Set lo = 0, hi = nums.length - 1',
    'Compute mid; check if left half [lo..mid] is sorted (nums[lo] <= nums[mid])',
    'If left is sorted and target is in [nums[lo], nums[mid]], search left (hi = mid - 1), else right (lo = mid + 1)',
    'Else right half is sorted; if target is in (nums[mid], nums[hi]], search right, else left',
  ],
  complexity: { time: 'O(log n)', space: 'O(1)' },
  codeSnippet: `function search(nums: number[], target: number): number {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    if (nums[lo] <= nums[mid]) {
      // left half is sorted
      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      // right half is sorted
      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
}`,
  hints: [
    'One of the two halves is always sorted in a rotated array',
    'Identify the sorted half first, then check if target belongs there',
    'Handle duplicates separately (LC81) — this version assumes no duplicates',
  ],
  commonMistakes: [
    'Forgetting to use <= when checking if left half is sorted (handles the lo===mid case)',
    'Incorrect boundary checks when testing if target is in the sorted half',
  ],
};
