import { FlashCard } from '../../../types/card';

export const rottingOranges: FlashCard = {
  id: 'lc-994-rotting-oranges',
  leetcodeNumber: 994,
  title: 'Rotting Oranges',
  pattern: 'Multi-Source BFS',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['graph', 'bfs', 'matrix', 'multi-source'],
  realWorldScenario:
    'Disease spread simulation — rotten oranges infect all adjacent fresh oranges every minute. Starting from multiple rotten oranges simultaneously, how many minutes until all oranges are rotten? Return -1 if it\'s impossible.',
  vizType: 'RottingOrangesViz',
  keyIdea:
    'Multi-source BFS: enqueue ALL rotten oranges at minute 0 simultaneously, then BFS outward level by level — each BFS level = one minute of spreading.',
  approach: [
    'Count fresh oranges; enqueue all initially rotten oranges (value 2) as BFS sources.',
    'BFS level by level: each level is one minute. For each rotten orange spread to adjacent fresh ones.',
    'Decrement fresh count for each newly rotted orange.',
    'After BFS: if fresh count is 0 return minutes elapsed, else return -1 (some fresh are unreachable).',
  ],
  complexity: { time: 'O(m × n)', space: 'O(m × n)' },
  codeSnippet: `function orangesRotting(grid: number[][]): number {
  const m = grid.length, n = grid[0].length;
  const queue: [number, number][] = [];
  let fresh = 0;

  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      if (grid[r][c] === 1) fresh++;
    }

  if (fresh === 0) return 0;

  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let minutes = 0;

  while (queue.length && fresh > 0) {
    minutes++;
    for (let i = queue.length; i > 0; i--) {
      const [r, c] = queue.shift()!;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          fresh--;
          queue.push([nr, nc]);
        }
      }
    }
  }

  return fresh === 0 ? minutes : -1;
}`,
  hints: [
    'Add ALL initially rotten oranges to the queue before starting BFS — they all spread simultaneously.',
    'Count BFS levels, not individual cell visits.',
  ],
};
