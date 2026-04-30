import { FlashCard } from '../../../types/card';

export const containerWithMostWater: FlashCard = {
  id: 'lc-011-container-with-most-water',
  leetcodeNumber: 11,
  title: 'Container With Most Water',
  pattern: 'Two Pointers (Greedy)',
  difficulty: 'Medium',
  category: 'Two Pointers',
  tags: ['array', 'two-pointers', 'greedy', 'area'],
  realWorldScenario:
    'You\'re choosing two buildings to stretch a tarp between for maximum rain water collection. The water level is limited by the shorter building. You want to maximize area = distance × min(height1, height2).',
  vizType: 'ContainerWaterViz',
  keyIdea:
    'Move the pointer on the shorter wall inward. Moving the taller wall can only decrease width while not increasing height — so it\'s always optimal to move the shorter side, giving the best chance of finding a taller wall.',
  approach: [
    'Set left = 0, right = heights.length − 1, maxArea = 0.',
    'Compute area = (right − left) × min(heights[left], heights[right]).',
    'Update maxArea if this area is larger.',
    'Move the pointer at the shorter wall inward (if equal, move either). Repeat until pointers meet.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const water = (right - left) * Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, water);
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxWater;
}`,
  hints: [
    'Area is limited by the shorter wall — moving the shorter pointer is the greedy choice.',
    'Moving the taller pointer inward can only make things worse (less width, no height gain).',
    'No need to track which pair was best — just the maximum area value.',
  ],
  commonMistakes: [
    'Moving the taller pointer instead of the shorter one.',
    'Computing area as just min(heights) without multiplying by width.',
    'Trying all pairs (O(n²)) instead of using two pointers.',
  ],
};
