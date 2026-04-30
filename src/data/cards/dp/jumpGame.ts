import { FlashCard } from '../../../types/card';

export const jumpGame: FlashCard = {
  id: 'lc-055-jump-game',
  leetcodeNumber: 55,
  title: 'Jump Game',
  pattern: 'Greedy',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  tags: ['greedy', 'dp', 'array'],
  realWorldScenario:
    'Leapfrog race — you\'re on a path of tiles, each showing your maximum jump distance. Starting at tile 0, can you reach the last tile? A tile showing 0 might trap you if you haven\'t already jumped past it.',
  vizType: 'JumpGameViz',
  keyIdea:
    'Track the furthest index reachable so far (maxReach). For each index i, if i > maxReach you are stuck. Otherwise update maxReach = max(maxReach, i + nums[i]). If maxReach ≥ last index → return true.',
  approach: [
    'Initialise maxReach = 0.',
    'Iterate i from 0 to n-1: if i > maxReach return false (stuck at index i).',
    'Update maxReach = max(maxReach, i + nums[i]).',
    'If maxReach ≥ n-1 return true.',
  ],
  complexity: { time: 'O(n)', space: 'O(1)' },
  codeSnippet: `function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}`,
  hints: [
    'You don\'t need to track every possible path — just the furthest you can reach.',
    'If maxReach stalls before the end because every reachable tile has value 0, you\'re stuck.',
  ],
};
