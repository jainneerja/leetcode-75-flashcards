import { FlashCard } from '../../../types/card';

export const kClosestPoints: FlashCard = {
  id: 'heap-973',
  leetcodeNumber: 973,
  title: 'K Closest Points to Origin',
  pattern: 'Max Heap of size K',
  difficulty: 'Medium',
  category: 'Heap / Priority Queue',
  tags: ['heap', 'geometry', 'sorting'],
  realWorldScenario: 'Ride-sharing — find the K nearest available drivers to your location',
  vizType: 'KClosestPointsViz',
  keyIdea: 'Compute Euclidean distance squared; max-heap of size K; evict farthest when exceeding K',
  approach: [
    'For each point compute distance squared: x² + y² (no sqrt needed)',
    'Maintain a max-heap of size K based on distance',
    'Push each point; if heap exceeds K, remove the farthest (max)',
    'Remaining K points in heap are the closest',
  ],
  complexity: { time: 'O(n log k)', space: 'O(k)' },
  codeSnippet: `function kClosest(points, k) {
  // Max-heap by distance (simulated as sorted desc array)
  const heap = [];
  const dist = ([x, y]) => x * x + y * y;

  for (const point of points) {
    heap.push(point);
    heap.sort((a, b) => dist(b) - dist(a)); // max at front
    if (heap.length > k) heap.shift();       // evict farthest
  }

  return heap;
}

// Example: kClosest([[1,3],[-2,2],[5,8],[0,1]], 2)
// => [[-2,2],[0,1]]  (dist²=8 and dist²=1)`,
  hints: [
    'Why use distance squared instead of actual distance?',
    'Max-heap keeps the farthest at the top for easy eviction',
    'Can also sort all points by distance — when is that better/worse?',
  ],
  commonMistakes: [
    'Using actual Euclidean distance (square root) — unnecessary and slower',
    'Building a min-heap instead of max-heap (min-heap makes eviction hard)',
    'Returning distances instead of the original point coordinates',
  ],
};
