import { FlashCard } from '../../../types/card';

export const levelOrderTraversal: FlashCard = {
  id: 'lc-102',
  leetcodeNumber: 102,
  title: 'Binary Tree Level Order Traversal',
  pattern: 'BFS (Queue)',
  difficulty: 'Medium',
  category: 'Trees',
  tags: ['tree', 'bfs', 'queue', 'level-order'],
  realWorldScenario:
    'Floor-by-floor building tour — visit every room on each floor before going to the next. You need a complete list of who is on each floor.',
  vizType: 'LevelOrderViz',
  keyIdea:
    'Queue-based BFS; capture the queue size at the start of each iteration to know how many nodes belong to the current level.',
  approach: [
    'Initialize queue with root',
    'While queue is not empty:',
    '  Record current queue length (= nodes at this level)',
    '  Process exactly that many nodes, adding their values to current level array',
    '  Enqueue each node\'s non-null children',
    '  Push current level array to result',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}`,
  hints: [
    'Snapshot queue.length before the inner loop — this is the level boundary trick',
    'Use a deque/array; queue.shift() is O(n) in JS — for performance use an index pointer',
    'The inner for-loop processes exactly one level per outer iteration',
  ],
  commonMistakes: [
    'Not snapshotting the queue length — queue grows as you enqueue children, blurring level boundaries',
    'Using DFS (stack) instead of BFS (queue)',
  ],
};
