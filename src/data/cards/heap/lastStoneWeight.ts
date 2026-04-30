import { FlashCard } from '../../../types/card';

export const lastStoneWeight: FlashCard = {
  id: 'heap-1046',
  leetcodeNumber: 1046,
  title: 'Last Stone Weight',
  pattern: 'Max Heap',
  difficulty: 'Easy',
  category: 'Heap / Priority Queue',
  tags: ['heap', 'simulation'],
  realWorldScenario: 'Rock smashing game — repeatedly smash the two heaviest rocks together; find the survivor',
  vizType: 'LastStoneWeightViz',
  keyIdea: 'Use max-heap; extract top two, smash: if equal → both gone, if different → push remainder',
  approach: [
    'Insert all stones into a max-heap',
    'While heap has more than 1 stone:',
    '  Extract the two largest stones (y ≥ x)',
    '  If x === y: both destroyed, push nothing',
    '  If x !== y: push (y - x) back',
    'Return heap[0] if non-empty, else 0',
  ],
  complexity: { time: 'O(n log n)', space: 'O(n)' },
  codeSnippet: `function lastStoneWeight(stones) {
  // Simulate max-heap (sort descending each step)
  const heap = [...stones].sort((a, b) => b - a);

  while (heap.length > 1) {
    const y = heap.shift(); // largest
    const x = heap.shift(); // second largest

    if (y !== x) {
      // Insert remainder back in sorted position
      heap.push(y - x);
      heap.sort((a, b) => b - a);
    }
  }

  return heap.length === 1 ? heap[0] : 0;
}

// Example: lastStoneWeight([2,7,4,1,8,1])
// 8 vs 7 => 1 | 4 vs 2 => 2 | 2 vs 1 => 1 | 1 vs 1 => 0... wait
// Actually: 8,7,4,2,1,1 => 8v7=1 => heap[4,2,1,1,1]
// => 4v2=2 => heap[2,1,1,1] => 2v1=1 => heap[1,1,1]
// => 1v1=0 => heap[1] => return 1`,
  hints: [
    'What data structure gives you the max element efficiently?',
    'Two cases: equal weights vs unequal weights — what happens in each?',
    'What do you return if all stones cancel out?',
  ],
  commonMistakes: [
    'Returning -1 or undefined instead of 0 when no stones remain',
    'Using a min-heap instead of max-heap',
    'Forgetting to push the remainder back after unequal smash',
  ],
};
