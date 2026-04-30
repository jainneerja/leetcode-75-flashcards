import { FlashCard } from '../../../types/card';

export const validAnagram: FlashCard = {
  id: 'lc-242-valid-anagram',
  leetcodeNumber: 242,
  title: 'Valid Anagram',
  pattern: 'Character Frequency Map',
  difficulty: 'Easy',
  category: 'Arrays & Hashing',
  tags: ['string', 'hash-map', 'frequency-count', 'sorting'],
  realWorldScenario:
    'On a Scrabble board, you wonder if you can rearrange the letter tiles of one word to spell another. You don\'t need to try every permutation — just count how many of each letter each word uses and compare the tallies.',
  vizType: 'ValidAnagramViz',
  keyIdea:
    'Count character frequencies in both strings using a map. If every character count matches exactly, the strings are anagrams of each other.',
  approach: [
    'If lengths differ, return false immediately.',
    'Build a frequency map counting each character in word1 (increment) and word2 (decrement).',
    'After processing both strings, if any frequency count is non-zero, return false.',
    'Return true — all counts cancelled out meaning the character sets are identical.',
  ],
  complexity: { time: 'O(n)', space: 'O(1) — at most 26 keys for lowercase letters' },
  codeSnippet: `function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const count = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    count.set(s[i], (count.get(s[i]) ?? 0) + 1);
    count.set(t[i], (count.get(t[i]) ?? 0) - 1);
  }
  for (const val of count.values()) {
    if (val !== 0) return false;
  }
  return true;
}`,
  hints: [
    'You can use a single map: increment for s, decrement for t.',
    'Alternatively sort both strings and compare — simpler code but O(n log n).',
    'An array of 26 integers works instead of a Map if input is only lowercase letters.',
  ],
  commonMistakes: [
    'Not checking length equality first — saves time and avoids false positives.',
    'Using two separate maps and comparing them — harder to implement cleanly.',
    'Forgetting that unicode characters beyond a-z need a proper Map, not a 26-element array.',
  ],
};
