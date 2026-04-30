import { FlashCard } from '../../../types/card';

export const binaryTreeMaxPathSum: FlashCard = {
  id: 'lc-124',
  leetcodeNumber: 124,
  title: 'Binary Tree Maximum Path Sum',
  pattern: 'DFS (Post-order + Global Max)',
  difficulty: 'Hard',
  category: 'Trees',
  tags: ['tree', 'dfs', 'dynamic-programming', 'path-sum'],
  realWorldScenario:
    'Hiking trail system — find the highest-scoring route through any combination of connected trails. The route can go up and then down through any node.',
  vizType: 'MaxPathSumViz',
  keyIdea:
    'Each node contributes max(left,0) + val + max(right,0) as a "through" path candidate for the global max. Return val + max(left,right,0) upward to parent (can only extend one side).',
  approach: [
    'Global variable res = -Infinity',
    'DFS helper returns max gain extending from this node upward',
    'left = max(dfs(node.left), 0) — ignore negative subtrees',
    'right = max(dfs(node.right), 0)',
    'Update res = max(res, left + node.val + right) — "through" path',
    'Return node.val + max(left, right) — can only go one direction upward',
  ],
  complexity: { time: 'O(n)', space: 'O(h)' },
  codeSnippet: `function maxPathSum(root) {
  let res = -Infinity;
  function dfs(node) {
    if (!node) return 0;
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);
    res = Math.max(res, left + node.val + right);
    return node.val + Math.max(left, right);
  }
  dfs(root);
  return res;
}`,
  hints: [
    'A path can start and end at any node — it does not need to go through root',
    'Clamping gains to 0 with Math.max(..., 0) handles negative subtrees elegantly',
    'The "through" path (left + val + right) can be the answer but cannot be returned to parent',
  ],
  commonMistakes: [
    'Returning left + val + right to the parent (a path can only go one direction to its parent)',
    'Not initializing res to -Infinity (tree can have all negative values)',
    'Forgetting to handle negative subtree contributions by clamping at 0',
  ],
};
