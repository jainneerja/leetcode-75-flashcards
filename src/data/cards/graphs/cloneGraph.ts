import { FlashCard } from '../../../types/card';

export const cloneGraph: FlashCard = {
  id: 'graphs-133',
  leetcodeNumber: 133,
  title: 'Clone Graph',
  pattern: 'DFS / BFS + Hash Map',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['dfs', 'bfs', 'graph', 'hash table'],
  realWorldScenario: 'Deep copying a social network — clone all users and their connections without creating loops',
  vizType: 'CloneGraphViz',
  keyIdea: 'HashMap<original, copy>; DFS through graph, create copies, recursively clone neighbors',
  approach: [
    'Use a HashMap mapping each original node to its clone',
    'DFS: if node already in map, return its clone (handles cycles)',
    'Otherwise create a new clone node, add to map',
    'Recursively clone each neighbor and add to clone\'s neighbors list',
    'Return the clone of the starting node',
  ],
  complexity: { time: 'O(V+E)', space: 'O(V+E)' },
  codeSnippet: `function cloneGraph(node) {
  if (!node) return null;
  const visited = new Map(); // original -> clone

  function dfs(n) {
    if (visited.has(n)) return visited.get(n);

    const clone = { val: n.val, neighbors: [] };
    visited.set(n, clone);

    for (const neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }

  return dfs(node);
}`,
  hints: [
    'Why do we need the visited map — what goes wrong without it?',
    'What is the base case that prevents infinite recursion?',
    'Could you do this iteratively with BFS?',
  ],
  commonMistakes: [
    'Not checking visited before creating a new node (causes infinite loop on cycles)',
    'Sharing neighbor references between original and clone instead of cloning them',
    'Forgetting to add the new clone to the map before recursing neighbors',
  ],
};
