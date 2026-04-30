import { FlashCard } from '../../../types/card';

export const maxAreaIsland: FlashCard = {
  id: 'graphs-695',
  leetcodeNumber: 695,
  title: 'Max Area of Island',
  pattern: 'DFS on Grid',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['dfs', 'bfs', 'grid', 'union-find'],
  realWorldScenario: 'Real estate survey — find the largest contiguous land area in a property grid',
  vizType: 'MaxAreaIslandViz',
  keyIdea: "DFS from each unvisited '1', count cells, mark visited. Return maximum count found.",
  approach: [
    "Scan every cell; when unvisited '1' found, run DFS",
    'DFS returns the area of the connected component',
    'Mark each visited cell as 0 to avoid re-counting',
    'Track and return the maximum area seen',
  ],
  complexity: { time: 'O(m*n)', space: 'O(m*n)' },
  codeSnippet: `function maxAreaOfIsland(grid) {
  const rows = grid.length, cols = grid[0].length;
  let maxArea = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;
    grid[r][c] = 0; // mark visited
    return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }
  return maxArea;
}`,
  hints: [
    'How do you count cells during DFS — what does each DFS call return?',
    'When does mutating the grid help vs hurt?',
    'What is the difference from Number of Islands?',
  ],
  commonMistakes: [
    'Not marking cells visited before recursing (infinite recursion)',
    'Counting cells after marking them 0 (correct: mark then count as 1)',
    'Using a visited array but still allowing re-entry',
  ],
};
