import { FlashCard } from '../../../types/card';

export const numberOfIslands: FlashCard = {
  id: 'graphs-200',
  leetcodeNumber: 200,
  title: 'Number of Islands',
  pattern: 'DFS / BFS on Grid',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['dfs', 'bfs', 'grid', 'union-find'],
  realWorldScenario: 'Satellite imagery — count distinct land masses surrounded by ocean in a geographic grid',
  vizType: 'NumberOfIslandsViz',
  keyIdea: "When '1' found, DFS to mark all connected '1's as visited; increment island counter",
  approach: [
    "Iterate every cell in the grid",
    "If cell is '1' (unvisited land), increment island count",
    "DFS from that cell: mark all 4-directionally connected '1' cells as '0' (visited)",
    "Continue scanning; already-visited cells won't trigger new DFS",
  ],
  complexity: { time: 'O(m*n)', space: 'O(m*n)' },
  codeSnippet: `function numIslands(grid) {
  let count = 0;
  const rows = grid.length, cols = grid[0].length;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') return;
    grid[r][c] = '0'; // mark visited
    dfs(r + 1, c); dfs(r - 1, c);
    dfs(r, c + 1); dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}`,
  hints: [
    'What happens if you modify the grid in-place vs using a visited set?',
    'Why check all 4 directions (not 8)?',
    'How does BFS differ from DFS here in terms of result?',
  ],
  commonMistakes: [
    "Forgetting to mark cells as visited before recursing (infinite loop)",
    'Checking only 2 directions instead of all 4',
    'Not handling the edge case of an empty grid',
  ],
};
