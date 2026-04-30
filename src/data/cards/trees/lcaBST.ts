import { FlashCard } from '../../../types/card';

export const lcaBST: FlashCard = {
  id: 'lc-235',
  leetcodeNumber: 235,
  title: 'Lowest Common Ancestor of a BST',
  pattern: 'BST Property Traversal',
  difficulty: 'Medium',
  category: 'Trees',
  tags: ['tree', 'bst', 'lca', 'traversal'],
  realWorldScenario:
    'Family reunion — find the closest common ancestor of two relatives in a sorted family tree. The BST ordering tells you which branch to take.',
  vizType: 'LCABSTViz',
  keyIdea:
    'If both p and q are less than root → LCA is in left subtree. If both greater → right. Otherwise root is the split point and is the LCA.',
  approach: [
    'Start at root',
    'If both p.val and q.val < root.val, move to root.left',
    'If both p.val and q.val > root.val, move to root.right',
    'Otherwise (one on each side, or one equals root), return root',
  ],
  complexity: { time: 'O(h)', space: 'O(1)' },
  codeSnippet: `function lowestCommonAncestor(root, p, q) {
  let cur = root;
  while (cur) {
    if (p.val < cur.val && q.val < cur.val) {
      cur = cur.left;
    } else if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right;
    } else {
      return cur;
    }
  }
  return null;
}`,
  hints: [
    'The BST property is the key insight — you never need to explore both sides',
    'When the values straddle the current node, the current node IS the LCA',
    'O(h) is O(log n) for balanced BST, O(n) worst case for skewed',
  ],
  commonMistakes: [
    'Treating this like a general binary tree LCA (LC236) — BST ordering makes it simpler',
    'Not handling the case where p or q equals the current node (they are their own ancestor)',
  ],
};
