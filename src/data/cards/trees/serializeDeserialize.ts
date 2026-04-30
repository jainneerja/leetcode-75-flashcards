import { FlashCard } from '../../../types/card';

export const serializeDeserialize: FlashCard = {
  id: 'lc-297',
  leetcodeNumber: 297,
  title: 'Serialize and Deserialize Binary Tree',
  pattern: 'BFS / Pre-order DFS',
  difficulty: 'Hard',
  category: 'Trees',
  tags: ['tree', 'dfs', 'bfs', 'design', 'serialization'],
  realWorldScenario:
    'Save and restore a game state — encode a tree to a string so it can be stored or transmitted, then reconstruct it perfectly on the other end.',
  vizType: 'SerializeDeserializeViz',
  keyIdea:
    'Pre-order DFS with "#" for null nodes. Serialize visits root-left-right, writing each value. Deserialize splits the string and rebuilds using an index pointer.',
  approach: [
    'Serialize: pre-order DFS, append node.val or "#" with comma delimiter',
    'Deserialize: split string into array, use closure index variable',
    'If current token is "#", advance index and return null',
    'Create node with current value, advance index',
    'Recursively set node.left and node.right',
    'Return node',
  ],
  complexity: { time: 'O(n)', space: 'O(n)' },
  codeSnippet: `function serialize(root) {
  const res = [];
  function dfs(node) {
    if (!node) { res.push('#'); return; }
    res.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return res.join(',');
}

function deserialize(data) {
  const vals = data.split(',');
  let i = 0;
  function dfs() {
    if (vals[i] === '#') { i++; return null; }
    const node = new TreeNode(Number(vals[i++]));
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  return dfs();
}`,
  hints: [
    'Pre-order with null markers uniquely encodes any binary tree (unlike in-order which cannot)',
    'The index must be shared across recursive calls — use a closure or wrapper object',
    'BFS (level-order) serialization also works and is used in LeetCode\'s own format',
  ],
  commonMistakes: [
    'Using in-order traversal — cannot uniquely reconstruct without null markers AND it still does not work for duplicates',
    'Passing the index by value instead of by reference (use closure i variable)',
  ],
};
