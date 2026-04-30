import { FlashCard } from '../../../types/card';

export const rightSideView: FlashCard = {
  id: 'lc-199',
  leetcodeNumber: 199,
  title: 'Binary Tree Right Side View',
  pattern: 'BFS (rightmost per level)',
  difficulty: 'Medium',
  category: 'Trees',
  tags: ['tree', 'bfs', 'dfs', 'level-order'],
  realWorldScenario:
    'Photograph from the right — standing to the right of the tree, you only see the rightmost node on each level. Which nodes appear in the photo?',
  vizType: 'RightSideViewViz',
  keyIdea:
    'BFS level by level; at each level, the last node encountered is visible from the right. Add it to the result.',
  approach: [
    'Initialize queue with root',
    'While queue is not empty:',
    '  Process all nodes at current level',
    '  The last node processed is the rightmost — add its value to result',
    '  Enqueue children left-to-right so rightmost is processed last',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function rightSideView(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === levelSize - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}`,
  hints: [
    'The last node in each BFS level is the rightmost visible node',
    'DFS alternative: traverse right before left; track depth; first node at each depth is the answer',
    'i === levelSize - 1 is the index check for "last in level"',
  ],
  commonMistakes: [
    'Adding the first node instead of the last node of each level',
    'Forgetting to enqueue children of all nodes (not just the rightmost)',
  ],
};
