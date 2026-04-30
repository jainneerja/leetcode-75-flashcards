import { FlashCard } from '../../../types/card';

export const wordSearchII: FlashCard = {
  id: 'lc-212',
  leetcodeNumber: 212,
  title: 'Word Search II',
  pattern: 'Trie + DFS Backtracking',
  difficulty: 'Hard',
  category: 'Tries',
  tags: ['trie', 'dfs', 'backtracking', 'matrix', 'string'],
  realWorldScenario:
    'Word hunt puzzle — find all hidden words from a dictionary in a 2D letter grid. Words can snake in any direction through adjacent cells.',
  vizType: 'WordSearchIIViz',
  keyIdea:
    'Build a Trie from all words; DFS from every grid cell using the Trie to prune paths early. Mark visited cells with a sentinel. Prune empty Trie nodes.',
  approach: [
    'Build Trie from all words in the dictionary',
    'DFS from every cell (r, c) with the Trie root',
    'At each step: check bounds, check not visited, check board[r][c] in trie node children',
    'Mark cell visited (e.g., board[r][c] = "#"), recurse 4 neighbors',
    'Restore cell after recursion (backtrack)',
    'If trie node has word, add to result set and clear the word to avoid duplicates',
  ],
  complexity: { time: 'O(M * 4 * 3^(L-1)) where L = max word length', space: 'O(W*L) for Trie' },
  codeSnippet: `function findWords(board, words) {
  const root = buildTrie(words);
  const res = new Set();
  const rows = board.length, cols = board[0].length;

  function dfs(node, r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    const ch = board[r][c];
    if (!node.children[ch]) return;
    const next = node.children[ch];
    if (next.word) { res.add(next.word); next.word = null; }
    board[r][c] = '#';
    dfs(next, r+1, c); dfs(next, r-1, c);
    dfs(next, r, c+1); dfs(next, r, c-1);
    board[r][c] = ch;
  }

  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      dfs(root, r, c);

  return [...res];
}

function buildTrie(words) {
  const root = { children: {} };
  for (const w of words) {
    let node = root;
    for (const ch of w) {
      if (!node.children[ch]) node.children[ch] = { children: {} };
      node = node.children[ch];
    }
    node.word = w;
  }
  return root;
}`,
  hints: [
    'Using Trie instead of a Set means you prune the DFS as soon as no word starts with the current prefix',
    'Temporarily marking the cell "#" prevents revisiting in the same DFS path',
    'Setting next.word = null after finding a word prevents duplicates without an extra Set',
  ],
  commonMistakes: [
    'Using a plain Set to check words — you lose early pruning and performance degrades',
    'Forgetting to restore board[r][c] after DFS (backtracking step)',
    'Not handling duplicate words in the input words list',
  ],
};
