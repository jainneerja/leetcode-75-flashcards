import { FlashCard } from '../../../types/card';

export const wordBreak: FlashCard = {
  id: 'lc-139-word-break',
  leetcodeNumber: 139,
  title: 'Word Break',
  pattern: '1D DP',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  tags: ['dp', 'trie', 'hash-set', 'string'],
  realWorldScenario:
    'Keyboard autocorrect — your phone got soaked and lost all spaces. Can the merged string "leetcode" be split into valid words from your dictionary? ["leet", "code"] → "leet code" ✓',
  vizType: 'WordBreakViz',
  keyIdea:
    'dp[i] = true if s[0..i-1] can be segmented into dictionary words. dp[i] = any dp[j] is true AND s[j..i-1] is in the dictionary, for 0 ≤ j < i.',
  approach: [
    'Create dp boolean array of size n+1. dp[0] = true (empty string is always valid).',
    'For each position i from 1 to n: check all j from 0 to i.',
    'If dp[j] is true and s.slice(j, i) is in the word set → set dp[i] = true and break.',
    'Return dp[n].',
  ],
  complexity: { time: 'O(n² × m) where m is avg word length', space: 'O(n)' },
  codeSnippet: `function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}`,
  hints: [
    'dp[0] = true means the empty prefix is trivially segmentable.',
    'Think of dp[i] as asking: "Can I find a valid word ending exactly at position i?"',
  ],
};
