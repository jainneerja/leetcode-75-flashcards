import { FlashCard } from '../../../types/card';

export const searchMatrix: FlashCard = {
  id: 'lc-74',
  leetcodeNumber: 74,
  title: 'Search a 2D Matrix',
  pattern: 'Binary Search (treat as flattened sorted array)',
  difficulty: 'Medium',
  category: 'Binary Search',
  tags: ['array', 'binary search', 'matrix'],
  realWorldScenario: 'Spreadsheet search — find a value in a sorted table where each row continues from the last',
  vizType: 'SearchMatrixViz',
  keyIdea: 'Treat m×n matrix as flat array of size m*n; mid index maps to matrix[mid/n][mid%n]',
  approach: [
    'Set lo = 0, hi = m * n - 1',
    'While lo <= hi, compute mid = Math.floor((lo + hi) / 2)',
    'Map mid to matrix[Math.floor(mid / n)][mid % n]',
    'Compare to target; narrow lo or hi as in standard binary search',
  ],
  complexity: { time: 'O(log(m*n))', space: 'O(1)' },
  codeSnippet: `function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0].length;
  let lo = 0, hi = m * n - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = matrix[Math.floor(mid / n)][mid % n];
    if (val === target) return true;
    else if (val < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}`,
  hints: [
    'The key insight: row i starts at index i*n in the flattened view',
    'mid / n gives the row, mid % n gives the column',
    'This only works when each row is sorted AND the first element of each row > last element of previous row',
  ],
  commonMistakes: [
    'Confusing this with LC240 (Search a 2D Matrix II) which has a different structure',
    'Using integer division incorrectly for row/col mapping',
  ],
};
