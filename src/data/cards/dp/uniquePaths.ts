import { FlashCard } from '../../../types/card';

export const uniquePaths: FlashCard = {
  id: 'lc-062-unique-paths',
  leetcodeNumber: 62,
  title: 'Unique Paths',
  pattern: '2D Dynamic Programming',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  tags: ['dp', 'math', 'combinatorics', 'grid'],
  realWorldScenario:
    'Robot delivery navigator — a robot starts at the top-left of an m×n warehouse grid and must reach the bottom-right corner. It can only move right or down. How many distinct routes exist?',
  vizType: 'UniquePathsViz',
  keyIdea:
    'dp[i][j] = number of ways to reach cell (i,j) = dp[i-1][j] + dp[i][j-1]. The top row and left column are all 1 (only one way to reach them). Math shortcut: C(m+n-2, m-1).',
  approach: [
    'Initialise all cells in first row and first column to 1.',
    'For each remaining cell: dp[i][j] = dp[i-1][j] + dp[i][j-1].',
    'Return dp[m-1][n-1].',
  ],
  complexity: { time: 'O(m × n)', space: 'O(n) with row optimisation' },
  codeSnippet: `function uniquePaths(m: number, n: number): number {
  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }
  return dp[n - 1];
}`,
  hints: [
    'Every cell on the top edge or left edge has exactly 1 path to it.',
    'You can reduce to O(n) space by updating a single row in-place.',
  ],
};
