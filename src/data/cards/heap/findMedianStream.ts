import { FlashCard } from '../../../types/card';

export const findMedianStream: FlashCard = {
  id: 'heap-295',
  leetcodeNumber: 295,
  title: 'Find Median from Data Stream',
  pattern: 'Two Heaps (Max-heap left, Min-heap right)',
  difficulty: 'Hard',
  category: 'Heap / Priority Queue',
  tags: ['heap', 'design', 'two pointers', 'data stream'],
  realWorldScenario: 'Live sports stats tracker — always know the median score as new scores stream in',
  vizType: 'FindMedianStreamViz',
  keyIdea: 'Max-heap for lower half, min-heap for upper half. Keep sizes balanced. Median = average of tops or larger half top.',
  approach: [
    'Maintain max-heap (left) for the smaller half, min-heap (right) for the larger half',
    'addNum: push to left (max-heap), then balance by moving left top to right',
    'If right becomes larger than left, move right min to left',
    'findMedian: if equal sizes → average of both tops; else → top of larger heap',
  ],
  complexity: { time: 'O(log n) addNum, O(1) findMedian', space: 'O(n)' },
  codeSnippet: `class MedianFinder {
  constructor() {
    this.left = [];  // max-heap (lower half) — store negated
    this.right = []; // min-heap (upper half)
  }

  addNum(num) {
    // Push to left (negate for max-heap simulation)
    this.left.push(-num);
    this.left.sort((a, b) => a - b); // smallest (most negative) first

    // Balance: move left's max to right if needed
    if (this.right.length && -this.left[0] > this.right[0]) {
      this.right.push(-this.left.shift());
      this.right.sort((a, b) => a - b);
    }

    // Size balance: left can be at most 1 larger than right
    if (this.left.length > this.right.length + 1) {
      this.right.push(-this.left.shift());
      this.right.sort((a, b) => a - b);
    } else if (this.right.length > this.left.length) {
      this.left.push(-this.right.shift());
      this.left.sort((a, b) => a - b);
    }
  }

  findMedian() {
    if (this.left.length === this.right.length) {
      return (-this.left[0] + this.right[0]) / 2;
    }
    return -this.left[0]; // left is larger
  }
}`,
  hints: [
    'Why use two heaps instead of one sorted structure?',
    'How do you keep the heaps balanced in size?',
    'What is the invariant: left.max <= right.min always?',
  ],
  commonMistakes: [
    'Forgetting to negate values for the max-heap (JS only has min-heap natively)',
    'Not rebalancing after every insertion',
    'Returning wrong heap top when sizes differ',
  ],
};
