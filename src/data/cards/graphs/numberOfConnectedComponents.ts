import { FlashCard } from '../../../types/card';

export const numberOfConnectedComponents: FlashCard = {
  id: 'lc-323-number-of-connected-components',
  leetcodeNumber: 323,
  title: 'Number of Connected Components in an Undirected Graph',
  pattern: 'Union-Find / DFS',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['graph', 'union-find', 'dfs', 'connected-components'],
  realWorldScenario:
    'Corporate network topology — you have n servers and a list of direct connections. How many isolated sub-networks (connected components) exist? Servers in the same component can communicate; isolated groups cannot.',
  vizType: 'ConnectedComponentsViz',
  keyIdea:
    'Union-Find: initialise each node as its own root. For each edge, union the two nodes. Count distinct roots at the end = number of connected components.',
  approach: [
    'Initialise parent[i] = i and rank[i] = 0 for each of the n nodes.',
    'For each edge (u, v): find the root of u and v with path compression.',
    'If roots differ, union them by rank (attach smaller tree under larger). Decrement component count.',
    'The final component count equals the number of disjoint sets.',
  ],
  complexity: { time: 'O(n · α(n)) ≈ O(n)', space: 'O(n)' },
  codeSnippet: `function countComponents(n: number, edges: number[][]): number {
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);

  function find(x: number): number {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(x: number, y: number): boolean {
    const rx = find(x), ry = find(y);
    if (rx === ry) return false;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    return true;
  }

  let components = n;
  for (const [u, v] of edges) {
    if (union(u, v)) components--;
  }
  return components;
}`,
  hints: [
    'Start with n components (every node is its own island). Each successful union reduces the count by 1.',
    'Path compression in find() makes subsequent lookups nearly O(1).',
  ],
};
