import { FlashCard } from '../../../types/card';

export const invertBinaryTree: FlashCard = {
  id: 'lc-226',
  leetcodeNumber: 226,
  title: 'Invert Binary Tree',
  pattern: 'DFS / BFS',
  difficulty: 'Easy',
  category: 'Trees',
  tags: ['tree', 'dfs', 'bfs', 'recursion'],
  realWorldScenario:
    'Mirror selfie — flip a family tree photo so left and right sides swap. Every parent keeps their position but their children switch sides.',
  vizType: 'InvertTreeViz',
  keyIdea:
    'Recursively swap left and right children at every node. Post-order: invert left subtree, invert right subtree, then swap the two children at current node.',
  approach: [
    'Base case: if node is null, return null',
    'Recursively call invertTree on left child',
    'Recursively call invertTree on right child',
    'Swap node.left and node.right',
    'Return the node',
  ],
  complexity: { time: 'O(n)', space: 'O(h)' },
  codeSnippet: `function invertTree(root) {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}`,
  hints: [
    'Think about what needs to happen at every single node',
    'The order (pre/post) does not matter here — swapping before or after recursion both work',
    'BFS with a queue also works: swap children as you visit each node',
  ],
  commonMistakes: [
    'Forgetting the base case for null nodes',
    'Swapping before saving references (not an issue in JS but matters in other languages)',
  ],
};
