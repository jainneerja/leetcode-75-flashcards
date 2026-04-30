import { FlashCard } from '../../../types/card';

export const validSudoku: FlashCard = {
  id: 'lc-036-valid-sudoku',
  leetcodeNumber: 36,
  title: 'Valid Sudoku',
  pattern: 'Hash Set per Row / Col / Box',
  difficulty: 'Medium',
  category: 'Arrays & Hashing',
  tags: ['array', 'hash-set', 'matrix', '2d-array'],
  realWorldScenario:
    'You\'re a Sudoku referee handed a partially filled board. You need to verify whether the current state is valid — no repeated digits in any row, column, or 3×3 box — without needing the board to be fully solved yet.',
  vizType: 'ValidSudokuViz',
  keyIdea:
    'Maintain 27 sets: 9 for rows, 9 for columns, 9 for 3×3 boxes. In a single pass over filled cells, if any digit is already in its row/col/box set, the board is invalid.',
  approach: [
    'Create three 9-element arrays of Sets: rows, cols, boxes (box index = (r÷3)×3 + c÷3).',
    'Iterate every cell. Skip empty cells (\'.\').',
    'For filled cells, check if the digit is already in its row set, col set, or box set.',
    'If any check fails, return false. Otherwise add to all three sets and continue. Return true.',
  ],
  complexity: { time: 'O(81) = O(1) — fixed board size', space: 'O(81) = O(1)' },
  codeSnippet: `function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const cols = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;
      const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
        return false;
      }
      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIdx].add(val);
    }
  }
  return true;
}`,
  hints: [
    'Box index formula: Math.floor(r/3) * 3 + Math.floor(c/3) maps any (r,c) to 0-8.',
    'You only need to check each digit once per row, col, and box — not compare pairs.',
    'The board doesn\'t need to be solvable — just currently valid.',
  ],
  commonMistakes: [
    'Forgetting to validate boxes in addition to rows and columns.',
    'Using the wrong box index formula.',
    'Checking solved cells against an expected solution instead of just checking for duplicates.',
  ],
};
