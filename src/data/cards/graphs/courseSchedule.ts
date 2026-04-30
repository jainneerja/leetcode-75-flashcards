import { FlashCard } from '../../../types/card';

export const courseSchedule: FlashCard = {
  id: 'lc-207-course-schedule',
  leetcodeNumber: 207,
  title: 'Course Schedule',
  pattern: 'Topological Sort / Cycle Detection',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['graph', 'dfs', 'topological-sort', 'cycle-detection'],
  realWorldScenario:
    'University course registration — before enrolling in Advanced Algorithms you must finish Data Structures, which requires Intro to CS. Can you ever graduate if some courses form a circular prerequisite chain?',
  vizType: 'CourseScheduleViz',
  keyIdea:
    'Detect cycles in a directed graph using DFS with three states: UNVISITED (0), VISITING (1, currently in recursion stack), VISITED (2, fully processed). A back edge to a VISITING node means a cycle exists.',
  approach: [
    'Build an adjacency list mapping each course to its prerequisites.',
    'Maintain a state array: 0 = unvisited, 1 = visiting, 2 = visited.',
    'Run DFS from each unvisited course node.',
    'If DFS reaches a node in state 1 (currently visiting) → cycle detected → return false.',
    'After fully processing a node mark it state 2; if no cycles → return true.',
  ],
  complexity: { time: 'O(V + E)', space: 'O(V + E)' },
  codeSnippet: `function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const state = new Array(numCourses).fill(0); // 0 unvisited, 1 visiting, 2 done

  for (const [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  function hasCycle(node: number): boolean {
    if (state[node] === 1) return true;
    if (state[node] === 2) return false;
    state[node] = 1;
    for (const neighbor of graph[node]) {
      if (hasCycle(neighbor)) return true;
    }
    state[node] = 2;
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  return true;
}`,
  hints: [
    'Think about what makes a course impossible to complete — circular dependencies.',
    'DFS with a "currently visiting" marker can detect back edges (cycles).',
  ],
  commonMistakes: [
    'Using only a visited boolean instead of three states — you miss the "currently in stack" check.',
    'Forgetting to also check courses with no prerequisites (they still need to be visited).',
  ],
};
