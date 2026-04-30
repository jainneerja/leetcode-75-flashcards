import { FlashCard } from '../../../types/card';

export const pacificAtlantic: FlashCard = {
  id: 'lc-417-pacific-atlantic-water-flow',
  leetcodeNumber: 417,
  title: 'Pacific Atlantic Water Flow',
  pattern: 'DFS/BFS from Borders (Reverse Flow)',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['graph', 'dfs', 'bfs', 'matrix'],
  realWorldScenario:
    "Watershed mapping — rain falls on a hilly island. Water flows to adjacent cells that are equal or lower in height. Find every hilltop where rainwater could flow to BOTH the Pacific Ocean (top/left border) and the Atlantic Ocean (bottom/right border).",
  vizType: 'PacificAtlanticViz',
  keyIdea:
    'Reverse the flow direction: instead of water flowing downhill to the ocean, flood uphill from each ocean border. Any cell reachable from BOTH oceans is an answer.',
  approach: [
    'Create two visited sets: pacific (reachable from top+left borders) and atlantic (reachable from bottom+right borders).',
    'Run multi-source BFS/DFS from all Pacific border cells — move to neighbors with height ≥ current (reversed flow).',
    'Run multi-source BFS/DFS from all Atlantic border cells similarly.',
    'Collect all cells present in BOTH visited sets — these are the answer.',
  ],
  complexity: { time: 'O(m × n)', space: 'O(m × n)' },
  codeSnippet: `function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length, n = heights[0].length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

  function bfs(starts: number[][]): boolean[][] {
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    const queue = [...starts];
    for (const [r, c] of starts) visited[r][c] = true;
    while (queue.length) {
      const [r, c] = queue.shift()!;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n &&
            !visited[nr][nc] && heights[nr][nc] >= heights[r][c]) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
    return visited;
  }

  const pacStarts: number[][] = [];
  const atlStarts: number[][] = [];
  for (let r = 0; r < m; r++) {
    pacStarts.push([r, 0]); atlStarts.push([r, n - 1]);
  }
  for (let c = 0; c < n; c++) {
    pacStarts.push([0, c]); atlStarts.push([m - 1, c]);
  }

  const pac = bfs(pacStarts), atl = bfs(atlStarts);
  const res: number[][] = [];
  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++)
      if (pac[r][c] && atl[r][c]) res.push([r, c]);
  return res;
}`,
  hints: [
    'Flowing from the ocean uphill (reverse direction) is much easier to implement than simulating downhill flow.',
    'Multi-source BFS — start from ALL border cells simultaneously.',
  ],
};
