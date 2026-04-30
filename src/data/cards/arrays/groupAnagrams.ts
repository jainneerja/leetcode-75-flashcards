import { FlashCard } from '../../../types/card';

export const groupAnagrams: FlashCard = {
  id: 'lc-049-group-anagrams',
  leetcodeNumber: 49,
  title: 'Group Anagrams',
  pattern: 'Hash Map + Sorted Key',
  difficulty: 'Medium',
  category: 'Arrays & Hashing',
  tags: ['string', 'hash-map', 'sorting', 'grouping'],
  realWorldScenario:
    'A librarian wants to group books whose titles are rearrangements of each other — "Silent" and "Listen" would go together. Instead of comparing every pair, she sorts each title alphabetically to get a canonical filing key, then shelves all books with the same key together.',
  vizType: 'GroupAnagramsViz',
  keyIdea:
    'Sort each word alphabetically to get its canonical key. All anagrams share the same sorted key. Use a map from sorted-key → list of original words.',
  approach: [
    'Create a Map<string, string[]> to hold groups.',
    'For each word, sort its characters to form the canonical key (e.g., "eat" → "aet").',
    'Append the original word to the list stored at that key in the map.',
    'Return all the map\'s values — each value array is one anagram group.',
  ],
  complexity: { time: 'O(n · k log k) where k = max word length', space: 'O(n · k)' },
  codeSnippet: `function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const word of strs) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(word);
  }
  return [...map.values()];
}`,
  hints: [
    'Sorted characters form a unique fingerprint for each anagram group.',
    'Alternative key: a 26-length frequency tuple "#2#0#0..." — avoids sort, O(k) per word.',
    'The output order of groups doesn\'t matter — any grouping is valid.',
  ],
  commonMistakes: [
    'Comparing strings directly instead of their sorted forms.',
    'Using O(n²) pair-wise anagram checks instead of a hash map.',
    'Forgetting that words in the same group must keep their original form in the output.',
  ],
};
