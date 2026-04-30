import { FlashCard } from '../../../types/card';

export const courseScheduleII: FlashCard = {
  id: 'lc-210-course-schedule-ii',
  leetcodeNumber: 210,
  title: 'Course Schedule II',
  pattern: 'Topological Sort (Kahn\'s Algorithm)',
  difficulty: 'Medium',
  category: 'Graphs',
  tags: ['graph', 'bfs', 'topological-sort', 'kahn'],
  realWorldScenario:
    'Graduation planner — produce a valid order to take all your courses so every prerequisite is completed before the course that requires it. If a cycle exists (impossible degree), return an empty array.',
  vizType: 'CourseScheduleIIViz',
  keyIdea:
    "Kahn's Algorithm: compute in-degree for every node, enqueue all 0-in-degree nodes, repeatedly dequeue and reduce neighbors' in-degrees, enqueuing any that reach 0. If the output order contains all nodes, no cycle exists.",
  approach: [
    'Build adjacency list and compute in-degree for every course.',
    'Add all courses with in-degree 0 to a queue (safe to take immediately).',
    'While queue is not empty: dequeue a course, add to result order.',
    "Decrement the in-degree of each of that course's dependents; enqueue any that drop to 0.",
    'If result length equals numCourses → valid order found; otherwise a cycle exists → return [].',
  ],
  complexity: { time: 'O(V + E)', space: 'O(V + E)' },
  codeSnippet: `function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order: number[] = [];
  while (queue.length) {
    const node = queue.shift()!;
    order.push(node);
    for (const neighbor of graph[node]) {
      if (--inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return order.length === numCourses ? order : [];
}`,
  hints: [
    'Start with courses that have no prerequisites — they can always be taken first.',
    'After taking a course, "unlock" the courses that were waiting on it.',
  ],
};
