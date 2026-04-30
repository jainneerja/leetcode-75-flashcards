import { FlashCard } from '../../../types/card';

export const twoSumII: FlashCard = {
  id: 'lc-167-two-sum-ii',
  leetcodeNumber: 167,
  title: 'Two Sum II - Input Array Is Sorted',
  pattern: 'Two Pointers (Sorted Array)',
  difficulty: 'Medium',
  category: 'Two Pointers',
  tags: ['array', 'two-pointers', 'sorted', 'binary-search'],
  realWorldScenario:
    'You\'re price-matching on a sorted restaurant menu, looking for two dishes that together hit your exact budget. Because prices are already sorted cheapest to most expensive, you can smartly move from both ends inward — no need to check every pair.',
  vizType: 'TwoSumIIViz',
  keyIdea:
    'With a sorted array, maintain left and right pointers. If their sum exceeds target, move right left (decrease sum). If it\'s less, move left right (increase sum). The sorted order guarantees convergence.',
  approach: [
    'Set left = 0, right = nums.length − 1.',
    'Compute sum = nums[left] + nums[right].',
    'If sum === target, return [left+1, right+1] (1-indexed).',
    'If sum > target, right--. If sum < target, left++. Repeat until found.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum > target) right--;
    else left++;
  }

  return [];
}`,
  hints: [
    'The sorted property is the key: moving right pointer left always decreases the sum.',
    'Moving left pointer right always increases the sum.',
    'Guaranteed exactly one solution exists — the while loop will always find it.',
  ],
  commonMistakes: [
    'Forgetting the output is 1-indexed in this problem.',
    'Using a hash map (valid but wastes the sorted property and uses O(n) space).',
    'Not updating both pointers correctly — only one moves per iteration.',
  ],
};
