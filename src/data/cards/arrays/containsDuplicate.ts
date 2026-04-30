import { FlashCard } from '../../../types/card';

export const containsDuplicate: FlashCard = {
  id: 'lc-217-contains-duplicate',
  leetcodeNumber: 217,
  title: 'Contains Duplicate',
  pattern: 'Hash Set',
  difficulty: 'Easy',
  category: 'Arrays & Hashing',
  tags: ['array', 'hash-set', 'duplicate-detection'],
  realWorldScenario:
    'An airport baggage scanner checks every item in a passenger\'s bag. If any item has already been seen before in the same bag, the alarm triggers. A hash set lets security instantly know if an item is a repeat — no manual searching through the pile.',
  vizType: 'ContainsDuplicateViz',
  keyIdea:
    'Insert elements one by one into a Set. If an element is already present when you try to insert it, a duplicate exists — return true immediately.',
  approach: [
    'Create an empty Set to track elements seen so far.',
    'Iterate through the array. For each element, check if it is already in the Set.',
    'If it is — return true (duplicate found).',
    'Otherwise add the element to the Set and continue. Return false if the loop completes.',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}`,
  hints: [
    'A Set only holds unique values — use that property to detect repeats.',
    'You can also compare Set size to array length after building the set.',
    'Early return as soon as a duplicate is found — no need to scan the whole array.',
  ],
  commonMistakes: [
    'Sorting the array first — that works (O(n log n)) but the Set approach is cleaner.',
    'Forgetting to add elements to the Set when no duplicate is found yet.',
  ],
};
