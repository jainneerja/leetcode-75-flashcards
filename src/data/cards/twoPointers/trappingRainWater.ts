import { FlashCard } from '../../../types/card';

export const trappingRainWater: FlashCard = {
  id: 'lc-042-trapping-rain-water',
  leetcodeNumber: 42,
  title: 'Trapping Rain Water',
  pattern: 'Two Pointers / Monotonic Stack',
  difficulty: 'Hard',
  category: 'Two Pointers',
  tags: ['array', 'two-pointers', 'monotonic-stack', 'dynamic-programming'],
  realWorldScenario:
    'City drainage engineers map out a cross-section of buildings after heavy rain. Water pools in the valleys between taller structures. They need to calculate exactly how much water is trapped without physically simulating each droplet.',
  vizType: 'TrappingRainViz',
  keyIdea:
    'Water at each position = min(maxLeft, maxRight) − height[i]. Two pointers avoid the O(n) space of pre-computing both max arrays: the side with the smaller max can be resolved immediately.',
  approach: [
    'Set left=0, right=n−1, maxLeft=0, maxRight=0, total=0.',
    'While left < right: compare height[left] vs height[right].',
    'If height[left] <= height[right]: update maxLeft, add max(0, maxLeft−height[left]) to total, left++.',
    'Else: update maxRight, add max(0, maxRight−height[right]) to total, right--.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let total = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      maxLeft = Math.max(maxLeft, height[left]);
      total += maxLeft - height[left];
      left++;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      total += maxRight - height[right];
      right--;
    }
  }

  return total;
}`,
  hints: [
    'Water above position i is bounded by the minimum of the tallest wall on each side.',
    'The two-pointer insight: if height[left] ≤ height[right], we know maxRight ≥ height[left], so the left side is resolved.',
    'Monotonic stack approach also works and finds trapped water as you encounter each taller bar.',
  ],
  commonMistakes: [
    'Computing water as max(0, height[i] − min(maxL, maxR)) instead of min(maxL,maxR) − height[i].',
    'Using three separate O(n) passes for maxLeft array, maxRight array, then water — correct but uses O(n) space.',
    'Off-by-one in the two-pointer loop condition.',
  ],
};
