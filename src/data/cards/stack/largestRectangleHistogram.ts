import { FlashCard } from '../../../types/card';

export const largestRectangleHistogram: FlashCard = {
  id: 'stack-largest-rectangle-histogram',
  leetcodeNumber: 84,
  title: 'Largest Rectangle in Histogram',
  pattern: 'Monotonic Stack',
  difficulty: 'Hard',
  category: 'Stack',
  tags: ['array', 'stack', 'monotonic stack'],
  realWorldScenario:
    'City skyline — find the largest rectangular billboard that fits within the building skyline. Each bar has equal width 1 and the given height.',
  vizType: 'LargestRectangleViz',
  keyIdea:
    'A monotonic increasing stack stores (index, height) pairs. When a shorter bar is encountered, pop all taller bars and compute the rectangle they could form — the width extends back to where the popped bar originally started.',
  approach: [
    'Maintain a stack of (startIndex, height) pairs in increasing order of height.',
    'For each bar: track the furthest left it can extend by popping taller bars.',
    'On pop, compute area = height * (currentIndex - startIndex) and update max.',
    'After iterating, flush remaining stack items extending to the end.',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  const stack: [number, number][] = []; // [startIndex, height]

  for (let i = 0; i < heights.length; i++) {
    let start = i;

    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      const [idx, h] = stack.pop()!;
      maxArea = Math.max(maxArea, h * (i - idx));
      start = idx; // current bar can extend back to where the taller bar started
    }

    stack.push([start, heights[i]]);
  }

  // Remaining bars extend to the end
  for (const [idx, h] of stack) {
    maxArea = Math.max(maxArea, h * (heights.length - idx));
  }

  return maxArea;
}`,
  hints: [
    'Key insight: when you pop a bar, the current shorter bar can occupy the same left boundary.',
    'Store the start index (not just the current index) so the width is computed correctly.',
    'A sentinel bar of height 0 at the end can flush the stack automatically.',
  ],
  commonMistakes: [
    'Using only the current index as width, missing bars that extend leftward.',
    'Not flushing the remaining stack after the loop.',
    'Forgetting that a bar extends as far left as any taller bar it has "consumed".',
  ],
};
