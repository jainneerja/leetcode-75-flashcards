import { FlashCard } from '../../../types/card';

export const maxDepth: FlashCard = {
  id: 'lc-104',
  leetcodeNumber: 104,
  title: 'Maximum Depth of Binary Tree',
  pattern: 'DFS (Post-order)',
  difficulty: 'Easy',
  category: 'Trees',
  tags: ['tree', 'dfs', 'recursion', 'depth'],
  realWorldScenario:
    'Tallest branch of a corporate org chart — how many levels down does it go? The CEO is level 1, their direct reports level 2, and so on.',
  vizType: 'MaxDepthViz',
  keyIdea:
    'maxDepth(node) = 1 + max(maxDepth(left), maxDepth(right)); base case: null → 0. Post-order DFS computes depth bottom-up.',
  approach: [
    'Base case: if node is null, return 0',
    'Recursively get depth of left subtree',
    'Recursively get depth of right subtree',
    'Return 1 + max(leftDepth, rightDepth)',
  ],
  complexity: { time: 'O(n)', space: 'O(h)' },
  codeSnippet: `function maxDepth(root) {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
}`,
  hints: [
    'This is a classic post-order problem — you need answers from children before computing the parent',
    'BFS alternative: count levels as you process each queue level',
    'h = height of tree; O(h) space for the call stack, which is O(n) worst case (skewed tree)',
  ],
  commonMistakes: [
    'Returning 1 instead of 0 for the null base case',
    'Confusing depth (root = depth 1) with height (leaf = height 0)',
  ],
};
