import { FlashCard } from '../../../types/card';

export const threeSum: FlashCard = {
  id: 'lc-015-three-sum',
  leetcodeNumber: 15,
  title: '3Sum',
  pattern: 'Sort + Two Pointers',
  difficulty: 'Medium',
  category: 'Two Pointers',
  tags: ['array', 'two-pointers', 'sorting', 'triplets'],
  realWorldScenario:
    'Three friends settle debts: person A owes some, persons B and C are owed. Find every combination where their net balances sum to zero. Sorting the balances first lets you efficiently scan for matching pairs around each fixed pivot.',
  vizType: 'ThreeSumViz',
  keyIdea:
    'Sort the array. For each element as the fixed pivot, use two pointers on the remainder to find pairs that sum to −pivot. Skip duplicate pivots and duplicate pointer values to avoid repeated triplets.',
  approach: [
    'Sort nums. Initialize result = [].',
    'For each index i (pivot), skip if nums[i] === nums[i−1] (duplicate pivot).',
    'Set left = i+1, right = n−1. While left < right: check sum = nums[i]+nums[left]+nums[right].',
    'If sum===0 push triplet, advance both pointers skipping duplicates. If sum>0 right--. If sum<0 left++.',
  ],
  complexity: { time: 'O(n²)', space: 'O(1) extra (output not counted)' },
  codeSnippet: `function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}`,
  hints: [
    'Sorting is crucial — it enables two-pointer and makes duplicate skipping easy.',
    'Once nums[i] > 0, no triplet can sum to zero (all remaining elements are ≥ nums[i]).',
    'Must skip duplicates at both the pivot and the pointer levels.',
  ],
  commonMistakes: [
    'Not sorting first — the two-pointer approach requires sorted order.',
    'Forgetting to skip duplicate pivot values (i > 0 check).',
    'Advancing pointers BEFORE skipping duplicates after a match — causes off-by-one.',
  ],
};
