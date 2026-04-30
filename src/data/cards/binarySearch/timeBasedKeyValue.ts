import { FlashCard } from '../../../types/card';

export const timeBasedKeyValue: FlashCard = {
  id: 'lc-981',
  leetcodeNumber: 981,
  title: 'Time Based Key-Value Store',
  pattern: 'Binary Search on timestamp',
  difficulty: 'Medium',
  category: 'Binary Search',
  tags: ['hash map', 'binary search', 'design'],
  realWorldScenario: 'Version control system — retrieve the most recent version of a file as of a given timestamp',
  vizType: 'TimeBasedKVViz',
  keyIdea: 'Store (timestamp, value) pairs per key; binary search for the largest timestamp ≤ given time',
  approach: [
    'Use a Map<string, {timestamp, value}[]> to store entries per key',
    'set(key, value, timestamp): push {timestamp, value} onto the key\'s array (timestamps always increase)',
    'get(key, timestamp): binary search the key\'s array for the largest timestamp ≤ given timestamp',
    'Return "" if no valid entry found',
  ],
  complexity: { time: 'O(log n) per get, O(1) per set', space: 'O(n) total storage' },
  codeSnippet: `class TimeMap {
  private store: Map<string, {ts: number, val: string}[]> = new Map();

  set(key: string, value: string, timestamp: number): void {
    if (!this.store.has(key)) this.store.set(key, []);
    this.store.get(key)!.push({ ts: timestamp, val: value });
  }

  get(key: string, timestamp: number): string {
    const arr = this.store.get(key) ?? [];
    let lo = 0, hi = arr.length - 1, res = '';
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid].ts <= timestamp) { res = arr[mid].val; lo = mid + 1; }
      else hi = mid - 1;
    }
    return res;
  }
}`,
  hints: [
    'Timestamps are guaranteed to be strictly increasing for the same key, so the array is always sorted',
    'You want the rightmost timestamp ≤ given timestamp (upper-bound style binary search)',
    'Initialize result as "" so you return "" if all timestamps are greater than queried time',
  ],
  commonMistakes: [
    'Not saving the result before moving lo forward (rightmost valid value pattern)',
    'Returning the wrong result when no timestamp ≤ query exists',
  ],
};
