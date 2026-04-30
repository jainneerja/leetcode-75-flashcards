import { FlashCard } from '../../../types/card';

export const subtreeOfAnotherTree: FlashCard = {
  id: 'lc-572',
  leetcodeNumber: 572,
  title: 'Subtree of Another Tree',
  pattern: 'DFS + isSameTree',
  difficulty: 'Easy',
  category: 'Trees',
  tags: ['tree', 'dfs', 'recursion', 'subtree'],
  realWorldScenario:
    'Document template matching — does this large org chart contain this smaller team structure anywhere within it?',
  vizType: 'SubtreeViz',
  keyIdea:
    'At each node in root, check if the subtree rooted there equals subRoot using isSameTree as a helper. Recurse into left and right if not.',
  approach: [
    'If root is null, return false (subRoot not found)',
    'If isSameTree(root, subRoot) is true, return true',
    'Recurse: return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)',
    'isSameTree: both null → true, one null → false, val differs → false, recurse both',
  ],
  complexity: { time: 'O(m*n)', space: 'O(h)' },
  codeSnippet: `function isSubtree(root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) ||
         isSubtree(root.right, subRoot);
}

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) &&
         isSameTree(p.right, q.right);
}`,
  hints: [
    'Reuse isSameTree from LC100 — this problem builds directly on it',
    'You call isSameTree at every node in root: O(m) calls, each O(n) → O(m*n)',
    'If subRoot is null, it is always a subtree (trivially true)',
  ],
  commonMistakes: [
    'Checking root === subRoot (reference equality) instead of structural equality',
    'Forgetting to recurse into both left and right subtrees of root',
  ],
};
