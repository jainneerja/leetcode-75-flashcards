import { FlashCard } from '../../../types/card';

export const coinChange: FlashCard = {
  id: 'lc-322-coin-change',
  leetcodeNumber: 322,
  title: 'Coin Change',
  pattern: '1D DP (Bottom-Up Unbounded Knapsack)',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  tags: ['dp', 'bfs', 'unbounded-knapsack'],
  realWorldScenario:
    'Vending machine — you have coins of different denominations and need to make exact change for a purchase using as few coins as possible. Coins can be reused any number of times.',
  vizType: 'CoinChangeViz',
  keyIdea:
    'dp[i] = minimum coins needed to make amount i. For each amount build up from smaller subproblems: dp[i] = 1 + min(dp[i - coin]) for every coin ≤ i.',
  approach: [
    'Create dp array of size amount+1, initialised to Infinity. Set dp[0] = 0.',
    'For each amount from 1 to amount: try every coin ≤ amount.',
    'dp[i] = min(dp[i], dp[i - coin] + 1).',
    'Return dp[amount] if not Infinity, else -1.',
  ],
  complexity: { time: 'O(amount × coins)', space: 'O(amount)' },
  codeSnippet: `function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
  hints: [
    'dp[0] = 0 is the base case — zero coins needed to make amount 0.',
    'Try every coin at every amount to find the global minimum.',
  ],
};
