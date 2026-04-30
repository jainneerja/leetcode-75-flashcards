import { FlashCard } from '../../../types/card';

export const topKFrequent: FlashCard = {
  id: 'lc-347-top-k-frequent',
  leetcodeNumber: 347,
  title: 'Top K Frequent Elements',
  pattern: 'Hash Map + Bucket Sort / Heap',
  difficulty: 'Medium',
  category: 'Arrays & Hashing',
  tags: ['array', 'hash-map', 'bucket-sort', 'heap', 'frequency'],
  realWorldScenario:
    'Spotify wants to surface the top K most-played songs this month for your Wrapped report. They count plays per song, then efficiently surface the highest-frequency tracks — no need to fully sort all millions of songs.',
  vizType: 'TopKFrequentViz',
  keyIdea:
    'Count element frequencies with a map, then use bucket sort (index = frequency, O(n)) or a min-heap of size K (O(n log k)) to extract the top K elements without a full sort.',
  approach: [
    'Build a frequency map: iterate the array and count occurrences of each element.',
    'Create n+1 buckets (indexed 0..n) where bucket[freq] holds elements with that frequency.',
    'Fill buckets: for each entry in the frequency map, append the element to its bucket.',
    'Iterate buckets from highest index down, collecting elements until you have K results.',
  ],
  complexity: { time: 'O(n) with bucket sort', space: 'O(n)' },
  codeSnippet: `function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) buckets[count].push(num);

  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }
  return result.slice(0, k);
}`,
  hints: [
    'The maximum possible frequency is n (all elements the same) — that bounds bucket size.',
    'Heap solution: maintain a min-heap of size K; pop when size exceeds K.',
    'Bucket sort beats heap when you need strict O(n) time complexity.',
  ],
  commonMistakes: [
    'Sorting the frequency map entries — that is O(n log n), not O(n).',
    'Off-by-one on bucket array size — bucket index goes up to n, so length must be n+1.',
    'Returning more than K elements when multiple elements share the boundary frequency.',
  ],
};
