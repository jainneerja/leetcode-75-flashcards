import { FlashCard } from '../../../types/card';

export const climbingStairs: FlashCard = {
  id: 'lc-070-climbing-stairs',
  leetcodeNumber: 70,
  title: 'Climbing Stairs',
  pattern: '1D Dynamic Programming (Fibonacci)',
  difficulty: 'Easy',
  category: 'Dynamic Programming',
  tags: ['dp', 'fibonacci', 'memoization'],
  realWorldScenario:
    'Staircase challenge — you can climb 1 or 2 steps at a time. How many distinct ways can you reach the top of an n-step staircase? The answer grows like the Fibonacci sequence.',
  vizType: 'ClimbingStairsViz',
  keyIdea:
    'dp[i] = dp[i-1] + dp[i-2]. To reach step i you either came from step i-1 (took 1 step) or step i-2 (took 2 steps). Only the last two values are needed — O(1) space.',
  approach: [
    'Base cases: dp[1] = 1 way, dp[2] = 2 ways.',
    'For each step 3..n: dp[i] = dp[i-1] + dp[i-2].',
    'Optimise to O(1) space using two variables: prev=1, curr=2; update by shifting.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function climbStairs(n: number): number {
  if (n <= 2) return n;
  let prev = 1, curr = 2;
  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}`,
  hints: [
    'Think about the last step you took — it was either 1 step or 2 steps.',
    'This is exactly the Fibonacci sequence starting from 1, 2.',
  ],
};
