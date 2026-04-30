import { FlashCard } from '../../../types/card';

export const houseRobber: FlashCard = {
  id: 'lc-198-house-robber',
  leetcodeNumber: 198,
  title: 'House Robber',
  pattern: '1D Dynamic Programming',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  tags: ['dp', 'array', 'greedy-dp'],
  realWorldScenario:
    'Street burglar — each house has cash, but robbing two adjacent houses triggers the alarm. Plan the optimal robbery route to maximise your total loot without hitting any two neighbouring houses.',
  vizType: 'HouseRobberViz',
  keyIdea:
    'dp[i] = max(dp[i-1], dp[i-2] + nums[i]). At every house choose: skip it (dp[i-1]) or rob it and add to the best from two houses back (dp[i-2] + nums[i]).',
  approach: [
    'Track two variables: rob1 (best loot skipping current house) and rob2 (best loot including current).',
    'For each house: newRob = max(rob2, rob1 + nums[i]). Shift: rob1 = rob2, rob2 = newRob.',
    'Return rob2 after processing all houses.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function rob(nums: number[]): number {
  let rob1 = 0, rob2 = 0;
  for (const n of nums) {
    const temp = Math.max(rob2, rob1 + n);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}`,
  hints: [
    'At each house you have exactly two choices: rob it or skip it.',
    'You never need the full DP table — just the previous two states.',
  ],
};
