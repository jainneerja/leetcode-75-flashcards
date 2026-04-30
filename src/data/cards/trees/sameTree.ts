import { FlashCard } from '../../../types/card';

export const sameTree: FlashCard = {
  id: 'lc-100',
  leetcodeNumber: 100,
  title: 'Same Tree',
  pattern: 'DFS (Simultaneous traversal)',
  difficulty: 'Easy',
  category: 'Trees',
  tags: ['tree', 'dfs', 'recursion', 'comparison'],
  realWorldScenario:
    'DNA matching — are two family trees structurally identical with the same values? Every branch and leaf must correspond exactly.',
  vizType: 'SameTreeViz',
  keyIdea:
    'Both null → true; one null → false; values differ → false; recurse on both subtrees simultaneously. All four conditions must be checked.',
  approach: [
    'If both p and q are null, return true',
    'If only one is null, return false',
    'If p.val !== q.val, return false',
    'Return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)',
  ],
  complexity: { time: 'O(n)', space: 'O(h)' },
  codeSnippet: `function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) &&
         isSameTree(p.right, q.right);
}`,
  hints: [
    'Handle null cases first — they are the base cases',
    'Short-circuit: if values differ, no need to recurse deeper',
    'The && ensures both subtrees must match',
  ],
  commonMistakes: [
    'Checking only structure without checking values',
    'Not handling the case where one is null and the other is not',
  ],
};
