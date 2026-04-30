import { FlashCard } from '../../../types/card';

export const surroundedRegions: FlashCard = {
  id: 'lc-130-surrounded-regions',
  leetcodeNumber: 130,
  title: 'Surrounded Regions',
  pattern: 'DFS from Border',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['graph', 'dfs', 'matrix', 'union-find'],
  realWorldScenario:
    "Go board game — 'O' stones completely surrounded by 'X' stones get captured and flipped to 'X'. Stones connected to the edge of the board can never be captured. Find and flip all truly surrounded regions.",
  vizType: 'SurroundedRegionsViz',
  keyIdea:
    "Any 'O' connected to a border 'O' is safe and cannot be captured. Mark all safe 'O's via DFS from borders, then flip remaining interior 'O's to 'X'.",
  approach: [
    "DFS from every 'O' on the 4 borders — mark these and all connected 'O's as safe (e.g., 'S').",
    "Traverse the entire board: flip remaining 'O' to 'X' (captured), and restore 'S' to 'O' (safe).",
  ],
  complexity: { time: 'O(m × n)', space: 'O(m × n)' },
  codeSnippet: `function solve(board: string[][]): void {
  const m = board.length, n = board[0].length;

  function dfs(r: number, c: number) {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;
    board[r][c] = 'S'; // safe
    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);
  }

  // Mark border-connected O's as safe
  for (let r = 0; r < m; r++) { dfs(r, 0); dfs(r, n-1); }
  for (let c = 0; c < n; c++) { dfs(0, c); dfs(m-1, c); }

  // Flip: captured O→X, safe S→O
  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++)
      board[r][c] = board[r][c] === 'S' ? 'O' : board[r][c] === 'O' ? 'X' : board[r][c];
}`,
  hints: [
    "Think backwards: instead of finding surrounded regions, find the SAFE ones first (connected to border).",
    'Three-pass approach: mark safe → capture unsolved → restore safe.',
  ],
};
