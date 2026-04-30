import { FlashCard } from '../../../types/card';

export const longestSubstringNoRepeat: FlashCard = {
  id: 'sliding-window-longest-substring-no-repeat',
  leetcodeNumber: 3,
  title: 'Longest Substring Without Repeating Characters',
  pattern: 'Sliding Window + Hash Map',
  difficulty: 'Medium',
  category: 'Sliding Window',
  tags: ['string', 'sliding window', 'hash map'],
  realWorldScenario:
    'Radio DJ — find the longest run of a song playlist with no repeated artist. You want the longest stretch of unique artists in a row.',
  vizType: 'LongestSubstringViz',
  keyIdea:
    'Expand right pointer, shrink left when a duplicate is found. The map stores the last seen index of each character so the left pointer jumps directly past the duplicate.',
  approach: [
    'Use a map to store the last index of each character.',
    'Expand right pointer through the string.',
    'When a duplicate is found, move left pointer to max(left, map[char] + 1) to skip past the repeat.',
    'Update max length as right - left + 1 at each step.',
  ],
  complexity: { time: 'O(n)', space: 'O(min(m,n))' },
  codeSnippet: `function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (map.has(ch) && map.get(ch)! >= left) {
      left = map.get(ch)! + 1;
    }
    map.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`,
  hints: [
    'The map stores the last index, not just presence — this lets the left pointer jump efficiently.',
    'Guard the left pointer update with >= left to avoid moving it backwards.',
    'Window size at each step is right - left + 1.',
  ],
  commonMistakes: [
    'Moving left pointer backwards when a duplicate was seen before the current window.',
    'Using a set and walking left one step at a time — O(n²) worst case.',
    'Off-by-one when computing window size.',
  ],
};
