import { FlashCard } from '../../../types/card';

export const kthLargestArray: FlashCard = {
  id: 'heap-215',
  leetcodeNumber: 215,
  title: 'Kth Largest Element in an Array',
  pattern: 'Min Heap of size K',
  difficulty: 'Medium',
  category: 'Heap / Priority Queue',
  tags: ['heap', 'sorting', 'divide and conquer'],
  realWorldScenario: 'Competition leaderboard — find the Kth highest score without sorting all scores',
  vizType: 'KthLargestArrayViz',
  keyIdea: 'Maintain a min-heap of size K; if new element > heap top, replace. Top of heap = Kth largest.',
  approach: [
    'Create a min-heap of size K',
    'Iterate through each element in the array',
    'If heap size < K, push element onto heap',
    'Else if element > heap top, replace heap top with element and re-heapify',
    'After processing all elements, heap top is the Kth largest',
  ],
  complexity: { time: 'O(n log k)', space: 'O(k)' },
  codeSnippet: `function findKthLargest(nums, k) {
  // Simulate min-heap with sorted array (for clarity)
  const heap = [];

  const heapifyUp = (arr) => {
    arr.sort((a, b) => a - b);
  };

  for (const num of nums) {
    heap.push(num);
    heapifyUp(heap);
    if (heap.length > k) heap.shift(); // remove min
  }

  return heap[0]; // min of top-k = kth largest
}

// Example: findKthLargest([3,2,1,5,6,4], 2) => 5`,
  hints: [
    'Why min-heap instead of max-heap for Kth largest?',
    'The min-heap top tells you the smallest of your K largest candidates',
    'When to evict from the heap — what condition triggers a swap?',
  ],
  commonMistakes: [
    'Using a max-heap of size N instead of min-heap of size K',
    'Off-by-one: K=1 means the largest, not the smallest',
    'Not handling duplicates correctly',
  ],
};
