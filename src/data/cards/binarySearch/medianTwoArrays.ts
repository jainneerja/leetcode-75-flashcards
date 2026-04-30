import { FlashCard } from '../../../types/card';

export const medianTwoArrays: FlashCard = {
  id: 'lc-4',
  leetcodeNumber: 4,
  title: 'Median of Two Sorted Arrays',
  pattern: 'Binary Search on partition',
  difficulty: 'Hard',
  category: 'Binary Search',
  tags: ['array', 'binary search', 'divide and conquer'],
  realWorldScenario: 'Grading on a curve — find the true median of grades from two separate sorted class lists',
  vizType: 'MedianTwoArraysViz',
  keyIdea: 'Binary search on the smaller array\'s partition; ensure left halves ≤ right halves across both arrays',
  approach: [
    'Always binary search on the smaller array; let m = nums1.length, n = nums2.length',
    'Partition nums1 at i; derive partition j = (m + n + 1) / 2 - i for nums2',
    'Valid partition: nums1[i-1] ≤ nums2[j] AND nums2[j-1] ≤ nums1[i]',
    'Median = max(left halves) if odd total length, else average of max(left) and min(right)',
  ],
  complexity: { time: 'O(log(min(m,n)))', space: 'O(1)' },
  codeSnippet: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  const m = nums1.length, n = nums2.length;
  let lo = 0, hi = m;
  while (lo <= hi) {
    const i = Math.floor((lo + hi) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;
    const maxL1 = i === 0 ? -Infinity : nums1[i - 1];
    const minR1 = i === m ?  Infinity : nums1[i];
    const maxL2 = j === 0 ? -Infinity : nums2[j - 1];
    const minR2 = j === n ?  Infinity : nums2[j];
    if (maxL1 <= minR2 && maxL2 <= minR1) {
      if ((m + n) % 2 === 1) return Math.max(maxL1, maxL2);
      return (Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2;
    } else if (maxL1 > minR2) hi = i - 1;
    else lo = i + 1;
  }
  return 0;
}`,
  hints: [
    'Binary search on the smaller array reduces complexity to O(log(min(m,n)))',
    'The half-total = (m + n + 1) / 2 ensures left side has the median for odd-length totals',
    'Use -Infinity and +Infinity as sentinels for edge partitions',
  ],
  commonMistakes: [
    'Not swapping to ensure binary search is on the smaller array',
    'Wrong sentinel values at the boundaries of the partition',
    'Forgetting the +1 in (m+n+1)/2 which handles odd total length',
  ],
};
