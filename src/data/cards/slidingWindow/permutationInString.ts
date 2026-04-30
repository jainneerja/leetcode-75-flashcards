import { FlashCard } from '../../../types/card';

export const permutationInString: FlashCard = {
  id: 'sliding-window-permutation-in-string',
  leetcodeNumber: 567,
  title: 'Permutation in String',
  pattern: 'Sliding Window + Frequency Count',
  difficulty: 'Medium',
  category: 'Sliding Window',
  tags: ['string', 'sliding window', 'hash map'],
  realWorldScenario:
    'Word puzzle — does this long string contain any scrambled version of the secret code? Check if any anagram of s1 appears as a substring of s2.',
  vizType: 'PermutationStringViz',
  keyIdea:
    'Fixed window of size s1.length slides over s2. Use a "matches" counter tracking how many of the 26 letters have equal frequency in both windows — when matches == 26 a permutation is found.',
  approach: [
    'Build frequency arrays for s1 and the first window of s2.',
    'Count initial matches (positions where both freq arrays agree).',
    'Slide the window: remove leftmost char, add new right char, update matches count.',
    'If matches == 26 at any point, return true.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - a]++;
    s2Count[s2.charCodeAt(i) - a]++;
  }

  let matches = s1Count.filter((v, i) => v === s2Count[i]).length;

  for (let i = s1.length; i < s2.length; i++) {
    if (matches === 26) return true;

    const right = s2.charCodeAt(i) - a;
    s2Count[right]++;
    if (s2Count[right] === s1Count[right]) matches++;
    else if (s2Count[right] === s1Count[right] + 1) matches--;

    const left = s2.charCodeAt(i - s1.length) - a;
    s2Count[left]--;
    if (s2Count[left] === s1Count[left]) matches++;
    else if (s2Count[left] === s1Count[left] - 1) matches--;
  }

  return matches === 26;
}`,
  hints: [
    'The window is fixed at exactly s1.length — no need to resize.',
    'The matches counter avoids re-comparing all 26 letters on every slide.',
    'Check matches == 26 both inside the loop and after the final slide.',
  ],
  commonMistakes: [
    'Comparing entire frequency arrays on each step — O(26n) instead of O(n).',
    'Forgetting to check the last window after the loop ends.',
  ],
};
