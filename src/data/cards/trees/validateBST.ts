import { FlashCard } from '../../../types/card';

export const validateBST: FlashCard = {
  id: 'lc-98',
  leetcodeNumber: 98,
  title: 'Validate Binary Search Tree',
  pattern: 'DFS with bounds',
  difficulty: 'Medium',
  category: 'Trees',
  tags: ['tree', 'bst', 'dfs', 'validation'],
  realWorldScenario:
    'Pharmacy shelf audit — verify that medicine bottles are correctly sorted by dosage strength. Each bottle must be strictly between its surrounding bounds.',
  vizType: 'ValidateBSTViz',
  keyIdea:
    'Pass (min, max) bounds to each node. The node\'s value must be strictly in (min, max). Going left tightens the upper bound; going right tightens the lower bound.',
  approach: [
    'Helper: validate(node, min, max)',
    'Base case: null node → true',
    'If node.val <= min or node.val >= max → false',
    'Recurse left with (min, node.val) — right bound tightens',
    'Recurse right with (node.val, max) — left bound tightens',
    'Initial call: validate(root, -Infinity, Infinity)',
  ],
  complexity: { time: 'O(n)', space: 'O(h)' },
  codeSnippet: `function isValidBST(root) {
  function validate(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return validate(node.left, min, node.val) &&
           validate(node.right, node.val, max);
  }
  return validate(root, -Infinity, Infinity);
}`,
  hints: [
    'In-order traversal produces sorted array for valid BST — but bounds approach is cleaner',
    'Common mistake: only checking parent-child relationship, not the full ancestry constraint',
    'Use -Infinity and Infinity as initial bounds to handle any value',
  ],
  commonMistakes: [
    'Only comparing each node to its direct parent — a node must satisfy ALL ancestors\' constraints',
    'Using <= and >= instead of strict < > (BST requires strictly less/greater)',
  ],
};
