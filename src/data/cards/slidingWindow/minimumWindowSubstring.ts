import { FlashCard } from '../../../types/card';

export const minimumWindowSubstring: FlashCard = {
  id: 'sliding-window-minimum-window-substring',
  leetcodeNumber: 76,
  title: 'Minimum Window Substring',
  pattern: 'Sliding Window (variable)',
  difficulty: 'Hard',
  category: 'Sliding Window',
  tags: ['string', 'sliding window', 'hash map'],
  realWorldScenario:
    'Search engine — find the shortest passage in a document containing all required keywords. Return the smallest substring of s that contains every character in t.',
  vizType: 'MinWindowSubstringViz',
  keyIdea:
    'Expand the right pointer until all characters of t are covered; then shrink the left pointer while the window is still valid, recording each minimum. Repeat until right reaches the end.',
  approach: [
    'Build a frequency map for t; track "have" and "need" counts.',
    'Expand right: when a character satisfies its required count, increment "have".',
    'When have == need, record the window; shrink left to find a smaller valid window.',
    'Return the smallest recorded window.',
  ],
  complexity: { time: 'O(m+n)', space: 'O(m+n)' },
  codeSnippet: `function minWindow(s: string, t: string): string {
  if (!t.length) return '';

  const need: Record<string, number> = {};
  for (const ch of t) need[ch] = (need[ch] || 0) + 1;

  const window: Record<string, number> = {};
  let have = 0;
  const total = Object.keys(need).length;
  let result = '';
  let resultLen = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    window[ch] = (window[ch] || 0) + 1;
    if (need[ch] && window[ch] === need[ch]) have++;

    while (have === total) {
      if (right - left + 1 < resultLen) {
        result = s.slice(left, right + 1);
        resultLen = result.length;
      }
      window[s[left]]--;
      if (need[s[left]] && window[s[left]] < need[s[left]]) have--;
      left++;
    }
  }

  return result;
}`,
  hints: [
    '"have" counts distinct character types fully satisfied, not total character count.',
    'Shrink from the left as much as possible once all chars are covered.',
    'Track resultLen separately to avoid string slicing on every valid window.',
  ],
  commonMistakes: [
    'Decrementing "have" for any count decrease instead of only when falling below the needed threshold.',
    'Not handling duplicate characters in t correctly.',
    'Returning "" vs the actual minimum window when no window exists.',
  ],
};
