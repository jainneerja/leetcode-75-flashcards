import { FlashCard } from '../../../types/card';

export const longestRepeatingCharReplacement: FlashCard = {
  id: 'sliding-window-longest-repeating-char-replacement',
  leetcodeNumber: 424,
  title: 'Longest Repeating Character Replacement',
  pattern: 'Sliding Window',
  difficulty: 'Medium',
  category: 'Sliding Window',
  tags: ['string', 'sliding window'],
  realWorldScenario:
    'Spell checker — what is the longest run of the same letter you can make with at most k edits? You can change any character to any other character.',
  vizType: 'LongestRepeatingViz',
  keyIdea:
    'windowSize - maxFreq <= k means the window is valid (all non-dominant chars can be replaced). If invalid, slide the left pointer forward.',
  approach: [
    'Maintain a frequency map and track the count of the most frequent character in the window.',
    'Expand right; if windowSize - maxFreq > k the window is invalid — increment left.',
    'The window never shrinks below its best valid size, so maxLen equals the final window size.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function characterReplacement(s: string, k: number): number {
  const count: Record<string, number> = {};
  let left = 0;
  let maxFreq = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxFreq = Math.max(maxFreq, count[s[right]]);

    while ((right - left + 1) - maxFreq > k) {
      count[s[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}`,
  hints: [
    'You only need to track the max frequency character — the others are the ones being replaced.',
    'maxFreq never needs to decrease; the window slides right monotonically.',
    'The condition (windowSize - maxFreq > k) is the key invariant.',
  ],
  commonMistakes: [
    'Recomputing maxFreq when shrinking — it is safe to let it stay stale because the window only grows when maxFreq increases.',
    'Forgetting that k replacements are allowed, not required.',
  ],
};
